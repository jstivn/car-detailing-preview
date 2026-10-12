import React, { useState, useEffect } from 'react';
import { ATELIER_INFO } from '../data/atelierData';
import { Phone, MessageSquare, Compass } from 'lucide-react';

export const TopHUD: React.FC = () => {
  const [dubaiTime, setDubaiTime] = useState<string>('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      // Dubai is UTC+4
      const options: Intl.DateTimeFormatOptions = {
        timeZone: 'Asia/Dubai',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
      };
      setDubaiTime(new Intl.DateTimeFormat('en-GB', options).format(now));
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full bg-[#050507] border-b border-white/[0.08] text-[11px] font-mono tracking-wider text-zinc-400 select-none">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 py-2 flex flex-wrap items-center justify-between gap-3">
        {/* Left: Telemetry & Location */}
        <div className="flex items-center gap-4 flex-wrap">
          <div className="flex items-center gap-1.5 text-zinc-300">
            <span className="w-1.5 h-1.5 bg-emerald-500 rounded-none animate-pulse"></span>
            <span>GST TIME:</span>
            <span className="text-white font-semibold">{dubaiTime ? `${dubaiTime} GST` : '09:00:00 GST'}</span>
          </div>

          <div className="hidden md:flex items-center gap-1.5 text-zinc-400">
            <Compass className="w-3 h-3 text-[#C5A48E]" />
            <span>{ATELIER_INFO.coordinates} // AL QUOZ 3</span>
          </div>

          <div className="hidden lg:flex items-center gap-1.5 text-zinc-400">
            <span className="text-zinc-600">//</span>
            <span className="text-amber-400/90 font-medium">BAYS: 3 OF 8 ADMISSION SLOTS OPEN</span>
          </div>
        </div>

        {/* Right: Direct Concierge Actions */}
        <div className="flex items-center gap-4 ml-auto">
          <a 
            href={`tel:${ATELIER_INFO.phoneRaw}`}
            className="flex items-center gap-1.5 text-zinc-300 hover:text-white transition-colors"
          >
            <Phone className="w-3 h-3 text-[#C5A48E]" />
            <span className="hidden sm:inline">OFFICE:</span>
            <span>{ATELIER_INFO.phoneDisplay}</span>
          </a>

          <a 
            href={`https://wa.me/${ATELIER_INFO.whatsappRaw}?text=${encodeURIComponent('Hello APEX DUBAI, I require immediate supercar slot consultation.')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-[#C5A48E] hover:text-white transition-colors font-medium border-l border-white/[0.08] pl-3"
          >
            <MessageSquare className="w-3 h-3" />
            <span>WHATSAPP CONCIERGE</span>
          </a>
        </div>
      </div>
    </div>
  );
};
