import React from 'react';
import { motion } from 'framer-motion';
import { Percent, Crown, ShieldAlert, Truck, Building2, ArrowDown, TrendingUp } from 'lucide-react';

export default function Section07BusinessModel() {
  const streams = [
    {
      title: "TRANSACTION FEE",
      desc: "BORROWIT takes 15% marketplace commission on every completed rental transaction.",
      icon: Percent,
      metric: "15% per booking",
      highlight: "High Volume Margin"
    },
    {
      title: "PREMIUM MEMBERSHIP",
      desc: "Borrowers & lenders unlock zero-deposit perks and priority delivery for ₹199/month.",
      icon: Crown,
      metric: "₹199 / month",
      highlight: "Recurring ARR"
    },
    {
      title: "PROTECTION FEE",
      desc: "Optional damage coverage micro-insurance fee on high-value gear (cameras, tools).",
      icon: ShieldAlert,
      metric: "3-5% item value",
      highlight: "High Margin Pool"
    },
    {
      title: "DELIVERY MARGIN",
      desc: "Hyperlocal courier pickup & drop-off margin on neighborhood equipment transit.",
      icon: Truck,
      metric: "₹40-80 / transit",
      highlight: "Logistics Cut"
    },
    {
      title: "B2B ENTERPRISE",
      desc: "Colleges, film crews, event organizers, and coworking spaces share internal inventory.",
      icon: Building2,
      metric: "₹15,000 / mo per Org",
      highlight: "Enterprise SaaS"
    }
  ];

  return (
    <section className="relative w-full h-screen max-h-screen flex flex-col justify-between items-center px-4 sm:px-6 md:px-12 lg:px-16 pt-20 pb-6 bg-[#08090B] snap-start border-t border-white/5 overflow-hidden shrink-0">
      {/* Background visual light */}
      <div className="absolute top-1/3 right-1/4 w-80 lg:w-96 h-80 lg:h-96 bg-[#00FF9D]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-6xl w-full h-full flex flex-col justify-between gap-3 lg:gap-5 z-10 my-auto">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center gap-1.5">
          <span className="px-3 py-0.5 rounded-full glass-panel text-[10px] md:text-xs font-mono-tech text-[#00FF9D] border border-[#00FF9D]/20 uppercase tracking-widest">
            07 — CAPITAL EFFICIENT MONETIZATION
          </span>
          <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black font-space text-white leading-none uppercase tracking-tight">
            WE DON&apos;T OWN<br />
            <span className="text-gradient-mint">THE PRODUCTS.</span>
          </h2>
        </div>

        {/* Animated Financial Flow Bar */}
        <div className="w-full glass-panel p-3.5 md:p-4 rounded-xl border border-white/10 flex flex-wrap md:flex-nowrap items-center justify-between gap-2 text-[10px] md:text-xs font-mono-tech shadow-xl">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-lg bg-[#00FF9D]/10 flex items-center justify-center text-[#00FF9D] shrink-0">
              <TrendingUp className="w-3.5 h-3.5" />
            </div>
            <span className="text-white font-bold">USERS PROVIDE INVENTORY</span>
          </div>
          <span className="text-slate-500 font-bold hidden md:block">→</span>
          <div className="text-slate-300">BORROWIT INFRASTRUCTURE</div>
          <span className="text-slate-500 font-bold hidden md:block">→</span>
          <div className="text-slate-300">TRANSACTIONS</div>
          <span className="text-slate-500 font-bold hidden md:block">→</span>
          <div className="text-[#00FF9D] font-bold">HIGH-MARGIN PLATFORM REVENUE</div>
        </div>

        {/* 5 Revenue Streams Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-2.5 md:gap-3.5 flex-1 max-h-[46vh] lg:max-h-[50vh] min-h-0">
          {streams.map((s, idx) => {
            const Icon = s.icon;
            return (
              <div
                key={idx}
                className="glass-panel p-3.5 md:p-4 lg:p-4.5 rounded-xl border border-white/10 hover:border-[#00FF9D]/40 transition-all flex flex-col justify-between gap-2 group"
              >
                <div className="flex items-center justify-between">
                  <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-[#00FF9D] group-hover:bg-[#00FF9D]/20 transition-colors shrink-0">
                    <Icon className="w-4 h-4" />
                  </div>
                  <span className="text-[9px] font-mono-tech px-1.5 py-0.5 rounded bg-[#00FF9D]/10 text-[#00FF9D] shrink-0">
                    {s.highlight}
                  </span>
                </div>

                <div className="flex flex-col gap-0.5">
                  <h3 className="text-xs md:text-sm font-bold font-space text-white leading-tight">{s.title}</h3>
                  <p className="text-[10px] md:text-[11px] text-slate-400 leading-tight truncate md:whitespace-normal">{s.desc}</p>
                </div>

                <div className="pt-2 border-t border-white/10 font-mono-tech text-[10px] md:text-xs text-[#00FF9D] font-bold">
                  {s.metric}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
