import React from 'react';

export default function CurrentFocus() {
  const focusAreas = ["DATA SCIENCE", "MACHINE LEARNING", "AI / NLP", "DSA"];

  return (
    <section className="relative py-20 px-6 md:px-14 z-10 flex justify-center border-y border-white/5 bg-black/20">
      <div className="max-w-4xl w-full text-center">
        <div className="mono text-xs text-violet-400 mb-3 tracking-widest">SYSTEM STATUS // ACTIVE FOCUS</div>
        
        <div className="flex flex-wrap justify-center gap-3 md:gap-4 my-6">
          {focusAreas.map((f) => (
            <span key={f} className="px-4 py-2 border border-violet-500/30 bg-violet-950/20 text-white mono text-xs md:text-sm font-medium tracking-wider">
              {f}
            </span>
          ))}
        </div>

        <p className="text-gray-400 italic text-sm md:text-base font-light max-w-2xl mx-auto mt-4">
          "Less interested in collecting technologies. More interested in understanding them well enough to build something useful."
        </p>
      </div>
    </section>
  );
}