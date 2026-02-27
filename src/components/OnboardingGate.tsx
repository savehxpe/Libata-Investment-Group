"use client";

import React, { useState, useEffect } from "react";
import Onboarding from "./Onboarding";
import { motion, AnimatePresence } from "framer-motion";

export default function OnboardingGate({ children }: { children: React.ReactNode }) {
    const [isCertified, setIsCertified] = useState<boolean | null>(null); // null means loading initial state
    const [showFlash, setShowFlash] = useState(false);

    useEffect(() => {
        const certified = localStorage.getItem("libata_certified");
        if (certified === "true") {
            setIsCertified(true);
        } else {
            setIsCertified(false);
        }
    }, []);

    const handleComplete = () => {
        localStorage.setItem("libata_certified", "true");

        // Trigger Success Flash Animation
        setShowFlash(true);
        setTimeout(() => {
            setShowFlash(false);
            setIsCertified(true);
        }, 1000);
    };

    if (isCertified === null) return null; // Avoid hydration mismatch or flash

    return (
        <>
            <div className={`transition-all duration-700 w-full h-full ${!isCertified ? "blur-xl pointer-events-none scale-[0.98] opacity-50" : ""}`}>
                {children}
            </div>

            <AnimatePresence>
                {!isCertified && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 flex items-center justify-center p-4"
                    >
                        <Onboarding onComplete={handleComplete} />
                    </motion.div>
                )}
            </AnimatePresence>

            <AnimatePresence>
                {showFlash && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[200] bg-primary pointer-events-none mix-blend-screen"
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    />
                )}
            </AnimatePresence>
        </>
    );
}
