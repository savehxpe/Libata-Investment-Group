import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/Sidebar";
import TopNav from "@/components/TopNav";
import OnboardingGate from "@/components/OnboardingGate";
import { MemberProvider } from "@/context/MemberContext";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Libata Quantum Portal Dashboard",
  description: "Advanced financial engine and dashboard.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&display=swap"
          rel="stylesheet"
        />
      </head>
      <body
        className={`${spaceGrotesk.variable} antialiased font-display bg-[var(--color-background-dark)] text-slate-100 min-h-screen overflow-hidden selection:bg-primary selection:text-black relative`}
      >
        <MemberProvider>
          {/* Background Noise Overlay */}
          <div className="fixed inset-0 pointer-events-none z-0 bg-[var(--background-image-noise)] opacity-30 mix-blend-overlay"></div>

          <OnboardingGate>
            <div className="relative z-10 flex h-screen w-full overflow-hidden">
              <Sidebar />
              <div className="flex-1 flex flex-col h-full overflow-hidden relative pb-[calc(4.5rem+env(safe-area-inset-bottom))] md:pb-0">
                <TopNav />
                <main className="flex-1 overflow-y-auto w-full h-full pb-4 md:pb-0">
                  {children}
                </main>
              </div>
            </div>
          </OnboardingGate>
        </MemberProvider>
      </body>
    </html>
  );
}
