import { ServiceItem } from '../types';

export const STUDIO_INFO = {
  name: "VELICS THE GLOW STUDIO",
  tagline: "One Destination for Complete Beauty Transformation",
  motto: "Look Good, Feel Better. Because You Deserve the Best.",
  pillars: "Skin · Hair · Aesthetics · Wellness",
  phone: "+916372889622",
  phoneDisplay: "063728 89622",
  whatsappNumber: "916372889622",
  address: "Tulasi Vihar Rd, Phase-VII, Rangeswar Nagar, Sailashree Vihar, Chandrasekharpur, Bhubaneswar, Odisha 751021",
  shortAddress: "Chandrasekharpur, Bhubaneswar",
  hours: "Monday – Sunday: 9:00 AM – 8:00 PM",
  googleMapsUrl: "https://www.google.com/maps/place/VELICS+THE+GLOW+STUDIO/@20.3381303,85.8138627,17z/data=!4m15!1m8!3m7!1s0x3a1909f578afd95b:0x247f96f1cce9084d!2sVELICS+THE+GLOW+STUDIO!8m2!3d20.3381303!4d85.8138627!10e5!16s%2Fg%2F11zdc_mqh2!3m5!1s0x3a1909f578afd95b:0x247f96f1cce9084d!8m2!3d20.3381303!4d85.8138627!16s%2Fg%2F11zdc_mqh2",
  instagram: "https://instagram.com/velicsbbsr",
  facebook: "https://facebook.com",
  developerName: "S K DAS",
  developerPhone: "07798977519",
};

