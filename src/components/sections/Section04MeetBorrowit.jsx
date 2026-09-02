import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, ShieldCheck, Star, Clock, CheckCircle2, ChevronRight, Sparkles } from 'lucide-react';

export default function Section04MeetBorrowit() {
  const [appState, setAppState] = useState('AVAILABLE'); // AVAILABLE | REQUEST | BORROWED
  const [selectedProduct, setSelectedProduct] = useState(0);

  const products = [
    { title: "Bosch Professional Drill", price: "₹250", period: "/ day", dist: "0.4 km", rating: 4.9, uses: 17, owner: "Vikram S." },
    { title: "Sony FX30 Cinema Camera", price: "₹900", period: "/ day", dist: "0.8 km", rating: 5.0, uses: 24, owner: "Ananya R." },
    { title: "Epson 4K Laser Projector", price: "₹400", period: "/ day", dist: "1.2 km", rating: 4.8, uses: 12, owner: "Rohan G." },
    { title: "Quechua 4P Waterproof Tent", price: "₹350", period: "/ day", dist: "1.5 km", rating: 4.9, uses: 8, owner: "Meera K." }
  ];

  return (
    <section className="relative w-full min-h-screen flex flex-col justify-center items-center px-6 py-20 md:px-16 bg-[#08090B] snap-start border-t border-white/5 overflow-hidden">
      {/* Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#00FF9D]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-6xl w-full flex flex-col gap-12 z-10 items-center">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center gap-4">
          <span className="px-3 py-1 rounded-full glass-panel text-xs font-mono-tech text-[#00FF9D] border border-[#00FF9D]/20 uppercase tracking-widest">
            04 — THE PLATFORM
          </span>
          <h2 className="text-4xl sm:text-6xl md:text-8xl font-black font-space text-white leading-none uppercase tracking-tight">
            MEET <span className="text-gradient-mint">BORROWIT</span>
          </h2>
          <p className="text-slate-400 text-lg md:text-xl font-light max-w-xl">
            A seamless hyperlocal interface connecting verified owners with neighborhood borrowers in real time.
          </p>
        </div>

        {/* Smartphone Mockup & Map Backdrop */}
        <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Controls */}
          <div className="lg:col-span-4 flex flex-col gap-4">
            <div className="glass-panel p-6 rounded-2xl border border-white/10 flex flex-col gap-4">
              <span className="text-xs font-mono-tech text-[#00FF9D] uppercase tracking-wider">APP INTERACTION DEMO</span>
              <h3 className="text-2xl font-bold font-space text-white">Hyperlocal Mobile Workflow</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Click below to simulate real-time borrower booking transitions on the BORROWIT mobile application.
              </p>

              <div className="flex flex-col gap-2 mt-2">
                <button
                  onClick={() => setAppState('AVAILABLE')}
                  className={`w-full py-3 px-4 rounded-xl text-xs font-mono-tech flex items-center justify-between border transition-all ${
                    appState === 'AVAILABLE'
                      ? 'bg-[#00FF9D]/20 border-[#00FF9D] text-white font-bold'
                      : 'glass-panel border-white/10 text-slate-400 hover:text-white'
                  }`}
                >
                  <span>01. DISCOVER NEARBY</span>
                  <span className="text-[10px] text-[#00FF9D]">AVAILABLE</span>
                </button>

                <button
                  onClick={() => setAppState('REQUEST')}
                  className={`w-full py-3 px-4 rounded-xl text-xs font-mono-tech flex items-center justify-between border transition-all ${
                    appState === 'REQUEST'
                      ? 'bg-[#38BDF8]/20 border-[#38BDF8] text-white font-bold'
                      : 'glass-panel border-white/10 text-slate-400 hover:text-white'
                  }`}
                >
                  <span>02. INSTANT REQUEST</span>
                  <span className="text-[10px] text-[#38BDF8]">REQUEST</span>
                </button>

                <button
                  onClick={() => setAppState('BORROWED')}
                  className={`w-full py-3 px-4 rounded-xl text-xs font-mono-tech flex items-center justify-between border transition-all ${
                    appState === 'BORROWED'
                      ? 'bg-[#00FF9D]/30 border-[#00FF9D] text-white font-bold shadow-[0_0_15px_rgba(0,255,157,0.3)]'
                      : 'glass-panel border-white/10 text-slate-400 hover:text-white'
                  }`}
                >
                  <span>03. VERIFIED LOCK IN</span>
                  <span className="text-[10px] text-[#00FF9D]">BORROWED</span>
                </button>
              </div>
            </div>
          </div>

          {/* Right Smartphone Screen Mockup */}
          <div className="lg:col-span-8 flex justify-center relative">
            {/* Map Grid Backdrop Behind Phone */}
            <div className="absolute inset-0 bg-grid-pattern opacity-30 rounded-3xl -z-10" />

            {/* Phone Frame */}
            <div className="w-[310px] sm:w-[340px] h-[640px] rounded-[48px] p-4 bg-[#0F1219] border-[6px] border-slate-800 shadow-[0_0_60px_rgba(0,0,0,0.8)] relative flex flex-col justify-between overflow-hidden">
              {/* Phone Dynamic Island Notch */}
              <div className="w-28 h-5 bg-black rounded-full mx-auto z-30 mb-2 flex items-center justify-center">
                <div className="w-2 h-2 rounded-full bg-slate-800" />
              </div>

              {/* Mobile App Header */}
              <div className="flex items-center justify-between px-3 py-2 border-b border-white/10 z-20">
                <div className="flex items-center gap-2">
                  <span className="font-space font-extrabold text-sm text-white">BORROWIT</span>
                  <span className="px-1.5 py-0.5 rounded bg-[#00FF9D]/20 text-[9px] font-mono-tech text-[#00FF9D]">v2.4</span>
                </div>
                <div className="flex items-center gap-1 text-[10px] font-mono-tech text-slate-400">
                  <MapPin className="w-3 h-3 text-[#00FF9D]" />
                  <span>Koramangala, 560034</span>
                </div>
              </div>

              {/* Dynamic App Interface Content */}
              <div className="flex-1 my-2 overflow-y-auto px-1 flex flex-col gap-3">
                <div className="text-[11px] font-mono-tech text-slate-400 tracking-wider uppercase px-2">
                  Hyperlocal Nearby (Within 2km)
                </div>

                <AnimatePresence mode="wait">
                  {appState === 'AVAILABLE' && (
                    <motion.div key="available" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="flex flex-col gap-2.5">
                      {products.map((item, idx) => (
                        <div
                          key={idx}
                          onClick={() => setSelectedProduct(idx)}
                          className={`p-3 rounded-2xl border transition-all cursor-pointer ${
                            selectedProduct === idx
                              ? 'bg-[#181D2A] border-[#00FF9D]/40 text-white'
                              : 'bg-[#12151F] border-white/5 text-slate-300 hover:bg-[#181D2A]/60'
                          }`}
                        >
                          <div className="flex items-center justify-between">
                            <span className="font-space font-bold text-xs">{item.title}</span>
                            <span className="font-mono-tech text-xs font-bold text-[#00FF9D]">{item.price}<span className="text-[9px] text-slate-400">{item.period}</span></span>
                          </div>
                          <div className="flex items-center justify-between text-[10px] text-slate-400 mt-2">
                            <span className="flex items-center gap-1"><MapPin className="w-3 h-3 text-[#38BDF8]" />{item.dist}</span>
                            <span className="flex items-center gap-1"><Star className="w-3 h-3 text-amber-400 fill-amber-400" />{item.rating} ({item.uses} borrows)</span>
                          </div>
                        </div>
                      ))}
                    </motion.div>
                  )}

                  {appState === 'REQUEST' && (
                    <motion.div key="request" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} className="p-4 rounded-2xl bg-[#141824] border border-[#38BDF8]/40 flex flex-col gap-4">
                      <div className="flex items-center justify-between">
                        <span className="px-2 py-0.5 rounded bg-[#38BDF8]/20 text-[#38BDF8] text-[9px] font-mono-tech font-bold">VERIFYING CONDITION</span>
                        <span className="text-xs font-mono-tech text-slate-400">EST. PICKUP: 15 MINS</span>
                      </div>
                      <div className="flex flex-col gap-1">
                        <h4 className="font-space font-bold text-sm text-white">{products[selectedProduct].title}</h4>
                        <span className="text-xs text-slate-400 font-mono-tech">Owner: {products[selectedProduct].owner}</span>
                      </div>
                      <div className="p-3 rounded-xl bg-black/40 border border-white/10 flex justify-between text-xs font-mono-tech">
                        <span className="text-slate-400">Daily Rate + Deposit</span>
                        <span className="text-white font-bold">{products[selectedProduct].price} + ₹500</span>
                      </div>
                      <button onClick={() => setAppState('BORROWED')} className="w-full py-2.5 rounded-xl bg-[#38BDF8] text-black font-space font-bold text-xs hover:bg-[#38BDF8]/90 transition-colors">
                        CONFIRM & LOCK IN
                      </button>
                    </motion.div>
                  )}

                  {appState === 'BORROWED' && (
                    <motion.div key="borrowed" initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }} className="p-5 rounded-2xl bg-[#0F201A] border border-[#00FF9D]/50 flex flex-col items-center text-center gap-3">
                      <div className="w-12 h-12 rounded-full bg-[#00FF9D]/20 flex items-center justify-center text-[#00FF9D]">
                        <CheckCircle2 className="w-7 h-7" />
                      </div>
                      <span className="text-xs font-mono-tech text-[#00FF9D] font-bold tracking-wider">BORROWED ACTIVE</span>
                      <h4 className="font-space font-bold text-sm text-white">{products[selectedProduct].title}</h4>
                      <p className="text-[10px] text-slate-300 font-mono-tech">
                        Digital Condition Passport Locker Unlocked. Return due in 24 hours.
                      </p>
                      <div className="w-full p-2.5 rounded-xl bg-black/50 text-[10px] font-mono-tech text-[#00FF9D] border border-[#00FF9D]/30">
                        GPS VERIFIED LOCKER ACCESS CODE: #8492
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Bottom Phone Bar */}
              <div className="w-full pt-2 border-t border-white/10 flex items-center justify-between text-[9px] font-mono-tech text-slate-400 px-2">
                <span>STATUS: {appState}</span>
                <span className="text-[#00FF9D]">BORROW SCORE: 96</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
