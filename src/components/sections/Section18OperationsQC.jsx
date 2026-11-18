import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, ClipboardList, Handshake, ArrowRight, RotateCcw, Star, Camera, Wrench, Presentation } from 'lucide-react';

const steps = [
  { step: '01', icon: Search, label: 'Search & Compare', desc: 'Renter searches by equipment, date and location. Views specs, price, deposit and delivery terms before any action.' },
  { step: '02', icon: ClipboardList, label: 'Eligibility & Terms', desc: 'Customer completes provider\'s eligibility checks, accepts rental terms, deposit and cancellation policy at checkout.' },
  { step: '03', icon: Handshake, label: 'Handover', desc: 'Both parties capture photos via BORROWIT\'s in-app camera. Condition record is timestamped and linked to the booking ID.' },
  { step: '04', icon: Camera, label: 'Rental Period', desc: 'Renter uses the equipment for the booked duration. Provider and platform monitor availability holds for other customers.' },
  { step: '05', icon: RotateCcw, label: 'Return & Inspect', desc: 'Equipment returned on time. Second condition record created by both sides. AI compares before/after for any changes.' },
  { step: '06', icon: Star, label: 'Close & Review', desc: 'Booking closed with condition record. Disputes sent to human review. Feedback and Borrow Score updated.' },
];

const categories = [
  { icon: Camera, label: 'Cameras', checks: ['Body & lens condition', 'Sensor / test image', 'Battery & charger', 'All accessories listed'] },
  { icon: Presentation, label: 'Projectors', checks: ['Image & focus quality', 'Inputs & connectivity', 'Remote & cables', 'Ventilation condition'] },
  { icon: Wrench, label: 'Power Tools', checks: ['Casing & guards', 'Switches & battery/cable', 'All attachments', 'Safety check by competent person'] },
];

export default function Section18OperationsQC() {
  const [activeStep, setActiveStep] = useState(0);
  const [activeCat, setActiveCat] = useState(0);

  return (
    <section className="relative w-full h-screen max-h-screen flex flex-col justify-between items-center px-4 sm:px-6 md:px-12 lg:px-16 pt-20 pb-6 bg-[#08090B] snap-start border-t border-white/5 overflow-hidden shrink-0">
      <div className="absolute top-1/2 left-1/4 w-80 h-80 bg-[#00FF9D]/4 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-6xl w-full h-full flex flex-col justify-between gap-3 lg:gap-4 z-10 my-auto">
        {/* Header */}
        <div className="flex flex-col items-center text-center gap-1.5">
          <span className="px-3 py-0.5 rounded-full glass-panel text-[10px] md:text-xs font-mono-tech text-[#00FF9D] border border-[#00FF9D]/20 uppercase tracking-widest">
            18 — OPERATIONS & QUALITY CONTROL
          </span>
          <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black font-space text-white leading-none uppercase tracking-tight">
            EVERY BOOKING.<br />
            <span className="text-gradient-mint">EVERY STEP.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4 flex-1 min-h-0 max-h-[65vh]">
          {/* Booking Workflow */}
          <div className="flex flex-col gap-2 overflow-hidden">
            <span className="text-[9px] font-mono-tech text-[#00FF9D] uppercase tracking-widest">Booking Workflow</span>
            <div className="flex flex-col gap-1.5 overflow-y-auto flex-1">
              {steps.map((s, i) => {
                const Icon = s.icon;
                return (
                  <button
                    key={s.step}
                    onClick={() => setActiveStep(i)}
                    className={`glass-panel p-3 rounded-xl border text-left transition-all flex items-start gap-3 ${
                      activeStep === i ? 'border-[#00FF9D]/40 shadow-[0_0_20px_rgba(0,255,157,0.06)]' : 'border-white/10 hover:border-white/20'
                    }`}
                  >
                    <div className={`w-7 h-7 rounded-lg flex items-center justify-center shrink-0 transition-colors ${activeStep === i ? 'bg-[#00FF9D]/20 text-[#00FF9D]' : 'bg-white/5 text-slate-400'}`}>
                      <Icon className="w-3.5 h-3.5" />
                    </div>
                    <div className="flex flex-col gap-0.5 min-w-0">
                      <div className="flex items-center gap-2">
                        <span className="text-[9px] font-mono-tech text-[#00FF9D]">{s.step}</span>
                        <span className="text-xs font-bold font-space text-white">{s.label}</span>
                      </div>
                      <AnimatePresence>
                        {activeStep === i && (
                          <motion.p
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            className="text-[10px] text-slate-400 leading-relaxed overflow-hidden"
                          >
                            {s.desc}
                          </motion.p>
                        )}
                      </AnimatePresence>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Category QC */}
          <div className="flex flex-col gap-3">
            <span className="text-[9px] font-mono-tech text-[#00FF9D] uppercase tracking-widest">Category-Specific QC Checklist</span>
            <div className="flex gap-2">
              {categories.map((c, i) => {
                const Icon = c.icon;
                return (
                  <button
                    key={c.label}
                    onClick={() => setActiveCat(i)}
                    className={`flex-1 flex items-center justify-center gap-1.5 py-2 rounded-lg text-[10px] font-mono-tech font-bold uppercase tracking-widest transition-all border ${
                      activeCat === i ? 'border-[#00FF9D]/60 bg-[#00FF9D]/15 text-[#00FF9D]' : 'glass-panel border-white/10 text-slate-400 hover:text-white'
                    }`}
                  >
                    <Icon className="w-3.5 h-3.5" />
                    {c.label}
                  </button>
                );
              })}
            </div>
            <AnimatePresence mode="wait">
              <motion.div
                key={activeCat}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="glass-panel p-4 rounded-xl border border-[#00FF9D]/20 flex flex-col gap-2.5 flex-1"
              >
                <span className="text-xs font-bold font-space text-white">{categories[activeCat].label} — Inspection Items</span>
                {categories[activeCat].checks.map((c) => (
                  <div key={c} className="flex items-center gap-2.5">
                    <div className="w-4 h-4 rounded border border-[#00FF9D]/40 bg-[#00FF9D]/10 flex items-center justify-center shrink-0">
                      <span className="text-[#00FF9D] text-[8px]">✓</span>
                    </div>
                    <span className="text-xs text-slate-300">{c}</span>
                  </div>
                ))}
                <div className="mt-auto pt-2 border-t border-white/10 text-[9px] text-slate-500">
                  Timestamped photos required. Generic checklist is insufficient — risks differ by category.
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Asset-light model */}
            <div className="glass-panel p-3.5 rounded-xl border border-white/10">
              <span className="text-[9px] font-mono-tech text-[#00FF9D] uppercase tracking-widest block mb-1.5">Operating Model</span>
              <p className="text-[10px] md:text-xs text-slate-400 leading-relaxed">
                <strong className="text-white">Asset-light</strong> — onboard existing rental providers rather than buying inventory. Customer pickup or provider-managed delivery at launch. Logistics coordination added only when pilot economics support it.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
