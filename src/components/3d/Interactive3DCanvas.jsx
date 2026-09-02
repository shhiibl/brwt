import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, MeshDistortMaterial, RoundedBox, PerspectiveCamera, OrbitControls } from '@react-three/drei';
import * as THREE from 'three';

// 3D Procedural Matte Dark Objects with realistic studio lighting
function DrillMesh({ position = [0, 0, 0], scale = 1, rotation = [0, 0, 0] }) {
  const groupRef = useRef();

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.2 + rotation[1];
      groupRef.current.rotation.x = Math.cos(state.clock.elapsedTime * 0.4) * 0.1 + rotation[0];
    }
  });

  return (
    <group ref={groupRef} position={position} scale={scale}>
      {/* Body / Main Handle */}
      <mesh position={[0, -0.2, 0]}>
        <boxGeometry args={[0.5, 1.2, 0.4]} />
        <meshStandardMaterial color="#12151C" roughness={0.3} metalness={0.8} />
      </mesh>
      {/* Rubber Grip accent */}
      <mesh position={[0, -0.3, 0.05]}>
        <boxGeometry args={[0.52, 0.8, 0.32]} />
        <meshStandardMaterial color="#00FF9D" roughness={0.4} metalness={0.2} />
      </mesh>
      {/* Motor Housing */}
      <mesh position={[0.4, 0.3, 0]} rotation={[0, 0, -Math.PI / 2]}>
        <cylinderGeometry args={[0.4, 0.45, 1.2, 32]} />
        <meshStandardMaterial color="#1E2330" roughness={0.2} metalness={0.9} />
      </mesh>
      {/* Chuck & Drill Bit */}
      <mesh position={[1.1, 0.3, 0]} rotation={[0, 0, -Math.PI / 2]}>
        <cylinderGeometry args={[0.2, 0.25, 0.4, 32]} />
        <meshStandardMaterial color="#64748B" roughness={0.1} metalness={0.95} />
      </mesh>
      <mesh position={[1.5, 0.3, 0]} rotation={[0, 0, -Math.PI / 2]}>
        <coneGeometry args={[0.08, 0.5, 16]} />
        <meshStandardMaterial color="#00FF9D" roughness={0.1} metalness={0.9} />
      </mesh>
      {/* Battery Pack Base */}
      <mesh position={[0, -0.9, 0]}>
        <boxGeometry args={[0.9, 0.4, 0.7]} />
        <meshStandardMaterial color="#0F1219" roughness={0.4} metalness={0.7} />
      </mesh>
    </group>
  );
}

function CameraMesh({ position = [0, 0, 0], scale = 1 }) {
  const groupRef = useRef();

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = Math.cos(state.clock.elapsedTime * 0.4) * 0.3;
      groupRef.current.rotation.z = Math.sin(state.clock.elapsedTime * 0.3) * 0.08;
    }
  });

  return (
    <group ref={groupRef} position={position} scale={scale}>
      {/* Camera Main Body */}
      <mesh position={[0, 0, 0]}>
        <boxGeometry args={[1.4, 0.9, 0.6]} />
        <meshStandardMaterial color="#111318" roughness={0.3} metalness={0.8} />
      </mesh>
      {/* Top Prism Viewfinder */}
      <mesh position={[0, 0.55, 0]}>
        <boxGeometry args={[0.5, 0.3, 0.5]} />
        <meshStandardMaterial color="#1E222D" roughness={0.2} metalness={0.85} />
      </mesh>
      {/* Lens Cylinder Outer */}
      <mesh position={[0, 0, 0.5]} rotation={[Math.PI / 2, 0, 0]}>
        <cylinderGeometry args={[0.45, 0.45, 0.6, 32]} />
        <meshStandardMaterial color="#0F1117" roughness={0.1} metalness={0.9} />
      </mesh>
      {/* Lens Ring Mint Glass */}
      <mesh position={[0, 0, 0.81]} rotation={[Math.PI / 2, 0, 0]}>
        <ringGeometry args={[0.2, 0.42, 32]} />
        <meshStandardMaterial color="#00FF9D" roughness={0.05} metalness={0.9} emissive="#00FF9D" emissiveIntensity={0.2} />
      </mesh>
    </group>
  );
}

