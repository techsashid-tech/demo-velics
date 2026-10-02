import React, { useState, useEffect } from 'react';
import { X, Calendar, Clock, Send, Sparkles, CheckCircle2 } from 'lucide-react';
import { SERVICES, STUDIO_INFO } from '../data/servicesData';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultService?: string;
}

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  defaultService,
}) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: defaultService || SERVICES[0].title,
    date: '',
    time: '11:00 AM',
    notes: '',
  });
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    if (defaultService) {
      setFormData((prev) => ({ ...prev, service: defaultService }));
    }
  }, [defaultService]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = encodeURIComponent(
      `Hello VELICS THE GLOW STUDIO!%0A%0A*New Appointment Request*%0A- Name: ${formData.name}%0A- Phone: ${formData.phone}%0A- Service: ${formData.service}%0A- Date: ${formData.date}%0A- Preferred Time: ${formData.time}%0A- Special Notes: ${formData.notes || 'None'}`
    );
    window.open(`https://wa.me/${STUDIO_INFO.whatsappNumber}?text=${text}`, '_blank');
    setIsSuccess(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fadeIn">
      <div className="bg-[#141417] border border-[#D4AF37]/45 rounded-3xl max-w-lg w-full p-6 sm:p-8 relative shadow-2xl max-h-[95vh] overflow-y-auto">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-[#A39E93] hover:text-[#F7F6F3] rounded-full hover:bg-white/5 transition-colors"
          aria-label="Close booking modal"
        >
          <X className="w-5 h-5" />
        </button>

        {isSuccess ? (
          <div className="text-center py-6 space-y-4 animate-fadeIn">
            <CheckCircle2 className="w-14 h-14 text-[#25D366] mx-auto" />
            <h3 className="text-2xl font-serif-brand font-bold text-[#F7F6F3]">
              Request Ready on WhatsApp!
            </h3>
            <p className="text-xs sm:text-sm text-[#C5C2BA] leading-relaxed">
              Your appointment details have opened in WhatsApp for instant verification with our Chandrasekharpur front desk.
            </p>
            <div className="p-4 rounded-xl bg-[#0B0B0C] border border-white/5 text-left text-xs space-y-1 text-[#A39E93]">
              <div>Client: <strong className="text-[#F7F6F3]">{formData.name}</strong></div>
              <div>Treatment: <strong className="text-[#D4AF37]">{formData.service}</strong></div>
              <div>Slot: <strong className="text-[#F7F6F3]">{formData.date} at {formData.time}</strong></div>
            </div>
            <button
              onClick={() => {
                setIsSuccess(false);
                onClose();
              }}
              className="w-full py-3 rounded-full text-xs font-semibold tracking-wider uppercase text-[#0B0B0C] bg-gradient-to-r from-[#F3E5AB] via-[#D4AF37] to-[#AA820A]"
            >
              Done
            </button>
          </div>
        ) : (
          <div>
            <div className="mb-6">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-[#D4AF37]/30 bg-[#0B0B0C] text-[10px] uppercase tracking-widest text-[#D4AF37] font-semibold mb-2">
                <Sparkles className="w-3 h-3" />
                <span>Velics Studio Booking</span>
              </div>
              <h3 className="text-2xl font-serif-brand font-bold text-[#F7F6F3]">
                Schedule Your Consultation
              </h3>
              <p className="text-xs text-[#A39E93] mt-1">
                Chandrasekharpur, Bhubaneswar · Open Daily 9:00 AM – 8:00 PM
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-[11px] uppercase tracking-wider text-[#D4AF37] font-semibold mb-1">
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full bg-[#0B0B0C] border border-[#D4AF37]/30 rounded-xl px-3.5 py-2.5 text-xs text-[#F7F6F3] placeholder-[#666] focus:outline-none focus:border-[#D4AF37]"
                />
              </div>

              <div>
                <label className="block text-[11px] uppercase tracking-wider text-[#D4AF37] font-semibold mb-1">
                  WhatsApp Contact Number *
                </label>
                <input
                  type="tel"
                  required
                  placeholder="+91 Phone Number"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full bg-[#0B0B0C] border border-[#D4AF37]/30 rounded-xl px-3.5 py-2.5 text-xs text-[#F7F6F3] placeholder-[#666] focus:outline-none focus:border-[#D4AF37]"
                />
              </div>

              <div>
                <label className="block text-[11px] uppercase tracking-wider text-[#D4AF37] font-semibold mb-1">
                  Selected Service *
                </label>
                <select
                  value={formData.service}
                  onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                  className="w-full bg-[#0B0B0C] border border-[#D4AF37]/30 rounded-xl px-3.5 py-2.5 text-xs text-[#F7F6F3] focus:outline-none focus:border-[#D4AF37]"
                >
                  {SERVICES.map((s) => (
                    <option key={s.id} value={s.title}>
                      {s.title} ({s.categoryLabel})
                    </option>
                  ))}
                </select>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-[11px] uppercase tracking-wider text-[#D4AF37] font-semibold mb-1">
                    Date *
                  </label>
                  <input
                    type="date"
                    required
                    value={formData.date}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    className="w-full bg-[#0B0B0C] border border-[#D4AF37]/30 rounded-xl px-3 py-2.5 text-xs text-[#F7F6F3] focus:outline-none focus:border-[#D4AF37]"
                  />
                </div>

                <div>
                  <label className="block text-[11px] uppercase tracking-wider text-[#D4AF37] font-semibold mb-1">
                    Preferred Time *
                  </label>
                  <select
                    value={formData.time}
                    onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                    className="w-full bg-[#0B0B0C] border border-[#D4AF37]/30 rounded-xl px-3 py-2.5 text-xs text-[#F7F6F3] focus:outline-none focus:border-[#D4AF37]"
                  >
                    <option value="10:00 AM">10:00 AM</option>
                    <option value="11:30 AM">11:30 AM</option>
                    <option value="01:00 PM">01:00 PM</option>
                    <option value="03:00 PM">03:00 PM</option>
                    <option value="05:00 PM">05:00 PM</option>
                    <option value="06:30 PM">06:30 PM</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-[11px] uppercase tracking-wider text-[#D4AF37] font-semibold mb-1">
                  Notes / Questions (Optional)
                </label>
                <textarea
                  rows={2}
                  placeholder="Skin sensitivities, specific concerns, or questions..."
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  className="w-full bg-[#0B0B0C] border border-[#D4AF37]/30 rounded-xl px-3.5 py-2 text-xs text-[#F7F6F3] placeholder-[#666] focus:outline-none focus:border-[#D4AF37]"
                />
              </div>

              <button
                type="submit"
                className="w-full mt-2 py-3 rounded-full text-xs font-semibold tracking-wider uppercase text-[#0B0B0C] bg-gradient-to-r from-[#F3E5AB] via-[#D4AF37] to-[#AA820A] hover:brightness-110 shadow-lg shadow-[#D4AF37]/20 transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <Send className="w-3.5 h-3.5" />
                <span>Confirm & Send via WhatsApp</span>
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
