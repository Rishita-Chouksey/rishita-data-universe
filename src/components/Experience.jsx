import React from 'react';
import { experienceData } from '../data/experience';
import { Activity } from 'lucide-react';

export default function Experience() {
  return (
    <section id="experience" className="relative min-h-screen flex items-center justify-center p-6 md:p-14 z-10">
      <div className="max-w-5xl w-full">
        <div className="mono text-xs text-violet-400 mb-2 tracking-widest">05 // ACTIVE SYSTEMS & WORK</div>
        <h2 className="text-3xl md:text-5xl font-light text-white tracking-tight mb-10">Experience Log</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {experienceData.map((exp) => (
            <div key={exp.id} className="data-panel p-6 md:p-8 relative overflow-hidden group">
              <div className="flex items-center justify-between mb-4 border-b border-white/10 pb-3">
                <span className="mono text-xs text-gray-500">{exp.id} // {exp.category}</span>
                <span className="inline-flex items-center gap-1.5 mono text-[10px] text-emerald-400 bg-emerald-950/40 border border-emerald-500/30 px-2 py-0.5">
                  <Activity className="w-3 h-3 animate-pulse" />
                  {exp.status}
                </span>
              </div>

              <h3 className="text-2xl font-semibold text-white mb-1">{exp.company}</h3>
              <div className="mono text-xs text-violet-300 mb-4">{exp.role}</div>

              <div className="mono text-[11px] text-gray-400 mb-4 flex justify-between">
                <span>TIMEFRAME:</span>
                <span className="text-gray-300">{exp.duration}</span>
              </div>

              <p className="text-xs text-gray-400 font-light leading-relaxed border-t border-white/5 pt-4">
                {exp.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}