export const SERVICES: ServiceItem[] = [
  {
    id: "laser-hair-reduction",
    title: "Laser Hair Reduction",
    category: "skincare",
    categoryLabel: "Skin / Laser",
    tagline: "Painless, permanent smoothness with advanced diode cooling technology",
    description: "Experience effortless, silky-smooth skin with our triple-wavelength laser hair reduction system. Engineered with integrated contact skin cooling for maximum comfort on all Indian skin types.",
    benefits: ["Zero razor bumps or ingrown hairs", "Clinically proven permanent reduction", "Virtually painless with sapphire contact chilling"],
    duration: "45–60 mins",
    image: "/src/assets/images/service_laser_aesthetic_1790971573644.jpg",
    iconName: "Zap",
    popular: true
  },
  {
    id: "hydrafacial",
    title: "Hydrafacial MD",
    category: "skincare",
    categoryLabel: "Clinical Skincare",
    tagline: "Vortex-fusion deep pore cleansing, gentle acid peel & serum infusion",
    description: "Our signature multi-stage medical hydrafacial deeply purifies, extracts stubborn impurities, and infuses active hyaluronic acid and peptide antioxidants for instant glass-skin radiance.",
    benefits: ["Instant luminous dewy glow", "Unclogs enlarged pores without irritation", "Intense cellular hydration barrier restoration"],
    duration: "60 mins",
    image: "/src/assets/images/service_hydrafacial_glow_1790971561088.jpg",
    iconName: "Droplets",
    popular: true
  },
  {
    id: "botox-fillers",
    title: "Botox & Dermal Fillers",
    category: "aesthetics",
    categoryLabel: "Facial Aesthetics",
    tagline: "Artisan physician-led facial sculpting & subtle line softening",
    description: "Master aesthetic treatments administered by certified specialists to subtly smooth expression lines, sculpt jawlines, and restore natural youthful volume with US-FDA approved formulations.",
    benefits: ["Preserves natural facial expressions", "Restores youthful facial contours", "Visible, refined results lasting 6–12 months"],
    duration: "30–45 mins",
    image: "/src/assets/images/service_laser_aesthetic_1790971573644.jpg",
    iconName: "Sparkles",
    popular: true
  },
  {
    id: "prp-therapy",
    title: "PRP & GFC Therapy",
    category: "hair",
    categoryLabel: "Hair & Scalp",
    tagline: "Autologous growth factor concentrate for dormant follicle revival",
    description: "Harness the regenerative power of your own platelet growth factors. Stimulates micro-circulation, stops active hair fall, and triggers dense new follicle regrowth.",
    benefits: ["100% natural, biocompatible therapy", "Stimulates thicker hair shaft caliber", "Effective for male and female pattern thinning"],
    duration: "60 mins",
    image: "/src/assets/images/service_hair_prp_clinic_1790971586657.jpg",
    iconName: "Activity",
    popular: true
  },
  {
    id: "hair-transplant",
    title: "Hair Transplant & Restoration",
    category: "hair",
    categoryLabel: "Hair Restoration",
    tagline: "Permanent, undetectable follicular unit extraction (FUE/DHI)",
    description: "State-of-the-art microsurgical follicular unit extraction ensuring natural hairline design, maximum graft survival, and high density with rapid recovery.",
    benefits: ["Lifelong natural hair growth", "Virtually scarless micro-punch extraction", "Custom artistic hairline alignment"],
    duration: "Half-day procedure",
    image: "/src/assets/images/service_hair_prp_clinic_1790971586657.jpg",
    iconName: "Feather"
  },
  {
    id: "hair-extensions",
    title: "Luxury Hair Extensions",
    category: "hair",
    categoryLabel: "Hair Artistry",
    tagline: "100% Remy human hair extensions for volume and seamless length",
    description: "Weightless nano-ring, tape-in, and micro-keratin extensions customized to your exact hair tone and texture for breathtaking volume and length.",
    benefits: ["Zero damage to natural hair follicles", "Seamlessly blended and styled", "Heat-styleable and washable"],
    duration: "90–120 mins",
    image: "/src/assets/images/service_hair_prp_clinic_1790971586657.jpg",
    iconName: "Scissors"
  },
  {
    id: "skin-rejuvenation",
    title: "Advanced Skin Rejuvenation",
    category: "skincare",
    categoryLabel: "Clinical Skincare",
    tagline: "Collagen induction, carbon laser peel & dermal remodeling",
    description: "Reawaken fatigued skin with customized clinical peels, microneedling RF, and carbon hollywood peels designed to reverse sun damage and texture irregularities.",
    benefits: ["Refines stubborn acne scars", "Tightens open pores and stimulates collagen", "Evens hyperpigmentation and melasma"],
    duration: "60 mins",
    image: "/src/assets/images/service_hydrafacial_glow_1790971561088.jpg",
    iconName: "Sun"
  },
  {
    id: "anti-aging-treatments",
    title: "Anti-Aging & Skin Tightening",
    category: "aesthetics",
    categoryLabel: "Facial Aesthetics",
    tagline: "Non-surgical lifting, HIFU & radiofrequency contouring",
    description: "Target deep SMAS tissue layers to lift sagging jowls, tighten neck contours, and stimulate long-term elastin without any surgical downtime.",
    benefits: ["Defines jawline and cheek contours", "Stimulates deep neocollagenesis", "Non-invasive with zero social downtime"],
    duration: "60–75 mins",
    image: "/src/assets/images/service_laser_aesthetic_1790971573644.jpg",
    iconName: "ShieldCheck"
  },
  {
    id: "eyelash-extensions",
    title: "Bespoke Eyelash Extensions",
    category: "bridal",
    categoryLabel: "Beauty Artistry",
    tagline: "Featherlight silk lash mapping tailored to your eye shape",
    description: "Handcrafted classic, hybrid, and Russian volume lashes applied with medical-grade hypoallergenic bonding for captivating, weightless eye definition.",
    benefits: ["Customized curl, length, and density", "Completely mascara-free daily glamour", "Water-resistant with 4–6 week retention"],
    duration: "75–90 mins",
    image: "/src/assets/images/hero_luxury_studio_interior_1790971547255.jpg",
    iconName: "Eye"
  },
  {
    id: "iv-wellness-drips",
    title: "IV Nutrient Wellness Drips",
    category: "wellness",
    categoryLabel: "Wellness & Glow",
    tagline: "Direct bio-available vitamin, mineral, and hydration infusions",
    description: "Relax in our private wellness lounge while nutrient-rich intravenous formulas replenish cellular vitality, elevate energy, and flush out metabolic toxins.",
    benefits: ["100% bio-availability bypassing digestion", "Instant energy revitalization & immunity surge", "Deep cellular hydration for inner luminescence"],
    duration: "45 mins",
    image: "/src/assets/images/service_wellness_lounge_1790971598476.jpg",
    iconName: "HeartPulse",
    popular: true
  },
  {
    id: "glutathione-therapy",
    title: "Master Glutathione Therapy",
    category: "wellness",
    categoryLabel: "Wellness & Glow",
    tagline: "Premier antioxidant infusion for systemic skin brightening & detox",
    description: "Medical-grade reduced glutathione paired with high-dose vitamin C to neutralize free radicals, inhibit excessive melanin synthesis, and restore a crystal-clear complexioned glow.",
    benefits: ["Systemic skin tone clarification", "Powerful hepatic liver detoxification", "Rejuvenates overall body vitality"],
    duration: "45 mins",
    image: "/src/assets/images/service_wellness_lounge_1790971598476.jpg",
    iconName: "Gem",
    popular: true
  },
  {
    id: "nail-studio",
    title: "Luxury Nail Studio",
    category: "bridal",
    categoryLabel: "Hand & Foot Spa",
    tagline: "Gel extensions, French ombre, and revitalizing spa manicure-pedicures",
    description: "Pamper hands and feet with sterile European dry manicures, long-lasting builder gel sculpting, and nourishing cuticle botanical rituals.",
    benefits: ["Non-toxic chip-resistant formulas", "Sterilized medical-grade implements", "Custom bespoke nail art & chrome finishes"],
    duration: "60–90 mins",
    image: "/src/assets/images/hero_luxury_studio_interior_1790971547255.jpg",
    iconName: "Smile"
  },
  {
    id: "bridal-makeover",
    title: "High-Definition Bridal Makeover",
    category: "bridal",
    categoryLabel: "Bridal Artistry",
    tagline: "Couture wedding day styling, airbrush makeup & skin prep",
    description: "Complete bridal radiance packages including pre-wedding skin brightening, HD airbrush makeup, couture hair sculpting, and veil draping for your unforgettable milestone.",
    benefits: ["Complete pre-bridal skin & body timeline", "Sweat-proof, 18-hour HD flawless camera wear", "Includes trial session and bespoke consultation"],
    duration: "Full bespoke session",
    image: "/src/assets/images/hero_luxury_studio_interior_1790971547255.jpg",
    iconName: "Crown",
    popular: true
  }
];

