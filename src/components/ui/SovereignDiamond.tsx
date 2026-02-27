"use client";

export default function SovereignDiamond() {
    return (
        <div className="fixed inset-0 flex items-center justify-center pointer-events-none z-0">
            <svg
                width="60vw"
                height="60vw"
                viewBox="0 0 100 100"
                xmlns="http://www.w3.org/2000/svg"
                className="opacity-[0.03] max-w-[600px] max-h-[600px] md:opacity-[0.02] text-white"
                fill="currentColor"
            >
                <path
                    d="M50 5 L95 50 L50 95 L5 50 Z M50 15 L20 50 L50 85 M50 85 L70 50 L50 15 M40 60 L60 60 L60 80"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinejoin="miter"
                    strokeLinecap="butt"
                />
            </svg>
        </div>
    );
}
