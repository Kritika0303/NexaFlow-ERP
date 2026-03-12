'use client';

// src/components/home/TestimonialsSection.tsx
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import { SectionHeader } from '@/components/ui/SectionHeader';

const testimonials = [
  {
    quote: "NexaFlow ERP replaced six separate tools we were running. Within 90 days of going live, our finance team cut their month-end close from 12 days to just 4. The ROI was undeniable.",
    author: 'Sarah Okonkwo',
    role: 'CFO',
    company: 'Meridian Manufacturing Group',
    avatar: 'SO',
    rating: 5,
    gradient: 'from-brand-600 to-brand-400',
  },
  {
    quote: "The AI forecasting module is genuinely impressive. It flagged a potential inventory shortfall six weeks before our peak season — something we would have missed entirely with our old system.",
    author: 'James Hartwell',
    role: 'VP of Operations',
    company: 'Crestline Distribution',
    avatar: 'JH',
    rating: 5,
    gradient: 'from-violet-600 to-violet-400',
  },
  {
    quote: "Implementation was completed in under 60 days — half what we expected. NexaFlow's onboarding team felt like an extension of our own IT department. Genuinely excellent support.",
    author: 'Priya Nambiar',
    role: 'COO',
    company: 'Apex Professional Services',
    avatar: 'PN',
    rating: 5,
    gradient: 'from-emerald-600 to-emerald-400',
  },
];

const caseStudy = {
  company: 'Solaris Retail Group',
  industry: 'Retail & E-commerce',
  challenge: 'Managing inventory across 47 brick-and-mortar stores and a rapidly growing e-commerce channel had become unmanageable with disconnected legacy tools.',
  results: [
    { metric: '68%', label: 'Reduction in stockouts' },
    { metric: '41%', label: 'Faster order fulfilment' },
    { metric: '$2.1M', label: 'Saved in annual operating costs' },
    { metric: '6 weeks', label: 'Full implementation time' },
  ],
  quote: "NexaFlow didn't just solve our inventory problem — it transformed how our entire business operates.",
  author: 'Marcus Teo, CEO — Solaris Retail Group',
};

export function TestimonialsSection() {
  return (
    <section className="section-pad bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Customer Stories"
          title="Real businesses,"
          titleHighlight="real results."
          description="Don't take our word for it. Here's what NexaFlow customers say after going live."
          className="mb-14"
        />

        {/* Testimonials */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {testimonials.map(({ quote, author, role, company, avatar, rating, gradient }, i) => (
            <motion.div
              key={author}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="relative bg-surface-50 rounded-3xl p-7 border border-slate-100 card-hover"
            >
              <Quote className="w-8 h-8 text-brand-200 mb-4" />

              <div className="flex gap-1 mb-4">
                {[...Array(rating)].map((_, j) => (
                  <Star key={j} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                ))}
              </div>

              <p className="text-slate-700 text-sm leading-relaxed mb-6 flex-1">"{quote}"</p>

              <div className="flex items-center gap-3">
                <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${gradient} flex items-center justify-center`}>
                  <span className="text-white text-xs font-bold">{avatar}</span>
                </div>
                <div>
                  <p className="text-slate-900 font-semibold text-sm">{author}</p>
                  <p className="text-slate-500 text-xs">{role} · {company}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Featured case study */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-3xl bg-gradient-to-br from-surface-950 to-brand-950 p-10 border border-slate-800"
        >
          <div className="grid md:grid-cols-2 gap-10">
            <div>
              <span className="inline-block px-3 py-1 rounded-full bg-brand-500/20 text-brand-400 text-xs font-semibold mb-4">
                Featured Case Study
              </span>
              <h3 className="text-2xl font-bold text-white mb-2">{caseStudy.company}</h3>
              <p className="text-brand-400 text-sm font-medium mb-5">{caseStudy.industry}</p>
              <p className="text-slate-400 text-sm leading-relaxed mb-6">{caseStudy.challenge}</p>
              <blockquote className="border-l-2 border-brand-500 pl-4">
                <p className="text-white italic text-sm leading-relaxed mb-2">"{caseStudy.quote}"</p>
                <cite className="text-slate-500 text-xs not-italic">{caseStudy.author}</cite>
              </blockquote>
            </div>
            <div className="grid grid-cols-2 gap-4 content-center">
              {caseStudy.results.map(({ metric, label }) => (
                <div key={label} className="bg-white/5 rounded-2xl p-5 border border-white/10">
                  <p className="text-3xl font-bold text-white mb-1">{metric}</p>
                  <p className="text-slate-400 text-xs">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
