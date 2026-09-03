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
    <section className="relative w-full h-screen max-h-screen flex flex-col justify-between items-center px-4 sm:px-6 md:px-12 lg:px-16 pt-20 pb-6 bg-[#08090B] snap-start border-t border-white/5 overflow-hidden shrink-0">
      {/* Glow background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] lg:w-[700px] h-[600px] lg:h-[700px] bg-[#00FF9D]/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-6xl w-full h-full flex flex-col justify-between gap-4 lg:gap-6 z-10 my-auto">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center gap-2">
          <span className="px-3 py-0.5 rounded-full glass-panel text-[10px] md:text-xs font-mono-tech text-[#00FF9D] border border-[#00FF9D]/20 uppercase tracking-widest">
            03 — THE PARADIGM SHIFT
          </span>
          <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black font-space text-white leading-none uppercase tracking-tight">
            THE INVENTORY<br />
            <span className="text-gradient-mint">ALREADY EXISTS.</span>
          </h2>
          <p className="text-slate-400 text-sm md:text-lg font-light max-w-xl">
            The problem isn&apos;t a lack of products. It&apos;s a lack of access.
          </p>
        </div>

        {/* 3D Neighborhood Node Network Simulation */}
        <div className="w-full glass-panel rounded-2xl lg:rounded-3xl p-4 md:p-6 lg:p-8 border border-white/10 relative overflow-hidden flex-1 max-h-[48vh] lg:max-h-[52vh] min-h-0 flex flex-col justify-between shadow-2xl">
          {/* Top Bar control */}
          <div className="w-full flex items-center justify-between z-20 pb-2">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#00FF9D] animate-ping" />
              <span className="text-[10px] md:text-xs font-mono-tech text-slate-300 truncate">
                HYPERLOCAL NEIGHBORHOOD SIMULATION (GRID #402)
              </span>
            </div>
            <button
              onClick={() => setIsConnected(!isConnected)}
              className="pointer-events-auto px-3 py-1.5 rounded-xl glass-panel-glow text-[10px] md:text-xs font-mono-tech text-[#00FF9D] flex items-center gap-1.5 hover:bg-[#00FF9D]/20 transition-all cursor-pointer shrink-0"
            >
              <Wifi className="w-3 h-3" />
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
          <div className="relative w-full h-full z-20 my-2">
            {houses.map((house) => {
              const Icon = house.icon;
              return (
                <motion.div
                  key={house.id}
                  style={{ left: `${house.x}%`, top: `${house.y}%` }}
                  className="absolute -translate-x-1/2 -translate-y-1/2 group cursor-pointer"
                  whileHover={{ scale: 1.08 }}
                >
                  <div className={`p-2 md:p-3 rounded-xl border transition-all duration-300 flex items-center gap-2 md:gap-3 ${
                    isConnected
                      ? 'glass-panel-glow border-[#00FF9D]/60 bg-[#0F1219] shadow-[0_0_20px_rgba(0,255,157,0.3)]'
                      : 'glass-panel border-white/10 bg-[#0F1219]/80'
                  }`}>
                    <div className="w-6 h-6 md:w-7 md:h-7 rounded-lg bg-[#00FF9D]/10 flex items-center justify-center text-[#00FF9D] shrink-0">
                      <Icon className="w-3.5 h-3.5" />
                    </div>
                    <div className="flex flex-col text-left">
                      <span className="text-[9px] font-mono-tech text-slate-400">{house.label}</span>
                      <span className="text-xs font-bold font-space text-white leading-tight">{house.item}</span>
                      <span className="text-[8px] md:text-[9px] text-[#00FF9D]">{house.owner}</span>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Bottom Banner */}
          <div className="w-full flex items-center justify-between text-[10px] md:text-xs font-mono-tech z-20 border-t border-white/10 pt-3">
            <span className="text-slate-400 truncate">STATUS: {isConnected ? "CONNECTED MARKETPLACE ACTIVE" : "ISOLATED HOME INVENTORIES"}</span>
            <span className="text-[#00FF9D] shrink-0">ZERO NEW FACTORY EMISSIONS</span>
          </div>
        </div>

        {/* Ownership to Access Shift Banner */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 md:gap-6 p-3 md:p-4 rounded-xl lg:rounded-2xl glass-panel border border-white/10 text-center sm:text-left">
          <div className="flex items-center gap-3 md:gap-4">
            <span className="text-slate-500 font-mono-tech text-sm sm:text-lg md:text-xl font-bold line-through">PERMANENT OWNERSHIP</span>
            <ArrowRight className="w-4 h-4 md:w-5 md:h-5 text-[#00FF9D]" />
            <span className="text-white font-space text-base sm:text-xl md:text-2xl font-bold text-gradient-mint">HYPERLOCAL TEMPORARY ACCESS</span>
          </div>
        </div>
      </div>
    </section>
  );
}
