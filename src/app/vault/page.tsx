import React from "react";

const documents = [
    { id: 1, title: "Constitution of Libata Alumni Consortium", type: "Legal", date: "2023-11-04" },
    { id: 2, title: "Commercial Agriculture Strategy Paper", type: "Strategy", date: "2023-12-10" },
    { id: 3, title: "Fundraising & Revenue Generation", type: "Finance", date: "2024-01-15" },
    { id: 4, title: "Consortium Governance Guidelines", type: "Legal", date: "2024-02-01" },
    { id: 5, title: "Ultimate Pitch Deck Guide", type: "Strategy", date: "2024-02-15" },
    { id: 6, title: "Universal Music Group Prospectus", type: "Reference", date: "2021-09-14" },
];

export default function VaultPage() {
    return (
        <div className="flex flex-col gap-6 h-full pb-8">
            <div className="glass-panel rounded-xl border border-border-chrome/20 p-6">
                <h1 className="text-2xl font-bold text-white mb-2">The Vault</h1>
                <p className="text-slate-400 text-sm">Secure repository for all Libata constitutional and audit documents.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {documents.map((doc) => (
                    <div key={doc.id} className="glass-panel p-6 rounded-xl border border-white/5 hover:border-primary/50 transition-all duration-300 group cursor-pointer flex flex-col justify-between min-h-[160px]">
                        <div>
                            <div className="flex justify-between items-start mb-3">
                                <span className="material-symbols-outlined text-3xl text-slate-500 group-hover:text-primary transition-colors">description</span>
                                <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-1 rounded bg-white/5 text-slate-400">{doc.type}</span>
                            </div>
                            <h3 className="text-lg font-bold text-white leading-tight group-hover:text-primary transition-colors">{doc.title}</h3>
                        </div>
                        <div className="flex justify-between items-center mt-4 pt-4 border-t border-white/5">
                            <span className="text-xs text-slate-500 font-mono">{doc.date}</span>
                            <span className="text-xs font-bold text-primary opacity-0 group-hover:opacity-100 transition-opacity">VIEW DOC</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
