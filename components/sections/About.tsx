"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function About() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"],
    });

    const y1 = useTransform(scrollYProgress, [0, 1], [100, -100]);
    const y2 = useTransform(scrollYProgress, [0, 1], [200, -200]);
    const y3 = useTransform(scrollYProgress, [0, 1], [50, -50]);
    const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

    return (
        <section ref={containerRef} className="min-h-screen bg-black relative py-32 overflow-hidden">
            <div className="container mx-auto px-4 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

                    {/* Text Content */}
                    <motion.div style={{ y: y3, opacity }}>
                        <h2 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight">
                            DATA <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-500">
                                UNBOUND.
                            </span>
                        </h2>
                        <p className="text-xl text-gray-400 font-mono leading-relaxed max-w-lg">
                            Traditional analytics are grounded by limitations. We break the gravitational pull of legacy systems to reveal insights that exist only in the abstract.
                        </p>

                        <div className="mt-12 grid grid-cols-2 gap-8">
                            <div>
                                <h3 className="text-3xl font-bold text-white mb-2">99.9%</h3>
                                <p className="text-sm text-gray-500 font-mono uppercase tracking-wider">Prediction Accuracy</p>
                            </div>
                            <div>
                                <h3 className="text-3xl font-bold text-white mb-2">0.00s</h3>
                                <p className="text-sm text-gray-500 font-mono uppercase tracking-wider">Latency</p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Floating Elements (Visuals) */}
                    <div className="relative h-[600px] w-full">
                        {/* Card 1 */}
                        <motion.div
                            style={{ y: y1 }}
                            className="absolute top-0 right-0 w-64 h-80 bg-white/5 backdrop-blur-lg border border-white/10 rounded-xl p-6 z-20"
                        >
                            <div className="h-2 w-20 bg-primary/50 rounded-full mb-4" />
                            <div className="space-y-2">
                                <div className="h-1 w-full bg-white/10 rounded-full" />
                                <div className="h-1 w-3/4 bg-white/10 rounded-full" />
                                <div className="h-1 w-1/2 bg-white/10 rounded-full" />
                            </div>
                            <div className="mt-8 h-32 w-full bg-gradient-to-t from-primary/20 to-transparent rounded-lg border border-primary/20" />
                        </motion.div>

                        {/* Card 2 */}
                        <motion.div
                            style={{ y: y2 }}
                            className="absolute bottom-20 left-10 w-72 h-64 bg-secondary/80 backdrop-blur-md border border-white/10 rounded-xl p-6 z-10"
                        >
                            <div className="flex items-center justify-between mb-6">
                                <div className="h-8 w-8 rounded-full border border-white/20 flex items-center justify-center">
                                    <div className="h-2 w-2 bg-green-500 rounded-full animate-pulse" />
                                </div>
                                <span className="text-xs font-mono text-gray-400">LIVE STREAM</span>
                            </div>
                            <div className="grid grid-cols-4 gap-2 h-20 items-end">
                                {[40, 70, 30, 85, 50, 65, 45, 90].map((h, i) => (
                                    <div key={i} className="w-full bg-white/20 rounded-sm" style={{ height: `${h}%` }} />
                                ))}
                            </div>
                        </motion.div>
                    </div>

                </div>
            </div>

            {/* Background Grid */}
            <div className="absolute inset-0 z-0 opacity-20"
                style={{ backgroundImage: 'linear-gradient(#333 1px, transparent 1px), linear-gradient(90deg, #333 1px, transparent 1px)', backgroundSize: '50px 50px' }}
            />
        </section>
    );
}
