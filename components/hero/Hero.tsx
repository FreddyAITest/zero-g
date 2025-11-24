"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { useRef } from "react";
import { motion } from "framer-motion";
import * as THREE from "three";
import { Environment, Float, ContactShadows } from "@react-three/drei";
import Link from "next/link";

function FloatingCar(props: any) {
    const groupRef = useRef<THREE.Group>(null!);

    useFrame((state, delta) => {
        if (groupRef.current) {
            groupRef.current.rotation.y += delta * 0.2;
            groupRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.3) * 0.05;
        }
    });

    return (
        <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
            <group ref={groupRef} {...props}>
                {/* Car Body - Main Chassis */}
                <mesh position={[0, 0.5, 0]}>
                    <boxGeometry args={[4.5, 0.8, 1.8]} />
                    <meshStandardMaterial color="#1a1a1a" roughness={0.2} metalness={0.8} />
                </mesh>

                {/* Cabin / Roof */}
                <mesh position={[-0.2, 1.1, 0]}>
                    <boxGeometry args={[2.5, 0.7, 1.6]} />
                    <meshStandardMaterial color="#0a0a0a" roughness={0.1} metalness={0.9} />
                </mesh>

                {/* Windshield (Visual) */}
                <mesh position={[1.1, 1.1, 0]} rotation={[0, 0, -0.5]}>
                    <boxGeometry args={[0.1, 0.75, 1.5]} />
                    <meshStandardMaterial color="#333" roughness={0.1} metalness={1} transparent opacity={0.9} />
                </mesh>

                {/* Wheels */}
                {[
                    [1.5, 0, 0.9],  // Front Left
                    [1.5, 0, -0.9], // Front Right
                    [-1.5, 0, 0.9], // Rear Left
                    [-1.5, 0, -0.9] // Rear Right
                ].map((pos, i) => (
                    <group key={i} position={pos as [number, number, number]}>
                        <mesh rotation={[Math.PI / 2, 0, 0]}>
                            <cylinderGeometry args={[0.4, 0.4, 0.3, 32]} />
                            <meshStandardMaterial color="#333" roughness={0.5} metalness={0.5} />
                        </mesh>
                        {/* Rim Detail */}
                        <mesh rotation={[Math.PI / 2, 0, 0]}>
                            <torusGeometry args={[0.25, 0.05, 16, 32]} />
                            <meshStandardMaterial color="#fff" emissive="#fff" emissiveIntensity={0.5} />
                        </mesh>
                    </group>
                ))}

                {/* Headlights */}
                <mesh position={[2.26, 0.5, 0.6]}>
                    <boxGeometry args={[0.1, 0.2, 0.4]} />
                    <meshStandardMaterial color="#fff" emissive="#fff" emissiveIntensity={2} />
                </mesh>
                <mesh position={[2.26, 0.5, -0.6]}>
                    <boxGeometry args={[0.1, 0.2, 0.4]} />
                    <meshStandardMaterial color="#fff" emissive="#fff" emissiveIntensity={2} />
                </mesh>

                {/* Taillights */}
                <mesh position={[-2.26, 0.6, 0]}>
                    <boxGeometry args={[0.1, 0.15, 1.6]} />
                    <meshStandardMaterial color="#f00" emissive="#f00" emissiveIntensity={2} />
                </mesh>
            </group>
        </Float>
    );
}

export default function Hero() {
    return (
        <section className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-[#0a0a0a]">
            <div className="absolute inset-0 z-0 opacity-80">
                <Canvas camera={{ position: [0, 2, 8], fov: 45 }}>
                    <ambientLight intensity={0.5} />
                    <spotLight position={[10, 10, 10]} angle={0.5} penumbra={1} intensity={2} />
                    <pointLight position={[-10, -5, -5]} intensity={1} color="#444" />
                    <FloatingCar position={[0, -0.5, 0]} rotation={[0, Math.PI / 4, 0]} />
                    <Environment preset="city" />
                    <ContactShadows position={[0, -2, 0]} opacity={0.5} scale={15} blur={2.5} far={5} />
                </Canvas>
            </div>

            <div className="container mx-auto px-4 relative z-10 flex flex-col justify-center h-full pointer-events-none">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1 }}
                    className="max-w-3xl pointer-events-auto"
                >
                    <div className="flex items-center gap-4 mb-6">
                        <div className="h-[1px] w-12 bg-white/50" />
                        <span className="text-white/70 text-sm font-mono tracking-[0.3em] uppercase">Meisterwerkstatt</span>
                    </div>

                    <h1 className="text-6xl md:text-8xl font-bold text-white mb-8 leading-tight tracking-tighter">
                        ZERO-G <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">PERFORMANCE.</span>
                    </h1>

                    <p className="text-xl text-gray-400 max-w-lg leading-relaxed mb-12 font-light">
                        Wir heben Ihr Fahrzeug auf das nächste Level.
                        Präzision, Leidenschaft und modernste Technik für Ihr Automobil.
                    </p>

                    <div className="flex gap-6">
                        <Link href="/termin">
                            <button className="px-8 py-4 bg-white text-black font-bold uppercase tracking-widest hover:bg-gray-200 transition-colors">
                                Termin Buchen
                            </button>
                        </Link>
                        <Link href="/services">
                            <button className="px-8 py-4 border border-white/20 text-white font-bold uppercase tracking-widest hover:bg-white/5 transition-colors">
                                Unsere Services
                            </button>
                        </Link>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
