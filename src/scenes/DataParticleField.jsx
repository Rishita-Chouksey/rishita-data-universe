import React, { useMemo, useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

export default function DataParticleField({ isEntered, enterProgress, scrollProgress = 0, isMobile = false }) {
  const pointsRef = useRef();
  const linesRef = useRef();

  const particleCount = isMobile ? 1200 : 3200;

  // Generate multi-stage coordinate targets
  const { positions, openingPositions, fieldPositions, convergencePositions, colors } = useMemo(() => {
    const pos = new Float32Array(particleCount * 3);
    const opening = new Float32Array(particleCount * 3);
    const field = new Float32Array(particleCount * 3);
    const converge = new Float32Array(particleCount * 3);
    const col = new Float32Array(particleCount * 3);

    const colorViolet = new THREE.Color('#8b5cf6');
    const colorCyan = new THREE.Color('#38bdf8');
    const colorDim = new THREE.Color('#4c1d95');

    for (let i = 0; i < particleCount; i++) {
      const idx = i * 3;

      // 1. OPENING: Neural-geometric spherical shell (r ≈ 2.2)
      const u = Math.random();
      const v = Math.random();
      const theta = u * 2.0 * Math.PI;
      const phi = Math.acos(2.0 * v - 1.0);
      const rOpening = 2.0 + Math.random() * 0.4;
      opening[idx] = rOpening * Math.sin(phi) * Math.cos(theta);
      opening[idx + 1] = rOpening * Math.sin(phi) * Math.sin(theta);
      opening[idx + 2] = rOpening * Math.cos(phi);

      // 2. DATA UNIVERSE FIELD: Expansive mathematical vector field
      const rField = 3.5 + Math.cbrt(Math.random()) * 18.0;
      const thetaField = Math.random() * 2 * Math.PI;
      const phiField = (Math.random() - 0.5) * Math.PI * 0.9;
      field[idx] = rField * Math.cos(phiField) * Math.cos(thetaField);
      field[idx + 1] = rField * Math.sin(phiField) + (Math.sin(field[idx] * 0.4) * 1.5);
      field[idx + 2] = (rField * Math.cos(phiField) * Math.sin(thetaField)) * 0.6 - 3.0;

      // 3. FINAL CONVERGENCE: Singular concentrated focal core
      const rConverge = Math.pow(Math.random(), 3) * 0.6;
      const thetaC = Math.random() * 2 * Math.PI;
      converge[idx] = rConverge * Math.cos(thetaC);
      converge[idx + 1] = rConverge * Math.sin(thetaC);
      converge[idx + 2] = (Math.random() - 0.5) * 0.6;

      // Initial active positions start at opening seed
      pos[idx] = opening[idx];
      pos[idx + 1] = opening[idx + 1];
      pos[idx + 2] = opening[idx + 2];

      // Color mapping
      const mixedColor = Math.random() > 0.4 ? colorViolet.clone().lerp(colorCyan, Math.random()) : colorDim;
      col[idx] = mixedColor.r;
      col[idx + 1] = mixedColor.g;
      col[idx + 2] = mixedColor.b;
    }

    return {
      positions: pos,
      openingPositions: opening,
      fieldPositions: field,
      convergencePositions: converge,
      colors: col
    };
  }, [particleCount]);

  useFrame(({ clock, pointer }) => {
    if (!pointsRef.current) return;

    const time = clock.getElapsedTime();
    const posAttr = pointsRef.current.geometry.attributes.position;
    const array = posAttr.array;

    const tEnter = THREE.MathUtils.clamp(enterProgress, 0, 1);
    const isFinalSection = scrollProgress > 0.88;
    const finalFactor = THREE.MathUtils.clamp((scrollProgress - 0.88) / 0.12, 0, 1);

    for (let i = 0; i < particleCount; i++) {
      const idx = i * 3;

      let targetX, targetY, targetZ;

      if (!isEntered) {
        // Pre-entry: breathing neural spherical shell
        const wave = Math.sin(time * 1.2 + openingPositions[idx + 1] * 2.0) * 0.08;
        targetX = openingPositions[idx] * (1 + wave);
        targetY = openingPositions[idx + 1] * (1 + wave);
        targetZ = openingPositions[idx + 2] * (1 + wave);
      } else {
        // Post-entry: interpolate from exploded shell to data field
        const baseFieldX = THREE.MathUtils.lerp(openingPositions[idx] * 4.5, fieldPositions[idx], tEnter);
        const baseFieldY = THREE.MathUtils.lerp(openingPositions[idx + 1] * 4.5, fieldPositions[idx + 1], tEnter);
        const baseFieldZ = THREE.MathUtils.lerp(openingPositions[idx + 2] * 4.5, fieldPositions[idx + 2], tEnter);

        // Add subtle mathematical flow
        const flowX = Math.sin(time * 0.35 + baseFieldY * 0.4) * 0.35 + pointer.x * 0.8;
        const flowY = Math.cos(time * 0.3 + baseFieldX * 0.4) * 0.35 + pointer.y * 0.6;
        const flowZ = Math.sin(time * 0.2 + baseFieldZ * 0.5) * 0.4;

        if (isFinalSection) {
          // Morph directly into the final convergence point
          targetX = THREE.MathUtils.lerp(baseFieldX + flowX, convergencePositions[idx], finalFactor);
          targetY = THREE.MathUtils.lerp(baseFieldY + flowY, convergencePositions[idx + 1], finalFactor);
          targetZ = THREE.MathUtils.lerp(baseFieldZ + flowZ, convergencePositions[idx + 2], finalFactor);
        } else {
          targetX = baseFieldX + flowX;
          targetY = baseFieldY + flowY;
          targetZ = baseFieldZ + flowZ;
        }
      }

      // Smooth frame dampening
      array[idx] = THREE.MathUtils.lerp(array[idx], targetX, 0.08);
      array[idx + 1] = THREE.MathUtils.lerp(array[idx + 1], targetY, 0.08);
      array[idx + 2] = THREE.MathUtils.lerp(array[idx + 2], targetZ, 0.08);
    }

    posAttr.needsUpdate = true;

    if (isEntered) {
      pointsRef.current.rotation.y = time * 0.02 + scrollProgress * Math.PI * 0.5;
      pointsRef.current.rotation.x = Math.sin(time * 0.015) * 0.1;
    } else {
      pointsRef.current.rotation.y = time * 0.15;
      pointsRef.current.rotation.x = time * 0.08;
    }
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" count={particleCount} array={positions} itemSize={3} />
        <bufferAttribute attach="attributes-color" count={particleCount} array={colors} itemSize={3} />
      </bufferGeometry>
      <pointsMaterial
        size={isMobile ? 0.038 : 0.052}
        vertexColors
        transparent
        opacity={isEntered ? 0.75 : 0.9}
        blending={THREE.AdditiveBlending}
        depthWrite={false}
      />
    </points>
  );
}