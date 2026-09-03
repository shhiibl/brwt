import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Shield, CheckCircle, Award, Sparkles, Users, Lock } from 'lucide-react';
import Interactive3DCanvas from '../3d/Interactive3DCanvas';

export default function Section06USP() {
  const [score, setScore] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setScore((prev) => {
        if (prev < 96) return prev + 1;
        return 96;
      });
    }, 30);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full h-screen max-h-screen flex flex-col justify-between items-center px-4 sm:px-6 md:px-12 lg:px-16 pt-20 pb-6 bg-[#08090B] snap-start border-t border-white/5 overflow-hidden shrink-0">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] lg:w-[700px] h-[600px] lg:h-[700px] bg-[#00FF9D]/10 rounded-full blur-[180px] pointer-events-none" />

      <div className="max-w-6xl w-full h-full flex flex-col justify-between gap-4 lg:gap-6 z-10 my-auto">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center gap-2">
          <span className="px-3 py-0.5 rounded-full glass-panel-glow text-[10px] md:text-xs font-mono-tech text-[#00FF9D] border border-[#00FF9D]/30 uppercase tracking-widest">
            06 — CORE COMPETITIVE MOAT (PRIMARY USP)
          </span>
          <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black font-space text-white leading-none uppercase tracking-tight">
            THE PRODUCT<br />
            <span className="text-gradient-mint">IS TRUST.</span>
          </h2>
        </div>

        {/* 3D Drill Showcase & Digital Passport / Borrow Score Overlay */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-8 items-center flex-1 min-h-0">
          {/* Left: 3D Product & Digital Condition Passport */}
          <div className="lg:col-span-6 glass-panel rounded-2xl lg:rounded-3xl p-4 md:p-5 lg:p-6 border border-white/10 relative overflow-hidden flex flex-col justify-between h-full max-h-[46vh] lg:max-h-[50vh] min-h-0 shadow-2xl">
            <div className="flex items-center justify-between border-b border-white/10 pb-2.5">
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4 text-[#00FF9D]" />
                <span className="font-mono-tech text-[10px] md:text-xs font-bold text-white uppercase tracking-wider truncate">
                  DIGITAL CONDITION PASSPORT
                </span>
              </div>
              <span className="px-2 py-0.5 rounded bg-[#00FF9D]/20 text-[9px] font-mono-tech text-[#00FF9D] shrink-0">
                VERIFIED ✓
              </span>
            </div>

            {/* 3D Item Canvas */}
            <div className="w-full h-32 sm:h-36 md:h-40 relative rounded-xl bg-black/40 overflow-hidden border border-white/5 my-2 flex-1 min-h-0">
              <Interactive3DCanvas activeType="drill" />
              <div className="absolute bottom-2 left-2 glass-panel px-2.5 py-0.5 rounded-lg text-[9px] font-mono-tech text-slate-300">
                SERIAL: #BS-904-X7
              </div>
            </div>

            {/* Condition Passport Metrics */}
            <div className="grid grid-cols-2 gap-2 font-mono-tech">
              <div className="p-2 md:p-2.5 rounded-xl bg-[#121520] border border-white/5">
                <span className="text-[9px] text-slate-400 block">CONDITION SCORE</span>
                <span className="text-sm md:text-base font-bold text-[#00FF9D]">94% PERFECT</span>
              </div>
              <div className="p-2 md:p-2.5 rounded-xl bg-[#121520] border border-white/5">
                <span className="text-[9px] text-slate-400 block">PREVIOUS USES</span>
                <span className="text-sm md:text-base font-bold text-white">17 BORROWS</span>
              </div>
              <div className="p-2 md:p-2.5 rounded-xl bg-[#121520] border border-white/5">
                <span className="text-[9px] text-slate-400 block">DAMAGE CLAIMS</span>
                <span className="text-sm md:text-base font-bold text-emerald-400">0 CLAIMS</span>
              </div>
              <div className="p-2 md:p-2.5 rounded-xl bg-[#121520] border border-white/5">
                <span className="text-[9px] text-slate-400 block">LAST AUDIT CHECK</span>
                <span className="text-[11px] md:text-xs font-bold text-slate-300">12 AUG 2026</span>
              </div>
            </div>
          </div>

          {/* Right: BORROW SCORE Engine Card */}
          <div className="lg:col-span-6 glass-panel-glow rounded-2xl lg:rounded-3xl p-4 md:p-5 lg:p-6 border border-[#00FF9D]/40 relative overflow-hidden flex flex-col justify-between h-full max-h-[46vh] lg:max-h-[50vh] min-h-0 shadow-[0_0_50px_rgba(0,255,157,0.1)]">
            <div className="flex items-center justify-between border-b border-white/10 pb-2.5">
              <span className="text-[10px] md:text-xs font-mono-tech text-[#00FF9D] uppercase tracking-widest truncate">
                PATENTED TRUST METRIC
              </span>
              <div className="flex items-center gap-1 px-2 py-0.5 rounded-full bg-[#00FF9D]/20 text-[#00FF9D] text-[9px] font-mono-tech shrink-0">
                <Sparkles className="w-2.5 h-2.5" />
                <span>ZX ALGORITHM</span>
              </div>
            </div>

            <div className="flex flex-col items-center justify-center my-auto py-2 gap-1.5">
              <div className="w-20 h-20 md:w-24 md:h-24 rounded-full border-4 border-[#00FF9D] flex flex-col items-center justify-center shadow-[0_0_30px_#00FF9D] bg-black/60">
                <span className="text-[9px] font-mono-tech text-slate-400">ZX SCORE</span>
                <span className="text-2xl md:text-3xl font-black font-mono-tech text-[#00FF9D]">{score}</span>
                <span className="text-[8px] text-slate-400">/ 100</span>
              </div>
              <span className="text-[10px] md:text-xs font-mono-tech text-slate-300">TIER: PLATINUM BORROWER</span>
            </div>

            {/* Score Breakdown Stats */}
            <div className="flex flex-col gap-1.5 font-mono-tech text-[10px] md:text-xs text-slate-300">
              <div className="p-2 md:p-2.5 rounded-xl bg-black/40 border border-white/10 flex items-center justify-between">
                <span>18 Successful Borrows</span>
                <CheckCircle className="w-3.5 h-3.5 text-[#00FF9D]" />
              </div>
              <div className="p-2 md:p-2.5 rounded-xl bg-black/40 border border-white/10 flex items-center justify-between">
                <span>17 On-Time Returns</span>
                <CheckCircle className="w-3.5 h-3.5 text-[#00FF9D]" />
              </div>
              <div className="p-2 md:p-2.5 rounded-xl bg-black/40 border border-white/10 flex items-center justify-between">
                <span>0 Damage Claims</span>
                <Shield className="w-3.5 h-3.5 text-[#00FF9D]" />
              </div>
            </div>
          </div>
        </div>

        {/* Section Climax Statement */}
        <div className="flex flex-col items-center text-center gap-1 pt-3 border-t border-white/10">
          <h3 className="text-xl sm:text-3xl md:text-4xl font-black font-space text-white uppercase tracking-tight">
            A TRUST INFRASTRUCTURE
          </h3>
          <p className="text-[#00FF9D] font-mono-tech text-xs sm:text-sm md:text-base font-bold tracking-widest uppercase">
            FOR BORROWING ANYTHING.
          </p>
        </div>
      </div>
    </section>
  );
}
