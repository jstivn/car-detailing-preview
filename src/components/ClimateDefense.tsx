import React from 'react';
import { CLIMATE_METRICS } from '../data/atelierData';
import { Sun, Wind, ShieldAlert, Droplets, CheckCircle2 } from 'lucide-react';

export const ClimateDefense: React.FC = () => {
  const icons = [
    <Sun className="w-5 h-5 text-[#C5A48E]" />,
    <Wind className="w-5 h-5 text-[#C5A48E]" />,
    <ShieldAlert className="w-5 h-5 text-[#C5A48E]" />,
    <Droplets className="w-5 h-5 text-[#C5A48E]" />
  ];

  return (
    <section id="climate" className="py-24 bg-[#08080a] border-b border-white/[0.08] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 pb-6 border-b border-white/[0.08]">
          <div>
            <div className="text-[11px] font-mono tracking-widest text-[#C5A48E] uppercase mb-2">
              ENGINEERING REGIME // GCC SPECIFICATION
            </div>
            <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-white uppercase tracking-tight">
              HARDENED FOR THE <span className="text-[#C5A48E]">DUBAI CLIMATE</span>
            </h2>
          </div>
          <div className="max-w-md text-zinc-400 text-sm font-sans leading-relaxed">
            Standard European & North American detailing chemicals fail when subjected to UAE extreme thermal cycling and airborne quartz minerals. Our specifications are chemically formulated for Middle Eastern operating conditions.
          </div>
        </div>

        {/* 4 Architectural Metric Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {CLIMATE_METRICS.map((item, idx) => (
            <div
              key={item.title}
              className="p-6 bg-black/60 border border-white/[0.08] hover:border-[#C5A48E]/40 transition-mechanical flex flex-col justify-between rounded-[2px]"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="p-2.5 bg-zinc-900 border border-white/[0.08] rounded-[2px]">
                    {icons[idx]}
                  </div>
                  <span className="font-mono text-2xl font-bold tracking-tight text-white">
                    {item.metric}
                  </span>
                </div>

                <h3 className="font-mono font-bold text-base text-zinc-100 uppercase tracking-wide mb-3">
                  {item.title}
                </h3>

                <p className="font-sans text-xs text-zinc-400 leading-relaxed">
                  {item.detail}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-white/[0.06] flex items-center gap-2 text-[10px] font-mono text-zinc-500">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                <span>LABORATORY VERIFIED SPEC</span>
              </div>
            </div>
          ))}
        </div>

        {/* Technical Data Comparison Strip */}
        <div className="mt-12 p-6 bg-zinc-950 border border-white/[0.08] rounded-[2px] grid grid-cols-1 md:grid-cols-3 gap-6 font-mono text-xs">
          <div className="space-y-1">
            <div className="text-zinc-500">SURFACE HEAT RESISTANCE</div>
            <div className="text-white font-semibold">140°C Continuous / 180°C Peak Flash</div>
            <div className="text-zinc-400 text-[11px]">Zero polymer delamination or edge bubbling</div>
          </div>
          <div className="space-y-1">
            <div className="text-zinc-500">BALLISTIC SAND RESISTANCE</div>
            <div className="text-white font-semibold">ASTM D3170 SAE J400 Gravelometer Pass</div>
            <div className="text-zinc-400 text-[11px]">Shields against Sheikh Zayed Rd high-speed stone chips</div>
          </div>
          <div className="space-y-1">
            <div className="text-zinc-500">SOLAR INFRARED REJECTION</div>
            <div className="text-white font-semibold">99.8% IR Spectral Band Rejection</div>
            <div className="text-zinc-400 text-[11px]">Protects cabin aniline leather & naked carbon weaves</div>
          </div>
        </div>
      </div>
    </section>
  );
};
