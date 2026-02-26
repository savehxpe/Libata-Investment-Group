"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, useGLTF, Environment, ContactShadows, Float } from "@react-three/drei";
import { Suspense, useRef } from "react";
import * as THREE from "three";

function Model({ url, glowIntensity }: { url: string; glowIntensity: number }) {
    const { scene } = useGLTF(url);
    const modelRef = useRef<THREE.Group>(null);

    useFrame((state) => {
        if (modelRef.current) {
            modelRef.current.rotation.y = state.clock.elapsedTime * 0.2;
        }
    });

    return (
        <group ref={modelRef}>
            <primitive object={scene} scale={Math.min(1 + glowIntensity * 0.1, 1.3)} />
            {glowIntensity > 0.1 && (
                <pointLight color="#00ffff" intensity={glowIntensity * 5} distance={10} decay={2} />
            )}
        </group>
    );
}

export default function AssetViewer({ url, glowIntensity = 0, reactToVote = false }: { url: string; glowIntensity?: number; reactToVote?: boolean }) {
    return (
        <div className="w-full h-full relative group">
            <Canvas camera={{ position: [0, 2, 7], fov: 45 }}>
                <ambientLight intensity={0.5} />
                <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} color="#00ffff" />
                <pointLight position={[-10, -10, -10]} intensity={0.5} color="#0bda50" />

                <Suspense fallback={null}>
                    <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
                        <Model url={url} glowIntensity={glowIntensity} />
                    </Float>
                    <Environment preset="city" />
                    <ContactShadows position={[0, -1.5, 0]} opacity={0.6} scale={15} blur={2.5} far={4} color="#00ffff" />
                </Suspense>

                <OrbitControls autoRotate={false} enableZoom={true} maxPolarAngle={Math.PI / 2} minPolarAngle={Math.PI / 3} />
            </Canvas>
        </div>
    );
}
