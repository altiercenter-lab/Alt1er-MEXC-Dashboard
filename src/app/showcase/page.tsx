import Link from "next/link";

export default function ShowcasePage() {
    return (
        <main className="min-h-screen p-10 pb-32">
            <h1 className="text-4xl font-display font-black text-center mb-16 text-white tracking-widest uppercase">Select Frame Style</h1>
            
            <div className="grid lg:grid-cols-2 gap-16 max-w-[1600px] mx-auto">
                
                {/* Style 1: Web3 Premium */}
                <div>
                    <h3 className="text-xl text-[#ff7b00] font-bold mb-4 font-display">1. Web3 / Crypto Premium</h3>
                    <div className="group relative block rounded-2xl h-[500px]">
                        <div className="absolute -inset-0.5 bg-gradient-to-r from-[#ff7b00] to-[#ff5500] rounded-2xl blur opacity-30"></div>
                        <div className="relative p-[1px] rounded-2xl bg-gradient-to-br from-[#ff7b00] via-transparent to-[#ff5500] h-full">
                            <div className="relative h-full bg-[#070707] rounded-2xl p-8 overflow-hidden backdrop-blur-xl">
                                <div className="inline-flex items-center gap-2 text-white text-sm font-bold bg-white/5 px-4 py-1.5 rounded-full border border-white/10 mb-8"><span className="w-2 h-2 bg-[#ff7b00] rounded-full animate-pulse"></span> WEB3 STYLE</div>
                                <h2 className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">฿20,000</h2>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Style 2: Valorant / Esports */}
                <div>
                    <h3 className="text-xl text-[#ff4655] font-bold mb-4 font-display">2. Valorant / Esports Tactical</h3>
                    <div className="group relative block h-[500px] bg-[#111111] p-8 border-t-4 border-[#ff4655]" style={{ clipPath: "polygon(0 0, 100% 0, 100% calc(100% - 40px), calc(100% - 40px) 100%, 0 100%)" }}>
                        <div className="absolute top-0 right-0 w-32 h-32 bg-[radial-gradient(circle_at_top_right,#ff4655_0%,transparent_70%)] opacity-20 pointer-events-none"></div>
                        <div className="absolute bottom-10 right-4 text-[#222222] font-black text-8xl pointer-events-none rotate-12">VL</div>
                        <div className="inline-flex items-center gap-2 text-[#ff4655] text-sm font-black bg-[#ff4655]/10 px-3 py-1 border border-[#ff4655] mb-8 uppercase">ESPORTS STYLE</div>
                        <h2 className="text-5xl font-black text-white tracking-tighter">฿20,000</h2>
                        <div className="absolute bottom-0 right-0 w-0 h-0 border-b-[40px] border-l-[40px] border-b-[#ff4655] border-l-transparent"></div>
                    </div>
                </div>

                {/* Style 3: Cyberpunk Neon */}
                <div>
                    <h3 className="text-xl text-[#00f2fe] font-bold mb-4 font-display">3. Cyberpunk Neon Outline</h3>
                    <div className="group relative block rounded-xl h-[500px] bg-[#020202] border-2 border-[#00f2fe] p-8 shadow-[0_0_20px_rgba(0,242,254,0.4),inset_0_0_20px_rgba(0,242,254,0.2)]">
                        <div className="absolute top-[-2px] left-10 w-20 h-1 bg-[#00f2fe] shadow-[0_0_15px_#00f2fe]"></div>
                        <div className="absolute bottom-[-2px] right-10 w-32 h-1 bg-[#00f2fe] shadow-[0_0_15px_#00f2fe]"></div>
                        <div className="inline-flex items-center gap-2 text-[#00f2fe] text-sm font-bold uppercase mb-8"><span className="font-mono text-lg">{">"}</span> NEON OUTLINE_</div>
                        <h2 className="text-5xl font-black text-white drop-shadow-[0_0_10px_#00f2fe]">฿20,000</h2>
                    </div>
                </div>

                {/* Style 4: Apple Glassmorphism */}
                <div>
                    <h3 className="text-xl text-white font-bold mb-4 font-display">4. Apple Glassmorphism</h3>
                    <div className="group relative block rounded-[32px] h-[500px] bg-white/[0.05] border border-white/20 p-8 backdrop-blur-2xl shadow-[0_8px_32px_rgba(0,0,0,0.5)]">
                        <div className="inline-flex items-center gap-2 text-white/70 text-sm font-medium mb-8">Glassmorphism</div>
                        <h2 className="text-5xl font-semibold text-white tracking-tight">฿20,000</h2>
                    </div>
                </div>

                {/* Style 5: Sci-Fi Hologram */}
                <div>
                    <h3 className="text-xl text-cyan-400 font-bold mb-4 font-display">5. Sci-Fi Hologram HUD</h3>
                    <div className="group relative block rounded-lg h-[500px] bg-cyan-950/20 border border-cyan-500/50 p-8 overflow-hidden">
                        <div className="absolute inset-0 bg-[linear-gradient(transparent_50%,rgba(6,182,212,0.1)_50%)] bg-[length:100%_4px] pointer-events-none"></div>
                        <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-cyan-400"></div>
                        <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-cyan-400"></div>
                        <div className="inline-flex items-center gap-2 text-cyan-400 font-mono text-sm mb-8">[ SYS.HOLOGRAM.INIT ]</div>
                        <h2 className="text-5xl font-mono font-bold text-cyan-300 drop-shadow-[0_0_8px_cyan]">฿20,000</h2>
                    </div>
                </div>

                {/* Style 6: Golden Luxury */}
                <div>
                    <h3 className="text-xl text-amber-500 font-bold mb-4 font-display">6. Golden Luxury VIP</h3>
                    <div className="group relative block rounded-sm h-[500px] bg-[#0d0a06] p-[2px] shadow-[0_10px_40px_rgba(245,158,11,0.15)]">
                        <div className="absolute inset-0 bg-gradient-to-tr from-amber-700 via-yellow-400 to-amber-700 rounded-sm"></div>
                        <div className="relative h-full bg-[#110d08] p-8 border border-white/5">
                            <div className="inline-flex items-center gap-2 text-amber-500 text-xs font-bold tracking-[0.2em] uppercase mb-8 border-b border-amber-500/30 pb-2">EXCLUSIVE VIP</div>
                            <h2 className="text-5xl font-serif text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-yellow-500 to-amber-700">฿20,000</h2>
                        </div>
                    </div>
                </div>

                {/* Style 7: Brutalist Monochrome */}
                <div>
                    <h3 className="text-xl text-white font-bold mb-4 font-display">7. Brutalist Monochrome</h3>
                    <div className="group relative block h-[500px] bg-black border-[3px] border-white p-8 hover:bg-white hover:text-black transition-colors duration-0">
                        <div className="inline-flex items-center gap-2 font-black uppercase text-2xl mb-8 border-b-4 border-current pb-1">BRUTALIST</div>
                        <h2 className="text-6xl font-black tracking-tighter">฿20,000</h2>
                    </div>
                </div>

                {/* Style 8: Synthwave Retro */}
                <div>
                    <h3 className="text-xl text-fuchsia-500 font-bold mb-4 font-display">8. Synthwave Outrun</h3>
                    <div className="group relative block rounded-xl h-[500px] bg-[#0a001a] border-2 border-fuchsia-500 p-8 shadow-[0_0_30px_rgba(217,70,239,0.3)] overflow-hidden">
                        <div className="absolute bottom-0 left-0 w-full h-1/2 bg-[linear-gradient(transparent_90%,rgba(217,70,239,0.5)_100%),linear-gradient(90deg,transparent_90%,rgba(217,70,239,0.5)_100%)] bg-[size:20px_20px] perspective-[1000px] rotate-x-60 opacity-30"></div>
                        <div className="inline-flex items-center gap-2 text-fuchsia-400 font-bold italic mb-8 drop-shadow-[0_0_5px_fuchsia]">~ RADICAL ~</div>
                        <h2 className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-b from-cyan-400 to-fuchsia-600 drop-shadow-[0_0_10px_fuchsia]">฿20,000</h2>
                    </div>
                </div>

                {/* Style 9: Frosted Border (Linear Style) */}
                <div>
                    <h3 className="text-xl text-[#888] font-bold mb-4 font-display">9. Modern Dark (Linear)</h3>
                    <div className="group relative block rounded-xl h-[500px] bg-[#111] border border-white/[0.08] p-8 shadow-xl hover:bg-[#151515] transition-colors">
                        <div className="absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
                        <div className="inline-flex items-center gap-2 text-gray-400 text-xs font-medium mb-8 bg-white/[0.05] px-3 py-1 rounded-full border border-white/[0.05]">Modern Dark</div>
                        <h2 className="text-5xl font-bold text-[#eeeeee]">฿20,000</h2>
                    </div>
                </div>

                {/* Style 10: Hazard Industrial */}
                <div>
                    <h3 className="text-xl text-yellow-400 font-bold mb-4 font-display">10. Industrial Hazard</h3>
                    <div className="group relative block h-[500px] bg-[#1a1a1a] p-8 border-4 border-yellow-500">
                        <div className="absolute top-0 left-0 w-full h-4 bg-[repeating-linear-gradient(45deg,#eab308,#eab308_10px,#000_10px,#000_20px)]"></div>
                        <div className="absolute bottom-0 left-0 w-full h-4 bg-[repeating-linear-gradient(45deg,#eab308,#eab308_10px,#000_10px,#000_20px)]"></div>
                        <div className="inline-flex items-center gap-2 text-yellow-500 font-black text-xl mb-8 mt-4 tracking-widest uppercase">CAUTION</div>
                        <h2 className="text-6xl font-black text-white bg-black inline-block p-2">฿20,000</h2>
                    </div>
                </div>

            </div>
        </main>
    );
}
