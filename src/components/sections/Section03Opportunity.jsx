import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Home, Drill, Camera, Tv, Tent, Flame, Wifi, ArrowRight } from 'lucide-react';

export default function Section03Opportunity() {
  const [isConnected, setIsConnected] = useState(false);

  const houses = [
    { id: 1, label: "House 01", item: "DeWalt Drill", x: 20, y: 30, icon: Drill, owner: "Rahul M. (0.2 km)" },
    { id: 2, label: "House 02", item: "Sony 4K Camera", x: 75, y: 25, icon: Camera, owner: "Priya S. (0.4 km)" },
    { id: 3, label: "House 03", item: "HD Projector", x: 45, y: 70, icon: Tv, owner: "Ankit K. (0.3 km)" },
    { id: 4, label: "House 04", item: "4P Camping Tent", x: 80, y: 75, icon: Tent, owner: "Karan P. (0.6 km)" },
    { id: 5, label: "House 05", item: "Pressure Washer", x: 15, y: 80, icon: Flame, owner: "Sneha V. (0.5 km)" }
  ];

  // Auto toggle connection lines for visual spectacle
  useEffect(() => {
    const timer = setInterval(() => {
      setIsConnected((prev) => !prev);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative w-full min-h-screen flex flex-col justify-center items-center px-6 py-20 md:px-16 bg-[#08090B] snap-start border-t border-white/5 overflow-hidden">
      {/* Glow background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[#00FF9D]/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-6xl w-full flex flex-col gap-12 z-10">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center gap-4">
          <span className="px-3 py-1 rounded-full glass-panel text-xs font-mono-tech text-[#00FF9D] border border-[#00FF9D]/20 uppercase tracking-widest">
            03 — THE PARADIGM SHIFT
          </span>
          <h2 className="text-4xl sm:text-6xl md:text-8xl font-black font-space text-white leading-none uppercase tracking-tight">
            THE INVENTORY<br />
            <span className="text-gradient-mint">ALREADY EXISTS.</span>
          </h2>
          <p className="text-slate-400 text-lg md:text-2xl font-light max-w-2xl">
            The problem isn&apos;t a lack of products. It&apos;s a lack of access.
          </p>
        </div>

        {/* 3D Neighborhood Node Network Simulation */}
        <div className="w-full glass-panel rounded-3xl p-6 md:p-10 border border-white/10 relative overflow-hidden h-[420px] md:h-[480px] flex flex-col justify-between shadow-2xl">
          {/* Top Bar control */}
          <div className="w-full flex items-center justify-between z-20">
            <div className="flex items-center gap-3">
              <span className="w-2.5 h-2.5 rounded-full bg-[#00FF9D] animate-ping" />
              <span className="text-xs font-mono-tech text-slate-300">
                HYPERLOCAL NEIGHBORHOOD SIMULATION (GRID #402)
              </span>
            </div>
            <button
              onClick={() => setIsConnected(!isConnected)}
              className="pointer-events-auto px-4 py-2 rounded-xl glass-panel-glow text-xs font-mono-tech text-[#00FF9D] flex items-center gap-2 hover:bg-[#00FF9D]/20 transition-all cursor-pointer"
            >
              <Wifi className="w-3.5 h-3.5" />
              <span>{isConnected ? "NETWORK ACTIVE (5 CONNECTIONS)" : "CONNECT INVENTORY NODE"}</span>
            </button>
          </div>

          {/* SVG Connection Lines overlay */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none z-10">
            {isConnected && (
              <>
                {/* Lines connecting nodes */}
                <motion.line initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 1 }} x1="20%" y1="30%" x2="45%" y2="70%" stroke="#00FF9D" strokeWidth="2" strokeDasharray="6 6" opacity="0.7" />
                <motion.line initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 1, delay: 0.2 }} x1="75%" y1="25%" x2="45%" y2="70%" stroke="#00FF9D" strokeWidth="2" strokeDasharray="6 6" opacity="0.7" />
                <motion.line initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 1, delay: 0.4 }} x1="80%" y1="75%" x2="45%" y2="70%" stroke="#00FF9D" strokeWidth="2" strokeDasharray="6 6" opacity="0.7" />
                <motion.line initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 1, delay: 0.6 }} x1="15%" y1="80%" x2="45%" y2="70%" stroke="#00FF9D" strokeWidth="2" strokeDasharray="6 6" opacity="0.7" />
                <motion.line initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 1, delay: 0.8 }} x1="20%" y1="30%" x2="15%" y2="80%" stroke="#38BDF8" strokeWidth="1.5" strokeDasharray="4 4" opacity="0.5" />
              </>
            )}
          </svg>

          {/* House Node Badges */}
          <div className="relative w-full h-full z-20 my-4">
            {houses.map((house) => {
              const Icon = house.icon;
              return (
                <motion.div
                  key={house.id}
                  style={{ left: `${house.x}%`, top: `${house.y}%` }}
                  className="absolute -translate-x-1/2 -translate-y-1/2 group cursor-pointer"
                  whileHover={{ scale: 1.1 }}
                >
                  <div className={`p-3 md:p-4 rounded-2xl border transition-all duration-500 flex items-center gap-3 ${
                    isConnected
                      ? 'glass-panel-glow border-[#00FF9D]/60 bg-[#0F1219] shadow-[0_0_20px_rgba(0,255,157,0.3)]'
                      : 'glass-panel border-white/10 bg-[#0F1219]/80'
                  }`}>
                    <div className="w-8 h-8 rounded-lg bg-[#00FF9D]/10 flex items-center justify-center text-[#00FF9D]">
                      <Icon className="w-4 h-4" />
                    </div>
                    <div className="flex flex-col text-left">
                      <span className="text-[10px] font-mono-tech text-slate-400">{house.label}</span>
                      <span className="text-xs font-bold font-space text-white">{house.item}</span>
                      <span className="text-[9px] text-[#00FF9D]">{house.owner}</span>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Bottom Banner */}
          <div className="w-full flex items-center justify-between text-xs font-mono-tech z-20 border-t border-white/10 pt-4">
            <span className="text-slate-400">STATUS: {isConnected ? "CONNECTED MARKETPLACE ACTIVE" : "ISOLATED HOME INVENTORIES"}</span>
            <span className="text-[#00FF9D]">ZERO NEW FACTORY EMISSIONS NEEDED</span>
          </div>
        </div>

        {/* Ownership to Access Shift Banner */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 p-6 rounded-2xl glass-panel border border-white/10 text-center sm:text-left">
          <div className="flex items-center gap-4">
            <span className="text-slate-500 font-mono-tech text-xl font-bold line-through">PERMANENT OWNERSHIP</span>
            <ArrowRight className="w-6 h-6 text-[#00FF9D]" />
            <span className="text-white font-space text-2xl font-bold text-gradient-mint">HYPERLOCAL TEMPORARY ACCESS</span>
          </div>
        </div>
      </div>
    </section>
  );
}
