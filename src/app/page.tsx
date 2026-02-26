"use client";

import React, { useState } from "react";
import MetricCard from "@/components/MetricCard";
import AssetViewer from "@/components/3d/AssetViewer";
import { useMember } from "@/context/MemberContext";

export default function DashboardPage() {
  const { member, updateCommitment } = useMember();
  const [calcValue, setCalcValue] = useState(member.annualCommitment.toString());
  const [glowIntensity, setGlowIntensity] = useState(0);

  const handleCalcChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    setCalcValue(val);
    const num = parseInt(val) || 0;

    // Create an interaction spike for the glow
    setGlowIntensity(Math.min(num / 100000, 2));
    setTimeout(() => setGlowIntensity(0), 1000);

    updateCommitment(num);
  };

  return (
    <div className="flex flex-col gap-6">
      {/* Metrics Row */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <MetricCard
          title="War Chest (LSL)"
          value="M 45,000,000"
          icon="account_balance_wallet"
          trend="+12.5%"
          trendLabel="vs last month"
          accentColor="#00ffff"
        />
        <MetricCard
          title="Active Projects"
          value="12"
          icon="rocket_launch"
          trend="+2"
          trendLabel="new proposals"
          accentColor="#00cccc"
        />
        <MetricCard
          title="ROI (YTD)"
          value="18.2%"
          icon="trending_up"
          trend="Target Exceeded"
          trendLabel=""
          accentColor="#0bda50"
        />
      </div>

      <div className="grid grid-cols-12 gap-6">
        {/* Main Hero & 3D Integration */}
        <div className="col-span-12 lg:col-span-8 flex flex-col lg:flex-row gap-6">
          <div className="w-full aspect-square max-h-[50vh] md:w-full md:max-h-none md:aspect-video lg:w-1/2 lg:aspect-auto lg:h-[450px] glass-panel rounded-xl border border-border-chrome/20 relative overflow-hidden group">
            <div className="absolute inset-0 z-0">
              <AssetViewer url="/assets/A-futuristic-minimalist-architec-23bqrb-211017489.glb" glowIntensity={glowIntensity} />
            </div>

            {/* UI Overlay */}
            <div className="absolute top-4 left-4 lg:top-6 lg:left-6 z-10 bg-black/40 p-6 rounded-lg backdrop-blur border border-white/10 w-64 md:w-72">
              <div className="flex items-center gap-2 mb-3">
                <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
                <span className="text-xs font-bold text-white tracking-widest uppercase px-2 py-1 rounded border border-white/10 bg-black/50">Equity Engine</span>
              </div>
              <h2 className="text-[clamp(1rem,5vw,1.5rem)] font-bold text-white neon-text mb-1 leading-tight">Compute Your Stake</h2>
              <p className="text-xs text-slate-400 mb-4">Adjust your annual commitment to see projection changes live.</p>

              <div className="flex flex-col gap-2">
                <label className="text-[10px] uppercase font-bold text-slate-500 tracking-widest">Commitment (LSL)</label>
                <input
                  type="range"
                  min="1000"
                  max="1000000"
                  step="1000"
                  value={calcValue}
                  onChange={handleCalcChange}
                  className="w-full h-8 bg-slate-700/50 rounded-full outline-none appearance-none accent-primary border border-primary/20 py-2 cursor-pointer"
                />
                <div className="flex justify-between items-center mt-1 w-full min-h-[48px]">
                  <input
                    type="number"
                    value={calcValue}
                    onChange={handleCalcChange}
                    className="bg-black/60 border border-primary/30 rounded px-4 py-3 text-primary text-sm font-mono w-28 outline-none focus:border-primary shrink-0"
                  />
                  <span className="text-xs font-bold text-accent-green pl-2 whitespace-nowrap">LIVE SYNC</span>
                </div>
              </div>
            </div>

            {/* Scanning effects */}
            <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(rgba(0,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,255,0.05)_1px,transparent_1px)] bg-[size:40px_40px]"></div>
            <div className="absolute inset-x-0 h-px bg-primary shadow-[0_0_15px_rgba(0,255,255,0.8)] animate-[scan_4s_ease-in-out_infinite] opacity-30 pointer-events-none blur-lg md:blur-none"></div>
          </div>

          {/* Proposals Overview Board */}
          <div className="glass-panel rounded-xl border border-border-chrome/20 p-6 flex-1 min-h-[300px] lg:h-[450px] overflow-y-auto">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-[clamp(1rem,4vw,1.25rem)] font-bold text-white flex items-center gap-2">
                <span className="material-symbols-outlined text-primary">how_to_vote</span>
                Active Proposals
              </h3>
              <button className="text-[10px] md:text-xs text-primary hover:text-white transition-colors uppercase tracking-wider font-bold p-2 md:p-0 min-h-[48px] md:min-h-0 flex items-center">View All</button>
            </div>

            <div className="space-y-4">
              <div className="bg-white/5 border border-white/5 rounded-lg p-4 hover:border-primary/30 transition-all cursor-pointer group">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h4 className="text-white font-medium group-hover:text-primary transition-colors">Highlands Water Expansion</h4>
                    <p className="text-slate-400 text-xs mt-1">Infrastructure • budget: M 12.5m</p>
                  </div>
                  <span className="bg-yellow-500/20 text-yellow-500 text-[10px] font-bold px-2 py-1 rounded uppercase">Voting Open</span>
                </div>
                <div className="w-full bg-slate-800 h-1.5 rounded-full mt-3 overflow-hidden">
                  <div className="bg-primary h-full rounded-full transition-all duration-1000" style={{ width: "72%" }}></div>
                </div>
                <div className="flex justify-between mt-2 text-xs text-slate-500">
                  <span>72% Approval</span>
                  <span>2 days left</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Sidebar widgets */}
        <div className="col-span-12 lg:col-span-4 flex flex-col gap-6">
          {/* Neon Donut Chart */}
          <div className="glass-panel rounded-xl border border-border-chrome/20 p-6 flex flex-col items-center justify-center relative neon-box">
            <h3 className="w-full text-left text-sm font-bold text-slate-300 uppercase tracking-wider mb-4 border-b border-white/10 pb-2">Asset Allocation</h3>

            <div className="relative w-48 h-48 my-4 group">
              <div
                className="w-full h-full rounded-full transition-transform duration-1000 group-hover:scale-105"
                style={{
                  background: "conic-gradient(#00ffff 0% 45%, #0bda50 45% 75%, #ffffff 75% 100%)",
                  padding: "2px"
                }}
              >
                <div
                  className="w-full h-full bg-surface-dark rounded-full flex flex-col items-center justify-center relative z-10"
                  style={{ backgroundColor: "#0a1111" }}
                >
                  <span className="text-xs text-slate-400 mt-2">Total Assets</span>
                  <span className="text-xl font-bold text-white neon-text">100%</span>
                </div>
              </div>
              <div className="absolute inset-0 rounded-full shadow-[0_0_20px_rgba(0,255,255,0.3)] pointer-events-none"></div>
            </div>

            <div className="w-full space-y-3 mt-4">
              <div className="flex items-center justify-between text-sm">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-sm bg-primary shadow-[0_0_8px_rgba(0,255,255,0.8)]"></span>
                  <span className="text-slate-300">Real Estate</span>
                </div>
                <span className="font-mono text-primary font-bold">45%</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-sm bg-accent-green shadow-[0_0_8px_rgba(11,218,80,0.8)]"></span>
                  <span className="text-slate-300">Agriculture</span>
                </div>
                <span className="font-mono text-accent-green font-bold">30%</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-sm bg-white shadow-[0_0_8px_rgba(255,255,255,0.6)]"></span>
                  <span className="text-slate-300">Event Mgmt</span>
                </div>
                <span className="font-mono text-white font-bold">25%</span>
              </div>
            </div>
          </div>

          {/* Timeline / Phase Tracker */}
          <div className="glass-panel rounded-xl border border-border-chrome/20 p-6 flex-1">
            <h3 className="text-sm font-bold text-slate-300 uppercase tracking-wider mb-6 border-b border-white/10 pb-2">36-Month Roadmap</h3>
            <div className="relative pl-4 space-y-8 before:absolute before:left-[21px] before:top-2 before:bottom-2 before:w-0.5 before:bg-gradient-to-b before:from-primary before:via-slate-700 before:to-transparent">

              <div className="relative pl-8">
                <div className="absolute left-0 top-1 w-3 h-3 rounded-full bg-primary shadow-[0_0_10px_rgba(0,255,255,1)] z-10 ring-4 ring-[#0a1111]"></div>
                <h4 className="text-white text-sm font-bold">Phase 1: Foundation</h4>
                <p className="text-[10px] text-primary uppercase font-bold mb-1">Current Status: In Progress</p>
                <p className="text-slate-400 text-xs leading-relaxed">Secure initial capital, finalize legal frameworks, and acquire asset sites.</p>
              </div>

              <div className="relative pl-8 opacity-70">
                <div className="absolute left-0 top-1 w-3 h-3 rounded-full bg-slate-600 border border-slate-400 z-10 ring-4 ring-[#0a1111]"></div>
                <h4 className="text-slate-200 text-sm font-bold">Phase 2: Expansion</h4>
                <p className="text-[10px] text-slate-500 uppercase font-bold mb-1">Target: Q3</p>
                <p className="text-slate-500 text-xs leading-relaxed">Launch agricultural pilots and center construction.</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
