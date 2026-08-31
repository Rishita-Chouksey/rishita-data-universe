import React, { useState, useEffect } from 'react';
import { ArrowRight, Terminal } from 'lucide-react';

export default function LoadingScreen({ onEnterLab }) {
  const [dataReady, setDataReady] = useState(false);
  const [neuralReady, setNeuralReady] = useState(false);
  const [visualReady, setVisualReady] = useState(false);
  const [systemReady, setSystemReady] = useState(false);

  useEffect(() => {
    const t1 = setTimeout(() => setDataReady(true), 350);
    const t2 = setTimeout(() => setNeuralReady(true), 750);
    const t3 = setTimeout(() => setVisualReady(true), 1150);
    const t4 = setTimeout(() => setSystemReady(true), 1450);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      clearTimeout(t4);
    };
  }, []);

  return (
    <div className="fixed inset-0 z-50 flex flex-col justify-between p-6 md:p-12 bg-transparent pointer-events-none">
      {/* Top Identity Header */}
      <div className="flex justify-between items-start">
        <div className="mono text-xs tracking-widest text-violet-300 flex items-center gap-2">
          <Terminal className="w-4 h-4 text-cyan-400" />
          <span>RISHITA // DATA UNIVERSE</span>
        </div>
        <div className="mono text-[10px] text-gray-500 hidden sm:block">
          MITS · GWALIOR // BTMC24O1110
        </div>
      </div>

      {/* Center Initialization Diagnostics */}
      <div className="max-w-md mx-auto w-full text-center pointer-events-auto">
        <div className="space-y-1.5 mono text-xs mb-8 text-left max-w-[280px] mx-auto bg-black/60 p-4 border border-white/10 backdrop-blur-md">
          <div className="flex justify-between text-gray-400">
            <span>DATA LAYER</span>
            <span className={dataReady ? 'text-cyan-400' : 'text-gray-600'}>
              {dataReady ? '...... READY' : '... QUEUED'}
            </span>
          </div>
          <div className="flex justify-between text-gray-400">
            <span>NEURAL LAYER</span>
            <span className={neuralReady ? 'text-cyan-400' : 'text-gray-600'}>
              {neuralReady ? '...... READY' : '... QUEUED'}
            </span>
          </div>
          <div className="flex justify-between text-gray-400">
            <span>VISUAL LAYER</span>
            <span className={visualReady ? 'text-cyan-400' : 'text-gray-600'}>
              {visualReady ? '...... READY' : '... QUEUED'}
            </span>
          </div>
        </div>

        {systemReady && (
          <button
            onClick={onEnterLab}
            className="interactive-node inline-flex items-center gap-3 px-8 py-3.5 bg-violet-600/30 hover:bg-violet-600/50 border border-violet-400 text-white mono text-xs tracking-widest transition-all duration-300 shadow-[0_0_25px_rgba(139,92,246,0.35)] cursor-pointer group"
          >
            <span>ENTER THE LAB</span>
            <ArrowRight className="w-4 h-4 text-cyan-300 group-hover:translate-x-1 transition-transform" />
          </button>
        )}
      </div>

      {/* Bottom status text */}
      <div className="flex justify-between items-end mono text-[10px] text-gray-500">
        <div>SYS_STATUS: {systemReady ? 'READY FOR INITIALIZATION' : 'CONSTRUCTING GEOMETRY...'}</div>
        <div>MATHEMATICS & COMPUTING</div>
      </div>
    </div>
  );
}