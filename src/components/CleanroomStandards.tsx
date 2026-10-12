import React from 'react';
import { Cpu, Wind, Sparkles, SlidersHorizontal, ShieldCheck } from 'lucide-react';

export const CleanroomStandards: React.FC = () => {
  const standards = [
    {
      title: "ISO CLASS 7 AIR PRESSURE BOOTHS",
      detail: "Cleanroom bays maintain positive barometric pressure with HEPA filtration down to 0.3 microns. Prevents airborne desert dust particulates from contaminating film adhesive during application.",
      icon: <Wind className="w-5 h-5 text-[#C5A48E]" />
    },
    {
      title: "5000K CRI-98 INSPECTION TUNNEL",
      detail: "High-CRI daylight balanced LED arrays reveal microscopic surface imperfections, hologram trails, and orange peel variance invisible under standard workshop halogen lamps.",
      icon: <Sparkles className="w-5 h-5 text-[#C5A48E]" />
    },
    {
      title: "GRAPHTEC FC9000-160 DAP PLOTTERS",
      detail: "100% digital CAD patterns precision cut on industrial Japanese servo-plotters. Edges are mathematically extended for wrapped tucks, guaranteeing zero steel razor blades near vehicle paint.",
      icon: <Cpu className="w-5 h-5 text-[#C5A48E]" />
    },
    {
      title: "DEFELSKO ULTRASONIC GAUGING",
      detail: "Multi-point ultrasonic paint depth measurements taken across every panel before, during, and after compounding to ensure minimum clearcoat removal and complete safety.",
      icon: <SlidersHorizontal className="w-5 h-5 text-[#C5A48E]" />
    }
  ];

  return (
    <section id="cleanroom" className="py-24 bg-black border-b border-white/[0.08] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 pb-6 border-b border-white/[0.08]">
          <div>
            <div className="text-[11px] font-mono tracking-widest text-[#C5A48E] uppercase mb-2">
              FACILITY PROTOCOLS // AL QUOZ INDUSTRIAL 3
            </div>
            <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-white uppercase tracking-tight">
              CLEANROOM <span className="text-[#C5A48E]">STANDARDS & TOOLING</span>
            </h2>
          </div>
          <div className="max-w-md text-zinc-400 text-sm font-sans leading-relaxed">
            Our 14,000 sq ft facility in Al Quoz 3 is purpose-built to hospital cleanroom standards to eliminate dust contamination and preserve factory exotic finishes.
          </div>
        </div>

        {/* 4 Standards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {standards.map((std, i) => (
            <div
              key={std.title}
              className="p-8 bg-[#09090b] border border-white/[0.08] hover:border-[#C5A48E]/40 transition-mechanical rounded-[2px]"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-zinc-900 border border-white/[0.08] rounded-[2px]">
                  {std.icon}
                </div>
                <div className="font-mono text-xs text-zinc-500">
                  STANDARD SPEC 0{i + 1}
                </div>
              </div>

              <h3 className="font-mono font-bold text-base sm:text-lg text-white uppercase tracking-wide mb-3">
                {std.title}
              </h3>

              <p className="font-sans text-xs sm:text-sm text-zinc-400 leading-relaxed">
                {std.detail}
              </p>
            </div>
          ))}
        </div>

        {/* Live Facility Badge */}
        <div className="mt-12 p-6 bg-zinc-950 border border-white/[0.08] rounded-[2px] flex flex-col sm:flex-row sm:items-center justify-between gap-4 font-mono text-xs">
          <div className="flex items-center gap-3">
            <ShieldCheck className="w-5 h-5 text-emerald-400 shrink-0" />
            <span className="text-zinc-300">
              AUDITED ISO 9001 / DED-CERTIFIED AUTOMOTIVE SURFACE FACILITY
            </span>
          </div>
          <div className="text-zinc-500">
            REGISTRATION: <strong className="text-white">DED-948210 // DUBAI</strong>
          </div>
        </div>
      </div>
    </section>
  );
};
