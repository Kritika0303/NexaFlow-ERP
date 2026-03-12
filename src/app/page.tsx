// src/app/page.tsx
import { HeroSection } from '@/components/home/HeroSection';
import { TrustSection } from '@/components/home/TrustSection';
import { BenefitsSection } from '@/components/home/BenefitsSection';
import { SolutionsSection } from '@/components/home/SolutionsSection';
import { IndustriesSection } from '@/components/home/IndustriesSection';
import { AISection } from '@/components/home/AISection';
import { IntegrationsSection } from '@/components/home/IntegrationsSection';
import { SecuritySection } from '@/components/home/SecuritySection';
import { TestimonialsSection } from '@/components/home/TestimonialsSection';
import { FAQSection } from '@/components/home/FAQSection';
import { CTABanner } from '@/components/home/CTABanner';

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <TrustSection />
      <BenefitsSection />
      <SolutionsSection />
      <IndustriesSection />
      <AISection />
      <IntegrationsSection />
      <SecuritySection />
      <TestimonialsSection />
      <FAQSection />
      <CTABanner />
    </>
  );
}
