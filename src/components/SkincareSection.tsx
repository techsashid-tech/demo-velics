import React, { useState } from 'react';
import { Sparkles, Droplet, Shield, Heart, Sun, ArrowRight, MessageCircle } from 'lucide-react';
import { STUDIO_INFO } from '../data/servicesData';

export const SkincareSection: React.FC = () => {
  const [skinFeel, setSkinFeel] = useState<'dry' | 'oily' | 'combination' | 'normal' | 'sensitive'>('combination');
  const [skinGoal, setSkinGoal] = useState<'hydration' | 'glow' | 'balance' | 'firmness' | 'repair'>('glow');
  const [isGenerated, setIsGenerated] = useState(false);

  const steps = [
    {
      num: '01',
      title: 'Cleanse',
      desc: 'Micellar lipid-neutral cleansing to dissolve daily pollutants and sebum without disrupting acid mantle pH.',
      icon: Droplet
    },
    {
      num: '02',
      title: 'Hydrate',
      desc: 'Multi-molecular weight hyaluronic acid and botanical essences to draw hydration into dermal layers.',
      icon: Sparkles
    },
    {
      num: '03',
      title: 'Protect',
      desc: 'Broad-spectrum SPF 50+ antioxidant barrier shielding against UV rays and urban blue-light degradation.',
      icon: Shield
    },
    {
      num: '04',
      title: 'Nourish',
      desc: 'Targeted bioactive peptides, stabilized Vitamin C, and niacinamide to repair cellular matrix overnight.',
      icon: Heart
    },
    {
      num: '05',
      title: 'Glow',
      desc: 'Professional studio rituals (Hydrafacial & IV infusions) to achieve long-lasting luminous radiance.',
      icon: Sun
    }
  ];

  const routines = {
    dry: {
      am: 'Gentle creamy milk cleanser → Hyaluronic hydrating toner → Squalane peptide cream → Broad-spectrum hydrating SPF 50',
      pm: 'Double oil cleanse → Ceramide barrier repair serum → Rich nourishing lipid butter → Overnight hydration sleeping mask',
      studioTreatment: 'Hydrafacial MD + IV Wellness Hydration Drip'
    },
    oily: {
      am: 'Salicylic gentle gel wash → Niacinamide 5% pore-refining toner → Oil-free gel moisturizer → Mattifying mineral fluid SPF 50',
      pm: 'Micellar deep rinse → Gentle BHA chemical exfoliant → Light hyaluronic gel → Barrier balance fluid',
      studioTreatment: 'Laser Carbon Peel + Advanced Skin Rejuvenation'
    },
    combination: {
      am: 'Balanced foaming gel cleanser → Green tea antioxidant mist → Dual-action lightweight emulsion → Invisible fluid SPF 50',
      pm: 'Double cleanse → Targeted T-zone clarifying serum → Ceramide light cream → Balancing essence',
      studioTreatment: 'Hydrafacial MD + Glutathione Glow Infusion'
    },
    normal: {
      am: 'Gentle pH-balanced wash → Vitamin C 15% brightening serum → Daily peptide moisturizer → Glow-finish broad spectrum SPF',
      pm: 'Botanical cleanse → Retinol 0.3% / Bakuchiol firming essence → Restorative night cream',
      studioTreatment: 'Skin Rejuvenation + Glutathione Therapy'
    },
    sensitive: {
      am: 'Non-foaming oat extract wash → Centella Asiatica soothing mist → Barrier repair ceramide cream → 100% Mineral zinc SPF 50',
      pm: 'Gentle micellar water → Panthenol B5 restorative serum → Calming cica balm',
      studioTreatment: 'Gentle Hydrafacial Sensitive Protocol + Cooling Recovery'
    }
  };

  const handleGenerate = (e: React.FormEvent) => {
    e.preventDefault();
    setIsGenerated(true);
  };

  const activeRoutine = routines[skinFeel];

  const handleWhatsappRoutine = () => {
    const text = encodeURIComponent(
      `Hello VELICS THE GLOW STUDIO! I generated a custom glow routine for ${skinFeel.toUpperCase()} skin with goal "${skinGoal.toUpperCase()}". I would like to book the suggested "${activeRoutine.studioTreatment}" session.`
    );
    window.open(`https://wa.me/${STUDIO_INFO.whatsappNumber}?text=${text}`, '_blank');
  };

  return (
    <section id="skincare" className="py-24 bg-[#0B0B0C] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-[#D4AF37]/30 bg-[#141416] mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span className="text-[11px] tracking-[0.25em] uppercase text-[#D4AF37] font-medium">
              The Science of Glow
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif-brand font-bold text-[#F7F6F3] mb-4">
            Our Signature <span className="gold-text-gradient">5-Step Glow Ritual</span>
          </h2>
          <p className="text-base text-[#A39E93] font-light leading-relaxed">
            True luminescence begins at the cellular level. Discover how our dermatologist-guided daily protocol prepares and prolongs your in-studio results.
          </p>
        </div>

        {/* 5-Step Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 mb-20">
          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <div
                key={step.num}
                className="bg-[#121214] p-6 rounded-2xl border border-[#D4AF37]/15 hover:border-[#D4AF37]/50 transition-all duration-300 group hover:-translate-y-1 shadow-md"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl font-serif-brand font-bold text-[#D4AF37]/60 group-hover:text-[#D4AF37] transition-colors">
                    {step.num}
                  </span>
                  <div className="p-2 rounded-xl bg-[#1A1A1E] text-[#D4AF37] group-hover:bg-[#D4AF37] group-hover:text-[#0B0B0C] transition-colors">
                    <Icon className="w-4 h-4" />
                  </div>
                </div>
                <h3 className="text-lg font-serif-brand font-bold text-[#F7F6F3] mb-2">
                  {step.title}
                </h3>
                <p className="text-xs text-[#A39E93] leading-relaxed">
                  {step.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* Interactive Routine Generator Tool Container */}
        <div className="bg-[#141417] border border-[#D4AF37]/30 rounded-3xl p-6 sm:p-10 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#D4AF37]/5 rounded-full blur-3xl pointer-events-none" />

          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-8">
              <span className="text-xs uppercase tracking-widest text-[#D4AF37] font-semibold">
                Personalized Prescriptive Engine
              </span>
              <h3 className="text-2xl sm:text-3xl font-serif-brand font-bold text-[#F7F6F3] mt-1 mb-2">
                Build Your Bespoke Skincare Protocol
              </h3>
              <p className="text-xs sm:text-sm text-[#A39E93]">
                Select your skin profile and wellness objective to configure a synchronized daily routine and matching studio treatment.
              </p>
            </div>

            <form onSubmit={handleGenerate} className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
              <div>
                <label className="block text-xs uppercase tracking-wider text-[#D4AF37] font-semibold mb-2">
                  Skin Feel / Texture
                </label>
                <select
                  value={skinFeel}
                  onChange={(e) => {
                    setSkinFeel(e.target.value as any);
                    setIsGenerated(true);
                  }}
                  className="w-full bg-[#0B0B0C] border border-[#D4AF37]/30 rounded-xl px-4 py-3 text-sm text-[#F7F6F3] focus:outline-none focus:border-[#D4AF37]"
                >
                  <option value="dry">Dry (Tight, flaky, dullness)</option>
                  <option value="oily">Oily (Excess sebum, enlarged pores)</option>
                  <option value="combination">Combination (Oily T-Zone, normal cheeks)</option>
                  <option value="normal">Normal (Balanced, looking to elevate radiance)</option>
                  <option value="sensitive">Sensitive (Prone to redness, reactive)</option>
                </select>
              </div>

              <div>
                <label className="block text-xs uppercase tracking-wider text-[#D4AF37] font-semibold mb-2">
                  Primary Transformation Goal
                </label>
                <select
                  value={skinGoal}
                  onChange={(e) => {
                    setSkinGoal(e.target.value as any);
                    setIsGenerated(true);
                  }}
                  className="w-full bg-[#0B0B0C] border border-[#D4AF37]/30 rounded-xl px-4 py-3 text-sm text-[#F7F6F3] focus:outline-none focus:border-[#D4AF37]"
                >
                  <option value="glow">Glass Skin Radiance & Brightness</option>
                  <option value="hydration">Deep Plumping & Cellular Hydration</option>
                  <option value="balance">Pore Minimization & Sebum Balance</option>
                  <option value="firmness">Collagen Boosting & Anti-Aging</option>
                  <option value="repair">Skin Barrier Restoration</option>
                </select>
              </div>
            </form>

            {/* Generated Routine Output Box */}
            <div className="bg-[#0B0B0C] rounded-2xl p-6 border border-[#D4AF37]/40 space-y-5 animate-fadeIn">
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <div>
                  <span className="text-[10px] tracking-widest uppercase text-[#D4AF37]">
                    Prescribed Protocol
                  </span>
                  <h4 className="text-lg font-serif-brand font-bold text-[#F7F6F3]">
                    {skinFeel.toUpperCase()} Skin Regimen · {skinGoal.toUpperCase()}
                  </h4>
                </div>
                <div className="px-3 py-1 rounded-full bg-[#D4AF37]/15 border border-[#D4AF37]/30 text-xs text-[#D4AF37] font-medium">
                  Studio Recommended
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-[#141417] p-4 rounded-xl border border-white/5">
                  <span className="text-[10px] tracking-widest uppercase text-[#D4AF37] font-semibold block mb-1">
                    Morning Ritual (AM)
                  </span>
                  <p className="text-xs text-[#C5C2BA] leading-relaxed">
                    {activeRoutine.am}
                  </p>
                </div>

                <div className="bg-[#141417] p-4 rounded-xl border border-white/5">
                  <span className="text-[10px] tracking-widest uppercase text-[#D4AF37] font-semibold block mb-1">
                    Evening Ritual (PM)
                  </span>
                  <p className="text-xs text-[#C5C2BA] leading-relaxed">
                    {activeRoutine.pm}
                  </p>
                </div>
              </div>

              <div className="bg-[#1D1B13] p-4 rounded-xl border border-[#D4AF37]/30 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <span className="text-[10px] tracking-widest uppercase text-[#D4AF37] font-semibold block">
                    Recommended Studio Treatment at Velics:
                  </span>
                  <span className="text-sm font-bold text-[#F7F6F3]">
                    {activeRoutine.studioTreatment}
                  </span>
                </div>

                <button
                  onClick={handleWhatsappRoutine}
                  className="px-5 py-2.5 rounded-full text-xs font-semibold tracking-wider uppercase text-[#0B0B0C] bg-gradient-to-r from-[#F3E5AB] via-[#D4AF37] to-[#AA820A] hover:brightness-110 transition-all flex items-center justify-center gap-1.5 whitespace-nowrap cursor-pointer"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>Discuss With Velics</span>
                </button>
              </div>

              <p className="text-[10px] text-[#A39E93] italic text-center">
                *General educational beauty guidance. Personal clinical consultations at our Chandrasekharpur studio include direct dermascope analysis.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
