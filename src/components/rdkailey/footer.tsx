import { Clapperboard, Instagram, MapPin, Phone } from "lucide-react";
import { SERVICES, STUDIO } from "@/lib/data";

export function Footer() {
  return (
    <footer className="mt-auto border-t border-gold/15 bg-coal">
      <div className="mx-auto max-w-7xl px-5 py-14 md:px-10">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1.2fr]">
          {/* Brand */}
          <div>
            <a href="#top" className="flex items-center gap-3">
              <span className="flex h-9 w-9 items-center justify-center border border-gold/50 bg-gold/10">
                <Clapperboard className="h-4.5 w-4.5 text-gold" aria-hidden />
              </span>
              <span className="leading-none">
                <span className="block font-display text-lg font-semibold tracking-[0.18em] text-cream">
                  RD KAILEY
                </span>
                <span className="mt-1 block font-mono text-[9px] uppercase tracking-[0.5em] text-gold">
                  Film · Dubai
                </span>
              </span>
            </a>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-muted-foreground">
              Professional film production &amp; visual content company.
              We Capture Your Vision with Professional Quality.
            </p>
            <p className="mt-5 flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.3em] text-cream/60">
              <MapPin className="h-3.5 w-3.5 text-gold" aria-hidden />
              Dubai — India — Worldwide
            </p>
          </div>

          {/* Services */}
          <nav aria-label="Services">
            <p className="font-mono text-[10px] uppercase tracking-[0.35em] text-gold">
              Services
            </p>
            <ul className="mt-5 space-y-2.5">
              {SERVICES.slice(0, 6).map((s) => (
                <li key={s.id}>
                  <a
                    href="#services"
                    className="text-sm text-muted-foreground transition-colors hover:text-cream"
                  >
                    {s.title}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="#services"
                  className="font-mono text-[10px] uppercase tracking-[0.25em] text-gold/80 transition-colors hover:text-gold"
                >
                  + 6 more disciplines
                </a>
              </li>
            </ul>
          </nav>

          {/* Contact */}
          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.35em] text-gold">
              Contact
            </p>
            <ul className="mt-5 space-y-3">
              {STUDIO.phones.map((p) => (
                <li key={p.tel}>
                  <a
                    href={`tel:${p.tel}`}
                    className="flex items-center gap-2.5 text-sm text-muted-foreground transition-colors hover:text-cream"
                  >
                    <Phone className="h-3.5 w-3.5 text-gold/70" aria-hidden />
                    {p.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href={STUDIO.instagram}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2.5 text-sm text-muted-foreground transition-colors hover:text-cream"
                >
                  <Instagram
                    className="h-3.5 w-3.5 text-gold/70"
                    aria-hidden
                  />
                  {STUDIO.instagramHandle}
                </a>
              </li>
            </ul>
            <a
              href="#contact"
              className="mt-6 inline-block border border-gold/40 bg-gold/10 px-6 py-3 font-mono text-[10px] uppercase tracking-[0.3em] text-gold transition-all duration-300 hover:bg-gold hover:text-primary-foreground"
            >
              Start a Project
            </a>
          </div>
        </div>
      </div>

      {/* Bottom strip */}
      <div className="border-t border-gold/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-5 py-5 font-mono text-[9px] uppercase tracking-[0.3em] text-muted-foreground md:flex-row md:px-10">
          <p>© {new Date().getFullYear()} RD Kailey Film — All rights reserved</p>
          <p>Imagery: Pexels · Unsplash — Reels: YouTube</p>
        </div>
      </div>
    </footer>
  );
}
