import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, ClipboardList, Handshake, Camera, RotateCcw, Star } from 'lucide-react';

const steps = [
  { step: '01', icon: Search, label: 'Search & Compare', desc: 'Renter searches by equipment, date and location. Views full specs, price, deposit and delivery terms before any action is taken.' },
  { step: '02', icon: ClipboardList, label: 'Eligibility & Terms', desc: "Customer completes the provider's eligibility checks, accepts rental terms, deposit and cancellation policy at checkout before payment." },
  { step: '03', icon: Handshake, label: 'Handover', desc: "Both parties capture photos via BORROWIT's in-app camera. Condition record is timestamped and permanently linked to the booking ID." },
  { step: '04', icon: Camera, label: 'Rental Period', desc: "Renter uses the equipment for the booked duration. Platform holds the item's availability — no double-booking possible." },
  { step: '05', icon: RotateCcw, label: 'Return & Inspect', desc: 'Equipment returned on time. Second condition record created by both sides. AI compares before/after for any damage or missing accessories.' },
  { step: '06', icon: Star, label: 'Close & Review', desc: 'Booking closed with condition record. Disputes sent to human review. Customer leaves feedback. Borrow Score is updated.' },
];

export default function Section18BookingWorkflow() {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section className="relative w-full h-screen max-h-screen flex flex-col justify-between items-center px-4 sm:px-6 md:px-12 lg:px-16 pt-20 pb-6 bg-[#08090B] snap-start border-t border-white/5 overflow-hidden shrink-0">
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-[#00FF9D]/4 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-6xl w-full h-full flex flex-col gap-4 z-10 my-auto">
        {/* Header */}
        <div className="flex flex-col items-center text-center gap-1.5 shrink-0">
          <span className="px-3 py-0.5 rounded-full glass-panel text-[10px] font-mono-tech text-[#00FF9D] border border-[#00FF9D]/20 uppercase tracking-widest">
            18 — OPERATIONS: BOOKING WORKFLOW
          </span>
          <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black font-space text-white leading-none uppercase tracking-tight">
            EVERY BOOKING.<br />
            <span className="text-gradient-mint">EVERY STEP.</span>
          </h2>
          <p className="text-sm text-slate-400 max-w-xl">Click each step to expand. Each stage has a defined owner, standard, record and escalation route.</p>
        </div>

        {/* Step Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2.5 flex-1 min-h-0 overflow-y-auto">
          {steps.map((s, i) => {
            const Icon = s.icon;
            const isActive = activeStep === i;
            return (
              <motion.button
                key={s.step}
                onClick={() => setActiveStep(isActive ? -1 : i)}
                layout
                className={`glass-panel p-4 rounded-xl border text-left transition-all flex flex-col gap-3 ${
                  isActive ? 'border-[#00FF9D]/50 shadow-[0_0_30px_rgba(0,255,157,0.08)]' : 'border-white/10 hover:border-white/25'
                }`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <div className={`w-9 h-9 rounded-xl flex items-center justify-center transition-colors ${isActive ? 'bg-[#00FF9D]/20 text-[#00FF9D]' : 'bg-white/5 text-slate-400'}`}>
                      <Icon className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-[9px] font-mono-tech text-[#00FF9D]/60 block">{s.step}</span>
                      <span className="text-sm font-bold font-space text-white">{s.label}</span>
                    </div>
                  </div>
                  <motion.span
                    animate={{ rotate: isActive ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="text-slate-600 text-lg"
                  >↓</motion.span>
                </div>

                <AnimatePresence>
                  {isActive && (
                    <motion.p
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                      className="text-xs text-slate-300 leading-relaxed overflow-hidden"
                    >
                      {s.desc}
                    </motion.p>
                  )}
                </AnimatePresence>
              </motion.button>
            );
          })}
        </div>

        {/* Operating Model Bar */}
        <div className="glass-panel px-5 py-3.5 rounded-xl border border-white/10 flex items-center gap-4 shrink-0">
          <div className="flex flex-wrap gap-4 text-[10px] font-mono-tech text-slate-400 items-center">
            <span className="text-[#00FF9D] font-bold uppercase tracking-widest">Operating Model</span>
            <span>Asset-light — onboard existing providers</span>
            <span className="text-slate-600">·</span>
            <span>Customer pickup or provider-managed delivery</span>
            <span className="text-slate-600">·</span>
            <span>Logistics added when pilot economics support it</span>
          </div>
        </div>
      </div>
    </section>
  );
}
