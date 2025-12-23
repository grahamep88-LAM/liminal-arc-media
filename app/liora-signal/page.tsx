'use client'; // Mandatory for Next.js hooks

import React, { useState, useEffect } from 'react';
import Image from "next/image";
import Link from "next/link";

interface Shard {
  top: string;
  left: string;
  size: number;
  duration: number;
  delay: number;
  opacity: number;
}

export default function LioraSignalPage() {
  const [mounted, setMounted] = useState(false);
  const [shards, setShards] = useState<Shard[]>([]);

  useEffect(() => {
    // Generate 120 "Starlight Shards" for the continuum effect
    const generatedShards = Array.from({ length: 120 }).map(() => ({
      top: `${Math.random() * 120 - 10}%`,
      left: `${Math.random() * 120 - 10}%`,
      size: Math.random() * 2 + 0.5,
      duration: 40 + Math.random() * 60,
      delay: Math.random() * -100,
      opacity: 0.1 + Math.random() * 0.4,
    }));
    
    setShards(generatedShards);
    setMounted(true);
  }, []);

  const books = [
    {
      title: "I. The Liora Signal",
      subtitle: "Consciousness in the Quantum Foam",
      description: "Aboard the Iridium Ark, technician Ema Vasquez detects a voice calling from the quantum foam. What begins as a whisper becomes Dr. Sarah Huang—a scientist lost centuries ago.",
      link: "https://www.amazon.com/dp/B0FL1YPYD4",
      image: "/liora-book-1.jpg" 
    },
    {
      title: "II. The Archive at Node 27",
      subtitle: "Where Death is a Transformation",
      description: "What if death was just another form of connection? Mira Chen discovers a living network within a sacred repository—a collective where loneliness cannot exist.",
      link: "https://www.amazon.com/dp/B0FL1YPYD4",
      image: "/liora-book-2.jpg"
    },
    {
      title: "III. The Echo Chamber Protocol",
      subtitle: "The Future of Identity",
      description: "Your thoughts aren't private. When reality fractures, Dr. Yuki Tanaka discovers that consciousness isn't created—it's copied. A cerebral descent into mutable identity.",
      link: "https://www.amazon.com/dp/B0FL1YPYD4",
      image: "/liora-book-3.jpg"
    },
    {
      title: "IV. The Membrane Theory",
      subtitle: "Evolution Beyond Biology",
      description: "Iris exists in WiFi and starlight. As the first child born as pure consciousness, she becomes humanity's ambassador to an ancient loneliness hidden in dark matter.",
      link: "https://www.amazon.com/dp/B0FL1YPYD4",
      image: "/liora-book-4.jpg"
    }
  ];

  if (!mounted) return <div className="min-h-screen bg-[#020308]" />;

  return (
    <main className="relative min-h-screen w-full bg-[#020308] text-white selection:bg-cyan-500/30 overflow-x-hidden font-sans">
      
      {/* 1. CONTINUUM ENGINE */}
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes shard-drift {
          0% { transform: translate3d(0, 0, 0) rotate(0deg); }
          100% { transform: translate3d(-10vw, -10vh, 0) rotate(15deg); }
        }
        @keyframes title-pulse {
          0%, 100% { text-shadow: 0 0 20px rgba(34, 211, 238, 0.2); }
          50% { text-shadow: 0 0 40px rgba(34, 211, 238, 0.5); }
        }
      `}} />

      {/* 2. THE ALIEN BACKGROUND */}
      <div className="fixed inset-0 z-0 h-full w-full pointer-events-none overflow-hidden">
        {/* Shard Field */}
        {shards.map((shard, i) => (
          <div key={i} className="absolute bg-cyan-200 rounded-sm" style={{
              top: shard.top, left: shard.left, width: `${shard.size}px`, height: `${shard.size}px`,
              opacity: shard.opacity, animation: `shard-drift ${shard.duration}s linear infinite`,
              animationDelay: `${shard.delay}s`,
              boxShadow: '0 0 8px 1px rgba(165, 243, 252, 0.3)'
            }} />
        ))}
        {/* Liquid Nebula Overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(8,47,73,0.2)_0%,transparent_80%)]" />
        <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-[1600px] px-6 py-12">
        
        {/* BACK NAVIGATION (Direct to Media Hub) */}
        <nav className="mb-20">
          <Link href="/home" className="group flex items-center gap-4 text-[10px] font-mono uppercase tracking-[0.5em] text-cyan-500/40 hover:text-cyan-400 transition-all">
            <span className="group-hover:-translate-x-2 transition-transform duration-500">←</span> 
            Return to Arc Terminal
          </Link>
        </nav>

        {/* SERIES HEADER */}
        <header className="mb-48 flex flex-col items-center text-center">
          <span className="text-[11px] font-mono tracking-[1em] text-cyan-500 uppercase mb-8 animate-pulse">
            A Transmission by Graham Pelham
          </span>
          
          <div className="relative">
            <h1 className="font-black text-5xl md:text-[8rem] tracking-tighter uppercase leading-[0.85] text-white/90" style={{ animation: 'title-pulse 8s ease-in-out infinite' }}>
              THE STARLIGHT <br/> 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-cyan-600 italic">SHARDS</span>
            </h1>
            <h1 className="font-black text-5xl md:text-[8rem] tracking-tighter uppercase leading-[0.85] mt-2 bg-clip-text text-transparent border-t border-white/10" style={{ WebkitTextStroke: '1px rgba(255,255,255,0.2)' }}>
              CONTINUUM
            </h1>
          </div>

          <div className="mt-16 flex items-center gap-8">
            <div className="h-[1px] w-20 bg-cyan-500/20" />
            <p className="max-w-xl text-[10px] md:text-sm text-cyan-100/40 font-light tracking-[0.5em] leading-relaxed uppercase">
              "Consciousness is the only shard that cannot be broken."
            </p>
            <div className="h-[1px] w-20 bg-cyan-500/20" />
          </div>
        </header>

        {/* BOOK GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {books.map((book, index) => (
            <div key={index} className="group relative flex flex-col h-full bg-white/[0.02] border border-white/5 rounded-[3rem] p-8 backdrop-blur-3xl transition-all duration-700 hover:border-cyan-500/30 hover:-translate-y-2">
              
              {/* Cover Container */}
              <div className="relative aspect-[2/3] w-full mb-10 rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
                <Image src={book.image} alt={book.title} fill className="object-cover group-hover:scale-110 transition-transform duration-[2s]" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              </div>
              
              <div className="flex-grow space-y-4">
                <span className="text-[9px] font-mono tracking-[0.4em] text-cyan-400/60 uppercase block">{book.subtitle}</span>
                <h3 className="text-2xl font-bold italic tracking-tighter uppercase mb-6 leading-tight group-hover:text-cyan-100 transition-colors">
                  {book.title}
                </h3>
                <p className="text-[11px] text-gray-500 font-light leading-relaxed tracking-wider mb-10 group-hover:text-gray-300 transition-colors">
                  {book.description}
                </p>
              </div>
              
              <a href={book.link} target="_blank" className="w-full py-6 rounded-2xl border border-white/10 bg-black/40 text-center text-[10px] font-mono uppercase tracking-[0.6em] transition-all hover:bg-cyan-600 hover:text-white hover:border-cyan-600">
                Acquire Transmission
              </a>
            </div>
          ))}
        </div>

        {/* FOOTER */}
        <footer className="mt-64 py-24 border-t border-white/5 flex flex-col items-center opacity-30">
            <p className="text-[11px] font-mono uppercase tracking-[1em] text-cyan-500/80">Liminal Arc Literary Division • 2026</p>
        </footer>
      </div>
    </main>
  );
}