'use client';

// src/components/home/SecuritySection.tsx
import { motion } from 'framer-motion';
import { Shield, Lock, ClipboardList, HardDrive, Eye, Check } from 'lucide-react';
import { SectionHeader } from '@/components/ui/SectionHeader';

const pillars = [
  {
    icon: Shield,
    title: 'Role-Based Access Control',
    description: 'Define granular permissions at the module, record, and field level. Ensure every user sees exactly what they need — and nothing more.',
  },
  {
    icon: Lock,
    title: 'AES-256 Encryption',
    description: 'All data is encrypted at rest and in transit using AES-256 and TLS 1.3. Your business data is unreadable to anyone without the right keys.',
  },
  {
    icon: ClipboardList,
    title: 'Immutable Audit Logs',
    description: 'Every action in NexaFlow is timestamped and logged in a tamper-proof audit trail — giving you complete accountability for regulatory and internal audits.',
  },
  {
    icon: HardDrive,
    title: 'Automated Backups',
    description: 'Daily incremental and weekly full backups are stored across geographically distributed data centres with point-in-time recovery up to 30 days back.',
  },
  {
    icon: Eye,
    title: 'Privacy-First Architecture',
    description: 'Built for GDPR, CCPA, and PDPA compliance from day one. Data residency controls, right-to-erasure tools, and consent management built in.',
  },
];

const certifications = ['ISO 27001', 'SOC 2 Type II', 'GDPR Ready', 'CCPA Compliant', 'PCI DSS', 'HIPAA Eligible'];

export function SecuritySection() {
  return (
    <section className="section-pad bg-surface-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Content */}
          <div>
            <SectionHeader
              badge="Security & Compliance"
              title="Enterprise security,"
              titleHighlight="built in by default."
              description="NexaFlow is architected with security at its foundation — not bolted on as a feature. Every layer, from infrastructure to application, is hardened against modern threats."
              align="left"
              className="mb-10"
            />

            <div className="space-y-5">
              {pillars.map(({ icon: Icon, title, description }, i) => (
                <motion.div
                  key={title}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="flex items-start gap-4"
                >
                  <div className="w-10 h-10 rounded-xl bg-brand-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Icon className="w-5 h-5 text-brand-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 mb-1">{title}</h3>
                    <p className="text-slate-600 text-sm leading-relaxed">{description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right: Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            {/* Security dashboard mockup */}
            <div className="bg-surface-950 rounded-3xl p-8 border border-slate-800">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h4 className="text-white font-semibold">Security Overview</h4>
                  <p className="text-slate-500 text-xs">Real-time system status</p>
                </div>
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-500/20 text-emerald-400 text-xs font-semibold">
                  <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse" />
                  All secure
                </span>
              </div>

              {/* Status items */}
              <div className="space-y-3 mb-8">
                {[
                  { label: 'Encryption Status', value: 'AES-256 Active', ok: true },
                  { label: 'Last Backup', value: '2 hours ago', ok: true },
                  { label: 'Active Sessions', value: '1,284 users', ok: true },
                  { label: 'Failed Login Attempts', value: '0 (last 24h)', ok: true },
                  { label: 'Compliance Score', value: '100 / 100', ok: true },
                ].map(({ label, value, ok }) => (
                  <div key={label} className="flex items-center justify-between py-2.5 border-b border-slate-800">
                    <span className="text-slate-400 text-sm">{label}</span>
                    <div className="flex items-center gap-2">
                      <span className="text-white text-sm font-medium">{value}</span>
                      {ok && (
                        <div className="w-5 h-5 rounded-full bg-emerald-500/20 flex items-center justify-center">
                          <Check className="w-3 h-3 text-emerald-400" />
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Certifications */}
              <div>
                <p className="text-slate-500 text-xs mb-3 uppercase tracking-wider">Certifications & Compliance</p>
                <div className="flex flex-wrap gap-2">
                  {certifications.map((cert) => (
                    <span
                      key={cert}
                      className="px-3 py-1.5 rounded-lg bg-slate-800 border border-slate-700 text-slate-300 text-xs font-semibold"
                    >
                      {cert}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
