import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Shield, Camera, Cpu, AlertTriangle, CheckCircle2, Eye } from 'lucide-react';

const steps = [
  { step: '01', icon: Camera, title: 'Provider Inspection', phase: 'Before Rental', desc: 'Provider captures item photos via BORROWIT\'s built-in in-app camera. No gallery uploads allowed — photos are tamper-proof and timestamped.' },
  { step: '02', icon: Eye, title: 'Renter Inspection', phase: 'During Handover', desc: 'Renter independently photographs the same item through the platform camera. Both records are stored and linked to the booking ID.' },
  { step: '03', icon: Cpu, title: 'AI Comparison', phase: 'After Return', desc: 'AI system compares before/after photos to detect damage, missing accessories, or condition changes. Flags cases for review automatically.' },
  { step: '04', icon: AlertTriangle, title: 'Flag & Report', phase: 'Issue Detected', desc: 'If AI identifies a potential issue, it flags the booking and notifies BORROWIT\'s customer care team immediately for human review.' },
  { step: '05', icon: CheckCircle2, title: 'Human Review', phase: 'Disputed Cases', desc: 'Excessive or disputed damage claims undergo human verification before any decision. AI assists — it does not decide independently.' },
];

export default function Section13DigitalPassport() {
  const [hovered, setHovered] = useState(null);

  return (
    <section className="relative w-full h-screen max-h-screen flex flex-col justify-between items-center px-4 sm:px-6 md:px-12 lg:px-16 pt-20 pb-6 bg-[#08090B] snap-start border-t border-white/5 overflow-hidden shrink-0">
      <div className="absolute top-1/2 right-1/3 w-80 h-80 bg-[#00FF9D]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-6xl w-full h-full flex flex-col justify-between gap-3 lg:gap-4 z-10 my-auto">
        {/* Header */}
        <div className="flex flex-col items-center text-center gap-1.5">
          <span className="px-3 py-0.5 rounded-full glass-panel text-[10px] md:text-xs font-mono-tech text-[#00FF9D] border border-[#00FF9D]/20 uppercase tracking-widest">
            13 — TRUST INFRASTRUCTURE
          </span>
          <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black font-space text-white leading-none uppercase tracking-tight">
            AI DIGITAL<br />
            <span className="text-gradient-mint">PRODUCT PASSPORT</span>
          </h2>
        </div>

        {/* Value Props Row */}
        <div className="flex flex-wrap gap-2 justify-center">
          {[
            'Tamper-proof photographic evidence',
            'Fairer dispute resolution',
            'Reduces fake damage claims',
            'Builds renter–provider trust',
            'AI-assisted, human-verified',
          ].map((v) => (
            <span key={v} className="glass-panel px-3 py-1 rounded-full text-[10px] md:text-xs font-mono-tech text-slate-300 border border-white/10">
              ✓ {v}
            </span>
          ))}
        </div>

        {/* Step Timeline */}
        <div className="flex flex-col md:flex-row gap-2 md:gap-3 flex-1 min-h-0 max-h-[52vh]">
          {steps.map((s, i) => {
            const Icon = s.icon;
            return (
              <motion.div
                key={s.step}
                onHoverStart={() => setHovered(i)}
                onHoverEnd={() => setHovered(null)}
                className={`glass-panel rounded-xl border flex-1 cursor-default flex flex-col gap-2 p-3 md:p-4 transition-all duration-300 ${
                  hovered === i ? 'border-[#00FF9D]/50 shadow-[0_0_30px_rgba(0,255,157,0.07)]' : 'border-white/10'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="text-[9px] font-mono-tech text-[#00FF9D] uppercase tracking-widest">{s.step}</span>
                  <div className={`w-7 h-7 rounded-lg flex items-center justify-center transition-colors ${hovered === i ? 'bg-[#00FF9D]/20 text-[#00FF9D]' : 'bg-white/5 text-slate-400'}`}>
                    <Icon className="w-3.5 h-3.5" />
                  </div>
                </div>
                <div className="flex flex-col gap-0.5">
                  <span className="text-[9px] font-mono-tech text-[#00FF9D]/70 uppercase tracking-widest">{s.phase}</span>
                  <h3 className="text-xs md:text-sm font-bold font-space text-white leading-tight">{s.title}</h3>
                </div>
                <motion.p
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: hovered === i ? 1 : 0, height: hovered === i ? 'auto' : 0 }}
                  transition={{ duration: 0.3 }}
                  className="text-[10px] md:text-[11px] text-slate-400 leading-relaxed overflow-hidden"
                >
                  {s.desc}
                </motion.p>
              </motion.div>
            );
          })}
        </div>

        {/* Borrow Score companion panel */}
        <div className="glass-panel p-4 md:p-5 rounded-xl border border-[#00FF9D]/20 flex flex-col md:flex-row gap-4 items-start md:items-center">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#00FF9D]/15 flex items-center justify-center text-[#00FF9D]">
              <Shield className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[10px] font-mono-tech text-[#00FF9D] uppercase tracking-widest block">BORROW SCORE</span>
              <h3 className="text-sm md:text-base font-bold font-space text-white">Renter Reliability Indicator</h3>
            </div>
          </div>
          <p className="text-xs md:text-sm text-slate-300 leading-relaxed flex-1">
            Providers see a renter's platform rental history before accepting a booking. Score reflects successful rentals, timely returns, and damage history. New users are not penalised — only documented, relevant activity is factored.
          </p>
        </div>
      </div>
    </section>
  );
}
