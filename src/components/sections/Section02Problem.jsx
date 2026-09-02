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
    <section className="relative w-full min-h-screen flex flex-col justify-center items-center px-6 py-20 md:px-16 bg-[#08090B] snap-start border-t border-white/5 overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-red-500/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-[#00FF9D]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-6xl w-full flex flex-col gap-12 z-10">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center gap-4">
          <span className="px-3 py-1 rounded-full glass-panel text-xs font-mono-tech text-red-400 border border-red-500/20 uppercase tracking-widest">
            02 — THE CONSUMPTION PARADOX
          </span>
          <h2 className="text-4xl sm:text-6xl md:text-7xl font-black font-space text-white leading-none uppercase tracking-tight">
            WE OWN TOO MUCH.<br />
            <span className="text-slate-500">WE USE TOO LITTLE.</span>
          </h2>
        </div>

        {/* Interactive Stacking Closet Visual Sequence */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left: Interactive Step Selector */}
          <div className="lg:col-span-5 flex flex-col gap-3">
            {steps.map((step, idx) => {
              const Icon = step.icon;
              const isCurrent = activeStep === idx;
              return (
                <div
                  key={step.id}
                  onClick={() => setActiveStep(idx)}
                  className={`p-5 rounded-2xl cursor-pointer transition-all duration-500 flex items-start gap-4 border ${
                    isCurrent
                      ? 'glass-panel-glow border-[#00FF9D]/40 bg-[#0F1219]/90 scale-[1.02]'
                      : 'glass-panel border-white/5 opacity-60 hover:opacity-100'
                  }`}
                >
                  <div className={`p-3 rounded-xl ${isCurrent ? 'bg-[#00FF9D]/20 text-[#00FF9D]' : 'bg-white/5 text-slate-400'}`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <div className="flex flex-col gap-1">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-mono-tech text-[#00FF9D]">{step.tag}</span>
                      {isCurrent && <span className="text-[10px] font-mono shadow-sm bg-[#00FF9D]/20 text-[#00FF9D] px-2 py-0.5 rounded">ACTIVE STATE</span>}
                    </div>
                    <h3 className="text-xl font-bold font-space text-white">{step.title}</h3>
                    <p className="text-xs text-slate-400 leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right: Modern Closet / Stacking Inventory Container */}
          <div className="lg:col-span-7 glass-panel rounded-3xl p-8 border border-white/10 relative overflow-hidden flex flex-col items-center justify-between min-h-[420px] shadow-2xl">
            {/* Header Badge */}
            <div className="w-full flex items-center justify-between text-xs font-mono-tech border-b border-white/10 pb-4">
              <div className="flex items-center gap-2 text-slate-400">
                <Layers className="w-4 h-4 text-[#00FF9D]" />
                <span>MODERN HOME INVENTORY SIMULATION</span>
              </div>
              <span className="text-slate-500">UTILIZATION: 3.2%</span>
            </div>

            {/* Stacking items visual display */}
            <div className="w-full my-8 relative flex flex-col items-center justify-center">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeStep}
                  initial={{ opacity: 0, scale: 0.9, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95, y: -20 }}
                  transition={{ duration: 0.5 }}
                  className="w-full max-w-md bg-[#12151E] rounded-2xl p-6 border border-white/10 flex flex-col gap-4 shadow-xl"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono-tech text-[#00FF9D] uppercase tracking-wider">
                      {steps[activeStep].product}
                    </span>
                    <span className="text-sm font-mono-tech font-bold text-white">
                      {steps[activeStep].price}
                    </span>
                  </div>

                  {/* Visual Bar of Waste */}
                  <div className="w-full h-3 bg-slate-800 rounded-full overflow-hidden relative">
                    <motion.div
                      initial={{ width: "0%" }}
                      animate={{ width: activeStep === 0 ? "90%" : activeStep === 1 ? "15%" : activeStep === 2 ? "5%" : "0%" }}
                      transition={{ duration: 1 }}
                      className="h-full bg-gradient-to-r from-red-500 via-amber-500 to-[#00FF9D]"
                    />
                  </div>

                  <div className="flex items-center justify-between text-xs text-slate-400 font-mono-tech">
                    <span>STATUS: {steps[activeStep].title} STATE</span>
                    <span className="text-red-400">{steps[activeStep].usage}</span>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Stacked Ghost Cards behind */}
              <div className="w-11/12 h-12 bg-white/5 border border-white/5 rounded-2xl -mt-8 -z-10 scale-95 opacity-50" />
              <div className="w-10/12 h-12 bg-white/5 border border-white/5 rounded-2xl -mt-8 -z-20 scale-90 opacity-25" />
            </div>

            {/* Locked Statement */}
            <div className="w-full pt-4 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
              <div className="flex items-center gap-2 text-red-400 text-xs font-mono-tech">
                <Lock className="w-4 h-4" />
                <span>INACTIVE CAPITAL TRAPPED IN HOMES</span>
              </div>
              <span className="text-xs font-space text-slate-400">ESTIMATED LOCAL WASTED VALUE: ₹4,50,000+ PER STREET</span>
            </div>
          </div>
        </div>

        {/* Section Statement Climax */}
        <div className="flex flex-col items-center text-center gap-4 pt-4 border-t border-white/10">
          <div className="flex items-center gap-2 sm:gap-6 font-mono-tech text-lg sm:text-2xl font-bold tracking-widest text-[#00FF9D]">
            <span>BUY</span>
            <span>→</span>
            <span>USE</span>
            <span>→</span>
            <span>STORE</span>
            <span>→</span>
            <span className="text-red-400">FORGET</span>
          </div>
          <p className="text-xl md:text-2xl font-light text-slate-300 max-w-3xl">
            What if the things sitting unused in our homes could become available to someone nearby?
          </p>
        </div>
      </div>
    </section>
  );
}
