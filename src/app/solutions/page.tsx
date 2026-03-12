// src/app/solutions/page.tsx
import type { Metadata } from 'next';
import { SolutionsHero } from '@/components/solutions/SolutionsHero';
import { ModuleDetails } from '@/components/solutions/ModuleDetails';
import { CTABanner } from '@/components/home/CTABanner';

export const metadata: Metadata = {
  title: 'ERP Solutions',
  description: 'Explore NexaFlow ERP modules: Finance, Inventory, HR, Procurement, Sales CRM, and Billing — all in one platform.',
};

export default function SolutionsPage() {
  return (
    <>
      <SolutionsHero />
      <ModuleDetails />
      <CTABanner />
    </>
  );
}
