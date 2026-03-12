'use client';

// src/components/pricing/PricingPage.tsx
import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Check, X, ArrowRight, Zap, Building2, Rocket } from 'lucide-react';

const plans = [
  {
    id: 'starter',
    icon: Rocket,
    name: 'Starter',
    monthly: 299,
    annual: 249,
    description: 'Everything a growing business needs to replace spreadsheets and get real control.',
    cta: 'Start Free Trial',
    badge: null,
    highlighted: false,
    color: 'slate',
    users: 'Up to 10 users',
    features: [
      'Finance & Accounting module',
      'Inventory management (1 warehouse)',
      'Basic HR & Leave management',
      'Standard reporting & dashboards',
      'Up to 5 integrations',
      'Email & chat support',
      '14-day free trial',
      '99.9% uptime SLA',
    ],
    notIncluded: [
      'Multi-entity / multi-currency',
      'AI forecasting',
      'Advanced workflow builder',
      'Custom API access',
      'Dedicated CSM',
    ],
  },
  {
    id: 'growth',
    icon: Zap,
    name: 'Growth',
    monthly: 799,
    annual: 649,
    description: 'For scaling businesses that need the full ERP stack and intelligent automation.',
    cta: 'Start Free Trial',
    badge: 'Most Popular',
    highlighted: true,
    color: 'brand',
    users: 'Up to 50 users',
    features: [
      'All Starter features',
      'All 6 ERP modules unlocked',
      'Multi-warehouse inventory',
      'Multi-currency & multi-tax',
      'AI-powered forecasting',
      'No-code workflow builder',
      'Up to 50 integrations',
      'Unlimited custom reports',
      'Priority support (4hr SLA)',
      'Onboarding specialist',
    ],
    notIncluded: [
      'Multi-entity / subsidiary management',
      'White-glove implementation',
      'Dedicated CSM',
    ],
  },
  {
    id: 'enterprise',
    icon: Building2,
    name: 'Enterprise',
    monthly: null,
    annual: null,
    description: 'Custom-built for complex organisations that need scale, security, and partnership.',
    cta: 'Contact Sales',
    badge: 'Custom Pricing',
    highlighted: false,
    color: 'slate',
    users: 'Unlimited users',
    features: [
      'All Growth features',
      'Multi-entity & subsidiary management',
      'Unlimited integrations & custom API',
      'Custom workflow & automation rules',
      'White-glove implementation',
      'Dedicated Customer Success Manager',
      'Executive business reviews',
      'Custom SLAs (up to 99.99% uptime)',
      'On-premise or private cloud deployment',
      'Advanced security controls & SSO',
      'Priority engineering escalation',
    ],
    notIncluded: [],
  },
];

const comparisonFeatures = [
  { label: 'Users', starter: 'Up to 10', growth: 'Up to 50', enterprise: 'Unlimited' },
  { label: 'Finance & Accounting', starter: true, growth: true, enterprise: true },
  { label: 'Inventory Management', starter: '1 warehouse', growth: 'Multi-warehouse', enterprise: 'Multi-warehouse' },
  { label: 'HR & Payroll', starter: 'Basic', growth: 'Full', enterprise: 'Full + Custom' },
  { label: 'Procurement', starter: false, growth: true, enterprise: true },
  { label: 'Sales & CRM', starter: false, growth: true, enterprise: true },
  { label: 'Billing & Subscriptions', starter: false, growth: true, enterprise: true },
  { label: 'AI Forecasting', starter: false, growth: true, enterprise: true },
  { label: 'Multi-currency', starter: false, growth: true, enterprise: true },
  { label: 'Multi-entity', starter: false, growth: false, enterprise: true },
  { label: 'API Access', starter: false, growth: 'Standard', enterprise: 'Full + Webhooks' },
  { label: 'Integrations', starter: 'Up to 5', growth: 'Up to 50', enterprise: 'Unlimited' },
  { label: 'Custom Reports', starter: '5 reports', growth: 'Unlimited', enterprise: 'Unlimited' },
  { label: 'Support', starter: 'Email & Chat', growth: 'Priority 4hr SLA', enterprise: 'Dedicated CSM' },
  { label: 'Uptime SLA', starter: '99.9%', growth: '99.9%', enterprise: 'Up to 99.99%' },
];

