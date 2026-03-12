'use client';

// src/components/home/IndustriesSection.tsx
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Factory, ShoppingBag, Truck, Briefcase, ArrowRight } from 'lucide-react';
import { SectionHeader } from '@/components/ui/SectionHeader';

const industries = [
  {
    icon: Factory,
    name: 'Manufacturing',
    description: 'Optimize production planning, manage bills of materials, track work-in-progress, and reduce waste with real-time shop floor visibility.',
    highlights: ['Production scheduling', 'BOM & routing management', 'Quality control', 'Capacity planning'],
    color: 'from-slate-900 to-slate-700',
    stat: '31%',
    statLabel: 'reduction in production costs',
    href: '/industries#manufacturing',
  },
  {
    icon: ShoppingBag,
    name: 'Retail',
    description: 'Unify in-store and online channels, automate replenishment, manage promotions, and deliver the personalized customer experience modern shoppers expect.',
    highlights: ['Omnichannel inventory', 'Loyalty & promotions', 'POS integration', 'Demand forecasting'],
    color: 'from-brand-900 to-brand-700',
    stat: '45%',
    statLabel: 'faster inventory turnover',
    href: '/industries#retail',
  },
  {
    icon: Truck,
    name: 'Distribution',
    description: 'Automate order fulfillment, streamline carrier management, optimise warehouse layouts, and reduce delivery errors across complex distribution networks.',
    highlights: ['Route optimization', 'Carrier management', 'Returns processing', 'Cross-docking support'],
    color: 'from-emerald-900 to-emerald-700',
    stat: '28%',
    statLabel: 'improvement in on-time delivery',
    href: '/industries#distribution',
  },
  {
    icon: Briefcase,
    name: 'Professional Services',
    description: 'Track project profitability, manage consultant utilisation, automate client invoicing, and give principals real-time insight into every engagement.',
    highlights: ['Project & time tracking', 'Resource allocation', 'Client billing', 'Profitability analysis'],
    color: 'from-violet-900 to-violet-700',
    stat: '40%',
    statLabel: 'more billable hours captured',
    href: '/industries#services',
  },
];

export function IndustriesSection() {
  return (
    <section className="section-pad bg-surface-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="By Industry"
          title="Built for the way"
          titleHighlight="your industry works."
          description="NexaFlow ERP adapts to your sector's unique workflows — not the other way around. Purpose-built templates and compliance tools for every vertical."
          className="mb-14"
        />

        <div className="grid md:grid-cols-2 gap-6">
          {industries.map(({ icon: Icon, name, description, highlights, color, stat, statLabel, href }, i) => (
            <motion.div
              key={name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className={`group relative bg-gradient-to-br ${color} rounded-3xl p-8 overflow-hidden hover:-translate-y-1 transition-transform duration-300`}
            >
              {/* Background pattern */}
              <div className="absolute inset-0 opacity-5">
                <div className="absolute right-0 bottom-0 w-48 h-48 border-2 border-white rounded-full translate-x-1/3 translate-y-1/3" />
                <div className="absolute right-12 bottom-12 w-32 h-32 border border-white rounded-full" />
              </div>

              <div className="relative">
                {/* Icon */}
                <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center mb-6 group-hover:bg-white/20 transition-colors">
                  <Icon className="w-7 h-7 text-white" />
                </div>

                {/* Name & description */}
                <h3 className="text-2xl font-bold text-white mb-3">{name}</h3>
                <p className="text-white/70 text-sm leading-relaxed mb-6">{description}</p>

                {/* Highlights */}
                <ul className="space-y-2 mb-8">
                  {highlights.map((h) => (
                    <li key={h} className="flex items-center gap-2 text-white/80 text-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-white/60 flex-shrink-0" />
                      {h}
                    </li>
                  ))}
                </ul>

                {/* Stat */}
                <div className="flex items-end justify-between">
                  <div>
                    <p className="text-3xl font-bold text-white">{stat}</p>
                    <p className="text-white/60 text-xs">{statLabel}</p>
                  </div>
                  <Link
                    href={href}
                    className="inline-flex items-center gap-1.5 px-4 py-2 bg-white/10 hover:bg-white/20 text-white text-sm font-semibold rounded-xl border border-white/20 transition-colors"
                  >
                    Learn more
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            href="/industries"
            className="inline-flex items-center gap-2 px-6 py-3 border-2 border-brand-300 text-brand-600 font-semibold rounded-2xl hover:bg-brand-50 transition-colors"
          >
            View all industries
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
