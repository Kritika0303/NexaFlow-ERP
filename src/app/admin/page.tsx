// src/app/admin/page.tsx
import type { Metadata } from 'next';
import { AdminDashboard } from '@/components/admin/AdminDashboard';

export const metadata: Metadata = {
  title: 'Admin Dashboard',
  description: 'NexaFlow ERP — Lead management dashboard',
  robots: { index: false, follow: false },
};

export default function Admin() {
  return <AdminDashboard />;
}
