"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { useRef } from "react";
import { motion } from "framer-motion";
import * as THREE from "three";
import { Environment, Float, ContactShadows, Stars } from "@react-three/drei";

function Core(props: any) {
    const meshRef = useRef<THREE.Mesh>(null!);

    useFrame((state, delta) => {
        if (meshRef.current) {
            meshRef.current.rotation.x += delta * 0.2;
            meshRef.current.rotation.y += delta * 0.3;
        }
    });

    return (
        <Float speed={2} rotationIntensity={1} floatIntensity={2}>
            <mesh {...props} ref={meshRef}>
                <icosahedronGeometry args={[2, 0]} />
                <meshStandardMaterial
                    color="#2a2a2a"
                    roughness={0.1}
                    metalness={0.8}
                    wireframe={true}
                />
            </mesh>
            <mesh ref={meshRef} scale={0.9}>
                <icosahedronGeometry args={[2, 0]} />
                <meshStandardMaterial color="#00f3ff" transparent opacity={0.1} />
            </mesh>
        </Float>
    );
}

export default function Hero() {
    return (
        <section className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-black">
            <div className="absolute inset-0 z-0">
                <Canvas camera={{ position: [0, 0, 6], fov: 45 }}>
                    <ambientLight intensity={0.5} />
                    <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
                    <pointLight position={[-10, -10, -10]} />
                    <Core position={[0, 0, 0]} />
                    <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
                    <Environment preset="city" />
                    <ContactShadows position={[0, -3, 0]} opacity={0.5} scale={10} blur={2.5} far={4} />
                </Canvas>
            </div>

            <div className="relative z-10 text-center pointer-events-none px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="inline-block mb-4 px-3 py-1 border border-primary/30 rounded-full bg-primary/10 backdrop-blur-md"
                >
                    <span className="text-primary text-xs font-mono tracking-widest">NEXT GEN DATA INTELLIGENCE</span>
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.2 }}
                    className="text-6xl md:text-8xl font-bold tracking-tighter text-white mix-blend-difference"
                >
                    DECODE <br /> THE FUTURE.
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.6 }}
                    className="mt-6 text-lg md:text-xl text-gray-400 font-mono max-w-2xl mx-auto"
                >
                    Advanced analytics and predictive modeling for the enterprise.
                    <br />Turn chaos into clarity with ZERO-G.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 1 }}
                    className="mt-12 pointer-events-auto"
                >
                    <button className="group relative px-8 py-4 bg-white text-black font-mono font-bold uppercase tracking-widest hover:bg-primary hover:text-black transition-all duration-300">
                        <span className="relative z-10">Analyze Data</span>
                    </button>
                </motion.div>
            </div>
        </section>
    );
}
