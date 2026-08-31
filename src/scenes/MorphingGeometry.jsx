import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

export default function MorphingGeometry({ isEntered, enterProgress = 0, isMobile = false }) {
  const meshRef = useRef();
  const innerRef = useRef();

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();

    if (meshRef.current && innerRef.current) {
      meshRef.current.rotation.x = t * 0.18;
      meshRef.current.rotation.y = t * 0.26;
      innerRef.current.rotation.x = -t * 0.22;
      innerRef.current.rotation.y = -t * 0.14;

      if (isEntered) {
        // Expand outward and dissolve to 0 during lab entry
        const scaleVal = (isMobile ? 0.8 : 1.2) + enterProgress * 5.0;
        meshRef.current.scale.setScalar(scaleVal);
        innerRef.current.scale.setScalar(scaleVal * 0.65);

        const targetOpacity = Math.max(0, 0.4 - enterProgress * 0.5);
        meshRef.current.material.opacity = targetOpacity;
        innerRef.current.material.opacity = targetOpacity * 0.7;
      } else {
        const pulse = 1 + Math.sin(t * 1.5) * 0.04;
        const baseScale = (isMobile ? 0.85 : 1.25) * pulse;
        meshRef.current.scale.setScalar(baseScale);
        innerRef.current.scale.setScalar(baseScale * 0.65);

        meshRef.current.material.opacity = 0.35;
        innerRef.current.material.opacity = 0.25;
      }
    }
  });

  // If fully entered into data universe, do not render geometry buffer
  if (isEntered && enterProgress >= 0.98) {
    return null;
  }

  return (
    <group position={[0, 0, 0]}>
      {/* Outer mathematical wireframe structure */}
      <mesh ref={meshRef}>
        <icosahedronGeometry args={[2.0, 2]} />
        <meshBasicMaterial
          color="#38bdf8"
          wireframe
          transparent
          opacity={0.35}
          blending={THREE.AdditiveBlending}
        />
      </mesh>

      {/* Inner coordinate grid */}
      <mesh ref={innerRef}>
        <octahedronGeometry args={[1.4, 1]} />
        <meshBasicMaterial
          color="#a78bfa"
          wireframe
          transparent
          opacity={0.25}
          blending={THREE.AdditiveBlending}
        />
      </mesh>
    </group>
  );
}