import React, { useState, useEffect } from 'react';
import { Moon, Sun, Menu, X, Phone, Calendar } from 'lucide-react';
import { STUDIO_INFO } from '../data/servicesData';

interface NavbarProps {
  onOpenBooking: (serviceName?: string) => void;
  isDarkMode: boolean;
  onToggleTheme: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBooking, isDarkMode, onToggleTheme }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeNav, setActiveNav] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
      
      const sections = ['home', 'services', 'skincare', 'experience', 'tools', 'location'];
      const scrollPosition = window.scrollY + 120;
      
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveNav(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Overview', href: '#home', id: 'home' },
    { name: 'Services', href: '#services', id: 'services' },
    { name: 'Skincare', href: '#skincare', id: 'skincare' },
    { name: 'Rituals', href: '#experience', id: 'experience' },
    { name: 'Tools', href: '#tools', id: 'tools' },
    { name: 'Location', href: '#location', id: 'location' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#0B0B0C]/90 backdrop-blur-md border-b border-[#D4AF37]/20 py-3 shadow-xl'
          : 'bg-gradient-to-b from-[#0B0B0C]/80 to-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Zone 1: Single text element Brand Zone */}
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, '#home')}
            className="flex flex-col group cursor-pointer focus-visible:outline-none"
          >
            <span className="text-xl sm:text-2xl font-serif-brand font-bold tracking-[0.25em] text-[#F7F6F3] group-hover:text-[#D4AF37] transition-colors">
              VELICS
            </span>
            <span className="text-[9px] tracking-[0.35em] text-[#D4AF37] uppercase font-sans-clean font-medium">
              The Glow Studio
            </span>
          </a>

          {/* Zone 2: 4–6 text navigation links */}
          <nav className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`text-xs uppercase tracking-[0.16em] font-medium transition-all relative py-1 ${
                  activeNav === link.id
                    ? 'text-[#D4AF37]'
                    : 'text-[#C5C2BA] hover:text-[#F7F6F3]'
                }`}
              >
                {link.name}
                {activeNav === link.id && (
                  <span className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-[#D4AF37] rounded-full" />
                )}
              </a>
            ))}
          </nav>

          {/* Zone 3: 1–2 primary actions + theme toggle */}
          <div className="flex items-center gap-3">
            <button
              onClick={onToggleTheme}
              aria-label="Toggle Theme"
              className="p-2 rounded-full border border-[#D4AF37]/30 text-[#D4AF37] hover:bg-[#D4AF37]/10 transition-colors focus-visible:ring-2 focus-visible:ring-[#D4AF37]"
            >
              {isDarkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>

            <a
              href={`tel:${STUDIO_INFO.phone}`}
              aria-label="Call studio"
              className="hidden sm:inline-flex items-center gap-1.5 px-3 py-2 text-xs font-medium text-[#C5C2BA] hover:text-[#D4AF37] transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span className="tabular-nums">{STUDIO_INFO.phoneDisplay}</span>
            </a>

            <button
              onClick={() => onOpenBooking()}
              className="px-4 py-2 sm:px-5 sm:py-2.5 rounded-full text-xs font-semibold tracking-wider uppercase text-[#0B0B0C] bg-gradient-to-r from-[#F3E5AB] via-[#D4AF37] to-[#AA820A] hover:brightness-110 shadow-md shadow-[#D4AF37]/20 transition-all flex items-center gap-1.5 whitespace-nowrap cursor-pointer"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>Book Appointment</span>
            </button>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-[#C5C2BA] hover:text-[#D4AF37] focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0B0B0C]/98 backdrop-blur-xl border-b border-[#D4AF37]/20 px-6 py-6 transition-all animate-fadeIn">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`text-sm uppercase tracking-[0.2em] py-2 transition-colors ${
                  activeNav === link.id
                    ? 'text-[#D4AF37] font-semibold'
                    : 'text-[#C5C2BA] hover:text-[#F7F6F3]'
                }`}
              >
                {link.name}
              </a>
            ))}
            
            <div className="pt-4 border-t border-[#D4AF37]/20 flex flex-col gap-3">
              <a
                href={`tel:${STUDIO_INFO.phone}`}
                className="flex items-center gap-2 text-sm text-[#C5C2BA] hover:text-[#D4AF37]"
              >
                <Phone className="w-4 h-4 text-[#D4AF37]" />
                <span>Call {STUDIO_INFO.phoneDisplay}</span>
              </a>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBooking();
                }}
                className="w-full py-3 rounded-full text-xs font-semibold tracking-widest uppercase text-[#0B0B0C] bg-gradient-to-r from-[#F3E5AB] via-[#D4AF37] to-[#AA820A] text-center"
              >
                Book Your Consultation
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
