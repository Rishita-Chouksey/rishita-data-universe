import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import DataParticleField from './DataParticleField';
import MorphingGeometry from './MorphingGeometry';
import { useResponsive } from '../hooks/useResponsive';

export default function MainCanvas() {
  const { isMobile } = useResponsive();

  return (
    <div className="fixed inset-0 pointer-events-none z-0">
      <Canvas
        camera={{ position: [0, 0, 7.5], fov: isMobile ? 65 : 50 }}
        dpr={isMobile ? [1, 1.5] : [1, 2]}
        gl={{ antialias: !isMobile, alpha: true, powerPreference: 'high-performance' }}
      >
        <Suspense fallback={null}>
          <DataParticleField isMobile={isMobile} />
          <MorphingGeometry isMobile={isMobile} />
        </Suspense>
      </Canvas>
      {/* Cinematic subtle vignette */}
      <div className="absolute inset-0 bg-radial-vignette pointer-events-none" 
           style={{ background: 'radial-gradient(circle at center, transparent 35%, #060709 95%)' }} />
    </div>
  );
}