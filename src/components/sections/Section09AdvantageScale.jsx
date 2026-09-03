import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, X, Shield, Globe, RefreshCw, Zap } from 'lucide-react';

export default function Section09AdvantageScale() {
  const [scalePhase, setScalePhase] = useState(2); // 0: 1 Community, 1: 1 City, 2: 10 Cities

  const matrix = [
    { feature: "Upfront Cost", buy: "High (Full Price)", rental: "Moderate + Travel", borrowit: "Ultra-Low (₹200-500/day)" },
    { feature: "Inventory Radius", buy: "Self-owned only", rental: "Centralized Outlets", borrowit: "< 1 km Local Neighborhood" },
    { feature: "Storage Required", buy: "Permanent Closet Space", rental: "None", borrowit: "Zero Household Clutter" },
    { feature: "Condition Passport", buy: "No history tracking", rental: "Manual Form", borrowit: "Digital Condition Passport" },
    { feature: "Trust & Security", buy: "N/A", rental: "Heavy Paper Deposit", borrowit: "Patented ZX Borrow Score" }
  ];

  const scalePhases = [
    { title: "ONE COMMUNITY", nodes: "50 Owners • 200 Products", volume: "₹1,20,000 / mo" },
    { title: "ONE CITY", nodes: "2,500 Owners • 15,000 Products", volume: "₹18,50,000 / mo" },
    { title: "10 CITIES", nodes: "50,000 Owners • 300,000 Products", volume: "₹3.8 CRORE / mo" }
  ];

  return (
    <section className="relative w-full h-screen max-h-screen flex flex-col justify-between items-center px-4 sm:px-6 md:px-12 lg:px-16 pt-20 pb-6 bg-[#08090B] snap-start border-t border-white/5 overflow-hidden shrink-0">
      {/* Glow */}
      <div className="absolute top-1/3 left-1/3 w-[550px] lg:w-[650px] h-[550px] lg:h-[650px] bg-[#00FF9D]/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-6xl w-full h-full flex flex-col justify-between gap-3 lg:gap-5 z-10 my-auto">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center gap-1.5">
          <span className="px-3 py-0.5 rounded-full glass-panel text-[10px] md:text-xs font-mono-tech text-[#00FF9D] border border-[#00FF9D]/20 uppercase tracking-widest">
            09 — COMPETITIVE MOAT & NETWORK FLYWHEEL
          </span>
          <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black font-space text-white leading-none uppercase tracking-tight">
            NETWORK <span className="text-gradient-mint">EFFECT FLYWHEEL</span>
          </h2>
        </div>

        {/* 3-Column Matrix Comparison */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4 flex-1 max-h-[36vh] lg:max-h-[40vh] min-h-0">
          {/* Column 1: BUY */}
          <div className="glass-panel p-3.5 md:p-4 rounded-xl md:rounded-2xl border border-white/10 flex flex-col justify-between gap-2">
            <div className="flex flex-col gap-1">
              <h3 className="text-sm md:text-base font-bold font-space text-slate-400">BUYING</h3>
              <p className="text-[10px] md:text-[11px] text-slate-500 leading-tight">High upfront cost, permanent storage requirement.</p>
            </div>
            <div className="flex flex-col gap-1.5 font-mono-tech text-[10px] md:text-xs text-slate-400">
              <div className="flex items-center gap-1.5 text-red-400"><X className="w-3.5 h-3.5" /> 100% Upfront Capital</div>
              <div className="flex items-center gap-1.5 text-red-400"><X className="w-3.5 h-3.5" /> Takes up closet space</div>
              <div className="flex items-center gap-1.5 text-slate-500"><X className="w-3.5 h-3.5" /> Unused 95% of time</div>
            </div>
          </div>

          {/* Column 2: TRADITIONAL RENTAL */}
          <div className="glass-panel p-3.5 md:p-4 rounded-xl md:rounded-2xl border border-white/10 flex flex-col justify-between gap-2">
            <div className="flex flex-col gap-1">
              <h3 className="text-sm md:text-base font-bold font-space text-slate-300">TRADITIONAL RENTAL</h3>
              <p className="text-[10px] md:text-[11px] text-slate-400 leading-tight">Centralized stores, rigid duration.</p>
            </div>
            <div className="flex flex-col gap-1.5 font-mono-tech text-[10px] md:text-xs text-slate-400">
              <div className="flex items-center gap-1.5 text-amber-400"><X className="w-3.5 h-3.5" /> Must travel across town</div>
              <div className="flex items-center gap-1.5 text-amber-400"><X className="w-3.5 h-3.5" /> Commercial store hours</div>
              <div className="flex items-center gap-1.5 text-slate-400"><X className="w-3.5 h-3.5" /> High security deposits</div>
            </div>
          </div>

          {/* Column 3: BORROWIT (HIGHLIGHTED) */}
          <div className="glass-panel-glow p-3.5 md:p-4 rounded-xl md:rounded-2xl border border-[#00FF9D]/50 flex flex-col justify-between gap-2 shadow-[0_0_30px_rgba(0,255,157,0.15)] relative overflow-hidden">
            <div className="flex items-center justify-between">
              <h3 className="text-base md:text-xl font-black font-space text-white">BORROWIT</h3>
              <span className="px-2 py-0.5 rounded bg-[#00FF9D] text-black text-[9px] font-mono-tech font-bold">
                RECOMMENDED
              </span>
            </div>
            <p className="text-[10px] md:text-[11px] text-slate-300 leading-tight">Local peer inventory, verified users, condition history.</p>
            <div className="flex flex-col gap-1.5 font-mono-tech text-[10px] md:text-xs text-white">
              <div className="flex items-center gap-1.5 text-[#00FF9D]"><Check className="w-3.5 h-3.5" /> Hyperlocal &lt; 1km</div>
              <div className="flex items-center gap-1.5 text-[#00FF9D]"><Check className="w-3.5 h-3.5" /> Digital Condition Passport</div>
              <div className="flex items-center gap-1.5 text-[#00FF9D]"><Check className="w-3.5 h-3.5" /> Patented ZX Borrow Score</div>
            </div>
          </div>
        </div>

        {/* City Scaling Flywheel Map Bar */}
        <div className="w-full glass-panel rounded-2xl p-4 md:p-5 border border-white/10 flex flex-col gap-3">
          <div className="flex items-center justify-between gap-2">
            <span className="text-[10px] md:text-xs font-mono-tech text-[#00FF9D] uppercase tracking-wider">
              SCALABILITY ROADMAP
            </span>
            <div className="flex items-center gap-1.5">
              {scalePhases.map((phase, idx) => (
                <button
                  key={idx}
                  onClick={() => setScalePhase(idx)}
                  className={`px-2.5 py-1 rounded-lg text-[10px] md:text-xs font-mono-tech border transition-all ${
                    scalePhase === idx
                      ? 'bg-[#00FF9D]/20 border-[#00FF9D] text-white font-bold'
                      : 'glass-panel border-white/10 text-slate-400'
                  }`}
                >
                  {phase.title}
                </button>
              ))}
            </div>
          </div>

          <div className="p-3 rounded-xl bg-[#121520] border border-white/10 flex items-center justify-between gap-2 font-mono-tech">
            <div className="flex flex-col">
              <span className="text-[10px] text-slate-400">NETWORK COVERAGE</span>
              <span className="text-sm md:text-base font-bold text-white">{scalePhases[scalePhase].nodes}</span>
            </div>
            <div className="flex flex-col text-right">
              <span className="text-[10px] text-slate-400">RUN-RATE</span>
              <span className="text-sm md:text-base font-bold text-[#00FF9D]">{scalePhases[scalePhase].volume}</span>
            </div>
          </div>
        </div>

        {/* Flywheel Loop Statement */}
        <div className="w-full glass-panel p-3 rounded-xl border border-white/10 flex flex-wrap md:flex-nowrap items-center justify-between text-[10px] md:text-xs font-mono-tech text-[#00FF9D] font-bold">
          <span>MORE OWNERS</span>
          <span>→</span>
          <span>MORE INVENTORY</span>
          <span>→</span>
          <span>MORE BORROWERS</span>
          <span>→</span>
          <span>MORE TRANSACTIONS</span>
          <span>→</span>
          <span>MORE OWNERS</span>
        </div>
      </div>
    </section>
  );
}
