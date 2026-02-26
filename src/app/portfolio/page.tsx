"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import AssetViewer from "@/components/3d/AssetViewer";
import { triggerHaptic } from "@/lib/hapticLogic";

type ProjectType = "agriculture" | "real_estate" | null;

// Data derived strictly from the .context/ Libata Pitch Deck
const projects = [
    {
        id: 'agri-01',
        title: 'Maseru North Agri-Hub',
        category: 'Commercial Agriculture',
        status: 'Phase 1: Acquisition',
        description: 'Scalable poultry and crop production hub targeting AfCFTA export markets.',
        valuation: 'M 2,500,000',
        yield: '12-15% Est. APR',
        modelPath: '/assets/A-futuristic-minimalist-architec-23bqrb-211017489.glb', // Use the existing asset as a placeholder
        type: 'agriculture' as ProjectType
    },
    {
        id: 'prop-01',
        title: 'CBD Commercial Tower',
        category: 'Real Estate',
        status: 'Phase 2: Development',
        description: 'Grade-A office space and secure residential units in central Maseru.',
        valuation: 'M 5,800,000',
        yield: '9.2% Rental Yield',
        modelPath: '/assets/A-futuristic-minimalist-architec-23bqrb-211017489.glb',
        type: 'real_estate' as ProjectType
    }
];

export default function PortfolioPage() {
    const [activeModal, setActiveModal] = useState<ProjectType>(null);

    const handleDetailsClick = (type: ProjectType) => {
        triggerHaptic('SELECTION');
        setActiveModal(type);
    };

    return (
        <div className="flex flex-col gap-6 h-full pb-8">
            <header className="glass-panel p-6 rounded-xl border border-border-chrome/20">
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="text-[10px] text-primary tracking-[0.3em] uppercase mb-2 font-bold"
                >
                    Asset Inventory
                </motion.p>
                <h1 className="text-3xl font-bold text-white tracking-tighter uppercase">Portfolio</h1>
            </header>

            <div className="flex flex-col gap-8">
                {projects.map((project) => (
                    <motion.div
                        key={project.id}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="group relative bg-primary/5 border-[0.5px] border-primary/20 rounded-3xl overflow-hidden backdrop-blur-xl"
                    >
                        {/* 3D Model Stage - Mobile Portrait Optimized */}
                        <div className="relative h-[300px] w-full bg-gradient-to-b from-transparent to-[#0a1111]">
                            {/* The 3D Render Component */}
                            <div className="absolute inset-0">
                                <AssetViewer url={project.modelPath} glowIntensity={0} />
                            </div>

                            <div className="absolute top-4 left-4 z-10 pointer-events-none">
                                <span className="px-3 py-1 bg-primary/10 border border-primary/30 rounded-full text-[9px] text-primary uppercase font-bold backdrop-blur">
                                    {project.status}
                                </span>
                            </div>
                        </div>

                        {/* Asset Details */}
                        <div className="p-6 relative z-10 bg-black/40 border-t border-primary/20">
                            <h2 className="text-xl font-bold text-white mb-1 uppercase tracking-tight">{project.title}</h2>
                            <p className="text-[10px] text-slate-400 uppercase mb-4 tracking-widest font-bold">{project.category}</p>

                            <p className="text-sm text-slate-300 leading-relaxed mb-6">
                                {project.description}
                            </p>

                            {/* Technical Matrix */}
                            <div className="grid grid-cols-2 gap-4 mb-6 border-y border-white/10 py-4">
                                <div>
                                    <p className="text-[9px] text-primary/70 font-bold uppercase tracking-widest">Valuation</p>
                                    <p className="font-mono text-white mt-1 text-sm">{project.valuation}</p>
                                </div>
                                <div className="border-l border-white/10 pl-4">
                                    <p className="text-[9px] text-primary/70 font-bold uppercase tracking-widest">Projected Yield</p>
                                    <p className="font-mono text-white mt-1 text-sm">{project.yield}</p>
                                </div>
                            </div>

                            <motion.button
                                whileTap={{ scale: 0.95 }}
                                onClick={() => handleDetailsClick(project.type)}
                                className="w-full py-4 bg-primary/10 hover:bg-primary/20 border border-primary/30 rounded-xl text-[10px] text-white uppercase font-bold tracking-widest transition-all focus:outline-none min-h-[48px]"
                            >
                                Expand Technical Data
                            </motion.button>
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* Modal */}
            <AnimatePresence>
                {activeModal && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
                        onClick={() => setActiveModal(null)}
                    >
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            className="w-full max-w-lg glass-panel rounded-xl border border-primary/50 p-6 shadow-[0_0_30px_rgba(0,255,255,0.2)]"
                            onClick={e => e.stopPropagation()}
                        >
                            <div className="flex justify-between items-center mb-6">
                                <h2 className="text-2xl font-bold text-white neon-text">Project Breakdown</h2>
                                <button
                                    className="text-slate-400 hover:text-white transition-colors"
                                    onClick={() => setActiveModal(null)}
                                >
                                    <span className="material-symbols-outlined">close</span>
                                </button>
                            </div>
                            <div className="space-y-4">
                                <div className="p-4 bg-black/40 rounded-lg border border-white/5">
                                    <h4 className="text-primary font-bold mb-2">Technical Analysis</h4>
                                    <p className="text-sm text-slate-300">Detailed feasibility studies indicate strong baseline fundamentals. The site geometry supports a scalable expansion strategy within the 36-month roadmap parameters.</p>
                                </div>
                                <div className="p-4 bg-black/40 rounded-lg border border-white/5">
                                    <h4 className="text-accent-green font-bold mb-2">Financial Projections</h4>
                                    <ul className="text-sm text-slate-300 space-y-2 list-disc list-inside">
                                        <li>Y1 Yield: Break-even Phase</li>
                                        <li>Y2 Yield: 8% Baseline</li>
                                        <li>Y3 Yield: Target 15-22%</li>
                                    </ul>
                                </div>
                            </div>
                            <motion.button
                                whileTap={{ scale: 0.95 }}
                                className="w-full mt-6 bg-primary/20 hover:bg-primary/40 border border-primary text-primary font-bold py-3 rounded-lg transition-all min-h-[48px]"
                                onClick={() => {
                                    triggerHaptic('SELECTION');
                                    setActiveModal(null);
                                }}
                            >
                                Close Breakdown
                            </motion.button>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
