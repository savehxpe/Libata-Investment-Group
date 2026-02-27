"use client";

export default function SovereignDiamond() {
    return (
        <div className="fixed inset-0 z-0 flex items-center justify-center pointer-events-none overflow-hidden">
            {/* LAYER 1: The Sovereign Diamond Watermark
         This uses the Basotho Shield Geometry.
         Opacity is set to 5% (opacity-5) so it is barely visible, 
         like a watermark on security document or a land deed.
      */}
            <svg
                width="100%"
                height="100%"
                viewBox="0 0 500 500"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="opacity-5 scale-125 rotate-3" // Adds depth
            >
                {/*
           The traditional 'L' Negative Space.
           This cuts the 'L' out of the shield structure, 
           defining Libata within the Basotho form.
        */}
                <path
                    d="M130 130H370V370H130V130Z"
                    fill="#050505" // Cuts through the shield, use background color
                />
                <path
                    d="M250 10L250 250L490 250"
                    stroke="white"
                    strokeWidth="6"
                    strokeDasharray="12 12" // Optional dashed effect for technical feel
                />

                {/*
           The Primary Basotho Shield Geometry
           Bold, clean, geometric lines.
        */}
                <path
                    d="M250 10L10 250L250 490L490 250L250 10Z"
                    stroke="white"
                    strokeWidth="6" // Milled steel feel
                />

                {/*
           Mokorotlo (Basotho Hat) Symbol (Stylized)
        */}
                <path
                    d="M250 100V150"
                    stroke="white"
                    strokeWidth="8"
                />
                <path
                    d="M220 120H280L300 150H200L220 120Z"
                    fill="white"
                />

                {/*
           Traditional Spears ( Stylized Assegai )
        */}
                <path
                    d="M50 250H450"
                    stroke="white"
                    strokeWidth="6"
                />
                <path
                    d="M250 490V10"
                    stroke="white"
                    strokeWidth="6"
                />

                {/*
           'Libata' Technical Text
        */}
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
