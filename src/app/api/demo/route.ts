// src/app/api/demo/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { demoFormSchema } from '@/lib/validations';
import { prisma } from '@/lib/db';
import { ZodError } from 'zod';

// Simple in-memory rate limit (use Redis in production)
const submissionTimestamps = new Map<string, number[]>();

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const windowMs = 15 * 60 * 1000; // 15 minutes
  const maxRequests = 3;

  const timestamps = submissionTimestamps.get(ip) || [];
  const recent = timestamps.filter((t) => now - t < windowMs);

  if (recent.length >= maxRequests) return false;

  recent.push(now);
  submissionTimestamps.set(ip, recent);
  return true;
}

export async function POST(request: NextRequest) {
  try {
    // Rate limiting
    const ip = request.headers.get('x-forwarded-for') || request.headers.get('x-real-ip') || 'unknown';
    if (!checkRateLimit(ip)) {
      return NextResponse.json(
        { success: false, message: 'Too many requests. Please try again in 15 minutes.' },
        { status: 429 }
      );
    }

    // Parse and validate body
    const body = await request.json();
    const validatedData = demoFormSchema.parse(body);

    // Anti-spam: check for bot patterns (honeypot fields, suspicious patterns)
    if (validatedData.companyWebsite && validatedData.companyWebsite.includes('localhost')) {
      // Silently reject but appear successful
      return NextResponse.json({ success: true, message: 'Demo request received.' }, { status: 200 });
    }

    // Save to database
    const lead = await prisma.lead.create({
      data: {
        fullName: validatedData.fullName,
        workEmail: validatedData.workEmail,
        companyName: validatedData.companyName,
        companyWebsite: validatedData.companyWebsite || null,
        phoneNumber: validatedData.phoneNumber || null,
        industry: validatedData.industry || null,
        companySize: validatedData.companySize || null,
        message: validatedData.message || null,
        ipAddress: ip !== 'unknown' ? ip : null,
        source: 'website',
        status: 'NEW',
      },
    });

    // TODO: Send email notification (add SMTP config to .env)
    // await sendNotificationEmail(lead);

    return NextResponse.json(
      {
        success: true,
        message: 'Demo request submitted successfully.',
        data: { id: lead.id },
      },
      { status: 201 }
    );
  } catch (error) {
    if (error instanceof ZodError) {
      return NextResponse.json(
        {
          success: false,
          message: 'Validation failed. Please check your inputs.',
          errors: Object.fromEntries(
            error.issues.map((e) => [e.path.join('.'), [e.message]])
          ),
        },
        { status: 422 }
      );
    }

    console.error('[API/demo] Error:', error);

    return NextResponse.json(
      { success: false, message: 'An unexpected error occurred. Please try again.' },
      { status: 500 }
    );
  }
}

export async function GET(request: NextRequest) {
  // Admin-only endpoint to list leads
  const authHeader = request.headers.get('authorization');
  const adminSecret = process.env.ADMIN_SECRET;

  if (!adminSecret || authHeader !== `Bearer ${adminSecret}`) {
    return NextResponse.json({ success: false, message: 'Unauthorized' }, { status: 401 });
  }

  try {
    const url = new URL(request.url);
    const page = parseInt(url.searchParams.get('page') || '1');
    const limit = parseInt(url.searchParams.get('limit') || '20');
    const skip = (page - 1) * limit;

    const [leads, total] = await Promise.all([
      prisma.lead.findMany({
        orderBy: { createdAt: 'desc' },
        skip,
        take: limit,
      }),
      prisma.lead.count(),
    ]);

    return NextResponse.json({
      success: true,
      data: { leads, total, page, totalPages: Math.ceil(total / limit) },
    });
  } catch (error) {
    return NextResponse.json({ success: false, message: 'Failed to fetch leads' }, { status: 500 });
  }
}
