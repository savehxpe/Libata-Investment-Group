"use client";

import React, { useState } from "react";
import AssetViewer from "@/components/3d/AssetViewer";
import { useMember } from "@/context/MemberContext";
import { calculateVotingWeight, TOTAL_WAR_CHEST_TARGET } from "@/lib/equityLogic";

export default function ProposalsPage() {
    const { member } = useMember();

    // Starting dummy states for the proposal
    const [totalYesWeight, setTotalYesWeight] = useState(12500000); // M 12.5m
    const [totalNoWeight, setTotalNoWeight] = useState(2000000);    // M 2.0m
    const [hasVoted, setHasVoted] = useState(false);

    // Voting weight of current active member
    const userVoteWeight = member.annualCommitment;
    const userVotePercentage = calculateVotingWeight(member.annualCommitment, TOTAL_WAR_CHEST_TARGET);

    const totalVotes = totalYesWeight + totalNoWeight;
    const yesPercentage = ((totalYesWeight / totalVotes) * 100).toFixed(1);
    const noPercentage = ((totalNoWeight / totalVotes) * 100).toFixed(1);

    // 3D model reacts to the Yes vote success rate
    const glowIntensity = (totalYesWeight / TOTAL_WAR_CHEST_TARGET) * 10;

    const handleVote = (type: "yes" | "no") => {
        if (hasVoted) return;

        if (type === "yes") {
            setTotalYesWeight(prev => prev + userVoteWeight);
        } else {
            setTotalNoWeight(prev => prev + userVoteWeight);
        }
        setHasVoted(true);
    };

    return (
        <div className="flex flex-col h-full gap-6 pb-8">
            <div className="glass-panel p-6 rounded-xl border border-border-chrome/20 flex justify-between items-center">
                <div>
                    <h1 className="text-2xl font-bold text-white mb-2">Proposal Voting Engine</h1>
                    <p className="text-slate-400 text-sm">Contribute your weighted voting rights to active consortium proposals.</p>
                </div>
                <div className="text-right">
                    <p className="text-[10px] uppercase font-bold text-slate-500">Your Voting Power</p>
                    <p className="text-xl font-mono text-primary font-bold">{userVotePercentage}% <span className="text-xs text-white bg-white/10 px-2 py-0.5 rounded ml-2">M {member.annualCommitment.toLocaleString()}</span></p>
                </div>
            </div>

            <div className="grid grid-cols-12 gap-6 h-[500px]">

                {/* Voting UI */}
                <div className="col-span-12 lg:col-span-5 flex flex-col gap-6">
                    <div className="glass-panel p-8 rounded-xl border border-white/5 relative h-full flex flex-col justify-center">
                        <span className="bg-yellow-500/10 text-yellow-500 border border-yellow-500/20 text-xs font-bold px-3 py-1 rounded w-fit mb-4">ACTIVE VOTE</span>
                        <h2 className="text-3xl font-bold text-white mb-4 leading-tight">Agri-Tech Zone Beta: Phase 2 Pilot Expansion</h2>
                        <p className="text-slate-400 text-sm mb-8 leading-relaxed">
                            Resolution to release M 5M from the central War Chest to initiate Phase 2 structural works for the poultry processing facility.
                            This will expand operational volume by 150%.
                        </p>

                        <div className="space-y-6">
                            <div>
                                <div className="flex justify-between text-sm mb-2">
                                    <span className="font-bold text-accent-green">IN FAVOR: {yesPercentage}%</span>
                                    <span className="font-bold text-red-400">AGAINST: {noPercentage}%</span>
                                </div>
                                <div className="w-full h-3 bg-red-400/20 rounded-full overflow-hidden flex">
                                    <div className="h-full bg-accent-green transition-all duration-1000" style={{ width: `${yesPercentage}%` }}></div>
                                </div>
                            </div>

                            {!hasVoted ? (
                                <div className="grid grid-cols-2 gap-4 mt-8">
                                    <button
                                        onClick={() => handleVote("yes")}
                                        className="p-4 rounded-xl border border-accent-green/30 bg-accent-green/10 hover:bg-accent-green/20 text-accent-green font-bold flex flex-col items-center justify-center transition-all group"
                                    >
                                        <span className="material-symbols-outlined text-3xl mb-2 group-hover:scale-110 transition-transform">thumb_up</span>
                                        APPROVE
                                    </button>
                                    <button
                                        onClick={() => handleVote("no")}
                                        className="p-4 rounded-xl border border-red-400/30 bg-red-400/10 hover:bg-red-400/20 text-red-400 font-bold flex flex-col items-center justify-center transition-all group"
                                    >
                                        <span className="material-symbols-outlined text-3xl mb-2 group-hover:scale-110 transition-transform">thumb_down</span>
                                        REJECT
                                    </button>
                                </div>
                            ) : (
                                <div className="p-4 bg-primary/10 border border-primary/20 rounded-xl text-center mt-8">
                                    <span className="material-symbols-outlined text-primary mb-2 text-4xl">check_circle</span>
                                    <p className="text-primary font-bold text-sm">YOUR VOTE HAS BEEN RECORDED</p>
                                    <p className="text-xs text-slate-300 mt-1">Smart contract hash generated.</p>
                                </div>
                            )}
                        </div>
                    </div>
                </div>

                {/* Reactive 3D Model */}
                <div className="col-span-12 lg:col-span-7 glass-panel rounded-xl border border-border-chrome/20 relative overflow-hidden h-[400px] lg:h-full">
                    <div className="absolute top-6 left-6 z-20 pointer-events-none p-4 bg-black/50 border border-white/10 rounded-lg backdrop-blur">
                        <h3 className="text-white font-bold mb-1 flex items-center gap-2 text-sm">
                            <span className="w-2 h-2 rounded-full bg-accent-green animate-pulse"></span>
                            Live Asset Simulation
                        </h3>
                        <p className="text-xs text-slate-400">Rendering reacts to 'In Favor' capital commitments.</p>
                    </div>
                    <AssetViewer url="/assets/A-futuristic-minimalist-architec-23bqrb-211017489.glb" glowIntensity={glowIntensity} reactToVote={true} />
                </div>

            </div>
        </div>
    );
}
