import React from 'react';
import { ArrowUpRight, Github, Linkedin, Mail } from 'lucide-react';

export default function FinalNext() {
  return (
    <section id="next" className="relative min-h-screen flex flex-col justify-between p-6 md:p-14 z-10">
      <div className="pt-10">
        <div className="mono text-xs text-violet-400 tracking-widest mb-2">08 // CONVERGENCE & NEXT</div>
      </div>

      <div className="my-auto max-w-4xl">
        <h2 className="text-5xl sm:text-6xl md:text-7xl font-semibold text-white tracking-tight mb-6">
          WHAT'S NEXT?
        </h2>
        <p className="text-2xl md:text-3xl text-gray-300 font-light mb-4">
          "I'm still building."
        </p>
        <p className="text-lg md:text-xl text-violet-300 font-light mb-10">
          Maybe you should build something with me.
        </p>

        {/* Contact Actions */}
        <div className="flex flex-wrap gap-4 mb-12">
          <a
            href="mailto:rishitachouksey4@gmail.com"
            className="interactive-node inline-flex items-center gap-3 px-6 py-3.5 bg-violet-600 hover:bg-violet-500 text-white mono text-xs tracking-wider transition-colors shadow-[0_0_20px_rgba(139,92,246,0.4)]"
          >
            LET'S CONNECT <ArrowUpRight className="w-4 h-4" />
          </a>
          <a
            href="https://www.linkedin.com/in/rishita-chouksey-471293334"
            target="_blank"
            rel="noreferrer"
            className="interactive-node inline-flex items-center gap-2 px-6 py-3.5 border border-white/20 hover:border-white text-gray-200 mono text-xs tracking-wider transition-colors"
          >
            <Linkedin className="w-4 h-4 text-cyan-400" /> LINKEDIN
          </a>
          <a
            href="https://github.com/Rishita-Chouksey"
            target="_blank"
            rel="noreferrer"
            className="interactive-node inline-flex items-center gap-2 px-6 py-3.5 border border-white/20 hover:border-white text-gray-200 mono text-xs tracking-wider transition-colors"
          >
            <Github className="w-4 h-4 text-violet-400" /> GITHUB
          </a>
        </div>
      </div>

      {/* Footer credits */}
      <div className="flex flex-col sm:flex-row justify-between items-center gap-4 pt-6 border-t border-white/10 mono text-[11px] text-gray-500">
        <div>RISHITA CHOUKSEY © 2026 // MATHEMATICS & COMPUTING</div>
        <div className="flex items-center gap-4">
          <a href="mailto:rishitachouksey4@gmail.com" className="hover:text-white transition-colors">
            rishitachouksey4@gmail.com
          </a>
        </div>
      </div>
    </section>
  );
}