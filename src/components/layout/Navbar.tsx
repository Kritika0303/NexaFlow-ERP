'use client';

// src/components/layout/Navbar.tsx
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown, Zap } from 'lucide-react';
import { cn } from '@/lib/utils';

const navLinks = [
  { label: 'Solutions', href: '/solutions' },
  { label: 'Industries', href: '/industries' },
  { label: 'Pricing', href: '/pricing' },
  { label: 'About', href: '/#about' },
  { label: 'Contact', href: '/contact' },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setIsMobileOpen(false);
  }, [pathname]);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-100'
            : 'bg-transparent'
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 group">
              <div className="w-8 h-8 rounded-lg bg-brand-500 flex items-center justify-center shadow-brand group-hover:shadow-brand-lg transition-shadow">
                <Zap className="w-4 h-4 text-white fill-white" />
              </div>
              <span className={cn(
                'font-bold text-lg tracking-tight transition-colors',
                isScrolled || isMobileOpen ? 'text-slate-900' : 'text-white'
              )}>
                Nexa<span className="text-brand-500">Flow</span>
              </span>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    'px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200',
                    isScrolled
                      ? 'text-slate-600 hover:text-brand-600 hover:bg-brand-50'
                      : 'text-white/80 hover:text-white hover:bg-white/10',
                    pathname === link.href && (isScrolled ? 'text-brand-600 bg-brand-50' : 'text-white bg-white/10')
                  )}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="hidden md:flex items-center gap-3">
              <Link
                href="/contact"
                className={cn(
                  'px-4 py-2 text-sm font-semibold rounded-lg transition-all duration-200',
                  isScrolled
                    ? 'text-slate-700 hover:text-brand-600'
                    : 'text-white/90 hover:text-white'
                )}
              >
                Book Demo
              </Link>
              <Link
                href="/contact"
                className="px-5 py-2.5 bg-brand-500 hover:bg-brand-600 text-white text-sm font-semibold rounded-xl shadow-brand hover:shadow-brand-lg transition-all duration-200 hover:-translate-y-0.5"
              >
                Get Started
              </Link>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMobileOpen(!isMobileOpen)}
              className={cn(
                'md:hidden p-2 rounded-lg transition-colors',
                isScrolled || isMobileOpen ? 'text-slate-700 hover:bg-slate-100' : 'text-white hover:bg-white/10'
              )}
            >
              {isMobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed top-16 left-0 right-0 z-40 bg-white border-b border-slate-100 shadow-xl md:hidden"
          >
            <div className="px-4 py-4 space-y-1">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <Link
                    href={link.href}
                    className="block px-4 py-3 text-slate-700 font-medium rounded-xl hover:bg-brand-50 hover:text-brand-600 transition-colors"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <div className="pt-4 pb-2 flex flex-col gap-3">
                <Link
                  href="/contact"
                  className="block text-center px-4 py-3 border-2 border-brand-500 text-brand-600 font-semibold rounded-xl hover:bg-brand-50 transition-colors"
                >
                  Book Demo
                </Link>
                <Link
                  href="/contact"
                  className="block text-center px-4 py-3 bg-brand-500 text-white font-semibold rounded-xl hover:bg-brand-600 transition-colors"
                >
                  Get Started
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
