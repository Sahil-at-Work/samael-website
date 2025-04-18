import { useRef, useMemo, useEffect } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';

function Circuit() {
  const pointsRef = useRef<THREE.Points>(null);
  const linesRef = useRef<THREE.LineSegments>(null);
  const mousePosition = useRef({ x: 0, y: 0 });
  const { size } = useThree();
  
  // Create circuit board nodes
  const { positions, indices } = useMemo(() => {
    const gridSize = 20;
    const spacing = 2;
    const positions = new Float32Array(gridSize * gridSize * 3);
    const indices: number[] = [];
    
    // Create grid of points
    for (let i = 0; i < gridSize; i++) {
      for (let j = 0; j < gridSize; j++) {
        const idx = (i * gridSize + j) * 3;
        positions[idx] = (j - gridSize/2) * spacing;
        positions[idx + 1] = 0;
        positions[idx + 2] = (i - gridSize/2) * spacing;
        
        // Create connections between points
        if (j < gridSize - 1) {
          indices.push(i * gridSize + j, i * gridSize + j + 1);
        }
        if (i < gridSize - 1) {
          indices.push(i * gridSize + j, (i + 1) * gridSize + j);
        }
      }
    }
    
    return { positions, indices };
  }, []);

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      mousePosition.current = {
        x: (event.clientX / size.width) * 2 - 1,
        y: -(event.clientY / size.height) * 2 + 1
      };
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [size]);

  useFrame((state) => {
    if (!pointsRef.current || !linesRef.current) return;

    const positions = pointsRef.current.geometry.attributes.position.array as Float32Array;
    const time = state.clock.elapsedTime * 0.5;
    const mouseX = mousePosition.current.x * 20;
    const mouseY = mousePosition.current.y * 20;

    for (let i = 0; i < positions.length; i += 3) {
      const x = positions[i];
      const z = positions[i + 2];
      
      // Calculate distance from mouse
      const dx = x - mouseX;
      const dz = z - mouseY;
      const distance = Math.sqrt(dx * dx + dz * dz);
      
      // Create wave effect influenced by mouse position
      const amplitude = Math.max(0, 1 - distance / 10) * 2;
      positions[i + 1] = Math.sin(time + distance * 0.5) * amplitude;
    }

    pointsRef.current.geometry.attributes.position.needsUpdate = true;
    linesRef.current.geometry.attributes.position.needsUpdate = true;
  });

  return (
    <group>
      <points ref={pointsRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={positions.length / 3}
            array={positions}
            itemSize={3}
          />
        </bufferGeometry>
        <pointsMaterial
          size={0.15}
          color="#422006"
          transparent
          opacity={0.8}
          sizeAttenuation
          blending={THREE.AdditiveBlending}
        />
      </points>
      <lineSegments ref={linesRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={positions.length / 3}
            array={positions}
            itemSize={3}
          />
          <bufferAttribute
            attach="index"
            count={indices.length}
            array={new Uint16Array(indices)}
            itemSize={1}
          />
        </bufferGeometry>
        <lineBasicMaterial
          color="#422006"
          transparent
          opacity={0.3}
          blending={THREE.AdditiveBlending}
        />
      </lineSegments>
    </group>
  );
}

const ThreeBackground = () => {
  return (
    <div className="absolute inset-0 z-0">
      <Canvas
        camera={{ position: [0, 15, 25], fov: 45 }}
        style={{ background: 'transparent', position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
      >
        <ambientLight intensity={1.2} />
        <pointLight position={[10, 10, 10]} intensity={2} />
        <Circuit />
      </Canvas>
    </div>
  );
};

export default ThreeBackground;