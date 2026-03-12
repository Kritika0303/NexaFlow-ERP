// src/app/pricing/page.tsx
import type { Metadata } from 'next';
import { PricingPage } from '@/components/pricing/PricingPage';
import { CTABanner } from '@/components/home/CTABanner';
import { FAQSection } from '@/components/home/FAQSection';

export const metadata: Metadata = {
  title: 'Pricing',
  description: 'Transparent pricing for every stage of your business. Starter, Growth, and Enterprise plans — with a 14-day free trial.',
};

export default function Pricing() {
  return (
    <>
      <PricingPage />
      <FAQSection />
      <CTABanner />
    </>
  );
}
