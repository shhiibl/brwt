import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { GitBranch, Scale, Users, AlertTriangle, CheckCircle, Lightbulb } from 'lucide-react';

const caseStudies = [
  {
    id: 'rentoom',
    name: 'Rentoom',
    type: 'Online Rental Platform',
    relevance: 'Online discovery and booking comparison — multi-category rental platform making items accessible for temporary use.',
    lessons: [
      'Keep listing details current and easy to compare.',
      'Track listing availability by item and date — not just registration.',
      'Show rental duration, total price, deposits, delivery and cancellation before payment.',
      'Validate local supply and demand in a focused pilot before expanding.',
    ],
    differentiation: 'Verified providers, accurate availability, item condition records, transparent rental terms, structured dispute support.',
  },
  {
    id: 'rentmojo',
    name: 'Rentmojo',
    type: 'Managed Rental Service',
    relevance: 'Indian managed rental service for furniture and appliances — model for clear delivery, maintenance, extension and return processes.',
    lessons: [
      'Managed service model shows the value of end-to-end operational control.',
      'Clear return, extension and damage policies are as important as the product.',
      'Compare provider economics under different commission structures.',
      'Assess what information is available about item condition and rental history.',
    ],
    differentiation: 'Multi-provider marketplace combining convenient search with Borrow Score + AI Digital Product Passport for trust.',
  },
];

export default function Section21CaseStudies() {
  const [active, setActive] = useState(caseStudies[0]);

  return (
    <section className="relative w-full h-screen max-h-screen flex flex-col justify-between items-center px-4 sm:px-6 md:px-12 lg:px-16 pt-20 pb-6 bg-[#08090B] snap-start border-t border-white/5 overflow-hidden shrink-0">
      <div className="absolute top-1/2 right-1/3 w-80 h-80 bg-[#00FF9D]/4 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-6xl w-full h-full flex flex-col justify-between gap-3 lg:gap-4 z-10 my-auto">
        {/* Header */}
        <div className="flex flex-col items-center text-center gap-1.5">
          <span className="px-3 py-0.5 rounded-full glass-panel text-[10px] md:text-xs font-mono-tech text-[#00FF9D] border border-[#00FF9D]/20 uppercase tracking-widest">
            21 — CASE STUDY ANALYSIS
          </span>
          <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black font-space text-white leading-none uppercase tracking-tight">
            MARKET<br />
            <span className="text-gradient-mint">BENCHMARKS</span>
          </h2>
        </div>

        {/* Toggle */}
        <div className="flex gap-3 justify-center">
          {caseStudies.map((cs) => (
            <button
              key={cs.id}
              onClick={() => setActive(cs)}
              className={`px-5 py-2 rounded-full text-xs font-mono-tech font-bold uppercase tracking-widest transition-all border ${
                active.id === cs.id
                  ? 'border-[#00FF9D]/60 bg-[#00FF9D]/15 text-[#00FF9D]'
                  : 'glass-panel border-white/10 text-slate-400 hover:text-white'
              }`}
            >
              {cs.name}
            </button>
          ))}
        </div>

        <motion.div
          key={active.id}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4 flex-1 min-h-0 max-h-[62vh]"
        >
          {/* Left */}
          <div className="flex flex-col gap-3 overflow-y-auto">
            <div className="glass-panel p-4 md:p-5 rounded-xl border border-white/10 flex flex-col gap-2">
              <span className="text-[9px] font-mono-tech text-[#00FF9D] uppercase tracking-widest">{active.type}</span>
              <h3 className="text-lg md:text-2xl font-black font-space text-white">{active.name}</h3>
              <p className="text-xs md:text-sm text-slate-300 leading-relaxed">{active.relevance}</p>
            </div>
            <div className="glass-panel p-4 md:p-5 rounded-xl border border-white/10 flex flex-col gap-2 flex-1">
              <div className="flex items-center gap-2">
                <Lightbulb className="w-4 h-4 text-[#00FF9D]" />
                <span className="text-xs font-bold font-space text-white uppercase tracking-wide">Key Lessons for BORROWIT</span>
              </div>
              {active.lessons.map((l, i) => (
                <div key={i} className="flex items-start gap-2.5">
                  <CheckCircle className="w-3.5 h-3.5 text-[#00FF9D] shrink-0 mt-0.5" />
                  <span className="text-xs text-slate-300 leading-relaxed">{l}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right */}
          <div className="flex flex-col gap-3">
            <div className="glass-panel p-4 md:p-5 rounded-xl border border-[#00FF9D]/20 flex flex-col gap-2 flex-1">
              <div className="flex items-center gap-2">
                <GitBranch className="w-4 h-4 text-[#00FF9D]" />
                <span className="text-xs font-bold font-space text-white uppercase tracking-wide">BORROWIT's Differentiation</span>
              </div>
              <p className="text-xs md:text-sm text-slate-300 leading-relaxed">{active.differentiation}</p>
              <div className="flex flex-wrap gap-1.5 mt-2">
                {['Verified Providers', 'Borrow Score', 'AI Product Passport', 'Transparent Terms', 'Human Dispute Review'].map((tag) => (
                  <span key={tag} className="text-[9px] font-mono-tech px-2 py-0.5 rounded-full bg-[#00FF9D]/10 border border-[#00FF9D]/20 text-[#00FF9D]">{tag}</span>
                ))}
              </div>
            </div>

            <div className="glass-panel p-4 rounded-xl border border-white/10 flex flex-col gap-2">
              <div className="flex items-center gap-2">
                <AlertTriangle className="w-4 h-4 text-amber-400" />
                <span className="text-xs font-bold font-space text-white uppercase tracking-wide">Important Caveat</span>
              </div>
              <p className="text-[10px] md:text-xs text-slate-400 leading-relaxed">
                These case studies are market comparisons — not proof of product-market fit. BORROWIT must validate its differentiation through a pilot that measures listing accuracy, timely returns, damage claims, repeat bookings, customer confidence and contribution per booking.
              </p>
            </div>

            <div className="glass-panel p-4 rounded-xl border border-white/10 flex flex-col gap-2">
              <div className="flex items-center gap-2">
                <Scale className="w-4 h-4 text-[#00FF9D]" />
                <span className="text-xs font-bold font-space text-white uppercase tracking-wide">The Edge</span>
              </div>
              <p className="text-[10px] md:text-xs text-slate-400 leading-relaxed">
                Where Rentoom shows discovery and Rentmojo shows managed service, BORROWIT combines both — multi-provider marketplace with structured trust infrastructure via Borrow Score and AI Digital Product Passport.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
