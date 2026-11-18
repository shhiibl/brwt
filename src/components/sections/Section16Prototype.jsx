import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Search, MapPin, Calendar, Camera, Wrench, Presentation, ChevronRight,
  Star, Shield, Package, X, Check, ArrowLeft, CreditCard, Clock
} from 'lucide-react';

const categories = ['All', 'Cameras', 'Power Tools', 'Projectors'];

const products = [
  {
    id: 1, cat: 'Cameras', name: 'Canon EOS R6 Mark II',
    spec: 'Full-Frame Mirrorless · 40fps · 4K120p',
    price: 1800, deposit: 8000, provider: 'Rahul Studios', rating: 4.9, reviews: 38,
    location: 'Calicut', available: true, badge: 'Top Pick',
    tags: ['Body Only', 'Charger Included', 'Bag Available'],
  },
  {
    id: 2, cat: 'Cameras', name: 'Sony A7 IV + 24-70mm',
    spec: '33MP · IBIS · Eye-AF · Kit Lens',
    price: 2200, deposit: 10000, provider: 'Lens Lab', rating: 4.8, reviews: 61,
    location: 'Calicut', available: true, badge: null,
    tags: ['Kit Lens', '2 Batteries', 'SD Card'],
  },
  {
    id: 3, cat: 'Projectors', name: 'Epson EH-TW750 4K',
    spec: '3400 Lumens · 4K Enhancement · HDMI',
    price: 900, deposit: 5000, provider: 'EventPro', rating: 4.7, reviews: 24,
    location: 'Calicut', available: true, badge: null,
    tags: ['Screen Available', 'Remote', 'HDMI Cable'],
  },
  {
    id: 4, cat: 'Power Tools', name: 'Bosch GSB 18V-55 Combi',
    spec: '18V · Brushless · 55Nm Torque',
    price: 500, deposit: 3000, provider: 'ToolHouse', rating: 4.6, reviews: 19,
    location: 'Kozhikode', available: true, badge: null,
    tags: ['2 Batteries', 'Charger', 'Case'],
  },
  {
    id: 5, cat: 'Cameras', name: 'DJI RS 4 Gimbal',
    spec: '3-Axis · 3kg Payload · OLED Screen',
    price: 700, deposit: 4000, provider: 'Rahul Studios', rating: 4.8, reviews: 15,
    location: 'Calicut', available: false, badge: null,
    tags: ['Phone Mount', 'Extension Rod'],
  },
  {
    id: 6, cat: 'Power Tools', name: 'Dewalt DCS391 Circular Saw',
    spec: '18V · 165mm Blade · 55° Bevel',
    price: 450, deposit: 2500, provider: 'ToolHouse', rating: 4.5, reviews: 11,
    location: 'Kozhikode', available: true, badge: null,
    tags: ['Blade Included', 'Safety Guard'],
  },
];

const locationOptions = ['Calicut', 'Kozhikode', 'Malappuram', 'Any Location'];

const dateSlots = ['Nov 20', 'Nov 21', 'Nov 22', 'Nov 23', 'Nov 24', 'Nov 25', 'Nov 26', 'Nov 27'];

