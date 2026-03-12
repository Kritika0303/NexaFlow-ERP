// src/lib/validations.ts
import { z } from 'zod';

export const demoFormSchema = z.object({
  fullName: z
    .string()
    .min(2, 'Full name must be at least 2 characters')
    .max(100, 'Full name must be less than 100 characters')
    .regex(/^[a-zA-Z\s'-]+$/, 'Full name can only contain letters, spaces, hyphens, and apostrophes'),

  workEmail: z
    .string()
    .email('Please enter a valid email address')
    .refine(
      (email) => !['gmail.com', 'yahoo.com', 'hotmail.com', 'outlook.com', 'aol.com'].includes(email.split('@')[1]),
      'Please use your work email address'
    ),

  companyName: z
    .string()
    .min(2, 'Company name must be at least 2 characters')
    .max(200, 'Company name must be less than 200 characters'),

  companyWebsite: z
    .string()
    .url('Please enter a valid URL (e.g., https://yourcompany.com)')
    .optional()
    .or(z.literal('')),

  phoneNumber: z
    .string()
    .regex(/^[+]?[\d\s\-().]{7,20}$/, 'Please enter a valid phone number')
    .optional()
    .or(z.literal('')),

  industry: z
    .string()
    .optional(),

  companySize: z
    .string()
    .optional(),

  message: z
    .string()
    .max(2000, 'Message must be less than 2000 characters')
    .optional()
    .or(z.literal('')),
});

export type DemoFormSchema = z.infer<typeof demoFormSchema>;

export const INDUSTRY_OPTIONS = [
  'Manufacturing',
  'Retail & E-commerce',
  'Distribution & Logistics',
  'Professional Services',
  'Healthcare',
  'Finance & Banking',
  'Technology',
  'Education',
  'Real Estate',
  'Other',
] as const;

export const COMPANY_SIZE_OPTIONS = [
  '1–10 employees',
  '11–50 employees',
  '51–200 employees',
  '201–500 employees',
  '501–1,000 employees',
  '1,000+ employees',
] as const;
