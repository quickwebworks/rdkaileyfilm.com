"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, MonitorPlay } from "lucide-react";
import { Reveal, SectionEyebrow } from "./reveal";
import { YouTubeLite } from "./youtube-lite";
import { SERVICES } from "@/lib/data";
import { cn } from "@/lib/utils";

export function Services() {
  const [activeId, setActiveId] = useState(SERVICES[0].id);
  const active = SERVICES.find((s) => s.id === activeId) ?? SERVICES[0];

  return (
    <section
      id="services"
      className="relative scroll-mt-24 border-t border-gold/10 bg-coal-light py-24 md:py-32"
      aria-label="Our services"
    >
      <div className="mx-auto max-w-7xl px-5 md:px-10">
        {/* Heading */}
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <Reveal>
              <SectionEyebrow index="02" label="What We Do" />
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="mt-6 font-display text-4xl font-semibold leading-[1.05] text-cream md:text-6xl">
                Our <em className="italic text-gold">Services</em>
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.18}>
            <p className="max-w-md leading-relaxed text-muted-foreground">
              Every discipline below plays a real intro — pick a service and
              watch the craft in motion, straight from the reel room.
            </p>
          </Reveal>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.35fr)] lg:gap-14">
          {/* ---- Service list ---- */}
          <Reveal delay={0.1} className="order-2 lg:order-1">
            <div
              className="max-h-[560px] space-y-1 overflow-y-auto pr-2 [scrollbar-width:thin] lg:max-h-[640px]"
              role="tablist"
              aria-label="Select a service"
            >
              {SERVICES.map((service) => {
                const isActive = service.id === activeId;
                return (
                  <button
                    key={service.id}
                    role="tab"
                    aria-selected={isActive}
                    onClick={() => setActiveId(service.id)}
                    className={cn(
                      "group flex w-full items-center gap-4 border-l-2 px-4 py-3.5 text-left transition-all duration-300",
                      isActive
                        ? "border-gold bg-gold/[0.08]"
                        : "border-transparent hover:border-gold/40 hover:bg-white/[0.03]"
                    )}
                  >
                    <span
                      className={cn(
                        "font-mono text-[10px] tracking-[0.2em]",
                        isActive ? "text-gold" : "text-muted-foreground/60"
                      )}
                    >
                      {service.index}
                    </span>
                    <span
                      className={cn(
                        "flex-1 font-display text-lg tracking-wide transition-colors md:text-xl",
                        isActive
                          ? "text-gold"
                          : "text-cream/75 group-hover:text-cream"
                      )}
                    >
                      {service.title}
                    </span>
                    <ArrowUpRight
                      className={cn(
                        "h-4 w-4 shrink-0 transition-all duration-300",
                        isActive
                          ? "translate-x-0 text-gold opacity-100"
                          : "-translate-x-1 text-muted-foreground opacity-0 group-hover:translate-x-0 group-hover:opacity-60"
                      )}
                      aria-hidden
                    />
                  </button>
                );
              })}
            </div>
          </Reveal>

          {/* ---- Video panel ---- */}
          <Reveal delay={0.15} className="order-1 lg:order-2">
            <div className="lg:sticky lg:top-28">
              {/* Mobile chips */}
              <div className="mb-5 flex gap-2 overflow-x-auto pb-2 [scrollbar-width:none] lg:hidden [&::-webkit-scrollbar]:hidden">
                {SERVICES.map((s) => (
                  <button
                    key={s.id}
                    onClick={() => setActiveId(s.id)}
                    className={cn(
                      "shrink-0 whitespace-nowrap border px-3.5 py-2 font-mono text-[10px] uppercase tracking-[0.15em] transition-colors",
                      s.id === activeId
                        ? "border-gold bg-gold/15 text-gold"
                        : "border-gold/20 text-muted-foreground"
                    )}
                  >
                    {s.index} · {s.title}
                  </button>
                ))}
              </div>

              <div className="relative border border-gold/25 bg-black shadow-[0_40px_90px_-30px_rgba(0,0,0,0.9)]">
                {/* top slate bar */}
                <div className="flex items-center justify-between border-b border-gold/20 bg-coal px-4 py-2.5">
                  <span className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.3em] text-gold">
                    <MonitorPlay className="h-3.5 w-3.5" aria-hidden />
                    Scene {active.index}
                  </span>
                  <span className="hidden font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground sm:block">
                    RD Kailey Film · Reel
                  </span>
                </div>

                <div className="relative aspect-video w-full overflow-hidden bg-black">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={active.id}
                      initial={{ opacity: 0, scale: 1.02 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                      className="absolute inset-0"
                    >
                      <YouTubeLite
                        id={active.videoId}
                        title={`${active.title} — intro reel`}
                      />
                    </motion.div>
                  </AnimatePresence>
                </div>

                {/* caption */}
                <div className="border-t border-gold/20 bg-coal px-5 py-4">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={active.id}
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -8 }}
                      transition={{ duration: 0.35 }}
                    >
                      <h3 className="font-display text-xl text-cream md:text-2xl">
                        {active.title}
                      </h3>
                      <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                        {active.blurb}
                      </p>
                    </motion.div>
                  </AnimatePresence>
                </div>
              </div>

              <p className="mt-4 text-center font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
                Intros stream from YouTube — tap the frame to roll
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
