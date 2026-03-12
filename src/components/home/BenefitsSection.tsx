'use client';

// src/components/home/BenefitsSection.tsx
import { motion } from 'framer-motion';
import { Layers, BarChart3, Brain, Shield, Plug, Workflow } from 'lucide-react';
import { SectionHeader } from '@/components/ui/SectionHeader';

const benefits = [
  {
    icon: Layers,
    title: 'Unified Operations',
    description: 'Break down departmental silos. Every team — finance, ops, HR, sales — works from a single source of truth, eliminating duplicate data and manual reconciliation.',
    color: 'brand',
    gradient: 'from-brand-50 to-blue-50',
    iconBg: 'bg-brand-100',
    iconColor: 'text-brand-600',
  },
  {
    icon: BarChart3,
    title: 'Real-time Analytics',
    description: 'Live dashboards and configurable reports give decision-makers instant visibility across every function. From cash flow to headcount — your data, your way.',
    color: 'violet',
    gradient: 'from-violet-50 to-purple-50',
    iconBg: 'bg-violet-100',
    iconColor: 'text-violet-600',
  },
  {
    icon: Brain,
    title: 'AI-Powered Forecasting',
    description: 'Our embedded AI engine analyses historical data and market signals to surface accurate revenue, inventory, and workforce forecasts — before problems arise.',
    color: 'emerald',
    gradient: 'from-emerald-50 to-teal-50',
    iconBg: 'bg-emerald-100',
    iconColor: 'text-emerald-600',
  },
  {
    icon: Shield,
    title: 'Secure Cloud Infrastructure',
    description: 'Built on enterprise-grade cloud infrastructure with ISO 27001 compliance, AES-256 encryption, role-based access controls, and automated daily backups.',
    color: 'rose',
    gradient: 'from-rose-50 to-red-50',
    iconBg: 'bg-rose-100',
    iconColor: 'text-rose-600',
  },
  {
    icon: Plug,
    title: 'Easy Integrations',
    description: 'Connect NexaFlow to 200+ tools in minutes — from payment gateways and e-commerce platforms to shipping providers and legacy systems via our open API.',
    color: 'amber',
    gradient: 'from-amber-50 to-orange-50',
    iconBg: 'bg-amber-100',
    iconColor: 'text-amber-600',
  },
  {
    icon: Workflow,
    title: 'Scalable Workflows',
    description: 'Design and automate approval flows, notifications, and business processes with our no-code workflow builder. Scale from 10 users to 10,000 without re-architecting.',
    color: 'cyan',
    gradient: 'from-cyan-50 to-sky-50',
    iconBg: 'bg-cyan-100',
    iconColor: 'text-cyan-600',
  },
];

export function BenefitsSection() {
  return (
    <section className="section-pad bg-surface-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Why NexaFlow"
          title="Everything your business needs,"
          titleHighlight="nothing it doesn't."
          description="Purpose-built for modern enterprises that need speed, accuracy, and intelligence — not just another software tool."
          className="mb-16"
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map(({ icon: Icon, title, description, gradient, iconBg, iconColor }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              className={`group relative bg-gradient-to-br ${gradient} rounded-3xl p-7 border border-white hover:border-transparent hover:shadow-card-hover transition-all duration-300 card-hover overflow-hidden`}
            >
              {/* Hover glow */}
              <div className="absolute inset-0 bg-white/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-3xl" />

              <div className="relative">
                <div className={`w-12 h-12 ${iconBg} rounded-2xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className={`w-6 h-6 ${iconColor}`} />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-3">{title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
