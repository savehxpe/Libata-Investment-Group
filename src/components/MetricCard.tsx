import React from "react";

interface MetricCardProps {
    title: string;
    value: string;
    icon: string;
    trend: string;
    trendLabel: string;
    accentColor: string;
}

export default function MetricCard({ title, value, icon, trend, trendLabel, accentColor }: MetricCardProps) {
    return (
        <div
            className={`glass-panel p-6 rounded-xl border-l-4 relative overflow-hidden group transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(0,0,0,0.6)]`}
            style={{ borderLeftColor: accentColor }}
        >
            <div className="absolute right-0 top-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                <span className="material-symbols-outlined text-6xl" style={{ color: accentColor }}>
                    {icon}
                </span>
            </div>
            <p className="text-slate-400 text-sm font-medium uppercase tracking-widest mb-1">{title}</p>
            <h3 className="text-3xl font-bold text-white tracking-tight">{value}</h3>
            <div className="flex items-center gap-2 mt-2">
                <span className="text-accent-green bg-accent-green/10 px-2 py-0.5 rounded text-xs font-bold">
                    {trend}
                </span>
                <span className="text-slate-500 text-xs">{trendLabel}</span>
            </div>
        </div>
    );
}
