import React from 'react';
import { motion } from 'framer-motion';
import { BarChart2, TrendingUp, TrendingDown, DollarSign, AlertCircle } from 'lucide-react';

const ratios = [
  { label: 'Gross Profit Ratio', formula: '(GP ÷ Revenue) × 100', result: '97.64%', interpretation: 'Minimal direct transaction cost — payment gateway is the only direct cost against income.', positive: true },
  { label: 'Net Profit Ratio', formula: '(Net Loss ÷ Revenue) × 100', result: '−488.36%', interpretation: 'Large net loss in first month is expected at concept stage — high one-time setup costs dominate.', positive: false },
  { label: 'Operating Expense Ratio', formula: '(Opex ÷ Revenue) × 100', result: '586.00%', interpretation: 'Operating costs significantly exceed early revenue. This is a pilot phase metric, not a steady-state figure.', positive: false },
  { label: 'Marketing Expense / Income', formula: '(Marketing ÷ Income) × 100', result: '300.00%', interpretation: '₹1,50,000 in marketing & branding spend versus ₹50,000 income — typical for launch-phase investment.', positive: false },
];

const projections = [
  { year: 'Year 1', bookings: '6,000', result: '−₹21L', note: 'Pilot & infrastructure investment' },
  { year: 'Year 2', bookings: '18,000', result: '−₹15L', note: 'Growing supply & user base' },
  { year: 'Year 3', bookings: '36,000', result: '+₹6L', note: 'Positive operating contribution' },
];

export default function Section17RatiosProjections() {
  return (
    <section className="relative w-full h-screen max-h-screen flex flex-col justify-between items-center px-4 sm:px-6 md:px-12 lg:px-16 pt-20 pb-6 bg-[#08090B] snap-start border-t border-white/5 overflow-hidden shrink-0">
      <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-[#00FF9D]/4 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-6xl w-full h-full flex flex-col justify-between gap-3 lg:gap-4 z-10 my-auto">
        {/* Header */}
        <div className="flex flex-col items-center text-center gap-1.5">
          <span className="px-3 py-0.5 rounded-full glass-panel text-[10px] md:text-xs font-mono-tech text-[#00FF9D] border border-[#00FF9D]/20 uppercase tracking-widest">
            17 — RATIOS & 3-YEAR PROJECTIONS
          </span>
          <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black font-space text-white leading-none uppercase tracking-tight">
            THE NUMBERS<br />
            <span className="text-gradient-mint">DON'T LIE</span>
          </h2>
        </div>

        {/* 3-Year Projections */}
        <div className="glass-panel p-4 md:p-5 rounded-xl border border-white/10">
          <div className="flex items-center gap-2 mb-3">
            <TrendingUp className="w-4 h-4 text-[#00FF9D]" />
            <span className="text-xs font-bold font-space text-white uppercase tracking-wide">3-Year Operating Scenario</span>
            <span className="ml-auto text-[9px] font-mono-tech text-slate-500">Assumptions: ₹2,000 avg rental, 15% fee, ₹300 gross fee, ₹150 variable cost</span>
          </div>
          <div className="grid grid-cols-3 gap-2 md:gap-3">
            {projections.map((p, i) => (
              <motion.div
                key={p.year}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className={`glass-panel p-3 md:p-4 rounded-xl border flex flex-col gap-1.5 ${i === 2 ? 'border-[#00FF9D]/30' : 'border-white/10'}`}
              >
                <span className="text-[9px] font-mono-tech text-slate-400 uppercase tracking-widest">{p.year}</span>
                <span className="text-xs md:text-sm font-mono-tech text-slate-300">{p.bookings} bookings</span>
                <span className={`text-lg md:text-2xl font-black font-space ${p.result.includes('+') ? 'text-[#00FF9D]' : 'text-red-400'}`}>{p.result}</span>
                <span className="text-[9px] text-slate-500 leading-tight">{p.note}</span>
              </motion.div>
            ))}
          </div>
          <div className="mt-3 flex items-start gap-2 text-[10px] text-slate-500">
            <AlertCircle className="w-3 h-3 text-slate-500 shrink-0 mt-0.5" />
            Projections exclude one-time setup costs, taxes, financing and material losses. Treat as pilot hypothesis — validate against observed booking economics.
          </div>
        </div>

        {/* Financial Ratios */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-3 flex-1 min-h-0 max-h-[42vh] overflow-y-auto">
          {ratios.map((r, i) => (
            <motion.div
              key={r.label}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass-panel p-3.5 md:p-4 rounded-xl border border-white/10 hover:border-[#00FF9D]/20 transition-all flex flex-col gap-2"
            >
              <div className="flex items-start justify-between gap-2">
                <div className="flex flex-col gap-0.5">
                  <span className="text-xs font-bold font-space text-white">{r.label}</span>
                  <span className="text-[9px] font-mono-tech text-slate-500">{r.formula}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  {r.positive ? (
                    <TrendingUp className="w-3.5 h-3.5 text-[#00FF9D]" />
                  ) : (
                    <TrendingDown className="w-3.5 h-3.5 text-red-400" />
                  )}
                  <span className={`text-sm md:text-base font-black font-space ${r.positive ? 'text-[#00FF9D]' : 'text-red-400'}`}>{r.result}</span>
                </div>
              </div>
              <p className="text-[10px] md:text-[11px] text-slate-400 leading-relaxed">{r.interpretation}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
