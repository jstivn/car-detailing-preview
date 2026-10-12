import React, { useState } from 'react';
import { ATELIER_INFO } from '../data/atelierData';
import { X, Send, ShieldCheck, Calendar, Car, Wrench } from 'lucide-react';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultService?: string;
}

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  defaultService = 'Full Body 10-Mil PPF'
}) => {
  const [vehicle, setVehicle] = useState('');
  const [year, setYear] = useState('2024');
  const [service, setService] = useState(defaultService);
  const [transport, setTransport] = useState('Client Drop-off at Al Quoz');
  const [date, setDate] = useState('');
  const [clientName, setClientName] = useState('');
  const [clientPhone, setClientPhone] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const text = [
      `*APEX DUBAI // BAY ADMISSION DOSSIER*`,
      `Client: ${clientName || 'Private Collector'}`,
      `Phone: ${clientPhone || 'Not provided'}`,
      `Vehicle: ${vehicle || 'Exotic Hypercar'} (${year})`,
      `Requested Service: ${service}`,
      `Transport Option: ${transport}`,
      `Preferred Date: ${date || 'Earliest Available Bay'}`,
      `Location: Al Quoz Industrial 3 Workshop`
    ].join('\n');

    const waUrl = `https://wa.me/${ATELIER_INFO.whatsappRaw}?text=${encodeURIComponent(text)}`;
    window.open(waUrl, '_blank');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md">
      <div className="relative w-full max-w-xl bg-[#09090b] border border-white/[0.14] rounded-[2px] shadow-2xl p-6 sm:p-8 font-sans">
        {/* Header */}
        <div className="flex items-center justify-between pb-4 mb-6 border-b border-white/[0.08]">
          <div>
            <div className="text-[10px] font-mono tracking-widest text-[#C5A48E] uppercase">
              CONFIDENTIAL INTAKE // AL QUOZ ATELIER
            </div>
            <h3 className="font-display font-bold text-2xl text-white uppercase tracking-wide">
              SPECIFY VEHICLE ADMISSION
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-zinc-400 hover:text-white border border-white/[0.08] bg-zinc-900 rounded-[2px]"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-[11px] font-mono text-zinc-400 uppercase mb-1">
                Vehicle Make & Model *
              </label>
              <input
                type="text"
                required
                placeholder="e.g. Ferrari SF90 Stradale"
                value={vehicle}
                onChange={(e) => setVehicle(e.target.value)}
                className="w-full px-3.5 py-2.5 bg-zinc-950 border border-white/[0.1] focus:border-[#C5A48E] text-white text-sm outline-none rounded-[2px] font-sans"
              />
            </div>

            <div>
              <label className="block text-[11px] font-mono text-zinc-400 uppercase mb-1">
                Model Year
              </label>
              <input
                type="text"
                placeholder="2024 / 2025"
                value={year}
                onChange={(e) => setYear(e.target.value)}
                className="w-full px-3.5 py-2.5 bg-zinc-950 border border-white/[0.1] focus:border-[#C5A48E] text-white text-sm outline-none rounded-[2px] font-sans"
              />
            </div>
          </div>

          <div>
            <label className="block text-[11px] font-mono text-zinc-400 uppercase mb-1">
              Required Specification / Package *
            </label>
            <select
              value={service}
              onChange={(e) => setService(e.target.value)}
              className="w-full px-3.5 py-2.5 bg-zinc-950 border border-white/[0.1] focus:border-[#C5A48E] text-white text-sm outline-none rounded-[2px] font-sans"
            >
              <option value="FULL BODY ARMOUR (10-Mil PPF)">FULL BODY ARMOUR (10-Mil PPF)</option>
              <option value="TRACK ARMOUR PPF">TRACK ARMOUR PPF</option>
              <option value="APEX CONNOISSEUR (Full Suite + Cryo)">APEX CONNOISSEUR (Full Suite + Cryo)</option>
              <option value="Multi-Stage Nanotech Paint Correction">Multi-Stage Nanotech Paint Correction</option>
              <option value="10H Diamond Matrix Ceramic">10H Diamond Matrix Ceramic</option>
              <option value="Sub-Zero Dry-Ice Cryogenic Detailing">Sub-Zero Dry-Ice Cryogenic Detailing</option>
              <option value="RTA-Legal Nano-Ceramic Window Tint">RTA-Legal Nano-Ceramic Window Tint</option>
            </select>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-[11px] font-mono text-zinc-400 uppercase mb-1">
                Logistics / Transport
              </label>
              <select
                value={transport}
                onChange={(e) => setTransport(e.target.value)}
                className="w-full px-3.5 py-2.5 bg-zinc-950 border border-white/[0.1] focus:border-[#C5A48E] text-white text-sm outline-none rounded-[2px] font-sans"
              >
                <option value="Client Drop-off at Al Quoz">Self Drop-off (Al Quoz 3)</option>
                <option value="Enclosed Hydraulic Flatbed (Dubai)">Enclosed Hydraulic Flatbed (Dubai)</option>
                <option value="Enclosed Flatbed (Abu Dhabi / Northern)">Enclosed Flatbed (Abu Dhabi)</option>
              </select>
            </div>

            <div>
              <label className="block text-[11px] font-mono text-zinc-400 uppercase mb-1">
                Target Bay Ingress Date
              </label>
              <input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="w-full px-3.5 py-2.5 bg-zinc-950 border border-white/[0.1] focus:border-[#C5A48E] text-white text-sm outline-none rounded-[2px] font-sans"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
            <div>
              <label className="block text-[11px] font-mono text-zinc-400 uppercase mb-1">
                Client Name / Title
              </label>
              <input
                type="text"
                placeholder="Full Name"
                value={clientName}
                onChange={(e) => setClientName(e.target.value)}
                className="w-full px-3.5 py-2.5 bg-zinc-950 border border-white/[0.1] focus:border-[#C5A48E] text-white text-sm outline-none rounded-[2px] font-sans"
              />
            </div>

            <div>
              <label className="block text-[11px] font-mono text-zinc-400 uppercase mb-1">
                WhatsApp Contact (+971...)
              </label>
              <input
                type="tel"
                placeholder="+971 50 000 0000"
                value={clientPhone}
                onChange={(e) => setClientPhone(e.target.value)}
                className="w-full px-3.5 py-2.5 bg-zinc-950 border border-white/[0.1] focus:border-[#C5A48E] text-white text-sm outline-none rounded-[2px] font-sans"
              />
            </div>
          </div>

          {/* Submit Action */}
          <div className="pt-4">
            <button
              type="submit"
              className="w-full py-4 px-6 bg-[#C5A48E] hover:bg-[#d5b59f] text-black font-mono text-xs tracking-wider font-extrabold flex items-center justify-center gap-2 transition-mechanical rounded-[2px]"
            >
              <Send className="w-4 h-4" />
              <span>TRANSMIT VIA WHATSAPP (INSTANT SLUG)</span>
            </button>
            <p className="mt-2 text-center text-[11px] font-mono text-zinc-400">
              Direct connection with Head Engineer in Al Quoz 3. Zero marketing spam.
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};
