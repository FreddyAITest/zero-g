"use client";
"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { useRef } from "react";
import { motion } from "framer-motion";
import * as THREE from "three";
import { Environment, Float, ContactShadows } from "@react-three/drei";
import Link from "next/link";

function FloatingRim(props: any) {
    const meshRef = useRef<THREE.Group>(null!);

    useFrame((state, delta) => {
        if (meshRef.current) {
            meshRef.current.rotation.y += delta * 0.1;
            meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.2) * 0.1;
        }
    });

    return (
        <Float speed={1.5} rotationIntensity={0.2} floatIntensity={1}>
            <group ref={meshRef} {...props}>
                {/* Simplified Rim Geometry using Torus and Cylinders */}
                <mesh rotation={[Math.PI / 2, 0, 0]}>
                    <torusGeometry args={[2, 0.15, 16, 100]} />
                    <meshStandardMaterial color="#333" roughness={0.2} metalness={0.9} />
                </mesh>
                {/* Spokes */}
                {[0, 60, 120, 180, 240, 300].map((angle) => (
                    <mesh key={angle} rotation={[0, 0, (angle * Math.PI) / 180]}>
                        <boxGeometry args={[0.2, 3.8, 0.1]} />
                        <meshStandardMaterial color="#555" roughness={0.2} metalness={0.8} />
                    </mesh>
                ))}
                {/* Center Cap */}
                <mesh rotation={[Math.PI / 2, 0, 0]}>
                    <cylinderGeometry args={[0.4, 0.4, 0.2, 32]} />
                    <meshStandardMaterial color="#111" roughness={0.5} metalness={0.5} />
                </mesh>
            </group>
        </Float>
    );
}

export default function Hero() {
    return (
        <section className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-[#0a0a0a]">
            <div className="absolute inset-0 z-0 opacity-60">
                <Canvas camera={{ position: [0, 0, 6], fov: 40 }}>
                    <ambientLight intensity={1} />
                    <spotLight position={[10, 10, 10]} angle={0.5} penumbra={1} intensity={2} />
                    <pointLight position={[-10, -5, -5]} intensity={1} color="#444" />
                    <FloatingRim position={[2, 0, 0]} />
                    <Environment preset="studio" />
                    <ContactShadows position={[0, -3, 0]} opacity={0.4} scale={10} blur={2} far={4} />
                </Canvas>
            </div>

            <div className="container mx-auto px-4 relative z-10 flex flex-col justify-center h-full">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1 }}
                    className="max-w-3xl"
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
                        <button className="px-8 py-4 border border-white/20 text-white font-bold uppercase tracking-widest hover:bg-white/5 transition-colors">
                            Unsere Services
                        </button>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
