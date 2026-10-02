import React from 'react';
import { MessageCircle, Phone, Calendar } from 'lucide-react';
import { STUDIO_INFO } from '../data/servicesData';

interface FloatingConciergeProps {
  onOpenBooking: () => void;
}

export const FloatingConcierge: React.FC<FloatingConciergeProps> = ({ onOpenBooking }) => {
  const handleWhatsapp = () => {
    const text = encodeURIComponent("Hello VELICS THE GLOW STUDIO! I would like to enquire about your services.");
    window.open(`https://wa.me/${STUDIO_INFO.whatsappNumber}?text=${text}`, '_blank');
  };

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3 pointer-events-auto">
      {/* Phone Call button */}
      <a
        href={`tel:${STUDIO_INFO.phone}`}
        aria-label="Direct Studio Phone Call"
        className="p-3 rounded-full bg-[#141417]/95 border border-[#D4AF37]/50 text-[#D4AF37] hover:bg-[#D4AF37] hover:text-[#0B0B0C] shadow-xl backdrop-blur-md transition-all hover:scale-105"
      >
        <Phone className="w-5 h-5" />
      </a>

      {/* Appointment shortcut button */}
      <button
        onClick={onOpenBooking}
        aria-label="Quick Booking"
        className="p-3 rounded-full bg-[#141417]/95 border border-[#D4AF37]/50 text-[#D4AF37] hover:bg-[#D4AF37] hover:text-[#0B0B0C] shadow-xl backdrop-blur-md transition-all hover:scale-105 cursor-pointer"
      >
        <Calendar className="w-5 h-5" />
      </button>

      {/* WhatsApp Button with pulse ring */}
      <div className="relative group">
        <div className="absolute -inset-1 rounded-full bg-[#25D366]/40 blur-sm animate-pulse" />
        <button
          onClick={handleWhatsapp}
          aria-label="Chat with Velics Studio Concierge on WhatsApp"
          className="relative p-3.5 rounded-full bg-[#25D366] text-white shadow-2xl hover:bg-[#20ba5a] transition-all hover:scale-105 flex items-center justify-center cursor-pointer"
        >
          <MessageCircle className="w-6 h-6 fill-white stroke-none" />
        </button>
      </div>
    </div>
  );
};
