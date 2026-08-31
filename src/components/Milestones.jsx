import React from 'react';
import { milestonesData } from '../data/milestones';
import { Trophy, Milestone as MilestoneIcon } from 'lucide-react';

export default function Milestones() {
  return (
    <section id="milestones" className="relative min-h-screen flex items-center justify-center p-6 md:p-14 z-10">
      <div className="max-w-5xl w-full">
        <div className="mono text-xs text-violet-400 mb-2 tracking-widest">03 // TIMELINE TRAJECTORY</div>
        <h2 className="text-3xl md:text-5xl font-light text-white tracking-tight mb-12">Milestones & Growth</h2>

        <div className="space-y-8 relative before:absolute before:inset-0 before:left-3 md:before:left-1/2 before:w-px before:bg-white/10">
          {milestonesData.map((item, idx) => (
            <div
              key={item.year}
              className={`relative flex flex-col md:flex-row items-start gap-8 ${
                item.isHighlight ? 'scale-[1.01]' : ''
              }`}
            >
              {/* Timeline marker */}
              <div className="absolute left-3 md:left-1/2 -translate-x-1/2 w-7 h-7 rounded-full bg-[#060709] border border-violet-500/60 flex items-center justify-center z-10">
                {item.isHighlight ? (
                  <Trophy className="w-3.5 h-3.5 text-amber-400 animate-pulse" />
                ) : (
                  <MilestoneIcon className="w-3.5 h-3.5 text-cyan-400" />
                )}
              </div>

              {/* Content Card */}
              <div className={`ml-10 md:ml-0 w-full md:w-[46%] ${idx % 2 === 0 ? 'md:mr-auto' : 'md:ml-auto'}`}>
                <div
                  className={`p-6 data-panel ${
                    item.isHighlight
                      ? 'border-violet-500/50 bg-violet-950/20 shadow-[0_0_30px_-5px_rgba(139,92,246,0.3)]'
                      : ''
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="mono text-xs text-violet-400 font-medium">{item.year}</span>
                    {item.badge && (
                      <span className="mono text-[10px] px-2 py-0.5 bg-amber-500/10 border border-amber-500/30 text-amber-300">
                        {item.badge}
                      </span>
                    )}
                  </div>

                  <h3 className="text-lg font-medium text-white mb-2">{item.title}</h3>

                  {item.achievementTitle && (
                    <div className="my-3 p-3 bg-white/[0.03] border border-violet-500/30">
                      <div className="text-xs text-cyan-300 mono">{item.achievementTitle}</div>
                      <div className="text-sm font-semibold text-amber-300 mt-0.5">{item.highlightText}</div>
                    </div>
                  )}

                  <p className="text-xs text-gray-400 font-light leading-relaxed">{item.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}