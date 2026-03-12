'use client';

// src/components/solutions/SolutionsHero.tsx
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export function SolutionsHero() {
  return (
    <section className="relative pt-32 pb-20 mesh-bg overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-brand-500/10 rounded-full blur-3xl" />
      </div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-block px-3 py-1.5 rounded-full bg-brand-500/20 border border-brand-500/30 text-brand-300 text-xs font-semibold mb-6"
        >
          ERP Modules
        </motion.span>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight"
        >
          One platform.<br />
          <span className="gradient-text">Six powerful modules.</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-slate-300 text-xl max-w-2xl mx-auto mb-10"
        >
          Every module is purpose-built, deeply integrated, and designed to work as a unified whole — eliminating the data silos that slow businesses down.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="flex flex-wrap gap-4 justify-center"
        >
          <Link href="/contact" className="inline-flex items-center gap-2 px-7 py-3.5 bg-brand-500 text-white font-semibold rounded-2xl hover:bg-brand-400 transition-colors">
            Request a Demo <ArrowRight className="w-4 h-4" />
          </Link>
          <Link href="/pricing" className="inline-flex items-center gap-2 px-7 py-3.5 bg-white/10 text-white font-semibold rounded-2xl border border-white/20 hover:bg-white/20 transition-colors">
            View Pricing
          </Link>
        </motion.div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent" />
    </section>
  );
}
