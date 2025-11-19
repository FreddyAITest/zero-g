"use client";

import { motion } from "framer-motion";
import { Wrench, Disc, Gauge, Zap, Car, ShieldCheck } from "lucide-react";

const services = [
    {
        icon: Car,
        title: "Inspektion & Wartung",
        description: "Herstellervorgaben-konforme Inspektion für alle Marken. Erhalt der Herstellergarantie.",
    },
    {
        icon: Disc,
        title: "Bremsenservice",
        description: "Präzisions-Bremsanlagen, Beläge und Scheiben für maximale Sicherheit und Performance.",
    },
    {
        icon: Gauge,
        title: "Motordiagnose",
        description: "Modernste Fehlerdiagnose und Motoroptimierung für effiziente Leistung.",
    },
    {
        icon: Wrench,
        title: "Unfallinstandsetzung",
        description: "Fachgerechte Reparatur und Lackierung. Wir bringen Ihr Fahrzeug in den Neuzustand.",
    },
    {
        icon: Zap,
        title: "E-Mobilität Service",
        description: "Zertifizierter Hochvolt-Service für Elektro- und Hybridfahrzeuge.",
    },
    {
        icon: ShieldCheck,
        title: "HU / AU",
        description: "Tägliche Haupt- und Abgasuntersuchung direkt bei uns im Haus.",
    }
];

export default function Services() {
    return (
        <section className="py-32 bg-[#0a0a0a] text-white relative z-10">
            <div className="container mx-auto px-4">
                <div className="mb-20 text-center">
                    <motion.span
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-gray-500 font-mono text-sm tracking-widest uppercase block mb-4"
                    >
                        Unsere Expertise
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-5xl font-bold"
                    >
                        Full-Service für <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-600">Höchste Ansprüche.</span>
                    </motion.h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group p-8 bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/30 transition-all duration-500 rounded-sm"
                        >
                            <div className="mb-6 p-4 bg-white/5 w-fit rounded-sm group-hover:bg-white group-hover:text-black transition-colors duration-500">
                                <service.icon size={32} strokeWidth={1.5} />
                            </div>
                            <h3 className="text-xl font-bold mb-4 group-hover:translate-x-2 transition-transform duration-300">{service.title}</h3>
                            <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors">{service.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
