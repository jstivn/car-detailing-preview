import React, { useState, useRef, useCallback } from 'react';
import { Sliders, CheckCircle2, AlertTriangle, ArrowLeftRight } from 'lucide-react';

export const BeforeAfterSlider: React.FC = () => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(percentage);
  }, []);

  const handleTouchMove = (e: React.TouchEvent) => {
    handleMove(e.touches[0].clientX);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging.current && e.buttons !== 1) return;
    handleMove(e.clientX);
  };

  return (
    <section id="comparison" className="py-24 bg-[#08080a] border-b border-white/[0.08] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 pb-6 border-b border-white/[0.08]">
          <div>
            <div className="text-[11px] font-mono tracking-widest text-[#C5A48E] uppercase mb-2">
              OPTICAL TELEMETRY // SURFACE REFINEMENT
            </div>
            <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-white uppercase tracking-tight">
              INTERACTIVE <span className="text-[#C5A48E]">BEFORE & AFTER</span> COMPARATOR
            </h2>
          </div>
          <div className="max-w-md text-zinc-400 text-sm font-sans leading-relaxed">
            Drag the optical reticle slider to inspect 3-stage rotary jeweling and 10-Mil PPF installation on a Ferrari 812 Superfast Rosso Corsa bonnet.
          </div>
        </div>

        {/* Interactive Splitter Container */}
        <div className="relative max-w-5xl mx-auto border border-white/[0.12] rounded-[2px] overflow-hidden select-none bg-black shadow-2xl">
          {/* Telemetry Bar Above Slider */}
          <div className="bg-zinc-950 px-4 py-3 border-b border-white/[0.08] flex items-center justify-between text-xs font-mono">
            <div className="flex items-center gap-2 text-rose-400">
              <AlertTriangle className="w-3.5 h-3.5" />
              <span>STAGE 0: DESERT SANDBLAST & SWIRL TRAILS</span>
            </div>
            <div className="hidden sm:flex items-center gap-2 text-zinc-400">
              <ArrowLeftRight className="w-3.5 h-3.5 text-[#C5A48E]" />
              <span>DRAG RETICLE TO INSPECT</span>
            </div>
            <div className="flex items-center gap-2 text-emerald-400">
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>STAGE 1: 10-MIL XPEL ARMOUR + 10H CERAMIC</span>
            </div>
          </div>

          {/* Image Splitter Wrapper */}
          <div
            ref={containerRef}
            onMouseDown={() => (isDragging.current = true)}
            onMouseUp={() => (isDragging.current = false)}
            onMouseMove={handleMouseMove}
            onTouchMove={handleTouchMove}
            className="relative w-full aspect-[16/9] sm:aspect-[21/9] cursor-ew-resize overflow-hidden"
          >
            {/* AFTER Layer (Full Width Background) */}
            <div className="absolute inset-0 w-full h-full">
              <img
                src="https://images.unsplash.com/photo-1583121274602-3e2820c69888?auto=format&fit=crop&w=1600&q=85"
                alt="Ferrari Paint Restored with PPF"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              {/* After Telemetry Badge */}
              <div className="absolute bottom-6 right-6 p-4 bg-black/85 border border-white/[0.1] rounded-[2px] font-mono text-xs space-y-1 backdrop-blur-md">
                <div className="text-[#C5A48E] font-bold">AFTER // COMPLETED</div>
                <div className="text-zinc-300">GLOSS DEPTH: 99.1 GU</div>
                <div className="text-zinc-400">DEFECT REMOVAL: 99.4%</div>
                <div className="text-emerald-400">XPEL 10-MIL APPLIED</div>
              </div>
            </div>

            {/* BEFORE Layer (Clipped to sliderPosition) */}
            <div
              className="absolute inset-0 h-full overflow-hidden"
              style={{ width: `${sliderPosition}%` }}
            >
              <div className="relative w-full h-full">
                {/* Simulated Sand-pitted & Swirl-damaged image with high contrast & desaturation */}
                <img
                  src="https://images.unsplash.com/photo-1583121274602-3e2820c69888?auto=format&fit=crop&w=1600&q=85"
                  alt="Damaged Ferrari Paint"
                  className="absolute inset-0 w-full h-full object-cover filter contrast-125 brightness-75 sepia-[0.35]"
                  style={{
                    width: containerRef.current ? `${containerRef.current.clientWidth}px` : '100%',
                    maxWidth: 'none'
                  }}
                  loading="lazy"
                />
                {/* Swirl Scratch Texture Overlay */}
                <div 
                  className="absolute inset-0 opacity-40 mix-blend-screen pointer-events-none"
                  style={{
                    backgroundImage: 'radial-gradient(circle at 50% 50%, rgba(255,255,255,0.4) 0%, transparent 60%)'
                  }}
                />

                {/* Before Telemetry Badge */}
                <div className="absolute bottom-6 left-6 p-4 bg-black/85 border border-white/[0.1] rounded-[2px] font-mono text-xs space-y-1 backdrop-blur-md">
                  <div className="text-rose-400 font-bold">BEFORE // RAW OEM</div>
                  <div className="text-zinc-300">GLOSS DEPTH: 61.2 GU</div>
                  <div className="text-zinc-400">SANDBLAST PITTING: SEVERE</div>
                  <div className="text-rose-400">OXIDIZED CLEARCOAT</div>
                </div>
              </div>
            </div>

            {/* Splitter Vertical Line & Handle */}
            <div
              className="absolute top-0 bottom-0 w-[2px] bg-[#C5A48E] z-30 pointer-events-none"
              style={{ left: `${sliderPosition}%` }}
            >
              <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-9 h-9 bg-black border-2 border-[#C5A48E] flex items-center justify-center text-[#C5A48E] rounded-[2px] shadow-2xl">
                <Sliders className="w-4 h-4" />
              </div>
            </div>
          </div>

          {/* Bottom Telemetry Legend */}
          <div className="bg-zinc-950 px-6 py-4 border-t border-white/[0.08] grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs font-mono">
            <div>
              <span className="text-zinc-500">ULTRASONIC MEASUREMENT: </span>
              <span className="text-white">DeFelsko PosiTector 200</span>
            </div>
            <div>
              <span className="text-zinc-500">CLEARCOAT PRESERVED: </span>
              <span className="text-emerald-400">97.8% OEM Thickness</span>
            </div>
            <div>
              <span className="text-zinc-500">SURFACE FINISH: </span>
              <span className="text-[#C5A48E]">Mirror Optics (Class A)</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