function ProjectorMesh({ position = [0, 0, 0], scale = 1 }) {
  const groupRef = useRef();
  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.2;
    }
  });

  return (
    <group ref={groupRef} position={position} scale={scale}>
      <mesh position={[0, 0, 0]}>
        <boxGeometry args={[1.5, 0.5, 1.2]} />
        <meshStandardMaterial color="#1A1D26" roughness={0.2} metalness={0.85} />
      </mesh>
      {/* Projector Lens Beam */}
      <mesh position={[0.4, 0, 0.65]} rotation={[Math.PI / 2, 0, 0]}>
        <cylinderGeometry args={[0.22, 0.22, 0.2, 32]} />
        <meshStandardMaterial color="#38BDF8" emissive="#38BDF8" emissiveIntensity={0.6} roughness={0.1} />
      </mesh>
    </group>
  );
}

function SpeakerMesh({ position = [0, 0, 0], scale = 1 }) {
  const groupRef = useRef();
  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = -state.clock.elapsedTime * 0.25;
    }
  });

  return (
    <group ref={groupRef} position={position} scale={scale}>
      <mesh position={[0, 0, 0]}>
        <cylinderGeometry args={[0.5, 0.5, 1.4, 32]} />
        <meshStandardMaterial color="#0F1117" roughness={0.4} metalness={0.6} />
      </mesh>
      {/* Speaker Woofer Cones */}
      <mesh position={[0, 0.3, 0.45]} rotation={[Math.PI / 2, 0, 0]}>
        <cylinderGeometry args={[0.3, 0.1, 0.1, 32]} />
        <meshStandardMaterial color="#00FF9D" roughness={0.2} metalness={0.8} />
      </mesh>
      <mesh position={[0, -0.3, 0.45]} rotation={[Math.PI / 2, 0, 0]}>
        <cylinderGeometry args={[0.3, 0.1, 0.1, 32]} />
        <meshStandardMaterial color="#00FF9D" roughness={0.2} metalness={0.8} />
      </mesh>
    </group>
  );
}

function TentMesh({ position = [0, 0, 0], scale = 1 }) {
  const groupRef = useRef();
  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.3) * 0.3;
    }
  });

  return (
    <group ref={groupRef} position={position} scale={scale}>
      <mesh position={[0, 0, 0]}>
        <coneGeometry args={[1, 1.2, 4]} />
        <meshStandardMaterial color="#161B26" roughness={0.6} metalness={0.3} flatShading />
      </mesh>
      {/* Glowing Zip Lines */}
      <mesh position={[0, -0.1, 0.72]} rotation={[0, 0, 0]}>
        <boxGeometry args={[0.1, 0.8, 0.02]} />
        <meshStandardMaterial color="#00FF9D" emissive="#00FF9D" emissiveIntensity={0.5} />
      </mesh>
    </group>
  );
}

export default function Interactive3DCanvas({ activeType = "hero" }) {
  return (
    <div className="w-full h-full min-h-[350px] relative pointer-events-none">
      <Canvas gl={{ antialias: true, alpha: true }}>
        <PerspectiveCamera makeDefault position={[0, 0, 5]} fov={45} />
        
        {/* Soft Studio Lighting */}
        <ambientLight intensity={0.6} />
        <directionalLight position={[10, 10, 10]} intensity={1.5} color="#FFFFFF" />
        <pointLight position={[-10, -5, -5]} intensity={1} color="#00FF9D" />
        <pointLight position={[5, -5, 5]} intensity={0.8} color="#38BDF8" />

        {activeType === "hero" && (
          <group>
            <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
              <DrillMesh position={[-2.2, 0.5, 0]} scale={0.85} rotation={[0.2, 0.4, 0]} />
            </Float>
            <Float speed={2.5} rotationIntensity={0.6} floatIntensity={1.2}>
              <CameraMesh position={[2.4, 0.8, -0.5]} scale={0.9} />
            </Float>
            <Float speed={1.8} rotationIntensity={0.4} floatIntensity={0.8}>
              <ProjectorMesh position={[-1.8, -1.2, 0.5]} scale={0.8} />
            </Float>
            <Float speed={2.2} rotationIntensity={0.5} floatIntensity={1.1}>
              <SpeakerMesh position={[2.0, -1.3, 0]} scale={0.85} />
            </Float>
            <Float speed={1.5} rotationIntensity={0.3} floatIntensity={0.9}>
              <TentMesh position={[0, 1.6, -1]} scale={0.75} />
            </Float>
          </group>
        )}

        {activeType === "drill" && (
          <Float speed={2} rotationIntensity={0.4} floatIntensity={0.6}>
            <DrillMesh position={[0, 0, 0]} scale={1.6} rotation={[0.1, 0.8, 0]} />
          </Float>
        )}

        {activeType === "camera" && (
          <Float speed={2} rotationIntensity={0.4} floatIntensity={0.6}>
            <CameraMesh position={[0, 0, 0]} scale={1.8} />
          </Float>
        )}
      </Canvas>
    </div>
  );
}
