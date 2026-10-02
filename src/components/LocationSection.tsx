import React, { useState } from 'react';
import { Sparkles, MapPin, Phone, Clock, MessageCircle, Navigation, Send, CheckCircle2 } from 'lucide-react';
import { STUDIO_INFO, SERVICES } from '../data/servicesData';

export const LocationSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: SERVICES[0].title,
    date: '',
    time: '11:00',
    notes: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = encodeURIComponent(
      `Hello VELICS THE GLOW STUDIO!%0A%0A*New Appointment Request*%0A- Name: ${formData.name}%0A- Phone: ${formData.phone}%0A- Service: ${formData.service}%0A- Date: ${formData.date}%0A- Time: ${formData.time}%0A- Notes: ${formData.notes || 'None'}`
    );
    window.open(`https://wa.me/${STUDIO_INFO.whatsappNumber}?text=${text}`, '_blank');
    setSubmitted(true);
  };

  return (
    <section id="location" className="py-24 bg-[#0E0E10] border-t border-[#D4AF37]/15 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-[#D4AF37]/30 bg-[#161619] mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span className="text-[11px] tracking-[0.25em] uppercase text-[#D4AF37] font-medium">
              Visit The Studio
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif-brand font-bold text-[#F7F6F3] mb-4">
            Studio Location & <span className="gold-text-gradient">Appointments</span>
          </h2>
          <p className="text-base text-[#A39E93] font-light leading-relaxed">
            Conveniently situated in Chandrasekharpur, Bhubaneswar. Reserve your private session or visit our sanctuary.
          </p>
        </div>

        {/* Studio Info + Map Row */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16">
          {/* Details Column */}
          <div className="lg:col-span-5 bg-[#141417] p-8 rounded-3xl border border-[#D4AF37]/25 flex flex-col justify-between shadow-xl">
            <div>
              <span className="text-xs uppercase tracking-widest text-[#D4AF37] font-semibold block mb-2">
                Flagship Studio
              </span>
              <h3 className="text-2xl font-serif-brand font-bold text-[#F7F6F3] mb-6">
                VELICS THE GLOW STUDIO
              </h3>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-[#1C1C22] text-[#D4AF37] shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs uppercase tracking-wider text-[#A39E93] font-semibold mb-1">
                      Studio Address
                    </h4>
                    <p className="text-sm text-[#F7F6F3] leading-relaxed">
                      {STUDIO_INFO.address}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-[#1C1C22] text-[#D4AF37] shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs uppercase tracking-wider text-[#A39E93] font-semibold mb-1">
                      Direct Consultation Line
                    </h4>
                    <a
                      href={`tel:${STUDIO_INFO.phone}`}
                      className="text-sm text-[#F7F6F3] hover:text-[#D4AF37] font-semibold tabular-nums"
                    >
                      {STUDIO_INFO.phoneDisplay} / +91 63728 89622
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-[#1C1C22] text-[#D4AF37] shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs uppercase tracking-wider text-[#A39E93] font-semibold mb-1">
                      Operating Hours
                    </h4>
                    <p className="text-sm text-[#F7F6F3]">
                      {STUDIO_INFO.hours}
                    </p>
                    <span className="text-xs text-[#25D366] font-medium">Open 7 Days a Week</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-8 border-t border-white/10 mt-8 flex flex-wrap gap-3">
              <a
                href={STUDIO_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-3 px-4 rounded-xl text-xs font-semibold tracking-wider uppercase text-[#0B0B0C] bg-gradient-to-r from-[#F3E5AB] via-[#D4AF37] to-[#AA820A] flex items-center justify-center gap-1.5 shadow-md"
              >
                <Navigation className="w-3.5 h-3.5" />
                <span>Get Directions</span>
              </a>

              <a
                href={`tel:${STUDIO_INFO.phone}`}
                className="py-3 px-4 rounded-xl text-xs font-semibold tracking-wider uppercase text-[#C5C2BA] border border-white/15 hover:border-[#D4AF37] hover:text-[#D4AF37] flex items-center justify-center gap-1.5"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>Call Studio</span>
              </a>
            </div>
          </div>

          {/* Interactive Google Map Embed */}
          <div className="lg:col-span-7 bg-[#141417] rounded-3xl overflow-hidden border border-[#D4AF37]/25 h-[420px] lg:h-auto shadow-xl relative">
            <iframe
              title="Velics The Glow Studio Location Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3741.5649938!2d85.8138627!3d20.3381303!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a1909f578afd95b%3A0x247f96f1cce9084d!2sVELICS%20THE%20GLOW%20STUDIO!5e0!3m2!1sen!2sin!4v1710000000000!5m2!1sen!2sin"
              className="w-full h-full border-0 grayscale contrast-125 opacity-90 hover:opacity-100 hover:grayscale-0 transition-all duration-500"
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            <div className="absolute top-4 left-4 pointer-events-none bg-[#0B0B0C]/80 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-[#D4AF37]/30 text-xs text-[#F3E5AB]">
              📍 Sailashree Vihar, Chandrasekharpur
            </div>
          </div>
        </div>

        {/* Integrated Appointment Booking Form */}
        <div className="bg-[#141417] border border-[#D4AF37]/35 rounded-3xl p-8 sm:p-12 shadow-2xl relative overflow-hidden">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-10">
              <span className="text-xs uppercase tracking-widest text-[#D4AF37] font-semibold">
                Instant Reservation
              </span>
              <h3 className="text-2xl sm:text-3xl font-serif-brand font-bold text-[#F7F6F3] mt-1 mb-2">
                Book Your Studio Transformation
              </h3>
              <p className="text-xs sm:text-sm text-[#A39E93]">
                Fill out your preferred slot below. Our front desk will instantly confirm via WhatsApp or call.
              </p>
            </div>

            {submitted ? (
              <div className="p-8 rounded-2xl bg-[#0B0B0C] border border-[#25D366]/40 text-center space-y-4 animate-fadeIn">
                <CheckCircle2 className="w-12 h-12 text-[#25D366] mx-auto" />
                <h4 className="text-xl font-serif-brand font-bold text-[#F7F6F3]">
                  Appointment Request Sent!
                </h4>
                <p className="text-sm text-[#C5C2BA] max-w-md mx-auto">
                  Your details have been pre-filled into WhatsApp for instant confirmation with our studio team at Chandrasekharpur.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="px-6 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider text-[#D4AF37] border border-[#D4AF37]/40 hover:bg-[#D4AF37]/10"
                >
                  Book Another Appointment
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-[#D4AF37] font-semibold mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Sasmita Jena"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-[#0B0B0C] border border-[#D4AF37]/30 rounded-xl px-4 py-3 text-sm text-[#F7F6F3] placeholder-[#666] focus:outline-none focus:border-[#D4AF37]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-wider text-[#D4AF37] font-semibold mb-2">
                      WhatsApp Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="e.g. +91 98765 43210"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full bg-[#0B0B0C] border border-[#D4AF37]/30 rounded-xl px-4 py-3 text-sm text-[#F7F6F3] placeholder-[#666] focus:outline-none focus:border-[#D4AF37]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-[#D4AF37] font-semibold mb-2">
                      Desired Treatment *
                    </label>
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full bg-[#0B0B0C] border border-[#D4AF37]/30 rounded-xl px-4 py-3 text-sm text-[#F7F6F3] focus:outline-none focus:border-[#D4AF37]"
                    >
                      {SERVICES.map((s) => (
                        <option key={s.id} value={s.title}>
                          {s.title} ({s.categoryLabel})
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-wider text-[#D4AF37] font-semibold mb-2">
                      Preferred Date *
                    </label>
                    <input
                      type="date"
                      required
                      value={formData.date}
                      onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                      className="w-full bg-[#0B0B0C] border border-[#D4AF37]/30 rounded-xl px-4 py-3 text-sm text-[#F7F6F3] focus:outline-none focus:border-[#D4AF37]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-wider text-[#D4AF37] font-semibold mb-2">
                      Preferred Time *
                    </label>
                    <select
                      value={formData.time}
                      onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                      className="w-full bg-[#0B0B0C] border border-[#D4AF37]/30 rounded-xl px-4 py-3 text-sm text-[#F7F6F3] focus:outline-none focus:border-[#D4AF37]"
                    >
                      <option value="10:00 AM">10:00 AM</option>
                      <option value="11:30 AM">11:30 AM</option>
                      <option value="01:00 PM">01:00 PM</option>
                      <option value="03:00 PM">03:00 PM</option>
                      <option value="04:30 PM">04:30 PM</option>
                      <option value="06:00 PM">06:00 PM</option>
                      <option value="07:00 PM">07:00 PM</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider text-[#D4AF37] font-semibold mb-2">
                    Special Notes or Skin Preferences (Optional)
                  </label>
                  <textarea
                    rows={2}
                    placeholder="Mention any specific concerns like sensitivity, upcoming wedding date, or questions..."
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    className="w-full bg-[#0B0B0C] border border-[#D4AF37]/30 rounded-xl px-4 py-3 text-sm text-[#F7F6F3] placeholder-[#666] focus:outline-none focus:border-[#D4AF37]"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 rounded-full text-xs sm:text-sm font-semibold tracking-widest uppercase text-[#0B0B0C] bg-gradient-to-r from-[#F3E5AB] via-[#D4AF37] to-[#AA820A] hover:brightness-110 shadow-lg shadow-[#D4AF37]/25 transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Appointment Request to Studio WhatsApp</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
