'use client';

import { Suspense } from 'react';
import { Canvas, useLoader } from '@react-three/fiber';
import { Environment, OrbitControls } from '@react-three/drei';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { TextureLoader } from 'three';

const Model = () => {
  // Load the 3D model
  const gltf = useLoader(GLTFLoader, '/adam/adamHead.gltf');

  // Load the base color texture (Adam_Head_a.jpg)
  const baseColorTexture = useLoader(TextureLoader, '/adam/Assets/Models/PBR/Adam/Textures/Adam_Head_sg.png');

  // Load other textures/masks as needed (e.g., masks from the "Masks" folder)
  const maskTexture1 = useLoader(TextureLoader, '/adam/Assets/Models/PBR/Adam/Textures/Mask/Adam_mask_intact_sg.png');
  const maskTexture2 = useLoader(TextureLoader, '/adam/Assets/Models/PBR/Adam/Textures/Mask/Adam_mask_intact_n.jpg');

  // Assign the base color texture to the material
  gltf.scene.traverse((child) => {
    if (child.isMesh) {
      child.material.map = baseColorTexture;

      // Add masks to your material properties as needed
      // Example:
      child.material.mask1 = maskTexture1;
      child.material.mask2 = maskTexture2;
    }
  });

  return <primitive object={gltf.scene} scale={0.01} />;
};

export default function Home() {
  return (
      <div className="adam">
        <Canvas shadows dpr={[1, 2]} camera={{ position: [0, 0, 4], fov: 50 }}>
          <ambientLight intensity={0.7} />
          <spotLight intensity={0.5} angle={0.1} penumbra={1} position={[10, 15, 10]} castShadow />
          <Suspense fallback={null}>
            <Model />
            {/* To add environment effect to the model */}
            <Environment preset="city" />
          </Suspense>
          <OrbitControls autoRotate />
        </Canvas>
      </div>
  );
}


