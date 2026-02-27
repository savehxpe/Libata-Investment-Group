"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import QuantumSeal from "./ui/QuantumSeal";
import { triggerHaptic } from "@/lib/hapticLogic";

export default function SplashLoader({ children }: { children: React.ReactNode }) {
    const [showSplash, setShowSplash] = useState<boolean | null>(null);

    useEffect(() => {
        const hasSeenSplash = sessionStorage.getItem("libata_splash_seen");
        if (hasSeenSplash) {
            setShowSplash(false);
            return;
        }

        setShowSplash(true);

        const timer = setTimeout(() => {
            triggerHaptic("SELECTION");
            setShowSplash(false);
            sessionStorage.setItem("libata_splash_seen", "true");
        }, 1200);

        return () => clearTimeout(timer);
    }, []);

    if (showSplash === null) {
        // Prevents UI flashing during hydration payload check
        return <div className="fixed inset-0 z-[1000] bg-[#050505] w-full h-[100dvh]"></div>;
    }

    return (
        <>
            <AnimatePresence>
                {showSplash && (
                    <motion.div
                        key="splash-loader"
                        initial={{ opacity: 1 }}
                        exit={{ opacity: 0, scale: 1.1 }}
                        transition={{ duration: 0.5, ease: "easeInOut" }}
                        className="fixed inset-0 z-[1000] bg-[#050505] flex items-center justify-center flex-col"
                        style={{
                            height: "100dvh",
                            paddingBottom: "env(safe-area-inset-bottom)"
                        }}
                    >
                        <QuantumSeal />
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.8, duration: 0.4 }}
                            className="mt-12 flex flex-col items-center text-center"
                        >
                            <h1 className="text-white text-3xl font-bold tracking-[0.2em] uppercase mb-2 drop-shadow-[0_0_15px_rgba(255,255,255,0.4)]">Libata</h1>
                            <h2 className="text-primary text-[11px] tracking-[0.4em] uppercase font-bold drop-shadow-[0_0_15px_rgba(0,242,255,0.6)]">Quantum System</h2>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

            <motion.div
                initial={showSplash ? { opacity: 0 } : false}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.2, ease: "easeOut" }} // Subtle 'FIELD MODE' fade-in
                className="w-full h-full"
            >
                {children}
            </motion.div>
        </>
    );
}
