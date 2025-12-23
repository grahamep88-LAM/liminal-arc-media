'use client';

import Image from "next/image";
import Link from "next/link";

export default function CommunityPage() {
  const signalLogs = [
    "User_041: Sequence detected in Aevyssar sector.",
    "User_089: The Liora Signal has been acquired.",
    "System: New technician joined ReadyCheck AV.",
    "User_012: Wolf of the Kami lore confirmed.",
    "System: Portal 17g9dLNuT8 active."
  ];

  return (
    <main className="relative min-h-screen w-full bg-[#050505] text-white selection:bg-orange-500/30">
      
      {/* 1. ATMOSPHERIC BACKGROUND */}
      <div className="fixed inset-0 -z-10 h-full w-full">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_#1a1a1a_0%,#000_100%)] opacity-90" />
      </div>

      <div className="mx-auto max-w-5xl px-6 py-12">
        
        {/* 2. NAVIGATION */}
        <nav className="mb-20">
          <Link href="/" className="group flex items-center gap-2 text-[10px] font-tech uppercase tracking-[0.4em] text-gray-500 hover:text-white transition-colors">
            <span className="group-hover:-translate-x-1 transition-transform">←</span> Return to Terminal
          </Link>
        </nav>

        {/* 3. HEADER */}
        <header className="mb-24 text-center">
          <span className="text-[11px] font-tech tracking-[0.8em] text-orange-500 uppercase mb-4">Threshold Protocol</span>
          <h1 className="font-headline text-5xl md:text-7xl font-black italic uppercase">The Community</h1>
          <p className="mt-8 text-gray-400 font-light tracking-[0.2em] text-sm uppercase">Bridging the gap between the physical and the infinite.</p>
        </header>

        {/* 4. THE LIVE SIGNAL LOG (Atmospheric Only) */}
        <div className="mb-16 rounded-3xl border border-white/10 bg-black/50 p-8 font-tech text-[12px] text-orange-500/70 shadow-2xl">
          <div className="mb-4 flex items-center gap-2 border-b border-white/5 pb-2 uppercase tracking-widest text-gray-500 font-bold">
            <div className="h-2 w-2 rounded-full bg-orange-500 animate-ping" />
            Live Signal Feed
          </div>
          <div className="space-y-2">
            {signalLogs.map((log, i) => (
              <p key={i} className="animate-in slide-in-from-left duration-700">
                <span className="opacity-40">[{new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}]</span> {log}
              </p>
            ))}
          </div>
        </div>

        {/* 5. PRIMARY ACTION: FACEBOOK BRIDGE */}
        <div className="flex justify-center">
          <a href="https://www.facebook.com/share/g/17g9dLNuT8/" target="_blank" 
             className="group relative w-full overflow-hidden rounded-[3rem] border border-white/20 bg-white/5 p-16 transition-all hover:border-orange-500 hover:scale-[1.01] shadow-2xl text-center">
            
            <div className="relative z-10 flex flex-col items-center">
              <h3 className="font-headline text-4xl font-bold uppercase mb-6 tracking-widest">Access the Facebook Group</h3>
              <p className="text-gray-400 font-light tracking-widest leading-relaxed max-w-lg mb-10 text-lg">
                Join the inner circle. Discuss lore, share production gear, and connect directly with Graham Pelham and the Liminal Arc crew.
              </p>
              
              <div className="px-10 py-5 rounded-full bg-white text-black font-tech text-[11px] uppercase tracking-[0.4em] font-black group-hover:bg-orange-500 group-hover:text-white transition-all duration-500">
                Enter the Hub
              </div>
            </div>

            {/* Background Glow for Hover */}
            <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 via-transparent to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
          </a>
        </div>

        {/* 6. FOOTER */}
        <footer className="mt-48 py-20 border-t border-white/10 flex flex-col items-center">
            <p className="text-[11px] font-tech uppercase tracking-[0.8em] text-gray-600">Threshold Protocol • 2026</p>
        </footer>
      </div>
    </main>
  );
}