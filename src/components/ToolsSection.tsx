import React, { useState } from 'react';
import { Sparkles, ClipboardCheck, Sparkle, Smile, CalendarClock, X, Check, ArrowRight, MessageCircle } from 'lucide-react';
import { STUDIO_INFO } from '../data/servicesData';

type ActiveTool = 'quiz' | 'face' | 'checklist' | 'prep' | null;

export const ToolsSection: React.FC = () => {
  const [activeTool, setActiveTool] = useState<ActiveTool>(null);

  // Quiz state
  const [qMidday, setQMidday] = useState('tzone');
  const [qPores, setQPores] = useState('visible');
  const [qReactivity, setQReactivity] = useState('occasional');
  const [quizSubmitted, setQuizSubmitted] = useState(false);

  // Face guide state
  const [faceShape, setFaceShape] = useState<'oval' | 'round' | 'square' | 'heart' | 'diamond'>('oval');

  // Checklist state
  const [checkedItems, setCheckedItems] = useState<Record<string, boolean>>({
    water: true,
    spf: true,
    cleanse: false,
    serum: false,
    sleep: false,
  });

  const checklistItems = [
    { id: 'water', label: 'Drank 2.5L+ structured water for cellular hydration' },
    { id: 'spf', label: 'Applied broad-spectrum SPF 50+ 20 mins before sun exposure' },
    { id: 'cleanse', label: 'Completed evening double cleanse to dissolve sunscreen & pollution' },
    { id: 'serum', label: 'Applied active antioxidant or peptide serum on damp skin' },
    { id: 'sleep', label: '7+ hours of beauty restorative sleep on a silk/satin pillow' },
  ];

  const completedCount = Object.values(checkedItems).filter(Boolean).length;
  const progressPercent = Math.round((completedCount / checklistItems.length) * 100);

  const toggleChecklist = (id: string) => {
    setCheckedItems((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const getQuizDiagnosis = () => {
    if (qMidday === 'tight') {
      return {
        type: 'Lipid-Depleted / Dry Skin Barrier',
        summary: 'Your skin barrier requires lipid replenishment and deep moisture encapsulation.',
        treatment: 'Hydrafacial MD + IV Hydration Drip'
      };
    }
    if (qMidday === 'shiny') {
      return {
        type: 'Hyper-Sebaceous / Acne-Prone Skin',
        summary: 'Your pores are overproducing sebum while needing non-comedogenic balancing.',
        treatment: 'Laser Carbon Peel + Advanced Skin Rejuvenation'
      };
    }
    if (qReactivity === 'frequent') {
      return {
        type: 'Reactive / Sensitive Acid Mantle',
        summary: 'Gentle calming botanicals and restorative ceramides are essential.',
        treatment: 'Gentle Hydrafacial Sensitive Protocol'
      };
    }
    return {
      type: 'Combination Balance Profile',
      summary: 'You require targeted T-zone pore refinement alongside cheek barrier hydration.',
      treatment: 'Hydrafacial MD + Glutathione Therapy'
    };
  };

  const diagnosis = getQuizDiagnosis();

  const handleWhatsappQuiz = () => {
    const text = encodeURIComponent(
      `Hello VELICS THE GLOW STUDIO, my skin quiz result was "${diagnosis.type}". I would like to book the recommended "${diagnosis.treatment}".`
    );
    window.open(`https://wa.me/${STUDIO_INFO.whatsappNumber}?text=${text}`, '_blank');
  };

  return (
    <section id="tools" className="py-24 bg-[#0B0B0C] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-[#D4AF37]/30 bg-[#141416] mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span className="text-[11px] tracking-[0.25em] uppercase text-[#D4AF37] font-medium">
              Interactive Utilities
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif-brand font-bold text-[#F7F6F3] mb-4">
            Free Studio <span className="gold-text-gradient">Beauty Tools</span>
          </h2>
          <p className="text-base text-[#A39E93] font-light leading-relaxed">
            Assess your skin profile, explore facial harmony proportions, and track your daily radiance rituals with our complimentary aesthetic calculators.
          </p>
        </div>

        {/* 4 Tool Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Tool 1 */}
          <div className="bg-[#141417] p-6 rounded-2xl border border-[#D4AF37]/20 hover:border-[#D4AF37]/60 transition-all flex flex-col justify-between group hover:-translate-y-1">
            <div>
              <div className="p-3 rounded-xl bg-[#1C1C22] text-[#D4AF37] w-fit mb-4 group-hover:bg-[#D4AF37] group-hover:text-[#0B0B0C] transition-colors">
                <ClipboardCheck className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-serif-brand font-bold text-[#F7F6F3] mb-2">
                Skin Type Quiz
              </h3>
              <p className="text-xs text-[#A39E93] leading-relaxed mb-6">
                A 60-second diagnostic evaluating your moisture barrier, pore dynamics, and optimal clinic rituals.
              </p>
            </div>
            <button
              onClick={() => {
                setActiveTool('quiz');
                setQuizSubmitted(false);
              }}
              className="w-full py-2.5 rounded-xl border border-[#D4AF37]/40 text-xs font-semibold uppercase tracking-wider text-[#D4AF37] hover:bg-[#D4AF37] hover:text-[#0B0B0C] transition-all flex items-center justify-center gap-1.5 cursor-pointer"
            >
              <span>Take Quiz</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Tool 2 */}
          <div className="bg-[#141417] p-6 rounded-2xl border border-[#D4AF37]/20 hover:border-[#D4AF37]/60 transition-all flex flex-col justify-between group hover:-translate-y-1">
            <div>
              <div className="p-3 rounded-xl bg-[#1C1C22] text-[#D4AF37] w-fit mb-4 group-hover:bg-[#D4AF37] group-hover:text-[#0B0B0C] transition-colors">
                <Smile className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-serif-brand font-bold text-[#F7F6F3] mb-2">
                Face Harmony Guide
              </h3>
              <p className="text-xs text-[#A39E93] leading-relaxed mb-6">
                Discover contouring, brow framing, and filler sculpting suggestions for your specific bone structure.
              </p>
            </div>
            <button
              onClick={() => setActiveTool('face')}
              className="w-full py-2.5 rounded-xl border border-[#D4AF37]/40 text-xs font-semibold uppercase tracking-wider text-[#D4AF37] hover:bg-[#D4AF37] hover:text-[#0B0B0C] transition-all flex items-center justify-center gap-1.5 cursor-pointer"
            >
              <span>Explore Guide</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Tool 3 */}
          <div className="bg-[#141417] p-6 rounded-2xl border border-[#D4AF37]/20 hover:border-[#D4AF37]/60 transition-all flex flex-col justify-between group hover:-translate-y-1">
            <div>
              <div className="p-3 rounded-xl bg-[#1C1C22] text-[#D4AF37] w-fit mb-4 group-hover:bg-[#D4AF37] group-hover:text-[#0B0B0C] transition-colors">
                <Sparkle className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-serif-brand font-bold text-[#F7F6F3] mb-2">
                Self-Care Tracker
              </h3>
              <p className="text-xs text-[#A39E93] leading-relaxed mb-6">
                An interactive daily tracker for water intake, SPF compliance, and barrier protection habits.
              </p>
            </div>
            <button
              onClick={() => setActiveTool('checklist')}
              className="w-full py-2.5 rounded-xl border border-[#D4AF37]/40 text-xs font-semibold uppercase tracking-wider text-[#D4AF37] hover:bg-[#D4AF37] hover:text-[#0B0B0C] transition-all flex items-center justify-center gap-1.5 cursor-pointer"
            >
              <span>Launch Tracker</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Tool 4 */}
          <div className="bg-[#141417] p-6 rounded-2xl border border-[#D4AF37]/20 hover:border-[#D4AF37]/60 transition-all flex flex-col justify-between group hover:-translate-y-1">
            <div>
              <div className="p-3 rounded-xl bg-[#1C1C22] text-[#D4AF37] w-fit mb-4 group-hover:bg-[#D4AF37] group-hover:text-[#0B0B0C] transition-colors">
                <CalendarClock className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-serif-brand font-bold text-[#F7F6F3] mb-2">
                Appointment Prep
              </h3>
              <p className="text-xs text-[#A39E93] leading-relaxed mb-6">
                Pre-session clinical instructions for Laser, Hydrafacial, PRP, and Botox to maximize results.
              </p>
            </div>
            <button
              onClick={() => setActiveTool('prep')}
              className="w-full py-2.5 rounded-xl border border-[#D4AF37]/40 text-xs font-semibold uppercase tracking-wider text-[#D4AF37] hover:bg-[#D4AF37] hover:text-[#0B0B0C] transition-all flex items-center justify-center gap-1.5 cursor-pointer"
            >
              <span>View Prep Tips</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>

      {/* Tool Modal Dialog */}
      {activeTool && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fadeIn">
          <div className="bg-[#141417] border border-[#D4AF37]/40 rounded-2xl max-w-xl w-full p-6 sm:p-8 relative max-h-[90vh] overflow-y-auto shadow-2xl">
            <button
              onClick={() => setActiveTool(null)}
              className="absolute top-4 right-4 p-2 text-[#A39E93] hover:text-[#F7F6F3] rounded-full hover:bg-white/5 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {/* QUIZ MODAL */}
            {activeTool === 'quiz' && (
              <div>
                <span className="text-xs uppercase tracking-widest text-[#D4AF37] font-semibold">
                  Diagnostic Quiz
                </span>
                <h3 className="text-2xl font-serif-brand font-bold text-[#F7F6F3] mt-1 mb-4">
                  Skin Barrier Diagnostic
                </h3>

                {!quizSubmitted ? (
                  <div className="space-y-4">
                    <div>
                      <label className="block text-xs uppercase tracking-wider text-[#A39E93] font-semibold mb-1.5">
                        1. How does your skin feel around 2:00 PM?
                      </label>
                      <select
                        value={qMidday}
                        onChange={(e) => setQMidday(e.target.value)}
                        className="w-full bg-[#0B0B0C] border border-[#D4AF37]/30 rounded-xl px-3 py-2.5 text-xs text-[#F7F6F3] focus:outline-none"
                      >
                        <option value="tight">Tight, dry, or looks visibly flaky</option>
                        <option value="shiny">Excessively oily across forehead and cheeks</option>
                        <option value="tzone">Oily on nose and forehead, normal elsewhere</option>
                        <option value="balanced">Comfortable, supple, and balanced</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs uppercase tracking-wider text-[#A39E93] font-semibold mb-1.5">
                        2. How would you describe your pore visibility?
                      </label>
                      <select
                        value={qPores}
                        onChange={(e) => setQPores(e.target.value)}
                        className="w-full bg-[#0B0B0C] border border-[#D4AF37]/30 rounded-xl px-3 py-2.5 text-xs text-[#F7F6F3] focus:outline-none"
                      >
                        <option value="invisible">Barely noticeable or very fine</option>
                        <option value="visible">Visible around the nose, chin, and central forehead</option>
                        <option value="enlarged">Enlarged and prone to persistent blackheads</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs uppercase tracking-wider text-[#A39E93] font-semibold mb-1.5">
                        3. How often do you experience flushing or stinging?
                      </label>
                      <select
                        value={qReactivity}
                        onChange={(e) => setQReactivity(e.target.value)}
                        className="w-full bg-[#0B0B0C] border border-[#D4AF37]/30 rounded-xl px-3 py-2.5 text-xs text-[#F7F6F3] focus:outline-none"
                      >
                        <option value="rarely">Rarely or never</option>
                        <option value="occasional">Occasionally with new active products or extreme sun</option>
                        <option value="frequent">Frequently stings or turns red easily</option>
                      </select>
                    </div>

                    <button
                      onClick={() => setQuizSubmitted(true)}
                      className="w-full py-3 rounded-full text-xs font-semibold tracking-wider uppercase text-[#0B0B0C] bg-gradient-to-r from-[#F3E5AB] via-[#D4AF37] to-[#AA820A] hover:brightness-110 mt-4 transition-all"
                    >
                      Calculate Skin Assessment
                    </button>
                  </div>
                ) : (
                  <div className="space-y-4 animate-fadeIn">
                    <div className="p-4 rounded-xl bg-[#1B1B20] border border-[#D4AF37]/30">
                      <span className="text-[10px] tracking-widest uppercase text-[#D4AF37] font-semibold">
                        Assessment Result
                      </span>
                      <h4 className="text-lg font-serif-brand font-bold text-[#F7F6F3] mt-1">
                        {diagnosis.type}
                      </h4>
                      <p className="text-xs text-[#C5C2BA] mt-2 leading-relaxed">
                        {diagnosis.summary}
                      </p>
                    </div>

                    <div className="p-4 rounded-xl bg-[#0B0B0C] border border-white/10">
                      <span className="text-[10px] tracking-widest uppercase text-[#A39E93] font-semibold block mb-1">
                        Recommended Treatment at Velics Studio:
                      </span>
                      <p className="text-sm font-bold text-[#D4AF37]">
                        {diagnosis.treatment}
                      </p>
                    </div>

                    <div className="flex gap-2 pt-2">
                      <button
                        onClick={handleWhatsappQuiz}
                        className="flex-1 py-3 rounded-full text-xs font-semibold tracking-wider uppercase text-[#0B0B0C] bg-gradient-to-r from-[#F3E5AB] via-[#D4AF37] to-[#AA820A] flex items-center justify-center gap-1.5"
                      >
                        <MessageCircle className="w-3.5 h-3.5" />
                        <span>Book Recommended Session</span>
                      </button>
                      <button
                        onClick={() => setQuizSubmitted(false)}
                        className="px-4 py-3 rounded-full text-xs border border-white/10 text-[#C5C2BA]"
                      >
                        Retake
                      </button>
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* FACE GUIDE MODAL */}
            {activeTool === 'face' && (
              <div>
                <span className="text-xs uppercase tracking-widest text-[#D4AF37] font-semibold">
                  Aesthetic Symmetry
                </span>
                <h3 className="text-2xl font-serif-brand font-bold text-[#F7F6F3] mt-1 mb-4">
                  Facial Harmony Proportions
                </h3>

                <div className="flex flex-wrap gap-2 mb-6">
                  {(['oval', 'round', 'square', 'heart', 'diamond'] as const).map((shape) => (
                    <button
                      key={shape}
                      onClick={() => setFaceShape(shape)}
                      className={`px-3 py-1.5 rounded-full text-xs font-medium uppercase tracking-wider transition-colors ${
                        faceShape === shape
                          ? 'bg-[#D4AF37] text-[#0B0B0C] font-semibold'
                          : 'bg-[#1C1C22] text-[#C5C2BA] border border-white/5'
                      }`}
                    >
                      {shape}
                    </button>
                  ))}
                </div>

                <div className="space-y-4 p-4 rounded-xl bg-[#0B0B0C] border border-[#D4AF37]/30">
                  <h4 className="text-base font-serif-brand font-bold text-[#D4AF37] capitalize">
                    {faceShape} Structure Profile
                  </h4>
                  {faceShape === 'oval' && (
                    <p className="text-xs text-[#C5C2BA] leading-relaxed">
                      Naturally balanced proportions. Soft curved jawlines harmonize with winged eyelash extensions and subtle cheekbone dermal contouring.
                    </p>
                  )}
                  {faceShape === 'round' && (
                    <p className="text-xs text-[#C5C2BA] leading-relaxed">
                      Equal width and length with soft curves. Benefited by vertical cheek sculpting, cat-eye lash mapping, and high-arch brow micro-shading.
                    </p>
                  )}
                  {faceShape === 'square' && (
                    <p className="text-xs text-[#C5C2BA] leading-relaxed">
                      Defined angular jawline. Masseter botox slimming combined with soft curved lashes creates exquisite feminine harmony.
                    </p>
                  )}
                  {faceShape === 'heart' && (
                    <p className="text-xs text-[#C5C2BA] leading-relaxed">
                      Wider forehead tapering into a delicate chin. Subtle chin filler projection balances the profile alongside natural doll-eye lashes.
                    </p>
                  )}
                  {faceShape === 'diamond' && (
                    <p className="text-xs text-[#C5C2BA] leading-relaxed">
                      Prominent high cheekbones with narrower forehead and jaw. Temple volumization and medium volume lash fans emphasize natural symmetry.
                    </p>
                  )}
                </div>

                <button
                  onClick={() => setActiveTool(null)}
                  className="w-full mt-6 py-2.5 rounded-full text-xs font-semibold tracking-wider uppercase text-[#0B0B0C] bg-[#D4AF37]"
                >
                  Close Guide
                </button>
              </div>
            )}

            {/* CHECKLIST TRACKER MODAL */}
            {activeTool === 'checklist' && (
              <div>
                <span className="text-xs uppercase tracking-widest text-[#D4AF37] font-semibold">
                  Daily Tracker
                </span>
                <h3 className="text-2xl font-serif-brand font-bold text-[#F7F6F3] mt-1 mb-2">
                  Daily Glow Habits Tracker
                </h3>
                <p className="text-xs text-[#A39E93] mb-4">
                  Check off your radiance actions today to build healthy skin momentum.
                </p>

                {/* Progress bar */}
                <div className="mb-6">
                  <div className="flex justify-between text-xs text-[#D4AF37] font-semibold mb-1">
                    <span>Daily Progress</span>
                    <span>{progressPercent}% Complete</span>
                  </div>
                  <div className="w-full h-2 rounded-full bg-[#1C1C22] overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-[#D4AF37] to-[#F3E5AB] transition-all duration-300"
                      style={{ width: `${progressPercent}%` }}
                    />
                  </div>
                </div>

                <div className="space-y-2.5 mb-6">
                  {checklistItems.map((item) => (
                    <div
                      key={item.id}
                      onClick={() => toggleChecklist(item.id)}
                      className={`p-3 rounded-xl border flex items-center gap-3 cursor-pointer transition-colors ${
                        checkedItems[item.id]
                          ? 'bg-[#1B1B20] border-[#D4AF37]/50 text-[#F7F6F3]'
                          : 'bg-[#0B0B0C] border-white/10 text-[#A39E93]'
                      }`}
                    >
                      <div
                        className={`w-5 h-5 rounded-md flex items-center justify-center border ${
                          checkedItems[item.id]
                            ? 'bg-[#D4AF37] border-[#D4AF37] text-[#0B0B0C]'
                            : 'border-white/20'
                        }`}
                      >
                        {checkedItems[item.id] && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                      </div>
                      <span className="text-xs select-none">{item.label}</span>
                    </div>
                  ))}
                </div>

                {progressPercent === 100 && (
                  <div className="p-3 rounded-xl bg-[#D4AF37]/15 border border-[#D4AF37]/40 text-center mb-4 text-xs text-[#D4AF37] font-semibold">
                    ✨ Perfect 100%! Your skin barrier thanks you for your dedication today.
                  </div>
                )}

                <button
                  onClick={() => setActiveTool(null)}
                  className="w-full py-2.5 rounded-full text-xs font-semibold tracking-wider uppercase text-[#0B0B0C] bg-[#D4AF37]"
                >
                  Save & Close
                </button>
              </div>
            )}

            {/* PREP GUIDE MODAL */}
            {activeTool === 'prep' && (
              <div>
                <span className="text-xs uppercase tracking-widest text-[#D4AF37] font-semibold">
                  Clinical Protocol
                </span>
                <h3 className="text-2xl font-serif-brand font-bold text-[#F7F6F3] mt-1 mb-4">
                  Pre-Appointment Instructions
                </h3>

                <div className="space-y-4">
                  <div className="p-3.5 rounded-xl bg-[#0B0B0C] border border-white/10">
                    <h4 className="text-xs font-bold text-[#D4AF37] uppercase tracking-wider mb-1">
                      For Laser Hair Reduction
                    </h4>
                    <p className="text-xs text-[#C5C2BA] leading-relaxed">
                      Shave the treatment area 24 hours prior with a clean razor. Avoid waxing, threading, or plucking 3 weeks prior so the hair follicle root remains intact.
                    </p>
                  </div>

                  <div className="p-3.5 rounded-xl bg-[#0B0B0C] border border-white/10">
                    <h4 className="text-xs font-bold text-[#D4AF37] uppercase tracking-wider mb-1">
                      For Hydrafacial & Peels
                    </h4>
                    <p className="text-xs text-[#C5C2BA] leading-relaxed">
                      Discontinue strong active retinoids, AHA/BHA exfoliants, and tanning beds 48–72 hours prior to ensure zero barrier sensitization.
                    </p>
                  </div>

                  <div className="p-3.5 rounded-xl bg-[#0B0B0C] border border-white/10">
                    <h4 className="text-xs font-bold text-[#D4AF37] uppercase tracking-wider mb-1">
                      For PRP & IV Wellness Drips
                    </h4>
                    <p className="text-xs text-[#C5C2BA] leading-relaxed">
                      Drink at least 1 liter of fresh water 2 hours before your appointment to facilitate effortless vein access and concentrated plasma quality.
                    </p>
                  </div>
                </div>

                <button
                  onClick={() => setActiveTool(null)}
                  className="w-full mt-6 py-2.5 rounded-full text-xs font-semibold tracking-wider uppercase text-[#0B0B0C] bg-[#D4AF37]"
                >
                  Understood
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
};
