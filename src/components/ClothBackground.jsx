import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

// Ribbon Component
const Ribbon = ({
  offset = 0,
  waveSpeed = 10,
  twistStrength = 0.5,
  yOffset = 0,
  colorStart = 0.6,
  position = [0, 0, -20],
  xWaveStrength = 1.5,
}) => {
  const meshRef = useRef();
  const width = 0.2; 
  const length = 250;
  const segments = 200;

  const geometry = new THREE.BufferGeometry();
  const positions = [];
  const colors = [];

  for (let i = 0; i <= segments; i++) {
    const x = (i / segments) * length - length / 2;
    positions.push(x, width / 2, 0);
    positions.push(x, -width / 2, 0);

    const t = i / segments;

const palette = [
  new THREE.Color("#4b6cb7"), // Blue Slate
  new THREE.Color("#8e44ad"), // Muted Purple
  new THREE.Color("#2980b9"), // Calm Blue
  new THREE.Color("#6dd5fa"), // Light Sky Blue
  new THREE.Color("#2d3436"), // Charcoal Gray
  new THREE.Color("#3674B5"),  
  new THREE.Color("#00FFDE")  
];



    const segmentCount = palette.length - 1;
    const segmentSize = 1 / segmentCount;
    const segmentIndex = Math.min(
      Math.floor(t / segmentSize),
      palette.length - 2
    );
    const localT = (t - segmentIndex * segmentSize) / segmentSize;

    const color = palette[segmentIndex]
      .clone()
      .lerp(palette[segmentIndex + 1], localT);

    colors.push(color.r, color.g, color.b, color.r, color.g, color.b);
  }

  geometry.setAttribute(
    "position",
    new THREE.Float32BufferAttribute(positions, 3)
  );
  geometry.setAttribute("color", new THREE.Float32BufferAttribute(colors, 3));

  const indices = [];
  for (let i = 0; i < segments; i++) {
    const a = i * 2,
      b = i * 2 + 1,
      c = i * 2 + 2,
      d = i * 2 + 3;
    indices.push(a, b, d, a, d, c);
  }
  geometry.setIndex(indices);
  geometry.computeVertexNormals();

  useFrame(({ clock }) => {
    const time = clock.getElapsedTime() + offset;
    const pos = geometry.attributes.position;

    const xDrift = Math.sin(time * 0.05 + offset) * 10;

    // 🌊 Global cloth wave affecting all ribbons
    const globalYShift = Math.sin(time * 0.2) * 10; // shared vertical wave

    for (let i = 0; i <= segments; i++) {
      const top = i * 2;
      const bottom = i * 2 + 1;

      const x = (i / segments) * length - length / 2 + xDrift;

      // 🌱 Local wave
      const yShift = Math.sin(x * 0.01 + time * 0.1) * 18;

      // 🧵 Apply both global + local shift
      const totalY = yShift + globalYShift + yOffset;

      const zShift = Math.cos(x * 0.01 + time * 0.1) * 2;

      pos.setXYZ(top, x, width / 2 + totalY, zShift);
      pos.setXYZ(bottom, x, -width / 2 + totalY, zShift);
    }

    pos.needsUpdate = true;
    geometry.computeVertexNormals();
  });

  return (
    <mesh ref={meshRef} geometry={geometry} position={position}>
      <meshStandardMaterial
        vertexColors
        side={THREE.DoubleSide}
        transparent
        opacity={0.5}
        roughness={0.3}
        metalness={0.2}
      />
    </mesh>
  );
};

export const ClothBackground = () => {
  const ribbonCount = 80;
  return (
    <div
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: 0,
        pointerEvents: "none",
      }}
    >
      <Canvas camera={{ position: [0, 0, 70], fov: 50 }}>
        <ambientLight intensity={0.7} />
        <pointLight position={[30, 30, 50]} intensity={1.3} color="#d3aaff" />

        <group rotation={[0, 0, Math.PI / 8]}>
          {Array.from({ length: ribbonCount }).map((_, i) => (
            <Ribbon
              key={i}
              offset={i * 0.25}
              waveSpeed={10}
              twistStrength={0}
              xWaveStrength={0}
              yOffset={(i - ribbonCount / 2) * 0.14 + Math.sin(i * 0.2) * 0.05}
              colorStart={0.62 + i * 0.01}
            />
          ))}
        </group>
      </Canvas>
    </div>
  );
};
