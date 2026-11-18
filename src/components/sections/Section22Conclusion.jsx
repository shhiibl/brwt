import React from 'react';
import { motion } from 'framer-motion';
import { Rocket, Heart, Globe, ChevronRight } from 'lucide-react';

const pillars = [
  { label: 'Societal Impact', desc: 'Reduce unnecessary purchases. Enable efficient asset sharing. Support a resource-conscious consumption model across Indian cities.' },
  { label: 'Hyperlocal First', desc: 'City-cluster launch. Validate one market deeply before expanding. Evidence-led growth, not national ambition.' },
  { label: 'Trust as Infrastructure', desc: 'Borrow Score + AI Product Passport as trust primitives. Every rental backed by photographic evidence and renter reliability data.' },
  { label: 'Two-Sided Flywheel', desc: 'More quality providers → better supply → more renters → more bookings → more data → better trust → more providers.' },
];

const nextSteps = [
  'Complete 15 renter + 10 provider structured interviews',
  'Build clickable prototype with booking and return journey',
  'Obtain supplier quotations for MVP, payment, support, delivery',
  'Draft terms: deposits, returns, damage claims, escalation policy',
  'Launch city pilot — cameras and projectors first',
  'Measure: conversion, return rate, contribution, repeat bookings',
];

export default function Section22Conclusion() {
  return (
    <section className="relative w-full h-screen max-h-screen flex flex-col justify-between items-center px-4 sm:px-6 md:px-12 lg:px-16 pt-20 pb-6 bg-[#08090B] snap-start border-t border-white/5 overflow-hidden shrink-0">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#00FF9D]/4 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />

      <div className="max-w-6xl w-full h-full flex flex-col justify-between gap-3 lg:gap-5 z-10 my-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col items-center text-center gap-2"
        >
          <span className="px-3 py-0.5 rounded-full glass-panel text-[10px] md:text-xs font-mono-tech text-[#00FF9D] border border-[#00FF9D]/20 uppercase tracking-widest">
            22 — CONCLUSION & NEXT STEPS
          </span>
          <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black font-space text-white leading-[0.98] uppercase tracking-tight">
            THE PROOF<br />
            <span className="text-gradient-mint">IS IN THE PILOT</span>
          </h2>
          <p className="max-w-2xl text-sm md:text-base text-slate-400 leading-relaxed mt-1">
            BORROWIT's concept is validated by a clear problem, a willing market, and a trust-first architecture. The next milestone is evidence — not ambition.
          </p>
        </motion.div>

        {/* Pillars */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-3">
          {pillars.map((p, i) => (
            <motion.div
              key={p.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass-panel p-3.5 md:p-4 rounded-xl border border-white/10 hover:border-[#00FF9D]/30 transition-all flex flex-col gap-1.5 group"
            >
              <span className="text-[9px] font-mono-tech text-[#00FF9D] uppercase tracking-widest">0{i + 1}</span>
              <h3 className="text-xs md:text-sm font-bold font-space text-white">{p.label}</h3>
              <p className="text-[9px] md:text-[10px] text-slate-400 leading-relaxed">{p.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Next Steps */}
        <div className="glass-panel p-4 md:p-5 rounded-xl border border-[#00FF9D]/20">
          <div className="flex items-center gap-2 mb-3">
            <Rocket className="w-4 h-4 text-[#00FF9D]" />
            <span className="text-xs font-bold font-space text-white uppercase tracking-wide">Immediate Next Steps</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-1.5">
            {nextSteps.map((step, i) => (
              <div key={step} className="flex items-start gap-2">
                <div className="w-4 h-4 rounded border border-[#00FF9D]/30 bg-[#00FF9D]/10 flex items-center justify-center shrink-0 mt-0.5">
                  <span className="text-[8px] font-mono-tech text-[#00FF9D] font-bold">{i + 1}</span>
                </div>
                <span className="text-xs text-slate-300 leading-relaxed">{step}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Closing tagline */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="flex flex-col items-center gap-2 text-center"
        >
          <div className="flex items-center gap-2 glass-panel px-4 py-2 rounded-full border border-[#00FF9D]/20">
            <span className="w-2 h-2 rounded-full bg-[#00FF9D] shadow-[0_0_8px_#00FF9D] animate-pulse" />
            <span className="text-xs md:text-sm font-mono-tech text-slate-300 tracking-widest">
              BORROWIT — CONCEPT STAGE · CALICUT · NOV 2026
            </span>
          </div>
          <p className="text-sm md:text-base font-space font-black text-white uppercase tracking-widest">
            Access, Not Ownership.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
