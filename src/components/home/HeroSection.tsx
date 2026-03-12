'use client';

// src/components/home/HeroSection.tsx
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, Play, TrendingUp, Users, BarChart3, Layers, Shield, Zap } from 'lucide-react';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  }),
};

// Mock dashboard UI component
function DashboardMockup() {
  return (
    <div className="relative w-full max-w-xl mx-auto">
      {/* Glow effects */}
      <div className="absolute -inset-4 bg-gradient-to-r from-brand-500/20 to-accent-500/20 rounded-3xl blur-2xl" />

      {/* Main dashboard card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.4, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="relative glass-dark rounded-2xl border border-white/10 overflow-hidden shadow-2xl"
      >
        {/* Dashboard header */}
        <div className="flex items-center gap-2 px-4 py-3 border-b border-white/10 bg-white/5">
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-red-400/60" />
            <div className="w-3 h-3 rounded-full bg-yellow-400/60" />
            <div className="w-3 h-3 rounded-full bg-green-400/60" />
          </div>
          <div className="flex-1 mx-4 h-5 bg-white/10 rounded-md flex items-center px-2">
            <span className="text-[10px] text-white/40 font-mono">app.nexaflowerp.com/dashboard</span>
          </div>
          <div className="w-6 h-6 rounded-md bg-brand-500/50 flex items-center justify-center">
            <Zap className="w-3 h-3 text-brand-200" />
          </div>
        </div>

        {/* Dashboard content */}
        <div className="p-4 space-y-4">
          {/* Metric cards row */}
          <div className="grid grid-cols-3 gap-3">
            {[
              { label: 'Revenue', value: '$2.4M', change: '+18%', color: 'brand-400' },
              { label: 'Orders', value: '1,284', change: '+7%', color: 'accent-400' },
              { label: 'Efficiency', value: '94.2%', change: '+3%', color: 'violet-400' },
            ].map((metric) => (
              <div key={metric.label} className="bg-white/5 rounded-xl p-3 border border-white/10">
                <p className="text-[10px] text-white/50 mb-1">{metric.label}</p>
                <p className="text-sm font-bold text-white">{metric.value}</p>
                <p className="text-[10px] text-emerald-400 mt-1">↑ {metric.change}</p>
              </div>
            ))}
          </div>

          {/* Revenue chart mockup */}
          <div className="bg-white/5 rounded-xl p-3 border border-white/10">
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-semibold text-white/80">Revenue Overview</span>
              <span className="text-[10px] text-white/40">Last 6 months</span>
            </div>
            <div className="flex items-end gap-1.5 h-16">
              {[40, 65, 48, 80, 62, 88, 72, 95, 78, 100, 85, 92].map((h, i) => (
                <motion.div
                  key={i}
                  initial={{ height: 0 }}
                  animate={{ height: `${h}%` }}
                  transition={{ delay: 0.8 + i * 0.05, duration: 0.4 }}
                  className="flex-1 rounded-sm bg-gradient-to-t from-brand-600 to-brand-400 opacity-80"
                />
              ))}
            </div>
          </div>

          {/* Module status row */}
          <div className="grid grid-cols-2 gap-2">
            {[
              { icon: BarChart3, label: 'Finance', status: 'Healthy', color: 'emerald' },
              { icon: Layers, label: 'Inventory', status: '12 alerts', color: 'amber' },
              { icon: Users, label: 'HR', status: '3 pending', color: 'violet' },
              { icon: TrendingUp, label: 'Sales CRM', status: 'On track', color: 'brand' },
            ].map(({ icon: Icon, label, status, color }) => (
              <div key={label} className="flex items-center gap-2 bg-white/5 rounded-lg px-3 py-2 border border-white/10">
                <div className={`w-6 h-6 rounded-md bg-${color}-500/20 flex items-center justify-center`}>
                  <Icon className={`w-3 h-3 text-${color}-400`} />
                </div>
                <div>
                  <p className="text-[10px] text-white/80 font-medium">{label}</p>
                  <p className="text-[9px] text-white/40">{status}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Floating notification cards */}
      <motion.div
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.0, duration: 0.6 }}
        className="absolute -right-8 top-24 glass-dark border border-white/10 rounded-xl p-3 shadow-xl w-44"
      >
        <div className="flex items-center gap-2 mb-2">
          <div className="w-5 h-5 rounded-md bg-emerald-500/20 flex items-center justify-center">
            <TrendingUp className="w-2.5 h-2.5 text-emerald-400" />
          </div>
          <span className="text-[10px] text-white/70 font-medium">AI Forecast</span>
        </div>
        <p className="text-[10px] text-white/50">Revenue up 23% projected for Q4 based on current trends.</p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="absolute -left-8 bottom-28 glass-dark border border-white/10 rounded-xl p-3 shadow-xl w-40"
      >
        <div className="flex items-center gap-2">
          <div className="w-5 h-5 rounded-md bg-brand-500/30 flex items-center justify-center">
            <Shield className="w-2.5 h-2.5 text-brand-400" />
          </div>
          <div>
            <p className="text-[10px] text-white/70 font-medium">Security</p>
            <p className="text-[9px] text-emerald-400">All systems secure</p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden mesh-bg pt-20">
      {/* Background shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 80, repeat: Infinity, ease: 'linear' }}
          className="absolute -top-64 -right-64 w-[700px] h-[700px] rounded-full border border-brand-500/10"
        />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 60, repeat: Infinity, ease: 'linear' }}
          className="absolute -bottom-64 -left-64 w-[600px] h-[600px] rounded-full border border-brand-400/10"
        />
        {/* Orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-600/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent-500/10 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Copy */}
          <div>
            {/* Badge */}
            <motion.div
              custom={0}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="inline-flex items-center gap-2 mb-6"
            >
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-brand-500/20 border border-brand-500/30 text-brand-300 text-xs font-semibold">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-400 animate-pulse" />
                Now with AI-Powered Forecasting
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              custom={1}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.05] tracking-tight mb-6"
            >
              Run your business
              <br />
              <span className="gradient-text">on one intelligent</span>
              <br />
              system.
            </motion.h1>

            {/* Description */}
            <motion.p
              custom={2}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="text-lg text-slate-300 leading-relaxed mb-8 max-w-xl"
            >
              NexaFlow ERP unifies finance, inventory, HR, procurement, CRM, and real-time analytics
              into a single platform — so your teams make smarter decisions, faster.
            </motion.p>

            {/* Module tags */}
            <motion.div
              custom={3}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="flex flex-wrap gap-2 mb-10"
            >
              {['Finance', 'Inventory', 'HR & Payroll', 'Procurement', 'CRM', 'Analytics'].map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 rounded-full text-xs font-medium bg-white/10 text-white/70 border border-white/10"
                >
                  {tag}
                </span>
              ))}
            </motion.div>

            {/* CTAs */}
            <motion.div
              custom={4}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="flex flex-wrap gap-4"
            >
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-brand-500 hover:bg-brand-400 text-white font-semibold rounded-2xl shadow-brand-lg hover:shadow-brand transition-all duration-200 hover:-translate-y-0.5 text-base"
              >
                Book a Demo
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/solutions"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-2xl border border-white/20 hover:border-white/40 transition-all duration-200 text-base"
              >
                <Play className="w-4 h-4 fill-white" />
                Explore Solutions
              </Link>
            </motion.div>

            {/* Social proof line */}
            <motion.div
              custom={5}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="mt-10 flex items-center gap-4"
            >
              <div className="flex -space-x-2">
                {[
                  'bg-gradient-to-br from-violet-400 to-violet-600',
                  'bg-gradient-to-br from-emerald-400 to-teal-600',
                  'bg-gradient-to-br from-orange-400 to-rose-500',
                  'bg-gradient-to-br from-blue-400 to-cyan-500',
                ].map((bg, i) => (
                  <div key={i} className={`w-8 h-8 rounded-full border-2 border-slate-900 ${bg}`} />
                ))}
              </div>
              <div>
                <div className="flex items-center gap-1 mb-0.5">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-3 h-3 text-yellow-400 fill-yellow-400" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-xs text-slate-400">Trusted by <span className="text-white font-semibold">10,000+</span> businesses worldwide</p>
              </div>
            </motion.div>
          </div>

          {/* Right: Dashboard */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="hidden lg:block"
          >
            <DashboardMockup />
          </motion.div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" />
    </section>
  );
}
