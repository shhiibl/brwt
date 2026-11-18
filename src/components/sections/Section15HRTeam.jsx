import React from 'react';
import { motion } from 'framer-motion';
import { Users, Landmark, Wrench, Package, TrendingUp, AlertTriangle } from 'lucide-react';

const team = [
  { dept: 'Operations', role: 'Owner / Operations Manager', count: 1, pay: '₹20,000', monthly: '₹20,000', icon: TrendingUp },
  { dept: 'Finance', role: 'Finance Manager', count: 1, pay: '₹20,000', monthly: '₹20,000', icon: Landmark },
  { dept: 'HR & Operations', role: 'Customer Care Support Staff', count: 2, pay: '₹15,000 each', monthly: '₹30,000', icon: Users },
  { dept: 'Listings & Product', role: 'Listing Staff', count: 1, pay: '₹20,000', monthly: '₹20,000', icon: Package },
];

const orgChart = [
  { label: 'Founder / Project Lead', level: 0 },
  { label: 'Marketplace Operations & Supply', level: 1 },
  { label: 'Customer Support & Trust', level: 1 },
  { label: 'Product & Technology', level: 1 },
  { label: 'Finance & Administration', level: 1 },
  { label: 'External Marketing Firm (Contracted)', level: 1, external: true },
];

export default function Section15HRTeam() {
  return (
    <section className="relative w-full h-screen max-h-screen flex flex-col justify-between items-center px-4 sm:px-6 md:px-12 lg:px-16 pt-20 pb-6 bg-[#08090B] snap-start border-t border-white/5 overflow-hidden shrink-0">
      <div className="absolute bottom-1/4 left-1/3 w-80 h-80 bg-[#00FF9D]/4 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-6xl w-full h-full flex flex-col justify-between gap-3 lg:gap-4 z-10 my-auto">
        {/* Header */}
        <div className="flex flex-col items-center text-center gap-1.5">
          <span className="px-3 py-0.5 rounded-full glass-panel text-[10px] md:text-xs font-mono-tech text-[#00FF9D] border border-[#00FF9D]/20 uppercase tracking-widest">
            15 — HUMAN RESOURCES & TEAM
          </span>
          <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black font-space text-white leading-none uppercase tracking-tight">
            LEAN TEAM.<br />
            <span className="text-gradient-mint">BIG EXECUTION.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4 flex-1 min-h-0 max-h-[65vh]">
          {/* Org Chart */}
          <div className="glass-panel p-4 md:p-5 rounded-xl border border-white/10 flex flex-col gap-3 overflow-y-auto">
            <span className="text-[9px] font-mono-tech text-[#00FF9D] uppercase tracking-widest">Org Structure</span>
            <div className="flex flex-col gap-2">
              {orgChart.map((node) => (
                <div key={node.label} className={`flex items-center gap-2 ${node.level === 1 ? 'ml-6' : ''}`}>
                  {node.level === 1 && <span className="text-slate-600 font-mono-tech text-xs">└</span>}
                  <div className={`glass-panel px-3 py-2 rounded-lg border flex-1 text-xs font-space font-bold ${
                    node.level === 0 ? 'border-[#00FF9D]/30 text-[#00FF9D]' :
                    node.external ? 'border-dashed border-white/20 text-slate-400' :
                    'border-white/10 text-white'
                  }`}>
                    {node.label}
                    {node.external && <span className="ml-2 text-[9px] text-slate-500">outsourced</span>}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Compensation Table */}
          <div className="flex flex-col gap-3">
            <div className="glass-panel rounded-xl border border-white/10 overflow-hidden flex-1">
              <div className="grid grid-cols-3 px-4 py-2 bg-white/5 border-b border-white/10">
                <span className="text-[9px] font-mono-tech text-slate-400 uppercase tracking-widest">Role</span>
                <span className="text-[9px] font-mono-tech text-slate-400 uppercase tracking-widest text-center">Staff</span>
                <span className="text-[9px] font-mono-tech text-slate-400 uppercase tracking-widest text-right">Monthly</span>
              </div>
              {team.map((r, i) => {
                const Icon = r.icon;
                return (
                  <div key={i} className="grid grid-cols-3 px-4 py-2.5 border-b border-white/5 hover:bg-white/3 transition-colors items-center">
                    <div className="flex items-center gap-2">
                      <Icon className="w-3 h-3 text-[#00FF9D]" />
                      <span className="text-[10px] md:text-xs text-white font-medium leading-tight">{r.role}</span>
                    </div>
                    <span className="text-[10px] text-slate-400 text-center">{r.count}</span>
                    <span className="text-[10px] md:text-xs font-bold font-mono-tech text-[#00FF9D] text-right">{r.monthly}</span>
                  </div>
                );
              })}
              <div className="grid grid-cols-3 px-4 py-3 bg-[#00FF9D]/5">
                <span className="text-xs font-bold font-space text-white uppercase">Total (5 staff)</span>
                <span />
                <span className="text-sm font-black font-space text-[#00FF9D] text-right">₹90,000/mo</span>
              </div>
            </div>

            {/* HR Principles */}
            <div className="glass-panel p-3.5 rounded-xl border border-white/10">
              <span className="text-[9px] font-mono-tech text-[#00FF9D] uppercase tracking-widest block mb-2">Workforce Principles</span>
              <div className="flex flex-col gap-1">
                {[
                  'Clear role descriptions and workload estimates',
                  'No legal, payment or insurance tasks to unqualified staff',
                  'Escalation paths for fraud, damage claims and safety',
                  'Marketing fully outsourced to external branding firm',
                ].map((p) => (
                  <div key={p} className="flex items-start gap-2 text-[10px] text-slate-400">
                    <span className="text-[#00FF9D] mt-0.5">▸</span>
                    {p}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
