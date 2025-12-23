'use client';

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function IntroGateway() {
  const router = useRouter();
  const [isExiting, setIsExiting] = useState(false);

  const startJourney = () => {
    setIsExiting(true);
    // Timing for a heavy cinematic fade to the Media Hub
    setTimeout(() => {
      router.push('/home');
    }, 1000);
  };

  return (
    <main className="relative h-screen w-full bg-black overflow-hidden flex flex-col items-center justify-center">
      
      {/* BLACKOUT TRANSITION ENGINE */}
      <div 
        className={`fixed inset-0 z-[100] bg-black transition-opacity duration-1000 pointer-events-none ${
          isExiting ? 'opacity-100' : 'opacity-0'
        }`} 
      />

      {/* THE INTRO VIDEO: ensure lam-hero-intro.mp4 is in /public */}
      <video 
        autoPlay 
        muted 
        playsInline 
        className="absolute inset-0 h-full w-full object-cover opacity-60"
      >
        <source src="/lam-hero-intro.mp4" type="video/mp4" />
      </video>

      {/* VIGNETTE OVERLAY */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_30%,black_100%)] opacity-80" />

      {/* ACTION TRIGGER */}
      <div className="relative z-50 flex flex-col items-center mt-96 animate-in fade-in zoom-in duration-1000">
        <button 
          onClick={startJourney}
          className="group relative px-16 py-6 bg-transparent border border-white/10 rounded-full overflow-hidden transition-all hover:border-white shadow-[0_0_50px_rgba(255,255,255,0.05)]"
        >
          <div className="absolute inset-0 bg-white/0 group-hover:bg-white/5 transition-colors duration-700" />
          
          <span className="relative z-10 text-[10px] font-mono tracking-[1.2em] uppercase text-white/80 group-hover:text-white group-hover:tracking-[1.3em] transition-all duration-700">
            Start Your Liminal Journey
          </span>
        </button>
      </div>

    </main>
  );
}