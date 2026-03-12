'use client';

// src/components/home/FAQSection.tsx
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { SectionHeader } from '@/components/ui/SectionHeader';

const faqs = [
  {
    question: 'How long does implementation take?',
    answer: 'Implementation timelines vary based on company size and the modules selected. Most SME deployments go live in 4–8 weeks. Mid-market customers typically complete full rollouts in 8–16 weeks. Enterprise configurations with deep customisation and data migration can take 3–6 months. Our dedicated implementation team works with you every step of the way — from discovery and configuration to training and hypercare.',
  },
  {
    question: 'Can NexaFlow ERP integrate with our existing tools?',
    answer: 'Yes — NexaFlow connects to 200+ third-party tools out of the box, including Stripe, Shopify, Salesforce, HubSpot, Slack, Microsoft Teams, and most major banking and logistics systems. For custom integrations, our open REST API and webhook engine enable you to connect any system your business relies on. Our integration marketplace is updated regularly with new connectors.',
  },
  {
    question: 'Is NexaFlow ERP suitable for SMEs as well as enterprises?',
    answer: "Absolutely. NexaFlow is designed to scale with your business. Our Starter plan is purpose-built for growing companies of 10–50 people who need their first true ERP without enterprise-level complexity. Our Growth and Enterprise tiers serve mid-market and large organisations requiring advanced automation, multi-entity support, and custom workflows. Customers start on any tier and upgrade seamlessly as they grow.",
  },
  {
    question: 'How secure is the platform?',
    answer: 'Security is foundational to NexaFlow — not an afterthought. The platform is ISO 27001 certified, SOC 2 Type II attested, and GDPR ready. All data is encrypted at rest (AES-256) and in transit (TLS 1.3). We maintain role-based access controls at the field level, immutable audit logs, automated daily backups with 30-day point-in-time recovery, and 99.9% uptime SLAs across geographically redundant infrastructure.',
  },
  {
    question: 'Is onboarding and training included?',
    answer: 'Yes. All plans include access to our Help Centre, video training library, and live webinar sessions. Growth and Enterprise plans include dedicated onboarding support, a Customer Success Manager, and live training sessions for your team. Enterprise customers receive white-glove implementation management, executive business reviews, and priority access to our solutions engineering team for complex configuration needs.',
  },
  {
    question: 'Can we trial NexaFlow before committing?',
    answer: 'Yes — we offer a guided 14-day free trial on our Starter and Growth plans, giving you access to a pre-configured sandbox environment populated with sample data. For Enterprise evaluations, we offer a tailored proof-of-concept engagement where our team configures a demo environment mirroring your specific business processes and data model.',
  },
];

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="section-pad bg-surface-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="FAQ"
          title="Questions?"
          titleHighlight="We have answers."
          description="Everything you need to know before taking NexaFlow for a spin."
          className="mb-12"
        />

        <div className="space-y-3">
          {faqs.map(({ question, answer }, i) => (
            <motion.div
              key={question}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="bg-white rounded-2xl border border-slate-100 overflow-hidden shadow-sm"
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between px-6 py-5 text-left hover:bg-slate-50 transition-colors"
              >
                <span className="font-semibold text-slate-900 pr-4">{question}</span>
                <ChevronDown
                  className={`w-5 h-5 text-brand-500 flex-shrink-0 transition-transform duration-300 ${
                    openIndex === i ? 'rotate-180' : ''
                  }`}
                />
              </button>
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <div className="px-6 pb-5 pt-0">
                      <div className="border-t border-slate-100 pt-4">
                        <p className="text-slate-600 text-sm leading-relaxed">{answer}</p>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
