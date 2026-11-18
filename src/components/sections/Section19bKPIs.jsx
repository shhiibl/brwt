import React from 'react';
import { motion } from 'framer-motion';

const kpis = [
  { label: 'New Renter Registrations',     category: 'Acquisition', target: '500/mo',   color: '#00FF9D', pct: 72 },
  { label: 'New Provider Registrations',   category: 'Acquisition', target: '50/mo',    color: '#00FF9D', pct: 60 },
  { label: 'Search-to-Book Conversion',    category: 'Booking',     target: '8–12%',    color: '#00BFFF', pct: 48 },
  { label: 'Repeat Booking Rate',          category: 'Retention',   target: '30%+',     color: '#00BFFF', pct: 56 },
  { label: 'Borrow Score Coverage',        category: 'Trust',       target: '80% users', color: '#A855F7', pct: 64 },
  { label: 'AI Flags per 100 Bookings',    category: 'Trust',       target: '<5 flags', color: '#A855F7', pct: 40 },
  { label: 'Avg Booking Value',            category: 'Revenue',     target: '₹2,000+',  color: '#F97316', pct: 70 },
  { label: 'Customer Satisfaction Score',  category: 'Quality',     target: '4.5/5',    color: '#F97316', pct: 80 },
  { label: 'On-Time Return Rate',          category: 'Quality',     target: '95%+',     color: '#EC4899', pct: 76 },
  { label: 'Cost per Acquired Customer',   category: 'Efficiency',  target: '<₹300',    color: '#EC4899', pct: 52 },
];

const categoryColors = {
  Acquisition: '#00FF9D',
  Booking:     '#00BFFF',
  Retention:   '#00BFFF',
  Trust:       '#A855F7',
  Revenue:     '#F97316',
  Quality:     '#F97316',
  Efficiency:  '#EC4899',
};

export default function Section19bKPIs() {
  return (
    <section className="relative w-full h-screen max-h-screen flex flex-col justify-between items-center px-4 sm:px-6 md:px-12 lg:px-16 pt-20 pb-6 bg-[#08090B] snap-start border-t border-white/5 overflow-hidden shrink-0">
      <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-[#A855F7]/4 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-6xl w-full h-full flex flex-col gap-4 z-10 my-auto">
        {/* Header */}
        <div className="flex flex-col items-center text-center gap-1.5 shrink-0">
          <span className="px-3 py-0.5 rounded-full glass-panel text-[10px] font-mono-tech text-[#00FF9D] border border-[#00FF9D]/20 uppercase tracking-widest">
            19B — PERFORMANCE KPIs
          </span>
          <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black font-space text-white leading-none uppercase tracking-tight">
            WHAT WE<br />
            <span className="text-gradient-mint">MEASURE</span>
          </h2>
        </div>

        {/* KPI Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 flex-1 min-h-0 overflow-y-auto">
          {kpis.map((k, i) => (
            <motion.div
              key={k.label}
              initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="glass-panel p-4 rounded-xl border border-white/10 hover:border-white/20 transition-all flex flex-col gap-2.5"
            >
              <div className="flex items-start justify-between gap-2">
                <div className="flex flex-col gap-0.5">
                  <span className="text-sm font-medium text-white leading-tight">{k.label}</span>
                  <div className="flex items-center gap-2">
                    <span
                      className="text-[8px] font-mono-tech px-1.5 py-0.5 rounded-full uppercase tracking-widest font-bold"
                      style={{ color: categoryColors[k.category], background: `${categoryColors[k.category]}15` }}
                    >
                      {k.category}
                    </span>
                    <span className="text-[9px] font-mono-tech text-slate-500">Target: {k.target}</span>
                  </div>
                </div>
                <span className="text-sm font-black font-mono-tech shrink-0" style={{ color: k.color }}>
                  {k.pct}%
                </span>
              </div>
              <div className="w-full h-2 rounded-full bg-white/5 overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${k.pct}%` }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.06 + 0.2, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                  className="h-full rounded-full"
                  style={{ background: `linear-gradient(90deg, ${k.color}80, ${k.color})`, boxShadow: `0 0 10px ${k.color}50` }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
