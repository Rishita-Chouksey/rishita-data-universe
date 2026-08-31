import React, { useState } from 'react';
import { BrainCircuit, FunctionSquare, Network } from 'lucide-react';

export default function Origin() {
  const [activeNode, setActiveNode] = useState(0);

  const concepts = [
    {
      title: "MATHEMATICS",
      icon: FunctionSquare,
      detail: "Formulating models with precision. Linear algebra, probability distributions, discrete mathematics, and numerical algorithms."
    },
    {
      title: "PATTERNS",
      icon: Network,
      detail: "Identifying underlying structures within raw, unstructured datasets. Translating noise into clean statistical vectors."
    },
    {
      title: "INTELLIGENCE",
      icon: BrainCircuit,
      detail: "Building computational reasoning through Machine Learning, NLP pipelines, and real-time AI API architectures."
    }
  ];

  return (
    <section id="origin" className="relative min-h-screen flex items-center justify-center p-6 md:p-14 z-10">
      <div className="max-w-5xl w-full">
        <div className="mono text-xs text-violet-400 mb-3 tracking-widest">
          01 // ORIGIN MATRIX
        </div>
        
        <h2 className="text-3xl md:text-5xl font-light text-white tracking-tight leading-tight mb-8">
          I'm Rishita — a <span className="text-violet-300 font-normal">Mathematics & Computing</span> student exploring the intersection of data, artificial intelligence, and problem solving.
        </h2>

        <p className="text-gray-400 text-base md:text-lg max-w-3xl leading-relaxed mb-12">
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