import React, { useState } from 'react';
import { skillsData } from '../data/skills';
import { Terminal } from 'lucide-react';

export default function DataField() {
  const [selectedSkill, setSelectedSkill] = useState(skillsData[0]);

  return (
    <section id="data" className="relative min-h-screen flex items-center justify-center p-6 md:p-14 z-10">
      <div className="max-w-6xl w-full">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 pb-4 border-b border-white/10">
          <div>
            <div className="mono text-xs text-violet-400 mb-2 tracking-widest">02 // DATA FIELD & TOPOLOGY</div>
            <h2 className="text-3xl md:text-5xl font-light text-white tracking-tight">Interactive Skill Graph</h2>
          </div>
          <p className="mono text-xs text-gray-400 mt-2 md:mt-0">
            [ NO FAKE PERCENTAGES // SPATIAL COMPETENCY MAP ]
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Spatial Grid of Skill Badges */}
          <div className="lg:col-span-8 flex flex-wrap gap-2.5">
            {skillsData.map((s) => {
              const isCurrent = selectedSkill.name === s.name;
              return (
                <button
                  key={s.name}
                  onClick={() => setSelectedSkill(s)}
                  onMouseEnter={() => setSelectedSkill(s)}
                  className={`interactive-node px-4 py-2.5 mono text-xs transition-all duration-200 ${
                    isCurrent
                      ? 'bg-violet-600/30 text-cyan-300 border-violet-400 shadow-[0_0_12px_rgba(139,92,246,0.3)]'
                      : 'bg-white/[0.02] text-gray-300 border-white/10 hover:border-white/25 hover:bg-white/[0.05]'
                  } border`}
                >
                  <span className="opacity-50 mr-1.5">#</span>
                  {s.name}
                </button>
              );
            })}
          </div>

          {/* Interactive Inspection Terminal */}
          <div className="lg:col-span-4 data-panel p-6 border-l-2 border-l-violet-500">
            <div className="flex items-center gap-2 mb-4 text-violet-400 mono text-xs pb-3 border-b border-white/10">
              <Terminal className="w-4 h-4" />
              <span>NODE INSPECTOR</span>
            </div>

            <div className="space-y-4">
              <div>
                <div className="mono text-[10px] text-gray-500 uppercase">IDENTIFIER</div>
                <div className="text-xl font-medium text-white">{selectedSkill.name}</div>
              </div>

              <div>
                <div className="mono text-[10px] text-gray-500 uppercase">CATEGORY DOMAIN</div>
                <div className="mono text-xs text-cyan-400 uppercase tracking-wider">{selectedSkill.category}</div>
              </div>

              <div>
                <div className="mono text-[10px] text-gray-500 uppercase">SYSTEM OPERATION</div>
                <div className="text-sm text-gray-300 font-light mt-1 bg-black/40 p-3 border border-white/5 mono">
                  {selectedSkill.desc}
                </div>
              </div>

              <div className="pt-2 mono text-[10px] text-gray-500">
                STATUS: VERIFIED APPLICATION
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}