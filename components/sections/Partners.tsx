"use client";

import { motion } from "framer-motion";

const partners = [
    "NEXUS DYNAMICS", "CYBERDYNE", "WEYLAND CORP", "TYRELL", "MASSIVE DYNAMIC", "OSCORP", "STARK IND", "UMBRELLA"
];

export default function Partners() {
    return (
        <section className="py-24 bg-black border-y border-white/5 overflow-hidden relative z-20">
            <div className="container mx-auto px-4 mb-12 text-center">
                <p className="text-xs font-mono text-primary/60 tracking-[0.3em] uppercase">Trusted by Industry Leaders</p>
            </div>

            <div className="flex relative overflow-hidden max-w-[100vw]">
                <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none" />
                <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none" />

                <motion.div
                    className="flex gap-24 whitespace-nowrap"
                    animate={{ x: ["0%", "-50%"] }}
                    transition={{ repeat: Infinity, ease: "linear", duration: 30 }}
                >
                    {[...partners, ...partners].map((partner, i) => (
                        <div key={i} className="flex items-center gap-4 group cursor-default">
                            <div className="w-10 h-10 border border-white/10 bg-white/5 rounded-sm flex items-center justify-center group-hover:border-primary/50 group-hover:bg-primary/10 transition-colors duration-500">
                                <div className="w-2 h-2 bg-white/20 rounded-full group-hover:bg-primary transition-colors duration-500" />
                            </div>
                            <span className="text-2xl font-bold font-mono text-white/40 group-hover:text-white transition-colors duration-500">{partner}</span>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
