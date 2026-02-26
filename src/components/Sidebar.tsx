"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useMember } from "@/context/MemberContext";

const navLinks = [
    { href: "/", label: "Dashboard", icon: "dashboard" },
    { href: "/vault", label: "The Vault", icon: "account_balance" },
    { href: "/portfolio", label: "Portfolio", icon: "folder_managed" },
    { href: "/proposals", label: "Proposals", icon: "description", badge: "3" },
    { href: "/analytics", label: "Analytics", icon: "monitoring" },
];

export default function Sidebar() {
    const pathname = usePathname();
    const { member } = useMember();

    return (
        <aside className="w-64 flex flex-col glass-panel border-r border-border-chrome/20 h-full relative shrink-0">
            <div className="p-6 flex items-center gap-3 border-b border-border-chrome/10">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-blue-600 flex items-center justify-center shadow-[0_0_15px_rgba(0,255,255,0.4)]">
                    <span className="material-symbols-outlined text-black font-bold">diamond</span>
                </div>
                <div>
                    <h1 className="text-white text-base font-bold tracking-wider uppercase">
                        Libata<br />
                        <span className="text-primary text-xs tracking-[0.2em] font-light">Quantum</span>
                    </h1>
                </div>
            </div>

            <div className="px-6 py-4">
                <p className="text-[10px] uppercase font-bold text-slate-500 tracking-widest pl-2 mb-2">FIELD MODE</p>
            </div>

            <nav className="flex-1 overflow-y-auto px-3 flex flex-col gap-2">
                {navLinks.map((link) => {
                    const isActive = pathname === link.href || (pathname.startsWith(link.href) && link.href !== '/');
                    return (
                        <Link
                            key={link.href}
                            href={link.href}
                            className={`flex items-center gap-3 px-3 py-3 rounded-lg border transition-all duration-300 group ${isActive
                                    ? "bg-primary/10 border-primary/30 text-white"
                                    : "hover:bg-white/5 border-transparent hover:border-white/10 text-slate-400 hover:text-white"
                                }`}
                        >
                            <span className={`material-symbols-outlined transition-transform ${isActive ? 'text-primary' : 'group-hover:text-primary'} ${isActive ? 'scale-110' : 'group-hover:scale-110'}`}>
                                {link.icon}
                            </span>
                            <span className="text-sm font-medium tracking-wide">{link.label}</span>
                            {link.badge && (
                                <span className="ml-auto bg-primary text-black text-[10px] font-bold px-1.5 py-0.5 rounded">
                                    {link.badge}
                                </span>
                            )}
                        </Link>
                    );
                })}
            </nav>

            <div className="p-4 border-t border-border-chrome/10">
                <div className="mt-4 flex items-center gap-3 px-3">
                    <div
                        className="w-8 h-8 rounded-full bg-slate-700 border border-border-chrome/30 bg-cover bg-center"
                        style={{ backgroundImage: `url('${member.avatarUrl}')` }}
                    ></div>
                    <div className="flex flex-col">
                        <span className="text-xs text-white font-medium">{member.name}</span>
                        <span className="text-[10px] text-primary">{member.role}</span>
                    </div>
                </div>
            </div>
        </aside>
    );
}
