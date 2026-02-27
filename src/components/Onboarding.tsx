"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { triggerHaptic } from '@/lib/hapticLogic';

const slides = [
    {
        title: "The M10K Rule",
        question: "What is the minimum annual contribution to maintain Active status?",
        options: ["M 5,000", "M 10,000", "M 15,000"],
        correct: 1,
        context: "Reference: Libata Constitution Section 4.2"
    },
    {
        title: "Phase Strategy",
        question: "Which phase focuses on AfCFTA export market entry?",
        options: ["Phase 1", "Phase 2", "Phase 3"],
        correct: 0,
        context: "Reference: Strategic Roadmap 2026"
    }
];

export default function Onboarding({ onComplete }: { onComplete: () => void }) {
    const [currentStep, setCurrentStep] = useState(0);
    const [selected, setSelected] = useState<number | null>(null);

    const handleOptionClick = (idx: number) => {
        setSelected(idx);
        triggerHaptic('SELECTION');

        if (idx === slides[currentStep].correct) {
            setTimeout(() => {
                if (currentStep < slides.length - 1) {
                    setCurrentStep(currentStep + 1);
                    setSelected(null);
                } else {
                    triggerHaptic('SUCCESS');
                    onComplete();
                }
            }, 800);
        } else {
            triggerHaptic('WARNING');
        }
    };

    return (
        <div className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-3xl flex flex-col p-8 font-space-grotesk">
            <div className="flex justify-between items-center mb-12">
                <span className="text-[10px] text-primary tracking-[0.3em] uppercase font-bold">Member Certification</span>
                <span className="text-xs font-mono text-white/50">{currentStep + 1} / {slides.length}</span>
            </div>

            <AnimatePresence mode="wait">
                <motion.div
                    key={currentStep}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 1.1 }}
                    className="flex-1 flex flex-col justify-center"
                >
                    <h2 className="text-3xl font-bold neon-text uppercase mb-4 tracking-tighter">
                        {slides[currentStep].title}
                    </h2>
                    <p className="text-slate-300 text-lg mb-10 leading-relaxed font-medium">
                        {slides[currentStep].question}
                    </p>

                    <div className="space-y-4">
                        {slides[currentStep].options.map((opt, i) => (
                            <motion.button
                                whileTap={{ scale: 0.98 }}
                                key={i}
                                onClick={() => handleOptionClick(i)}
                                className={`w-full min-h-[64px] p-6 rounded-2xl border text-left transition-all ${selected === i
                                        ? (i === slides[currentStep].correct ? 'border-primary bg-primary/10 text-primary shadow-[0_0_20px_rgba(0,255,255,0.3)]' : 'border-red-500 bg-red-500/10 text-red-500 shadow-[0_0_20px_rgba(239,68,68,0.3)]')
                                        : 'border-white/10 bg-white/5 text-slate-400 hover:border-primary/50'
                                    }`}
                            >
                                <span className="text-sm font-bold uppercase tracking-widest">{opt}</span>
                            </motion.button>
                        ))}
                    </div>
                </motion.div>
            </AnimatePresence>

            <p className="mt-8 text-[9px] text-primary/40 uppercase text-center tracking-widest leading-loose">
                {slides[currentStep].context}
            </p>
        </div>
    );
}
