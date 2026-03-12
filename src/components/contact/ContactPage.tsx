'use client';

// src/components/contact/ContactPage.tsx
import { useState } from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { demoFormSchema, DemoFormSchema, INDUSTRY_OPTIONS, COMPANY_SIZE_OPTIONS } from '@/lib/validations';
import { CheckCircle2, Loader2, AlertCircle, Calendar, Clock, Users, ArrowRight } from 'lucide-react';

type FormStatus = 'idle' | 'loading' | 'success' | 'error';

export function ContactPage() {
  const [status, setStatus] = useState<FormStatus>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<DemoFormSchema>({
    resolver: zodResolver(demoFormSchema),
  });

  const onSubmit = async (data: DemoFormSchema) => {
    setStatus('loading');
    setErrorMessage('');

    try {
      const res = await fetch('/api/demo', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      const result = await res.json();

      if (!res.ok || !result.success) {
        throw new Error(result.message || 'Submission failed');
      }

      setStatus('success');
      reset();
    } catch (err: any) {
      setStatus('error');
      setErrorMessage(err.message || 'Something went wrong. Please try again.');
    }
  };

  const inputClass = (hasError: boolean) =>
    `w-full px-4 py-3 rounded-xl border text-sm text-slate-900 placeholder:text-slate-400 bg-white transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-brand-500/20 focus:border-brand-400 ${
      hasError ? 'border-red-300 bg-red-50' : 'border-slate-200 hover:border-slate-300'
    }`;

  const labelClass = 'block text-sm font-semibold text-slate-700 mb-1.5';

  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-16 mesh-bg overflow-hidden">
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold text-white mb-4"
          >
            See NexaFlow in action.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-slate-300 text-lg max-w-xl mx-auto"
          >
            Book a personalised 30-minute demo with one of our ERP specialists. Tailored to your industry and challenges.
          </motion.p>
        </div>
      </section>

      {/* Content */}
      <section className="pb-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-16">
            {/* Left: Info */}
            <div className="lg:col-span-2">
              <div className="sticky top-28">
                <h2 className="text-2xl font-bold text-slate-900 mb-3">What to expect</h2>
                <p className="text-slate-600 text-sm leading-relaxed mb-8">
                  Our ERP specialists will walk you through a live demo personalised to your industry and specific challenges — no generic slideshows.
                </p>

                <div className="space-y-5 mb-10">
                  {[
                    { icon: Calendar, title: '30-minute session', desc: 'Focused, efficient, and tailored to your goals' },
                    { icon: Clock, title: 'Flexible scheduling', desc: 'Choose a time that works across time zones' },
                    { icon: Users, title: 'Meet the experts', desc: 'Talk directly with our solutions engineering team' },
                  ].map(({ icon: Icon, title, desc }) => (
                    <div key={title} className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-xl bg-brand-100 flex items-center justify-center flex-shrink-0">
                        <Icon className="w-5 h-5 text-brand-600" />
                      </div>
                      <div>
                        <p className="font-semibold text-slate-900 text-sm">{title}</p>
                        <p className="text-slate-500 text-xs mt-0.5">{desc}</p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Social proof */}
                <div className="bg-surface-50 rounded-2xl border border-slate-100 p-5">
                  <p className="text-slate-700 text-sm italic leading-relaxed mb-3">
                    "The demo was incredibly tailored. The NexaFlow team came fully prepared with our industry workflows already mapped out."
                  </p>
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-brand-500 to-violet-500 flex items-center justify-center">
                      <span className="text-white text-xs font-bold">DL</span>
                    </div>
                    <div>
                      <p className="text-slate-900 font-semibold text-xs">Daniel Lim</p>
                      <p className="text-slate-400 text-xs">CTO, Primus Group</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Form */}
            <div className="lg:col-span-3">
              {status === 'success' ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="rounded-3xl border-2 border-emerald-200 bg-emerald-50 p-12 text-center"
                >
                  <div className="w-16 h-16 rounded-full bg-emerald-100 flex items-center justify-center mx-auto mb-6">
                    <CheckCircle2 className="w-8 h-8 text-emerald-500" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-3">Request received!</h3>
                  <p className="text-slate-600 mb-6">
                    Your demo request has been submitted. One of our ERP specialists will reach out within one business day to schedule your session.
                  </p>
                  <button
                    onClick={() => setStatus('idle')}
                    className="px-6 py-3 bg-brand-500 text-white font-semibold rounded-xl hover:bg-brand-600 transition-colors text-sm"
                  >
                    Submit Another Request
                  </button>
                </motion.div>
              ) : (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-white rounded-3xl border-2 border-slate-100 shadow-card p-8 md:p-10"
                >
                  <h3 className="text-xl font-bold text-slate-900 mb-1">Book your demo</h3>
                  <p className="text-slate-500 text-sm mb-8">All fields marked with * are required.</p>

                  {status === 'error' && (
                    <div className="mb-6 p-4 rounded-xl bg-red-50 border border-red-200 flex items-start gap-3">
                      <AlertCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                      <p className="text-red-700 text-sm">{errorMessage}</p>
                    </div>
                  )}

                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-5" noValidate>
                    {/* Row 1: Name + Email */}
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className={labelClass}>Full Name *</label>
                        <input
                          {...register('fullName')}
                          placeholder="Sarah Johnson"
                          className={inputClass(!!errors.fullName)}
                        />
                        {errors.fullName && <p className="mt-1.5 text-xs text-red-500">{errors.fullName.message}</p>}
                      </div>
                      <div>
                        <label className={labelClass}>Work Email *</label>
                        <input
                          {...register('workEmail')}
                          type="email"
                          placeholder="sarah@company.com"
                          className={inputClass(!!errors.workEmail)}
                        />
                        {errors.workEmail && <p className="mt-1.5 text-xs text-red-500">{errors.workEmail.message}</p>}
                      </div>
                    </div>

                    {/* Row 2: Company + Website */}
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className={labelClass}>Company Name *</label>
                        <input
                          {...register('companyName')}
                          placeholder="Acme Corporation"
                          className={inputClass(!!errors.companyName)}
                        />
                        {errors.companyName && <p className="mt-1.5 text-xs text-red-500">{errors.companyName.message}</p>}
                      </div>
                      <div>
                        <label className={labelClass}>Company Website</label>
                        <input
                          {...register('companyWebsite')}
                          type="url"
                          placeholder="https://acme.com"
                          className={inputClass(!!errors.companyWebsite)}
                        />
                        {errors.companyWebsite && <p className="mt-1.5 text-xs text-red-500">{errors.companyWebsite.message}</p>}
                      </div>
                    </div>

                    {/* Row 3: Phone */}
                    <div>
                      <label className={labelClass}>Phone Number</label>
                      <input
                        {...register('phoneNumber')}
                        type="tel"
                        placeholder="+1 (555) 000-0000"
                        className={inputClass(!!errors.phoneNumber)}
                      />
                      {errors.phoneNumber && <p className="mt-1.5 text-xs text-red-500">{errors.phoneNumber.message}</p>}
                    </div>

                    {/* Row 4: Industry + Company Size */}
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className={labelClass}>Industry</label>
                        <select {...register('industry')} className={inputClass(!!errors.industry)}>
                          <option value="">Select industry...</option>
                          {INDUSTRY_OPTIONS.map((opt) => (
                            <option key={opt} value={opt}>{opt}</option>
                          ))}
                        </select>
                      </div>
                      <div>
                        <label className={labelClass}>Company Size</label>
                        <select {...register('companySize')} className={inputClass(!!errors.companySize)}>
                          <option value="">Select size...</option>
                          {COMPANY_SIZE_OPTIONS.map((opt) => (
                            <option key={opt} value={opt}>{opt}</option>
                          ))}
                        </select>
                      </div>
                    </div>

                    {/* Message */}
                    <div>
                      <label className={labelClass}>What are your main requirements?</label>
                      <textarea
                        {...register('message')}
                        rows={4}
                        placeholder="Tell us about your current challenges, the modules you're most interested in, or anything specific you'd like us to cover in the demo..."
                        className={`${inputClass(!!errors.message)} resize-none`}
                      />
                      {errors.message && <p className="mt-1.5 text-xs text-red-500">{errors.message.message}</p>}
                    </div>

                    {/* Anti-spam notice */}
                    <p className="text-xs text-slate-400">
                      By submitting this form, you agree to our{' '}
                      <a href="/privacy" className="text-brand-500 hover:underline">Privacy Policy</a>.
                      We'll never share your information with third parties.
                    </p>

                    <button
                      type="submit"
                      disabled={status === 'loading'}
                      className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-brand-500 hover:bg-brand-600 disabled:bg-brand-300 text-white font-bold rounded-2xl transition-all duration-200 text-base shadow-brand hover:shadow-brand-lg"
                    >
                      {status === 'loading' ? (
                        <>
                          <Loader2 className="w-5 h-5 animate-spin" />
                          Submitting...
                        </>
                      ) : (
                        <>
                          Book My Demo
                          <ArrowRight className="w-5 h-5" />
                        </>
                      )}
                    </button>
                  </form>
                </motion.div>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
