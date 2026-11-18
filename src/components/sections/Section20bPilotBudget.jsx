import React from 'react';
import { motion } from 'framer-motion';
import { AlertCircle } from 'lucide-react';

const budget = [
  { label: 'MVP & Admin Tools',               amount: 600000, pct: 27, color: '#00FF9D', note: 'Prototype, search, booking, Passport & admin screens' },
  { label: 'Vendor Onboarding & Operations',  amount: 400000, pct: 18, color: '#00BFFF', note: 'Provider checks, listings, availability, handover support' },
  { label: 'Marketing & Branding',            amount: 400000, pct: 18, color: '#A855F7', note: 'Full-service agency — logo, campaigns, launch promotion' },
  { label: 'Trust, Legal, Payments & Claims', amount: 300000, pct: 14, color: '#F97316', note: 'Contracts, privacy, payment gateway, insurance review' },
  { label: 'Contingency & Working Capital',   amount: 500000, pct: 23, color: '#EC4899', note: 'Buffer for unexpected costs and operational ramp-up' },
];

const total = budget.reduce((s, b) => s + b.amount, 0);

export default function Section20bPilotBudget() {
  return (
    <section className="relative w-full h-screen max-h-screen flex flex-col justify-between items-center px-4 sm:px-6 md:px-12 lg:px-16 pt-20 pb-6 bg-[#08090B] snap-start border-t border-white/5 overflow-hidden shrink-0">
      <div className="absolute bottom-1/3 right-1/3 w-96 h-96 bg-[#00FF9D]/4 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-6xl w-full h-full flex flex-col gap-4 z-10 my-auto">
        {/* Header */}
        <div className="flex flex-col items-center text-center gap-1.5 shrink-0">
          <span className="px-3 py-0.5 rounded-full glass-panel text-[10px] font-mono-tech text-[#00FF9D] border border-[#00FF9D]/20 uppercase tracking-widest">
            20B — PILOT BUDGET
          </span>
          <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black font-space text-white leading-none uppercase tracking-tight">
            ₹22 LAKH<br />
            <span className="text-gradient-mint">PILOT ALLOCATION</span>
          </h2>
        </div>

        {/* Donut-style visual + breakdown */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 flex-1 min-h-0">

          {/* Visual Breakdown */}
          <div className="glass-panel p-5 rounded-2xl border border-white/10 flex flex-col gap-4 justify-center">
            <span className="text-[9px] font-mono-tech text-slate-500 uppercase tracking-widest">Budget Split — Visual</span>
            <div className="flex flex-col gap-3">
              {budget.map((b, i) => (
                <motion.div
                  key={b.label}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  className="flex flex-col gap-1.5"
                >
                  <div className="flex items-center justify-between text-[11px]">
                    <span className="text-slate-300 font-medium">{b.label}</span>
                    <div className="flex items-center gap-2">
                      <span className="font-bold font-mono-tech" style={{ color: b.color }}>₹{(b.amount / 100000).toFixed(0)}L</span>
                      <span className="text-slate-600 font-mono-tech">{b.pct}%</span>
                    </div>
                  </div>
                  <div className="w-full h-2.5 rounded-full bg-white/5 overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${b.pct}%` }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 + 0.2, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                      className="h-full rounded-full"
                      style={{ background: `linear-gradient(90deg, ${b.color}80, ${b.color})`, boxShadow: `0 0 10px ${b.color}50` }}
                    />
                  </div>
                  <span className="text-[9px] text-slate-600">{b.note}</span>
                </motion.div>
              ))}
            </div>

            <div className="border-t border-white/10 pt-3 flex justify-between items-center">
              <span className="text-sm font-bold font-space text-white uppercase">Total Pilot Budget</span>
              <span className="text-2xl font-black font-space text-[#00FF9D]">₹22,00,000</span>
            </div>
          </div>

          {/* Detail Cards */}
          <div className="flex flex-col gap-3 overflow-y-auto">
            <span className="text-[9px] font-mono-tech text-slate-500 uppercase tracking-widest shrink-0">What Each Allocation Covers</span>
            {budget.map((b, i) => (
              <motion.div
                key={b.label}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="glass-panel p-4 rounded-xl border border-white/10 hover:border-white/20 transition-all flex items-start gap-3.5"
              >
                <div className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0 font-bold font-space text-xs" style={{ background: `${b.color}18`, color: b.color }}>
                  {b.pct}%
                </div>
                <div className="flex flex-col gap-0.5 flex-1">
                  <span className="text-sm font-bold font-space text-white">{b.label}</span>
                  <span className="text-[10px] text-slate-400 leading-relaxed">{b.note}</span>
                  <span className="text-[9px] font-mono-tech font-bold" style={{ color: b.color }}>₹{b.amount.toLocaleString('en-IN')}</span>
                </div>
              </motion.div>
            ))}

            <div className="glass-panel p-3.5 rounded-xl border border-white/10 flex items-start gap-2.5 shrink-0">
              <AlertCircle className="w-4 h-4 text-slate-500 shrink-0 mt-0.5" />
              <p className="text-[9px] text-slate-500 leading-relaxed">
                Illustrative allocations — not supplier-quoted. Obtain firm proposals and confirm scope, actual costs and funding before any commitments are made.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
