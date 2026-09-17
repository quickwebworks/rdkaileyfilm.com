"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  Clapperboard,
  Lightbulb,
  PackageCheck,
  Palette,
  Scissors,
} from "lucide-react";
import { Reveal } from "./reveal";
import { APPROACH_STEPS, VISION_IMAGE } from "@/lib/data";

const STEP_ICONS = [Lightbulb, Clapperboard, Scissors, Palette, PackageCheck];

export function Vision() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], ["-12%", "12%"]);

  return (
    <section
      id="vision"
      ref={ref}
      className="relative scroll-mt-24 overflow-hidden border-t border-gold/10"
      aria-label="Our vision and approach"
    >
      {/* Parallax backdrop */}
      <div className="absolute inset-0" aria-hidden>
        <motion.img
          src={VISION_IMAGE}
          alt=""
          style={{ y: bgY }}
          className="h-[124%] w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/78" />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background" />
      </div>

      <div className="relative mx-auto max-w-7xl px-5 py-28 md:px-10 md:py-40">
        <Reveal className="mx-auto max-w-4xl text-center">
          <p className="font-mono text-[11px] uppercase tracking-[0.4em] text-gold">
            04 / Our Vision
          </p>
          <blockquote className="mt-8 font-display text-4xl font-semibold leading-[1.15] text-cream md:text-6xl">
            “We Capture Your Vision with{" "}
            <em className="italic text-gold">Professional Quality</em>.”
          </blockquote>
          <p className="mx-auto mt-8 max-w-2xl leading-relaxed text-cream/70 md:text-lg">
            Whether you are an artist, brand, company, event organizer, real
            estate business, model or filmmaker — RD Kailey Film transforms
            your vision into powerful visual content.
          </p>
        </Reveal>

        {/* Approach timeline */}
        <div className="mt-20 md:mt-28">
          <Reveal>
            <p className="text-center font-mono text-[11px] uppercase tracking-[0.4em] text-muted-foreground">
              Our Approach — Concept to Delivery
            </p>
          </Reveal>

          <ol className="mt-10 grid gap-px overflow-hidden border border-gold/15 bg-gold/10 sm:grid-cols-2 lg:grid-cols-5">
            {APPROACH_STEPS.map((step, i) => {
              const Icon = STEP_ICONS[i];
              return (
                <Reveal key={step.step} delay={i * 0.1} className="bg-coal/95">
                  <li className="group relative h-full px-6 py-8 transition-colors duration-500 hover:bg-card">
                    <span
                      className="pointer-events-none absolute right-4 top-4 font-display text-5xl font-semibold italic text-cream/[0.05] transition-colors duration-500 group-hover:text-gold/15"
                      aria-hidden
                    >
                      {step.step}
                    </span>
                    <Icon
                      className="h-6 w-6 text-gold transition-transform duration-500 group-hover:-translate-y-1"
                      aria-hidden
                    />
                    <h3 className="mt-5 font-display text-lg font-medium tracking-wide text-cream">
                      {step.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {step.text}
                    </p>
                    <span
                      className="mt-5 block h-px w-8 bg-gold/40 transition-all duration-500 group-hover:w-full group-hover:bg-gold"
                      aria-hidden
                    />
                  </li>
                </Reveal>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
}
