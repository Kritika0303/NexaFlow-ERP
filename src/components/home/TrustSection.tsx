'use client';

// src/components/home/TrustSection.tsx
import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Globe2, Activity, Clock, Headphones } from 'lucide-react';

const metrics = [
  { icon: Globe2, value: 10000, suffix: '+', label: 'Businesses Streamlined', color: 'brand' },
  { icon: Activity, value: 99.9, suffix: '%', label: 'Platform Uptime SLA', color: 'emerald' },
  { icon: Globe2, value: 25, suffix: '+', label: 'Countries Served', color: 'violet' },
  { icon: Headphones, value: 24, suffix: '/7', label: 'Expert Support', color: 'amber' },
];

// Logo placeholders for trust logos
const clientLogos = [
  'Vertex Corp', 'Meridian Co.', 'Apex Systems', 'Crestline Ltd',
  'Primus Group', 'Solaris Inc', 'Quantum Biz', 'Luminary LLC',
];

function AnimatedCounter({ target, suffix, isDecimal = false }: { target: number; suffix: string; isDecimal?: boolean }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;
    const start = 0;
    const duration = 2000;
    const startTime = performance.now();

    function update(currentTime: number) {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(start + (target - start) * eased);
      if (progress < 1) requestAnimationFrame(update);
    }

    requestAnimationFrame(update);
  }, [isInView, target]);

  return (
    <span ref={ref}>
      {isDecimal ? count.toFixed(1) : Math.floor(count).toLocaleString()}{suffix}
    </span>
  );
}

export function TrustSection() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Client logos */}
        <div className="text-center mb-12">
          <p className="text-sm font-semibold text-slate-500 uppercase tracking-wider mb-8">
            Trusted by leading companies worldwide
          </p>
          <div className="flex flex-wrap justify-center gap-6 md:gap-10 items-center">
            {clientLogos.map((name) => (
              <div
                key={name}
                className="px-5 py-2.5 rounded-xl bg-slate-50 border border-slate-100 text-slate-400 font-semibold text-sm hover:border-brand-200 hover:text-brand-500 transition-all duration-200"
              >
                {name}
              </div>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-slate-100 mb-12" />

        {/* Metrics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {metrics.map(({ icon: Icon, value, suffix, label, color }, i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="text-center"
            >
              <div className={`w-12 h-12 rounded-2xl bg-${color}-50 flex items-center justify-center mx-auto mb-4`}>
                <Icon className={`w-6 h-6 text-${color}-500`} />
              </div>
              <div className="text-4xl font-bold text-slate-900 mb-1 tabular-nums">
                <AnimatedCounter
                  target={value}
                  suffix={suffix}
                  isDecimal={!Number.isInteger(value)}
                />
              </div>
              <p className="text-sm text-slate-500 font-medium">{label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
