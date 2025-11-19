"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Preloader() {
    const [count, setCount] = useState(10);
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        const timer = setInterval(() => {
            setCount((prev) => {
                if (prev === 0) {
                    clearInterval(timer);
                    setTimeout(() => setIsVisible(false), 500);
                    return 0;
                }
                return prev - 1;
            });
        }, 200); // Fast countdown

        return () => clearInterval(timer);
    }, []);

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black text-white"
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0, y: -1000 }}
                    transition={{ duration: 0.8, ease: "easeInOut" }}
                >
                    <div className="text-center">
                        <motion.h1
                            key={count}
                            initial={{ opacity: 0, scale: 1.5 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.5 }}
                            className="text-9xl font-bold font-mono text-primary"
                        >
                            T-{count}
                        </motion.h1>
                        <p className="mt-4 text-xl font-sans tracking-widest text-gray-400">
                            INITIALIZING ZERO-G SYSTEMS
                        </p>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
