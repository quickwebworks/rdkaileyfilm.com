"use client";

import { useState } from "react";
import { Play } from "lucide-react";
import { cn } from "@/lib/utils";

/**
 * Performance-friendly YouTube embed.
 * Renders a lightweight thumbnail until the visitor clicks play,
 * then swaps in the real iframe (autoplay).
 *
 * When `id` changes the parent is expected to remount this component
 * (AnimatePresence key) so local state resets naturally.
 */
export function YouTubeLite({
  id,
  title,
  className,
}: {
  id: string;
  title: string;
  className?: string;
}) {
  const [playing, setPlaying] = useState(false);
  const [thumbFallback, setThumbFallback] = useState(false);

  const thumbSrc = thumbFallback
    ? `https://i.ytimg.com/vi/${id}/hqdefault.jpg`
    : `https://i.ytimg.com/vi/${id}/maxresdefault.jpg`;

  if (playing) {
    return (
      <iframe
        src={`https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0&modestbranding=1`}
        title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
        className={cn("absolute inset-0 h-full w-full", className)}
      />
    );
  }

  return (
    <button
      type="button"
      onClick={() => setPlaying(true)}
      aria-label={`Play video: ${title}`}
      className="group absolute inset-0 block h-full w-full cursor-pointer overflow-hidden"
    >
      <img
        src={thumbSrc}
        alt={title}
        loading="lazy"
        onError={() => setThumbFallback(true)}
        className="h-full w-full object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-[1.04]"
      />
      <span className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-black/20" />

      {/* play button */}
      <span className="absolute inset-0 flex items-center justify-center">
        <span className="relative flex h-16 w-16 items-center justify-center rounded-full border border-gold/70 bg-black/45 backdrop-blur-sm transition-all duration-500 group-hover:scale-110 group-hover:bg-gold md:h-20 md:w-20">
          <span className="absolute inset-0 animate-ping rounded-full border border-gold/40 [animation-duration:2.4s]" />
          <Play
            className="ml-1 h-6 w-6 fill-gold text-gold transition-colors duration-300 group-hover:fill-primary-foreground group-hover:text-primary-foreground md:h-7 md:w-7"
            aria-hidden
          />
        </span>
      </span>

      <span className="absolute bottom-3 left-4 font-mono text-[10px] uppercase tracking-[0.3em] text-white/70">
        YouTube · Play reel
      </span>
    </button>
  );
}
