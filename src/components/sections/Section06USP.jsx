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
    <section className="relative w-full min-h-screen flex flex-col justify-center items-center px-6 py-20 md:px-16 bg-[#08090B] snap-start border-t border-white/5 overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#00FF9D]/10 rounded-full blur-[180px] pointer-events-none" />

      <div className="max-w-6xl w-full flex flex-col gap-10 z-10">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center gap-4">
          <span className="px-3 py-1 rounded-full glass-panel-glow text-xs font-mono-tech text-[#00FF9D] border border-[#00FF9D]/30 uppercase tracking-widest">
            06 — CORE COMPETITIVE MOAT (PRIMARY USP)
          </span>
          <h2 className="text-4xl sm:text-6xl md:text-8xl font-black font-space text-white leading-none uppercase tracking-tight">
            THE PRODUCT<br />
            <span className="text-gradient-mint">IS TRUST.</span>
          </h2>
        </div>

        {/* 3D Drill Showcase & Digital Passport / Borrow Score Overlay */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left: 3D Product & Digital Condition Passport */}
          <div className="lg:col-span-6 glass-panel rounded-3xl p-6 md:p-8 border border-white/10 relative overflow-hidden flex flex-col gap-6 shadow-2xl">
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <div className="flex items-center gap-2">
                <Shield className="w-5 h-5 text-[#00FF9D]" />
                <span className="font-mono-tech text-xs font-bold text-white uppercase tracking-wider">
                  DIGITAL CONDITION PASSPORT
                </span>
              </div>
              <span className="px-2 py-0.5 rounded bg-[#00FF9D]/20 text-[10px] font-mono-tech text-[#00FF9D]">
                VERIFIED ITEM ✓
              </span>
            </div>

            {/* 3D Item Canvas */}
            <div className="w-full h-48 relative rounded-2xl bg-black/40 overflow-hidden border border-white/5">
              <Interactive3DCanvas activeType="drill" />
              <div className="absolute bottom-3 left-3 glass-panel px-3 py-1 rounded-lg text-[10px] font-mono-tech text-slate-300">
                SERIAL: #BS-904-X7
              </div>
            </div>

            {/* Condition Passport Metrics */}
            <div className="grid grid-cols-2 gap-3 font-mono-tech">
              <div className="p-3 rounded-xl bg-[#121520] border border-white/5">
                <span className="text-[10px] text-slate-400 block">CONDITION SCORE</span>
                <span className="text-xl font-bold text-[#00FF9D]">94% PERFECT</span>
              </div>
              <div className="p-3 rounded-xl bg-[#121520] border border-white/5">
                <span className="text-[10px] text-slate-400 block">PREVIOUS USES</span>
                <span className="text-xl font-bold text-white">17 BORROWS</span>
              </div>
              <div className="p-3 rounded-xl bg-[#121520] border border-white/5">
                <span className="text-[10px] text-slate-400 block">DAMAGE CLAIMS</span>
                <span className="text-xl font-bold text-emerald-400">0 CLAIMS</span>
              </div>
              <div className="p-3 rounded-xl bg-[#121520] border border-white/5">
                <span className="text-[10px] text-slate-400 block">LAST AUDIT CHECK</span>
                <span className="text-xs font-bold text-slate-300">12 AUG 2026</span>
              </div>
            </div>
          </div>

          {/* Right: BORROW SCORE Engine Card */}
          <div className="lg:col-span-6 glass-panel-glow rounded-3xl p-8 border border-[#00FF9D]/40 relative overflow-hidden flex flex-col gap-6 shadow-[0_0_50px_rgba(0,255,157,0.1)]">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono-tech text-[#00FF9D] uppercase tracking-widest">
                PATENTED TRUST METRIC
              </span>
              <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#00FF9D]/20 text-[#00FF9D] text-[10px] font-mono-tech">
                <Sparkles className="w-3 h-3" />
                <span>ZX REPUTATION ALGORITHM</span>
              </div>
            </div>

            <div className="flex flex-col items-center justify-center my-4 gap-2">
              <div className="w-28 h-28 rounded-full border-4 border-[#00FF9D] flex flex-col items-center justify-center shadow-[0_0_30px_#00FF9D] bg-black/60">
                <span className="text-xs font-mono-tech text-slate-400">ZX SCORE</span>
                <span className="text-4xl font-black font-mono-tech text-[#00FF9D]">{score}</span>
                <span className="text-[9px] text-slate-400">/ 100</span>
              </div>
              <span className="text-xs font-mono-tech text-slate-300 mt-2">TIER: PLATINUM BORROWER</span>
            </div>

            {/* Score Breakdown Stats */}
            <div className="flex flex-col gap-2.5 font-mono-tech text-xs text-slate-300">
              <div className="p-3 rounded-xl bg-black/40 border border-white/10 flex items-center justify-between">
                <span>18 Successful Borrows</span>
                <CheckCircle className="w-4 h-4 text-[#00FF9D]" />
              </div>
              <div className="p-3 rounded-xl bg-black/40 border border-white/10 flex items-center justify-between">
                <span>17 On-Time Returns</span>
                <CheckCircle className="w-4 h-4 text-[#00FF9D]" />
              </div>
              <div className="p-3 rounded-xl bg-black/40 border border-white/10 flex items-center justify-between">
                <span>0 Damage Claims</span>
                <Shield className="w-4 h-4 text-[#00FF9D]" />
              </div>
            </div>
          </div>
        </div>

        {/* Section Climax Statement */}
        <div className="flex flex-col items-center text-center gap-2 pt-6 border-t border-white/10">
          <h3 className="text-3xl sm:text-5xl font-black font-space text-white uppercase tracking-tight">
            A TRUST INFRASTRUCTURE
          </h3>
          <p className="text-[#00FF9D] font-mono-tech text-lg md:text-xl font-bold tracking-widest uppercase">
            FOR BORROWING ANYTHING.
          </p>
        </div>
      </div>
    </section>
  );
}
