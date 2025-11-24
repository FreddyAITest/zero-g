"use client";

import Link from "next/link";
import Services from "@/components/sections/Services";
import Footer from "@/components/layout/Footer";
import { motion } from "framer-motion";

export default function ServicesPage() {
    return (
        <main className="min-h-screen bg-[#0a0a0a] text-white">
            {/* Simple Header */}
            <header className="fixed top-0 left-0 right-0 z-50 p-6 mix-blend-difference">
                <div className="container mx-auto flex justify-between items-center">
                    <Link href="/">
                        <span className="text-2xl font-bold tracking-tighter">ZERO-G</span>
                    </Link>
                    <Link href="/termin">
                        <button className="px-6 py-2 border border-white/20 text-sm font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-colors">
                            Termin
                        </button>
                    </Link>
                </div>
            </header>

            {/* Page Content */}
            <div className="pt-20">
                <Services />
            </div>

            <Footer />
        </main>
    );
}
