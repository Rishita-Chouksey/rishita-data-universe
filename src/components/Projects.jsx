import React, { useState } from 'react';
import { projectsData } from '../data/projects';
import { Github, ExternalLink, Code2, Award } from 'lucide-react';

export default function Projects() {
  const [activeProject, setActiveProject] = useState(projectsData[0]);

  return (
    <section id="projects" className="relative min-h-screen flex items-center justify-center p-6 md:p-14 z-10">
      <div className="max-w-6xl w-full">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 pb-4 border-b border-white/10">
          <div>
            <div className="mono text-xs text-violet-400 mb-2 tracking-widest">04 // PROJECT CONSTELLATION</div>
            <h2 className="text-3xl md:text-5xl font-light text-white tracking-tight">Engineered Systems</h2>
          </div>
          <p className="mono text-xs text-gray-400 mt-2 md:mt-0">
            [ DIRECT ARCHITECTURAL CONTRIBUTIONS ]
          </p>
        </div>

        {/* Project Navigation / Constellation Selection */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          {projectsData.map((proj) => {
            const isSelected = activeProject.id === proj.id;
            return (
              <button
                key={proj.id}
                onClick={() => setActiveProject(proj)}
                className={`p-5 text-left transition-all duration-300 data-panel ${
                  isSelected
                    ? 'data-panel-active border-violet-400'
                    : 'hover:border-white/20'
                }`}
              >
                <div className="flex justify-between items-center mb-2">
                  <span className="mono text-[10px] text-cyan-400">{proj.id} // {proj.category}</span>
                </div>
                <div className="text-lg font-medium text-white mb-1">{proj.name}</div>
                <div className="text-xs text-gray-400 line-clamp-1">{proj.tagline}</div>
              </button>
            );
          })}
        </div>

        {/* Dynamic Project Deep Inspection Panel */}
        <div className="data-panel p-6 md:p-10 border border-violet-500/30">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            <div className="lg:col-span-7 space-y-6">
              <div>
                <div className="mono text-xs text-violet-400 tracking-wider mb-1">
                  PROJECT {activeProject.id} // {activeProject.category}
                </div>
                <h3 className="text-3xl font-semibold text-white tracking-tight">{activeProject.name}</h3>
                <p className="text-sm text-cyan-300 font-light mt-1">{activeProject.tagline}</p>
              </div>

              {activeProject.achievement && (
                <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-amber-500/10 border border-amber-500/30 text-amber-300 mono text-xs">
                  <Award className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>{activeProject.achievement}</span>
                </div>
              )}

              <div>
                <div className="mono text-[10px] text-gray-500 uppercase tracking-widest mb-1">SYSTEM OVERVIEW</div>
                <p className="text-gray-300 text-sm font-light leading-relaxed">{activeProject.description}</p>
              </div>

              <div>
                <div className="mono text-[10px] text-gray-500 uppercase tracking-widest mb-1">MY TECHNICAL CONTRIBUTION</div>
                <div className="text-gray-300 text-sm font-light leading-relaxed bg-white/[0.02] p-3 border-l-2 border-violet-400">
                  {activeProject.myContribution}
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 flex flex-col justify-between space-y-6 lg:border-l lg:border-white/10 lg:pl-8">
              <div>
                <div className="mono text-[10px] text-gray-500 uppercase tracking-widest mb-3">TECH STACK INTEGRATION</div>
                <div className="flex flex-wrap gap-2">
                  {activeProject.technologies.map((t) => (
                    <span
                      key={t}
                      className="px-2.5 py-1 bg-white/[0.04] border border-white/10 text-violet-300 mono text-xs"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-6 border-t border-white/10 flex flex-wrap gap-3">
                {activeProject.links.github && (
                  <a
                    href={activeProject.links.github}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 hover:bg-white/10 border border-white/15 text-white mono text-xs transition-colors"
                  >
                    <Github className="w-4 h-4" />
                    REPOSITORY
                  </a>
                )}
                {activeProject.links.demo && (
                  <a
                    href={activeProject.links.demo}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-violet-600/30 hover:bg-violet-600/50 border border-violet-400 text-white mono text-xs transition-colors"
                  >
                    <ExternalLink className="w-4 h-4 text-cyan-400" />
                    LIVE INSTANCE
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}