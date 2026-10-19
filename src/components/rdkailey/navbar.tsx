"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Clapperboard, Menu, Phone, X, Youtube } from "lucide-react";
import { Button } from "@/components/ui/button";
import { STUDIO } from "@/lib/data";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { href: "#studio", label: "Studio" },
  { href: "#services", label: "Services" },
  { href: "#work", label: "Work" },
  { href: "#vision", label: "Vision" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-all duration-500",
          scrolled
            ? "border-b border-gold/15 bg-background/85 py-3 backdrop-blur-xl"
            : "bg-transparent py-5"
        )}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 md:px-8">
          {/* Logo */}
          <a
            href="#top"
            className="group flex items-center gap-3"
            aria-label="RD Kailey Film — home"
          >
            <span className="flex h-9 w-9 items-center justify-center border border-gold/50 bg-gold/10 transition-colors duration-300 group-hover:bg-gold/20">
              <Clapperboard
                className="h-4.5 w-4.5 text-gold"
                aria-hidden
              />
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

          {/* Desktop nav */}
          <nav
            className="hidden items-center gap-8 lg:flex"
            aria-label="Primary"
          >
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="link-underline font-mono text-[11px] uppercase tracking-[0.28em] text-foreground/70 transition-colors hover:text-cream"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <a
              href={`tel:${STUDIO.phones[0].tel}`}
              className="flex items-center gap-2 font-mono text-[11px] tracking-[0.14em] text-foreground/70 transition-colors hover:text-gold"
            >
              <Phone className="h-3.5 w-3.5 text-gold" aria-hidden />
              {STUDIO.phones[0].label}
            </a>
            <Button
              asChild
              className="bg-gold font-mono text-[11px] uppercase tracking-[0.22em] text-primary-foreground hover:bg-gold-soft"
            >
              <a href="#contact">Book a Shoot</a>
            </Button>
          </div>

          {/* Mobile toggle */}
          <button
            type="button"
            onClick={() => setOpen(true)}
            className="flex h-10 w-10 items-center justify-center border border-gold/30 text-cream lg:hidden"
            aria-label="Open menu"
          >
            <Menu className="h-5 w-5" aria-hidden />
          </button>
        </div>
      </header>

      {/* Mobile full-screen menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35 }}
            className="fixed inset-0 z-[60] flex flex-col bg-coal/98 backdrop-blur-xl lg:hidden"
            role="dialog"
            aria-modal="true"
            aria-label="Menu"
          >
            <div className="flex items-center justify-between px-5 py-5">
              <span className="font-display text-lg tracking-[0.18em] text-cream">
                RD KAILEY <span className="text-gold">FILM</span>
              </span>
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="flex h-10 w-10 items-center justify-center border border-gold/30 text-cream"
                aria-label="Close menu"
              >
                <X className="h-5 w-5" aria-hidden />
              </button>
            </div>

            <nav
              className="flex flex-1 flex-col items-start justify-center gap-2 px-8"
              aria-label="Mobile"
            >
              {NAV_LINKS.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  initial={{ opacity: 0, x: -24 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.08 + i * 0.06, duration: 0.5 }}
                  className="group flex items-baseline gap-4 py-2"
                >
                  <span className="font-mono text-[10px] text-gold/70">
                    0{i + 1}
                  </span>
                  <span className="font-display text-4xl font-medium text-cream transition-colors group-hover:text-gold">
                    {link.label}
                  </span>
                </motion.a>
              ))}
            </nav>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="space-y-3 border-t border-gold/15 px-8 py-6"
            >
              {STUDIO.phones.map((p) => (
                <a
                  key={p.tel}
                  href={`tel:${p.tel}`}
                  className="flex items-center gap-3 font-mono text-sm tracking-[0.15em] text-cream/85"
                >
                  <Phone className="h-4 w-4 text-gold" aria-hidden />
                  {p.label}
                </a>
              ))}
              <a
                href={STUDIO.instagram}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 font-mono text-sm tracking-[0.15em] text-cream/85"
              >
                <Youtube className="h-4 w-4 text-gold" aria-hidden />
                {STUDIO.instagramHandle}
              </a>
              <p className="pt-2 font-mono text-[10px] uppercase tracking-[0.4em] text-muted-foreground">
                Dubai — India — Worldwide
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