export const GALLERY_ITEMS = [
  {
    id: "g1",
    url: "/src/assets/images/hero_luxury_studio_interior_1790971547255.jpg",
    title: "Grand Reception & Consultation Lounge",
    category: "Studio Ambiance"
  },
  {
    id: "g2",
    url: "/src/assets/images/service_hydrafacial_glow_1790971561088.jpg",
    title: "Hydrafacial MD Clinical Suite",
    category: "Skincare"
  },
  {
    id: "g3",
    url: "/src/assets/images/service_laser_aesthetic_1790971573644.jpg",
    title: "Laser Aesthetics & Anti-Aging Technology",
    category: "Aesthetics"
  },
  {
    id: "g4",
    url: "/src/assets/images/service_hair_prp_clinic_1790971586657.jpg",
    title: "Trichology & PRP Restoration Suite",
    category: "Hair Care"
  },
  {
    id: "g5",
    url: "/src/assets/images/service_wellness_lounge_1790971598476.jpg",
    title: "Private IV Wellness & Glutathione Lounge",
    category: "Wellness"
  },
  {
    id: "g6",
    url: "/src/assets/images/hero_luxury_studio_interior_1790971547255.jpg",
    title: "Bespoke Bridal & Beauty Suite",
    category: "Bridal Glamour"
  }
];
