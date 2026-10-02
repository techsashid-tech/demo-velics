import React from 'react';
import { Phone, MapPin, Instagram, Facebook, MessageCircle, Code2, Heart } from 'lucide-react';
import { STUDIO_INFO, SERVICES } from '../data/servicesData';

interface FooterProps {
  onOpenBooking: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenBooking }) => {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-[#080809] border-t border-[#D4AF37]/20 pt-16 pb-12 text-[#A39E93]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-16">
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex flex-col">
              <span className="text-2xl font-serif-brand font-bold tracking-[0.25em] text-[#F7F6F3]">
                VELICS
              </span>
              <span className="text-[10px] tracking-[0.35em] text-[#D4AF37] uppercase font-medium">
                The Glow Studio
              </span>
            </div>

            <p className="text-xs text-[#A39E93] leading-relaxed max-w-sm">
              One destination in Bhubaneswar for complete beauty transformation across Skin, Hair, Aesthetics, and Wellness. Experience medical-grade clinical precision enveloped in tranquil luxury.
            </p>

            <div className="pt-2 flex items-center gap-3">
              <a
                href={STUDIO_INFO.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-full border border-white/10 hover:border-[#D4AF37] hover:text-[#D4AF37] transition-colors"
                aria-label="Instagram Profile"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={STUDIO_INFO.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-full border border-white/10 hover:border-[#D4AF37] hover:text-[#D4AF37] transition-colors"
                aria-label="Facebook Profile"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href={`https://wa.me/${STUDIO_INFO.whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-full border border-[#25D366]/40 text-[#25D366] hover:bg-[#25D366]/15 transition-colors"
                aria-label="WhatsApp Chat"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Navigation */}
          <div>
            <h4 className="text-xs uppercase tracking-widest text-[#D4AF37] font-semibold mb-4">
              Explore Studio
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <button onClick={() => scrollTo('home')} className="hover:text-[#F7F6F3] transition-colors">
                  Overview & Philosophy
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('services')} className="hover:text-[#F7F6F3] transition-colors">
                  All 13 Services
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('skincare')} className="hover:text-[#F7F6F3] transition-colors">
                  5-Step Glow Routine
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('experience')} className="hover:text-[#F7F6F3] transition-colors">
                  The Velics Experience
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('tools')} className="hover:text-[#F7F6F3] transition-colors">
                  Free Skin & Beauty Tools
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('reviews')} className="hover:text-[#F7F6F3] transition-colors">
                  Client Testimonials
                </button>
              </li>
            </ul>
          </div>

          {/* Featured Treatments */}
          <div>
            <h4 className="text-xs uppercase tracking-widest text-[#D4AF37] font-semibold mb-4">
              Signature Treatments
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <button onClick={() => scrollTo('services')} className="hover:text-[#F7F6F3] transition-colors">
                  Hydrafacial MD
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('services')} className="hover:text-[#F7F6F3] transition-colors">
                  Laser Hair Reduction
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('services')} className="hover:text-[#F7F6F3] transition-colors">
                  Botox & Dermal Sculpting
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('services')} className="hover:text-[#F7F6F3] transition-colors">
                  PRP Follicle Therapy
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('services')} className="hover:text-[#F7F6F3] transition-colors">
                  IV Wellness Glutathione
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('services')} className="hover:text-[#F7F6F3] transition-colors">
                  High-Definition Bridal
                </button>
              </li>
            </ul>
          </div>

          {/* Studio Contact */}
          <div>
            <h4 className="text-xs uppercase tracking-widest text-[#D4AF37] font-semibold mb-4">
              Chandrasekharpur Studio
            </h4>
            <div className="space-y-3 text-xs leading-relaxed">
              <p className="text-[#C5C2BA]">
                {STUDIO_INFO.shortAddress}
              </p>
              <p>
                <a
                  href={`tel:${STUDIO_INFO.phone}`}
                  className="text-[#D4AF37] hover:underline font-semibold tabular-nums"
                >
                  {STUDIO_INFO.phoneDisplay}
                </a>
              </p>
              <p className="text-[#A39E93]">
                Daily: 9:00 AM – 8:00 PM
              </p>
              <button
                onClick={onOpenBooking}
                className="mt-2 px-4 py-2 rounded-full text-[11px] font-semibold uppercase tracking-wider text-[#0B0B0C] bg-[#D4AF37] hover:brightness-110"
              >
                Book Appointment
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Credits & Developer Signature */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-[#A39E93]">
            © 2026 VELICS THE GLOW STUDIO. All rights reserved. Registered Beauty & Aesthetic Studio in Bhubaneswar.
          </p>

          {/* S K DAS Developer Badge from source document */}
          <a
            href={`tel:${STUDIO_INFO.developerPhone}`}
            className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-[#D4AF37]/40 bg-[#141417] hover:bg-[#D4AF37]/10 transition-all text-xs group"
          >
            <Code2 className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span className="text-[#C5C2BA]">DESIGN & DEVELOPED BY</span>
            <span className="font-bold text-[#F7F6F3] group-hover:text-[#D4AF37] transition-colors">
              {STUDIO_INFO.developerName}
            </span>
            <span className="text-[#D4AF37] tabular-nums font-semibold">
              ({STUDIO_INFO.developerPhone})
            </span>
          </a>
        </div>
      </div>
    </footer>
  );
};
