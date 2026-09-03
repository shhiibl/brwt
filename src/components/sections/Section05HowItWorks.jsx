import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, ShieldCheck, CreditCard, RotateCcw, ArrowRight, Check } from 'lucide-react';

export default function Section05HowItWorks() {
  const [activeStage, setActiveStage] = useState(0);

  const stages = [
    {
      num: "01",
      title: "DISCOVER",
      subtitle: "Find physical products nearby within 1-3 km",
      desc: "Browse high-value equipment available right now from verified neighbors on a real-time hyperlocal map.",
      icon: Search,
      badge: "HYPERLOCAL SEARCH",
      detail: "Radius filter 500m - 3km • Instant Availability"
    },
    {
      num: "02",
      title: "VERIFY",
      subtitle: "See identity, condition and Borrow Score reputation",
      desc: "Inspect transparent Digital Condition Passports, timestamped photos, owner ratings, and security verification.",
      icon: ShieldCheck,
      badge: "TRUST AUDIT",
      detail: "Govt ID Verified • Borrow Score 90+ Required"
    },
    {
      num: "03",
      title: "BORROW",
      subtitle: "Pay rental + automated refundable deposit",
      desc: "Instant escrow checkout protects both lender and borrower with automated condition insurance.",
      icon: CreditCard,
      badge: "ESCROW LOCK",
      detail: "Pay ₹250/day • ₹500 Auto Refundable Deposit"
    },
    {
      num: "04",
      title: "RETURN",
      subtitle: "Return product & complete automated condition check",
      desc: "Drop off item at lender or smart neighborhood locker, unlock deposit, and boost your Borrow Score.",
      icon: RotateCcw,
      badge: "SCORE BOOST",
      detail: "AI Condition Scanner • instant Deposit Release"
    }
  ];

  return (
    <section className="relative w-full h-screen max-h-screen flex flex-col justify-between items-center px-4 sm:px-6 md:px-12 lg:px-16 pt-20 pb-6 bg-[#08090B] snap-start border-t border-white/5 overflow-hidden shrink-0">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/3 w-[550px] lg:w-[650px] h-[550px] lg:h-[650px] bg-[#00FF9D]/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-6xl w-full h-full flex flex-col justify-between gap-4 lg:gap-6 z-10 my-auto">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center gap-2">
          <span className="px-3 py-0.5 rounded-full glass-panel text-[10px] md:text-xs font-mono-tech text-[#00FF9D] border border-[#00FF9D]/20 uppercase tracking-widest">
            05 — USER JOURNEY DEMO
          </span>
          <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black font-space text-white leading-none uppercase tracking-tight">
            HOW IT <span className="text-gradient-mint">WORKS</span>
          </h2>
          <p className="text-slate-400 text-xs sm:text-sm md:text-base font-light max-w-lg">
            A frictionless 4-step workflow engineered for total peace of mind.
          </p>
        </div>

        {/* Stage Timeline Navigation Buttons */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2.5 md:gap-4">
          {stages.map((stg, idx) => {
            const Icon = stg.icon;
            const isActive = activeStage === idx;
            return (
              <button
                key={stg.num}
                onClick={() => setActiveStage(idx)}
                className={`p-3 md:p-3.5 rounded-xl md:rounded-2xl border text-left transition-all duration-300 flex flex-col gap-1.5 relative overflow-hidden ${
                  isActive
                    ? 'glass-panel-glow border-[#00FF9D]/50 bg-[#0F1219] shadow-[0_0_20px_rgba(0,255,157,0.15)]'
                    : 'glass-panel border-white/10 opacity-70 hover:opacity-100'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className={`font-mono-tech text-[10px] md:text-xs font-bold ${isActive ? 'text-[#00FF9D]' : 'text-slate-500'}`}>
                    {stg.num}
                  </span>
                  <Icon className={`w-3.5 h-3.5 md:w-4 md:h-4 ${isActive ? 'text-[#00FF9D]' : 'text-slate-400'}`} />
                </div>
                <span className="font-space font-bold text-xs sm:text-sm md:text-base text-white">{stg.title}</span>
                {isActive && (
                  <motion.div layoutId="activeTabGlow" className="absolute bottom-0 left-0 right-0 h-1 bg-[#00FF9D]" />
                )}
              </button>
            );
          })}
        </div>

        {/* Stage Presentation Showcase */}
        <div className="w-full glass-panel rounded-2xl lg:rounded-3xl p-5 md:p-8 lg:p-10 border border-white/10 relative overflow-hidden flex-1 max-h-[46vh] lg:max-h-[50vh] min-h-0 flex flex-col justify-between shadow-2xl">
          {/* Moving Item Indicator */}
          <div className="w-full flex items-center justify-between border-b border-white/10 pb-3 md:pb-4">
            <div className="flex items-center gap-2 md:gap-3">
              <span className="px-2 py-0.5 rounded bg-[#00FF9D]/20 text-[#00FF9D] text-[10px] md:text-xs font-mono-tech font-bold">
                STAGE {stages[activeStage].num}
              </span>
              <span className="text-[10px] md:text-xs font-mono-tech text-slate-400 truncate">
                ITEM: BOSCH DRILL
              </span>
            </div>
            <span className="text-[10px] md:text-xs font-mono-tech text-[#00FF9D] shrink-0">
              {stages[activeStage].badge}
            </span>
          </div>

          {/* Dynamic Content Details */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeStage}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.35 }}
              className="my-auto grid grid-cols-1 md:grid-cols-12 gap-4 lg:gap-8 items-center py-2"
            >
              <div className="md:col-span-8 flex flex-col gap-2.5">
                <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold font-space text-white leading-tight">
                  {stages[activeStage].subtitle}
                </h3>
                <p className="text-slate-300 text-xs md:text-sm lg:text-base leading-relaxed">
                  {stages[activeStage].desc}
                </p>
                <div className="p-3 rounded-xl bg-[#121520] border border-white/10 text-[11px] md:text-xs font-mono-tech text-[#00FF9D] flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-[#00FF9D] shrink-0" />
                  <span>{stages[activeStage].detail}</span>
                </div>
              </div>

              {/* Graphic Object Position Graphic */}
              <div className="md:col-span-4 flex justify-center">
                <div className="w-28 h-28 lg:w-32 lg:h-32 rounded-2xl lg:rounded-3xl glass-panel-glow border border-[#00FF9D]/40 flex flex-col items-center justify-center gap-1.5 text-center p-3">
                  <div className="w-10 h-10 lg:w-11 lg:h-11 rounded-xl bg-[#00FF9D]/20 flex items-center justify-center text-[#00FF9D]">
                    {React.createElement(stages[activeStage].icon, { className: "w-5 h-5" })}
                  </div>
                  <span className="font-mono-tech text-[9px] text-slate-300">STAGE {stages[activeStage].num}</span>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Bottom Loop Sequence Climax */}
          <div className="w-full pt-3 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-2 text-[10px] md:text-xs font-mono-tech">
            <div className="flex items-center gap-2 md:gap-3 text-slate-400">
              <span className={activeStage >= 0 ? "text-[#00FF9D] font-bold" : ""}>01. DISCOVER</span>
              <span>→</span>
              <span className={activeStage >= 1 ? "text-[#00FF9D] font-bold" : ""}>02. VERIFY</span>
              <span>→</span>
              <span className={activeStage >= 2 ? "text-[#00FF9D] font-bold" : ""}>03. BORROW</span>
              <span>→</span>
              <span className={activeStage >= 3 ? "text-[#00FF9D] font-bold" : ""}>04. RETURN</span>
            </div>
            <span className="text-[#00FF9D] font-bold tracking-widest uppercase">
              BORROW → USE → RETURN
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
