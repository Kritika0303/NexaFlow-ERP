'use client';

// src/components/industries/IndustriesPage.tsx
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Factory, ShoppingBag, Truck, Briefcase, Check, ArrowRight } from 'lucide-react';

const industries = [
  {
    id: 'manufacturing',
    icon: Factory,
    name: 'Manufacturing',
    headline: 'From shop floor to boardroom — unified.',
    description: 'Manufacturing businesses face unique ERP challenges: managing complex bills of materials, coordinating production schedules, controlling quality across batches, and forecasting raw material requirements accurately. NexaFlow is purpose-built for all of it.',
    workflows: [
      'Production planning and scheduling',
      'Bill of Materials (BOM) and routings management',
      'Work-in-progress (WIP) tracking',
      'Quality control checkpoints and non-conformance reporting',
      'Capacity planning and machine utilisation',
      'Shop floor data collection via mobile or kiosk',
    ],
    benefits: [
      '31% reduction in production costs on average',
      'Real-time OEE dashboards across all production lines',
      'Automated maintenance alerts reduce downtime by 24%',
      'Seamless integration with MES and SCADA systems',
    ],
    color: 'from-slate-900 to-slate-700',
    light: 'bg-slate-50',
    border: 'border-slate-200',
    accent: 'text-slate-700',
    badge: 'bg-slate-100 text-slate-600',
  },
  {
    id: 'retail',
    icon: ShoppingBag,
    name: 'Retail & E-commerce',
    headline: 'Unified commerce, exceptional experiences.',
    description: 'Modern retail requires a platform that bridges physical and digital channels seamlessly. NexaFlow gives retailers a single view of inventory, customers, and orders — whether in-store, online, or through marketplace channels.',
    workflows: [
      'Omnichannel inventory visibility and fulfilment',
      'Loyalty programmes and promotion management',
      'POS integration and sales order management',
      'Seasonal demand planning and allocation',
      'Returns management and exchange workflows',
      'Supplier replenishment and vendor-managed inventory',
    ],
    benefits: [
      '45% faster inventory turnover for retail customers',
      'Unified customer view across all channels',
      'AI-powered seasonal demand forecasting',
      'Real-time margin tracking per product and category',
    ],
    color: 'from-brand-900 to-brand-700',
    light: 'bg-brand-50',
    border: 'border-brand-200',
    accent: 'text-brand-700',
    badge: 'bg-brand-100 text-brand-600',
  },
  {
    id: 'distribution',
    icon: Truck,
    name: 'Distribution & Logistics',
    headline: 'Move goods faster. Ship smarter.',
    description: 'Distribution companies operate on tight margins and complex logistics networks. NexaFlow optimises the flow of goods from supplier to end customer — with real-time tracking, automated carrier selection, and warehouse management that scales.',
    workflows: [
      'Multi-warehouse and multi-carrier management',
      'Route optimisation and load planning',
      'Cross-docking and transfer order management',
      'Returns processing and reverse logistics',
      'Customer-specific pricing and delivery terms',
      'Real-time shipment tracking and customer notifications',
    ],
    benefits: [
      '28% improvement in on-time delivery rates',
      'Carrier cost reduction through automated rate shopping',
      'Error rate reduction of 91% with barcode-driven fulfilment',
      'Full EDI compliance with trading partners',
    ],
    color: 'from-emerald-900 to-emerald-700',
    light: 'bg-emerald-50',
    border: 'border-emerald-200',
    accent: 'text-emerald-700',
    badge: 'bg-emerald-100 text-emerald-600',
  },
  {
    id: 'services',
    icon: Briefcase,
    name: 'Professional Services',
    headline: 'Deliver projects profitably. Every time.',
    description: 'Professional services firms — consultancies, law firms, agencies, IT service providers — need an ERP that understands billable time, project profitability, and resource utilisation. NexaFlow is built precisely for that.',
    workflows: [
      'Project setup, budgeting, and milestone tracking',
      'Consultant and resource allocation planning',
      'Time and expense capture (web and mobile)',
      'Client invoicing with retainer and milestone billing',
      'Engagement profitability analysis',
      'Revenue forecasting by consultant and project type',
    ],
    benefits: [
      '40% more billable hours captured per engagement',
      'Real-time project profitability across all clients',
      'Reduced invoice disputes with detailed timesheets',
      'Consultant utilisation dashboards for every manager',
    ],
    color: 'from-violet-900 to-violet-700',
    light: 'bg-violet-50',
    border: 'border-violet-200',
    accent: 'text-violet-700',
    badge: 'bg-violet-100 text-violet-600',
  },
];

export function IndustriesPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 mesh-bg overflow-hidden">
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block px-3 py-1.5 rounded-full bg-brand-500/20 border border-brand-500/30 text-brand-300 text-xs font-semibold mb-6"
          >
            Industry Solutions
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-6xl font-bold text-white mb-6"
          >
            Built for the way<br />
            <span className="gradient-text">your industry works.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-slate-300 text-xl max-w-2xl mx-auto"
          >
            NexaFlow adapts to your sector's unique workflows, compliance needs, and business rhythms — not the other way around.
          </motion.p>
        </div>
      </section>

      {/* Industry details */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-28">
          {industries.map(({ id, icon: Icon, name, headline, description, workflows, benefits, color, light, border, accent, badge }, i) => (
            <motion.div
              key={id}
              id={id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.6 }}
              className={`grid lg:grid-cols-2 gap-14 items-start`}
            >
              {/* Visual panel */}
              <div className={i % 2 === 1 ? 'lg:order-2' : ''}>
                <div className={`relative rounded-3xl bg-gradient-to-br ${color} p-10 overflow-hidden`}>
                  <div className="absolute inset-0 opacity-10">
                    <div className="absolute right-0 bottom-0 w-64 h-64 border-2 border-white rounded-full translate-x-1/3 translate-y-1/3" />
                  </div>
                  <div className="relative">
                    <div className="w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center mb-6">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <h2 className="text-3xl font-bold text-white mb-2">{name}</h2>
                    <p className="text-white/70 mb-8">{headline}</p>

                    <div className="space-y-3">
                      {benefits.map((b) => (
                        <div key={b} className="flex items-start gap-2.5">
                          <div className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center mt-0.5 flex-shrink-0">
                            <Check className="w-3 h-3 text-white" />
                          </div>
                          <span className="text-white/80 text-sm">{b}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className={i % 2 === 1 ? 'lg:order-1' : ''}>
                <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold mb-4 ${badge}`}>
                  {name}
                </span>
                <h3 className="text-3xl font-bold text-slate-900 mb-4">{headline}</h3>
                <p className="text-slate-600 leading-relaxed mb-8">{description}</p>

                <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-4">Core workflows supported:</h4>
                <div className="space-y-2.5 mb-8">
                  {workflows.map((w) => (
                    <div key={w} className={`flex items-center gap-2.5 p-3 rounded-xl ${light} border ${border}`}>
                      <div className={`w-1.5 h-1.5 rounded-full flex-shrink-0 bg-current ${accent}`} />
                      <span className="text-sm text-slate-700">{w}</span>
                    </div>
                  ))}
                </div>

                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-brand-500 text-white font-semibold rounded-xl hover:bg-brand-600 transition-colors text-sm"
                >
                  Request Industry Demo
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </>
  );
}
