'use client';

import { Suspense, useRef } from 'react';
import { Canvas, useLoader, useFrame } from '@react-three/fiber';
import { Environment, OrbitControls } from '@react-three/drei';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { TextureLoader } from 'three';

const Model = () => {
    // Load the 3D model
    const gltf = useLoader(GLTFLoader, '/earth/scene.gltf'); 
    // Load the texture
    const texture = useLoader(TextureLoader, 'earth/textures/Material.002_diffuse.jpeg');
    // Assign the texture to the material
    gltf.scene.traverse((child) => {
      if (child.isMesh) {
        child.material.map = texture;
      }
    });
    return <primitive object={gltf.scene} scale={0.01} />;
  };

const MoonModel = () => {
    const moonRef = useRef();

    // Rotate the moon
    useFrame(() => {
        if (moonRef.current) {
        moonRef.current.rotation.x += 0; // Adjust the rotation speed as needed
        moonRef.current.rotation.y += 0.02; // Adjust the rotation speed as needed
        }
    });

    // Load the moon texture
    const moonTexture = useLoader(TextureLoader, '/earth/textures/moonmap.jpg');

    return (
        <mesh ref={moonRef} position={[1.5, 0, 0]}> {/* Adjust the position of the moon */}
        <sphereGeometry args={[0.2, 32, 32]} />
        <meshStandardMaterial map={moonTexture} color="gray" />
        </mesh>
    );
};


const Earth = () => {
    return (
        <div className="globe globe-container">
            <div className="globe-logo-container">
                <p className="globe-logo-text">Spin the World with the power of Three.js</p>
                <img
                    src="https://pbs.twimg.com/profile_images/1390736294666506242/_D_h6aWq_400x400.png"
                    alt="hugging"
                    width={50}
                    height={50}
                />
            </div>
            <Canvas shadows dpr={[1, 2]} camera={{ position: [0, 0, 4], fov: 30 }}>
                <ambientLight intensity={0.7} />
                <spotLight intensity={0.5} angle={0.1} penumbra={1} position={[10, 15, 10]} castShadow />
                <Suspense fallback={null}>
                    <Model />
                    <MoonModel /> {/* Add the moon model */}
                    {/* To add environment effect to the model */}
                    <Environment preset="city" />
                </Suspense>
                <OrbitControls autoRotate />
            </Canvas>
        </div>
    );
};

export default Earth;