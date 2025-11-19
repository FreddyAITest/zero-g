"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const projects = [
    {
        title: "Automotive AI Supply Chain",
        client: "Leading German Automaker",
        category: "Predictive Logistics",
        description: "Reduced supply chain latency by 40% using our predictive gravity models.",
        stats: ["40% Faster", "99.9% Uptime"],
        image: "linear-gradient(to bottom right, #1a1a1a, #0f172a)" // Placeholder gradient
    },
    {
        title: "Hamburg Port Optimization",
        client: "Global Logistics Giant",
        category: "Autonomous Routing",
        description: "Real-time route optimization for 10,000+ containers daily.",
        stats: ["15% Cost Reduction", "Zero Delays"],
        image: "linear-gradient(to bottom right, #1a1a1a, #312e81)"
    },
    {
        title: "Berlin Smart Grid",
        client: "Energy Provider",
        category: "Energy Analytics",
        description: "Balancing energy loads with millisecond precision using ZERO-G core.",
        stats: ["2.5GW Managed", "Carbon Neutral"],
        image: "linear-gradient(to bottom right, #1a1a1a, #064e3b)"
    }
];

export default function Projects() {
    return (
        <section className="py-32 bg-black text-white relative overflow-hidden">
            <div className="container mx-auto px-4">
                <div className="mb-20">
                    <motion.span
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-primary font-mono text-sm tracking-widest uppercase block mb-4"
                    >
                        Selected Works
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-6xl font-bold max-w-3xl"
                    >
                        Engineering the future of <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-500">German Industry.</span>
                    </motion.h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            className="group relative bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:border-primary/50 transition-colors duration-500"
                        >
                            {/* Image Placeholder */}
                            <div
                                className="h-64 w-full relative overflow-hidden"
                                style={{ background: project.image }}
                            >
                                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500" />
                            </div>

                            <div className="p-8">
                                <div className="flex justify-between items-start mb-6">
                                    <div>
                                        <p className="text-xs font-mono text-gray-400 mb-2">{project.client}</p>
                                        <h3 className="text-2xl font-bold group-hover:text-primary transition-colors duration-300">{project.title}</h3>
                                    </div>
                                    <ArrowUpRight className="text-white/20 group-hover:text-primary group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300" />
                                </div>

                                <p className="text-gray-400 mb-8 line-clamp-3">{project.description}</p>

                                <div className="flex gap-4">
                                    {project.stats.map((stat, i) => (
                                        <span key={i} className="text-xs font-mono py-1 px-2 rounded bg-white/5 border border-white/10 text-gray-300">
                                            {stat}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
