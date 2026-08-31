import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

export default function MorphingGeometry({ isMobile }) {
  const meshRef = useRef();
  const wireRef = useRef();

  useFrame(({ clock, pointer }) => {
    const t = clock.getElapsedTime();
    if (meshRef.current && wireRef.current) {
      meshRef.current.rotation.x = t * 0.12;
      meshRef.current.rotation.y = t * 0.18;
      wireRef.current.rotation.x = t * 0.12;
      wireRef.current.rotation.y = t * 0.18;

      // Subtle reaction to pointer
      meshRef.current.position.x = THREE.MathUtils.lerp(meshRef.current.position.x, pointer.x * 0.8, 0.05);
      meshRef.current.position.y = THREE.MathUtils.lerp(meshRef.current.position.y, pointer.y * 0.8, 0.05);
      wireRef.current.position.x = meshRef.current.position.x;
      wireRef.current.position.y = meshRef.current.position.y;
    }
  });

  const scale = isMobile ? 0.75 : 1.25;

  return (
    <group position={[0, 0, -2]} scale={scale}>
      {/* Outer icosahedron core */}
      <mesh ref={meshRef}>
        <icosahedronGeometry args={[2.2, 2]} />
        <meshBasicMaterial
          color="#38bdf8"
          wireframe
          transparent
          opacity={0.12}
        />
      </mesh>
      
      {/* Inner mathematical coordinate grid structure */}
      <mesh ref={wireRef}>
        <octahedronGeometry args={[1.5, 1]} />
        <meshBasicMaterial
          color="#8b5cf6"
          wireframe
          transparent
          opacity={0.35}
        />
      </mesh>
    </group>
  );
}