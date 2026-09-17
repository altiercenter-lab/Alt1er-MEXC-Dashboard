import Link from "next/link";
import Image from "next/image";
import { HeroAuthStatus } from "@/components/AuthButtons";

export default function Home() {
  return (
    <main className="flex-1 w-full max-w-6xl mx-auto p-6 mt-10 relative z-10">
      
      {/* Header Section */}
      <div className="text-center mb-12">
          <h2 className="text-gray-400 uppercase tracking-widest text-sm mb-3 font-display">Season Prize Pool</h2>
          <h1 className="text-5xl md:text-6xl font-display font-bold mb-6">
              ฿100,000 <span className="text-altOrange drop-shadow-[0_0_15px_rgba(255,123,0,0.8)]">incl. iPhone 18</span>
          </h1>
          
          {/* Connection Status */}
          <div className="inline-flex flex-col items-center gap-4 bg-altDark border border-gray-800 p-6 rounded-2xl w-full max-w-2xl mt-4 relative overflow-hidden mx-auto">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-altOrange to-transparent opacity-50"></div>
              <h3 className="text-lg font-semibold text-gray-300">Link your accounts to participate</h3>
              
              <div className="flex flex-col sm:flex-row gap-4 w-full">
                  <HeroAuthStatus />
              </div>
          </div>
      </div>

      {/* The Two Boards */}
      <div className="grid lg:grid-cols-2 gap-10 mb-16 relative z-10">
          
          {/* Creator Board (Alt1er Synthwave) */}
          <Link href="/creator-board" className="group relative block rounded-xl transition-all duration-300 hover:-translate-y-2 bg-[#050200] border-2 border-[#ff7b00] p-8 md:p-10 shadow-[0_0_40px_rgba(255,123,0,0.2)] hover:shadow-[0_0_60px_rgba(255,123,0,0.4)] overflow-hidden">
              
              {/* Retro 3D Grid */}
              <div className="absolute bottom-[-10%] left-[-20%] w-[140%] h-[60%] bg-[linear-gradient(transparent_90%,rgba(255,123,0,0.5)_100%),linear-gradient(90deg,transparent_90%,rgba(255,123,0,0.5)_100%)] bg-[size:30px_30px] [transform:perspective(500px)_rotateX(60deg)] opacity-40 group-hover:opacity-70 transition-opacity duration-500 pointer-events-none"></div>

              {/* Sun/Glow */}
              <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-48 h-48 bg-[#ff7b00] blur-[100px] opacity-20 pointer-events-none"></div>

              <div className="relative z-10">
                  <div className="flex justify-between items-start mb-10">
                      <div className="inline-flex items-center gap-2 text-[#ff7b00] text-sm font-bold italic tracking-widest uppercase drop-shadow-[0_0_8px_#ff7b00]">
                          ~ CREATOR BOARD ~
                      </div>
                  </div>
                  
                  <h2 className="text-6xl font-black mb-8 tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white to-[#ff7b00] drop-shadow-[0_0_15px_rgba(255,123,0,0.8)] italic">฿20,000</h2>
                  
                  <div className="space-y-4 text-[#ffcda3] text-sm mb-10 font-medium">
                      <div className="grid grid-cols-[100px_1fr] border-b border-[#ff7b00]/20 pb-3">
                          <span className="text-[#ff7b00] font-black uppercase tracking-wider text-xs mt-0.5 drop-shadow-[0_0_5px_#ff7b00]">Who</span>
                          <span className="text-white">Content creators with an audience</span>
                      </div>
                      <div className="grid grid-cols-[100px_1fr] border-b border-[#ff7b00]/20 pb-3">
                          <span className="text-[#ff7b00] font-black uppercase tracking-wider text-xs mt-0.5 drop-shadow-[0_0_5px_#ff7b00]">Scored on</span>
                          <span className="text-white">Views, Likes, Posts on X</span>
                      </div>
                      <div className="grid grid-cols-[100px_1fr]">
                          <span className="text-[#ff7b00] font-black uppercase tracking-wider text-xs mt-0.5 drop-shadow-[0_0_5px_#ff7b00]">To join</span>
                          <span className="text-white">Plug in X Account, Post & Engage</span>
                      </div>
                  </div>

                  <div className="bg-[#000000]/60 p-6 border-2 border-[#ff7b00]/30 rounded-lg backdrop-blur-sm shadow-[inset_0_0_20px_rgba(255,123,0,0.1)]">
                      <div className="grid grid-cols-2 gap-x-6 gap-y-3 text-sm font-bold">
                          <div className="flex justify-between items-center"><span className="text-[#ff7b00] uppercase italic">1st</span> <span className="text-white text-lg drop-shadow-[0_0_8px_#ff7b00]">฿4,500</span></div>
                          <div className="flex justify-between items-center"><span className="text-[#ff7b00] uppercase italic">2nd</span> <span className="text-white text-lg">฿3,000</span></div>
                          <div className="flex justify-between items-center"><span className="text-[#ff7b00] uppercase italic">3rd</span> <span className="text-white text-lg">฿1,750</span></div>
                          <div className="flex justify-between items-center"><span className="text-[#ff7b00] uppercase italic">4th - 10th</span> <span className="text-white text-lg">฿1,000</span></div>
                          <div className="flex justify-between items-center col-span-2 mt-2 pt-4 border-t border-[#ff7b00]/20"><span className="text-[#ff7b00] uppercase italic">11th to 25th</span> <span className="text-white text-lg">฿250</span></div>
                      </div>
                  </div>
              </div>
          </Link>

          {/* Season Board (Alt1er Synthwave) */}
          <Link href="/season-board" className="group relative block rounded-xl transition-all duration-300 hover:-translate-y-2 bg-[#000405] border-2 border-[#00f2fe] p-8 md:p-10 shadow-[0_0_40px_rgba(0,242,254,0.2)] hover:shadow-[0_0_60px_rgba(0,242,254,0.4)] overflow-hidden">
              
              {/* Retro 3D Grid */}
              <div className="absolute bottom-[-10%] left-[-20%] w-[140%] h-[60%] bg-[linear-gradient(transparent_90%,rgba(0,242,254,0.5)_100%),linear-gradient(90deg,transparent_90%,rgba(0,242,254,0.5)_100%)] bg-[size:30px_30px] [transform:perspective(500px)_rotateX(60deg)] opacity-40 group-hover:opacity-70 transition-opacity duration-500 pointer-events-none"></div>

              {/* Sun/Glow */}
              <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-48 h-48 bg-[#00f2fe] blur-[100px] opacity-20 pointer-events-none"></div>

              <div className="relative z-10">
                  <div className="flex justify-between items-start mb-10">
                      <div className="inline-flex items-center gap-2 text-[#00f2fe] text-sm font-bold italic tracking-widest uppercase drop-shadow-[0_0_8px_#00f2fe]">
                          ~ SEASON BOARD ~
                      </div>
                  </div>
                  
                  <h2 className="text-5xl lg:text-6xl font-black mb-8 tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white to-[#00f2fe] drop-shadow-[0_0_15px_rgba(0,242,254,0.8)] italic flex items-baseline gap-2">
                      ฿40,000 <span className="text-xl text-[#00f2fe] font-bold">+ iPhone</span>
                  </h2>
                  
                  <div className="space-y-4 text-[#a3ebff] text-sm mb-10 font-medium">
                      <div className="grid grid-cols-[100px_1fr] border-b border-[#00f2fe]/20 pb-3">
                          <span className="text-[#00f2fe] font-black uppercase tracking-wider text-xs mt-0.5 drop-shadow-[0_0_5px_#00f2fe]">Who</span>
                          <span className="text-white">Every community member</span>
                      </div>
                      <div className="grid grid-cols-[100px_1fr] border-b border-[#00f2fe]/20 pb-3">
                          <span className="text-[#00f2fe] font-black uppercase tracking-wider text-xs mt-0.5 drop-shadow-[0_0_5px_#00f2fe]">Scored on</span>
                          <span className="text-white">Points from Discord missions</span>
                      </div>
                      <div className="grid grid-cols-[100px_1fr]">
                          <span className="text-[#00f2fe] font-black uppercase tracking-wider text-xs mt-0.5 drop-shadow-[0_0_5px_#00f2fe]">To join</span>
                          <span className="text-white">Join Discord, get Verified Role</span>
                      </div>
                  </div>

                  <div className="bg-[#000000]/60 p-6 border-2 border-[#00f2fe]/30 rounded-lg backdrop-blur-sm shadow-[inset_0_0_20px_rgba(0,242,254,0.1)]">
                      <div className="grid grid-cols-2 gap-x-6 gap-y-3 text-sm font-bold">
                          <div className="flex justify-between items-center"><span className="text-[#00f2fe] uppercase italic">1st</span> <span className="text-white text-lg drop-shadow-[0_0_8px_#00f2fe]">iPhone 18</span></div>
                          <div className="flex justify-between items-center"><span className="text-[#00f2fe] uppercase italic">2nd</span> <span className="text-white text-lg">฿5,000</span></div>
                          <div className="flex justify-between items-center"><span className="text-[#00f2fe] uppercase italic">3rd</span> <span className="text-white text-lg">฿4,000</span></div>
                          <div className="flex justify-between items-center"><span className="text-[#00f2fe] uppercase italic">4th - 10th</span> <span className="text-white text-lg">฿2,000</span></div>
                          <div className="flex justify-between items-center col-span-2 mt-2 pt-4 border-t border-[#00f2fe]/20"><span className="text-[#00f2fe] uppercase italic">11th to 50th</span> <span className="text-white text-lg">฿200+</span></div>
                      </div>
                  </div>
              </div>
          </Link>
      </div>
    </main>
  );
}
