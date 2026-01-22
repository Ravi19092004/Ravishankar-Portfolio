import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';

// Simple Person Component
function Person() {
  const groupRef = useRef();

  useFrame((state) => {
    // Subtle head bobbing
    groupRef.current.children[0].rotation.z = Math.sin(state.clock.elapsedTime * 2) * 0.1;
  });

  return (
    <group ref={groupRef}>
      {/* Head */}
      <mesh position={[0, 1.5, 0]}>
        <sphereGeometry args={[0.3, 16, 16]} />
        <meshStandardMaterial color="#8B5CF6" />
      </mesh>
      {/* Body */}
      <mesh position={[0, 0.5, 0]}>
        <boxGeometry args={[0.6, 1, 0.3]} />
        <meshStandardMaterial color="#3B82F6" />
      </mesh>
      {/* Arms */}
      <mesh position={[-0.4, 0.8, 0]}>
        <boxGeometry args={[0.2, 0.8, 0.2]} />
        <meshStandardMaterial color="#3B82F6" />
      </mesh>
      <mesh position={[0.4, 0.8, 0]}>
        <boxGeometry args={[0.2, 0.8, 0.2]} />
        <meshStandardMaterial color="#3B82F6" />
      </mesh>
    </group>
  );
}

// Computer Component
function Computer() {
  const keyboardRef = useRef();

  useFrame((state) => {
    // Typing animation on keyboard
    keyboardRef.current.position.y = 0.3 + Math.sin(state.clock.elapsedTime * 10) * 0.02;
  });

  return (
    <group>
      {/* Monitor */}
      <mesh position={[0, 0.8, -0.5]}>
        <boxGeometry args={[1, 0.6, 0.1]} />
        <meshStandardMaterial color="#1F2937" />
      </mesh>
      {/* Screen */}
      <mesh position={[0, 0.8, -0.45]}>
        <boxGeometry args={[0.9, 0.5, 0.01]} />
        <meshStandardMaterial color="#000000" />
      </mesh>
      {/* Stand */}
      <mesh position={[0, 0.3, -0.5]}>
        <boxGeometry args={[0.2, 0.4, 0.1]} />
        <meshStandardMaterial color="#374151" />
      </mesh>
      {/* Keyboard */}
      <mesh ref={keyboardRef} position={[0, 0.3, 0.2]}>
        <boxGeometry args={[0.8, 0.05, 0.3]} />
        <meshStandardMaterial color="#4B5563" />
      </mesh>
    </group>
  );
}

// Desk Component
function Desk() {
  return (
    <group>
      {/* Desk Top */}
      <mesh position={[0, 0, 0]}>
        <boxGeometry args={[2, 0.1, 1]} />
        <meshStandardMaterial color="#92400E" />
      </mesh>
      {/* Legs */}
      <mesh position={[-0.9, -0.5, -0.4]}>
        <boxGeometry args={[0.1, 1, 0.1]} />
        <meshStandardMaterial color="#92400E" />
      </mesh>
      <mesh position={[0.9, -0.5, -0.4]}>
        <boxGeometry args={[0.1, 1, 0.1]} />
        <meshStandardMaterial color="#92400E" />
      </mesh>
      <mesh position={[-0.9, -0.5, 0.4]}>
        <boxGeometry args={[0.1, 1, 0.1]} />
        <meshStandardMaterial color="#92400E" />
      </mesh>
      <mesh position={[0.9, -0.5, 0.4]}>
        <boxGeometry args={[0.1, 1, 0.1]} />
        <meshStandardMaterial color="#92400E" />
      </mesh>
    </group>
  );
}

// Main 3D Scene
const PersonUsingComputer = () => {
  return (
    <div className="w-full h-96 md:h-[500px] relative">
      <Canvas camera={{ position: [3, 2, 3], fov: 50 }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        <pointLight position={[-10, -10, -10]} intensity={0.5} />

        <Desk />
        <Computer />
        <Person />

        <OrbitControls enableZoom={false} enablePan={false} maxPolarAngle={Math.PI / 2} />
      </Canvas>
    </div>
  );
};

export default PersonUsingComputer;