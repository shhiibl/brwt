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
    <section className="relative w-full min-h-screen flex flex-col justify-center items-center px-6 py-20 md:px-16 bg-[#08090B] snap-start border-t border-white/5 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[750px] h-[750px] bg-[#00FF9D]/5 rounded-full blur-[170px] pointer-events-none" />

      <div className="max-w-6xl w-full flex flex-col gap-10 z-10">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center gap-4">
          <span className="px-3 py-1 rounded-full glass-panel text-xs font-mono-tech text-[#00FF9D] border border-[#00FF9D]/20 uppercase tracking-widest">
            08 — FOUNDER & INVESTOR ECONOMICS
          </span>
          <h2 className="text-4xl sm:text-6xl md:text-8xl font-black font-space text-white leading-none uppercase tracking-tight">
            THE PLATFORM SCALES<br />
            <span className="text-gradient-mint">WITHOUT OWNING INVENTORY.</span>
          </h2>
        </div>

        {/* Interactive Economics Modeling Calculator */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left: Sliders / Control Panel */}
          <div className="lg:col-span-6 glass-panel rounded-3xl p-6 md:p-8 border border-white/10 flex flex-col gap-6 shadow-2xl">
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <div className="flex items-center gap-2">
                <Calculator className="w-5 h-5 text-[#00FF9D]" />
                <span className="font-mono-tech text-xs font-bold text-white uppercase">
                  SIMULATION CALCULATOR
                </span>
              </div>
              <span className="text-[10px] font-mono-tech text-slate-400">UNIT ECONOMICS</span>
            </div>

            {/* Slider 1: Monthly Rentals */}
            <div className="flex flex-col gap-2 font-mono-tech">
              <div className="flex justify-between text-xs">
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
              <span className="text-[10px] text-slate-500">
                Avg Rental Value: ₹{avgRentalPrice} • Marketplace Volume: ₹{grossVolume.toLocaleString()}
              </span>
            </div>

            {/* Slider 2: Premium Subscribers */}
            <div className="flex flex-col gap-2 font-mono-tech">
              <div className="flex justify-between text-xs">
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
              <span className="text-[10px] text-slate-500">
                Subscriber ARR Contribution: ₹{(subscriptionRevenue * 12).toLocaleString()}/yr
              </span>
            </div>

            {/* Breakdown Card */}
            <div className="p-4 rounded-2xl bg-[#121520] border border-white/10 flex flex-col gap-2 font-mono-tech text-xs">
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
          <div className="lg:col-span-6 glass-panel-glow rounded-3xl p-8 border border-[#00FF9D]/40 flex flex-col gap-6 shadow-[0_0_60px_rgba(0,255,157,0.15)]">
            <span className="text-xs font-mono-tech text-[#00FF9D] uppercase tracking-widest">
              MONTHLY PLATFORM REVENUE
            </span>

            <div className="flex flex-col gap-1">
              <h3 className="text-5xl md:text-6xl font-black font-space text-white tracking-tight">
                ₹{totalMonthlyRevenue.toLocaleString()}
              </h3>
              <span className="text-xs font-mono-tech text-[#00FF9D]">
                ESTIMATED ANNUAL RUN-RATE: ₹{totalAnnualRevenue.toLocaleString()} / YR
              </span>
            </div>

            <p className="text-xs text-slate-400 italic">
              *Illustrative assumptions for concept modelling.
            </p>

            {/* Founder Equity Explanation */}
            <div className="p-4 rounded-2xl bg-black/50 border border-white/10 flex flex-col gap-3 font-mono-tech text-xs">
              <span className="text-[#00FF9D] font-bold flex items-center gap-2">
                <Sparkles className="w-4 h-4" />
                HOW FOUNDERS / DEVELOPERS EARN:
              </span>
              <p className="text-slate-300 leading-relaxed">
                Founders earn through <strong className="text-white">equity ownership & platform profit margins</strong>, not by buying physical tools. The asset-light marketplace creates high gross margin scalability.
              </p>
            </div>
          </div>
        </div>

        {/* Value Creation Flow Statement */}
        <div className="w-full glass-panel p-4 rounded-2xl border border-white/10 flex flex-col sm:flex-row items-center justify-between text-xs font-mono-tech text-slate-300">
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
