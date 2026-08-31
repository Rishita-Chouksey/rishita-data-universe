import React from 'react';
import { useScrollProgress } from '../hooks/useScrollProgress';

export default function Navigation() {
  const { activeSection, progress } = useScrollProgress();

  const navItems = [
    { id: "origin", label: "01", name: "ORIGIN" },
    { id: "data", label: "02", name: "DATA FIELD" },
    { id: "milestones", label: "03", name: "MILESTONES" },
    { id: "projects", label: "04", name: "PROJECTS" },
    { id: "experience", label: "05", name: "EXPERIENCE" },
    { id: "community", label: "06", name: "NETWORK" },
    { id: "proof", label: "07", name: "PROOF" },
    { id: "next", label: "08", name: "NEXT" }
  ];

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Top minimal bar */}
      <header className="fixed top-0 left-0 right-0 z-40 px-6 py-4 flex justify-between items-center mix-blend-difference">
        <a href="#hero" className="mono text-xs tracking-widest text-gray-300 hover:text-white transition-colors">
          RISHITA // <span className="text-violet-400">001</span>
        </a>
        <div className="mono text-[11px] text-gray-400 tracking-wider hidden sm:block">
          STATUS: <span className="text-emerald-400">● MITS GWALIOR [M&C]</span>
        </div>
      </header>

      {/* Right-side floating navigation */}
      <nav className="fixed right-6 top-1/2 -translate-y-1/2 z-40 hidden md:flex flex-col items-end gap-3">
        <div className="mono text-[10px] text-violet-400/80 mb-2 tracking-widest pr-1">
          {activeSection}
        </div>
        {navItems.map((item) => {
          const isActive = activeSection.includes(item.label);
          return (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className="group flex items-center gap-3 py-1 cursor-pointer"
            >
              <span className={`mono text-[11px] transition-all duration-200 opacity-0 group-hover:opacity-100 ${
                isActive ? 'opacity-100 text-violet-300' : 'text-gray-400'
              }`}>
                {item.name}
              </span>
              <span className={`w-2 h-[2px] transition-all duration-300 ${
                isActive ? 'w-6 bg-violet-400 shadow-[0_0_8px_#8b5cf6]' : 'bg-white/20 group-hover:bg-white/60'
              }`} />
            </button>
          );
        })}
      </nav>

      {/* Scroll progress line */}
      <div className="fixed bottom-0 left-0 h-[2px] bg-violet-500/70 z-40 transition-all duration-75"
           style={{ width: `${progress * 100}%` }} />
    </>
  );
}