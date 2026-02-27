"use client";

import { motion } from "framer-motion";

export default function QuantumSeal() {
    return (
        <svg width="150" height="150" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" className="overflow-visible mix-blend-screen">
            {/* Outer rotating ring */}
            <motion.circle
                cx="50"
                cy="50"
                r="48"
                fill="none"
                stroke="#00F2FF"
                strokeWidth="1"
                strokeDasharray="14 14"
                animate={{ rotate: 360 }}
                transition={{ duration: 7, repeat: Infinity, ease: "linear" }}
                className="origin-center opacity-30"
            />
            {/* Reverse inner dashed ring */}
            <motion.circle
                cx="50"
                cy="50"
                r="40"
                fill="none"
                stroke="#E0E0E0"
                strokeWidth="0.5"
                strokeDasharray="4 8"
                animate={{ rotate: -360 }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                className="origin-center opacity-40"
            />

            {/* Diamond Shield Path */}
            <motion.path
                d="M50 10 L85 30 L85 70 L50 90 L15 70 L15 30 Z"
                fill="none"
                stroke="#00F2FF"
                strokeWidth="2"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ duration: 1, ease: "easeInOut" }}
                style={{ filter: "drop-shadow(0 0 15px rgba(0,242,255,0.8))" }}
            />

            {/* Inner Core Power Source */}
            <motion.circle
                cx="50"
                cy="50"
                r="8"
                fill="#00F2FF"
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: [0, 1.3, 1], opacity: [0, 1, 1] }}
                transition={{ delay: 0.8, duration: 0.5, ease: "easeOut" }}
                style={{ filter: "drop-shadow(0 0 20px rgba(0,242,255,1))" }}
            />

            {/* Core connections */}
            <motion.path
                d="M50 20 L75 40 L50 78 L25 40 Z"
                fill="none"
                stroke="#E0E0E0"
                strokeWidth="1"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 0.6 }}
                transition={{ delay: 0.5, duration: 0.7, ease: "easeInOut" }}
            />
        </svg>
    );
}
