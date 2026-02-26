"use client";

import React, { useState } from "react";
import { useMember } from "@/context/MemberContext";
import {
    TOTAL_WAR_CHEST_TARGET,
    calculateMemberEquity,
    calculateProjectedPayout
} from "@/lib/equityLogic";
import {
    LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, AreaChart, Area
} from "recharts";

export default function AnalyticsPage() {
    const { member, updateCommitment } = useMember();
    const [localCommitment, setLocalCommitment] = useState(member.annualCommitment.toString());

    const handleCommitmentChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const val = e.target.value;
        setLocalCommitment(val);
        const num = parseInt(val) || 0;
        updateCommitment(num);
    };

    const currentEquity = calculateMemberEquity(member.annualCommitment, TOTAL_WAR_CHEST_TARGET);

    // Generate 5-year projection data based on the current commitment compounding at ~18.2% Base ROI
    const projectionData = Array.from({ length: 6 }).map((_, i) => {
        const year = new Date().getFullYear() + i;
        // Simple projection: Commitment + compounded ROI return conceptually
        const projectedValue = member.annualCommitment * Math.pow(1.182, i);
        return {
            year: year.toString(),
            payout: Math.round(projectedValue),
            base: member.annualCommitment
        };
    });

    return (
        <div className="flex flex-col gap-6 h-full pb-8">
            <div className="glass-panel p-6 rounded-xl border border-border-chrome/20 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <div>
                    <h1 className="text-2xl font-bold text-white mb-2">Live Analytics & Forecasting</h1>
                    <p className="text-slate-400 text-sm">Real-time valuation of your Libata consortium holdings.</p>
                </div>

                <div className="flex items-center gap-4 bg-black/40 p-4 rounded-lg border border-white/5">
                    <div className="flex flex-col">
                        <label className="text-[10px] uppercase font-bold text-slate-500 tracking-widest mb-1">Simulate Commitment (LSL)</label>
                        <input
                            type="number"
                            value={localCommitment}
                            onChange={handleCommitmentChange}
                            className="bg-transparent border-b border-primary/30 text-primary font-mono text-xl w-32 outline-none focus:border-primary transition-colors"
                        />
                    </div>
                    <div className="h-10 w-px bg-white/10 mx-2"></div>
                    <div className="flex flex-col items-end">
                        <span className="text-[10px] uppercase font-bold text-slate-500 tracking-widest mb-1">Projected Stake</span>
                        <span className="text-xl font-bold text-white font-mono">{currentEquity.toFixed(4)}%</span>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-12 gap-6 flex-1 min-h-[400px]">
                {/* Chart View */}
                <div className="col-span-12 lg:col-span-8 glass-panel p-6 rounded-xl border border-border-chrome/20 flex flex-col">
                    <div className="flex justify-between items-center mb-6">
                        <h3 className="text-lg font-bold text-white flex items-center gap-2">
                            <span className="material-symbols-outlined text-primary">monitoring</span>
                            5-Year Payout Projection
                        </h3>
                        <span className="text-xs bg-primary/10 text-primary border border-primary/20 px-2 py-1 rounded font-bold">18.2% YTD Base</span>
                    </div>

                    <div className="flex-1 w-full min-h-[300px]">
                        <ResponsiveContainer width="100%" height="100%">
                            <AreaChart data={projectionData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                                <defs>
                                    <linearGradient id="colorPayout" x1="0" y1="0" x2="0" y2="1">
                                        <stop offset="5%" stopColor="#00ffff" stopOpacity={0.3} />
                                        <stop offset="95%" stopColor="#00ffff" stopOpacity={0} />
                                    </linearGradient>
                                </defs>
                                <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" vertical={false} />
                                <XAxis dataKey="year" stroke="#475569" tick={{ fill: '#94a3b8', fontSize: 12 }} />
                                <YAxis stroke="#475569" tick={{ fill: '#94a3b8', fontSize: 12 }} tickFormatter={(value) => `M ${value / 1000}k`} />
                                <Tooltip
                                    contentStyle={{ backgroundColor: '#0a1111', borderColor: 'rgba(0,255,255,0.2)', borderRadius: '8px', color: '#fff' }}
                                    itemStyle={{ color: '#00ffff', fontWeight: 'bold' }}
                                    formatter={(value: any) => [`M ${Number(value).toLocaleString()}`, 'Projected Payout']}
                                />
                                <Area type="monotone" dataKey="payout" stroke="#00ffff" strokeWidth={3} fillOpacity={1} fill="url(#colorPayout)" />
                            </AreaChart>
                        </ResponsiveContainer>
                    </div>
                </div>

                {/* Live War Chest Tracker */}
                <div className="col-span-12 lg:col-span-4 glass-panel p-6 rounded-xl border border-border-chrome/20 flex flex-col items-center justify-center relative neon-box overflow-hidden">

                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,255,255,0.1)_0%,transparent_70%)] pointer-events-none"></div>

                    <span className="bg-red-500/10 text-red-500 border border-red-500/20 text-xs font-bold px-3 py-1 rounded w-fit mb-6 animate-pulse">LIVE TRACKER</span>

                    <h3 className="text-slate-400 text-sm font-bold uppercase tracking-widest mb-2 text-center">Global War Chest</h3>
                    <h2 className="text-4xl lg:text-5xl font-bold text-white tracking-tighter mb-4 neon-text">
                        <span className="text-primary mr-1">M</span>45.2<span className="text-xl text-slate-400">m</span>
                    </h2>

                    <div className="w-full bg-slate-800 h-2 rounded-full mt-6 overflow-hidden relative">
                        <div className="absolute inset-0 bg-primary/20 animate-pulse"></div>
                        <div className="bg-primary h-full rounded-full relative z-10" style={{ width: "85%" }}>
                            <div className="absolute right-0 top-0 bottom-0 w-4 bg-white/50 blur-sm"></div>
                        </div>
                    </div>

                    <div className="flex justify-between w-full mt-3 text-xs font-bold">
                        <span className="text-primary">85% Funded</span>
                        <span className="text-slate-500">Target: M 50m</span>
                    </div>

                    <div className="mt-8 p-4 bg-white/5 rounded-lg border border-white/5 w-full text-center">
                        <p className="text-xs text-slate-400">Next Disbursement Event</p>
                        <p className="text-sm text-white font-mono font-bold mt-1">14 Days : 08 Hrs : 22 Min</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
