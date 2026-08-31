import React, { Suspense, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import DataParticleField from './DataParticleField';
import MorphingGeometry from './MorphingGeometry';
import { useResponsive } from '../hooks/useResponsive';

function CameraRig({ isEntered, enterProgress, scrollProgress }) {
  const cameraTargetPos = useRef(new THREE.Vector3(0, 0, 7.5));

  useFrame(({ camera }) => {
    if (!isEntered) {
      // Resting distance during initialization
      cameraTargetPos.current.set(0, 0, 7.2);
    } else {
      // Warp camera forward through seed geometry, then stabilize in data universe
      const entryZ = THREE.MathUtils.lerp(7.2, 4.8, THREE.MathUtils.smoothstep(enterProgress, 0, 0.7));
      const scrollY = -scrollProgress * 2.8;
      const scrollZ = THREE.MathUtils.lerp(entryZ, 6.2, THREE.MathUtils.smoothstep(enterProgress, 0.7, 1.0));
      cameraTargetPos.current.set(0, scrollY, scrollZ);
    }

    camera.position.lerp(cameraTargetPos.current, 0.08);
  });

  return null;
}

export default function MainCanvas({ isEntered, enterProgress, scrollProgress }) {
  const { isMobile } = useResponsive();

  return (
    <div className="fixed inset-0 pointer-events-none z-0">
      <Canvas
        camera={{ position: [0, 0, 7.2], fov: isMobile ? 65 : 48 }}
        dpr={isMobile ? [1, 1.3] : [1, 2]}
        gl={{ antialias: !isMobile, alpha: true, powerPreference: 'high-performance' }}
      >
        <Suspense fallback={null}>
          <CameraRig isEntered={isEntered} enterProgress={enterProgress} scrollProgress={scrollProgress} />
          <MorphingGeometry isEntered={isEntered} enterProgress={enterProgress} isMobile={isMobile} />
          <DataParticleField
            isEntered={isEntered}
            enterProgress={enterProgress}
            scrollProgress={scrollProgress}
            isMobile={isMobile}
          />
        </Suspense>
      </Canvas>
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(circle at center, transparent 30%, #060709 95%)' }}
      />
    </div>
  );
}