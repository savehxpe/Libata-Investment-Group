"use client";

import { motion } from "framer-motion";
import React from "react";

export default function Template({ children }: { children: React.ReactNode }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 10, filter: "blur(4px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            exit={{ opacity: 0, scale: 0.98, filter: "blur(4px)" }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="flex-1 w-full relative z-10"
        >
            {children}
        </motion.div>
    );
}
