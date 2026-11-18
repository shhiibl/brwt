import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Camera, Wrench, Presentation, Zap, Users2, Building2 } from 'lucide-react';

const segments = [
  {
    id: 'renter',
    label: 'RENTERS',
    color: '#00FF9D',
    groups: [
      { icon: Camera, name: 'Photographers & Creators', desc: 'Need cameras, lenses, lighting for specific shoots and content assignments.' },
      { icon: Presentation, name: 'Production & Event Teams', desc: 'Professionals needing projectors, AV gear, and equipment for events and presentations.' },
      { icon: Wrench, name: 'Contractors & Technicians', desc: 'Require power tools and specialised equipment for construction, repair or maintenance.' },
      { icon: Building2, name: 'Small Businesses & Teams', desc: 'Prefer renting equipment occasionally instead of purchasing for rare-use cases.' },
    ]
  },
  {
    id: 'provider',
    label: 'PROVIDERS',
    color: '#00BFFF',
    groups: [
      { icon: Camera, name: 'Individual Owners', desc: 'Own cameras, gadgets, tools that are not in regular use — earning from idle assets.' },
      { icon: Users2, name: 'Photographers / Creators', desc: 'Have extra equipment to monetise by listing it for peer rental bookings.' },
      { icon: Wrench, name: 'Contractors & Technicians', desc: 'Tools and gear available during downtime — a secondary revenue stream.' },
      { icon: Building2, name: 'Professional Rental Shops', desc: "Existing rental providers expanding reach by joining BORROWIT's marketplace." },
    ]
  }
];

export default function Section12STP() {
  const [active, setActive] = useState(segments[0]);

  return (
    <section className="relative w-full h-screen max-h-screen flex flex-col justify-between items-center px-4 sm:px-6 md:px-12 lg:px-16 pt-20 pb-6 bg-[#08090B] snap-start border-t border-white/5 overflow-hidden shrink-0">
      <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-[#00BFFF]/4 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-6xl w-full h-full flex flex-col justify-between gap-3 lg:gap-4 z-10 my-auto">
        {/* Header */}
        <div className="flex flex-col items-center text-center gap-1.5">
          <span className="px-3 py-0.5 rounded-full glass-panel text-[10px] md:text-xs font-mono-tech text-[#00FF9D] border border-[#00FF9D]/20 uppercase tracking-widest">
            12 — MARKET SEGMENTATION & TARGETING
          </span>
          <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black font-space text-white leading-none uppercase tracking-tight">
            WHO WE<br />
            <span className="text-gradient-mint">SERVE</span>
          </h2>
        </div>

        {/* STP Badges */}
        <div className="flex flex-wrap gap-2 justify-center">
          {[
            { label: 'DEMOGRAPHIC', desc: 'Individuals, professionals, students, SMBs' },
            { label: 'GEOGRAPHIC', desc: 'Hyperlocal — city-cluster first' },
            { label: 'PSYCHOGRAPHIC', desc: 'Value affordability, flexibility, no ownership' },
            { label: 'BEHAVIOURAL', desc: 'Equipment needs, booking frequency, digital adoption' },
          ].map(({ label, desc }) => (
            <div key={label} className="glass-panel px-3 py-2 rounded-xl border border-white/10 flex flex-col gap-0.5">
              <span className="text-[9px] font-mono-tech font-bold text-[#00FF9D] uppercase tracking-widest">{label}</span>
              <span className="text-[10px] text-slate-400">{desc}</span>
            </div>
          ))}
        </div>

        {/* Segment Toggle */}
        <div className="flex gap-3 justify-center">
          {segments.map((seg) => (
            <button
              key={seg.id}
              onClick={() => setActive(seg)}
              className={`px-5 py-2 rounded-full text-xs font-mono-tech font-bold uppercase tracking-widest transition-all border ${
                active.id === seg.id
                  ? 'border-[#00FF9D]/60 bg-[#00FF9D]/15 text-[#00FF9D]'
                  : 'glass-panel border-white/10 text-slate-400 hover:text-white'
              }`}
            >
              {seg.label}
            </button>
          ))}
        </div>

        {/* Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active.id}
            initial={{ opacity: 0, x: active.id === 'renter' ? -20 : 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="grid grid-cols-2 lg:grid-cols-4 gap-2.5 md:gap-3"
          >
            {active.groups.map(({ icon: Icon, name, desc }) => (
              <div key={name} className="glass-panel p-3.5 md:p-4 rounded-xl border border-white/10 hover:border-[#00FF9D]/30 transition-all flex flex-col gap-2 group">
                <div className="w-8 h-8 rounded-lg bg-[#00FF9D]/10 flex items-center justify-center text-[#00FF9D] group-hover:bg-[#00FF9D]/20 transition-colors">
                  <Icon className="w-4 h-4" />
                </div>
                <h3 className="text-xs md:text-sm font-bold font-space text-white leading-tight">{name}</h3>
                <p className="text-[10px] md:text-[11px] text-slate-400 leading-tight">{desc}</p>
              </div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Positioning Statement */}
        <div className="glass-panel p-4 rounded-xl border border-[#00FF9D]/20 text-center">
          <span className="text-[10px] font-mono-tech text-[#00FF9D] uppercase tracking-widest block mb-1">POSITIONING</span>
          <p className="text-sm md:text-base text-slate-200 font-light">A <strong className="text-white">convenient, reliable hyperlocal marketplace</strong> for renting and listing equipment — differentiated by <strong className="text-[#00FF9D]">Borrow Score</strong> and the <strong className="text-[#00FF9D]">AI Digital Product Passport</strong>.</p>
        </div>
      </div>
    </section>
  );
}
