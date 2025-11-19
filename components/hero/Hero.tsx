"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { useRef, useState } from "react";
import { motion } from "framer-motion";
import * as THREE from "three";
import { Environment, Float, ContactShadows } from "@react-three/drei";

function Core(props: any) {
    const meshRef = useRef<THREE.Mesh>(null!);
    const [hovered, setHover] = useState(false);

    useFrame((state, delta) => {
        if (meshRef.current) {
            meshRef.current.rotation.x += delta * 0.2;
            meshRef.current.rotation.y += delta * 0.3;
        }
    });

    return (
        <Float speed={2} rotationIntensity={1} floatIntensity={2}>
            <mesh
                {...props}
                ref={meshRef}
                onPointerOver={() => setHover(true)}
                onPointerOut={() => setHover(false)}
                scale={hovered ? 1.1 : 1}
            >
                <icosahedronGeometry args={[2, 0]} />
                <meshStandardMaterial
                    color={hovered ? "#00f3ff" : "#2a2a2a"}
                    roughness={0.1}
                    metalness={0.8}
                    wireframe={true}
                />
            </mesh>
            <mesh ref={meshRef} scale={0.9}>
                <icosahedronGeometry args={[2, 0]} />
                <meshStandardMaterial color="#000" transparent opacity={0.2} />
            </mesh>
        </Float>
    );
}

export default function Hero() {
    return (
        <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0 z-0">
                <Canvas camera={{ position: [0, 0, 6], fov: 45 }}>
                    <ambientLight intensity={0.5} />
                    <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
                    <pointLight position={[-10, -10, -10]} />
                    <Core position={[0, 0, 0]} />
                    <Environment preset="city" />
                    <ContactShadows position={[0, -3, 0]} opacity={0.5} scale={10} blur={2.5} far={4} />
                </Canvas>
            </div>

            <div className="relative z-10 text-center pointer-events-none">
                <motion.h1
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className="text-7xl md:text-9xl font-bold tracking-tighter text-white mix-blend-difference"
                >
                    DEFY PHYSICS.
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 1 }}
                    className="mt-4 text-xl text-gray-400 font-mono"
                >
                    ZERO-G TRANSPORT SYSTEMS
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 1.5 }}
                    className="mt-12 pointer-events-auto"
                >
                    <button className="group relative px-8 py-4 bg-transparent border border-white/20 text-white font-mono uppercase tracking-widest hover:bg-white/10 transition-all duration-300 overflow-hidden">
                        <span className="relative z-10">Enter Zero-G</span>
                        <div className="absolute inset-0 bg-primary/20 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500" />
                    </button>
                </motion.div>
            </div>
        </section>
    );
}
