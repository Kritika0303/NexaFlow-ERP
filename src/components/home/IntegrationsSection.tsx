'use client';

// src/components/home/IntegrationsSection.tsx
import { motion } from 'framer-motion';
import { CreditCard, ShoppingCart, Building2, Truck, MessageSquare, AppWindow, Plug } from 'lucide-react';
import { SectionHeader } from '@/components/ui/SectionHeader';

const categories = [
  {
    icon: CreditCard,
    name: 'Payment Gateways',
    items: ['Stripe', 'PayPal', 'Braintree', 'Square', 'Adyen'],
    color: 'brand',
  },
  {
    icon: ShoppingCart,
    name: 'E-commerce Platforms',
    items: ['Shopify', 'WooCommerce', 'Magento', 'BigCommerce'],
    color: 'emerald',
  },
  {
    icon: Building2,
    name: 'Banking Systems',
    items: ['Open Banking API', 'Plaid', 'Finicity', 'MX'],
    color: 'violet',
  },

    {
  icon: Truck,
  name: 'Shipping Partners',
  items: ['FedEx', 'UPS', 'DHL', 'USPS', 'ShipStation'],
  color: 'orange',
},
  
  {
    icon: MessageSquare,
    name: 'Messaging & Comms',
    items: ['Slack', 'Microsoft Teams', 'Twilio', 'SendGrid'],
    color: 'cyan',
  },
  {
    icon: AppWindow,
    name: 'Business Apps',
    items: ['Salesforce', 'HubSpot', 'Zendesk', 'Jira', 'DocuSign'],
    color: 'rose',
  },
];

const colorMap: Record<string, string> = {
  brand: 'bg-brand-50 border-brand-200 text-brand-700',
  emerald: 'bg-emerald-50 border-emerald-200 text-emerald-700',
  violet: 'bg-violet-50 border-violet-200 text-violet-700',
  orange: 'bg-orange-50 border-orange-200 text-orange-700',
  cyan: 'bg-cyan-50 border-cyan-200 text-cyan-700',
  rose: 'bg-rose-50 border-rose-200 text-rose-700',
};

const iconColorMap: Record<string, string> = {
  brand: 'text-brand-600',
  emerald: 'text-emerald-600',
  violet: 'text-violet-600',
  orange: 'text-orange-600',
  cyan: 'text-cyan-600',
  rose: 'text-rose-600',
};

const iconBgMap: Record<string, string> = {
  brand: 'bg-brand-100',
  emerald: 'bg-emerald-100',
  violet: 'bg-violet-100',
  orange: 'bg-orange-100',
  cyan: 'bg-cyan-100',
  rose: 'bg-rose-100',
};

export function IntegrationsSection() {
  return (
    <section className="section-pad bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Integrations"
          title="Works with your"
          titleHighlight="existing ecosystem."
          description="NexaFlow connects to 200+ tools out of the box. And with our open REST API and webhooks, you can integrate anything."
          className="mb-14"
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {categories.map(({ icon: Icon, name, items, color }, i) => (
            <motion.div
              key={name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07 }}
              className={`rounded-2xl border p-6 ${colorMap[color]} card-hover`}
            >
              <div className={`w-10 h-10 ${iconBgMap[color]} rounded-xl flex items-center justify-center mb-4`}>
                <Icon className={`w-5 h-5 ${iconColorMap[color]}`} />
              </div>
              <h3 className="font-bold text-slate-900 mb-3 text-sm">{name}</h3>
              <div className="flex flex-wrap gap-1.5">
                {items.map((item) => (
                  <span
                    key={item}
                    className="px-2.5 py-1 bg-white/80 rounded-lg text-xs font-medium text-slate-600 border border-white"
                  >
                    {item}
                  </span>
                ))}
                <span className="px-2.5 py-1 bg-white/50 rounded-lg text-xs font-medium text-slate-400 border border-white/70">
                  +more
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* API callout */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-10 rounded-3xl bg-surface-950 p-8 flex flex-col md:flex-row items-center justify-between gap-6"
        >
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-brand-500/20 flex items-center justify-center">
              <Plug className="w-6 h-6 text-brand-400" />
            </div>
            <div>
              <h3 className="text-white font-bold text-lg">Need a custom integration?</h3>
              <p className="text-slate-400 text-sm">Our open REST API and Webhook engine let you connect any system you can imagine.</p>
            </div>
          </div>
          <a
            href="/docs/api"
            className="flex-shrink-0 px-6 py-3 bg-brand-500 hover:bg-brand-400 text-white font-semibold rounded-xl transition-colors text-sm"
          >
            View API Docs →
          </a>
        </motion.div>
      </div>
    </section>
  );
}
