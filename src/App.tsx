import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ServicesSection } from './components/ServicesSection';
import { SkincareSection } from './components/SkincareSection';
import { ExperienceSection } from './components/ExperienceSection';
import { GallerySection } from './components/GallerySection';
import { ReviewsSection } from './components/ReviewsSection';
import { ToolsSection } from './components/ToolsSection';
import { LocationSection } from './components/LocationSection';
import { Footer } from './components/Footer';
import { BookingModal } from './components/BookingModal';
import { FloatingConcierge } from './components/FloatingConcierge';

export default function App() {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(true);
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [selectedServiceForBooking, setSelectedServiceForBooking] = useState<string | undefined>(undefined);

  useEffect(() => {
    const savedTheme = localStorage.getItem('velics_theme');
    if (savedTheme === 'light') {
      setIsDarkMode(false);
      document.documentElement.classList.remove('dark');
    } else {
      setIsDarkMode(true);
      document.documentElement.classList.add('dark');
    }
  }, []);

  const handleToggleTheme = () => {
    const newMode = !isDarkMode;
    setIsDarkMode(newMode);
    if (newMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('velics_theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('velics_theme', 'light');
    }
  };

  const handleOpenBooking = (serviceName?: string) => {
    setSelectedServiceForBooking(serviceName);
    setBookingModalOpen(true);
  };

  const handleExploreServices = () => {
    const el = document.getElementById('services');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className={`min-h-screen font-sans-clean transition-colors duration-300 ${isDarkMode ? 'bg-[#0B0B0C] text-[#F7F6F3]' : 'bg-[#FAF9F6] text-[#1A1A1A]'}`}>
      {/* Top Navigation Bar with Top Bar Contract */}
      <Navbar
        onOpenBooking={() => handleOpenBooking()}
        isDarkMode={isDarkMode}
        onToggleTheme={handleToggleTheme}
      />

      <main>
        {/* Section 1: Hero Banner & Brand Introduction */}
        <Hero
          onOpenBooking={() => handleOpenBooking()}
          onExploreServices={handleExploreServices}
        />

        {/* Section 2: Complete Studio Services Menu (All 13 Services) */}
        <ServicesSection onBookService={(title) => handleOpenBooking(title)} />

        {/* Section 3: 5-Step Skincare Ritual & Routine Generator */}
        <SkincareSection />

        {/* Section 4: The Velics Studio Journey & Clinical Safety */}
        <ExperienceSection />

        {/* Section 5: 3D Visual Gallery & Luxury Ambiance */}
        <GallerySection />

        {/* Section 6: Verified Google Proof & Reviews */}
        <ReviewsSection />

        {/* Section 7: Free Interactive Beauty & Skin Tools */}
        <ToolsSection />

        {/* Section 8: Studio Location, Map & Appointment Form */}
        <LocationSection />
      </main>

      {/* Luxury Footer with Developer Badge */}
      <Footer onOpenBooking={() => handleOpenBooking()} />

      {/* Floating Concierge (WhatsApp, Call, Booking) */}
      <FloatingConcierge onOpenBooking={() => handleOpenBooking()} />

      {/* Interactive Global Booking Modal */}
      <BookingModal
        isOpen={bookingModalOpen}
        onClose={() => setBookingModalOpen(false)}
        defaultService={selectedServiceForBooking}
      />
    </div>
  );
}
