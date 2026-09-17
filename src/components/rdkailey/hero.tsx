"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowDown, Clapperboard, MapPin, Play } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { YouTubeLite } from "./youtube-lite";
import {
  SHOWREEL_ID,
  SHOWREEL_SLIDES,
  SHOWREEL_STRIP,
  STUDIO,
} from "@/lib/data";
import { cn } from "@/lib/utils";

const ease = [0.22, 1, 0.36, 1] as const;
const SLIDE_MS = 6000;

const pad = (n: number) => String(n).padStart(2, "0");

export function Hero() {
  const [slide, setSlide] = useState(0);
  const [reelOpen, setReelOpen] = useState(false);

  /* Auto-cycling showreel backdrop */
  useEffect(() => {
    const t = setInterval(
      () => setSlide((s) => (s + 1) % SHOWREEL_SLIDES.length),
      SLIDE_MS,
    );
    return () => clearInterval(t);
  }, []);

  const current = SHOWREEL_SLIDES[slide];

  return (
    <section
      id="top"
      className="relative flex min-h-[100svh] flex-col overflow-hidden"
      aria-label="RD Kailey Film — intro"
    >
      {/* Showreel backdrop — auto-advancing cinematic slideshow */}
      <div className="absolute inset-0" aria-hidden>
        <AnimatePresence>
          <motion.div
            key={slide}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="absolute inset-0"
          >
            <img
              src={current.src}
              alt=""
              className={cn(
                "h-full w-full object-cover",
                slide % 2 === 0 ? "ken-burns-in" : "ken-burns-out",
              )}
            />
          </motion.div>
        </AnimatePresence>
        {/* cinematic gradients */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/45 to-background" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(0,0,0,0.55)_100%)]" />
        {/* subtle gold tint */}
        <div className="absolute inset-0 bg-gold/[0.04] mix-blend-overlay" />
      </div>

      {/* Viewfinder HUD */}
      <div className="pointer-events-none absolute inset-0 z-10 hidden md:block" aria-hidden>
        <span className="viewfinder-corner vf-tl" />
        <span className="viewfinder-corner vf-tr" />
        <span className="viewfinder-corner vf-bl" />
        <span className="viewfinder-corner vf-br" />
        <span className="rec-dot absolute right-16 top-[70px] h-2.5 w-2.5 rounded-full bg-red-600" />
        <span className="absolute right-9 top-[66px] font-mono text-[10px] uppercase tracking-[0.3em] text-white/80">
          Rec
        </span>
        <span className="absolute bottom-24 left-16 font-mono text-[10px] uppercase tracking-[0.3em] text-white/60">
          4K · 24 FPS · Anamorphic
        </span>
        <span className="absolute bottom-24 right-16 font-mono text-[10px] uppercase tracking-[0.3em] text-white/60">
          A Cam · RD Kailey
        </span>
      </div>

      {/* Content */}
      <div className="relative z-20 mx-auto flex w-full max-w-7xl flex-1 flex-col justify-start px-5 pb-10 pt-28 md:justify-center md:px-10 md:pt-36">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.15, ease }}
          className="mb-7 flex flex-wrap items-center gap-3 font-mono text-[10px] uppercase tracking-[0.4em] text-gold md:text-[11px]"
        >
          <span className="h-px w-10 bg-gold/70" aria-hidden />
          Professional Film Production & Visual Content Company
        </motion.div>

        <h1 className="font-display text-[13.5vw] leading-[0.95] font-semibold text-cream sm:text-7xl md:text-8xl lg:text-[7.5rem]">
          <motion.span
            className="block"
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1, delay: 0.3, ease }}
          >
            We Capture
          </motion.span>
          <motion.span
            className="block"
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1, delay: 0.45, ease }}
          >
            <em className="font-medium italic text-gold">Your</em> Vision
          </motion.span>
          <motion.span
            className="mt-2 block font-mono text-[3.2vw] font-normal uppercase tracking-[0.45em] text-cream/60 sm:text-xs md:text-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2, delay: 0.75 }}
          >
            With Professional Quality
          </motion.span>
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.85, ease }}
          className="mt-8 max-w-xl text-base leading-relaxed text-cream/75 md:text-lg"
        >
          A Dubai-based film house led by a professional{" "}
          <span className="text-gold-soft">Director &amp; DOP</span> — turning
          concepts into cinematic visuals for brands, artists, businesses and
          events across{" "}
          <span className="inline-flex items-center gap-1 text-cream">
            Dubai <MapPin className="h-3.5 w-3.5 text-gold" aria-hidden /> India
            <MapPin className="h-3.5 w-3.5 text-gold" aria-hidden /> Worldwide
          </span>
          .
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1, ease }}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          {/* Showreel dialog */}
          <Dialog open={reelOpen} onOpenChange={setReelOpen}>
            <DialogTrigger asChild>
              <Button
                size="lg"
                className="group gap-3 bg-gold px-7 font-mono text-[11px] uppercase tracking-[0.25em] text-primary-foreground hover:bg-gold-soft"
              >
                <Play
                  className="h-4 w-4 fill-primary-foreground transition-transform duration-300 group-hover:scale-125"
                  aria-hidden
                />
                Watch Showreel
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-4xl border-gold/25 bg-coal p-2 md:p-3">
              <DialogHeader className="px-2 pb-2 pt-1 text-left">
                <DialogTitle className="font-display text-xl tracking-wide text-cream">
                  RD Kailey Film — Cinematography Showreel
                </DialogTitle>
                <DialogDescription className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
                  Curated reel · YouTube
                </DialogDescription>
              </DialogHeader>
              <div className="relative aspect-video w-full overflow-hidden bg-black">
                <YouTubeLite
                  id={SHOWREEL_ID}
                  title="RD Kailey Film — Cinematography Showreel"
                />
              </div>
            </DialogContent>
          </Dialog>

          <Button
            asChild
            size="lg"
            variant="outline"
            className="gap-3 border-cream/30 bg-transparent px-7 font-mono text-[11px] uppercase tracking-[0.25em] text-cream hover:border-gold hover:bg-gold/10 hover:text-gold"
          >
            <a href="#contact">
              <Clapperboard className="h-4 w-4" aria-hidden />
              Book a Shoot
            </a>
          </Button>
        </motion.div>
      </div>

      {/* Showreel filmstrip — moving frames, click to play the reel */}
      <div className="relative z-20 shrink-0 pb-5">
        {/* slide indicator row */}
        <div className="mx-auto mb-3 flex w-full max-w-7xl items-center justify-end gap-4 px-5 sm:justify-between md:px-10">
          <span className="hidden items-center gap-2.5 font-mono text-[9px] uppercase tracking-[0.4em] text-cream/60 sm:flex md:text-[10px]">
            <span className="h-1.5 w-1.5 rounded-full bg-gold" aria-hidden />
            Showreel — Frames
          </span>
          <span className="flex items-center gap-3 font-mono text-[9px] uppercase tracking-[0.3em] text-gold md:text-[10px]">
            {/* progress dashes */}
            <span className="hidden items-center gap-1.5 sm:flex" aria-hidden>
              {SHOWREEL_SLIDES.map((s, i) => (
                <span
                  key={s.label}
                  className={cn(
                    "h-px transition-all duration-700",
                    i === slide
                      ? "w-6 bg-gold"
                      : "w-3 bg-cream/25",
                  )}
                />
              ))}
            </span>
            <span className="relative inline-block h-[1.1em] overflow-hidden align-bottom">
              <AnimatePresence mode="wait">
                <motion.span
                  key={slide}
                  initial={{ y: 12, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -12, opacity: 0 }}
                  transition={{ duration: 0.45, ease }}
                  className="block whitespace-nowrap"
                >
                  Reel {pad(slide + 1)}/{pad(SHOWREEL_SLIDES.length)} —{" "}
                  {current.label}
                </motion.span>
              </AnimatePresence>
            </span>
          </span>
        </div>

        <Dialog open={reelOpen} onOpenChange={setReelOpen}>
          <DialogTrigger asChild>
            <button
              type="button"
              aria-label="Play our showreel — opening frames"
              className="showreel-strip group relative block w-full cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-gold"
            >
              {/* edge fades (axis-aligned over the tilted strip) */}
              <span
                className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-background to-transparent md:w-32"
                aria-hidden
              />
              <span
                className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-background to-transparent md:w-32"
                aria-hidden
              />

              <div className="strip-tilt border-y border-gold/25 bg-coal py-1.5">
                <div className="strip-track">
                  {[...SHOWREEL_STRIP, ...SHOWREEL_STRIP].map((item, i) => (
                    <figure
                      key={`${item.label}-${i}`}
                      aria-hidden={i >= SHOWREEL_STRIP.length}
                      className="w-[128px] shrink-0 border-x border-gold/15 bg-coal px-1 py-1 md:w-[224px]"
                    >
                      <span className="strip-perf block" />
                      <img
                        src={item.src}
                        alt=""
                        loading="eager"
                        className="my-1 h-14 w-full object-cover saturate-[0.55] transition-[filter,transform] duration-700 group-hover:saturate-125 md:h-24"
                      />
                      <span className="strip-perf block" />
                    </figure>
                  ))}
                </div>
              </div>

              {/* floating play hint */}
              <span
                className="pointer-events-none absolute left-1/2 top-1/2 z-20 flex -translate-x-1/2 -translate-y-1/2 items-center gap-2.5 border border-gold/50 bg-black/75 px-5 py-2.5 font-mono text-[10px] uppercase tracking-[0.3em] text-gold opacity-0 backdrop-blur-sm transition-all duration-500 group-hover:opacity-100 group-focus-visible:opacity-100"
                aria-hidden
              >
                <Play className="h-3.5 w-3.5 fill-current" />
                Watch Showreel
              </span>
            </button>
          </DialogTrigger>

          <DialogContent className="max-w-4xl border-gold/25 bg-coal p-2 md:p-3">
            <DialogHeader className="px-2 pb-2 pt-1 text-left">
              <DialogTitle className="font-display text-xl tracking-wide text-cream">
                RD Kailey Film — Cinematography Showreel
              </DialogTitle>
              <DialogDescription className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
                Curated reel · YouTube
              </DialogDescription>
            </DialogHeader>
            <div className="relative aspect-video w-full overflow-hidden bg-black">
              <YouTubeLite
                id={SHOWREEL_ID}
                title="RD Kailey Film — Cinematography Showreel"
              />
            </div>
          </DialogContent>
        </Dialog>
      </div>

      {/* Bottom bar — locations + scroll hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, delay: 1.25 }}
        className="relative z-20 mx-auto flex w-full max-w-7xl items-end justify-between px-5 pb-6 md:px-10"
      >
        <p className="font-mono text-[10px] uppercase tracking-[0.4em] text-cream/50">
          {STUDIO.locations.join(" — ")}
        </p>
        <a
          href="#studio"
          className="group flex flex-col items-center gap-2"
          aria-label="Scroll to studio section"
        >
          <span className="font-mono text-[9px] uppercase tracking-[0.45em] text-cream/50 transition-colors group-hover:text-gold">
            Scroll
          </span>
          <span className="scroll-line relative block h-10 w-px overflow-hidden bg-white/10" />
          <ArrowDown
            className="h-3.5 w-3.5 text-gold/70 transition-transform duration-500 group-hover:translate-y-1"
            aria-hidden
          />
        </a>
        <p className="hidden font-mono text-[10px] uppercase tracking-[0.4em] text-cream/50 md:block">
          Est. for the frame
        </p>
      </motion.div>

      {/* letterbox strip */}
      <div className="absolute inset-x-0 top-0 z-[5] h-1.5 bg-black/90" aria-hidden />
    </section>
  );
}
