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
    <section className="relative w-full min-h-screen flex flex-col justify-center items-center px-6 py-20 md:px-16 bg-[#08090B] snap-start border-t border-white/5 overflow-hidden">
      {/* Background visual light */}
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-[#00FF9D]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-6xl w-full flex flex-col gap-10 z-10">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center gap-4">
          <span className="px-3 py-1 rounded-full glass-panel text-xs font-mono-tech text-[#00FF9D] border border-[#00FF9D]/20 uppercase tracking-widest">
            07 — CAPITAL EFFICIENT MONETIZATION
          </span>
          <h2 className="text-4xl sm:text-6xl md:text-8xl font-black font-space text-white leading-none uppercase tracking-tight">
            WE DON&apos;T OWN<br />
            <span className="text-gradient-mint">THE PRODUCTS.</span>
          </h2>
        </div>

        {/* Animated Financial Flow Bar */}
        <div className="w-full glass-panel p-6 rounded-2xl border border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-mono-tech shadow-xl">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-[#00FF9D]/10 flex items-center justify-center text-[#00FF9D]">
              <TrendingUp className="w-4 h-4" />
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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 my-2">
          {streams.map((s, idx) => {
            const Icon = s.icon;
            return (
              <div
                key={idx}
                className="glass-panel p-6 rounded-2xl border border-white/10 hover:border-[#00FF9D]/40 transition-all flex flex-col justify-between gap-4 group"
              >
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[#00FF9D] group-hover:bg-[#00FF9D]/20 transition-colors">
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="text-[10px] font-mono-tech px-2 py-0.5 rounded bg-[#00FF9D]/10 text-[#00FF9D]">
                    {s.highlight}
                  </span>
                </div>

                <div className="flex flex-col gap-1">
                  <h3 className="text-lg font-bold font-space text-white">{s.title}</h3>
                  <p className="text-xs text-slate-400 leading-relaxed">{s.desc}</p>
                </div>

                <div className="pt-3 border-t border-white/10 font-mono-tech text-xs text-[#00FF9D] font-bold">
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