export default function Section16Prototype() {
  const [query, setQuery] = useState('');
  const [cat, setCat] = useState('All');
  const [location, setLocation] = useState('Any Location');
  const [view, setView] = useState('search'); // search | detail | checkout | confirm
  const [selected, setSelected] = useState(null);
  const [pickDate, setPickDate] = useState(null);
  const [days, setDays] = useState(2);

  const filtered = products.filter(p => {
    const matchCat = cat === 'All' || p.cat === cat;
    const matchLoc = location === 'Any Location' || p.location === location;
    const matchQ = !query || p.name.toLowerCase().includes(query.toLowerCase()) || p.spec.toLowerCase().includes(query.toLowerCase());
    return matchCat && matchLoc && matchQ;
  });

  const commission = selected ? Math.round(selected.price * days * 0.15) : 0;
  const total = selected ? selected.price * days + commission + selected.deposit : 0;

  const reset = () => { setView('search'); setSelected(null); setPickDate(null); setDays(2); };

  return (
    <section className="relative w-full h-screen max-h-screen flex flex-col items-center px-0 pt-20 pb-0 bg-[#08090B] snap-start border-t border-white/5 overflow-hidden shrink-0">
      {/* BG glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[500px] h-[400px] bg-[#00FF9D]/4 rounded-full blur-[160px] pointer-events-none" />

      {/* Section Label */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 z-20">
        <span className="px-3 py-0.5 rounded-full glass-panel text-[10px] font-mono-tech text-[#00FF9D] border border-[#00FF9D]/20 uppercase tracking-widest">
          16 — LIVE PLATFORM PROTOTYPE
        </span>
      </div>

      {/* Phone + Desktop Frame */}
      <div className="relative z-10 w-full h-full flex items-center justify-center px-4">
        <div className="w-full max-w-5xl h-[78vh] glass-panel border border-white/15 rounded-2xl overflow-hidden flex flex-col shadow-2xl shadow-black/60">

          {/* App Top Bar */}
          <div className="flex items-center justify-between px-4 py-3 border-b border-white/10 bg-[#0A0C10] shrink-0">
            <div className="flex items-center gap-2">
              {(view === 'detail' || view === 'checkout' || view === 'confirm') && (
                <button onClick={view === 'checkout' ? () => setView('detail') : view === 'detail' ? reset : reset}
                  className="w-7 h-7 rounded-lg bg-white/5 flex items-center justify-center hover:bg-white/10 transition-colors">
                  <ArrowLeft className="w-3.5 h-3.5 text-slate-300" />
                </button>
              )}
              <span className="font-space font-bold text-sm text-[#00FF9D]">BORROWIT</span>
              {view === 'search' && <span className="text-[9px] font-mono-tech text-slate-500 ml-1">PROTOTYPE</span>}
            </div>
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-full bg-[#00FF9D]/20 flex items-center justify-center">
                <span className="text-[9px] font-bold text-[#00FF9D]">MP</span>
              </div>
            </div>
          </div>

          {/* App Content */}
          <div className="flex-1 overflow-y-auto">
            <AnimatePresence mode="wait">

              {/* ── SEARCH VIEW ── */}
              {view === 'search' && (
                <motion.div key="search" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="flex flex-col gap-0">

                  {/* Search Inputs */}
                  <div className="px-4 py-3 bg-[#0D0F14] border-b border-white/5 flex flex-col gap-2.5 shrink-0">
                    <div className="relative">
                      <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-slate-500" />
                      <input
                        value={query}
                        onChange={e => setQuery(e.target.value)}
                        placeholder="Search cameras, projectors, power tools…"
                        className="w-full bg-white/5 border border-white/10 rounded-xl pl-9 pr-4 py-2.5 text-xs text-slate-200 placeholder-slate-600 focus:outline-none focus:border-[#00FF9D]/40 transition-colors"
                      />
                    </div>
                    <div className="flex gap-2">
                      <div className="relative flex-1">
                        <MapPin className="absolute left-2.5 top-1/2 -translate-y-1/2 w-3 h-3 text-slate-500" />
                        <select
                          value={location} onChange={e => setLocation(e.target.value)}
                          className="w-full appearance-none bg-white/5 border border-white/10 rounded-xl pl-7 pr-3 py-2 text-[11px] text-slate-300 focus:outline-none focus:border-[#00FF9D]/40 transition-colors"
                        >
                          {locationOptions.map(l => <option key={l} value={l} className="bg-[#0A0C10]">{l}</option>)}
                        </select>
                      </div>
                      <div className="flex gap-1">
                        {categories.map(c => (
                          <button key={c}
                            onClick={() => setCat(c)}
                            className={`px-2.5 py-2 rounded-xl text-[9px] font-mono-tech font-bold uppercase tracking-wide transition-all border shrink-0 ${
                              cat === c ? 'border-[#00FF9D]/60 bg-[#00FF9D]/15 text-[#00FF9D]' : 'border-white/10 bg-white/5 text-slate-500 hover:text-slate-200'
                            }`}
                          >{c}</button>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Results Count */}
                  <div className="px-4 py-2 flex items-center justify-between">
                    <span className="text-[10px] font-mono-tech text-slate-500">{filtered.length} results {location !== 'Any Location' ? `in ${location}` : ''}</span>
                    <span className="text-[9px] font-mono-tech text-[#00FF9D]">Sort: Relevance</span>
                  </div>

                  {/* Product Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2.5 px-4 pb-4">
                    {filtered.length === 0 ? (
                      <div className="col-span-3 py-10 text-center text-slate-500 text-sm">No items match your search</div>
                    ) : filtered.map((p) => (
                      <motion.button
                        key={p.id}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        onClick={() => { setSelected(p); setView('detail'); }}
                        className="glass-panel border border-white/10 hover:border-[#00FF9D]/40 rounded-xl p-3.5 text-left transition-all flex flex-col gap-2 group"
                      >
                        {/* Icon Area */}
                        <div className="w-full h-16 rounded-lg bg-white/4 flex items-center justify-center relative overflow-hidden">
                          <div className="text-3xl opacity-30">
                            {p.cat === 'Cameras' ? '📷' : p.cat === 'Projectors' ? '📽️' : '🔧'}
                          </div>
                          {p.badge && (
                            <span className="absolute top-1.5 left-1.5 text-[8px] font-mono-tech font-bold px-1.5 py-0.5 rounded bg-[#00FF9D]/20 text-[#00FF9D] border border-[#00FF9D]/30">{p.badge}</span>
                          )}
                          {!p.available && (
                            <div className="absolute inset-0 bg-black/60 flex items-center justify-center rounded-lg">
                              <span className="text-[9px] font-mono-tech text-red-400 font-bold uppercase tracking-widest">Unavailable</span>
                            </div>
                          )}
                        </div>
                        <div className="flex flex-col gap-0.5">
                          <span className="text-[9px] font-mono-tech text-[#00FF9D]/70 uppercase tracking-widest">{p.cat}</span>
                          <h3 className="text-xs font-bold font-space text-white leading-tight group-hover:text-[#00FF9D] transition-colors">{p.name}</h3>
                          <p className="text-[9px] text-slate-500 leading-tight">{p.spec}</p>
                        </div>
                        <div className="flex items-center justify-between pt-1 border-t border-white/8">
                          <div className="flex flex-col gap-0">
                            <span className="text-sm font-black font-space text-white">₹{p.price}<span className="text-[9px] font-normal text-slate-500">/day</span></span>
                            <span className="text-[8px] text-slate-600">Deposit ₹{p.deposit.toLocaleString('en-IN')}</span>
                          </div>
                          <div className="flex items-center gap-1 text-[9px] text-slate-400">
                            <Star className="w-2.5 h-2.5 text-amber-400 fill-amber-400" />
                            <span>{p.rating}</span>
                            <span className="text-slate-600">({p.reviews})</span>
                          </div>
                        </div>
                      </motion.button>
                    ))}
                  </div>
                </motion.div>
              )}

              {/* ── DETAIL / AVAILABILITY VIEW ── */}
              {view === 'detail' && selected && (
                <motion.div key="detail" initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0 }} className="flex flex-col gap-0">
                  {/* Hero */}
                  <div className="mx-4 mt-3 h-28 rounded-xl bg-white/4 flex items-center justify-center relative overflow-hidden border border-white/8">
                    <div className="text-5xl opacity-20">{selected.cat === 'Cameras' ? '📷' : selected.cat === 'Projectors' ? '📽️' : '🔧'}</div>
                    <div className="absolute bottom-2 left-3">
                      <span className="text-[9px] font-mono-tech text-[#00FF9D]/70 uppercase tracking-widest">{selected.cat}</span>
                      <h2 className="text-sm font-black font-space text-white">{selected.name}</h2>
                    </div>
                    <div className="absolute top-2 right-2 flex items-center gap-1 glass-panel px-2 py-1 rounded-full border border-white/10">
                      <Star className="w-2.5 h-2.5 text-amber-400 fill-amber-400" />
                      <span className="text-[9px] font-mono-tech text-slate-300">{selected.rating} ({selected.reviews})</span>
                    </div>
                  </div>

                  <div className="px-4 py-3 flex flex-col gap-3">
                    {/* Spec + Provider */}
                    <div className="flex gap-2.5">
                      <div className="glass-panel flex-1 p-2.5 rounded-xl border border-white/10">
                        <span className="text-[8px] font-mono-tech text-slate-500 uppercase tracking-widest block mb-0.5">Specifications</span>
                        <span className="text-[10px] text-slate-200">{selected.spec}</span>
                      </div>
                      <div className="glass-panel flex-1 p-2.5 rounded-xl border border-white/10">
                        <span className="text-[8px] font-mono-tech text-slate-500 uppercase tracking-widest block mb-0.5">Provider</span>
                        <div className="flex items-center gap-1.5">
                          <div className="w-5 h-5 rounded-full bg-[#00FF9D]/20 flex items-center justify-center">
                            <span className="text-[8px] font-bold text-[#00FF9D]">{selected.provider[0]}</span>
                          </div>
                          <div>
                            <span className="text-[10px] text-slate-200 font-medium block">{selected.provider}</span>
                            <span className="text-[8px] text-slate-500">{selected.location}</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Included Tags */}
                    <div className="flex flex-col gap-1.5">
                      <span className="text-[9px] font-mono-tech text-slate-500 uppercase tracking-widest">What's Included</span>
                      <div className="flex flex-wrap gap-1.5">
                        {selected.tags.map(t => (
                          <div key={t} className="flex items-center gap-1 glass-panel px-2 py-1 rounded-lg border border-white/10 text-[9px] text-slate-300">
                            <Check className="w-2.5 h-2.5 text-[#00FF9D]" />
                            {t}
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Availability Calendar */}
                    <div className="flex flex-col gap-1.5">
                      <span className="text-[9px] font-mono-tech text-slate-500 uppercase tracking-widest">Check Availability — Pick a Date</span>
                      <div className="flex gap-1.5 overflow-x-auto pb-1 no-scrollbar">
                        {dateSlots.map((d, i) => {
                          const unavail = i === 1 || i === 4;
                          return (
                            <button
                              key={d}
                              disabled={unavail}
                              onClick={() => setPickDate(d)}
                              className={`shrink-0 flex flex-col items-center gap-0.5 w-12 py-2 rounded-xl border text-[9px] font-mono-tech font-bold transition-all ${
                                unavail ? 'border-red-500/20 bg-red-500/5 text-red-400/40 cursor-not-allowed' :
                                pickDate === d ? 'border-[#00FF9D]/60 bg-[#00FF9D]/15 text-[#00FF9D]' :
                                'border-white/10 bg-white/4 text-slate-400 hover:border-white/20 hover:text-white'
                              }`}
                            >
                              <span className="text-[8px] font-normal">{d.split(' ')[0]}</span>
                              <span>{d.split(' ')[1]}</span>
                              {unavail && <span className="text-[6px] text-red-400/50 font-normal">Booked</span>}
                              {!unavail && pickDate !== d && <span className="text-[6px] text-slate-600 font-normal">Avail</span>}
                              {pickDate === d && <span className="text-[6px] text-[#00FF9D]/70 font-normal">✓</span>}
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    {/* Duration */}
                    <div className="flex flex-col gap-1.5">
                      <div className="flex items-center justify-between">
                        <span className="text-[9px] font-mono-tech text-slate-500 uppercase tracking-widest">Rental Duration</span>
                        <span className="text-[9px] font-mono-tech text-[#00FF9D]">{days} day{days > 1 ? 's' : ''}</span>
                      </div>
                      <input type="range" min={1} max={7} value={days} onChange={e => setDays(Number(e.target.value))} className="w-full accent-[#00FF9D]" />
                      <div className="flex justify-between text-[8px] text-slate-600 font-mono-tech">
                        {[1,2,3,4,5,6,7].map(d => <span key={d}>{d}d</span>)}
                      </div>
                    </div>

                    {/* Price Summary */}
                    <div className="glass-panel p-3.5 rounded-xl border border-white/10 flex flex-col gap-1.5">
                      <div className="flex justify-between text-[10px]">
                        <span className="text-slate-400">Rental ({days}d × ₹{selected.price})</span>
                        <span className="text-white font-medium">₹{(selected.price * days).toLocaleString('en-IN')}</span>
                      </div>
                      <div className="flex justify-between text-[10px]">
                        <span className="text-slate-400">Platform fee (15%)</span>
                        <span className="text-white font-medium">₹{commission.toLocaleString('en-IN')}</span>
                      </div>
                      <div className="flex justify-between text-[10px]">
                        <span className="text-slate-400">Refundable deposit</span>
                        <span className="text-white font-medium">₹{selected.deposit.toLocaleString('en-IN')}</span>
                      </div>
                      <div className="border-t border-white/10 pt-1.5 flex justify-between">
                        <span className="text-xs font-bold text-white">Total</span>
                        <span className="text-sm font-black font-space text-[#00FF9D]">₹{total.toLocaleString('en-IN')}</span>
                      </div>
                    </div>

                    {/* CTA */}
                    <button
                      disabled={!pickDate || !selected.available}
                      onClick={() => setView('checkout')}
                      className={`w-full py-3 rounded-xl font-mono-tech font-bold text-xs uppercase tracking-widest transition-all ${
                        pickDate && selected.available
                          ? 'bg-[#00FF9D] text-[#08090B] hover:bg-[#00FF9D]/90 shadow-[0_0_20px_rgba(0,255,157,0.25)]'
                          : 'bg-white/5 text-slate-600 cursor-not-allowed border border-white/10'
                      }`}
                    >
                      {!selected.available ? 'Currently Unavailable' : !pickDate ? 'Select a date to continue' : 'Proceed to Checkout →'}
                    </button>
                  </div>
                </motion.div>
              )}

              {/* ── CHECKOUT VIEW ── */}
              {view === 'checkout' && selected && (
                <motion.div key="checkout" initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0 }} className="px-4 py-3 flex flex-col gap-3">
                  <div className="glass-panel p-3.5 rounded-xl border border-white/10 flex flex-col gap-2">
                    <span className="text-[9px] font-mono-tech text-slate-500 uppercase tracking-widest">Order Summary</span>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center text-xl">
                        {selected.cat === 'Cameras' ? '📷' : selected.cat === 'Projectors' ? '📽️' : '🔧'}
                      </div>
                      <div>
                        <h3 className="text-xs font-bold font-space text-white">{selected.name}</h3>
                        <span className="text-[9px] text-slate-500">{pickDate} · {days} day{days>1?'s':''} · {selected.provider}</span>
                      </div>
                    </div>
                    <div className="border-t border-white/10 pt-2 flex flex-col gap-1">
                      <div className="flex justify-between text-[10px]"><span className="text-slate-400">Rental</span><span className="text-white">₹{(selected.price*days).toLocaleString('en-IN')}</span></div>
                      <div className="flex justify-between text-[10px]"><span className="text-slate-400">Platform fee (15%)</span><span className="text-white">₹{commission.toLocaleString('en-IN')}</span></div>
                      <div className="flex justify-between text-[10px]"><span className="text-slate-400">Refundable deposit</span><span className="text-white">₹{selected.deposit.toLocaleString('en-IN')}</span></div>
                      <div className="flex justify-between font-bold pt-1 border-t border-white/10"><span className="text-sm text-white">TOTAL</span><span className="text-sm font-black font-space text-[#00FF9D]">₹{total.toLocaleString('en-IN')}</span></div>
                    </div>
                  </div>

                  {/* Eligibility & Terms */}
                  <div className="glass-panel p-3.5 rounded-xl border border-white/10 flex flex-col gap-2">
                    <span className="text-[9px] font-mono-tech text-slate-500 uppercase tracking-widest">Eligibility Check</span>
                    {['Government-issued photo ID verified', 'Phone number verified (OTP)', 'Agreed to rental terms & damage policy', 'Borrow Score: Excellent (New user baseline)'].map(c => (
                      <div key={c} className="flex items-center gap-2 text-[10px] text-slate-300">
                        <div className="w-4 h-4 rounded-full bg-[#00FF9D]/15 border border-[#00FF9D]/30 flex items-center justify-center shrink-0">
                          <Check className="w-2.5 h-2.5 text-[#00FF9D]" />
                        </div>
                        {c}
                      </div>
                    ))}
                  </div>

                  {/* Payment */}
                  <div className="glass-panel p-3.5 rounded-xl border border-white/10 flex flex-col gap-2.5">
                    <span className="text-[9px] font-mono-tech text-slate-500 uppercase tracking-widest">Payment Method</span>
                    <div className="flex gap-2">
                      {['UPI', 'Card', 'NetBanking'].map(m => (
                        <button key={m} className={`flex-1 py-2 rounded-xl text-[10px] font-mono-tech font-bold border transition-all ${m === 'UPI' ? 'border-[#00FF9D]/50 bg-[#00FF9D]/10 text-[#00FF9D]' : 'border-white/10 bg-white/4 text-slate-400 hover:text-white'}`}>{m}</button>
                      ))}
                    </div>
                    <div className="flex flex-col gap-1">
                      <label className="text-[9px] font-mono-tech text-slate-500 uppercase tracking-widest">UPI ID</label>
                      <input readOnly value="user@upi" className="w-full bg-white/5 border border-white/10 rounded-xl px-3 py-2 text-xs text-slate-200 focus:outline-none" />
                    </div>
                  </div>

                  <div className="glass-panel p-3 rounded-xl border border-white/10 flex items-start gap-2">
                    <Shield className="w-3.5 h-3.5 text-[#00FF9D] shrink-0 mt-0.5" />
                    <p className="text-[9px] text-slate-400 leading-relaxed">Deposit is fully refundable upon item return in original condition. AI Product Passport photos will be captured at handover.</p>
                  </div>

                  <button
                    onClick={() => setView('confirm')}
                    className="w-full py-3.5 rounded-xl font-mono-tech font-bold text-sm uppercase tracking-widest bg-[#00FF9D] text-[#08090B] hover:bg-[#00FF9D]/90 shadow-[0_0_30px_rgba(0,255,157,0.3)] transition-all"
                  >
                    Confirm & Pay ₹{total.toLocaleString('en-IN')}
                  </button>
                </motion.div>
              )}

              {/* ── CONFIRMATION VIEW ── */}
              {view === 'confirm' && selected && (
                <motion.div key="confirm" initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }}
                  className="flex flex-col items-center justify-center h-full py-10 px-4 gap-5 text-center"
                >
                  <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: 'spring', delay: 0.2 }}
                    className="w-20 h-20 rounded-full bg-[#00FF9D]/15 border-2 border-[#00FF9D]/40 flex items-center justify-center shadow-[0_0_40px_rgba(0,255,157,0.2)]"
                  >
                    <Check className="w-9 h-9 text-[#00FF9D]" />
                  </motion.div>
                  <div className="flex flex-col gap-1">
                    <h2 className="text-xl font-black font-space text-white">Booking Confirmed!</h2>
                    <p className="text-xs text-slate-400">Your booking ID: <span className="text-[#00FF9D] font-mono-tech">BRW-2026-{(Math.random()*9000+1000).toFixed(0)}</span></p>
                  </div>
                  <div className="glass-panel p-4 rounded-xl border border-white/10 w-full max-w-xs flex flex-col gap-1.5 text-[11px]">
                    <div className="flex justify-between"><span className="text-slate-500">Item</span><span className="text-white font-medium">{selected.name}</span></div>
                    <div className="flex justify-between"><span className="text-slate-500">Date</span><span className="text-white font-medium">{pickDate}</span></div>
                    <div className="flex justify-between"><span className="text-slate-500">Duration</span><span className="text-white font-medium">{days} day{days>1?'s':''}</span></div>
                    <div className="flex justify-between"><span className="text-slate-500">Provider</span><span className="text-white font-medium">{selected.provider}</span></div>
                    <div className="flex justify-between pt-1 border-t border-white/10 font-bold"><span className="text-slate-300">Paid</span><span className="text-[#00FF9D] font-space">₹{total.toLocaleString('en-IN')}</span></div>
                  </div>
                  <div className="flex flex-col gap-1.5 w-full max-w-xs">
                    <div className="glass-panel p-2.5 rounded-xl border border-[#00FF9D]/20 text-[10px] text-slate-300 flex items-start gap-2">
                      <Clock className="w-3 h-3 text-[#00FF9D] shrink-0 mt-0.5" />
                      AI Product Passport photo capture will begin at handover. Both you and the provider will document the item condition.
                    </div>
                    <button onClick={reset} className="w-full py-2.5 rounded-xl font-mono-tech font-bold text-xs uppercase tracking-widest border border-white/15 text-slate-300 hover:border-[#00FF9D]/30 hover:text-[#00FF9D] transition-all">
                      ← Browse More Items
                    </button>
                  </div>
                </motion.div>
              )}

            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
