import React from 'react';
import { Sparkles, Star, MapPin, ExternalLink } from 'lucide-react';
import { REVIEWS_DATA } from '../data/reviewsData';
import { STUDIO_INFO } from '../data/servicesData';

export const ReviewsSection: React.FC = () => {
  return (
    <section id="reviews" className="py-24 bg-[#0E0E10] border-t border-b border-[#D4AF37]/15 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-[#D4AF37]/30 bg-[#161619] mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span className="text-[11px] tracking-[0.25em] uppercase text-[#D4AF37] font-medium">
              Client Testimonials
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif-brand font-bold text-[#F7F6F3] mb-4">
            Loved & Trusted Across <span className="gold-text-gradient">Bhubaneswar</span>
          </h2>
          <p className="text-base text-[#A39E93] font-light leading-relaxed">
            Read what our clients say about their bespoke skin, hair, and aesthetic transformations at Velics The Glow Studio.
          </p>
        </div>

        {/* Big Rating Summary Card */}
        <div className="max-w-xl mx-auto mb-16 p-6 rounded-2xl bg-[#141417] border border-[#D4AF37]/30 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="flex items-center gap-4">
            <div className="text-5xl font-serif-brand font-bold text-[#D4AF37]">
              5.0
            </div>
            <div>
              <div className="flex items-center gap-1 text-[#D4AF37] mb-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-[#D4AF37]" />
                ))}
              </div>
              <span className="text-xs text-[#A39E93]">
                100% Recommended on Google Reviews
              </span>
            </div>
          </div>

          <a
            href={STUDIO_INFO.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 rounded-full border border-[#D4AF37]/40 text-xs font-semibold uppercase tracking-wider text-[#F7F6F3] hover:bg-[#D4AF37]/10 transition-colors flex items-center gap-1.5 whitespace-nowrap"
          >
            <span>View On Google Maps</span>
            <ExternalLink className="w-3.5 h-3.5 text-[#D4AF37]" />
          </a>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {REVIEWS_DATA.map((review) => (
            <div
              key={review.id}
              className="bg-[#141417] p-6 rounded-2xl border border-[#D4AF37]/20 hover:border-[#D4AF37]/50 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1 text-[#D4AF37]">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-[#D4AF37]" />
                    ))}
                  </div>
                  <span className="text-[10px] text-[#A39E93] uppercase tracking-wider">
                    {review.date}
                  </span>
                </div>

                <p className="text-sm text-[#C5C2BA] leading-relaxed italic mb-6">
                  "{review.text}"
                </p>
              </div>

              <div className="pt-4 border-t border-white/5">
                <h4 className="text-sm font-serif-brand font-bold text-[#F7F6F3]">
                  {review.name}
                </h4>
                <div className="flex items-center justify-between text-[11px] text-[#A39E93] mt-0.5">
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3 h-3 text-[#D4AF37]" />
                    {review.location}
                  </span>
                  <span className="text-[#D4AF37] font-medium">
                    {review.service}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Action Link to Leave Review */}
        <div className="text-center">
          <a
            href={STUDIO_INFO.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs font-semibold tracking-wider uppercase text-[#D4AF37] border border-[#D4AF37]/40 hover:bg-[#D4AF37]/10 transition-colors"
          >
            <Star className="w-3.5 h-3.5 fill-[#D4AF37]" />
            <span>Leave a Review on Google</span>
          </a>
        </div>
      </div>
    </section>
  );
};
