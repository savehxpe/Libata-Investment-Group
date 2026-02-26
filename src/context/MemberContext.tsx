"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";
import { DUMMY_MEMBER, MemberProfile } from "@/lib/equityLogic";

interface MemberContextProps {
    member: MemberProfile;
    updateCommitment: (amount: number) => void;
}

const MemberContext = createContext<MemberContextProps | undefined>(undefined);

export function MemberProvider({ children }: { children: ReactNode }) {
    const [member, setMember] = useState<MemberProfile>(DUMMY_MEMBER);

    const updateCommitment = (amount: number) => {
        setMember((prev) => ({ ...prev, annualCommitment: amount }));
    };

    return (
        <MemberContext.Provider value={{ member, updateCommitment }}>
            {children}
        </MemberContext.Provider>
    );
}

export function useMember() {
    const context = useContext(MemberContext);
    if (!context) throw new Error("useMember must be used within MemberProvider");
    return context;
}
