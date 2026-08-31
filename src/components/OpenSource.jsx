import React from 'react';
import { communityData } from '../data/certifications';
import { Globe, Users } from 'lucide-react';

export default function OpenSource() {
  return (
    <section id="community" className="relative min-h-screen flex items-center justify-center p-6 md:p-14 z-10">
      <div className="max-w-5xl w-full">
        <div className="mono text-xs text-violet-400 mb-2 tracking-widest">06 // CONTRIBUTION ECOSYSTEM</div>
        <h2 className="text-3xl md:text-5xl font-light text-white tracking-tight mb-10">Open Source & Community</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {communityData.map((node, i) => (
            <div key={node.title} className="data-panel p-6 hover:border-violet-500/40 transition-all duration-300">
              <div className="flex items-center justify-between mb-4 text-cyan-400">
                <Globe className="w-5 h-5" />
                <span className="mono text-[10px] text-gray-500">NODE 0{i + 1}</span>
              </div>

              <h3 className="text-xl font-medium text-white mb-2">{node.title}</h3>
              <div className="mono text-[11px] text-violet-400 mb-4">{node.tag}</div>

              <div className="space-y-2 border-t border-white/10 pt-4">
                <div className="mono text-[10px] text-gray-500 uppercase">ASSIGNED ROLES</div>
                <div className="flex flex-wrap gap-1.5">
                  {node.roles.map((r) => (
                    <span key={r} className="mono text-xs px-2 py-0.5 bg-white/[0.04] border border-white/10 text-gray-300">
                      {r}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}