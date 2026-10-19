"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Award, Camera, Film, MapPin } from "lucide-react";
import { Reveal, SectionEyebrow } from "./reveal";
import { ABOUT_IMAGES } from "@/lib/data";

const STATS = [
  { value: "12+", label: "Production Verticals" },
  { value: "03", label: "Global Bases — DXB · IND · WW" },
  { value: "100%", label: "Director & DOP Led" },
  { value: "01", label: "Vision — Yours" },
];

const CRAFT = [
  { icon: Film, label: "Cinematic Storytelling" },
  { icon: Camera, label: "Pro Cinema Cameras" },
  { icon: Award, label: "In-House Post & Grade" },
];

export function About() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const yMain = useTransform(scrollYProgress, [0, 1], [40, -60]);
  const ySecondary = useTransform(scrollYProgress, [0, 1], [-30, 50]);

  return (
    <section
      id="studio"
      ref={ref}
      className="relative scroll-mt-24 overflow-hidden py-24 md:py-32"
      aria-label="About the studio"
    >
      {/* oversized ghost word */}
      <span
        className="pointer-events-none absolute -right-10 top-10 select-none font-display text-[22vw] font-semibold italic leading-none text-cream/[0.025]"
        aria-hidden
      >
        Studio
      </span>

      <div className="mx-auto grid max-w-7xl gap-16 px-5 md:px-10 lg:grid-cols-2 lg:gap-12">
        {/* Text column */}
        <div className="flex flex-col justify-center">
          <Reveal>
            <SectionEyebrow index="01" label="The Studio" />
          </Reveal>

          <Reveal delay={0.1}>
            <h2 className="mt-6 font-display text-4xl leading-[1.08] font-semibold text-cream md:text-5xl lg:text-[3.4rem]">
              A film house built on{" "}
              <em className="italic text-gold">cinematic</em> storytelling
            </h2>
          </Reveal>

          <Reveal delay={0.18}>
            <p className="mt-7 max-w-xl leading-relaxed text-muted-foreground md:text-lg">
              RD Kailey Film is a professional film production and visual
              content company based in <span className="text-cream">Dubai</span>,
              working across the UAE, India and international locations.
            </p>
            <p className="mt-4 max-w-xl leading-relaxed text-muted-foreground md:text-lg">
              Led by a professional{" "}
              <span className="text-cream">Director &amp; Director of Photography</span>,
              we specialize in creating high-quality cinematic visuals for
              brands, artists, businesses, events and creative projects — with
              experience spanning music videos, commercials, corporate films,
              event coverage, model portfolios, web series, short films, real
              estate content, product shoots and social reels.
            </p>
          </Reveal>

          <Reveal delay={0.26}>
            <div className="mt-8 flex flex-wrap gap-3">
              {CRAFT.map(({ icon: Icon, label }) => (
                <span
                  key={label}
                  className="flex items-center gap-2 border border-gold/25 bg-gold/[0.06] px-4 py-2 font-mono text-[10px] uppercase tracking-[0.2em] text-gold-soft"
                >
                  <Icon className="h-3.5 w-3.5" aria-hidden />
                  {label}
                </span>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.32}>
            <p className="mt-10 flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.35em] text-muted-foreground">
              <MapPin className="h-4 w-4 text-gold" aria-hidden />
              Dubai — India — Worldwide
            </p>
          </Reveal>
        </div>

        {/* Image collage */}
        <div className="relative min-h-[480px] md:min-h-[560px]">
          <motion.figure
            style={{ y: yMain }}
            className="absolute left-0 top-0 w-[72%] overflow-hidden border border-gold/20"
          >
            <img
              src={ABOUT_IMAGES.main}
              alt="Director of photography operating a cinema camera on a dark set"
              loading="lazy"
              className="aspect-[4/5] w-full object-cover"
            />
            <figcaption className="absolute bottom-0 left-0 bg-black/60 px-4 py-2 font-mono text-[9px] uppercase tracking-[0.3em] text-cream/85 backdrop-blur-sm">
              Director &amp; DOP
            </figcaption>
          </motion.figure>

          <motion.figure
            style={{ y: ySecondary }}
            className="absolute bottom-0 right-0 w-[52%] overflow-hidden border border-gold/20 shadow-[0_30px_80px_-20px_rgba(0,0,0,0.8)]"
          >
            <img
              src={ABOUT_IMAGES.secondary}
              alt="Clapperboard in front of the camera on a film set"
              loading="lazy"
              className="aspect-[4/3] w-full object-cover"
            />
            <figcaption className="absolute bottom-0 left-0 bg-black/60 px-4 py-2 font-mono text-[9px] uppercase tracking-[0.3em] text-cream/85 backdrop-blur-sm">
              Slate &amp; Roll
            </figcaption>
          </motion.figure>

          {/* stats chip */}
          <motion.div
            style={{ y: yMain }}
            className="absolute -left-1 top-[46%] hidden border border-gold/30 bg-coal/90 px-5 py-4 backdrop-blur-md md:block"
          >
            <p className="font-display text-3xl font-semibold text-gold">
              Director
            </p>
            <p className="mt-1 font-mono text-[9px] uppercase tracking-[0.3em] text-cream/60">
              &amp; DOP led craft
            </p>
          </motion.div>
        </div>
      </div>

      {/* Stats row */}
      <div className="mx-auto mt-20 max-w-7xl px-5 md:px-10">
        <div className="grid grid-cols-2 gap-px overflow-hidden border border-gold/15 bg-gold/10 lg:grid-cols-4">
          {STATS.map((stat, i) => (
            <Reveal key={stat.label} delay={i * 0.08} className="bg-coal-light">
              <div className="group h-full px-6 py-8 transition-colors duration-500 hover:bg-card md:px-8">
                <p className="font-display text-4xl font-semibold text-gold md:text-5xl">
                  {stat.value}
                </p>
                <p className="mt-2 font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground transition-colors group-hover:text-cream/80">
                  {stat.label}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
