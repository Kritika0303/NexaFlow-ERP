// src/app/industries/page.tsx
import type { Metadata } from 'next';
import { IndustriesPage } from '@/components/industries/IndustriesPage';
import { CTABanner } from '@/components/home/CTABanner';

export const metadata: Metadata = {
  title: 'Industries',
  description: 'NexaFlow ERP serves Manufacturing, Retail, Distribution, and Professional Services with industry-specific workflows and compliance tools.',
};

export default function Industries() {
  return (
    <>
      <IndustriesPage />
      <CTABanner />
    </>
  );
}
