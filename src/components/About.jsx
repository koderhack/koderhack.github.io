import React, { useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { a, useSpring } from "@react-spring/three";
import { motion } from "framer-motion";
import * as THREE from "three";

// --- Globe with animated wifi connections and glowing points ---
function WifiGlobe() {
  // Example connection arcs (latitude, longitude pairs)
  const connections = [
    [52, 21, 40, -74],   // Warsaw -> New York
    [52, 21, 35, 139],   // Warsaw -> Tokyo
    [52, 21, 51, 0],     // Warsaw -> London
    [52, 21, 48, 2],     // Warsaw -> Paris
    [52, 21, 37, -122],  // Warsaw -> San Francisco
  ];

  // Convert lat/lng to 3D position on sphere
  function latLngToVec3(lat, lng, radius = 1.01) {
    const phi = (90 - lat) * (Math.PI / 180);
    const theta = (lng + 180) * (Math.PI / 180);
    return [
      -radius * Math.sin(phi) * Math.cos(theta),
      radius * Math.cos(phi),
      radius * Math.sin(phi) * Math.sin(theta),
    ];
  }

  // Animated wifi arcs as tubes
  function WifiArcs() {
    return connections.map(([lat1, lng1, lat2, lng2], i) => {
      const start = latLngToVec3(lat1, lng1, 1.01);
      const end = latLngToVec3(lat2, lng2, 1.01);
      const mid = [
        (start[0] + end[0]) / 2,
        (start[1] + end[1]) / 2 + 0.45, // higher arc
        (start[2] + end[2]) / 2,
      ];
      const curve = new THREE.CatmullRomCurve3([
        new THREE.Vector3(...start),
        new THREE.Vector3(...mid),
        new THREE.Vector3(...end),
      ]);
      return (
        <mesh key={i}>
          <tubeGeometry args={[curve, 64, 0.012, 8, false]} />
          <meshStandardMaterial
            color="#00ffe7"
            emissive="#00ffe7"
            emissiveIntensity={0.7}
            transparent
            opacity={0.85}
            metalness={0.8}
            roughness={0.2}
          />
        </mesh>
      );
    });
  }

  // Glowing points for cities
  function WifiPoints() {
    const points = [
      [52, 21],   // Warsaw
      [40, -74],  // New York
      [35, 139],  // Tokyo
      [51, 0],    // London
      [48, 2],    // Paris
      [37, -122], // San Francisco
    ];
    return points.map(([lat, lng], i) => {
      const pos = latLngToVec3(lat, lng, 1.015);
      return (
        <mesh key={i} position={pos}>
          <sphereGeometry args={[0.035, 16, 16]} />
          <meshBasicMaterial color="#ff00ea" emissive="#ff00ea" emissiveIntensity={1} />
        </mesh>
      );
    });
  }

  // Subtle animated glow around the globe
  function AnimatedGlow() {
    const meshRef = React.useRef();
    useFrame(({ clock }) => {
      if (meshRef.current) {
        meshRef.current.material.opacity = 0.10 + Math.sin(clock.getElapsedTime() * 1.5) * 0.04;
      }
    });
    return (
      <mesh ref={meshRef}>
        <sphereGeometry args={[1.07, 64, 64]} />
        <meshBasicMaterial color="#00ffe7" transparent opacity={0.12} />
      </mesh>
    );
  }

  return (
    <Canvas style={{ height: 260, width: 260 }}>
      <ambientLight intensity={0.45} />
      <pointLight position={[3, 3, 3]} intensity={1.2} color="#00ffe7" />
      <pointLight position={[-3, -2, -4]} intensity={0.7} color="#ff00ea" />
      {/* Earth sphere with subtle grid lines */}
      <mesh>
        <sphereGeometry args={[1, 64, 64]} />
        <meshStandardMaterial
          color="#181c2b"
          roughness={0.45}
          metalness={0.7}
          emissive="#00ffe7"
          emissiveIntensity={0.09}
          wireframe={false}
        />
      </mesh>
      {/* Grid lines (latitude/longitude) */}
      <gridHelper args={[2.02, 24, "#00ffe7", "#232b3b"]} position={[0, 0, 0]} rotation={[Math.PI / 2, 0, 0]} />
      {/* Wifi arcs and points */}
      <WifiArcs />
      <WifiPoints />
      {/* Animated glow */}
      <AnimatedGlow />
      <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={1.1} />
    </Canvas>
  );
}

// --- Animated Wireframe Sphere with Parallax, Levitation, Neon Lights ---
function AnimatedWireSphere({ parallax }) {
  const mesh = useRef();
  // Spring for levitation (Y axis)
  const { levitate } = useSpring({
    from: { levitate: 0 },
    to: async (next) => {
      while (1) {
        await next({ levitate: 0.15 });
        await next({ levitate: -0.15 });
      }
    },
    config: { duration: 1800, easing: (t) => (1 - Math.cos(Math.PI * t)) / 2 },
    loop: true,
  });

  // Animate rotation and parallax
  useFrame(() => {
    if (mesh.current) {
      mesh.current.rotation.y += 0.008;
      mesh.current.rotation.x = parallax.current.x * 0.15;
      mesh.current.rotation.z = parallax.current.y * 0.15;
    }
  });

  return (
    <a.mesh ref={mesh} position-y={levitate}>
      <sphereGeometry args={[1, 64, 64]} />
      <meshStandardMaterial
        color="#00ffe7"
        wireframe
        transparent
        opacity={0.45}
        emissive="#00ffe7"
        emissiveIntensity={0.7}
        metalness={0.8}
        roughness={0.2}
      />
    </a.mesh>
  );
}

// --- Pulsing Neon Light ---
function PulsingLight() {
  const light = useRef();
  useFrame(({ clock }) => {
    if (light.current) {
      light.current.intensity = 0.7 + Math.sin(clock.getElapsedTime() * 2) * 0.5;
    }
  });
  return (
    <pointLight
      ref={light}
      position={[0, 2, 0]}
      color="#00ffe7"
      intensity={1}
      distance={5}
    />
  );
}

// --- Responsive 3D Canvas with Parallax ---
function About3D() {
  const parallax = useRef({ x: 0, y: 0 });

  // Mouse parallax effect
  const handlePointerMove = (e) => {
    const x = (e.clientX / window.innerWidth - 0.5) * 2;
    const y = (e.clientY / window.innerHeight - 0.5) * 2;
    parallax.current = { x, y };
  };

  return (
    <div
      className="w-full h-64 md:w-[340px] md:h-[340px] flex-shrink-0"
      onPointerMove={handlePointerMove}
      style={{ touchAction: "none" }}
    >
      <Canvas
        camera={{ position: [0, 0, 3.2], fov: 50 }}
        gl={{ alpha: true }}
      >
        {/* Ambient and neon point lights */}
        <ambientLight intensity={0.5} />
        <pointLight position={[2, 2, 2]} intensity={1.2} color="#00ffe7" />
        <pointLight position={[-2, -2, -2]} intensity={1.1} color="#00ffe7" />
        {/* Pulsing point light */}
        <PulsingLight />
        {/* Animated wireframe sphere */}
        <AnimatedWireSphere parallax={parallax} />
        <OrbitControls enableZoom={false} enablePan={false} enableRotate={false} />
      </Canvas>
    </div>
  );
}

// --- AboutSection Component ---
export default function AboutSection() {
  return (
    <section
      id="about"
      className="relative flex flex-col md:flex-row items-center justify-center min-h-[90vh] mx-auto px-6 pt-32 gap-10"
      style={{
        background:
          "linear-gradient(135deg, #18181b 60%, #232b3b 100%)",
      }}
    >
      {/* 3D object left/top */}
      <div className="w-full flex justify-center md:justify-end md:w-1/2 mb-8 md:mb-0">
        <About3D />
      </div>
      {/* Text right/bottom */}
      <div className="w-full md:w-1/2 flex flex-col items-center md:items-start">
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-5 text-cyber-accent font-poppins"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Kacper Sikora
        </motion.h2>
        <motion.p
          className="text-lg md:text-xl text-gray-300 mb-4 font-inter"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          Specjalizuję się w interfejsach, AI oraz aplikacjach i stronach internetowych. Łączę kreatywność z technologią, by budować produkty, które robią wrażenie. Uwielbiam szybkie prototypowanie, automatyzacje i cyberpunkowy design.
        </motion.p>
        <motion.p
          className="text-md text-cyber-neon font-poppins"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          React • Node.js • AI • Futurystyczny UX/UI
        </motion.p>
      </div>
      {/* Futuristic gradient background effect */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-[-1]"
        style={{
          background:
            "radial-gradient(ellipse at 60% 40%, #00ffe7 0%, transparent 60%), radial-gradient(ellipse at 30% 80%, #ff009933 0%, transparent 70%)",
          opacity: 0.18,
        }}
      />
    </section>
  );
}
