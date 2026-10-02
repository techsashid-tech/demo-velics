import React, { useState, useEffect } from 'react';
import { Sparkles, MessageCircle, Calendar, ChevronDown, ShieldCheck, HeartHandshake, Award } from 'lucide-react';
import { STUDIO_INFO } from '../data/servicesData';

interface HeroProps {
  onOpenBooking: () => void;
  onExploreServices: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBooking, onExploreServices }) => {
  const [taglineIndex, setTaglineIndex] = useState(0);

  const taglines = [
    "Look Good, Feel Better. Because You Deserve the Best.",
    "Where Medical Precision Meets Haute Beauty.",
    "Bespoke Aesthetics, Hair Restoration & Wellness.",
    "Reveal Your Unfiltered, Luminous Glass-Skin Glow."
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setTaglineIndex((prev) => (prev + 1) % taglines.length);
    }, 4500);
    return () => clearInterval(timer);
  }, [taglines.length]);

  const handleWhatsapp = () => {
    const text = encodeURIComponent("Hello VELICS THE GLOW STUDIO! I would like to book a consultation for your services.");
    window.open(`https://wa.me/${STUDIO_INFO.whatsappNumber}?text=${text}`, '_blank');
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-28 pb-16 overflow-hidden">
      {/* Background Image with Scrim */}
      <div className="absolute inset-0 z-0">
        <img
          src="/src/assets/images/hero_luxury_studio_interior_1790971547255.jpg"
          alt="Velics The Glow Studio Luxury Interior"
          className="w-full h-full object-cover object-center scale-105 animate-pulse"
          style={{ animationDuration: '10s' }}
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0C] via-[#0B0B0C]/75 to-[#0B0B0C]/50" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(11,11,12,0.8)_100%)]" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        {/* Subtle trust tag */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#D4AF37]/30 bg-[#0B0B0C]/60 backdrop-blur-md mb-6">
          <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
          <span className="text-[11px] tracking-[0.25em] uppercase text-[#F3E5AB] font-medium">
            Bhubaneswar's Premier Aesthetic & Wellness Studio
          </span>
        </div>

        {/* Main Headline */}
        <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-serif-brand font-bold text-[#F7F6F3] tracking-tight leading-[1.15] max-w-4xl text-balance mb-4">
          One Destination For{' '}
          <span className="gold-text-gradient block mt-2">
            Complete Beauty Transformation
          </span>
        </h1>

        {/* 4 Pillars */}
        <p className="text-sm sm:text-base md:text-lg font-editorial tracking-[0.3em] uppercase text-[#D4AF37] font-semibold mb-6">
          Skin · Hair · Aesthetics · Wellness
        </p>

        {/* Dynamic Tagline Cycler */}
        <div className="h-12 flex items-center justify-center mb-8 max-w-2xl px-4">
          <p className="text-base sm:text-lg text-[#C5C2BA] font-light italic transition-opacity duration-500">
            "{taglines[taglineIndex]}"
          </p>
        </div>

        {/* Primary Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto justify-center mb-14">
          <button
            onClick={onOpenBooking}
            className="w-full sm:w-auto px-8 py-3.5 rounded-full text-xs sm:text-sm font-semibold tracking-widest uppercase text-[#0B0B0C] bg-gradient-to-r from-[#F3E5AB] via-[#D4AF37] to-[#AA820A] hover:brightness-110 shadow-lg shadow-[#D4AF37]/25 transition-all flex items-center justify-center gap-2 cursor-pointer"
          >
            <Calendar className="w-4 h-4" />
            <span>Book Appointment</span>
          </button>

          <button
            onClick={handleWhatsapp}
            className="w-full sm:w-auto px-7 py-3.5 rounded-full text-xs sm:text-sm font-medium tracking-wider uppercase text-[#F7F6F3] border border-[#25D366]/40 bg-[#0B0B0C]/70 hover:bg-[#25D366]/15 hover:border-[#25D366] transition-all flex items-center justify-center gap-2 cursor-pointer"
          >
            <MessageCircle className="w-4 h-4 text-[#25D366]" />
            <span>WhatsApp Concierge</span>
          </button>

          <button
            onClick={onExploreServices}
            className="w-full sm:w-auto px-7 py-3.5 rounded-full text-xs sm:text-sm font-medium tracking-wider uppercase text-[#C5C2BA] border border-[#D4AF37]/30 hover:border-[#D4AF37] hover:text-[#D4AF37] transition-all flex items-center justify-center gap-2 cursor-pointer"
          >
            <span>Explore 13 Services</span>
          </button>
        </div>

        {/* Social Proof & Trust Badges */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 w-full max-w-4xl pt-8 border-t border-[#D4AF37]/20">
          <div className="flex flex-col items-center p-3 rounded-xl bg-[#0B0B0C]/50 border border-white/5">
            <ShieldCheck className="w-5 h-5 text-[#D4AF37] mb-1.5" />
            <span className="text-xs font-semibold text-[#F7F6F3]">Safe Treatments</span>
            <span className="text-[10px] text-[#A39E93]">US-FDA Approved Tech</span>
          </div>

          <div className="flex flex-col items-center p-3 rounded-xl bg-[#0B0B0C]/50 border border-white/5">
            <Award className="w-5 h-5 text-[#D4AF37] mb-1.5" />
            <span className="text-xs font-semibold text-[#F7F6F3]">Expert Care</span>
            <span className="text-[10px] text-[#A39E93]">Certified Specialists</span>
          </div>

          <div className="flex flex-col items-center p-3 rounded-xl bg-[#0B0B0C]/50 border border-white/5">
            <HeartHandshake className="w-5 h-5 text-[#D4AF37] mb-1.5" />
            <span className="text-xs font-semibold text-[#F7F6F3]">100% Personalized</span>
            <span className="text-[10px] text-[#A39E93]">Custom Care Plans</span>
          </div>

          <div className="flex flex-col items-center p-3 rounded-xl bg-[#0B0B0C]/50 border border-white/5">
            <span className="text-sm font-bold text-[#D4AF37] mb-0.5">5.0 ★★★★★</span>
            <span className="text-xs font-semibold text-[#F7F6F3]">Google Verified</span>
            <span className="text-[10px] text-[#A39E93]">Sailashree Vihar Studio</span>
          </div>
        </div>
      </div>

      {/* Down Scroll Indicator */}
      <button
        onClick={onExploreServices}
        className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-1 text-[#A39E93] hover:text-[#D4AF37] transition-colors cursor-pointer"
        aria-label="Scroll to services"
      >
        <span className="text-[10px] uppercase tracking-[0.2em]">Scroll to Explore</span>
        <ChevronDown className="w-4 h-4 animate-bounce text-[#D4AF37]" />
      </button>
    </section>
  );
};
