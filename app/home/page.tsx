'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

interface Star {
  top: string; left: string; size: number; duration: number;
  delay: number; opacity: number; isBright: boolean; breathDur: number;
}

export default function MediaHub() {
  const [mounted, setMounted] = useState(false);
  const [stars, setStars] = useState<Star[]>([]);

  useEffect(() => {
    const generatedStars = Array.from({ length: 180 }).map((_, i) => ({
      top: `${Math.random() * 150 - 25}%`,
      left: `${Math.random() * 150 - 25}%`,
      size: Math.random() * 2.5 + 1,
      duration: 30 + Math.random() * 60,
      delay: Math.random() * -100,
      opacity: 0.5 + Math.random() * 0.5,
      isBright: i % 8 === 0,
      breathDur: 4 + Math.random() * 6
    }));
    setStars(generatedStars);
    setMounted(true);
  }, []);

  if (!mounted) return <div className="min-h-screen bg-black" />;

  const socials = [
    { name: "YouTube", url: "https://www.youtube.com/@Liminalarcmedia/featured", icon: (<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 2-2 58.38 58.38 0 0 1 15 0 2 2 0 0 1 2 2 24.12 24.12 0 0 1 0 10 2 2 0 0 1-2 2 58.38 58.38 0 0 1-15 0 2 2 0 0 1-2-2Z"/><path d="m10 15 5-3-5-3z"/></svg>) },
    { name: "TikTok", url: "https://www.tiktok.com/@liminalarcmedia", icon: (<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"/></svg>) },
    { name: "Instagram", url: "https://www.instagram.com/liminalarcmedia/", icon: (<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>) }
  ];

  return (
    <main className="relative min-h-screen w-full bg-black text-white overflow-x-hidden font-sans">
      <div className="fixed inset-0 z-0 h-full w-full pointer-events-none bg-black">
        {stars.map((star, i) => (
          <div key={i} className="absolute bg-white rounded-full" style={{
              top: star.top, left: star.left, width: `${star.size}px`, height: `${star.size}px`,
              opacity: star.opacity, animation: `travel ${star.duration}s linear infinite`,
              animationDelay: `${star.delay}s`,
              boxShadow: star.isBright ? '0 0 15px 2px rgba(255,255,255,0.8)' : '0 0 5px 0px rgba(255,255,255,0.3)'
            }} />
        ))}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_20%,black_100%)] opacity-80" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 py-24 flex flex-col items-center">
        <div className="mb-48 flex flex-col items-center">
          <img src="/lam-logo-mark.png" alt="Logo" className="h-32 md:h-52 w-auto mix-blend-screen" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 w-full mb-12">
          {/* Pillar 1 */}
          <a href="https://youtu.be/c3TFhMDaf4w?si=d85QKXGEoOArUPtO" target="_blank" rel="noopener noreferrer" className="pillar-node group relative h-[650px] overflow-hidden rounded-[3.5rem] border bg-white/[0.01] backdrop-blur-3xl flex flex-col justify-end text-center p-10 shadow-2xl">
            <img src="/liminal-minds-bg.jpg" alt="Minds" className="absolute inset-0 w-full h-full object-cover opacity-20 grayscale group-hover:opacity-100 group-hover:grayscale-0 group-active:opacity-100 group-active:grayscale-0 transition-all duration-700" />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent z-10" />
            <div className="relative z-20">
              <span className="text-[10px] font-mono tracking-[0.5em] text-white/20 uppercase mb-4 block group-hover:text-white/60">Inner Protocol</span>
              <h3 className="text-4xl font-bold italic uppercase mb-2 tracking-tighter">Liminal Minds</h3>
              <div className="h-[1px] w-6 bg-white/10 mx-auto group-hover:w-24 group-hover:bg-white transition-all" />
            </div>
          </a>

          {/* Pillar 2 */}
          <Link href="/originals" className="pillar-node group relative h-[650px] overflow-hidden rounded-[3.5rem] border bg-white/[0.01] backdrop-blur-3xl flex flex-col justify-end text-center p-10 shadow-2xl">
            <img src="/arc-originals-bg.jpg" alt="Originals" className="absolute inset-0 w-full h-full object-cover opacity-20 grayscale group-hover:opacity-100 group-hover:grayscale-0 group-active:opacity-100 group-active:grayscale-0 transition-all duration-700" />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent z-10" />
            <div className="relative z-20">
              <span className="text-[10px] font-mono tracking-[0.5em] text-white/20 uppercase mb-4 block group-hover:text-white/60">Core Universe</span>
              <h3 className="text-4xl font-bold italic uppercase mb-2 tracking-tighter">Arc Originals</h3>
              <div className="h-[1px] w-6 bg-white/10 mx-auto group-hover:w-24 group-hover:bg-white transition-all" />
            </div>
          </Link>

          {/* Pillar 3 - ReadyCheck AV Centered Fix */}
          <Link href="/readycheck-av" className="pillar-node group relative h-[650px] overflow-hidden rounded-[3.5rem] border bg-white/[0.01] backdrop-blur-3xl flex flex-col justify-end text-center p-10 shadow-2xl">
            <img src="/ready-check-logo.jpg" alt="AV" className="absolute inset-0 w-full h-full object-cover opacity-20 grayscale group-hover:opacity-100 group-hover:grayscale-0 group-active:opacity-100 group-active:grayscale-0 transition-all duration-700" />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent z-10" />
            <div className="relative z-20">
              <span className="text-[10px] font-mono tracking-[0.5em] text-white/20 uppercase mb-4 block group-hover:text-white/60">Technical Signal</span>
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold italic uppercase mb-2 tracking-tighter leading-tight">
                ReadyCheck<br className="md:hidden" /> AV
              </h3>
              <div className="h-[1px] w-6 bg-white/10 mx-auto group-hover:w-24 group-hover:bg-white transition-all" />
            </div>
          </Link>
        </div>

        {/* Liora Signal Section */}
        <Link href="/liora-signal" className="pillar-node group relative w-full h-64 rounded-[3.5rem] border bg-black overflow-hidden flex items-center justify-between px-16 shadow-2xl mt-12 mb-32">
          <img src="/liora-signal-bg.jpg" alt="Liora" className="absolute inset-0 w-full h-full object-cover opacity-10 grayscale group-hover:opacity-100 group-hover:grayscale-0 group-active:opacity-100 group-active:grayscale-0 transition-all duration-1000" />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent z-10" />
          <div className="relative z-20 flex flex-col text-left">
            <span className="text-[10px] font-mono tracking-[0.5em] text-white/20 uppercase mb-2">The Starlight Shards Continuum</span>
            <h3 className="text-2xl md:text-5xl font-bold italic uppercase text-white tracking-[0.1em]">The Liora Signal</h3>
          </div>
          <div className="relative z-20 h-16 w-16 md:h-20 md:w-20 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all">
            <svg fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-8 h-8 md:w-10 md:h-10"><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" /></svg>
          </div>
        </Link>

        {/* Community & Socials */}
        <div className="mb-48 flex flex-col items-center text-center">
          <a href="https://www.facebook.com/profile.php?id=61583994562975" target="_blank" rel="noopener noreferrer" className="pillar-node group flex flex-col items-center cursor-pointer mb-16 p-8 rounded-[3.5rem]">
            <span className="text-[9px] font-mono tracking-[1em] text-white/40 uppercase opacity-0 group-hover:opacity-100 transition-all duration-1000"> [ DIRECT_EXTERNAL_LINK ] </span>
            <h2 className="mt-4 text-4xl md:text-8xl font-black italic uppercase text-white/60 group-hover:text-white transition-all"> Join the Community </h2>
            <div className="mt-6 h-[1px] w-8 bg-white/10 group-hover:w-full group-hover:bg-white transition-all duration-1000" />
          </a>
          <div className="flex gap-12 md:gap-24 opacity-40 hover:opacity-100 transition-opacity">
            {socials.map((social) => (
              <a key={social.name} href={social.url} target="_blank" rel="noopener noreferrer" className="text-white hover:scale-110 transition-transform">{social.icon}</a>
            ))}
          </div>
        </div>

        <footer className="w-full mt-24 py-20 border-t border-white/5 flex justify-between items-center opacity-30 text-[11px] font-mono uppercase tracking-[0.8em]">
            <p>Liminal Arc • 2026</p>
            <div className="flex gap-12 tracking-[0.4em]">
              <a href="https://www.youtube.com/@LiminalArcMedia" target="_blank" className="hover:text-white">YouTube</a>
              <a href="mailto:liminalarcmedia@gmail.com" className="hover:text-white underline underline-offset-8">Inquiries</a>
            </div>
        </footer>
      </div>
    </main>
  );
}