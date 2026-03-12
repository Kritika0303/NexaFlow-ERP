// src/app/contact/page.tsx
import type { Metadata } from 'next';
import { ContactPage } from '@/components/contact/ContactPage';

export const metadata: Metadata = {
  title: 'Request a Demo',
  description: 'Book a personalised NexaFlow ERP demo. See how we can transform your business operations in 30 minutes.',
};

export default function Contact() {
  return <ContactPage />;
}
