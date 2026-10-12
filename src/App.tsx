import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ClimateDefense } from './components/ClimateDefense';
import { CaseStudies } from './components/CaseStudies';
import { PricingMatrix } from './components/PricingMatrix';
import { CleanroomStandards } from './components/CleanroomStandards';
import { FAQ } from './components/FAQ';
import { Footer } from './components/Footer';
import { BookingModal } from './components/BookingModal';

export const App: React.FC = () => {
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<string>('FULL BODY ARMOUR (10-Mil PPF)');

  const handleOpenBooking = (service?: string) => {
    if (service) {
      setSelectedService(service);
    }
    setBookingModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-black text-[#e5e5e7] selection:bg-[#C5A48E] selection:text-black">
      {/* Floating Liquid Glass Navigation Bar */}
      <Navbar onOpenBookingModal={handleOpenBooking} />

      {/* Hero Section with DetailX Supercar Ignition Loop */}
      <Hero onOpenBookingModal={handleOpenBooking} />

      {/* Dubai Climate Hardening & GCC Specifications */}
      <ClimateDefense />

      {/* Transparent AED Commission Schedule */}
      <PricingMatrix />

      {/* Dubai Hypercar Delivery Case Studies */}
      <CaseStudies />

      {/* Cleanroom Standards & Al Quoz 3 Tooling */}
      <CleanroomStandards />

      {/* Hypercar Owner Technical FAQ */}
      <FAQ />

      {/* Local SEO Dubai Footer */}
      <Footer />

      {/* Direct WhatsApp Dossier Intake Modal */}
      <BookingModal
        isOpen={bookingModalOpen}
        onClose={() => setBookingModalOpen(false)}
        defaultService={selectedService}
      />
    </div>
  );
};

export default App;
