import React from 'react';
import { motion } from 'framer-motion';

export default function Section10FinalVision() {
  return (
    <section className="relative w-full h-screen max-h-screen flex flex-col justify-between items-center px-4 sm:px-6 md:px-12 lg:px-16 pt-20 pb-6 bg-[#040507] snap-start border-t border-white/5 overflow-hidden shrink-0">
      {/* Ambient subtle glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] lg:w-[600px] h-[500px] lg:h-[600px] bg-[#00FF9D]/10 rounded-full blur-[180px] pointer-events-none" />

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
        viewport={{ once: true }}
        className="max-w-5xl w-full h-full text-center flex flex-col items-center justify-between z-10 my-auto"
      >
        {/* Small Brand Text */}
        <span className="font-space font-bold tracking-[0.4em] text-[10px] md:text-xs text-slate-500 uppercase">
          BORROWIT
        </span>

        {/* Pure Typography Statements */}
        <div className="flex flex-col gap-2 tracking-tight my-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-3xl sm:text-5xl md:text-7xl lg:text-8xl font-black font-space text-slate-400 leading-none uppercase"
          >
            DON&apos;T OWN EVERYTHING.
          </motion.h2>

          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-3xl sm:text-5xl md:text-7xl lg:text-8xl font-black font-space text-gradient-mint leading-none uppercase"
          >
            ACCESS EVERYTHING.
          </motion.h2>
        </div>

        {/* Final Brand & Tagline */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col items-center gap-2"
        >
          {/* Glowing BORROWIT Emblem */}
          <div className="w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-gradient-to-br from-white via-slate-200 to-[#00FF9D]/40 p-[1px] shadow-[0_0_50px_#00FF9D] my-1">
            <div className="w-full h-full bg-[#08090B] rounded-[15px] flex items-center justify-center">
              <span className="font-space font-black text-xl md:text-2xl text-[#00FF9D]">B</span>
            </div>
          </div>

          <h3 className="text-xl md:text-2xl font-bold font-space text-white tracking-wider">
            BORROWIT
          </h3>
          <p className="text-slate-400 font-mono-tech italic text-xs md:text-sm">
            &ldquo;Why buy it when you can borrow it?&rdquo;
          </p>
          <p className="text-slate-500 text-[11px] md:text-xs font-light max-w-md">
            Turning idle physical possessions into accessible local resources for everyone, everywhere.
          </p>
        </motion.div>

        {/* Small Footer Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.0 }}
          className="mt-2 text-[10px] md:text-[11px] font-mono-tech text-slate-500 tracking-wider flex items-center gap-2"
        >
          <span>© {new Date().getFullYear()} BORROWIT</span>
          <span>•</span>
          <span className="text-slate-400">Made by <strong className="text-[#00FF9D] font-bold">shibal</strong></span>
        </motion.div>
      </motion.div>
    </section>
  );
}

