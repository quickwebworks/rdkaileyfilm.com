import { Sparkle } from "lucide-react";

const ITEMS = [
  "Music Videos",
  "Commercials",
  "Corporate Films",
  "Event & Yacht Coverage",
  "Fashion & Portfolios",
  "Web Series & Short Films",
  "Wedding Cinema",
  "Real Estate Reels",
  "Product Shoots",
  "Color Grading",
];

export function Marquee() {
  const row = [...ITEMS, ...ITEMS];
  return (
    <div
      className="relative overflow-hidden border-y border-gold/15 bg-coal-light py-5"
      aria-hidden
    >
      <div className="marquee-track">
        {row.map((item, i) => (
          <span
            key={`${item}-${i}`}
            className="flex shrink-0 items-center gap-8 pr-8"
          >
            <span
              className={
                i % 2 === 0
                  ? "font-display text-2xl italic text-cream/85 md:text-3xl"
                  : "font-mono text-sm uppercase tracking-[0.35em] text-gold/80 md:text-base"
              }
            >
              {item}
            </span>
            <Sparkle className="h-4 w-4 shrink-0 text-gold/50" aria-hidden />
          </span>
        ))}
      </div>
      {/* edge fades */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-background to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-background to-transparent" />
    </div>
  );
}
