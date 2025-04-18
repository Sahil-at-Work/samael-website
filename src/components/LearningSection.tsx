import { useRef, useEffect, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import * as THREE from 'three';
import Section from './Section';

function Earth() {
  const earthRef = useRef<THREE.Mesh>(null);
  
  useEffect(() => {
    const textureLoader = new THREE.TextureLoader();
    const earthTexture = textureLoader.load('https://raw.githubusercontent.com/mrdoob/three.js/master/examples/textures/planets/earth_atmos_2048.jpg');
    if (earthRef.current) {
      earthRef.current.material = new THREE.MeshStandardMaterial({
        map: earthTexture,
        metalness: 0.1,
        roughness: 0.5,
        emissive: new THREE.Color(0x112244),
        emissiveIntensity: 0.1
      });
    }
  }, []);

  useFrame(() => {
    if (earthRef.current) {
      earthRef.current.rotation.y += 0.001;
    }
  });

  return (
    <mesh ref={earthRef}>
      <sphereGeometry args={[2, 64, 64]} />
      <meshStandardMaterial />
    </mesh>
  );
}

interface SatelliteProps {
  setCoordinates: (coords: { x: number; y: number; z: number }) => void;
  radius: number;
  size: number;
  speed: number;
}

function Satellite({ setCoordinates, radius, size, speed }: SatelliteProps) {
  const satelliteRef = useRef<THREE.Mesh>(null);

  useFrame(({ clock }) => {
    if (satelliteRef.current) {
      const time = clock.getElapsedTime() * speed;
      const x = Math.cos(time) * radius;
      const z = Math.sin(time) * radius;
      const y = Math.sin(time * 2) * 0.5;

      satelliteRef.current.position.set(x, y, z);
      setCoordinates({ x: Number(x.toFixed(2)), y: Number(y.toFixed(2)), z: Number(z.toFixed(2)) });
    }
  });

  return (
    <mesh ref={satelliteRef}>
      <boxGeometry args={[size, size, size]} />
      <meshStandardMaterial color="#FFD700" />
    </mesh>
  );
}

const LearningSection = () => {
  const [coordinates, setCoordinates] = useState({ x: 0, y: 0, z: 0 });
  const [satelliteRadius, setSatelliteRadius] = useState(4);
  const [satelliteSize, setSatelliteSize] = useState(0.3);
  const [satelliteSpeed, setSatelliteSpeed] = useState(0.5);

  return (
    <Section
      id="learning"
      title="Now Learning"
      subtitle="anime.js"
      className="bg-yellow-50 dark:bg-gray-900"
    >
      <div className="relative h-[600px]">
        {/* Coordinates Display */}
        <div className="absolute top-4 right-4 bg-black/90 dark:bg-black/90 backdrop-blur-md p-6 rounded-lg shadow-xl z-10 border border-green-400/30 font-mono">
          <h3 className="text-lg font-semibold text-green-400 mb-4 border-b border-green-400/30 pb-2">
            $ satellite_coordinates
          </h3>
          <div className="space-y-3">
            <div className="flex items-center space-x-2">
              <span className="text-green-400">&gt;</span>
              <span className="text-green-400">x:</span>
              <span className="text-yellow-400">{coordinates.x}</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-green-400">&gt;</span>
              <span className="text-green-400">y:</span>
              <span className="text-yellow-400">{coordinates.y}</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-green-400">&gt;</span>
              <span className="text-green-400">z:</span>
              <span className="text-yellow-400">{coordinates.z}</span>
            </div>
          </div>
        </div>

        {/* Satellite Controls */}
        <div className="absolute bottom-4 left-4 bg-black/90 dark:bg-black/90 backdrop-blur-md p-6 rounded-lg shadow-xl z-10 border border-green-400/30 w-80 font-mono">
          <h3 className="text-lg font-semibold text-green-400 mb-4 border-b border-green-400/30 pb-2">
            $ satellite_control
          </h3>
          <div className="space-y-6">
            <div>
              <div className="flex items-center space-x-2 mb-2">
                <span className="text-green-400">&gt;</span>
                <span className="text-green-400">set_radius:</span>
                <span className="text-yellow-400">{satelliteRadius.toFixed(1)}</span>
              </div>
              <input
                type="range"
                min="3"
                max="8"
                step="0.1"
                value={satelliteRadius}
                onChange={(e) => setSatelliteRadius(parseFloat(e.target.value))}
                className="w-full h-1 bg-green-900 rounded-lg appearance-none cursor-pointer"
              />
            </div>
            <div>
              <div className="flex items-center space-x-2 mb-2">
                <span className="text-green-400">&gt;</span>
                <span className="text-green-400">set_size:</span>
                <span className="text-yellow-400">{satelliteSize.toFixed(2)}</span>
              </div>
              <input
                type="range"
                min="0.1"
                max="0.8"
                step="0.02"
                value={satelliteSize}
                onChange={(e) => setSatelliteSize(parseFloat(e.target.value))}
                className="w-full h-1 bg-green-900 rounded-lg appearance-none cursor-pointer"
              />
            </div>
            <div>
              <div className="flex items-center space-x-2 mb-2">
                <span className="text-green-400">&gt;</span>
                <span className="text-green-400">set_speed:</span>
                <span className="text-yellow-400">{satelliteSpeed.toFixed(2)}</span>
              </div>
              <input
                type="range"
                min="0.1"
                max="2"
                step="0.05"
                value={satelliteSpeed}
                onChange={(e) => setSatelliteSpeed(parseFloat(e.target.value))}
                className="w-full h-1 bg-green-900 rounded-lg appearance-none cursor-pointer"
              />
            </div>
          </div>
        </div>
        
        <div className="absolute inset-0 bg-gradient-to-b from-yellow-100/50 to-yellow-200/50 dark:from-blue-900/50 dark:to-gray-900/50 rounded-lg" />
        
        <Canvas camera={{ position: [0, 5, 10] }} className="rounded-lg">
          <color attach="background" args={['#fef9c3']} />
          <ambientLight intensity={1.2} />
          <pointLight position={[10, 10, 10]} intensity={2} />
          <pointLight position={[-10, -10, -10]} intensity={1} />
          <Earth />
          <Satellite 
            setCoordinates={setCoordinates}
            radius={satelliteRadius}
            size={satelliteSize}
            speed={satelliteSpeed}
          />
          <OrbitControls enableZoom={false} />
        </Canvas>
      </div>
    </Section>
  );
};

export default LearningSection;