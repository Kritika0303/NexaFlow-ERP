'use client';

// src/components/solutions/ModuleDetails.tsx
import { motion } from 'framer-motion';
import { DollarSign, Package, Users, ShoppingCart, TrendingUp, CreditCard, Check, ArrowRight } from 'lucide-react';
import Link from 'next/link';

const modules = [
  {
    id: 'finance',
    icon: DollarSign,
    name: 'Finance & Accounting',
    tagline: 'The financial backbone of your business.',
    description: 'Replace spreadsheets and disconnected accounting tools with a fully-integrated financial management module. NexaFlow Finance gives your team real-time P&L visibility, automates reconciliation, and ensures compliance across multiple entities and currencies.',
    features: [
      'General ledger with multi-entity support',
      'Accounts payable & receivable automation',
      'Multi-currency and multi-tax management',
      'Bank reconciliation and open banking sync',
      'Automated tax computation and filing support',
      'Custom financial reporting and dashboards',
      'Revenue recognition (ASC 606 / IFRS 15)',
      'Audit-ready financial records and logs',
    ],
    color: 'emerald',
    bg: 'bg-emerald-50',
    border: 'border-emerald-200',
    accent: 'text-emerald-600',
    iconBg: 'bg-emerald-500',
    stat: { value: '4 days', label: 'Average month-end close (down from 12)' },
  },
  {
    id: 'inventory',
    icon: Package,
    name: 'Inventory & Supply Chain',
    tagline: 'From supplier to customer — fully connected.',
    description: "Never run out of the right stock or overstock the wrong items again. NexaFlow's inventory module gives warehouse managers real-time visibility across every location, with AI-driven demand planning that learns your business patterns.",
    features: [
      'Real-time multi-warehouse stock tracking',
      'Barcode scanning and RFID integration',
      'Automated reorder rules and PO generation',
      'Supplier portal and performance scoring',
      'Batch, serial, and expiry date tracking',
      'Landed cost calculation and allocation',
      'AI demand forecasting and safety stock',
      'Kitting, bundling, and Bill of Materials',
    ],
    color: 'orange',
    bg: 'bg-orange-50',
    border: 'border-orange-200',
    accent: 'text-orange-600',
    iconBg: 'bg-orange-500',
    stat: { value: '68%', label: 'Reduction in stockouts reported by customers' },
  },
  {
    id: 'hr',
    icon: Users,
    name: 'HR & Payroll',
    tagline: 'From hire to retire — all in one place.',
    description: "Manage your most important asset — your people — with a module built for the complete employee lifecycle. From digital offer letters and onboarding to payroll, performance, and offboarding, NexaFlow HR eliminates HR admin overhead.",
    features: [
      'Employee records and digital document vault',
      'Automated payroll with tax computation',
      'Leave, attendance, and timesheet tracking',
      'Performance reviews and goal management',
      'Benefits and expense management',
      'Recruitment pipeline and onboarding flows',
      'Employee self-service portal and mobile app',
      'HR compliance and policy management',
    ],
    color: 'violet',
    bg: 'bg-violet-50',
    border: 'border-violet-200',
    accent: 'text-violet-600',
    iconBg: 'bg-violet-500',
    stat: { value: '80%', label: 'Reduction in HR admin time' },
  },
  {
    id: 'procurement',
    icon: ShoppingCart,
    name: 'Procurement',
    tagline: 'Control spend. Empower buyers.',
    description: 'Take control of the entire procure-to-pay cycle — from purchase requisitions and vendor selection to invoice approval and payment. NexaFlow Procurement gives finance teams real-time spend visibility with built-in budget controls.',
    features: [
      'Digital purchase requisitions and approvals',
      'Vendor management and RFQ workflows',
      'Multi-level budget controls and alerts',
      'Three-way PO/GR/invoice matching',
      'Contract management and renewal alerts',
      'Spend analytics by category and department',
      'Preferred vendor and pricing catalogues',
      'Audit trail for every procurement action',
    ],
    color: 'blue',
    bg: 'bg-blue-50',
    border: 'border-blue-200',
    accent: 'text-blue-600',
    iconBg: 'bg-blue-500',
    stat: { value: '22%', label: 'Average savings on annual procurement spend' },
  },
  {
    id: 'crm',
    icon: TrendingUp,
    name: 'Sales & CRM',
    tagline: 'Sell smarter. Close faster.',
    description: 'NexaFlow CRM connects your sales pipeline directly to inventory, finance, and customer support — giving your sales team everything they need to qualify leads, build quotes, and close deals without switching tools.',
    features: [
      'Lead capture and qualification pipeline',
      'Opportunity management and deal rooms',
      'Quotation, proposal, and contract builder',
      'One-click quote-to-invoice conversion',
      'Customer health score and churn risk alerts',
      'Email, call, and activity tracking',
      'Sales forecasting with AI-powered pipeline scoring',
      'Commission tracking and rep performance dashboards',
    ],
    color: 'cyan',
    bg: 'bg-cyan-50',
    border: 'border-cyan-200',
    accent: 'text-cyan-600',
    iconBg: 'bg-cyan-500',
    stat: { value: '35%', label: 'Increase in sales team win rates' },
  },
  {
    id: 'billing',
    icon: CreditCard,
    name: 'Billing & Subscriptions',
    tagline: 'Recurring revenue, zero leakage.',
    description: "Whether you run project-based billing, subscriptions, or usage-based pricing, NexaFlow's billing module automates every step — from plan changes and proration to dunning, renewal reminders, and revenue recognition.",
    features: [
      'Subscription plans with custom billing cycles',
      'Usage-based and metered billing support',
      'Automated invoicing and payment collection',
      'Smart dunning and failed payment recovery',
      'Customer portal for plan self-management',
      'Revenue recognition engine (ASC 606)',
      'Multi-currency billing and tax handling',
      'Churn analysis and MRR/ARR dashboards',
    ],
    color: 'rose',
    bg: 'bg-rose-50',
    border: 'border-rose-200',
    accent: 'text-rose-600',
    iconBg: 'bg-rose-500',
    stat: { value: '99.2%', label: 'Invoice collection rate' },
  },
];

