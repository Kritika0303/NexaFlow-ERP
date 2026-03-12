'use client';

// src/components/admin/AdminDashboard.tsx
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Search, RefreshCw, Mail, Building2, Calendar, Tag, Download } from 'lucide-react';
import { formatDate } from '@/lib/utils';

interface Lead {
  id: string;
  fullName: string;
  workEmail: string;
  companyName: string;
  companyWebsite?: string;
  phoneNumber?: string;
  industry?: string;
  companySize?: string;
  message?: string;
  status: string;
  source?: string;
  createdAt: string;
}

interface LeadsData {
  leads: Lead[];
  total: number;
  page: number;
  totalPages: number;
}

const STATUS_STYLES: Record<string, string> = {
  NEW: 'bg-brand-100 text-brand-700',
  CONTACTED: 'bg-amber-100 text-amber-700',
  QUALIFIED: 'bg-violet-100 text-violet-700',
  DEMO_SCHEDULED: 'bg-cyan-100 text-cyan-700',
  CLOSED: 'bg-emerald-100 text-emerald-700',
};

export function AdminDashboard() {
  const [secret, setSecret] = useState('');
  const [authed, setAuthed] = useState(false);
  const [data, setData] = useState<LeadsData | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [search, setSearch] = useState('');
  const [page, setPage] = useState(1);
  const [selectedLead, setSelectedLead] = useState<Lead | null>(null);

  const fetchLeads = async (p = 1) => {
    setLoading(true);
    setError('');
    try {
      const res = await fetch(`/api/demo?page=${p}&limit=15`, {
        headers: { Authorization: `Bearer ${secret}` },
      });
      const result = await res.json();
      if (!res.ok) throw new Error(result.message);
      setData(result.data);
      setPage(p);
      setAuthed(true);
    } catch (e: any) {
      setError(e.message || 'Failed to load leads');
    } finally {
      setLoading(false);
    }
  };

  const filteredLeads = data?.leads.filter(
    (l) =>
      l.fullName.toLowerCase().includes(search.toLowerCase()) ||
      l.workEmail.toLowerCase().includes(search.toLowerCase()) ||
      l.companyName.toLowerCase().includes(search.toLowerCase())
  );

  if (!authed) {
    return (
      <div className="min-h-screen bg-surface-950 flex items-center justify-center p-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-surface-900 rounded-3xl p-10 border border-slate-800 w-full max-w-sm"
        >
          <div className="text-center mb-8">
            <h1 className="text-2xl font-bold text-white mb-2">Admin Access</h1>
            <p className="text-slate-400 text-sm">Enter your admin secret to view leads.</p>
          </div>
          <input
            type="password"
            placeholder="Admin secret..."
            value={secret}
            onChange={(e) => setSecret(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && fetchLeads()}
            className="w-full px-4 py-3 rounded-xl bg-slate-800 border border-slate-700 text-white placeholder:text-slate-500 mb-4 focus:outline-none focus:border-brand-500"
          />
          {error && <p className="text-red-400 text-sm mb-3">{error}</p>}
          <button
            onClick={() => fetchLeads()}
            disabled={loading || !secret}
            className="w-full py-3 bg-brand-500 hover:bg-brand-400 text-white font-semibold rounded-xl transition-colors disabled:opacity-50"
          >
            {loading ? 'Authenticating...' : 'Access Dashboard'}
          </button>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-surface-950 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-2xl font-bold text-white">Lead Dashboard</h1>
            <p className="text-slate-400 text-sm">{data?.total ?? 0} total leads</p>
          </div>
          <div className="flex gap-3">
            <button
              onClick={() => fetchLeads(page)}
              className="flex items-center gap-2 px-4 py-2.5 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded-xl text-sm transition-colors"
            >
              <RefreshCw className={`w-4 h-4 ${loading ? 'animate-spin' : ''}`} />
              Refresh
            </button>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-3 mb-8">
          {Object.entries(STATUS_STYLES).map(([status, style]) => {
            const count = data?.leads.filter((l) => l.status === status).length ?? 0;
            return (
              <div key={status} className="bg-surface-900 rounded-2xl border border-slate-800 p-4">
                <p className="text-slate-400 text-xs mb-1">{status.replace('_', ' ')}</p>
                <p className="text-2xl font-bold text-white">{count}</p>
              </div>
            );
          })}
        </div>

        {/* Search */}
        <div className="relative mb-5">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
          <input
            placeholder="Search by name, email, or company..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-11 pr-4 py-3 bg-slate-800 border border-slate-700 rounded-xl text-white placeholder:text-slate-500 focus:outline-none focus:border-brand-500 text-sm"
          />
        </div>

        {/* Table */}
        <div className="bg-surface-900 rounded-2xl border border-slate-800 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-slate-800">
                  {['Name', 'Email', 'Company', 'Industry', 'Size', 'Status', 'Date'].map((h) => (
                    <th key={h} className="px-4 py-3.5 text-left text-xs font-semibold text-slate-500 uppercase tracking-wider">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800">
                {(filteredLeads ?? []).map((lead) => (
                  <tr
                    key={lead.id}
                    onClick={() => setSelectedLead(selectedLead?.id === lead.id ? null : lead)}
                    className="hover:bg-slate-800/50 cursor-pointer transition-colors"
                  >
                    <td className="px-4 py-3.5 text-white text-sm font-medium">{lead.fullName}</td>
                    <td className="px-4 py-3.5 text-slate-400 text-sm">{lead.workEmail}</td>
                    <td className="px-4 py-3.5 text-slate-300 text-sm">{lead.companyName}</td>
                    <td className="px-4 py-3.5 text-slate-400 text-sm">{lead.industry || '—'}</td>
                    <td className="px-4 py-3.5 text-slate-400 text-sm">{lead.companySize || '—'}</td>
                    <td className="px-4 py-3.5">
                      <span className={`inline-block px-2.5 py-1 rounded-full text-[10px] font-bold ${STATUS_STYLES[lead.status]}`}>
                        {lead.status.replace('_', ' ')}
                      </span>
                    </td>
                    <td className="px-4 py-3.5 text-slate-500 text-xs whitespace-nowrap">
                      {new Date(lead.createdAt).toLocaleDateString()}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            {filteredLeads?.length === 0 && (
              <div className="text-center py-12 text-slate-500">No leads found.</div>
            )}
          </div>

          {/* Selected lead detail */}
          {selectedLead && (
            <div className="border-t border-slate-800 p-6 bg-slate-800/30">
              <h3 className="text-white font-semibold mb-4">Lead Detail — {selectedLead.fullName}</h3>
              <div className="grid md:grid-cols-2 gap-4 mb-4">
                {selectedLead.phoneNumber && (
                  <p className="text-slate-400 text-sm"><span className="text-slate-300">Phone:</span> {selectedLead.phoneNumber}</p>
                )}
                {selectedLead.companyWebsite && (
                  <p className="text-slate-400 text-sm"><span className="text-slate-300">Website:</span> {selectedLead.companyWebsite}</p>
                )}
                <p className="text-slate-400 text-sm"><span className="text-slate-300">Submitted:</span> {formatDate(selectedLead.createdAt)}</p>
              </div>
              {selectedLead.message && (
                <div className="bg-slate-800 rounded-xl p-4">
                  <p className="text-slate-500 text-xs mb-1">Message</p>
                  <p className="text-slate-300 text-sm leading-relaxed">{selectedLead.message}</p>
                </div>
              )}
            </div>
          )}

          {/* Pagination */}
          {data && data.totalPages > 1 && (
            <div className="border-t border-slate-800 p-4 flex items-center justify-between">
              <p className="text-slate-500 text-sm">Page {data.page} of {data.totalPages}</p>
              <div className="flex gap-2">
                <button
                  disabled={data.page <= 1}
                  onClick={() => fetchLeads(data.page - 1)}
                  className="px-4 py-2 bg-slate-800 text-slate-300 rounded-lg text-sm disabled:opacity-40 hover:bg-slate-700 transition-colors"
                >
                  Previous
                </button>
                <button
                  disabled={data.page >= data.totalPages}
                  onClick={() => fetchLeads(data.page + 1)}
                  className="px-4 py-2 bg-slate-800 text-slate-300 rounded-lg text-sm disabled:opacity-40 hover:bg-slate-700 transition-colors"
                >
                  Next
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
