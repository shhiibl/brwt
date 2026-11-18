import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Users, Target, TrendingUp, Share2, Star } from 'lucide-react';

const concepts = [
  {
    id: 'production',
    label: '01 Production',
    title: 'Production Concept',
    desc: 'BORROWIT improves operational efficiency through simpler booking flows, digital discovery, and connecting renters with nearby providers — reducing friction across the rental journey.',
    active: false,
    primary: false,
  },
  {
    id: 'product',
    label: '02 Product',
    title: 'Product Concept',
    desc: 'The platform applies quality-driven features: Borrow Score for renter reliability, AI-Powered Digital Product Passport for condition documentation, and intuitive search and listing tools.',
    active: true,
    primary: false,
  },
  {
    id: 'selling',
    label: '03 Selling',
    title: 'Selling Concept',
    desc: 'Digital ads, referral programmes, and provider acquisition campaigns drive platform growth. Aggressive selling is not the main philosophy — relationships and satisfaction come first.',
    active: false,
    primary: false,
  },
  {
    id: 'marketing',
    label: '04 Marketing ★',
    title: 'Marketing Concept (Primary)',
    desc: 'The PRIMARY concept. BORROWIT identifies customer needs — affordable equipment access, idle-asset income — and satisfies them more effectively than alternatives through transparency, trust, and local supply.',
    active: false,
    primary: true,
  },
  {
    id: 'societal',
    label: '05 Societal ★',
    title: 'Societal Marketing (Primary)',
    desc: 'The PRIMARY concept. By enabling shared equipment access, BORROWIT reduces unnecessary purchases, improves asset utilisation, and supports a resource-efficient, sharing-based consumption model.',
    active: false,
    primary: true,
  },
];

export default function Section11MarketingStrategy() {
  const [active, setActive] = useState(concepts[3]);

  return (
    <section className="relative w-full h-screen max-h-screen flex flex-col justify-between items-center px-4 sm:px-6 md:px-12 lg:px-16 pt-20 pb-6 bg-[#08090B] snap-start border-t border-white/5 overflow-hidden shrink-0">
      {/* Background glow */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#00FF9D]/4 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-6xl w-full h-full flex flex-col justify-between gap-3 lg:gap-4 z-10 my-auto">
        {/* Header */}
        <div className="flex flex-col items-center text-center gap-1.5">
          <span className="px-3 py-0.5 rounded-full glass-panel text-[10px] md:text-xs font-mono-tech text-[#00FF9D] border border-[#00FF9D]/20 uppercase tracking-widest">
            11 — MARKETING PHILOSOPHY
          </span>
          <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black font-space text-white leading-none uppercase tracking-tight">
            5 MARKETING<br />
            <span className="text-gradient-mint">MANAGEMENT CONCEPTS</span>
          </h2>
        </div>

        {/* Tab Row */}
        <div className="flex flex-wrap gap-2 justify-center">
          {concepts.map((c) => (
            <button
              key={c.id}
              onClick={() => setActive(c)}
              className={`px-3 py-1.5 rounded-lg text-[10px] md:text-xs font-mono-tech font-bold uppercase tracking-widest transition-all border ${
                active.id === c.id
                  ? 'bg-[#00FF9D]/20 border-[#00FF9D]/60 text-[#00FF9D]'
                  : 'glass-panel border-white/10 text-slate-400 hover:text-white hover:border-white/20'
              }`}
            >
              {c.label}
            </button>
          ))}
        </div>

        {/* Detail Panel */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className={`glass-panel p-6 md:p-8 rounded-2xl border flex flex-col gap-4 ${
              active.primary ? 'border-[#00FF9D]/30 shadow-[0_0_40px_rgba(0,255,157,0.08)]' : 'border-white/10'
            }`}
          >
            {active.primary && (
              <span className="self-start px-2 py-0.5 rounded-full text-[9px] font-mono-tech font-bold uppercase tracking-widest bg-[#00FF9D]/15 text-[#00FF9D] border border-[#00FF9D]/30">
                PRIMARY PHILOSOPHY
              </span>
            )}
            <h3 className="text-xl md:text-2xl lg:text-3xl font-black font-space text-white">{active.title}</h3>
            <p className="text-slate-300 text-sm md:text-base leading-relaxed">{active.desc}</p>
          </motion.div>
        </AnimatePresence>

        {/* Summary Row */}
        <div className="grid grid-cols-3 gap-2 md:gap-3">
          {[
            { icon: Search, label: 'Market Research', desc: 'Customer needs, demand & competitor analysis' },
            { icon: Users, label: 'STP Strategy', desc: 'Segmentation, Targeting & Positioning' },
            { icon: Star, label: 'CRM Focus', desc: 'Repeat bookings, loyalty & relationship marketing' },
          ].map(({ icon: Icon, label, desc }) => (
            <div key={label} className="glass-panel p-3 md:p-4 rounded-xl border border-white/10 flex flex-col gap-1.5 hover:border-[#00FF9D]/30 transition-all">
              <div className="w-7 h-7 rounded-lg bg-[#00FF9D]/10 flex items-center justify-center text-[#00FF9D]">
                <Icon className="w-3.5 h-3.5" />
              </div>
              <span className="text-[10px] md:text-xs font-bold font-space text-white uppercase tracking-wide">{label}</span>
              <p className="text-[9px] md:text-[10px] text-slate-400 leading-tight">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
