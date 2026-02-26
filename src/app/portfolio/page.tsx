"use client";

import React, { useState } from "react";
import AssetViewer from "@/components/3d/AssetViewer";

type ProjectType = "agriculture" | "real_estate" | null;

export default function PortfolioPage() {
    const [activeModal, setActiveModal] = useState<ProjectType>(null);

    const projects = [
        {
            id: "agri-phase-1",
            title: "Commercial Agriculture Phase 1",
            budget: "M 10.5m",
            roi: "15%",
            status: "Active",
            type: "agriculture" as ProjectType,
            desc: "An intensive crop and livestock program designed to deliver sustainable yields with a 15% projected ROI."
        },
        {
            id: "real-estate-hub",
            title: "Real Estate Hub Beta",
            budget: "M 25m",
            roi: "22%",
            status: "Planning",
            type: "real_estate" as ProjectType,
            desc: "Strategic land acquisition and commercial development forming the foundational nexus of the Libata portfolio."
        }
    ];

    return (
        <div className="flex flex-col gap-6 h-full pb-8">
            <div className="glass-panel rounded-xl border border-border-chrome/20 p-6 flex justify-between items-center">
                <div>
                    <h1 className="text-2xl font-bold text-white mb-2">Asset Portfolio</h1>
                    <p className="text-slate-400 text-sm">Interactive overview of active and planned investments.</p>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {projects.map((proj) => (
                    <div
                        key={proj.id}
                        className="glass-panel p-6 rounded-xl border border-white/5 hover:border-primary/50 transition-all duration-300 group cursor-pointer"
                        onClick={() => setActiveModal(proj.type)}
                    >
                        <div className="flex justify-between items-start mb-4">
                            <span className={`material-symbols-outlined text-4xl ${proj.type === 'agriculture' ? 'text-accent-green' : 'text-primary'}`}>
                                {proj.type === 'agriculture' ? 'agriculture' : 'apartment'}
                            </span>
                            <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-1 rounded border border-white/20 bg-black/40 text-white">
                                {proj.status}
                            </span>
                        </div>
                        <h3 className="text-xl font-bold text-white leading-tight mb-2 group-hover:text-primary transition-colors">{proj.title}</h3>
                        <p className="text-slate-400 text-sm mb-4 line-clamp-2">{proj.desc}</p>

                        <div className="flex gap-4 border-t border-white/10 pt-4">
                            <div className="flex flex-col">
                                <span className="text-[10px] uppercase text-slate-500 font-bold">Budget</span>
                                <span className="text-sm font-mono text-white">{proj.budget}</span>
                            </div>
                            <div className="flex flex-col border-l border-white/10 pl-4">
                                <span className="text-[10px] uppercase text-slate-500 font-bold">Proj. ROI</span>
                                <span className="text-sm font-mono text-accent-green">{proj.roi}</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div
                className="glass-panel rounded-xl border border-border-chrome/20 h-[500px] relative overflow-hidden group cursor-pointer mt-4"
                onClick={() => setActiveModal("agriculture")}
            >
                <div className="absolute top-6 left-6 z-20 pointer-events-none">
                    <h3 className="text-xl font-bold text-white mb-1 drop-shadow-lg flex items-center gap-2">
                        <span className="material-symbols-outlined text-primary">3d_rotation</span>
                        Interactive Core Hub Model
                    </h3>
                    <p className="text-primary text-sm font-mono bg-black/50 px-2 py-1 rounded inline-block">Click to view project details</p>
                </div>
                <AssetViewer url="/assets/A-futuristic-minimalist-architec-23bqrb-211017489.glb" glowIntensity={0} />
            </div>

            {/* Modal */}
            {activeModal && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm" onClick={() => setActiveModal(null)}>
                    <div className="w-full max-w-lg glass-panel rounded-xl border border-primary/50 p-6 shadow-[0_0_30px_rgba(0,255,255,0.2)]" onClick={e => e.stopPropagation()}>
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
                        <button className="w-full mt-6 bg-primary/20 hover:bg-primary/40 border border-primary text-primary font-bold py-3 rounded-lg transition-all" onClick={() => setActiveModal(null)}>
                            Close Breakdown
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}
