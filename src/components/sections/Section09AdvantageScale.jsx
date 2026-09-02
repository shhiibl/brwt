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
    <section className="relative w-full min-h-screen flex flex-col justify-center items-center px-6 py-20 md:px-16 bg-[#08090B] snap-start border-t border-white/5 overflow-hidden">
      {/* Glow */}
      <div className="absolute top-1/3 left-1/3 w-[650px] h-[650px] bg-[#00FF9D]/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-6xl w-full flex flex-col gap-12 z-10">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center gap-4">
          <span className="px-3 py-1 rounded-full glass-panel text-xs font-mono-tech text-[#00FF9D] border border-[#00FF9D]/20 uppercase tracking-widest">
            09 — COMPETITIVE MOAT & NETWORK FLYWHEEL
          </span>
          <h2 className="text-4xl sm:text-6xl md:text-8xl font-black font-space text-white leading-none uppercase tracking-tight">
            NETWORK <span className="text-gradient-mint">EFFECT FLYWHEEL</span>
          </h2>
        </div>

        {/* 3-Column Matrix Comparison */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Column 1: BUY */}
          <div className="glass-panel p-6 rounded-3xl border border-white/10 flex flex-col gap-4">
            <h3 className="text-xl font-bold font-space text-slate-400">BUYING</h3>
            <p className="text-xs text-slate-500">High upfront cost, permanent ownership, permanent storage requirement.</p>
            <div className="flex flex-col gap-3 font-mono-tech text-xs text-slate-400 mt-2">
              <div className="flex items-center gap-2 text-red-400"><X className="w-4 h-4" /> 100% Upfront Capital</div>
              <div className="flex items-center gap-2 text-red-400"><X className="w-4 h-4" /> Takes up closet space</div>
              <div className="flex items-center gap-2 text-slate-500">Unused 95% of time</div>
            </div>
          </div>

          {/* Column 2: TRADITIONAL RENTAL */}
          <div className="glass-panel p-6 rounded-3xl border border-white/10 flex flex-col gap-4">
            <h3 className="text-xl font-bold font-space text-slate-300">TRADITIONAL RENTAL</h3>
            <p className="text-xs text-slate-400">Limited inventory, centralized store locations, rigid duration.</p>
            <div className="flex flex-col gap-3 font-mono-tech text-xs text-slate-400 mt-2">
              <div className="flex items-center gap-2 text-amber-400"><X className="w-4 h-4" /> Must travel across town</div>
              <div className="flex items-center gap-2 text-amber-400"><X className="w-4 h-4" /> Commercial store hours</div>
              <div className="flex items-center gap-2 text-slate-400">High security deposits</div>
            </div>
          </div>

          {/* Column 3: BORROWIT (HIGHLIGHTED) */}
          <div className="glass-panel-glow p-6 rounded-3xl border border-[#00FF9D]/50 flex flex-col gap-4 shadow-[0_0_30px_rgba(0,255,157,0.15)] relative overflow-hidden">
            <div className="flex items-center justify-between">
              <h3 className="text-2xl font-black font-space text-white">BORROWIT</h3>
              <span className="px-2.5 py-0.5 rounded bg-[#00FF9D] text-black text-[10px] font-mono-tech font-bold">
                RECOMMENDED
              </span>
            </div>
            <p className="text-xs text-slate-300">Local peer inventory, verified users, condition history, Borrow Score.</p>
            <div className="flex flex-col gap-3 font-mono-tech text-xs text-white mt-2">
              <div className="flex items-center gap-2 text-[#00FF9D]"><Check className="w-4 h-4" /> Hyperlocal &lt; 1km</div>
              <div className="flex items-center gap-2 text-[#00FF9D]"><Check className="w-4 h-4" /> Digital Condition Passport</div>
              <div className="flex items-center gap-2 text-[#00FF9D]"><Check className="w-4 h-4" /> Patented ZX Borrow Score</div>
            </div>
          </div>
        </div>

        {/* City Scaling Flywheel Map Bar */}
        <div className="w-full glass-panel rounded-3xl p-8 border border-white/10 flex flex-col gap-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <span className="text-xs font-mono-tech text-[#00FF9D] uppercase tracking-wider">
              SCALABILITY ROADMAP
            </span>
            <div className="flex items-center gap-2">
              {scalePhases.map((phase, idx) => (
                <button
                  key={idx}
                  onClick={() => setScalePhase(idx)}
                  className={`px-3 py-1.5 rounded-xl text-xs font-mono-tech border transition-all ${
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

          <div className="p-6 rounded-2xl bg-[#121520] border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono-tech">
            <div className="flex flex-col">
              <span className="text-xs text-slate-400">NETWORK NODE COVERAGE</span>
              <span className="text-xl font-bold text-white">{scalePhases[scalePhase].nodes}</span>
            </div>
            <div className="flex flex-col sm:text-right">
              <span className="text-xs text-slate-400">ESTIMATED RUN-RATE</span>
              <span className="text-xl font-bold text-[#00FF9D]">{scalePhases[scalePhase].volume}</span>
            </div>
          </div>
        </div>

        {/* Flywheel Loop Statement */}
        <div className="w-full glass-panel p-4 rounded-2xl border border-white/10 flex flex-col sm:flex-row items-center justify-between text-xs font-mono-tech text-[#00FF9D] font-bold">
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
