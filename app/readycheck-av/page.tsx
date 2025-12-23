'use client';

import { useState, useEffect } from "react";
import Link from "next/link";

export default function ReadyCheckAV() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return <div className="min-h-screen bg-black" />;

  const subCategories = [
    { 
      id: "01",
      title: "AV Production Bible", 
      desc: "The definitive technical resource and podcast. Protocols, standards, and industry secrets for the modern technician.",
      img: "/rc-bible.jpg",
      link: "https://www.youtube.com/@ReadyCheckAV",
      isDownload: false
    },
    { 
      id: "02",
      title: "Upcoming Projects", 
      desc: "Current deployments and future signal architecture. A look at what's currently on the bench.",
      img: "/rc-projects.jpg",
      link: "#", 
      isDownload: false
    },
    { 
      id: "03",
      title: "Docs & Downloads", 
      desc: "Downloadable gear PDFs, schematics, and technical load-out sheets for field use.",
      img: "/rc-docs.jpg",
      link: "#", 
      isDownload: true 
    }
  ];

  return (
    <main className="relative min-h-screen w-full bg-[#020202] text-white selection:bg-sky-500/30 overflow-x-hidden font-mono">
      
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes scanline {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(100%); }
        }
        @keyframes grid-drift {
          0% { background-position: 0 0; }
          100% { background-position: 40px 40px; }
        }
      `}} />

      {/* ATMOSPHERIC BACKGROUND */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div 
          className="absolute inset-0 opacity-[0.05]" 
          style={{ 
            backgroundImage: `linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)`,
            backgroundSize: '40px 40px',
            animation: 'grid-drift 20s linear infinite'
          }} 
        />
        <div className="absolute inset-0 w-full h-[30vh] bg-gradient-to-b from-transparent via-sky-500/10 to-transparent animate-[scanline_10s_linear_infinite]" />
      </div>

      {/* NAVIGATION */}
      <nav className="relative z-50 p-10">
        <Link href="/" className="group flex items-center gap-4 text-[10px] tracking-[0.5em] text-white/30 hover:text-sky-400 transition-all">
          <span className="group-hover:-translate-x-2 transition-transform duration-500">←</span> 
          SYSTEM_RETURN
        </Link>
      </nav>

      {/* HERO HEADER */}
      <section className="relative z-10 flex flex-col items-center pt-10 pb-24 text-center px-6">
        <div className="w-12 h-[1px] bg-sky-500/50 mb-8 animate-pulse" />
        <h1 className="text-5xl md:text-8xl font-bold italic uppercase tracking-tighter mb-10">
          ReadyCheck AV
        </h1>
        <div className="flex flex-col items-center gap-4 mb-16">
          <div className="h-[1px] w-8 bg-sky-500/20" />
          <h2 className="text-[10px] md:text-xs tracking-[0.6em] md:tracking-[1.2em] text-sky-400/80 uppercase font-bold">
            Community • Education • Entertainment
          </h2>
          <div className="h-[1px] w-8 bg-sky-500/20" />
        </div>
      </section>

      {/* CONTENT NODES */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10 pb-32">
        {subCategories.map((cat) => (
          <a 
            key={cat.id} 
            href={cat.link}
            target={cat.link.startsWith('http') ? "_blank" : "_self"}
            rel="noopener noreferrer"
            className="pillar-node group relative aspect-[4/5] overflow-hidden border border-white/5 bg-white/[0.02] transition-all duration-500 cursor-pointer rounded-2xl"
          >
            {/* COLOR POP LOGIC: Starts grayscale/dim, goes full color on hover or active touch */}
            <img 
              src={cat.img} 
              alt={cat.title} 
              className="absolute inset-0 w-full h-full object-cover opacity-20 grayscale group-hover:grayscale-0 group-hover:opacity-100 group-active:grayscale-0 group-active:opacity-100 group-hover:scale-105 transition-all duration-1000" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />
            <div className="absolute inset-0 p-10 flex flex-col justify-end text-left z-20">
              
              {cat.isDownload && (
                <div className="mb-4 flex items-center gap-2 text-sky-400 animate-pulse">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-4 h-4"><path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M7.5 12l4.5 4.5m0 0l4.5-4.5M12 3v13.5" /></svg>
                  <span className="text-[8px] tracking-[0.3em] font-bold">FILE_TRANSFER_READY</span>
                </div>
              )}

              <span className="text-[9px] text-sky-500 mb-2 block tracking-[0.3em] font-bold uppercase">Node_{cat.id}</span>
              <h3 className="text-2xl font-bold uppercase italic mb-3 tracking-widest leading-tight">{cat.title}</h3>
              <p className="text-[10px] text-gray-500 leading-relaxed group-hover:text-gray-300 transition-colors duration-500">
                {cat.desc}
              </p>
              <div className="absolute top-6 right-6 w-6 h-6 border-t border-r border-white/10 group-hover:border-sky-500 transition-colors duration-500" />
            </div>
          </a>
        ))}
      </section>

      {/* JOIN THE GROUP STATION */}
      <section className="relative z-10 flex flex-col items-center text-center pb-40">
        <a 
          href="https://www.facebook.com/share/g/1AeHdraCwC/" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="pillar-node group flex flex-col items-center cursor-pointer p-10 rounded-3xl"
        >
          <span className="text-[9px] tracking-[0.8em] text-sky-500/40 uppercase opacity-0 group-hover:opacity-100 transition-all duration-1000 translate-y-2 group-hover:translate-y-0 mb-6">
            [ INITIALIZE_EXTERNAL_COMM_LINK ]
          </span>
          
          <div className="flex items-center gap-8 mb-8">
             <h2 className="text-4xl md:text-7xl font-black italic uppercase text-white/40 group-hover:text-white transition-all duration-700">
                Join the Group
            </h2>

            <div className="w-16 h-16 rounded-full border border-white/10 flex items-center justify-center transition-all duration-700 group-hover:bg-sky-600 group-hover:border-sky-600 group-hover:scale-110 shadow-2xl">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
            </div>
          </div>
          
          <div className="h-[1px] w-12 bg-sky-500/20 group-hover:w-full group-hover:bg-sky-500 transition-all duration-1000 ease-in-out" />
        </a>
      </section>

      {/* FOOTER */}
      <footer className="relative z-10 py-10 border-t border-white/5 mx-10 flex justify-between items-center opacity-20">
        <span className="text-[9px] tracking-[0.5em]">READYCHECK // v2.0.26</span>
        <div className="flex gap-10 text-[9px] tracking-[0.3em]">
          <span>STATUS: ONLINE</span>
          <span>LATENCY: 12ms</span>
        </div>
      </footer>

    </main>
  );
}