import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Percent, Crown, TrendingUp } from 'lucide-react';

/* ── Smooth animated counter ── */
function AnimatedNumber({ value, prefix = '', suffix = '', className = '' }) {
  const ref = useRef(null);
  const prev = useRef(value);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const start = prev.current;
    const end = value;
    const duration = 600;
    const startTime = performance.now();
    const tick = (now) => {
      const t = Math.min((now - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - t, 3);
      el.textContent = prefix + Math.round(start + (end - start) * eased).toLocaleString('en-IN') + suffix;
      if (t < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
    prev.current = value;
  }, [value, prefix, suffix]);

  return <span ref={ref} className={className}>{prefix}{value.toLocaleString('en-IN')}{suffix}</span>;
}

/* ── Revenue bar ── */
function Bar({ value, max, color, label }) {
  const pct = max > 0 ? Math.min((value / max) * 100, 100) : 0;
  return (
    <div className="flex flex-col gap-1.5">
      <div className="flex items-center justify-between">
        <span className="text-[11px] font-mono-tech text-slate-400">{label}</span>
        <AnimatedNumber value={value} prefix="₹" className="text-sm font-bold font-space" style={{ color }} />
      </div>
      <div className="w-full h-2.5 rounded-full bg-white/5 overflow-hidden relative">
        <motion.div
          className="absolute inset-y-0 left-0 rounded-full"
          animate={{ width: `${pct}%` }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          style={{ background: `linear-gradient(90deg, ${color}70, ${color})`, boxShadow: `0 0 12px ${color}50` }}
        />
      </div>
    </div>
  );
}

/* ── Slider row with fully custom track ── */
function SliderRow({ label, value, min, max, step, onChange, display, accentColor = '#00FF9D' }) {
  const pct = ((value - min) / (max - min)) * 100;
  return (
    <div className="flex flex-col gap-1.5">
      <div className="flex items-center justify-between mb-0.5">
        <span className="text-[11px] font-mono-tech text-slate-400">{label}</span>
        <span className="text-[11px] font-mono-tech font-bold text-white bg-white/5 px-2 py-0.5 rounded-md">{display}</span>
      </div>
      <div className="relative h-5 flex items-center">
        {/* Custom track */}
        <div className="absolute w-full h-1.5 rounded-full bg-white/10">
          <div
            className="absolute h-full rounded-full transition-none"
            style={{ width: `${pct}%`, background: `linear-gradient(90deg, ${accentColor}60, ${accentColor})` }}
          />
        </div>
        {/* Native input on top (transparent) */}
        <input
          type="range"
          min={min}
          max={max}
          step={step}
          value={value}
          onChange={e => onChange(Number(e.target.value))}
          className="relative w-full h-5 opacity-0 cursor-pointer z-10"
          style={{ margin: 0 }}
        />
        {/* Thumb */}
        <div
          className="absolute w-4 h-4 rounded-full border-2 shadow-lg pointer-events-none transition-none"
          style={{
            left: `calc(${pct}% - 8px)`,
            borderColor: accentColor,
            background: '#0F1219',
            boxShadow: `0 0 10px ${accentColor}60`,
          }}
        />
      </div>
      <div className="flex justify-between text-[9px] font-mono-tech text-slate-700">
        <span>{min.toLocaleString()}</span><span>{max.toLocaleString()}</span>
      </div>
    </div>
  );
}

export default function Section17Revenue() {
  const [bookings,     setBookings]     = useState(500);
  const [avgValue,     setAvgValue]     = useState(2000);
  const [bundlePct,    setBundlePct]    = useState(20);
  const [premiumUsers, setPremiumUsers] = useState(200);
  const [premiumPrice, setPremiumPrice] = useState(199);
  const [annualPct,    setAnnualPct]    = useState(40);

  const singleB   = Math.round(bookings * (1 - bundlePct / 100));
  const bundleB   = bookings - singleB;
  const singleRev = Math.round(singleB * avgValue * 0.15);
  const bundleRev = Math.round(bundleB * avgValue * 0.10);
  const svcRev    = singleRev + bundleRev;

  const monthlyU  = Math.round(premiumUsers * (1 - annualPct / 100));
  const annualU   = premiumUsers - monthlyU;
  const premRev   = monthlyU * premiumPrice + annualU * premiumPrice;
  const totalRev  = svcRev + premRev;
  const maxBar    = Math.max(svcRev, premRev, 1) * 1.4;

  return (
    <section className="relative w-full h-screen max-h-screen flex flex-col items-center px-4 sm:px-6 md:px-12 lg:px-16 pt-20 pb-6 bg-[#08090B] snap-start border-t border-white/5 overflow-y-auto shrink-0">
      <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-[#00FF9D]/5 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-[#00BFFF]/4 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-6xl w-full flex flex-col gap-4 z-10 py-2">

        {/* Header */}
        <div className="flex flex-col items-center text-center gap-1.5 shrink-0">
          <span className="px-3 py-0.5 rounded-full glass-panel text-[10px] font-mono-tech text-[#00FF9D] border border-[#00FF9D]/20 uppercase tracking-widest">
            17 — LIVE REVENUE GENERATOR
          </span>
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-black font-space text-white leading-none uppercase tracking-tight">
            DRAG THE SLIDERS.<br />
            <span className="text-gradient-mint">WATCH REVENUE GROW.</span>
          </h2>
        </div>

        {/* Total Revenue Hero Card */}
        <div className="glass-panel rounded-2xl border border-[#00FF9D]/25 p-4 md:p-5 shadow-[0_0_60px_rgba(0,255,157,0.07)]">
          <div className="flex flex-col md:flex-row items-center gap-4">
            <div className="flex-1 text-center md:text-left">
              <span className="text-[9px] font-mono-tech text-slate-500 uppercase tracking-widest block mb-1">
                Total Monthly Platform Revenue
              </span>
              <AnimatedNumber
                value={totalRev} prefix="₹"
                className="text-4xl md:text-5xl font-black font-space text-[#00FF9D] block"
              />
              <span className="text-[10px] font-mono-tech text-slate-500 mt-1 block">
                {bookings.toLocaleString()} bookings + {premiumUsers} premium subscribers
              </span>
            </div>
            <div className="hidden md:block w-px bg-white/10 self-stretch" />
            <div className="flex md:flex-col gap-5 md:gap-2 md:min-w-[160px]">
              <div className="flex flex-col items-center gap-0.5">
                <span className="text-[8px] font-mono-tech text-slate-600 uppercase tracking-widest">Service Charge</span>
                <AnimatedNumber value={svcRev} prefix="₹" className="text-lg font-black font-space text-[#00FF9D]" />
                <span className="text-[8px] font-mono-tech text-slate-600">{totalRev > 0 ? Math.round(svcRev / totalRev * 100) : 0}% share</span>
              </div>
              <div className="text-slate-700 font-bold text-lg hidden md:block text-center">+</div>
              <div className="flex flex-col items-center gap-0.5">
                <span className="text-[8px] font-mono-tech text-slate-600 uppercase tracking-widest">Premium</span>
                <AnimatedNumber value={premRev} prefix="₹" className="text-lg font-black font-space text-[#00BFFF]" />
                <span className="text-[8px] font-mono-tech text-slate-600">{totalRev > 0 ? Math.round(premRev / totalRev * 100) : 0}% share</span>
              </div>
            </div>
          </div>
        </div>

        {/* Revenue Bars */}
        <div className="glass-panel rounded-2xl border border-white/10 p-4 flex flex-col gap-3">
          <span className="text-[9px] font-mono-tech text-slate-500 uppercase tracking-widest flex items-center gap-2">
            <TrendingUp className="w-3 h-3" /> Revenue Breakdown — Live
          </span>
          <Bar value={svcRev}   max={maxBar}        color="#00FF9D" label="Service Charge Revenue (commission on bookings)" />
          <Bar value={premRev}  max={maxBar}        color="#00BFFF" label="Premium Membership Revenue (subscriptions)" />
          <Bar value={totalRev} max={maxBar * 1.15} color="#A855F7" label="Total Monthly Revenue" />
        </div>

        {/* Two Column Slider Panels */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

          {/* ── Service Charge Panel ── */}
          <div className="glass-panel rounded-2xl border border-[#00FF9D]/20 p-4 flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-xl bg-[#00FF9D]/15 flex items-center justify-center shrink-0">
                <Percent className="w-4 h-4 text-[#00FF9D]" />
              </div>
              <div className="flex-1 min-w-0">
                <span className="text-sm font-bold font-space text-white uppercase tracking-wide block">Service Charge</span>
                <span className="text-[10px] font-mono-tech text-[#00FF9D]/60">15% standard · 10% bundle (3+ items)</span>
              </div>
              <AnimatedNumber value={svcRev} prefix="₹" className="text-sm font-black font-space text-[#00FF9D] shrink-0" />
            </div>

            <div className="flex flex-col gap-4">
              <SliderRow label="Monthly Bookings"   value={bookings}  min={50}  max={5000} step={50}  onChange={setBookings}  display={bookings.toLocaleString()}              accentColor="#00FF9D" />
              <SliderRow label="Avg Rental Value"   value={avgValue}  min={500} max={8000} step={100} onChange={setAvgValue}  display={`₹${avgValue.toLocaleString('en-IN')}`} accentColor="#00FF9D" />
              <SliderRow label="Bundle Orders (3+)" value={bundlePct} min={0}   max={80}   step={5}   onChange={setBundlePct} display={`${bundlePct}%`}                        accentColor="#00FF9D" />
            </div>

            <div className="border-t border-white/8 pt-3 grid grid-cols-2 gap-3">
              <div className="glass-panel p-3 rounded-xl border border-white/10">
                <span className="text-[8px] font-mono-tech text-slate-600 uppercase tracking-widest block mb-0.5">Standard (15%) Rev</span>
                <AnimatedNumber value={singleRev} prefix="₹" className="text-sm font-black font-space text-[#00FF9D]" />
                <span className="text-[8px] text-slate-600 block">{singleB.toLocaleString()} bookings</span>
              </div>
              <div className="glass-panel p-3 rounded-xl border border-white/10">
                <span className="text-[8px] font-mono-tech text-slate-600 uppercase tracking-widest block mb-0.5">Bundle (10%) Rev</span>
                <AnimatedNumber value={bundleRev} prefix="₹" className="text-sm font-black font-space text-[#00FF9D]" />
                <span className="text-[8px] text-slate-600 block">{bundleB.toLocaleString()} bookings</span>
              </div>
            </div>
          </div>

          {/* ── Premium Panel ── */}
          <div className="glass-panel rounded-2xl border border-[#00BFFF]/20 p-4 flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-xl bg-[#00BFFF]/15 flex items-center justify-center shrink-0">
                <Crown className="w-4 h-4 text-[#00BFFF]" />
              </div>
              <div className="flex-1 min-w-0">
                <span className="text-sm font-bold font-space text-white uppercase tracking-wide block">Premium Membership</span>
                <span className="text-[10px] font-mono-tech text-[#00BFFF]/60">Freemium → Paid upgrade</span>
              </div>
              <AnimatedNumber value={premRev} prefix="₹" className="text-sm font-black font-space text-[#00BFFF] shrink-0" />
            </div>

            <div className="flex flex-col gap-4">
              <SliderRow label="Premium Subscribers" value={premiumUsers}  min={10}  max={2000} step={10}  onChange={setPremiumUsers}  display={premiumUsers.toLocaleString()} accentColor="#00BFFF" />
              <SliderRow label="Monthly Price"        value={premiumPrice} min={99}  max={999}  step={50}  onChange={setPremiumPrice}  display={`₹${premiumPrice}`}           accentColor="#00BFFF" />
              <SliderRow label="Annual Plan Users"    value={annualPct}    min={0}   max={80}   step={5}   onChange={setAnnualPct}     display={`${annualPct}%`}              accentColor="#00BFFF" />
            </div>

            <div className="border-t border-white/8 pt-3 grid grid-cols-2 gap-3">
              <div className="glass-panel p-3 rounded-xl border border-white/10">
                <span className="text-[8px] font-mono-tech text-slate-600 uppercase tracking-widest block mb-0.5">Monthly Subs</span>
                <AnimatedNumber value={monthlyU * premiumPrice} prefix="₹" className="text-sm font-black font-space text-[#00BFFF]" />
                <span className="text-[8px] text-slate-600 block">{monthlyU} users</span>
              </div>
              <div className="glass-panel p-3 rounded-xl border border-white/10">
                <span className="text-[8px] font-mono-tech text-slate-600 uppercase tracking-widest block mb-0.5">Annual Subs</span>
                <AnimatedNumber value={annualU * premiumPrice} prefix="₹" className="text-sm font-black font-space text-[#00BFFF]" />
                <span className="text-[8px] text-slate-600 block">{annualU} users</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
