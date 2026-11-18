import React from 'react';
import { motion } from 'framer-motion';
import { Clock, Users, Zap, BarChart2, AlertCircle, CheckCircle2 } from 'lucide-react';

const timeline = [
  { period: 'Months 1–2', title: 'Discovery & Supply', tasks: ['Customer & provider interviews (15 renters, 10 providers)', 'Validate demand: cameras + projectors first', 'Recruit & verify initial provider base', 'Draft terms: deposits, returns, claims policy'], milestone: '50+ provider interest confirmations' },
  { period: 'Months 3–4', title: 'MVP Launch', tasks: ['Launch in one city cluster', 'Enable search, listing, booking flow', 'Borrow Score & Product Passport live', 'Provider onboarding & verification complete'], milestone: '50–100 completed paid bookings' },
  { period: 'Months 5–8', title: 'Optimise & Measure', tasks: ['Improve return reliability & dispute resolution', 'Measure contribution per booking', 'Track repeat booking rate by category', 'Review weekly: availability, conversion, disputes'], milestone: 'Positive contribution per booking' },
  { period: 'Months 9–12', title: 'Selective Expansion', tasks: ['Consider one city or category addition only if metrics justify', 'Add power tools if supply & safety checks ready', 'Measure customer acquisition cost vs repeat contribution', 'Monthly go/change/stop decisions with recorded rationale'], milestone: 'Repeatable city playbook demonstrated' },
];

const budget = [
  { label: 'MVP & Admin Tools', amount: 600000, pct: 27 },
  { label: 'Vendor Onboarding & Ops', amount: 400000, pct: 18 },
  { label: 'Marketing & Branding', amount: 400000, pct: 18 },
  { label: 'Trust, Legal, Payments & Claims', amount: 300000, pct: 14 },
  { label: 'Contingency & Working Capital', amount: 500000, pct: 23 },
];

export default function Section20ImplementationPlan() {
  const totalBudget = budget.reduce((a, b) => a + b.amount, 0);

  return (
    <section className="relative w-full h-screen max-h-screen flex flex-col justify-between items-center px-4 sm:px-6 md:px-12 lg:px-16 pt-20 pb-6 bg-[#08090B] snap-start border-t border-white/5 overflow-hidden shrink-0">
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-[#00FF9D]/4 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-6xl w-full h-full flex flex-col justify-between gap-3 lg:gap-4 z-10 my-auto">
        {/* Header */}
        <div className="flex flex-col items-center text-center gap-1.5">
          <span className="px-3 py-0.5 rounded-full glass-panel text-[10px] md:text-xs font-mono-tech text-[#00FF9D] border border-[#00FF9D]/20 uppercase tracking-widest">
            20 — IMPLEMENTATION PLAN
          </span>
          <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black font-space text-white leading-none uppercase tracking-tight">
            PILOT<br />
            <span className="text-gradient-mint">ROADMAP</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4 flex-1 min-h-0 max-h-[65vh]">
          {/* Timeline */}
          <div className="md:col-span-2 flex flex-col gap-2 overflow-y-auto">
            <span className="text-[9px] font-mono-tech text-[#00FF9D] uppercase tracking-widest shrink-0">12-Month Rollout</span>
            <div className="flex flex-col gap-2">
              {timeline.map((t, i) => (
                <motion.div
                  key={t.period}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="glass-panel p-3.5 md:p-4 rounded-xl border border-white/10 hover:border-[#00FF9D]/20 transition-all flex gap-3"
                >
                  <div className="flex flex-col items-center gap-1 shrink-0">
                    <div className="w-7 h-7 rounded-lg bg-[#00FF9D]/10 flex items-center justify-center text-[#00FF9D] text-[10px] font-mono-tech font-bold">{i + 1}</div>
                    {i < timeline.length - 1 && <div className="w-[1px] flex-1 bg-white/10" />}
                  </div>
                  <div className="flex flex-col gap-1 flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-2 flex-wrap">
                      <div>
                        <span className="text-[9px] font-mono-tech text-[#00FF9D]/70">{t.period}</span>
                        <h3 className="text-xs md:text-sm font-bold font-space text-white">{t.title}</h3>
                      </div>
                      <span className="text-[8px] md:text-[9px] font-mono-tech px-2 py-0.5 rounded bg-[#00FF9D]/10 text-[#00FF9D] border border-[#00FF9D]/20 shrink-0">🎯 {t.milestone}</span>
                    </div>
                    <ul className="flex flex-col gap-0.5">
                      {t.tasks.map((task) => (
                        <li key={task} className="flex items-start gap-1.5 text-[9px] md:text-[10px] text-slate-400">
                          <span className="text-[#00FF9D] mt-0.5 shrink-0">▸</span>
                          {task}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Pilot Budget */}
          <div className="flex flex-col gap-3">
            <span className="text-[9px] font-mono-tech text-[#00FF9D] uppercase tracking-widest">Pilot Budget — ₹22L (Illustrative)</span>
            <div className="glass-panel rounded-xl border border-white/10 p-4 flex flex-col gap-3 flex-1">
              {budget.map((b, i) => (
                <div key={b.label} className="flex flex-col gap-1">
                  <div className="flex justify-between items-center">
                    <span className="text-[9px] md:text-[10px] text-slate-300 leading-tight">{b.label}</span>
                    <span className="text-[9px] font-mono-tech text-[#00FF9D] font-bold">₹{(b.amount / 100000).toFixed(0)}L</span>
                  </div>
                  <div className="w-full h-1.5 rounded-full bg-white/5 overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${b.pct}%` }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1, duration: 0.7 }}
                      className="h-full bg-[#00FF9D] rounded-full"
                    />
                  </div>
                </div>
              ))}
              <div className="border-t border-white/10 pt-2 flex justify-between">
                <span className="text-xs font-bold font-space text-white">TOTAL</span>
                <span className="text-sm font-black font-space text-[#00FF9D]">₹22,00,000</span>
              </div>
            </div>
            <div className="glass-panel p-3 rounded-xl border border-white/10 flex items-start gap-2">
              <AlertCircle className="w-3.5 h-3.5 text-slate-500 shrink-0 mt-0.5" />
              <p className="text-[9px] text-slate-500 leading-relaxed">Illustrative allocations — not supplier-quoted. Obtain firm proposals and confirm scope, actual costs and funding before commitments.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
