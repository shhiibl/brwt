import React from 'react';
import { motion } from 'framer-motion';
import { Globe, Briefcase, Share2, MapPin, BookOpen, Users } from 'lucide-react';

const channels = [
  { icon: Globe,     label: 'Instagram & YouTube', color: '#E1306C', desc: 'Equipment demos, rental flow explainers, creator features. Primary channel to reach photographers and content creators.' },
  { icon: Briefcase, label: 'LinkedIn',             color: '#0A66C2', desc: 'Business and professional equipment providers. B2B outreach for studios, contractors, and organisations.' },
  { icon: Share2,    label: 'Referral Programme',   color: '#00FF9D', desc: 'Existing users invite new renters and providers. Rewards credited when the referred user completes a qualifying booking.' },
  { icon: MapPin,    label: 'Hyperlocal Outreach',  color: '#FFA500', desc: 'Photography communities, local studios, college networks, contractor groups, professional events and exhibitions.' },
  { icon: BookOpen,  label: 'Educational Content',  color: '#9B59B6', desc: 'Guides on when renting beats buying, how to list equipment, how Borrow Score works, and Product Passport explainers.' },
  { icon: Users,     label: 'Provider Acquisition', color: '#00BFFF', desc: 'Direct outreach to individuals with idle cameras, tools, and projectors. Focus on the earning opportunity from unused assets.' },
];

export default function Section19PromotionChannels() {
  return (
    <section className="relative w-full h-screen max-h-screen flex flex-col justify-between items-center px-4 sm:px-6 md:px-12 lg:px-16 pt-20 pb-6 bg-[#08090B] snap-start border-t border-white/5 overflow-hidden shrink-0">
      <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-[#00FF9D]/4 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-6xl w-full h-full flex flex-col gap-4 z-10 my-auto">
        {/* Header */}
        <div className="flex flex-col items-center text-center gap-1.5 shrink-0">
          <span className="px-3 py-0.5 rounded-full glass-panel text-[10px] font-mono-tech text-[#00FF9D] border border-[#00FF9D]/20 uppercase tracking-widest">
            19 — PROMOTION CHANNELS
          </span>
          <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black font-space text-white leading-none uppercase tracking-tight">
            HOW WE<br />
            <span className="text-gradient-mint">SPREAD THE WORD</span>
          </h2>
        </div>

        {/* Channel Grid — 6 channels */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 flex-1 min-h-0 overflow-y-auto">
          {channels.map(({ icon: Icon, label, color, desc }, i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="glass-panel p-5 rounded-2xl border border-white/10 hover:border-white/25 transition-all flex flex-col gap-3 group cursor-default"
            >
              <div className="flex items-start justify-between">
                <div className="w-11 h-11 rounded-xl flex items-center justify-center transition-all group-hover:scale-110" style={{ background: `${color}18` }}>
                  <Icon className="w-5 h-5" style={{ color }} />
                </div>
                <div className="w-2 h-2 rounded-full mt-1" style={{ background: color, boxShadow: `0 0 8px ${color}` }} />
              </div>
              <div className="flex flex-col gap-1.5">
                <h3 className="text-sm font-bold font-space text-white">{label}</h3>
                <p className="text-[11px] text-slate-400 leading-relaxed">{desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Agency Note */}
        <div className="glass-panel px-5 py-3.5 rounded-xl border border-white/10 flex items-center gap-3 shrink-0">
          <div className="w-2 h-2 rounded-full bg-[#00FF9D] shadow-[0_0_8px_#00FF9D] shrink-0" />
          <p className="text-[10px] font-mono-tech text-slate-400">
            All marketing fully outsourced to an external branding firm. No internal marketing staff during pilot.
            Project Lead approves all briefs, budgets and factual claims before publication.
          </p>
        </div>
      </div>
    </section>
  );
}
