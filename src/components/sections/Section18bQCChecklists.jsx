import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Camera, Wrench, Presentation, ShieldCheck, Zap } from 'lucide-react';

const categories = [
  {
    icon: Camera, label: 'Cameras', color: '#00FF9D',
    checks: [
      { item: 'Body & lens condition', detail: 'No cracks, scratches or mount damage. Test with sample capture.' },
      { item: 'Sensor / test image', detail: 'Capture a test image at standard settings. Verify no dead pixels or dust.' },
      { item: 'Battery & charger', detail: 'Battery holds charge. Charger included and functioning.' },
      { item: 'All accessories listed', detail: 'Lens caps, straps, bags, filters, SD cards — all verified against listing.' },
      { item: 'Firmware version noted', detail: 'Record firmware version. Advise renter of any limitations.' },
    ]
  },
  {
    icon: Presentation, label: 'Projectors', color: '#00BFFF',
    checks: [
      { item: 'Image quality & focus', detail: 'Project onto surface. Verify brightness, focus range and colour accuracy.' },
      { item: 'Inputs & connectivity', detail: 'Test all HDMI, USB, VGA ports. Remote works correctly.' },
      { item: 'Cables & remote', detail: 'All cables included and functional. Remote battery verified.' },
      { item: 'Ventilation & heat', detail: 'Fan operational. No excessive heat or unusual smell during test run.' },
      { item: 'Lamp hours recorded', detail: 'Note lamp hours. Advise renter of remaining lamp life.' },
    ]
  },
  {
    icon: Wrench, label: 'Power Tools', color: '#F97316',
    checks: [
      { item: 'Casing & guards', detail: 'No cracks. All safety guards present, correctly positioned and functional.' },
      { item: 'Switches & trigger', detail: 'On/off and speed controls respond correctly. No sticking or sparking.' },
      { item: 'Battery or cable', detail: 'Battery charged and holds charge. Cable has no fraying or exposed wires.' },
      { item: 'All attachments', detail: 'Blades, bits, chucks, cases included. Verify against listing description.' },
      { item: 'Safety check — competent person', detail: 'Must be inspected by a qualified person before each rental. Document inspector name.' },
    ]
  },
];

