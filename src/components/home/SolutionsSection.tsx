'use client';

// src/components/home/SolutionsSection.tsx
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import {
  DollarSign, Package, Users, ShoppingCart, TrendingUp, CreditCard, ArrowRight, Check
} from 'lucide-react';
import { SectionHeader } from '@/components/ui/SectionHeader';

const modules = [
  {
    id: 'finance',
    icon: DollarSign,
    name: 'Finance & Accounting',
    tagline: 'Close books faster. Audit with confidence.',
    description: 'Automate accounts payable, receivable, general ledger, tax compliance, and multi-currency reporting. Real-time financial dashboards give CFOs complete control.',
    features: ['Multi-currency & multi-entity', 'Automated reconciliation', 'Tax compliance engine', 'Custom chart of accounts', 'Financial forecasting'],
    color: 'emerald',
    href: '/solutions#finance',
  },
  {
    id: 'inventory',
    icon: Package,
    name: 'Inventory & Supply Chain',
    tagline: 'Stock smarter. Ship faster.',
    description: 'Track inventory in real-time across warehouses, manage purchase orders, optimize reorder points, and reduce carrying costs with AI-driven demand planning.',
    features: ['Multi-warehouse tracking', 'Barcode & RFID support', 'Automated reorder rules', 'Supplier performance scoring', 'Landed cost calculation'],
    color: 'orange',
    href: '/solutions#inventory',
  },
  {
    id: 'hr',
    icon: Users,
    name: 'HR & Payroll',
    tagline: 'Manage your people with precision.',
    description: 'Handle the complete employee lifecycle — from hiring and onboarding to attendance, payroll processing, benefits, and performance reviews in one unified module.',
    features: ['Automated payroll runs', 'Time & attendance tracking', 'Leave management', 'Performance appraisals', 'Employee self-service portal'],
    color: 'violet',
    href: '/solutions#hr',
  },
  {
    id: 'procurement',
    icon: ShoppingCart,
    name: 'Procurement',
    tagline: 'Source smarter. Spend less.',
    description: 'Streamline the procure-to-pay cycle with automated requisitions, vendor management, purchase order approvals, and spend analytics that surface cost-saving opportunities.',
    features: ['Multi-level approval workflows', 'Vendor portal & RFQ', 'Spend analytics dashboard', 'Budget controls', 'Contract management'],
    color: 'blue',
    href: '/solutions#procurement',
  },
  {
    id: 'crm',
    icon: TrendingUp,
    name: 'Sales & CRM',
    tagline: 'Win deals. Retain customers.',
    description: 'Manage leads, pipelines, quotes, and customer accounts from a single CRM that connects directly to finance and inventory — eliminating data gaps between sales and operations.',
    features: ['Pipeline & deal tracking', 'Quote-to-cash automation', 'Customer health scores', 'Email & activity logs', 'Sales forecasting'],
    color: 'cyan',
    href: '/solutions#crm',
  },
  {
    id: 'billing',
    icon: CreditCard,
    name: 'Billing & Subscriptions',
    tagline: 'Revenue recognition on autopilot.',
    description: 'Automate recurring billing, manage subscription plans, handle complex pricing structures, and ensure ASC 606 / IFRS 15 compliant revenue recognition.',
    features: ['Recurring billing engine', 'Usage-based pricing', 'Dunning management', 'Revenue recognition', 'Self-service customer portal'],
    color: 'rose',
    href: '/solutions#billing',
  },
];

const colorMap: Record<string, { bg: string; text: string; border: string; light: string }> = {
  emerald: { bg: 'bg-emerald-500', text: 'text-emerald-600', border: 'border-emerald-200', light: 'bg-emerald-50' },
  orange: { bg: 'bg-orange-500', text: 'text-orange-600', border: 'border-orange-200', light: 'bg-orange-50' },
  violet: { bg: 'bg-violet-500', text: 'text-violet-600', border: 'border-violet-200', light: 'bg-violet-50' },
  blue: { bg: 'bg-blue-500', text: 'text-blue-600', border: 'border-blue-200', light: 'bg-blue-50' },
  cyan: { bg: 'bg-cyan-500', text: 'text-cyan-600', border: 'border-cyan-200', light: 'bg-cyan-50' },
  rose: { bg: 'bg-rose-500', text: 'text-rose-600', border: 'border-rose-200', light: 'bg-rose-50' },
};

export function SolutionsSection() {
  const [activeModule, setActiveModule] = useState(modules[0]);
  const c = colorMap[activeModule.color];

  return (
    <section className="section-pad bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="ERP Modules"
          title="One platform,"
          titleHighlight="six powerful modules."
          description="Every module is built to work seamlessly together, sharing data in real time so you never have to reconcile systems again."
          className="mb-14"
        />

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Module tabs */}
          <div className="space-y-2">
            {modules.map((mod) => {
              const colors = colorMap[mod.color];
              const isActive = activeModule.id === mod.id;
              return (
                <button
                  key={mod.id}
                  onClick={() => setActiveModule(mod)}
                  className={`w-full flex items-center gap-3 px-4 py-3.5 rounded-2xl text-left transition-all duration-200 border ${
                    isActive
                      ? `${colors.light} ${colors.border} ${colors.text} shadow-sm`
                      : 'border-transparent text-slate-600 hover:bg-slate-50'
                  }`}
                >
                  <div className={`w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0 ${isActive ? colors.bg : 'bg-slate-100'}`}>
                    <mod.icon className={`w-5 h-5 ${isActive ? 'text-white' : 'text-slate-500'}`} />
                  </div>
                  <div>
                    <p className="font-semibold text-sm">{mod.name}</p>
                    <p className={`text-xs ${isActive ? colors.text : 'text-slate-400'}`}>{mod.tagline}</p>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Active module detail */}
          <div className="lg:col-span-2">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeModule.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className={`h-full rounded-3xl border-2 ${c.border} ${c.light} p-8`}
              >
                <div className={`inline-flex items-center gap-3 mb-6`}>
                  <div className={`w-12 h-12 ${c.bg} rounded-2xl flex items-center justify-center`}>
                    <activeModule.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900">{activeModule.name}</h3>
                    <p className={`text-sm ${c.text} font-medium`}>{activeModule.tagline}</p>
                  </div>
                </div>

                <p className="text-slate-700 leading-relaxed mb-8">{activeModule.description}</p>

                <div className="grid sm:grid-cols-2 gap-2.5 mb-8">
                  {activeModule.features.map((feature) => (
                    <div key={feature} className="flex items-center gap-2.5">
                      <div className={`w-5 h-5 ${c.bg} rounded-full flex items-center justify-center flex-shrink-0`}>
                        <Check className="w-3 h-3 text-white" />
                      </div>
                      <span className="text-sm font-medium text-slate-700">{feature}</span>
                    </div>
                  ))}
                </div>

                <Link
                  href={activeModule.href}
                  className={`inline-flex items-center gap-2 px-6 py-3 ${c.bg} text-white rounded-xl font-semibold text-sm hover:opacity-90 transition-opacity`}
                >
                  Learn more about {activeModule.name}
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
