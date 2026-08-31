import React, { useState, useRef } from 'react';
import { BrainCircuit, FunctionSquare, Network, Fingerprint, Scan, ShieldCheck } from 'lucide-react';
import rishitaImg from '../assets/rishita.jpg';

export default function Origin() {
  const [activeNode, setActiveNode] = useState(0);
  const [mouseOffset, setMouseOffset] = useState({ x: 0, y: 0 });
  const cardRef = useRef(null);

  const concepts = [
    {
      title: "MATHEMATICS",
      icon: FunctionSquare,
      detail: "Linear algebra, discrete systems, matrix calculus, and algorithmic rigor."
    },
    {
      title: "PATTERNS",
      icon: Network,
      detail: "Extracting latent signals, dimensional structures, and statistical order from entropy."
    },
    {
      title: "INTELLIGENCE",
      icon: BrainCircuit,
      detail: "Engineering predictive pipelines, AI integrations, and real-time computational systems."
    }
  ];

  // Subtle interactive parallax for the Identity Artifact
  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setMouseOffset({ x: x * 14, y: y * 14 });
  };

  const handleMouseLeave = () => {
    setMouseOffset({ x: 0, y: 0 });
  };

  return (
    <section id="origin" className="relative min-h-screen flex items-center justify-center p-6 md:p-14 z-10">
      <div className="max-w-6xl w-full">
        {/* Section Header */}
        <div className="flex items-center justify-between mb-8 pb-3 border-b border-white/10">
          <div className="mono text-xs text-violet-400 tracking-widest flex items-center gap-2">
            <Fingerprint className="w-4 h-4 text-cyan-400" />
            <span>01 // ORIGIN MATRIX — HUMAN ARTIFACT</span>
          </div>
          <div className="mono text-[10px] text-gray-500 hidden sm:block">
            NODE // RISHITA_CHOUKSEY_001
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* LEFT: Identity Artifact (Real Photo with Spatial Technical Frame) */}
          <div className="lg:col-span-5 flex justify-center">
            <div
              ref={cardRef}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              className="relative group w-full max-w-[340px] transition-transform duration-300 ease-out"
              style={{
                transform: `perspective(1000px) rotateY(${mouseOffset.x}deg) rotateX(${-mouseOffset.y}deg)`
              }}
            >
              {/* Outer Technical Frame & Reticles */}
              <div className="absolute -inset-2 border border-white/10 pointer-events-none" />
              <div className="absolute -top-3 -left-3 w-4 h-4 border-t-2 border-l-2 border-cyan-400 pointer-events-none" />
              <div className="absolute -bottom-3 -right-3 w-4 h-4 border-b-2 border-r-2 border-violet-400 pointer-events-none" />

              {/* Holographic Header Metadata */}
              <div className="p-3 bg-black/80 border-t border-x border-white/10 flex justify-between items-center mono text-[10px] text-gray-400">
                <span className="flex items-center gap-1.5 text-cyan-300">
                  <Scan className="w-3 h-3 animate-pulse" />
                  IDENTITY SCAN
                </span>
                <span className="text-gray-500">MITS GWALIOR</span>
              </div>

              {/* Portrait Container */}
              <div className="relative overflow-hidden bg-[#0a0c10] border border-white/15 aspect-[4/5]">
                {/* Genuine Unaltered Photograph */}
                <img
                  src={rishitaImg}
                  alt="Rishita Chouksey"
                  className="w-full h-full object-cover object-top filter contrast-[1.03] brightness-[0.98] transition-all duration-500 group-hover:scale-105"
                  loading="lazy"
                />

                {/* Cinematic Ambient Gradients */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#060709] via-transparent to-black/20 pointer-events-none" />
                <div className="absolute inset-0 bg-violet-950/15 mix-blend-color pointer-events-none" />

                {/* Subtle Technical Grid Lines */}
                <div 
                  className="absolute inset-0 pointer-events-none opacity-20"
                  style={{
                    backgroundImage: 'linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px)',
                    backgroundSize: '24px 24px'
                  }}
                />

                {/* Bottom Identifier Overlay */}
                <div className="absolute bottom-3 left-3 right-3 p-2.5 bg-black/75 backdrop-blur-md border border-white/10 flex items-center justify-between">
                  <div>
                    <div className="text-xs font-medium text-white tracking-wide">RISHITA CHOUKSEY</div>
                    <div className="mono text-[9px] text-cyan-300">MATHEMATICS & COMPUTING</div>
                  </div>
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                </div>
              </div>

              {/* Holographic Footer Readout */}
              <div className="p-2.5 bg-black/80 border-b border-x border-white/10 flex justify-between items-center mono text-[9px] text-gray-500">
                <span>LATENT VECTOR: [0.94, 0.88, 1.00]</span>
                <span className="text-emerald-400">STATUS: HUMAN OPERATOR</span>
              </div>
            </div>
          </div>

          {/* RIGHT: Narrative & Conceptual Nodes */}
          <div className="lg:col-span-7 space-y-6">
            <div>
              <p className="mono text-xs text-cyan-400 uppercase tracking-widest mb-2">
                THE PERSON BEHIND THE SYSTEM
              </p>
              <h2 className="text-2xl sm:text-4xl md:text-5xl font-light text-white tracking-tight leading-tight">
                "Behind all this data, mathematics, and code, there is a builder driven by pure curiosity."
              </h2>
            </div>

            <p className="text-gray-300 text-sm md:text-base font-light leading-relaxed">
              I am a 3rd Year Mathematics & Computing undergraduate exploring how abstract mathematical principles can be engineered into intelligent, resilient systems. Rather than viewing machine learning as a black box, I work backwards from mathematical foundations to computational implementation.
            </p>

            {/* Three Interactive Conceptual Nodes */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
              {concepts.map((node, i) => {
                const Icon = node.icon;
                const isSelected = activeNode === i;
                return (
                  <div
                    key={node.title}
                    onMouseEnter={() => setActiveNode(i)}
                    className={`p-4 cursor-pointer transition-all duration-300 data-panel ${
                      isSelected ? 'data-panel-active border-violet-400' : 'hover:border-white/20'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-3">
                      <span className="mono text-[9px] text-gray-500">NODE 0{i + 1}</span>
                      <Icon className={`w-4 h-4 ${isSelected ? 'text-cyan-400' : 'text-gray-400'}`} />
                    </div>
                    <h3 className="text-sm font-medium text-white mb-1 tracking-wide">{node.title}</h3>
                    <p className="text-[11px] text-gray-400 font-light leading-snug">{node.detail}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
          Rather than viewing code as syntax alone, I operate where mathematical theory meets practical software execution: transforming complex behavioral data and algorithmic rules into functional, human-centric systems.
        </p>

        {/* Conceptual Nodes */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {concepts.map((node, i) => {
            const Icon = node.icon;
            const isSelected = activeNode === i;
            return (
              <div
                key={node.title}
                onMouseEnter={() => setActiveNode(i)}
                className={`p-6 cursor-pointer transition-all duration-300 data-panel ${
                  isSelected ? 'data-panel-active' : 'hover:border-white/20'
                }`}
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="mono text-[10px] text-gray-400 tracking-widest">0{i + 1}</span>
                  <Icon className={`w-5 h-5 ${isSelected ? 'text-cyan-400' : 'text-gray-500'}`} />
                </div>
                <h3 className="text-lg font-medium text-white mb-2 tracking-wide">{node.title}</h3>
                <p className="text-xs text-gray-400 leading-relaxed font-light">{node.detail}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