export function PricingPage() {
  const [annual, setAnnual] = useState(true);

  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 mesh-bg overflow-hidden">
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl font-bold text-white mb-5"
          >
            Transparent pricing.<br />
            <span className="gradient-text">No surprises.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-slate-300 text-xl max-w-xl mx-auto mb-8"
          >
            Choose the plan that fits your business today. Upgrade anytime as you grow.
          </motion.p>

          {/* Billing toggle */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-3 bg-white/10 rounded-2xl p-1.5 border border-white/20"
          >
            <button
              onClick={() => setAnnual(false)}
              className={`px-5 py-2 rounded-xl text-sm font-semibold transition-all ${
                !annual ? 'bg-white text-slate-900 shadow-sm' : 'text-white/70 hover:text-white'
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setAnnual(true)}
              className={`px-5 py-2 rounded-xl text-sm font-semibold transition-all flex items-center gap-2 ${
                annual ? 'bg-white text-slate-900 shadow-sm' : 'text-white/70 hover:text-white'
              }`}
            >
              Annual
              <span className="px-2 py-0.5 rounded-full bg-emerald-500 text-white text-[10px] font-bold">Save 17%</span>
            </button>
          </motion.div>
        </div>
      </section>

      {/* Pricing cards */}
      <section className="pb-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-6 -mt-8">
            {plans.map(({ id, icon: Icon, name, monthly, annual: annualPrice, description, cta, badge, highlighted, users, features, notIncluded }, i) => (
              <motion.div
                key={id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className={`relative rounded-3xl p-8 border-2 flex flex-col ${
                  highlighted
                    ? 'border-brand-500 shadow-brand-lg bg-brand-50'
                    : 'border-slate-200 bg-white shadow-card'
                }`}
              >
                {badge && (
                  <div className={`absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-full text-xs font-bold whitespace-nowrap ${
                    highlighted ? 'bg-brand-500 text-white' : 'bg-slate-900 text-white'
                  }`}>
                    {badge}
                  </div>
                )}

                <div className="flex items-center gap-3 mb-4">
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${highlighted ? 'bg-brand-500' : 'bg-slate-100'}`}>
                    <Icon className={`w-5 h-5 ${highlighted ? 'text-white' : 'text-slate-600'}`} />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900">{name}</h3>
                </div>

                <div className="mb-4">
                  {monthly !== null ? (
                    <div className="flex items-end gap-2">
                      <span className="text-4xl font-bold text-slate-900">
                        ${annual ? annualPrice : monthly}
                      </span>
                      <span className="text-slate-500 mb-1">/mo</span>
                    </div>
                  ) : (
                    <div className="text-3xl font-bold text-slate-900">Custom</div>
                  )}
                  {monthly !== null && (
                    <p className="text-xs text-slate-400 mt-1">
                      {annual ? `Billed annually ($${(annualPrice! * 12).toLocaleString()}/yr)` : 'Billed monthly'}
                    </p>
                  )}
                </div>

                <p className="text-slate-600 text-sm mb-2">{description}</p>
                <p className="text-xs font-semibold text-slate-500 mb-6">{users}</p>

                <Link
                  href={id === 'enterprise' ? '/contact?plan=enterprise' : '/contact'}
                  className={`block text-center px-6 py-3.5 rounded-2xl font-bold text-sm mb-8 transition-all ${
                    highlighted
                      ? 'bg-brand-500 text-white hover:bg-brand-600 shadow-brand'
                      : 'border-2 border-slate-200 text-slate-700 hover:border-brand-400 hover:text-brand-600'
                  }`}
                >
                  {cta}
                  {cta !== 'Contact Sales' && <span className="ml-2">→</span>}
                </Link>

                <div className="space-y-2.5 flex-1">
                  {features.map((f) => (
                    <div key={f} className="flex items-start gap-2.5">
                      <div className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 ${highlighted ? 'bg-brand-500' : 'bg-emerald-100'}`}>
                        <Check className={`w-3 h-3 ${highlighted ? 'text-white' : 'text-emerald-600'}`} />
                      </div>
                      <span className="text-sm text-slate-700">{f}</span>
                    </div>
                  ))}
                  {notIncluded.map((f) => (
                    <div key={f} className="flex items-start gap-2.5 opacity-40">
                      <div className="w-5 h-5 rounded-full bg-slate-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <X className="w-3 h-3 text-slate-400" />
                      </div>
                      <span className="text-sm text-slate-500">{f}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Feature comparison table */}
      <section className="py-16 bg-surface-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-slate-900 text-center mb-10">Full Feature Comparison</h2>
          <div className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-card">
            {/* Header */}
            <div className="grid grid-cols-4 bg-slate-50 border-b border-slate-200">
              <div className="px-6 py-4 text-sm font-semibold text-slate-500">Feature</div>
              {['Starter', 'Growth', 'Enterprise'].map((p) => (
                <div key={p} className={`px-6 py-4 text-sm font-bold text-center ${p === 'Growth' ? 'text-brand-600 bg-brand-50' : 'text-slate-900'}`}>{p}</div>
              ))}
            </div>

            {comparisonFeatures.map(({ label, starter, growth, enterprise }, i) => (
              <div key={label} className={`grid grid-cols-4 border-b border-slate-100 ${i % 2 === 0 ? 'bg-white' : 'bg-slate-50/50'}`}>
                <div className="px-6 py-3.5 text-sm text-slate-700 font-medium">{label}</div>
                {[starter, growth, enterprise].map((val, j) => (
                  <div key={j} className={`px-6 py-3.5 text-center text-sm ${j === 1 ? 'bg-brand-50/50' : ''}`}>
                    {val === true ? (
                      <Check className="w-4 h-4 text-emerald-500 mx-auto" />
                    ) : val === false ? (
                      <X className="w-4 h-4 text-slate-300 mx-auto" />
                    ) : (
                      <span className="text-slate-600">{val}</span>
                    )}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
