import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingBag, Sparkles, Archive, EyeOff, Lock, Layers } from 'lucide-react';

export default function Section02Problem() {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      id: "buy",
      tag: "01 / BUY",
      title: "BUY",
      desc: "Acquire expensive physical product for a single weekend project.",
      icon: ShoppingBag,
      color: "from-emerald-500/20 to-teal-500/5",
      product: "Bosch Professional Pressure Washer",
      price: "₹18,500",
      usage: "0 Hours used this year"
    },
    {
      id: "use",
      tag: "02 / USE",
      title: "USE",
      desc: "Used exactly once for 30 minutes, then cleaned and put away.",
      icon: Sparkles,
      color: "from-blue-500/20 to-cyan-500/5",
      product: "Canon EOS Cinema Camera",
      price: "₹85,000",
      usage: "Used 1 time"
    },
    {
      id: "store",
      tag: "03 / STORE",
      title: "STORE",
      desc: "Moves into back of closet, taking up valuable living space.",
      icon: Archive,
      color: "from-amber-500/20 to-orange-500/5",
      product: "4-Person Camping Tent & Gear",
      price: "₹24,000",
      usage: "Stored 364 days/yr"
    },
    {
      id: "forget",
      tag: "04 / FORGET",
      title: "FORGET",
      desc: "Sits untouched for years while neighbor next door buys the exact same item.",
      icon: EyeOff,
      color: "from-purple-500/20 to-slate-500/5",
      product: "Heavy-Duty Tile Cutter & Drill",
      price: "₹14,200",
      usage: "Depreciating endlessly"
    }
  ];

  // Auto loop or scroll step trigger
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % steps.length);
    }, 3200);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative w-full h-screen max-h-screen flex flex-col justify-between items-center px-4 sm:px-6 md:px-12 lg:px-16 pt-20 pb-6 bg-[#08090B] snap-start border-t border-white/5 overflow-hidden shrink-0">
      {/* Background glow */}
      <div className="absolute top-1/3 left-1/4 w-80 lg:w-96 h-80 lg:h-96 bg-red-500/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/3 right-1/4 w-80 lg:w-96 h-80 lg:h-96 bg-[#00FF9D]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-6xl w-full h-full flex flex-col justify-between gap-4 lg:gap-6 z-10 my-auto">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center gap-2">
          <span className="px-3 py-0.5 rounded-full glass-panel text-[10px] md:text-xs font-mono-tech text-red-400 border border-red-500/20 uppercase tracking-widest">
            02 — THE CONSUMPTION PARADOX
          </span>
          <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-black font-space text-white leading-none uppercase tracking-tight">
            WE OWN TOO MUCH.<br />
            <span className="text-slate-500">WE USE TOO LITTLE.</span>
          </h2>
        </div>

        {/* Interactive Stacking Closet Visual Sequence */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-8 items-center flex-1 min-h-0">
          {/* Left: Interactive Step Selector */}
          <div className="lg:col-span-5 flex flex-col gap-2 md:gap-2.5 justify-center">
            {steps.map((step, idx) => {
              const Icon = step.icon;
              const isCurrent = activeStep === idx;
              return (
                <div
                  key={step.id}
                  onClick={() => setActiveStep(idx)}
                  className={`p-3 md:p-3.5 lg:p-4 rounded-xl cursor-pointer transition-all duration-300 flex items-start gap-3 border ${
                    isCurrent
                      ? 'glass-panel-glow border-[#00FF9D]/40 bg-[#0F1219]/90 scale-[1.01]'
                      : 'glass-panel border-white/5 opacity-60 hover:opacity-100'
                  }`}
                >
                  <div className={`p-2 lg:p-2.5 rounded-lg shrink-0 ${isCurrent ? 'bg-[#00FF9D]/20 text-[#00FF9D]' : 'bg-white/5 text-slate-400'}`}>
                    <Icon className="w-4 h-4 md:w-5 md:h-5" />
                  </div>
                  <div className="flex flex-col gap-0.5 min-w-0 flex-1">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] md:text-xs font-mono-tech text-[#00FF9D]">{step.tag}</span>
                      {isCurrent && <span className="text-[9px] font-mono shadow-sm bg-[#00FF9D]/20 text-[#00FF9D] px-1.5 py-0.2 rounded">ACTIVE</span>}
                    </div>
                    <h3 className="text-sm md:text-base font-bold font-space text-white leading-tight">{step.title}</h3>
                    <p className="text-[11px] text-slate-400 leading-tight truncate md:whitespace-normal">{step.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right: Modern Closet / Stacking Inventory Container */}
          <div className="lg:col-span-7 glass-panel rounded-2xl lg:rounded-3xl p-5 md:p-6 lg:p-7 border border-white/10 relative overflow-hidden flex flex-col justify-between h-full max-h-[44vh] lg:max-h-[48vh] min-h-0 shadow-2xl">
            {/* Header Badge */}
            <div className="w-full flex items-center justify-between text-[11px] md:text-xs font-mono-tech border-b border-white/10 pb-3">
              <div className="flex items-center gap-2 text-slate-400">
                <Layers className="w-3.5 h-3.5 text-[#00FF9D]" />
                <span className="truncate">MODERN HOME INVENTORY SIMULATION</span>
              </div>
              <span className="text-slate-500 shrink-0">UTILIZATION: 3.2%</span>
            </div>

            {/* Stacking items visual display */}
            <div className="w-full my-auto relative flex flex-col items-center justify-center py-2">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeStep}
                  initial={{ opacity: 0, scale: 0.9, y: 15 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95, y: -15 }}
                  transition={{ duration: 0.4 }}
                  className="w-full max-w-md bg-[#12151E] rounded-xl lg:rounded-2xl p-4 md:p-5 border border-white/10 flex flex-col gap-3 shadow-xl"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] md:text-xs font-mono-tech text-[#00FF9D] uppercase tracking-wider truncate">
                      {steps[activeStep].product}
                    </span>
                    <span className="text-xs md:text-sm font-mono-tech font-bold text-white shrink-0 ml-2">
                      {steps[activeStep].price}
                    </span>
                  </div>

                  {/* Visual Bar of Waste */}
                  <div className="w-full h-2.5 bg-slate-800 rounded-full overflow-hidden relative">
                    <motion.div
                      initial={{ width: "0%" }}
                      animate={{ width: activeStep === 0 ? "90%" : activeStep === 1 ? "15%" : activeStep === 2 ? "5%" : "0%" }}
                      transition={{ duration: 0.8 }}
                      className="h-full bg-gradient-to-r from-red-500 via-amber-500 to-[#00FF9D]"
                    />
                  </div>

                  <div className="flex items-center justify-between text-[11px] text-slate-400 font-mono-tech">
                    <span>STATUS: {steps[activeStep].title} STATE</span>
                    <span className="text-red-400">{steps[activeStep].usage}</span>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Stacked Ghost Cards behind */}
              <div className="w-11/12 h-8 bg-white/5 border border-white/5 rounded-xl -mt-6 -z-10 scale-95 opacity-50" />
              <div className="w-10/12 h-8 bg-white/5 border border-white/5 rounded-xl -mt-6 -z-20 scale-90 opacity-25" />
            </div>

            {/* Locked Statement */}
            <div className="w-full pt-3 border-t border-white/10 flex items-center justify-between text-[10px] md:text-xs font-mono-tech">
              <div className="flex items-center gap-1.5 text-red-400">
                <Lock className="w-3.5 h-3.5" />
                <span>INACTIVE CAPITAL TRAPPED IN HOMES</span>
              </div>
              <span className="text-slate-400 hidden sm:inline">ESTIMATED WASTED VALUE: ₹4.5L+ / STREET</span>
            </div>
          </div>
        </div>

        {/* Section Statement Climax */}
        <div className="flex flex-col items-center text-center gap-2 pt-2 border-t border-white/10">
          <div className="flex items-center gap-2 sm:gap-4 font-mono-tech text-xs sm:text-base md:text-lg font-bold tracking-widest text-[#00FF9D]">
            <span>BUY</span>
            <span>→</span>
            <span>USE</span>
            <span>→</span>
            <span>STORE</span>
            <span>→</span>
            <span className="text-red-400">FORGET</span>
          </div>
          <p className="text-xs sm:text-sm md:text-base font-light text-slate-300 max-w-2xl">
            What if the things sitting unused in our homes could become available to someone nearby?
          </p>
        </div>
      </div>
    </section>
  );
}
