import React from 'react';
import { ATELIER_INFO, buildWhatsAppLink } from '../data/atelierData';
import { MapPin, Phone, Mail, Clock, Shield, ArrowUpRight, Compass } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white border-t border-white/[0.08] relative font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-20 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-white/[0.08]">
          {/* Col 1: Brand & Credentials */}
          <div className="lg:col-span-5 space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-zinc-950 border border-white/[0.14] flex items-center justify-center text-[#C5A48E] rounded-[2px]">
                <Shield className="w-5 h-5 stroke-[1.5]" />
              </div>
              <div>
                <span className="font-display font-bold text-2xl tracking-wider text-white">APEX DUBAI</span>
                <div className="text-[10px] font-mono tracking-widest text-[#C5A48E]">
                  HYPERCAR SURFACE ENGINEERING ATELIER
                </div>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-zinc-400 font-sans leading-relaxed max-w-md">
              Specialized exotic and hypercar protection facility based in Al Quoz 3, Dubai. ISO-certified cleanroom installation of 10-Mil self-healing PPF, ultrasonic paint correction, and sub-zero cryogenic detailing engineered for Middle East environments.
            </p>

            <div className="p-4 bg-zinc-950 border border-white/[0.06] rounded-[2px] font-mono text-[11px] space-y-1">
              <div className="text-zinc-500">COMMERCIAL REGISTRATION:</div>
              <div className="text-white">DED LICENSE: {ATELIER_INFO.tradeLicense}</div>
              <div className="text-zinc-400">FEDERAL TAX AUTHORITY TRN: {ATELIER_INFO.vatTRN}</div>
            </div>
          </div>

          {/* Col 2: Services Quick Links */}
          <div className="lg:col-span-3 space-y-4 font-mono text-xs">
            <div className="text-[#C5A48E] tracking-widest uppercase font-semibold text-[11px]">
              ENGINEERING REGIMES
            </div>
            <ul className="space-y-2.5 text-zinc-400">
              <li>
                <a href="#pricing" className="hover:text-white transition-colors">
                  XPEL 10-Mil Self-Healing PPF
                </a>
              </li>
              <li>
                <a href="#pricing" className="hover:text-white transition-colors">
                  Multi-Stage Nanotech Correction
                </a>
              </li>
              <li>
                <a href="#pricing" className="hover:text-white transition-colors">
                  10H Diamond Matrix Ceramic
                </a>
              </li>
              <li>
                <a href="#pricing" className="hover:text-white transition-colors">
                  Sub-Zero Cryogenic Dry-Ice Cleaning
                </a>
              </li>
              <li>
                <a href="#pricing" className="hover:text-white transition-colors">
                  RTA-Spec Nano-Ceramic Window Tint
                </a>
              </li>
              <li>
                <a href="#pricing" className="hover:text-white transition-colors">
                  Bespoke Leather & Alcantara Barrier
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Coordinates & Admission */}
          <div className="lg:col-span-4 space-y-4 font-mono text-xs">
            <div className="text-[#C5A48E] tracking-widest uppercase font-semibold text-[11px]">
              ATELIER COORDINATES // AL QUOZ 3
            </div>

            <div className="space-y-3 text-zinc-300">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#C5A48E] shrink-0 mt-0.5" />
                <span className="font-sans text-xs leading-relaxed text-zinc-300">
                  {ATELIER_INFO.location}
                </span>
              </div>

              <div className="flex items-center gap-2.5">
                <Compass className="w-4 h-4 text-[#C5A48E] shrink-0" />
                <span>{ATELIER_INFO.coordinates}</span>
              </div>

              <div className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-[#C5A48E] shrink-0" />
                <span>{ATELIER_INFO.hours}</span>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#C5A48E] shrink-0" />
                <a href={`tel:${ATELIER_INFO.phoneRaw}`} className="hover:text-white transition-colors">
                  {ATELIER_INFO.phoneDisplay}
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#C5A48E] shrink-0" />
                <a href={`mailto:${ATELIER_INFO.email}`} className="hover:text-white transition-colors">
                  {ATELIER_INFO.email}
                </a>
              </div>
            </div>

            <div className="pt-2">
              <a
                href={buildWhatsAppLink("Footer Direct Inquire")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 bg-[#C5A48E] hover:bg-[#d5b59f] text-black font-mono text-xs font-bold transition-mechanical rounded-[2px]"
              >
                <span>OPEN WHATSAPP CONCIERGE</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>

        {/* Legal Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-[11px] text-zinc-400">
          <div>
            &copy; {new Date().getFullYear()} APEX DUBAI // HYPERCAR SURFACE ENGINEERING. ALL RIGHTS RESERVED.
          </div>
          <div className="flex items-center gap-6">
            <span>AL QUOZ INDUSTRIAL AREA 3, DUBAI</span>
            <span className="text-zinc-600">|</span>
            <span className="text-zinc-400">VAT INVOICED // GCC STANDARDS</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
