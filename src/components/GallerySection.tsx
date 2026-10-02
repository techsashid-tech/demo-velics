import React, { useState } from 'react';
import { Sparkles, Maximize2, X } from 'lucide-react';
import { GALLERY_ITEMS } from '../data/servicesData';
import { GalleryItem } from '../types';

export const GallerySection: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);

  return (
    <section id="gallery" className="py-24 bg-[#0B0B0C] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-[#D4AF37]/30 bg-[#141416] mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span className="text-[11px] tracking-[0.25em] uppercase text-[#D4AF37] font-medium">
              Visual Tour
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif-brand font-bold text-[#F7F6F3] mb-4">
            Studio Ambiance & <span className="gold-text-gradient">Clinical Suites</span>
          </h2>
          <p className="text-base text-[#A39E93] font-light leading-relaxed">
            Step inside our architectural sanctuary in Chandrasekharpur, where state-of-the-art dermatological equipment harmonizes with calming luxury.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {GALLERY_ITEMS.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedImage(item)}
              className="group relative h-80 rounded-2xl overflow-hidden cursor-pointer border border-[#D4AF37]/20 hover:border-[#D4AF37] transition-all duration-500 shadow-lg hover:shadow-2xl hover:shadow-[#D4AF37]/15"
            >
              <img
                src={item.url}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-80 group-hover:opacity-95 transition-opacity" />

              <div className="absolute top-4 right-4 p-2 rounded-full bg-black/50 text-[#F7F6F3] opacity-0 group-hover:opacity-100 transition-opacity">
                <Maximize2 className="w-4 h-4 text-[#D4AF37]" />
              </div>

              <div className="absolute bottom-4 left-4 right-4">
                <span className="text-[10px] tracking-widest uppercase text-[#D4AF37] font-semibold block mb-1">
                  {item.category}
                </span>
                <h3 className="text-base font-serif-brand font-bold text-[#F7F6F3] leading-snug">
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          onClick={() => setSelectedImage(null)}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md animate-fadeIn"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-4xl w-full bg-[#141417] border border-[#D4AF37]/40 rounded-2xl overflow-hidden shadow-2xl"
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 z-10 p-2 text-white/80 hover:text-white bg-black/60 rounded-full transition-colors"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="max-h-[75vh] overflow-hidden bg-black flex items-center justify-center">
              <img
                src={selectedImage.url}
                alt={selectedImage.title}
                className="max-h-[75vh] w-auto object-contain"
                referrerPolicy="no-referrer"
              />
            </div>

            <div className="p-6 bg-[#141417] border-t border-white/10 flex items-center justify-between">
              <div>
                <span className="text-xs uppercase tracking-widest text-[#D4AF37] font-semibold">
                  {selectedImage.category}
                </span>
                <h3 className="text-xl font-serif-brand font-bold text-[#F7F6F3]">
                  {selectedImage.title}
                </h3>
              </div>
              <span className="text-xs text-[#A39E93]">
                VELICS THE GLOW STUDIO · BHUBANESWAR
              </span>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
