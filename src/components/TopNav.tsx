"use client";

import { useMember } from "@/context/MemberContext";
import { calculateMemberEquity } from "@/lib/equityLogic";
import { usePathname } from "next/navigation";

export default function TopNav() {
    const { member } = useMember();
    const pathname = usePathname();

    const equityShare = calculateMemberEquity(member.annualCommitment).toFixed(4);

    const titleMap: Record<string, string> = {
        "/": "Dashboard Overview",
        "/vault": "Vault",
        "/portfolio": "Portfolio",
        "/proposals": "Proposals",
        "/analytics": "Live Analytics",
    };
    const title = titleMap[pathname] || "Dashboard Overview";

    return (
        <header className="h-16 flex items-center justify-between px-8 border-b border-border-chrome/10 glass-panel shrink-0 z-20">
            <div className="flex items-center gap-4">
                <h2 className="text-xl font-bold tracking-tight text-white flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
                    {title}
                </h2>
            </div>
            <div className="flex items-center gap-6">
                <div className="flex flex-col items-end mr-4">
                    <span className="text-[10px] uppercase font-bold text-slate-500 tracking-widest leading-none mb-1">Your Share</span>
                    <span className="text-sm font-mono font-bold text-primary leading-none neon-text">{equityShare}%</span>
                </div>

                <div className="relative hidden md:block">
                    <span className="absolute left-3 top-1/2 -translate-y-1/2 material-symbols-outlined text-slate-500 text-[18px]">search</span>
                    <input
                        className="bg-black/40 border border-border-chrome/20 rounded-full py-1.5 pl-10 pr-4 text-sm text-white focus:outline-none focus:border-primary/50 w-64 transition-all"
                        placeholder="Search assets..."
                        type="text"
                    />
                </div>
                <button className="relative text-slate-400 hover:text-primary transition-colors">
                    <span className="material-symbols-outlined">notifications</span>
                    <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full"></span>
                </button>
            </div>
        </header>
    );
}
