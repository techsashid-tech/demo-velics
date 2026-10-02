import React, { useState } from 'react';
import { Sparkles, Clock, Check, ArrowRight, MessageCircle, Info, X } from 'lucide-react';
import { SERVICES, STUDIO_INFO } from '../data/servicesData';
import { ServiceCategory, ServiceItem } from '../types';

interface ServicesSectionProps {
  onBookService: (serviceTitle: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onBookService }) => {
  const [activeCategory, setActiveCategory] = useState<ServiceCategory>('all');
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

  const categories: { id: ServiceCategory; label: string }[] = [
    { id: 'all', label: 'All Services (13)' },
    { id: 'skincare', label: 'Skin & Laser' },
    { id: 'hair', label: 'Hair & Scalp' },
    { id: 'aesthetics', label: 'Facial Aesthetics' },
    { id: 'wellness', label: 'Wellness Drips' },
    { id: 'bridal', label: 'Bridal & Beauty' },
  ];

  const filteredServices = activeCategory === 'all'
    ? SERVICES
    : SERVICES.filter((s) => s.category === activeCategory);

  const handleWhatsappEnquiry = (title: string) => {
    const text = encodeURIComponent(`Hello VELICS THE GLOW STUDIO, I would like to enquire about the "${title}" treatment in Bhubaneswar.`);
    window.open(`https://wa.me/${STUDIO_INFO.whatsappNumber}?text=${text}`, '_blank');
  };

  return (
    <section id="services" className="py-24 bg-[#0E0E10] border-t border-b border-[#D4AF37]/15 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-[#D4AF37]/30 bg-[#161619] mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span className="text-[11px] tracking-[0.25em] uppercase text-[#D4AF37] font-medium">
              Curated Studio Menu
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif-brand font-bold text-[#F7F6F3] mb-4">
            Advanced Clinical <span className="gold-text-gradient">& Beauty Solutions</span>
          </h2>
          <p className="text-base text-[#A39E93] font-light leading-relaxed">
            One premier destination in Chandrasekharpur for comprehensive dermatological aesthetics, trichology hair restoration, and revitalizing wellness drips.
          </p>
        </div>

        {/* Category Tabs Filter */}
        <div className="flex items-center justify-center flex-wrap gap-2 mb-14">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 rounded-full text-xs font-medium tracking-wider uppercase transition-all cursor-pointer ${
                activeCategory === cat.id
                  ? 'bg-gradient-to-r from-[#D4AF37] to-[#AA820A] text-[#0B0B0C] shadow-md shadow-[#D4AF37]/20 font-semibold'
                  : 'bg-[#161619] text-[#C5C2BA] border border-white/5 hover:border-[#D4AF37]/40 hover:text-[#F7F6F3]'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredServices.map((service) => (
            <div
              key={service.id}
              className="group bg-[#141417] rounded-2xl border border-[#D4AF37]/20 hover:border-[#D4AF37]/60 transition-all duration-300 overflow-hidden flex flex-col justify-between hover:-translate-y-1 shadow-lg hover:shadow-2xl hover:shadow-[#D4AF37]/10"
            >
              <div>
                {/* Image Container */}
                <div className="relative h-56 overflow-hidden bg-[#1D1D22]">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#141417] via-transparent to-black/30" />
                  
                  {/* Category Pill */}
                  <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-[#0B0B0C]/80 backdrop-blur-md border border-[#D4AF37]/30 text-[10px] tracking-wider uppercase text-[#F3E5AB] font-medium">
                    {service.categoryLabel}
                  </div>

                  {service.popular && (
                    <div className="absolute top-4 right-4 px-2.5 py-0.5 rounded-full bg-[#D4AF37] text-[#0B0B0C] text-[10px] font-bold tracking-wider uppercase">
                      Client Favorite
                    </div>
                  )}

                  <div className="absolute bottom-3 right-4 flex items-center gap-1 text-[11px] text-[#C5C2BA] bg-[#0B0B0C]/70 backdrop-blur-md px-2.5 py-1 rounded-full border border-white/10">
                    <Clock className="w-3 h-3 text-[#D4AF37]" />
                    <span>{service.duration}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-serif-brand font-bold text-[#F7F6F3] mb-2 group-hover:text-[#D4AF37] transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-xs text-[#D4AF37] font-medium mb-3 italic">
                    {service.tagline}
                  </p>
                  <p className="text-sm text-[#A39E93] leading-relaxed mb-5">
                    {service.description}
                  </p>

                  {/* Key Benefits */}
                  <div className="space-y-2 mb-6">
                    {service.benefits.map((benefit, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-[#C5C2BA]">
                        <Check className="w-3.5 h-3.5 text-[#D4AF37] shrink-0 mt-0.5" />
                        <span>{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Card Footer Actions */}
              <div className="p-6 pt-0 border-t border-white/5 flex items-center gap-2 mt-auto">
                <button
                  onClick={() => onBookService(service.title)}
                  className="flex-1 py-2.5 rounded-xl text-xs font-semibold tracking-wider uppercase text-[#0B0B0C] bg-gradient-to-r from-[#F3E5AB] via-[#D4AF37] to-[#AA820A] hover:brightness-110 transition-all flex items-center justify-center gap-1.5 cursor-pointer shadow-sm"
                >
                  <span>Book Now</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>

                <button
                  onClick={() => handleWhatsappEnquiry(service.title)}
                  title="Enquire on WhatsApp"
                  className="p-2.5 rounded-xl border border-[#25D366]/40 text-[#25D366] hover:bg-[#25D366]/15 transition-colors cursor-pointer"
                  aria-label="Enquire on WhatsApp"
                >
                  <MessageCircle className="w-4 h-4" />
                </button>

                <button
                  onClick={() => setSelectedService(service)}
                  title="View Protocol Details"
                  className="p-2.5 rounded-xl border border-white/10 text-[#C5C2BA] hover:text-[#D4AF37] hover:border-[#D4AF37]/40 transition-colors cursor-pointer"
                  aria-label="View Details"
                >
                  <Info className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Service Detail Modal */}
      {selectedService && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fadeIn">
          <div className="bg-[#141417] border border-[#D4AF37]/40 rounded-2xl max-w-2xl w-full p-6 sm:p-8 relative max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setSelectedService(null)}
              className="absolute top-4 right-4 p-2 text-[#A39E93] hover:text-[#F7F6F3] rounded-full hover:bg-white/5 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="mb-6">
              <span className="text-[11px] uppercase tracking-widest text-[#D4AF37] font-semibold">
                {selectedService.categoryLabel}
              </span>
              <h3 className="text-2xl sm:text-3xl font-serif-brand font-bold text-[#F7F6F3] mt-1 mb-2">
                {selectedService.title}
              </h3>
              <p className="text-sm text-[#D4AF37] italic">{selectedService.tagline}</p>
            </div>

            <div className="mb-6 rounded-xl overflow-hidden h-64 bg-[#1D1D22]">
              <img
                src={selectedService.image}
                alt={selectedService.title}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>

            <div className="space-y-4 mb-8">
              <div>
                <h4 className="text-xs uppercase tracking-wider text-[#A39E93] font-semibold mb-2">
                  Treatment Overview
                </h4>
                <p className="text-sm text-[#C5C2BA] leading-relaxed">
                  {selectedService.description}
                </p>
              </div>

              <div>
                <h4 className="text-xs uppercase tracking-wider text-[#A39E93] font-semibold mb-2">
                  Key Benefits & Clinical Outcomes
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {selectedService.benefits.map((b, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs text-[#F7F6F3] bg-[#1B1B20] p-2.5 rounded-lg border border-white/5">
                      <Check className="w-3.5 h-3.5 text-[#D4AF37]" />
                      <span>{b}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex items-center gap-4 text-xs text-[#A39E93] pt-2">
                <span className="flex items-center gap-1.5">
                  <Clock className="w-4 h-4 text-[#D4AF37]" />
                  Session Duration: <strong className="text-[#F7F6F3]">{selectedService.duration}</strong>
                </span>
                <span>·</span>
                <span>Administered by certified aesthetic specialists</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <button
                onClick={() => {
                  const title = selectedService.title;
                  setSelectedService(null);
                  onBookService(title);
                }}
                className="flex-1 py-3 rounded-full text-xs font-semibold tracking-wider uppercase text-[#0B0B0C] bg-gradient-to-r from-[#F3E5AB] via-[#D4AF37] to-[#AA820A] hover:brightness-110 transition-all text-center"
              >
                Book Appointment for {selectedService.title}
              </button>
              <button
                onClick={() => handleWhatsappEnquiry(selectedService.title)}
                className="px-6 py-3 rounded-full text-xs font-semibold tracking-wider uppercase text-[#25D366] border border-[#25D366]/40 hover:bg-[#25D366]/10 transition-all flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Inquire via WhatsApp</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
