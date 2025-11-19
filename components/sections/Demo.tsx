"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Activity, BarChart3, Zap, ShieldCheck } from "lucide-react";

export default function Demo() {
    const [activeTab, setActiveTab] = useState("predictive");
    const [dataPoints, setDataPoints] = useState<number[]>([]);

    // Simulate live data
    useEffect(() => {
        const interval = setInterval(() => {
            setDataPoints(prev => {
                const next = [...prev, Math.random() * 100];
                if (next.length > 20) next.shift();
                return next;
            });
        }, 500);
        return () => clearInterval(interval);
    }, []);

    return (
        <section className="py-32 bg-black relative overflow-hidden">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                    {/* Controls */}
                    <div>
                        <span className="text-primary font-mono text-sm tracking-widest uppercase block mb-4">Interactive Demo</span>
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
                            Experience the <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-500">ZERO-G Dashboard.</span>
                        </h2>
                        <p className="text-gray-400 mb-12 text-lg">
                            See how our core engine processes millions of data points in real-time to optimize your operations.
                        </p>

                        <div className="space-y-4">
                            {[
                                { id: "predictive", label: "Predictive Analytics", icon: Activity, desc: "Forecast anomalies before they happen." },
                                { id: "realtime", label: "Real-Time Monitoring", icon: BarChart3, desc: "Live tracking of all assets globally." },
                                { id: "security", label: "Quantum Security", icon: ShieldCheck, desc: "End-to-end encryption for sensitive data." }
                            ].map((item) => (
                                <button
                                    key={item.id}
                                    onClick={() => setActiveTab(item.id)}
                                    className={`w-full text-left p-6 rounded-xl border transition-all duration-300 flex items-start gap-4 ${activeTab === item.id
                                            ? "bg-white/10 border-primary/50 shadow-[0_0_30px_rgba(0,243,255,0.1)]"
                                            : "bg-transparent border-white/10 hover:bg-white/5"
                                        }`}
                                >
                                    <div className={`p-3 rounded-lg ${activeTab === item.id ? "bg-primary text-black" : "bg-white/10 text-white"}`}>
                                        <item.icon size={24} />
                                    </div>
                                    <div>
                                        <h3 className={`font-bold text-lg mb-1 ${activeTab === item.id ? "text-white" : "text-gray-300"}`}>{item.label}</h3>
                                        <p className="text-sm text-gray-500">{item.desc}</p>
                                    </div>
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Dashboard Visual */}
                    <div className="relative">
                        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-purple-500/20 blur-3xl opacity-20" />
                        <div className="relative bg-black/80 backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden shadow-2xl">
                            {/* Header */}
                            <div className="border-b border-white/10 p-4 flex justify-between items-center">
                                <div className="flex gap-2">
                                    <div className="w-3 h-3 rounded-full bg-red-500/50" />
                                    <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                                    <div className="w-3 h-3 rounded-full bg-green-500/50" />
                                </div>
                                <div className="text-xs font-mono text-gray-500">ZERO-G CORE v2.4.1</div>
                            </div>

                            {/* Main Content */}
                            <div className="p-8 h-[400px] flex flex-col">
                                <div className="flex justify-between items-end mb-8">
                                    <div>
                                        <div className="text-sm text-gray-500 font-mono mb-1">SYSTEM STATUS</div>
                                        <div className="text-2xl font-bold text-primary flex items-center gap-2">
                                            <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                                            OPTIMAL
                                        </div>
                                    </div>
                                    <div className="text-right">
                                        <div className="text-sm text-gray-500 font-mono mb-1">THROUGHPUT</div>
                                        <div className="text-2xl font-bold text-white">94.2 TB/s</div>
                                    </div>
                                </div>

                                {/* Dynamic Chart */}
                                <div className="flex-1 flex items-end gap-1 relative">
                                    {/* Grid Lines */}
                                    <div className="absolute inset-0 flex flex-col justify-between pointer-events-none">
                                        {[...Array(5)].map((_, i) => (
                                            <div key={i} className="w-full h-[1px] bg-white/5" />
                                        ))}
                                    </div>

                                    <AnimatePresence mode="popLayout">
                                        {dataPoints.map((val, i) => (
                                            <motion.div
                                                key={i}
                                                initial={{ height: 0, opacity: 0 }}
                                                animate={{ height: `${val}%`, opacity: 1 }}
                                                exit={{ opacity: 0 }}
                                                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                                className="flex-1 bg-gradient-to-t from-primary/20 to-primary rounded-t-sm min-w-[4px]"
                                            />
                                        ))}
                                    </AnimatePresence>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
