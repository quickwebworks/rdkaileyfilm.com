"use client";

import { motion } from "framer-motion";
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
import { HERO_IMAGE, SHOWREEL_ID, STUDIO } from "@/lib/data";

const ease = [0.22, 1, 0.36, 1] as const;

export function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-[100svh] flex-col overflow-hidden"
      aria-label="RD Kailey Film — intro"
    >
      {/* Backdrop */}
      <div className="absolute inset-0" aria-hidden>
        <img
          src={HERO_IMAGE}
          alt=""
          className="ken-burns h-full w-full object-cover"
        />
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
      <div className="relative z-20 mx-auto flex w-full max-w-7xl flex-1 flex-col justify-center px-5 pb-28 pt-36 md:px-10 md:pt-40">
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
          <Dialog>
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

      {/* Bottom bar — locations + scroll hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, delay: 1.25 }}
        className="relative z-20 mx-auto flex w-full max-w-7xl items-end justify-between px-5 pb-8 md:px-10"
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
          <span className="scroll-line relative block h-12 w-px overflow-hidden bg-white/10" />
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
