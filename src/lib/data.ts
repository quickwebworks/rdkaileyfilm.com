/**
 * RD Kailey Film — central content data
 * Imagery: Pexels & Unsplash (free stock). Service reels: YouTube.
 */

export const STUDIO = {
  name: "RD Kailey Film",
  tagline: "We Capture Your Vision with Professional Quality.",
  role: "Professional Film Production & Visual Content Company",
  locations: ["Dubai", "India", "Worldwide"],
  instagram: "https://www.instagram.com/rd_kailey_film",
  instagramHandle: "@rd_kailey_film",
  phones: [
    { label: "+971 545 586 920", tel: "+971545586920", wa: "971545586920" },
    { label: "+971 563 223 472", tel: "+971563223472", wa: "971563223472" },
  ],
};

export const SHOWREEL_ID = "uskzI5VCjz4";

export type Service = {
  id: string;
  index: string;
  title: string;
  blurb: string;
  videoId: string;
};

export const SERVICES: Service[] = [
  {
    id: "music-video",
    index: "01",
    title: "Music Video Production",
    blurb:
      "Cinematic music videos that give your sound a visual identity — from treatment and concept to the final grade.",
    videoId: "vMoa0gaFxUQ",
  },
  {
    id: "commercial",
    index: "02",
    title: "Commercial Advertisement Shoots",
    blurb:
      "High-impact ad films crafted to make brands unforgettable — on TV, YouTube and every screen in between.",
    videoId: "EOvo_nI5AeI",
  },
  {
    id: "corporate",
    index: "03",
    title: "Corporate Films & Brand Videos",
    blurb:
      "Polished corporate storytelling that communicates your company's vision with professional production quality.",
    videoId: "p77noI5by88",
  },
  {
    id: "event-yacht",
    index: "04",
    title: "Event & Yacht Party Coverage",
    blurb:
      "Dynamic multi-camera coverage of events and yacht parties — capturing the energy of the night as it happens.",
    videoId: "-VsAITw0f18",
  },
  {
    id: "model-fashion",
    index: "05",
    title: "Model Portfolio & Fashion Shoots",
    blurb:
      "Editorial-grade portfolios and fashion films with professional lighting, styling and direction.",
    videoId: "yjF_fb4n_ps",
  },
  {
    id: "web-series",
    index: "06",
    title: "Web Series & Short Film Production",
    blurb:
      "Narrative production with a director's eye — from scripting and casting to the final cut.",
    videoId: "jOhKHAvxHwA",
  },
  {
    id: "wedding",
    index: "07",
    title: "Pre-Wedding & Wedding Films",
    blurb:
      "Timeless wedding cinema that preserves your story with romance, elegance and cinematic craft.",
    videoId: "2HJ3xr53VyE",
  },
  {
    id: "real-estate",
    index: "08",
    title: "Real Estate Photography & Reels",
    blurb:
      "Luxury property visuals that sell spaces — cinematic walkthroughs, listings and lifestyle reels.",
    videoId: "XRdjMFcY8Gc",
  },
  {
    id: "product",
    index: "09",
    title: "Product Photography & Videos",
    blurb:
      "Precision product visuals with studio lighting and macro detail that make every surface shine.",
    videoId: "Exn_wRsgujY",
  },
  {
    id: "social-reels",
    index: "10",
    title: "Instagram & Social Media Reels",
    blurb:
      "Thumb-stopping vertical content engineered for engagement, reach and repeat views.",
    videoId: "9lQsYBvo4lY",
  },
  {
    id: "photo-video",
    index: "11",
    title: "Professional Photography & Videography",
    blurb:
      "Full-service photo and video production for any brief, any scale — anywhere in the world.",
    videoId: "FRZ9ez_8v6M",
  },
  {
    id: "editing-grading",
    index: "12",
    title: "Video Editing & Color Grading",
    blurb:
      "Post-production artistry — precise edits, sound design and signature cinematic color grades.",
    videoId: "Zq_MU02oYo8",
  },
];

export type Frame = {
  src: string;
  title: string;
  category: string;
  location: string;
  tall?: boolean;
};

/** Selected frames — Pexels & Unsplash photography (visually verified) */
export const FRAMES: Frame[] = [
  {
    src: "https://images.pexels.com/photos/3756766/pexels-photo-3756766.jpeg?auto=compress&cs=tinysrgb&w=1260",
    title: "Sound & Vision",
    category: "Music Video",
    location: "Dubai",
    tall: true,
  },
  {
    src: "https://images.pexels.com/photos/2510428/pexels-photo-2510428.jpeg?auto=compress&cs=tinysrgb&w=1260",
    title: "Monitor Check",
    category: "Behind The Scenes",
    location: "UAE",
  },
  {
    src: "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1600&auto=format&fit=crop",
    title: "The Vows",
    category: "Wedding Film",
    location: "India",
    tall: true,
  },
  {
    src: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=1600&auto=format&fit=crop",
    title: "Skyline Living",
    category: "Real Estate",
    location: "Dubai Marina",
  },
  {
    src: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=1600&auto=format&fit=crop",
    title: "Editorial No. 7",
    category: "Fashion & Portfolio",
    location: "Studio — Dubai",
    tall: true,
  },
  {
    src: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1600&auto=format&fit=crop",
    title: "Timepiece",
    category: "Product Film",
    location: "Macro — Studio",
  },
  {
    src: "https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=1260",
    title: "The Briefing",
    category: "Corporate Film",
    location: "Worldwide",
  },
  {
    src: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?q=80&w=1600&auto=format&fit=crop",
    title: "The Cut",
    category: "Editing & Grading",
    location: "Post Suite",
  },
  {
    src: "https://images.pexels.com/photos/2749265/pexels-photo-2749265.jpeg?auto=compress&cs=tinysrgb&w=1260",
    title: "Desert Caravan",
    category: "Location Scout",
    location: "Dubai Desert",
  },
];

/** About collage images */
export const ABOUT_IMAGES = {
  main: "https://images.pexels.com/photos/3379933/pexels-photo-3379933.jpeg?auto=compress&cs=tinysrgb&w=1260",
  secondary:
    "https://images.pexels.com/photos/1117132/pexels-photo-1117132.jpeg?auto=compress&cs=tinysrgb&w=1260",
};

/** Hero backdrop — clapperboard on a desert shoot */
export const HERO_IMAGE =
  "https://images.unsplash.com/photo-1485846234645-a62644f84728?q=80&w=2400&auto=format&fit=crop";

/** Vision parallax backdrop — vintage projector beam */
export const VISION_IMAGE =
  "https://images.unsplash.com/photo-1478720568477-152d9b164e26?q=80&w=2000&auto=format&fit=crop";

export const APPROACH_STEPS = [
  {
    step: "01",
    title: "Concept & Planning",
    text: "Moodboards, treatments, storyboards and shot lists tailored to your vision.",
  },
  {
    step: "02",
    title: "Production & Shooting",
    text: "Director & DOP-led shoots with professional cinema cameras and lighting.",
  },
  {
    step: "03",
    title: "Editing",
    text: "Rhythmic, story-driven cuts shaped by sound design and pacing.",
  },
  {
    step: "04",
    title: "Color Grading",
    text: "Signature cinematic grades that give every frame its emotional tone.",
  },
  {
    step: "05",
    title: "Final Delivery",
    text: "Mastered exports optimized for cinema, broadcast, web and social.",
  },
];
