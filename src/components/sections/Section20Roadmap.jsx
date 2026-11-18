import React from 'react';
import { motion } from 'framer-motion';

const timeline = [
  {
    period: 'Months 1–2', title: 'Discovery & Supply', num: '01', color: '#00FF9D',
    milestone: '50+ provider confirmations',
    tasks: [
      'Structured interviews — 15 potential renters, 10 providers',
      'Validate demand: cameras + projectors as first categories',
      'Recruit and verify initial provider base in Calicut',
      'Draft terms: deposits, returns, damage claims, escalation policy',
    ]
  },
  {
    period: 'Months 3–4', title: 'MVP Launch', num: '02', color: '#00BFFF',
    milestone: '50–100 paid bookings',
    tasks: [
      'Go live in one city cluster with approved provider listings',
      'Enable search, listing, booking flow, Borrow Score & Product Passport',
      'Provider onboarding and verification complete',
      'Support coverage planned for full checkout-to-return cycle',
    ]
  },
  {
    period: 'Months 5–8', title: 'Optimise & Measure', num: '03', color: '#A855F7',
    milestone: 'Positive contribution/booking',
    tasks: [
      'Improve return reliability and dispute resolution process',
      'Measure contribution per booking vs variable and fixed costs',
      'Track repeat booking rate by equipment category',
      'Weekly review: availability, conversion, disputes, support cost',
    ]
  },
  {
    period: 'Months 9–12', title: 'Selective Expansion', num: '04', color: '#F97316',
    milestone: 'Repeatable city playbook',
    tasks: [
      'Consider one city or category addition only if metrics justify it',
      'Add power tools if supply and safety checks are ready',
      'Compare customer acquisition cost vs expected repeat contribution',
      'Monthly go/change/stop decisions with recorded rationale',
    ]
  },
];

export default function Section20Roadmap() {
  return (
    <section className="relative w-full h-screen max-h-screen flex flex-col justify-between items-center px-4 sm:px-6 md:px-12 lg:px-16 pt-20 pb-6 bg-[#08090B] snap-start border-t border-white/5 overflow-hidden shrink-0">
      <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-[#00FF9D]/4 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-6xl w-full h-full flex flex-col gap-4 z-10 my-auto">
        {/* Header */}
        <div className="flex flex-col items-center text-center gap-1.5 shrink-0">
          <span className="px-3 py-0.5 rounded-full glass-panel text-[10px] font-mono-tech text-[#00FF9D] border border-[#00FF9D]/20 uppercase tracking-widest">
            20 — IMPLEMENTATION: 12-MONTH ROADMAP
          </span>
          <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black font-space text-white leading-none uppercase tracking-tight">
            THE PLAN.<br />
            <span className="text-gradient-mint">STEP BY STEP.</span>
          </h2>
        </div>

        {/* Timeline Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 flex-1 min-h-0 overflow-y-auto">
          {timeline.map((t, i) => (
            <motion.div
              key={t.period}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
              className="glass-panel p-5 rounded-2xl border border-white/10 hover:border-white/20 transition-all flex flex-col gap-3"
            >
              <div className="flex items-start justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center font-black font-space text-sm shrink-0" style={{ background: `${t.color}18`, color: t.color }}>
                    {t.num}
                  </div>
                  <div>
                    <span className="text-[9px] font-mono-tech uppercase tracking-widest block mb-0.5" style={{ color: `${t.color}80` }}>{t.period}</span>
                    <h3 className="text-base font-bold font-space text-white">{t.title}</h3>
                  </div>
                </div>
                <span
                  className="text-[8px] font-mono-tech px-2.5 py-1 rounded-full border shrink-0 font-bold"
                  style={{ color: t.color, borderColor: `${t.color}30`, background: `${t.color}10` }}
                >
                  🎯 {t.milestone}
                </span>
              </div>

              <div className="flex flex-col gap-1.5">
                {t.tasks.map((task) => (
                  <div key={task} className="flex items-start gap-2 text-[11px] text-slate-400">
                    <span className="shrink-0 mt-0.5 font-bold" style={{ color: t.color }}>▸</span>
                    {task}
                  </div>
                ))}
              </div>

              {/* Phase progress bar */}
              <div className="flex items-center gap-2 pt-1">
                <div className="flex-1 h-1 rounded-full bg-white/5 overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${25 * (i + 1)}%` }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 + 0.3, duration: 0.7 }}
                    className="h-full rounded-full"
                    style={{ background: t.color }}
                  />
                </div>
                <span className="text-[8px] font-mono-tech text-slate-600">{25 * (i + 1)}%</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Year 2+ note */}
        <div className="glass-panel px-5 py-3 rounded-xl border border-white/10 flex items-center gap-3 shrink-0">
          <div className="w-2 h-2 rounded-full bg-[#00FF9D] shadow-[0_0_8px_#00FF9D] shrink-0" />
          <span className="text-[10px] font-mono-tech text-slate-400">
            Year 2+: Broader expansion only after a repeatable city playbook is demonstrated. All milestones are proposals — record every go/change/stop decision with rationale.
          </span>
        </div>
      </div>
    </section>
  );
}
