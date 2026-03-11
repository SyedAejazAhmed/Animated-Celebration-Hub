
import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Mesh } from 'three';

const AnimatedSphere = () => {
  const meshRef = useRef<Mesh>(null!);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.2;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.3;
      // Add some scale animation for visual interest
      const scale = 2.5 + Math.sin(state.clock.elapsedTime) * 0.1;
      meshRef.current.scale.setScalar(scale);
    }
  });

  return (
    <mesh ref={meshRef}>
      <sphereGeometry args={[1, 32, 32]} />
      <meshStandardMaterial
        color="#8338ec"
        roughness={0.4}
        metalness={0.1}
        transparent={true}
        opacity={0.8}
      />
    </mesh>
  );
};

const ThreeBackground: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <div className={className}>
      <Canvas 
        camera={{ position: [0, 0, 5] }}
        gl={{ alpha: true, antialias: true }}
        dpr={[1, 2]}
      >
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <AnimatedSphere />
      </Canvas>
    </div>
  );
};

export default ThreeBackground;
