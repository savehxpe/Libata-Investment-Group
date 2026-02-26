"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { triggerHaptic } from '@/lib/hapticLogic';
import { calculateMemberEquity } from '@/lib/equityLogic';

// Sample data - In production, this pulls from your .context/ sources
const members = [
    { id: 1, name: "Tshepo M.", contribution: 55000, status: "Active" },
    { id: 2, name: "Thuso M.", contribution: 45000, status: "Active" },
    { id: 3, name: "Didi E.", contribution: 12000, status: "Active" },
    { id: 4, name: "S. Hxpe", contribution: 10000, status: "Active" },
    { id: 5, name: "L. Admin", contribution: 8500, status: "Pending" }, // Below M10k Rule
];

const totalCapital = members.reduce((acc, m) => acc + m.contribution, 0);

export default function NetworkPage() {
    const [selectedMember, setSelectedMember] = useState<number | null>(null);

    const handleMemberClick = (member: { id: number }) => {
        setSelectedMember(member.id);
        triggerHaptic('SELECTION');
    };

    return (
        <div className="flex flex-col gap-6 h-full pb-8">
            {/* Header - Technical & Authoritative */}
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                className="glass-panel rounded-xl border border-border-chrome/20 p-6 flex items-center justify-between"
            >
                <div>
                    <h1 className="text-2xl font-bold tracking-widest text-primary uppercase mb-1">Consortium Network</h1>
                    <p className="text-slate-400 text-sm">Real-time status of Libata Investment Group members and capital contributions.</p>
                </div>
                <span className="material-symbols-outlined text-4xl text-primary animate-pulse hidden md:block">hub</span>
            </motion.div>

            {/* Member 3D-Style List */}
            <div className="space-y-4">
                {members.map((member) => {
                    const equityPercentage = calculateMemberEquity(member.contribution, totalCapital).toFixed(2);
                    const isPending = member.contribution < 10000;
                    const isSelected = selectedMember === member.id;

                    return (
                        <motion.div
                            key={member.id}
                            whileTap={{ scale: 0.98 }}
                            onClick={() => handleMemberClick(member)}
                            className={`relative overflow-hidden backdrop-blur-xl border-[0.5px] p-4 rounded-xl flex justify-between items-center transition-all cursor-pointer ${isPending ? 'bg-amber-500/5 border-amber-500/50 hover:bg-amber-500/10' : 'bg-primary/5 border-primary/30 hover:bg-primary/10'
                                } ${isSelected ? 'ring-2 ring-primary/50 scale-[1.02]' : ''}`}
                        >
                            {/* Member Visual ID (The "Crystal" Glow) */}
                            <div className="flex items-center gap-6">
                                <div className={`w-2 h-10 rounded-full shadow-[0_0_15px] ${isPending ? 'bg-amber-500 shadow-amber-500/50' : 'bg-primary shadow-primary/80'
                                    }`} />
                                <div className="flex flex-col">
                                    <p className="text-base font-bold text-white uppercase tracking-wider">{member.name}</p>
                                    <p className="text-sm text-slate-400 font-mono mt-0.5">M {member.contribution.toLocaleString()}</p>
                                </div>
                            </div>

                            {/* Equity Data */}
                            <div className="text-right flex flex-col justify-center">
                                <p className={`text-xl font-mono font-bold ${isPending ? 'text-amber-500' : 'text-primary neon-text'}`}>{equityPercentage}%</p>
                                <p className={`text-[10px] uppercase tracking-widest font-bold mt-1 ${isPending ? 'text-amber-500/70' : 'text-primary/70'}`}>
                                    {isPending ? 'Below Minimum' : 'Equity Share'}
                                </p>
                            </div>

                            {/* Selection Glare Effect */}
                            {isSelected && (
                                <div className="absolute inset-0 pointer-events-none bg-gradient-to-r from-transparent via-white/10 to-transparent animate-[scan_2s_ease-in-out_infinite] opacity-50 z-0" />
                            )}
                        </motion.div>
                    );
                })}
            </div>

            {/* Stats Summary Card */}
            <motion.div
                className="mt-6 p-6 bg-primary/10 border-[0.5px] border-primary/30 rounded-xl backdrop-blur-md flex flex-col items-center justify-center text-center neon-box relative overflow-hidden"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
            >
                <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-primary/10 to-transparent pointer-events-none"></div>
                <p className="text-xs text-primary uppercase tracking-[0.3em] font-bold mb-3 z-10">Total Consortium Power</p>
                <p className="text-4xl lg:text-5xl font-mono tracking-tighter text-white font-bold z-10">
                    <span className="text-primary mr-2">M</span>
                    {totalCapital.toLocaleString()}
                </p>
            </motion.div>
        </div>
    );
}
