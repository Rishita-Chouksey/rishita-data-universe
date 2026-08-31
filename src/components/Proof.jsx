import React from 'react';
import { certificationsData } from '../data/certifications';
import { ShieldCheck } from 'lucide-react';

export default function Proof() {
  return (
    <section id="proof" className="relative py-24 px-6 md:px-14 z-10 flex justify-center">
      <div className="max-w-4xl w-full">
        <div className="mono text-xs text-violet-400 mb-2 tracking-widest">07 // PROOF OF LEARNING</div>
        <h2 className="text-2xl md:text-3xl font-light text-white tracking-tight mb-8">Verified Credentials</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {certificationsData.map((cert) => (
            <div key={cert.id} className="data-panel p-5 flex items-start justify-between">
              <div>
                <div className="mono text-[10px] text-cyan-400 tracking-wider mb-1">{cert.issuer}</div>
                <div className="text-base font-medium text-white mb-1">{cert.title}</div>
                <div className="mono text-xs text-gray-400">{cert.type}</div>
              </div>
              <ShieldCheck className="w-5 h-5 text-violet-400 shrink-0 mt-1" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}