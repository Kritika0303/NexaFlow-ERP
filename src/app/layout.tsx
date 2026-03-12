// src/app/layout.tsx
import type { Metadata } from 'next';
import { Sora } from 'next/font/google';
import './globals.css';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { Toaster } from '@/components/ui/toaster';

const sora = Sora({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-sora',
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: 'NexaFlow ERP — Run Your Business on One Intelligent System',
    template: '%s | NexaFlow ERP',
  },
  description:
    'NexaFlow ERP unifies finance, inventory, HR, procurement, CRM, and analytics into one intelligent platform. Built for modern enterprises across 25+ countries.',
  keywords: [
    'ERP software',
    'enterprise resource planning',
    'business management software',
    'cloud ERP',
    'finance management',
    'inventory management',
    'HR software',
    'NexaFlow ERP',
  ],
  authors: [{ name: 'NexaFlow Technologies' }],
  creator: 'NexaFlow Technologies',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://nexaflowerp.com',
    siteName: 'NexaFlow ERP',
    title: 'NexaFlow ERP — Run Your Business on One Intelligent System',
    description:
      'Unify your entire business operations with NexaFlow ERP. Finance, inventory, HR, procurement, CRM and analytics — one platform, infinite possibilities.',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'NexaFlow ERP' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'NexaFlow ERP — Run Your Business on One Intelligent System',
    description: 'Unify your entire business operations with NexaFlow ERP.',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={sora.variable} suppressHydrationWarning>
      <body className="font-sans antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}
