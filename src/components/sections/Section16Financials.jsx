import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, TrendingDown, Wallet, PieChart } from 'lucide-react';

const transactions = [
  { date: 'Nov 1', desc: 'Owner capital invested', debit: null, credit: 2000000, running: 2000000 },
  { date: 'Nov 2', desc: 'Registration & legal services', debit: 15000, credit: null, running: 1985000 },
  { date: 'Nov 5', desc: 'App & website development', debit: 800000, credit: null, running: 1185000 },
  { date: 'Nov 6', desc: 'Office room rent (1 month)', debit: 18000, credit: null, running: 1167000 },
  { date: 'Nov 7', desc: 'Office furniture', debit: 40000, credit: null, running: 1127000 },
  { date: 'Nov 8', desc: '3 Laptops (₹35,000 each)', debit: 105000, credit: null, running: 1022000 },
  { date: 'Nov 9', desc: 'Office electronics (printer, router, UPS)', debit: 45000, credit: null, running: 977000 },
  { date: 'Nov 25', desc: 'Platform fee income received (UPI)', debit: null, credit: 50000, running: 1027000 },
  { date: 'Nov 25', desc: 'Payment gateway charges (2% + 18% GST)', debit: 1180, credit: null, running: 1025820 },
  { date: 'Nov 26', desc: 'Office supplies', debit: 12000, credit: null, running: 1013820 },
  { date: 'Nov 27', desc: 'Branding & digital marketing', debit: 150000, credit: null, running: 863820 },
  { date: 'Nov 30', desc: 'Monthly salaries (5 staff)', debit: 90000, credit: null, running: 773820 },
  { date: 'Nov 30', desc: 'Electricity & internet', debit: 8000, credit: null, running: 765820 },
  { date: 'Nov 30', desc: 'Cleaning & office maintenance', debit: 8000, credit: null, running: 757820 },
];

const summary = [
  { label: 'Capital Invested', value: '₹20,00,000', icon: Wallet, color: '#00FF9D' },
  { label: 'Platform Income', value: '₹50,000', icon: TrendingUp, color: '#00FF9D' },
  { label: 'Gross Profit', value: '₹48,820', icon: PieChart, color: '#00FF9D' },
  { label: 'Net Loss (Nov)', value: '−₹2,44,180', icon: TrendingDown, color: '#FF6B6B' },
];

