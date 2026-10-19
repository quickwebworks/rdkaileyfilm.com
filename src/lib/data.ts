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
    videoId: "x_lVucglGfc",
  },
  {
    id: "commercial",
    index: "02",
    title: "Commercial Advertisement Shoots",
    blurb:
      "High-impact ad films crafted to make brands unforgettable — on TV, YouTube and every screen in between.",
    videoId: "G8iF3La049k",
  },
  {
    id: "corporate",
    index: "03",
    title: "Corporate Films & Brand Videos",
    blurb:
      "Polished corporate storytelling that communicates your company's vision with professional production quality.",
    videoId: "-TfiJuyrn1M",
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
    videoId: "7JGaPCtcHN8",
  },
  {
    id: "web-series",
    index: "06",
    title: "Web Series & Short Film Production",
    blurb:
      "Narrative production with a director's eye — from scripting and casting to the final cut.",
    videoId: "OQTO_bvqbXA",
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
    videoId: "wXgGfG8V-GY",
  },
];

export type Frame = {
  src: string;
  title: string;
  category: string;
  location: string;
  tall?: boolean;
};

/**
 * All imagery below was sourced from Pexels & Unsplash and is self-hosted
 * under /public/images so it always loads — no external CDN dependency.
 */

/** Selected frames — Pexels & Unsplash photography (visually verified) */
export const FRAMES: Frame[] = [
  {
    src: "/images/frame-music.jpg",
    title: "Sound & Vision",
    category: "Music Video",
    location: "Dubai",
    tall: true,
  },
  {
    src: "/images/frame-bts.jpg",
    title: "Monitor Check",
    category: "Behind The Scenes",
    location: "UAE",
  },
  {
    src: "/images/frame-wedding.jpg",
    title: "The Vows",
    category: "Wedding Film",
    location: "India",
    tall: true,
  },
  {
    src: "/images/frame-realestate.jpg",
    title: "Skyline Living",
    category: "Real Estate",
    location: "Dubai Marina",
  },
  {
    src: "/images/frame-fashion.jpg",
    title: "Editorial No. 7",
    category: "Fashion & Portfolio",
    location: "Studio — Dubai",
    tall: true,
  },
  {
    src: "/images/frame-product.jpg",
    title: "Timepiece",
    category: "Product Film",
    location: "Macro — Studio",
  },
  {
    src: "/images/frame-corporate.jpg",
    title: "The Briefing",
    category: "Corporate Film",
    location: "Worldwide",
  },
  {
    src: "/images/frame-grading.jpg",
    title: "The Cut",
    category: "Editing & Grading",
    location: "Post Suite",
  },
  {
    src: "/images/frame-desert.jpg",
    title: "Desert Caravan",
    category: "Location Scout",
    location: "Dubai Desert",
  },
];

/** About collage images */
export const ABOUT_IMAGES = {
  main: "/images/about-main.jpg",
  secondary: "/images/about-secondary.jpg",
};

/** Hero backdrop — clapperboard on a desert shoot */
export const HERO_IMAGE = "/images/hero-clapperboard.jpg";

/** Vision parallax backdrop — vintage projector beam */
export const VISION_IMAGE = "/images/vision-projector.jpg";

/**
 * Hero showreel slideshow — auto-cycling cinematic frames in the top area.
 * Each slide drifts with its own Ken Burns motion and crossfades to the next.
 */
export type ShowreelSlide = { src: string; label: string; note: string };

export const SHOWREEL_SLIDES: ShowreelSlide[] = [
  {
    src: "/images/hero-clapperboard.jpg",
    label: "Desert Slate",
    note: "A Cam · Location Scout",
  },
  {
    src: "/images/about-main.jpg",
    label: "On Set",
    note: "Director & DOP",
  },
  {
    src: "/images/frame-music.jpg",
    label: "Sound & Vision",
    note: "Music Video · Dubai",
  },
  {
    src: "/images/frame-fashion.jpg",
    label: "Editorial No. 7",
    note: "Fashion · Studio",
  },
  {
    src: "/images/frame-realestate.jpg",
    label: "Skyline Living",
    note: "Real Estate · Marina",
  },
  {
    src: "/images/vision-projector.jpg",
    label: "The Projection Room",
    note: "Post · Final Cut",
  },
];

/** Hero filmstrip — continuously scrolling reel of stills (click = showreel) */
export const SHOWREEL_STRIP: { src: string; label: string }[] = [
  { src: "/images/frame-music.jpg", label: "Sound & Vision" },
  { src: "/images/about-main.jpg", label: "On Set" },
  { src: "/images/frame-wedding.jpg", label: "The Vows" },
  { src: "/images/frame-realestate.jpg", label: "Skyline Living" },
  { src: "/images/frame-fashion.jpg", label: "Editorial No. 7" },
  { src: "/images/frame-bts.jpg", label: "Monitor Check" },
  { src: "/images/frame-product.jpg", label: "Timepiece" },
  { src: "/images/frame-corporate.jpg", label: "The Briefing" },
  { src: "/images/frame-grading.jpg", label: "The Cut" },
  { src: "/images/frame-desert.jpg", label: "Desert Caravan" },
  { src: "/images/about-secondary.jpg", label: "Slate & Roll" },
  { src: "/images/hero-clapperboard.jpg", label: "Desert Slate" },
];

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
