"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, FileText, Lock, ChevronRight, Shield } from 'lucide-react';
import { triggerHaptic } from '@/lib/hapticLogic';

// Categories derived from your .context/ structure
const categories = ["Constitution", "Legal", "Financials", "Agreements"];

const documents = [
    { id: 1, title: "Libata Founding Constitution", category: "Constitution", date: "2025-10-17", size: "1.2MB", status: "Verified" },
    { id: 2, title: "Maseru North Land Deed", category: "Legal", date: "2026-01-12", size: "4.5MB", status: "Certified" },
    { id: 3, title: "Q1 2026 Audit Report", category: "Financials", date: "2026-02-15", size: "2.8MB", status: "Public" },
    { id: 4, title: "Poultry Hub Feasibility Study", category: "Agreements", date: "2025-11-05", size: "8.1MB", status: "Internal" },
    { id: 5, title: "Member Contribution Ledger", category: "Financials", date: "2026-02-20", size: "0.5MB", status: "Restricted" },
];

export default function VaultPage() {
    const [searchTerm, setSearchTerm] = useState("");
    const [activeCategory, setActiveCategory] = useState("All");

    const handleDocClick = () => {
        triggerHaptic('SELECTION');
    };

    const filteredDocs = documents.filter(doc =>
        (activeCategory === "All" || doc.category === activeCategory) &&
        doc.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="flex flex-col gap-6 h-full pb-8">
            {/* Search Header */}
            <div className="glass-panel p-6 rounded-xl border border-border-chrome/20">
                <h1 className="text-3xl font-bold text-white uppercase tracking-tighter mb-6">Vault</h1>
                <div className="relative">
                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-primary/40" size={18} />
                    <input
                        type="text"
                        placeholder="Search Intelligence..."
                        className="w-full bg-black/40 border border-white/10 rounded-2xl py-4 pl-12 pr-4 text-sm text-white focus:border-primary/50 outline-none transition-all min-h-[48px]"
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>
            </div>

            {/* Category Pills - Mobile Scrollable */}
            <div className="flex gap-3 overflow-x-auto pb-2 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
                {["All", ...categories].map(cat => (
                    <button
                        key={cat}
                        onClick={() => { setActiveCategory(cat); triggerHaptic('SELECTION'); }}
                        className={`px-5 py-3 rounded-full text-[10px] uppercase font-bold whitespace-nowrap transition-all min-h-[48px] ${activeCategory === cat
                            ? 'bg-primary text-black shadow-[0_0_15px_rgba(0,255,255,0.4)]'
                            : 'bg-white/5 text-slate-400 border border-white/10 hover:border-white/20'
                            }`}
                    >
                        {cat}
                    </button>
                ))}
            </div>

            {/* Document List */}
            <div className="space-y-3">
                {filteredDocs.map(doc => (
                    <motion.div
                        key={doc.id}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={handleDocClick}
                        className="group flex flex-col sm:flex-row sm:items-center justify-between p-4 bg-primary/5 border border-primary/20 rounded-2xl hover:border-primary/50 transition-all cursor-pointer gap-4 min-h-[64px]"
                    >
                        <div className="flex items-center gap-4">
                            <div className="p-3 bg-black/60 border border-white/10 rounded-xl text-slate-400 group-hover:text-primary transition-colors shrink-0">
                                {doc.status === "Restricted" ? <Lock size={20} /> : <FileText size={20} />}
                            </div>
                            <div className="flex flex-col">
                                <h3 className="text-sm font-bold text-white uppercase tracking-tight line-clamp-1">{doc.title}</h3>
                                <p className="text-[9px] text-primary/70 uppercase tracking-widest mt-1 font-bold">{doc.date} • {doc.size}</p>
                            </div>
                        </div>
                        <div className="flex items-center justify-between sm:justify-end gap-4 shrink-0 sm:w-auto w-full">
                            <span className={`text-[9px] uppercase font-bold tracking-widest px-2 py-1 rounded bg-black/50 ${doc.status === 'Restricted' ? 'text-amber-500 border border-amber-500/30' : 'text-slate-300 border border-white/10'}`}>
                                {doc.status}
                            </span>
                            <ChevronRight size={18} className="text-primary/40 group-hover:text-primary transition-colors" />
                        </div>
                    </motion.div>
                ))}
                {filteredDocs.length === 0 && (
                    <div className="p-8 text-center bg-black/40 border border-white/5 rounded-2xl">
                        <p className="text-sm text-slate-500 font-mono">No documents found matching criteria.</p>
                    </div>
                )}
            </div>

            {/* Security Footer */}
            <div className="mt-6 p-6 border border-dashed border-primary/20 bg-primary/5 rounded-3xl text-center flex flex-col items-center">
                <div className="inline-flex p-3 rounded-full bg-primary/10 text-primary mb-4 shadow-[0_0_15px_rgba(0,255,255,0.2)]">
                    <Shield size={24} />
                </div>
                <p className="text-[10px] text-slate-400 uppercase tracking-[0.2em] leading-relaxed">
                    All documents are encrypted with quantum-resistant protocols. <br className="hidden md:block" /> Access logs are recorded on the consortium ledger.
                </p>
            </div>
        </div>
    );
}