export function ModuleDetails() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
        {modules.map(({ id, icon: Icon, name, tagline, description, features, bg, border, accent, iconBg, stat }, i) => (
          <motion.div
            key={id}
            id={id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
            className={`grid lg:grid-cols-2 gap-12 items-center ${i % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
          >
            {/* Content */}
            <div className={i % 2 === 1 ? 'lg:order-2' : ''}>
              <div className="flex items-center gap-3 mb-5">
                <div className={`w-12 h-12 ${iconBg} rounded-2xl flex items-center justify-center`}>
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-slate-900">{name}</h2>
                  <p className={`text-sm font-medium ${accent}`}>{tagline}</p>
                </div>
              </div>

              <p className="text-slate-600 leading-relaxed mb-8">{description}</p>

              <div className="grid sm:grid-cols-2 gap-2.5 mb-8">
                {features.map((f) => (
                  <div key={f} className="flex items-start gap-2">
                    <div className={`w-5 h-5 ${iconBg} rounded-full flex items-center justify-center flex-shrink-0 mt-0.5`}>
                      <Check className="w-3 h-3 text-white" />
                    </div>
                    <span className="text-sm text-slate-700">{f}</span>
                  </div>
                ))}
              </div>

              <Link
                href="/contact"
                className={`inline-flex items-center gap-2 px-6 py-3 ${iconBg} text-white rounded-xl font-semibold text-sm hover:opacity-90 transition-opacity`}
              >
                Request a Demo
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Visual card */}
            <div className={i % 2 === 1 ? 'lg:order-1' : ''}>
              <div className={`rounded-3xl ${bg} border ${border} p-10`}>
                <div className={`w-16 h-16 ${iconBg} rounded-3xl flex items-center justify-center mb-6`}>
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">{name}</h3>
                <p className={`text-sm font-semibold ${accent} mb-8`}>{tagline}</p>

                <div className={`bg-white rounded-2xl p-6 border ${border} shadow-sm`}>
                  <p className="text-4xl font-bold text-slate-900 mb-1">{stat.value}</p>
                  <p className="text-slate-500 text-sm">{stat.label}</p>
                </div>

                <div className="mt-6 space-y-2">
                  {features.slice(0, 4).map((f) => (
                    <div key={f} className="flex items-center gap-2">
                      <div className={`w-4 h-4 ${iconBg} rounded-full flex items-center justify-center`}>
                        <Check className="w-2.5 h-2.5 text-white" />
                      </div>
                      <span className="text-sm text-slate-600">{f}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
