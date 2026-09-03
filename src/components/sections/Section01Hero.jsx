import React from 'react';
import { motion } from 'framer-motion';
import Interactive3DCanvas from '../3d/Interactive3DCanvas';

export default function Section01Hero({ onNext }) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.25, delayChildren: 0.2 }
    }
  };

  const lineVariants = {
    hidden: { opacity: 0, y: 50, filter: 'blur(10px)' },
    visible: {
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      transition: { duration: 1.1, ease: [0.16, 1, 0.3, 1] }
    }
  };

  return (
    <section className="relative w-full h-screen max-h-screen flex flex-col justify-between items-center px-4 sm:px-6 md:px-12 lg:px-16 pt-20 pb-6 overflow-hidden bg-[#08090B] snap-start shrink-0">
      {/* 3D Visual Layer backdrop */}
      <div className="absolute inset-0 z-0 opacity-75">
        <Interactive3DCanvas activeType="hero" />
      </div>

      {/* Grid pattern + Ambient Radial Glow */}
      <div className="absolute inset-0 bg-grid-pattern opacity-15 pointer-events-none z-0" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] lg:w-[600px] h-[500px] lg:h-[600px] bg-[#00FF9D]/5 rounded-full blur-[140px] pointer-events-none z-0 animate-pulse-glow" />

      {/* Content Layer */}
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="relative z-10 my-auto max-w-5xl w-full text-center flex flex-col items-center gap-4 lg:gap-6"
      >
        {/* Brand Tagline Header */}
        <motion.div variants={lineVariants} className="flex items-center gap-2.5 glass-panel px-3.5 py-1 rounded-full border border-white/10">
          <span className="w-2 h-2 rounded-full bg-[#00FF9D] shadow-[0_0_8px_#00FF9D]" />
          <span className="text-[11px] md:text-xs font-mono-tech tracking-widest text-slate-300 uppercase">
            CONCEPT STAGE STARTUP PITCH — BORROWIT
          </span>
        </motion.div>

        {/* Oversized Headline */}
        <div className="flex flex-col gap-1 md:gap-2 tracking-tight">
          <motion.h1 
            variants={lineVariants}
            className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black font-space text-white leading-[0.98] tracking-tight uppercase"
          >
            WHY BUY IT
          </motion.h1>
          <motion.h1 
            variants={lineVariants}
            className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black font-space text-gradient-mint leading-[0.98] tracking-tight uppercase"
          >
            WHEN YOU CAN BORROW IT?
          </motion.h1>
        </div>

        {/* Supporting Copy */}
        <motion.p 
          variants={lineVariants}
          className="max-w-xl text-slate-400 text-sm sm:text-base md:text-xl font-light leading-relaxed mt-2"
        >
          A trusted hyperlocal marketplace for the things people need occasionally but don&apos;t want to own forever.
        </motion.p>
      </motion.div>

      {/* Bottom CTA — EXPLORE THE IDEA */}
      <motion.div 
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.6, duration: 1 }}
        className="relative z-10 flex flex-col items-center gap-1.5 cursor-pointer group pb-2"
        onClick={onNext}
      >
        <span className="text-[10px] md:text-xs font-mono-tech tracking-[0.25em] text-slate-400 group-hover:text-[#00FF9D] transition-colors uppercase">
          EXPLORE THE IDEA ↓
        </span>
        <div className="w-4 h-7 rounded-full border border-white/20 flex justify-center p-1 group-hover:border-[#00FF9D] transition-colors">
          <motion.div 
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
            className="w-1 h-1 rounded-full bg-[#00FF9D]"
          />
        </div>
      </motion.div>
    </section>
  );
}
