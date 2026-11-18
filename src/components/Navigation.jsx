import React from 'react';

const sectionTitles = [
  "Hero",
  "The Problem",
  "The Opportunity",
  "Meet BORROWIT",
  "How It Works",
  "The USP",
  "Business Model",
  "Founder Economics",
  "Scale & Network",
  "Final Vision",
  "Marketing Philosophy",
  "Segmentation & STP",
  "AI Product Passport",
  "Pricing Strategy",
  "HR & Team",
  "Platform Prototype",
  "Revenue Generator",
  "Booking Workflow",
  "QC Checklists",
  "Promotion Channels",
  "Performance KPIs",
  "12-Month Roadmap",
  "Pilot Budget",
  "Case Studies",
  "Conclusion",
];

export default function Navigation({ activeSection, totalSections, scrollToSection }) {
  const formattedActive = String(activeSection).padStart(2, '0');
  const formattedTotal  = String(totalSections).padStart(2, '0');

  return (
    <>
      {/* Top Header */}
      <header className="fixed top-0 left-0 right-0 z-50 px-6 py-5 md:px-12 flex items-center justify-between pointer-events-none">
        <div className="pointer-events-auto flex items-center gap-3 group cursor-pointer" onClick={() => scrollToSection(1)}>
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-white via-slate-200 to-[#00FF9D]/30 p-[1px] shadow-lg shadow-[#00FF9D]/10">
            <div className="w-full h-full bg-[#08090B] rounded-[7px] flex items-center justify-center group-hover:bg-[#08090B]/80 transition-colors">
              <span className="font-space font-bold text-sm text-[#00FF9D]">B</span>
            </div>
          </div>
          <div className="flex flex-col">
            <span className="font-space font-bold text-lg tracking-wider text-white group-hover:text-[#00FF9D] transition-colors">BORROWIT</span>
            <span className="text-[10px] text-slate-400 tracking-widest font-mono-tech uppercase hidden sm:block">HYPERLOCAL P2P</span>
          </div>
        </div>

        <div className="pointer-events-auto flex items-center gap-5">
          <div className="hidden lg:flex items-center gap-2 px-3 py-1.5 rounded-full glass-panel text-xs font-mono-tech text-slate-300">
            <span className="w-2 h-2 rounded-full bg-[#00FF9D] animate-ping" />
            <span>BIP PITCH DECK · NOV 2026</span>
          </div>
          <div className="flex items-center gap-2 font-mono-tech text-sm tracking-wider glass-panel px-4 py-2 rounded-full border border-white/10 text-white shadow-xl">
            <span className="text-[#00FF9D] font-bold">{formattedActive}</span>
            <span className="text-slate-600">/</span>
            <span className="text-slate-400">{formattedTotal}</span>
          </div>
        </div>
      </header>

      {/* Right Dot Nav */}
      <nav className="fixed right-5 top-1/2 -translate-y-1/2 z-40 hidden md:flex flex-col items-center gap-2">
        <div className="w-[1px] h-20 bg-white/8 relative">
          <div
            className="w-full bg-[#00FF9D] transition-all duration-500 shadow-[0_0_6px_#00FF9D]"
            style={{ height: `${((activeSection - 1) / (totalSections - 1)) * 100}%` }}
          />
        </div>

        <div className="flex flex-col gap-1 my-1">
          {Array.from({ length: totalSections }).map((_, idx) => {
            const n = idx + 1;
            const isActive = activeSection === n;
            return (
              <button
                key={n}
                onClick={() => scrollToSection(n)}
                className="group relative flex items-center justify-end px-1 py-0.5 focus:outline-none"
                title={`${String(n).padStart(2,'0')}. ${sectionTitles[idx]}`}
              >
                <span className="absolute right-6 px-2 py-1 rounded bg-[#0F1219] border border-white/10 text-[10px] font-mono-tech text-slate-300 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none shadow-lg">
                  {String(n).padStart(2,'0')}. {sectionTitles[idx]}
                </span>
                <span className={`block rounded-full transition-all duration-300 ${
                  isActive
                    ? 'w-2 h-2 bg-[#00FF9D] shadow-[0_0_10px_#00FF9D]'
                    : 'w-1 h-1 bg-slate-700 group-hover:bg-slate-400'
                }`} />
              </button>
            );
          })}
        </div>

        <div className="w-[1px] h-20 bg-white/8" />
      </nav>
    </>
  );
}
