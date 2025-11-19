"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { useRef, useMemo } from "react";
import { motion } from "framer-motion";
import * as THREE from "three";
import { Environment, Float, Stars } from "@react-three/drei";

function DataNetwork(props: any) {
    const points = useRef<THREE.Points>(null!);

    // Generate random points for data visualization
    const particles = useMemo(() => {
        const temp = [];
        for (let i = 0; i < 2000; i++) {
            const x = (Math.random() - 0.5) * 10;
            const y = (Math.random() - 0.5) * 10;
            const z = (Math.random() - 0.5) * 10;
            temp.push(x, y, z);
        }
        return new Float32Array(temp);
    }, []);

    useFrame((state, delta) => {
        if (points.current) {
            points.current.rotation.x -= delta * 0.1;
            points.current.rotation.y -= delta * 0.15;
        }
    });

    return (
        <Float speed={1.5} rotationIntensity={0.5} floatIntensity={1}>
            <points ref={points} {...props}>
                <bufferGeometry>
                    <bufferAttribute
                        attach="attributes-position"
                        count={particles.length / 3}
                        array={particles}
                        itemSize={3}
                        args={[particles, 3]}
                    />
                </bufferGeometry>
                <pointsMaterial
                    size={0.03}
                    color="#00f3ff"
                    sizeAttenuation={true}
                    transparent
                    opacity={0.8}
                />
            </points>
            <mesh scale={3}>
                <icosahedronGeometry args={[1, 2]} />
                <meshStandardMaterial
                    color="#00f3ff"
                    wireframe
                    transparent
                    opacity={0.05}
                />
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
                    <DataNetwork />
                    <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
                    <Environment preset="city" />
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
