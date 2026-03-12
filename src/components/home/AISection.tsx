'use client';

// src/components/home/AISection.tsx
import { motion } from 'framer-motion';
import { Brain, Activity, FileBarChart, Workflow, Bell, ArrowRight } from 'lucide-react';
import Link from 'next/link';

const aiFeatures = [
  {
    icon: Brain,
    title: 'Intelligent Forecasting',
    description: 'Our ML models process years of historical transactional data alongside external market signals to produce revenue, demand, and cashflow forecasts with up to 94% accuracy.',
  },
  {
    icon: Activity,
    title: 'Anomaly Detection',
    description: 'NexaFlow continuously monitors thousands of data points, alerting your team the moment it detects irregular spending patterns, unusual inventory movements, or suspicious system activity.',
  },
  {
    icon: FileBarChart,
    title: 'Automated Reporting',
    description: "Schedule and auto-distribute board reports, regulatory filings, and management packs in any format. What once took days of spreadsheet work now happens at midnight — automatically.",
  },
  {
    icon: Workflow,
    title: 'Workflow Automation',
    description: 'Build multi-step approval flows, trigger actions based on business events, and let NexaFlow handle repetitive tasks. Zero code required — just drag, configure, and deploy.',
  },
  {
    icon: Bell,
    title: 'Smart Alerts & Nudges',
    description: 'Proactive, context-aware alerts surface only what matters. No noise — just timely signals that help your team act before small issues become big problems.',
  },
];

export function AISection() {
  return (
    <section className="section-pad mesh-bg relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full border border-brand-500/10" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full border border-brand-400/10" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-brand-600/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent-500/10 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Copy */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-4"
            >
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-accent-500/20 border border-accent-500/30 text-accent-400 text-xs font-semibold">
                <Brain className="w-3.5 h-3.5" />
                AI & Automation
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight"
            >
              Your ERP that
              <br />
              <span className="gradient-text">thinks ahead.</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-slate-300 text-lg leading-relaxed mb-8"
            >
              NexaFlow's embedded AI doesn't just process data — it learns your business patterns, predicts risks, and recommends actions. Intelligence at every layer, not a bolt-on afterthought.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-7 py-3.5 bg-brand-500 hover:bg-brand-400 text-white font-semibold rounded-2xl transition-colors"
              >
                See AI in Action
                <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>

            {/* AI stat badges */}
            <div className="mt-10 grid grid-cols-2 gap-3">
              {[
                { value: '94%', label: 'Forecast accuracy' },
                { value: '8×', label: 'Faster report generation' },
                { value: '60%', label: 'Reduction in manual tasks' },
                { value: '<2min', label: 'Average alert response' },
              ].map(({ value, label }) => (
                <div key={label} className="glass-dark rounded-2xl p-4 border border-white/10">
                  <p className="text-2xl font-bold text-white">{value}</p>
                  <p className="text-xs text-slate-400 mt-0.5">{label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Feature cards */}
          <div className="space-y-4">
            {aiFeatures.map(({ icon: Icon, title, description }, i) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="glass-dark rounded-2xl p-5 border border-white/10 hover:border-brand-500/30 transition-colors group"
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-brand-500/20 flex items-center justify-center flex-shrink-0 group-hover:bg-brand-500/30 transition-colors">
                    <Icon className="w-5 h-5 text-brand-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white mb-1">{title}</h3>
                    <p className="text-sm text-slate-400 leading-relaxed">{description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
