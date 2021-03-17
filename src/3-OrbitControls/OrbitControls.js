import React, { Suspense } from 'react';
import { Canvas } from 'react-three-fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';
import './styles.css';

function Keen() {
  const { nodes, materials } = useGLTF('../assets/scene-draco.glb');
  return (
    <group position={[0, -7, 0]} rotation={[-Math.PI / 2, 0, 0]} dispose={null}>
      <mesh
        material={materials['Scene_-_Root']}
        geometry={nodes.mesh_0.geometry}
        castShadow
        receiveShadow
      />
    </group>
  );
}

export default function Cannon() {
  return (
    <Canvas
      shadowMap
      invalidateFrameloop
      camera={{ position: [0, 0, 17], far: 500 }}
    >
      <ambientLight />
      <spotLight
        intensity={2}
        position={[20, 20, 20]}
        shadow-bias={-0.00005}
        angle={Math.PI / 6}
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
        castShadow
      />
      <Suspense fallback={null}>
        <Keen />
        {/* <StandardEffects bloom={{ luminanceThreshold: 0.99 }} /> */}
      </Suspense>
      <OrbitControls />
    </Canvas>
  );
}
