'use client';

// src/components/layout/Footer.tsx
import Link from 'next/link';
import { Zap, Twitter, Linkedin, Github, Youtube, Mail, Phone, MapPin } from 'lucide-react';

const productLinks = [
  { label: 'Finance & Accounting', href: '/solutions#finance' },
  { label: 'Inventory & Supply Chain', href: '/solutions#inventory' },
  { label: 'HR & Payroll', href: '/solutions#hr' },
  { label: 'Procurement', href: '/solutions#procurement' },
  { label: 'Sales & CRM', href: '/solutions#crm' },
  { label: 'Billing & Subscriptions', href: '/solutions#billing' },
];

const companyLinks = [
  { label: 'About Us', href: '/#about' },
  { label: 'Careers', href: '/careers' },
  { label: 'Blog', href: '/blog' },
  { label: 'Press', href: '/press' },
  { label: 'Partners', href: '/partners' },
  { label: 'Contact', href: '/contact' },
];

const resourceLinks = [
  { label: 'Documentation', href: '/docs' },
  { label: 'API Reference', href: '/docs/api' },
  { label: 'Case Studies', href: '/case-studies' },
  { label: 'Help Center', href: '/help' },
  { label: 'Status Page', href: '/status' },
  { label: 'Security', href: '/security' },
];

const socialLinks = [
  { icon: Twitter, href: 'https://twitter.com/nexaflowerp', label: 'Twitter' },
  { icon: Linkedin, href: 'https://linkedin.com/company/nexaflow', label: 'LinkedIn' },
  { icon: Github, href: 'https://github.com/nexaflow', label: 'GitHub' },
  { icon: Youtube, href: 'https://youtube.com/@nexaflow', label: 'YouTube' },
];

export function Footer() {
  return (
    <footer className="bg-surface-950 text-slate-300">
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand column */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-5">
              <div className="w-8 h-8 rounded-lg bg-brand-500 flex items-center justify-center">
                <Zap className="w-4 h-4 text-white fill-white" />
              </div>
              <span className="font-bold text-lg text-white tracking-tight">
                Nexa<span className="text-brand-400">Flow</span>
              </span>
            </Link>
            <p className="text-sm text-slate-400 leading-relaxed mb-6 max-w-xs">
              Run your business on one intelligent system. NexaFlow ERP unifies every department so your teams can move faster and smarter.
            </p>
            <div className="space-y-2 text-sm text-slate-400">
              <a href="mailto:hello@nexaflowerp.com" className="flex items-center gap-2 hover:text-white transition-colors">
                <Mail className="w-4 h-4 text-brand-400" />
                hello@nexaflowerp.com
              </a>
              <a href="tel:+18005551234" className="flex items-center gap-2 hover:text-white transition-colors">
                <Phone className="w-4 h-4 text-brand-400" />
                +1 (800) 555-1234
              </a>
              <span className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-brand-400" />
                San Francisco, CA · London · Singapore
              </span>
            </div>
            <div className="flex items-center gap-3 mt-6">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-9 h-9 rounded-lg bg-slate-800 hover:bg-brand-600 flex items-center justify-center transition-colors"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-4">Product</h4>
            <ul className="space-y-2.5">
              {productLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-slate-400 hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold text-sm mb-4">Company</h4>
            <ul className="space-y-2.5">
              {companyLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-slate-400 hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold text-sm mb-4">Resources</h4>
            <ul className="space-y-2.5">
              {resourceLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-slate-400 hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-slate-500">
            © {new Date().getFullYear()} NexaFlow Technologies, Inc. All rights reserved.
          </p>
          <div className="flex items-center gap-5 text-xs text-slate-500">
            <Link href="/privacy" className="hover:text-slate-300 transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-slate-300 transition-colors">Terms of Service</Link>
            <Link href="/cookies" className="hover:text-slate-300 transition-colors">Cookie Policy</Link>
            <Link href="/gdpr" className="hover:text-slate-300 transition-colors">GDPR</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
