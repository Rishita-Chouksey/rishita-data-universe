import React, { useMemo, useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

export default function DataParticleField({ count = 2800, isMobile = false }) {
  const pointsRef = useRef();
  const linesRef = useRef();
  const actualCount = isMobile ? Math.floor(count * 0.35) : count;

  // Generate mathematical coordinate field
  const [positions, initialPositions, speeds] = useMemo(() => {
    const pos = new Float32Array(actualCount * 3);
    const init = new Float32Array(actualCount * 3);
    const spd = new Float32Array(actualCount * 3);

    for (let i = 0; i < actualCount; i++) {
      const u = Math.random();
      const v = Math.random();
      const theta = u * 2.0 * Math.PI;
      const phi = Math.acos(2.0 * v - 1.0);
      const r = Math.cbrt(Math.random()) * 16;

      const x = r * Math.sin(phi) * Math.cos(theta);
      const y = r * Math.sin(phi) * Math.sin(theta);
      const z = (r * Math.cos(phi)) * 0.8;

      pos[i * 3] = x;
      pos[i * 3 + 1] = y;
      pos[i * 3 + 2] = z;

      init[i * 3] = x;
      init[i * 3 + 1] = y;
      init[i * 3 + 2] = z;

      spd[i * 3] = (Math.random() - 0.5) * 0.003;
      spd[i * 3 + 1] = (Math.random() - 0.5) * 0.003;
      spd[i * 3 + 2] = (Math.random() - 0.5) * 0.003;
    }
    return [pos, init, spd];
  }, [actualCount]);

  useFrame(({ clock, pointer }) => {
    if (!pointsRef.current) return;
    const time = clock.getElapsedTime();
    const posAttr = pointsRef.current.geometry.attributes.position;
    
    // Wave oscillation influenced by pointer
    for (let i = 0; i < actualCount; i++) {
      const ix = i * 3;
      const iy = i * 3 + 1;
      const iz = i * 3 + 2;

      const noiseX = Math.sin(time * 0.4 + initialPositions[iy] * 0.5) * 0.15;
      const noiseY = Math.cos(time * 0.35 + initialPositions[ix] * 0.5) * 0.15;
      const noiseZ = Math.sin(time * 0.25 + initialPositions[iz] * 0.5) * 0.2;

      posAttr.array[ix] = initialPositions[ix] + noiseX + (pointer.x * 0.6);
      posAttr.array[iy] = initialPositions[iy] + noiseY + (pointer.y * 0.6);
      posAttr.array[iz] = initialPositions[iz] + noiseZ;
    }

    posAttr.needsUpdate = true;
    pointsRef.current.rotation.y = time * 0.025;
    pointsRef.current.rotation.x = Math.sin(time * 0.015) * 0.1;
  });

  return (
    <group>
      <points ref={pointsRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={actualCount}
            array={positions}
            itemSize={3}
          />
        </bufferGeometry>
        <pointsMaterial
          size={isMobile ? 0.035 : 0.045}
          color="#a78bfa"
          transparent
          opacity={0.65}
          blending={THREE.AdditiveBlending}
          depthWrite={false}
        />
      </points>
    </group>
  );
}