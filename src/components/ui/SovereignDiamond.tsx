"use client";

export default function SovereignDiamond() {
    return (
        <div className="fixed inset-0 z-0 flex items-center justify-center pointer-events-none overflow-hidden">
            {/* THE GHOST LOGO WATERMARK 
               Opacity is set to 3% so it is barely visible, 
               like a watermark on a land deed.
            */}
            <svg
                width="100%"
                height="100%"
                viewBox="0 0 500 500"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="opacity-[0.03] scale-110 md:opacity-[0.02]"
            >
                {/* Sovereign Diamond Outline */}
                <path
                    d="M250 10L10 250L250 490L490 250L250 10Z"
                    stroke="white"
                    strokeWidth="4"
                />

                {/* Minimalist 'L' Negative Space */}
                <path
                    d="M130 130H370V370H130V130Z"
                    fill="#050505"
                />
                <path
                    d="M250 10L250 250L490 250"
                    stroke="white"
                    strokeWidth="4"
                    strokeDasharray="12 12"
                />

                {/* The 'L' Identity Core */}
                <path
                    d="M130 370H370V130"
                    stroke="white"
                    strokeWidth="8"
                />

                {/* 'Libata' Technical Text */}
                <text
                    x="250"
                    y="270"
                    textAnchor="middle"
                    fill="white"
                    fontFamily="var(--font-space), sans-serif"
                    fontSize="24"
                    fontWeight="bold"
                    letterSpacing="0.2em"
                    style={{ textTransform: "uppercase" }}
                >
                    LIBATA
                </text>
            </svg>
        </div>
    );
}
