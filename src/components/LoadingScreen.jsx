import React, { useState, useEffect } from 'react';

export default function LoadingScreen({ onComplete }) {
  const [progress, setProgress] = useState(0);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setReady(true);
          return 100;
        }
        return prev + Math.floor(Math.random() * 18) + 7;
      });
    }, 90);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={`fixed inset-0 z-50 bg-[#060709] flex flex-col items-center justify-center p-6 transition-opacity duration-700 ${ready && progress >= 100 ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
      <div className="w-full max-w-md">
        <div className="mono text-xs text-violet-400 mb-2 flex justify-between tracking-wider">
          <span>INITIALIZING DATA UNIVERSE...</span>
          <span>{Math.min(progress, 100)}%</span>
        </div>
        
        {/* Minimal Progress Bar */}
        <div className="h-[2px] w-full bg-white/10 overflow-hidden mb-6">
          <div
            className="h-full bg-gradient-to-r from-violet-500 to-cyan-400 transition-all duration-150"
            style={{ width: `${Math.min(progress, 100)}%` }}
          />
        </div>

        <div className="flex justify-between items-center text-[10px] mono text-gray-500">
          <span>MATHEMATICS & COMPUTING</span>
          <span>MITS GWALIOR</span>
        </div>

        {ready && (
          <button
            onClick={onComplete}
            className="mt-8 mx-auto block px-6 py-2 border border-violet-500/40 text-violet-300 mono text-xs hover:bg-violet-600/20 hover:border-violet-400 transition-colors tracking-widest cursor-pointer"
          >
            ENTER THE UNIVERSE →
          </button>
        )}
      </div>
    </div>
  );
}