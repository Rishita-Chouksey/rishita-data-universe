import React from 'react';
import { ArrowDown } from 'lucide-react';

export default function Hero() {
  const exploreData = () => {
    const el = document.getElementById('origin');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative min-h-screen flex flex-col justify-between p-6 md:p-14 z-10">
      {/* Top Metadata */}
      <div className="pt-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/[0.03] border border-white/10 mono text-xs text-violet-300">
          <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse" />
          LAB SYSTEM ACTIVE · MITS GWALIOR
        </div>
      </div>

      {/* Large Typography Focus */}
      <div className="my-auto max-w-5xl">
        <p className="mono text-xs md:text-sm text-cyan-400 tracking-[0.35em] uppercase mb-4">
          MATHEMATICS & COMPUTING
        </p>
        <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-semibold tracking-tighter leading-none text-white mb-6">
          RISHITA<br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-100 via-gray-300 to-violet-400/80">
            CHOUKSEY
          </span>
        </h1>
        <p className="text-base sm:text-lg md:text-xl text-gray-400 font-light max-w-2xl leading-relaxed">
          DATA <span className="text-violet-400">×</span> ARTIFICIAL INTELLIGENCE <span className="text-violet-400">×</span> MATHEMATICS <span className="text-violet-400">×</span> PROBLEM SOLVING
        </p>
      </div>

      {/* Minimal Footer Cue */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 pb-6 border-t border-white/10 pt-6">
        <div className="mono text-xs text-gray-500">
          DATA UNIVERSE / 001
        </div>

        <button
          onClick={exploreData}
          className="interactive-node inline-flex items-center gap-2 mono text-xs text-cyan-300 hover:text-white transition-colors cursor-pointer"
        >
          <span>SCROLL TO EXPLORE LAB</span>
          <ArrowDown className="w-3.5 h-3.5 text-violet-400 animate-bounce" />
        </button>
      </div>
    </section>
  );
}