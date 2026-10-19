"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Expand, X } from "lucide-react";
import { Reveal, SectionEyebrow } from "./reveal";
import { FRAMES, type Frame } from "@/lib/data";
import { cn } from "@/lib/utils";

export function Gallery() {
  const [selected, setSelected] = useState<Frame | null>(null);

  return (
    <section
      id="work"
      className="relative scroll-mt-24 border-t border-gold/10 py-24 md:py-32"
      aria-label="Selected work"
    >
      <div className="mx-auto max-w-7xl px-5 md:px-10">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <Reveal>
              <SectionEyebrow index="03" label="Selected Frames" />
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="mt-6 font-display text-4xl font-semibold leading-[1.05] text-cream md:text-6xl">
                Frames from <em className="italic text-gold">the field</em>
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.18}>
            <p className="max-w-md leading-relaxed text-muted-foreground">
              Stills captured across shoots and disciplines — music videos,
              weddings, fashion, real estate and product work. Imagery courtesy
              of Pexels &amp; Unsplash.
            </p>
          </Reveal>
        </div>

        {/* Masonry */}
        <div className="mt-14 columns-2 gap-4 [column-fill:_balance] md:columns-3 md:gap-5">
          {FRAMES.map((frame, i) => (
            <Reveal key={frame.src} delay={(i % 3) * 0.08} className="mb-4 md:mb-5">
              <button
                type="button"
                onClick={() => setSelected(frame)}
                className="group relative block w-full overflow-hidden border border-gold/15 bg-card text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-gold"
                aria-label={`View ${frame.title} — ${frame.category}`}
              >
                <img
                  src={frame.src}
                  alt={`${frame.title} — ${frame.category}, ${frame.location}`}
                  loading="lazy"
                  className={cn(
                    "w-full object-cover transition-all duration-[1.1s] ease-out group-hover:scale-[1.06]",
                    frame.tall ? "aspect-[3/4]" : "aspect-[4/3]"
                  )}
                />
                <span className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                <span className="absolute inset-x-0 bottom-0 translate-y-3 p-4 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                  <span className="block font-display text-lg italic leading-tight text-cream md:text-xl">
                    {frame.title}
                  </span>
                  <span className="mt-1 block font-mono text-[9px] uppercase tracking-[0.3em] text-gold">
                    {frame.category} · {frame.location}
                  </span>
                </span>
                <span className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center border border-gold/40 bg-black/50 opacity-0 backdrop-blur-sm transition-opacity duration-500 group-hover:opacity-100">
                  <Expand className="h-3.5 w-3.5 text-gold" aria-hidden />
                </span>
              </button>
            </Reveal>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[80] flex items-center justify-center bg-black/92 p-5 backdrop-blur-md"
            role="dialog"
            aria-modal="true"
            aria-label={`${selected.title} — enlarged frame`}
            onClick={() => setSelected(null)}
          >
            <motion.figure
              initial={{ scale: 0.92, y: 24 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.94, y: 12 }}
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              className="relative max-h-[86vh] w-full max-w-4xl"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selected.src}
                alt={`${selected.title} — ${selected.category}`}
                className="max-h-[74vh] w-full border border-gold/25 object-contain"
              />
              <figcaption className="mt-4 flex items-baseline justify-between">
                <span className="font-display text-xl italic text-cream md:text-2xl">
                  {selected.title}
                </span>
                <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-gold">
                  {selected.category} · {selected.location}
                </span>
              </figcaption>
              <button
                type="button"
                onClick={() => setSelected(null)}
                className="absolute -top-3 right-0 flex h-10 w-10 translate-y-[-100%] items-center justify-center border border-gold/40 bg-black/70 text-cream transition-colors hover:bg-gold hover:text-primary-foreground md:right-[-3rem] md:top-0 md:translate-y-0"
                aria-label="Close preview"
              >
                <X className="h-5 w-5" aria-hidden />
              </button>
            </motion.figure>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