export default function Section16Financials() {
  const [view, setView] = useState('transactions');

  const assets = [
    { label: 'Cash', value: 717000 },
    { label: 'Bank', value: 48820 },
    { label: 'Software Development', value: 800000 },
    { label: 'Furniture', value: 40000 },
    { label: 'Computer Equipment', value: 105000 },
    { label: 'Office Electronics', value: 45000 },
  ];
  const totalAssets = assets.reduce((a, b) => a + b.value, 0);

  return (
    <section className="relative w-full h-screen max-h-screen flex flex-col justify-between items-center px-4 sm:px-6 md:px-12 lg:px-16 pt-20 pb-6 bg-[#08090B] snap-start border-t border-white/5 overflow-hidden shrink-0">
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-[#00FF9D]/4 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-6xl w-full h-full flex flex-col justify-between gap-3 lg:gap-4 z-10 my-auto">
        {/* Header */}
        <div className="flex flex-col items-center text-center gap-1.5">
          <span className="px-3 py-0.5 rounded-full glass-panel text-[10px] md:text-xs font-mono-tech text-[#00FF9D] border border-[#00FF9D]/20 uppercase tracking-widest">
            16 — FINANCIAL MANAGEMENT
          </span>
          <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black font-space text-white leading-none uppercase tracking-tight">
            NOVEMBER<br />
            <span className="text-gradient-mint">FINANCIALS</span>
          </h2>
        </div>

        {/* Summary Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-3">
          {summary.map(({ label, value, icon: Icon, color }) => (
            <div key={label} className="glass-panel p-3 md:p-4 rounded-xl border border-white/10 hover:border-[#00FF9D]/30 transition-all flex flex-col gap-1.5">
              <div className="flex items-center justify-between">
                <span className="text-[9px] font-mono-tech text-slate-400 uppercase tracking-widest">{label}</span>
                <Icon className="w-3.5 h-3.5" style={{ color }} />
              </div>
              <span className="text-sm md:text-lg font-black font-space" style={{ color }}>{value}</span>
            </div>
          ))}
        </div>

        {/* View Toggle */}
        <div className="flex gap-2 justify-center">
          {['transactions', 'balance'].map((v) => (
            <button
              key={v}
              onClick={() => setView(v)}
              className={`px-4 py-1.5 rounded-full text-xs font-mono-tech font-bold uppercase tracking-widest transition-all border ${
                view === v ? 'border-[#00FF9D]/60 bg-[#00FF9D]/15 text-[#00FF9D]' : 'glass-panel border-white/10 text-slate-400 hover:text-white'
              }`}
            >
              {v === 'transactions' ? 'Transaction Log' : 'Balance Sheet'}
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="glass-panel rounded-xl border border-white/10 overflow-hidden flex-1 min-h-0 max-h-[42vh] overflow-y-auto">
          {view === 'transactions' ? (
            <>
              <div className="grid grid-cols-4 px-4 py-2 bg-white/5 border-b border-white/10 sticky top-0">
                <span className="text-[9px] font-mono-tech text-slate-400 uppercase tracking-widest">Date</span>
                <span className="text-[9px] font-mono-tech text-slate-400 uppercase tracking-widest col-span-2">Description</span>
                <span className="text-[9px] font-mono-tech text-slate-400 uppercase tracking-widest text-right">Amount (₹)</span>
              </div>
              {transactions.map((t, i) => (
                <div key={i} className="grid grid-cols-4 px-4 py-2 border-b border-white/5 hover:bg-white/3 transition-colors items-center">
                  <span className="text-[9px] md:text-[10px] font-mono-tech text-slate-500">{t.date}</span>
                  <span className="text-[10px] md:text-xs text-slate-300 col-span-2 leading-tight">{t.desc}</span>
                  <span className={`text-[10px] md:text-xs font-bold font-mono-tech text-right ${t.credit ? 'text-[#00FF9D]' : 'text-red-400'}`}>
                    {t.credit ? `+${t.credit.toLocaleString('en-IN')}` : `-${t.debit.toLocaleString('en-IN')}`}
                  </span>
                </div>
              ))}
            </>
          ) : (
            <div className="p-4 md:p-5 flex flex-col gap-3">
              <div className="flex flex-col gap-2">
                <span className="text-[10px] font-mono-tech text-[#00FF9D] uppercase tracking-widest">Assets</span>
                {assets.map(({ label, value }) => (
                  <div key={label} className="flex items-center gap-2">
                    <div className="flex-1 flex justify-between items-center">
                      <span className="text-xs text-slate-300">{label}</span>
                      <span className="text-xs font-bold font-mono-tech text-white">₹{value.toLocaleString('en-IN')}</span>
                    </div>
                    <div className="w-24 md:w-32 h-1 rounded-full bg-white/5 overflow-hidden">
                      <div className="h-full bg-[#00FF9D] rounded-full" style={{ width: `${(value / totalAssets) * 100}%` }} />
                    </div>
                  </div>
                ))}
                <div className="flex justify-between pt-2 border-t border-white/10">
                  <span className="text-sm font-bold font-space text-white">TOTAL ASSETS</span>
                  <span className="text-sm font-black font-space text-[#00FF9D]">₹{totalAssets.toLocaleString('en-IN')}</span>
                </div>
              </div>
              <div className="flex flex-col gap-1 pt-2 border-t border-white/10">
                <span className="text-[10px] font-mono-tech text-[#00FF9D] uppercase tracking-widest">Equity</span>
                <div className="flex justify-between">
                  <span className="text-xs text-slate-300">Capital Introduced</span>
                  <span className="text-xs font-bold text-white">₹20,00,000</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-xs text-slate-300">Less: Net Loss</span>
                  <span className="text-xs font-bold text-red-400">−₹2,44,180</span>
                </div>
                <div className="flex justify-between pt-1 border-t border-white/10">
                  <span className="text-sm font-bold font-space text-white">CLOSING EQUITY</span>
                  <span className="text-sm font-black font-space text-[#00FF9D]">₹17,55,820</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-xs text-slate-300">Total Liabilities</span>
                  <span className="text-xs font-bold text-white">₹0</span>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
