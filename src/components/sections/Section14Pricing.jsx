import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Percent, Package, Crown, Calculator } from 'lucide-react';

export default function Section14Pricing() {
  const [qty, setQty] = useState(1);
  const [rentalValue, setRentalValue] = useState(2000);

  const isBundle = qty >= 3;
  const commissionRate = isBundle ? 0.10 : 0.15;
  const totalRentalValue = rentalValue * qty;
  const commission = Math.round(totalRentalValue * commissionRate);
  const total = totalRentalValue + commission;

  return (
    <section className="relative w-full h-screen max-h-screen flex flex-col justify-between items-center px-4 sm:px-6 md:px-12 lg:px-16 pt-20 pb-6 bg-[#08090B] snap-start border-t border-white/5 overflow-hidden shrink-0">
      <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-[#00FF9D]/4 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-6xl w-full h-full flex flex-col justify-between gap-3 lg:gap-5 z-10 my-auto">
        {/* Header */}
        <div className="flex flex-col items-center text-center gap-1.5">
          <span className="px-3 py-0.5 rounded-full glass-panel text-[10px] md:text-xs font-mono-tech text-[#00FF9D] border border-[#00FF9D]/20 uppercase tracking-widest">
            14 — TRANSPARENT PRICING STRATEGY
          </span>
          <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black font-space text-white leading-none uppercase tracking-tight">
            PRICING<br />
            <span className="text-gradient-mint">THAT MAKES SENSE</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4 flex-1 min-h-0 max-h-[65vh]">
          {/* Left: Pricing Tiers */}
          <div className="flex flex-col gap-3">
            {/* Standard */}
            <div className="glass-panel p-4 md:p-5 rounded-xl border border-white/10 hover:border-[#00FF9D]/30 transition-all flex flex-col gap-2">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-[#00FF9D]/10 flex items-center justify-center text-[#00FF9D]">
                    <Percent className="w-4 h-4" />
                  </div>
                  <span className="text-xs font-bold font-space text-white uppercase tracking-wide">Standard Commission</span>
                </div>
                <span className="text-xl md:text-2xl font-black font-space text-[#00FF9D]">15%</span>
              </div>
              <p className="text-[10px] md:text-xs text-slate-400 leading-relaxed">Applied per completed rental booking. Displayed separately at checkout so customers understand the platform fee before confirming.</p>
            </div>
            {/* Bundle */}
            <div className="glass-panel p-4 md:p-5 rounded-xl border border-[#00FF9D]/30 shadow-[0_0_30px_rgba(0,255,157,0.06)] flex flex-col gap-2">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-[#00FF9D]/20 flex items-center justify-center text-[#00FF9D]">
                    <Package className="w-4 h-4" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-xs font-bold font-space text-white uppercase tracking-wide">Bundle Discount</span>
                    <span className="text-[9px] font-mono-tech text-[#00FF9D]/70">3+ items in one order</span>
                  </div>
                </div>
                <span className="text-xl md:text-2xl font-black font-space text-[#00FF9D]">10%</span>
              </div>
              <p className="text-[10px] md:text-xs text-slate-400 leading-relaxed">5% reduction on platform fee. Does not reduce rental prices — purely a platform commission saving for multi-item bookings.</p>
            </div>
            {/* Premium */}
            <div className="glass-panel p-4 md:p-5 rounded-xl border border-white/10 hover:border-[#00FF9D]/30 transition-all flex flex-col gap-2">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-[#00FF9D]/10 flex items-center justify-center text-[#00FF9D]">
                    <Crown className="w-4 h-4" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-xs font-bold font-space text-white uppercase tracking-wide">Premium Membership</span>
                    <span className="text-[9px] font-mono-tech text-[#00FF9D]/70">Free delivery · Priority support · 1 free reschedule</span>
                  </div>
                </div>
                <span className="text-sm font-black font-space text-[#00FF9D]">Paid</span>
              </div>
              <div className="flex flex-wrap gap-1.5 mt-1">
                {['Free Delivery', 'Priority Booking', 'Accessory Bundles', 'Loyalty Benefits', 'Exclusive Offers', 'Enhanced Reminders'].map((p) => (
                  <span key={p} className="text-[9px] font-mono-tech px-2 py-0.5 rounded bg-white/5 border border-white/10 text-slate-300">{p}</span>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Interactive Calculator */}
          <div className="glass-panel p-4 md:p-6 rounded-xl border border-white/10 flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-[#00FF9D]/10 flex items-center justify-center text-[#00FF9D]">
                <Calculator className="w-4 h-4" />
              </div>
              <span className="text-xs font-bold font-space text-white uppercase tracking-wide">Live Fee Calculator</span>
            </div>

            <div className="flex flex-col gap-3">
              <div className="flex flex-col gap-1.5">
                <label className="text-[10px] font-mono-tech text-slate-400 uppercase tracking-widest">Rental value per item (₹)</label>
                <input
                  type="range" min={500} max={10000} step={100}
                  value={rentalValue}
                  onChange={(e) => setRentalValue(Number(e.target.value))}
                  className="w-full accent-[#00FF9D]"
                />
                <span className="text-sm font-bold font-space text-white">₹{rentalValue.toLocaleString('en-IN')}</span>
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-[10px] font-mono-tech text-slate-400 uppercase tracking-widest">Number of items</label>
                <div className="flex gap-2">
                  {[1,2,3,4,5].map((n) => (
                    <button
                      key={n}
                      onClick={() => setQty(n)}
                      className={`w-8 h-8 rounded-lg text-xs font-bold font-mono-tech transition-all border ${
                        qty === n ? 'bg-[#00FF9D]/20 border-[#00FF9D]/60 text-[#00FF9D]' : 'glass-panel border-white/10 text-slate-400 hover:text-white'
                      }`}
                    >
                      {n}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className="border-t border-white/10 pt-3 flex flex-col gap-2">
              <div className="flex justify-between text-xs">
                <span className="text-slate-400">Total Rental Value</span>
                <span className="text-white font-bold">₹{totalRentalValue.toLocaleString('en-IN')}</span>
              </div>
              <div className="flex justify-between text-xs">
                <span className="text-slate-400">Platform Commission ({isBundle ? '10%' : '15%'})</span>
                <span className={isBundle ? 'text-[#00FF9D] font-bold' : 'text-white font-bold'}>₹{commission.toLocaleString('en-IN')}</span>
              </div>
              {isBundle && (
                <motion.div initial={{opacity:0}} animate={{opacity:1}} className="text-[9px] font-mono-tech text-[#00FF9D] bg-[#00FF9D]/10 rounded px-2 py-1">
                  ✓ Bundle discount applied — saving ₹{Math.round(totalRentalValue * 0.05).toLocaleString('en-IN')}
                </motion.div>
              )}
              <div className="flex justify-between font-bold">
                <span className="text-slate-200 text-sm">Total (before deposit & tax)</span>
                <span className="text-[#00FF9D] text-lg font-black font-space">₹{total.toLocaleString('en-IN')}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
