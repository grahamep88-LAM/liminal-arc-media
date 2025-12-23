'use client';

import { useState, useEffect } from "react";
import Link from "next/link";

export default function OriginalsHub() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return <div className="min-h-screen bg-black" />;

  const narrativePillars = [
    {
      id: "01",
      title: "The Last Days of Aevyssar",
      desc: "Chronicles of the fall. Experience the final moments of a dying world through the Aevyssar Protocol.",
      img: "/originals-aevyssar.jpg",
      url: "https://youtu.be/q7bZYtiqAJc?si=zZOTr4sR0bFDQuSv",
      label: "Chronicle"
    },
    {
      id: "02",
      title: "Neon Warlord",
      desc: "Synthetic warfare in the sprawl. The Shadow Odyssey continues through the eyes of the augmented.",
      img: "/originals-neon.jpg",
      url: "https://youtu.be/9RyVuvgZ5A8?si=iGMPcUnI3Ds3wQPY",
      label: "Odyssey"
    },
    {
      id: "03",
      title: "Exodus Sol",
      desc: "The Great Migration beyond the reach of the sun. A journey into the starlight shards continuum.",
      img: "/originals-exodus.jpg",
      url: "https://youtu.be/arimG41Vaqg?si=YRg9bDeTJUO_L06f",
      label: "Voyage"
    }
  ];

  return (
    <main className="relative min-h-screen w-full bg-[#030205] text-white selection:bg-orange-500/30 overflow-x-hidden font-sans">
      
      {/* 1. ALIEN CORONA ENGINE */}
      <svg className="hidden">
        <filter id="abyssal-flare">
          <feTurbulence type="fractalNoise" baseFrequency="0.01 0.04" numOctaves="5" result="noise" />
          <feDisplacementMap in="SourceGraphic" in2="noise" scale="80" />
        </filter>
      </svg>

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes aura-drift {
          0% { transform: translate(-50%, -50%) rotate(0deg) scale(1); opacity: 0.4; }
          50% { transform: translate(-50%, -50%) rotate(180deg) scale(1.1); opacity: 0.6; }
          100% { transform: translate(-50%, -50%) rotate(360deg) scale(1); opacity: 0.4; }
        }
        @keyframes text-glow {
          0% { text-shadow: 0 0 10px rgba(249, 115, 22, 0); color: rgba(255,255,255,0.7); }
          50% { text-shadow: 0 0 20px rgba(139, 92, 246, 0.4); color: rgba(255,255,255,1); }
          100% { text-shadow: 0 0 10px rgba(249, 115, 22, 0); color: rgba(255,255,255,0.7); }
        }
      `}} />

      {/* 2. ATMOSPHERIC LAYERS */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden bg-[#030205]">
        
        {/* THE ALIEN CORONA (Soft atmospheric shift) */}
        <div 
          className="absolute top-1/2 left-1/2 w-[160vh] h-[160vh] opacity-40 blur-[80px] mix-blend-screen"
          style={{ 
            background: 'radial-gradient(circle, #fbbf24 10%, #ea580c 30%, #7c3aed 50%, transparent 70%)',
            filter: 'url(#abyssal-flare)',
            animation: 'aura-drift 90s linear infinite'
          }}
        />

        {/* SOFT CORE (Diffused light) */}
        <div 
          className="absolute top-1/2 left-1/2 w-[60vh] h-[60vh] blur-[120px] rounded-full opacity-50"
          style={{
            background: 'radial-gradient(circle, #fff 0%, #f59e0b 40%, #7c3aed 100%)',
            transform: 'translate(-50%, -50%)'
          }}
        />

        <div className="absolute inset-0 opacity-[0.1] bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#030205_85%)]" />
      </div>

      {/* 3. NAVIGATION */}
      <nav className="relative z-50 p-10 flex justify-between items-center">
        <Link href="/home" className="group flex items-center gap-4 text-[10px] font-mono tracking-[0.5em] text-white/30 hover:text-white transition-all">
          <span className="group-hover:-translate-x-2 transition-transform duration-500">←</span> 
          SYSTEM_RETURN
        </Link>
        <span className="text-[9px] font-mono text-white/10 tracking-[1.2em] uppercase">Core Universe // Abyssal_Signal</span>
      </nav>

      {/* 4. THE NARRATIVE FREQUENCY */}
      <section className="relative z-10 flex flex-col items-center pt-32 pb-48 text-center px-6">
        
        <div className="absolute inset-x-0 top-0 h-full bg-black/40 blur-[120px] z-[-1] pointer-events-none" />

        <div className="max-w-4xl space-y-12 group cursor-default">
          <div className="w-12 h-[1px] bg-white/20 mx-auto mb-16 transition-all group-hover:w-32 group-hover:bg-orange-500 duration-1000" />
          
          <p className="text-xs md:text-sm text-gray-300 tracking-[0.5em] uppercase leading-relaxed font-bold transition-colors group-hover:text-white duration-700">
            Arc Originals is where Liminal Arc Media builds stories that refuse to recycle.
          </p>
          
          <p className="text-[10px] md:text-xs text-gray-400 tracking-[0.4em] uppercase leading-loose font-light italic transition-all duration-700 group-hover:text-gray-200">
            Cross the arc into the space between spaces, where <br/>
            <span className="text-orange-500/80 font-bold transition-colors">Exodus Sol</span>, 
            <span className="text-orange-500/80 font-bold mx-4 transition-colors">The Last Days of Aevyssar</span>, and 
            <span className="text-orange-500/80 font-bold ml-4 transition-colors">Neon Warlord</span> 
            <br/> aren’t just stories, they’re frequencies.
          </p>
          
          <p className="text-[10px] md:text-xs text-gray-400 tracking-[0.6em] uppercase leading-relaxed font-medium transition-all duration-700">
            Fiction that hits like a transmission from an adjacent dimension, close enough to feel real, strange enough to stay.
          </p>

          <a 
            href="https://youtu.be/zq3JHHz5Vpo?si=Y6iSoNrLaJd_6UYJ" 
            target="_blank" 
            rel="noopener noreferrer"
            className="block pt-12"
          >
            <p className="text-sm md:text-lg text-white/60 tracking-[1.2em] uppercase transition-colors duration-1000 hover:text-white" style={{ animation: 'text-glow 4s ease-in-out infinite' }}>
              Welcome to the frequency.
            </p>
          </a>
        </div>
      </section>

      {/* 5. NARRATIVE PILLARS -> DIRECT LINKS */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-16 pb-64">
        {narrativePillars.map((node) => (
          <a 
            key={node.id} 
            href={node.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative aspect-[3/4] overflow-hidden rounded-[3rem] border border-white/5 bg-white/[0.01] hover:border-orange-500/40 transition-all duration-1000 shadow-2xl"
          >
            <img 
              src={node.img} 
              alt={node.title} 
              className="absolute inset-0 w-full h-full object-cover opacity-20 grayscale group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-[2s] ease-out" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent z-10" />
            <div className="absolute inset-0 p-12 flex flex-col justify-end text-left z-20">
              <span className="text-[9px] text-orange-600 mb-4 block tracking-[0.4em] font-bold uppercase">{node.label} // NODE_{node.id}</span>
              <h3 className="text-3xl font-bold uppercase italic mb-6 tracking-tighter leading-none">{node.title}</h3>
              <p className="text-[11px] text-gray-500 leading-relaxed font-light group-hover:text-gray-200 transition-colors duration-1000">
                {node.desc}
              </p>
            </div>
          </a>
        ))}
      </section>

      <footer className="relative z-10 py-16 border-t border-white/5 mx-10 flex justify-between items-center opacity-20">
        <span className="text-[9px] font-mono tracking-[0.8em]">LIMINAL_ARC // FREQUENCY_LOCKED</span>
        <div className="flex gap-10 text-[9px] font-mono tracking-[0.3em]">
            <span>STATUS: STABLE</span>
            <span>PROXIMITY: ABYSSAL_CORE</span>
        </div>
      </footer>
    </main>
  );
}