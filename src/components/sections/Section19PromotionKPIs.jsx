import React from 'react';
import { motion } from 'framer-motion';
import { Megaphone, Globe, Video, Briefcase, Users, BookOpen, Share2, MapPin } from 'lucide-react';

const channels = [
  { icon: Globe, label: 'Instagram & YouTube', color: '#E1306C', desc: 'Equipment demos, rental flow explainers, creator features. Reach photographers and content creators.' },
  { icon: Briefcase, label: 'LinkedIn', color: '#0A66C2', desc: 'Business and professional equipment providers. B2B outreach for studios, contractors, and orgs.' },
  { icon: Share2, label: 'Referral Programme', color: '#00FF9D', desc: 'Existing users invite renters and providers. Rewards credited when referred user completes a qualifying action.' },
  { icon: MapPin, label: 'Hyperlocal Outreach', color: '#FFA500', desc: 'Photography communities, local studios, college networks, contractor groups, professional events.' },
  { icon: BookOpen, label: 'Educational Content', color: '#9B59B6', desc: 'Guides on when renting beats buying, how to list, how Borrow Score works, Digital Product Passport explainers.' },
  { icon: Users, label: 'Provider Acquisition', color: '#00BFFF', desc: 'Direct outreach to individuals with idle cameras, tools, and projectors. Focus on earning from underused assets.' },
];

const kpis = [
  { label: 'New Renter Registrations', category: 'Acquisition' },
  { label: 'New Provider Registrations', category: 'Acquisition' },
  { label: 'Search-to-Book Conversion', category: 'Booking' },
  { label: 'Repeat Booking Rate', category: 'Retention' },
  { label: 'Borrow Score Coverage %', category: 'Trust' },
  { label: 'AI Flags per 100 Bookings', category: 'Trust' },
  { label: 'Avg Booking Value', category: 'Revenue' },
  { label: 'Customer Satisfaction Score', category: 'Quality' },
];

export default function Section19PromotionKPIs() {
  return (
    <section className="relative w-full h-screen max-h-screen flex flex-col justify-between items-center px-4 sm:px-6 md:px-12 lg:px-16 pt-20 pb-6 bg-[#08090B] snap-start border-t border-white/5 overflow-hidden shrink-0">
      <div className="absolute bottom-1/3 left-1/3 w-96 h-96 bg-[#00FF9D]/4 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-6xl w-full h-full flex flex-col justify-between gap-3 lg:gap-4 z-10 my-auto">
        {/* Header */}
        <div className="flex flex-col items-center text-center gap-1.5">
          <span className="px-3 py-0.5 rounded-full glass-panel text-[10px] md:text-xs font-mono-tech text-[#00FF9D] border border-[#00FF9D]/20 uppercase tracking-widest">
            19 — PROMOTION & PERFORMANCE
          </span>
          <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black font-space text-white leading-none uppercase tracking-tight">
            HOW WE<br />
            <span className="text-gradient-mint">GROW</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-3 md:gap-4 flex-1 min-h-0 max-h-[65vh]">
          {/* Channels */}
          <div className="md:col-span-3 flex flex-col gap-2 overflow-y-auto">
            <span className="text-[9px] font-mono-tech text-[#00FF9D] uppercase tracking-widest shrink-0">Promotional Channels</span>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
              {channels.map(({ icon: Icon, label, color, desc }, i) => (
                <motion.div
                  key={label}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="glass-panel p-3.5 rounded-xl border border-white/10 hover:border-[#00FF9D]/30 transition-all flex flex-col gap-1.5 group"
                >
                  <div className="flex items-center gap-2">
                    <div className="w-7 h-7 rounded-lg flex items-center justify-center" style={{ background: `${color}18` }}>
                      <Icon className="w-3.5 h-3.5" style={{ color }} />
                    </div>
                    <span className="text-xs font-bold font-space text-white">{label}</span>
                  </div>
                  <p className="text-[10px] text-slate-400 leading-relaxed">{desc}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* KPIs */}
          <div className="md:col-span-2 flex flex-col gap-2">
            <span className="text-[9px] font-mono-tech text-[#00FF9D] uppercase tracking-widest">Key Performance Indicators</span>
            <div className="glass-panel rounded-xl border border-white/10 overflow-hidden flex-1 overflow-y-auto">
              {kpis.map((k, i) => (
                <div key={k.label} className="flex items-center justify-between px-3.5 py-2.5 border-b border-white/5 hover:bg-white/3 transition-colors last:border-0">
                  <div className="flex flex-col gap-0.5">
                    <span className="text-[10px] md:text-xs text-white leading-tight">{k.label}</span>
                    <span className="text-[8px] font-mono-tech text-slate-500 uppercase tracking-widest">{k.category}</span>
                  </div>
                  <div className="w-16 h-1 rounded-full bg-white/10 overflow-hidden shrink-0">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${30 + i * 9}%` }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1, duration: 0.8 }}
                      className="h-full bg-[#00FF9D] rounded-full"
                    />
                  </div>
                </div>
              ))}
            </div>
            <div className="glass-panel p-3.5 rounded-xl border border-white/10">
              <span className="text-[9px] font-mono-tech text-[#00FF9D] uppercase tracking-widest block mb-1.5">Agency Outsourcing</span>
              <p className="text-[10px] text-slate-400 leading-relaxed">Marketing fully outsourced to external branding firm. No internal marketing staff during pilot. Project Lead approves all briefs, budgets and factual claims.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
