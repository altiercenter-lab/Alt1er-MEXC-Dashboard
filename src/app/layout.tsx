import type { Metadata } from "next";
import { Orbitron, Prompt } from "next/font/google";
import "./globals.css";

const orbitron = Orbitron({ 
  subsets: ["latin"], 
  variable: '--font-orbitron',
  weight: ['400', '700', '900'] 
});

const prompt = Prompt({ 
  subsets: ["latin", "thai"],
  variable: '--font-prompt',
  weight: ['300', '400', '600', '700'] 
});

import { Providers } from "@/components/Providers";
import { NavAuthButton } from "@/components/AuthButtons";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Alt1er Dashboard - Event Points",
  description: "Alt1er Event Dashboard with Creator and Season Boards.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${orbitron.variable} ${prompt.variable} antialiased bg-[#050505] text-white min-h-screen flex flex-col relative overflow-x-hidden font-sans`}
      >
        <Providers>
          {/* Cyberpunk Premium AI Background */}
          <div className="fixed inset-0 z-[-3]">
            <Image 
              src="/bg-premium.jpg" 
              alt="Cyberpunk Premium Background" 
              fill 
              className="object-cover opacity-25 mix-blend-screen"
              quality={100}
            />
          </div>

          {/* Core Center Glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-gradient-to-b from-[#ff7b00]/15 to-transparent blur-[100px] z-[-1] pointer-events-none"></div>

          {/* Navbar */}
          <nav className="flex justify-between items-center p-6 max-w-7xl mx-auto w-full relative z-50">
              <div className="flex items-center gap-3">
                  <Image src="/logo-a.jpg" alt="Alt1er Logo" width={48} height={48} className="w-12 h-12 mix-blend-screen rounded-lg" />
                  <span className="font-display font-bold text-2xl tracking-wider mt-1 drop-shadow-md">ALT<span className="text-[#ff7b00]">1</span>ER</span>
              </div>
              <div className="flex gap-4">
                  <NavAuthButton />
              </div>
          </nav>

          {children}
        </Providers>
      </body>
    </html>
  );
}
