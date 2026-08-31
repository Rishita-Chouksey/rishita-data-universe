import React from 'react';
import { ArrowUpRight, ArrowDown } from 'lucide-react';

export default function Hero() {
  const enterUniverse = () => {
    const target = document.getElementById('origin');
    if (target) target.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative min-h-screen flex flex-col justify-between p-6 md:p-14 z-10">
      {/* Metadata Top Left */}
      <div className="pt-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/[0.03] border border-white/10 rounded-none mono text-xs text-violet-300">
          <span className="w-1.5 h-1.5 bg-violet-400 rounded-full animate-pulse" />
          DATA UNIVERSE / 001 · MITS GWALIOR
        </div>
      </div>

      {/* Main Center Typography */}
      <div className="my-auto max-w-5xl">
        <p className="mono text-xs md:text-sm text-cyan-400 tracking-[0.3em] uppercase mb-4">
          MATHEMATICS & COMPUTING
        </p>
        <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-semibold tracking-tighter leading-none text-white mb-6">
          RISHITA<br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-100 via-gray-300 to-violet-400/80">
            CHOUKSEY
          </span>
        </h1>
        <p className="text-lg md:text-2xl text-gray-400 font-light max-w-2xl leading-relaxed">
          DATA <span className="text-violet-400">×</span> ARTIFICIAL INTELLIGENCE <span className="text-violet-400">×</span> MATHEMATICS <span className="text-violet-400">×</span> PROBLEM SOLVING
        </p>
      </div>

      {/* Action Footer */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 pb-6 border-t border-white/10 pt-6">
        <button
          onClick={enterUniverse}
          className="interactive-node inline-flex items-center gap-3 px-6 py-3.5 bg-violet-600/20 hover:bg-violet-600/30 border border-violet-500/40 hover:border-violet-400 text-violet-200 mono text-xs tracking-wider transition-all duration-300 group"
        >
          ENTER THE UNIVERSE
          <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform text-cyan-400" />
        </button>

        <div className="flex items-center gap-2 mono text-xs text-gray-500">
          <span>SCROLL TO EXPLORE</span>
          <ArrowDown className="w-3.5 h-3.5 text-violet-400 animate-bounce" />
        </div>
      </div>
    </section>
  );
}