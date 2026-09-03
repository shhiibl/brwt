import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calculator, DollarSign, PieChart, Sparkles, TrendingUp, Check } from 'lucide-react';

export default function Section08FounderEconomics() {
  const [rentalsCount, setRentalsCount] = useState(1000);
  const [subscribersCount, setSubscribersCount] = useState(500);

  const avgRentalPrice = 600;
  const platformFeePct = 0.15;
  const subPrice = 199;

  const grossVolume = rentalsCount * avgRentalPrice;
  const platformCommissionRevenue = grossVolume * platformFeePct;
  const subscriptionRevenue = subscribersCount * subPrice;
  const totalMonthlyRevenue = platformCommissionRevenue + subscriptionRevenue;
  const totalAnnualRevenue = totalMonthlyRevenue * 12;

  return (
    <section className="relative w-full h-screen max-h-screen flex flex-col justify-between items-center px-4 sm:px-6 md:px-12 lg:px-16 pt-20 pb-6 bg-[#08090B] snap-start border-t border-white/5 overflow-hidden shrink-0">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] lg:w-[700px] h-[600px] lg:h-[700px] bg-[#00FF9D]/5 rounded-full blur-[170px] pointer-events-none" />

      <div className="max-w-6xl w-full h-full flex flex-col justify-between gap-3 lg:gap-5 z-10 my-auto">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center gap-1.5">
          <span className="px-3 py-0.5 rounded-full glass-panel text-[10px] md:text-xs font-mono-tech text-[#00FF9D] border border-[#00FF9D]/20 uppercase tracking-widest">
            08 — FOUNDER & INVESTOR ECONOMICS
          </span>
          <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black font-space text-white leading-none uppercase tracking-tight">
            THE PLATFORM SCALES<br />
            <span className="text-gradient-mint">WITHOUT OWNING INVENTORY.</span>
          </h2>
        </div>

        {/* Interactive Economics Modeling Calculator */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-8 items-center flex-1 min-h-0">
          {/* Left: Sliders / Control Panel */}
          <div className="lg:col-span-6 glass-panel rounded-2xl lg:rounded-3xl p-4 md:p-5 lg:p-6 border border-white/10 flex flex-col justify-between h-full max-h-[46vh] lg:max-h-[50vh] min-h-0 shadow-2xl">
            <div className="flex items-center justify-between border-b border-white/10 pb-2.5">
              <div className="flex items-center gap-2">
                <Calculator className="w-4 h-4 text-[#00FF9D]" />
                <span className="font-mono-tech text-[10px] md:text-xs font-bold text-white uppercase">
                  SIMULATION CALCULATOR
                </span>
              </div>
              <span className="text-[9px] font-mono-tech text-slate-400">UNIT ECONOMICS</span>
            </div>

            {/* Slider 1: Monthly Rentals */}
            <div className="flex flex-col gap-1.5 font-mono-tech my-auto">
              <div className="flex justify-between text-[11px] md:text-xs">
                <span className="text-slate-300">Monthly Completed Rentals</span>
                <span className="text-[#00FF9D] font-bold">{rentalsCount.toLocaleString()} rentals</span>
              </div>
              <input
                type="range"
                min="100"
                max="5000"
                step="100"
                value={rentalsCount}
                onChange={(e) => setRentalsCount(Number(e.target.value))}
                className="w-full accent-[#00FF9D] cursor-pointer bg-slate-800 rounded-lg h-2"
              />
              <span className="text-[9px] text-slate-500">
                Avg Value: ₹{avgRentalPrice} • Gross Vol: ₹{grossVolume.toLocaleString()}
              </span>
            </div>

            {/* Slider 2: Premium Subscribers */}
            <div className="flex flex-col gap-1.5 font-mono-tech my-auto">
              <div className="flex justify-between text-[11px] md:text-xs">
                <span className="text-slate-300">Premium Members (₹199/mo)</span>
                <span className="text-[#00FF9D] font-bold">{subscribersCount.toLocaleString()} users</span>
              </div>
              <input
                type="range"
                min="50"
                max="3000"
                step="50"
                value={subscribersCount}
                onChange={(e) => setSubscribersCount(Number(e.target.value))}
                className="w-full accent-[#00FF9D] cursor-pointer bg-slate-800 rounded-lg h-2"
              />
              <span className="text-[9px] text-slate-500">
                Subscriber ARR: ₹{(subscriptionRevenue * 12).toLocaleString()}/yr
              </span>
            </div>

            {/* Breakdown Card */}
            <div className="p-3 rounded-xl bg-[#121520] border border-white/10 flex flex-col gap-1.5 font-mono-tech text-[10px] md:text-xs">
              <div className="flex justify-between">
                <span className="text-slate-400">Marketplace Fee (15%):</span>
                <span className="text-white font-bold">₹{platformCommissionRevenue.toLocaleString()} / mo</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">Subscription Revenue:</span>
                <span className="text-white font-bold">₹{subscriptionRevenue.toLocaleString()} / mo</span>
              </div>
            </div>
          </div>

          {/* Right: Revenue Summary Climax Card */}
          <div className="lg:col-span-6 glass-panel-glow rounded-2xl lg:rounded-3xl p-4 md:p-5 lg:p-6 border border-[#00FF9D]/40 flex flex-col justify-between h-full max-h-[46vh] lg:max-h-[50vh] min-h-0 shadow-[0_0_60px_rgba(0,255,157,0.15)]">
            <span className="text-[10px] md:text-xs font-mono-tech text-[#00FF9D] uppercase tracking-widest border-b border-white/10 pb-2.5">
              MONTHLY PLATFORM REVENUE
            </span>

            <div className="flex flex-col gap-1 my-auto">
              <h3 className="text-3xl sm:text-4xl md:text-5xl font-black font-space text-white tracking-tight">
                ₹{totalMonthlyRevenue.toLocaleString()}
              </h3>
              <span className="text-[10px] md:text-xs font-mono-tech text-[#00FF9D]">
                ANNUAL RUN-RATE: ₹{totalAnnualRevenue.toLocaleString()} / YR
              </span>
            </div>

            <p className="text-[9px] text-slate-400 italic">
              *Illustrative assumptions for concept modelling.
            </p>

            {/* Founder Equity Explanation */}
            <div className="p-3 rounded-xl bg-black/50 border border-white/10 flex flex-col gap-1 font-mono-tech text-[10px] md:text-xs">
              <span className="text-[#00FF9D] font-bold flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5" />
                HOW FOUNDERS / DEVELOPERS EARN:
              </span>
              <p className="text-slate-300 leading-tight">
                Founders earn through <strong className="text-white">equity ownership & platform profit margins</strong>. Asset-light marketplace creates high gross margins.
              </p>
            </div>
          </div>
        </div>

        {/* Value Creation Flow Statement */}
        <div className="w-full glass-panel p-3 rounded-xl border border-white/10 flex flex-wrap md:flex-nowrap items-center justify-between text-[10px] md:text-xs font-mono-tech text-slate-300">
          <span>REVENUE</span>
          <span>→</span>
          <span>OPERATING COSTS</span>
          <span>→</span>
          <span>NET PROFIT</span>
          <span>→</span>
          <span className="text-[#00FF9D] font-bold">FOUNDER & SHAREHOLDER EQUITY VALUE</span>
        </div>
      </div>
    </section>
  );
}