export default function Section18bQCChecklists() {
  const [activeCat, setActiveCat] = useState(0);
  const [checkedItems, setCheckedItems] = useState({});

  const toggleCheck = (catIdx, itemIdx) => {
    const key = `${catIdx}-${itemIdx}`;
    setCheckedItems(prev => ({ ...prev, [key]: !prev[key] }));
  };

  const cat = categories[activeCat];
  const checkedCount = cat.checks.filter((_, i) => checkedItems[`${activeCat}-${i}`]).length;

  return (
    <section className="relative w-full h-screen max-h-screen flex flex-col justify-between items-center px-4 sm:px-6 md:px-12 lg:px-16 pt-20 pb-6 bg-[#08090B] snap-start border-t border-white/5 overflow-hidden shrink-0">
      <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-[#00FF9D]/4 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-6xl w-full h-full flex flex-col gap-4 z-10 my-auto">
        {/* Header */}
        <div className="flex flex-col items-center text-center gap-1.5 shrink-0">
          <span className="px-3 py-0.5 rounded-full glass-panel text-[10px] font-mono-tech text-[#00FF9D] border border-[#00FF9D]/20 uppercase tracking-widest">
            18B — CATEGORY QC CHECKLISTS
          </span>
          <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black font-space text-white leading-none uppercase tracking-tight">
            INSPECT<br />
            <span className="text-gradient-mint">BEFORE YOU LEND.</span>
          </h2>
        </div>

        {/* Category Tabs */}
        <div className="grid grid-cols-3 gap-3 shrink-0">
          {categories.map((c, i) => {
            const Icon = c.icon;
            return (
              <button
                key={c.label}
                onClick={() => setActiveCat(i)}
                className={`flex items-center justify-center gap-2.5 py-3.5 rounded-xl border font-mono-tech font-bold text-xs uppercase tracking-widest transition-all ${
                  activeCat === i
                    ? 'border-opacity-60 shadow-lg'
                    : 'glass-panel border-white/10 text-slate-400 hover:text-white hover:border-white/20'
                }`}
                style={activeCat === i ? {
                  borderColor: `${c.color}60`,
                  background: `${c.color}12`,
                  color: c.color,
                  boxShadow: `0 0 20px ${c.color}15`
                } : {}}
              >
                <Icon className="w-4 h-4" />
                {c.label}
              </button>
            );
          })}
        </div>

        {/* Checklist Panel */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCat}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="glass-panel rounded-2xl border p-5 flex flex-col gap-4 flex-1 min-h-0 overflow-hidden"
            style={{ borderColor: `${cat.color}25` }}
          >
            {/* Panel Header */}
            <div className="flex items-center justify-between shrink-0">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl flex items-center justify-center" style={{ background: `${cat.color}20` }}>
                  <cat.icon className="w-4.5 h-4.5" style={{ color: cat.color }} />
                </div>
                <div>
                  <h3 className="text-base font-bold font-space text-white">{cat.label} — Inspection Checklist</h3>
                  <span className="text-[9px] font-mono-tech text-slate-500">Click each item to mark as verified</span>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-24 h-2 rounded-full bg-white/5 overflow-hidden">
                  <motion.div
                    className="h-full rounded-full"
                    animate={{ width: `${(checkedCount / cat.checks.length) * 100}%` }}
                    transition={{ duration: 0.4 }}
                    style={{ background: cat.color }}
                  />
                </div>
                <span className="text-[10px] font-mono-tech font-bold" style={{ color: cat.color }}>
                  {checkedCount}/{cat.checks.length}
                </span>
              </div>
            </div>

            {/* Checklist Items */}
            <div className="flex flex-col gap-2.5 overflow-y-auto flex-1">
              {cat.checks.map((check, i) => {
                const checked = !!checkedItems[`${activeCat}-${i}`];
                return (
                  <motion.button
                    key={check.item}
                    onClick={() => toggleCheck(activeCat, i)}
                    className={`flex items-start gap-3.5 p-3.5 rounded-xl border text-left transition-all ${
                      checked
                        ? 'border-opacity-40 bg-opacity-10'
                        : 'glass-panel border-white/10 hover:border-white/20'
                    }`}
                    style={checked ? {
                      borderColor: `${cat.color}40`,
                      background: `${cat.color}0A`
                    } : {}}
                  >
                    <div
                      className="w-5 h-5 rounded-md border-2 flex items-center justify-center shrink-0 mt-0.5 transition-all"
                      style={checked
                        ? { borderColor: cat.color, background: `${cat.color}25` }
                        : { borderColor: 'rgba(255,255,255,0.15)' }
                      }
                    >
                      {checked && (
                        <motion.span
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          className="text-[9px] font-bold"
                          style={{ color: cat.color }}
                        >✓</motion.span>
                      )}
                    </div>
                    <div className="flex flex-col gap-0.5">
                      <span className={`text-sm font-medium transition-colors ${checked ? 'text-slate-400 line-through' : 'text-white'}`}>{check.item}</span>
                      <span className="text-[10px] text-slate-500 leading-relaxed">{check.detail}</span>
                    </div>
                  </motion.button>
                );
              })}
            </div>

            {/* Footer note */}
            <div className="shrink-0 flex items-center gap-2 glass-panel px-3.5 py-2.5 rounded-xl border border-white/8">
              <ShieldCheck className="w-3.5 h-3.5 text-slate-500 shrink-0" />
              <span className="text-[9px] text-slate-500">
                Timestamped photos required for all items. Generic checklist inadequate — risks differ per category.
                {cat.label === 'Power Tools' && ' ⚠️ Inspection must be carried out by a competent person.'}
              </span>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
