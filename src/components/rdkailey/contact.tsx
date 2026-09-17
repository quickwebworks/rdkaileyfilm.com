"use client";

import { useState, type FormEvent } from "react";
import {
  Instagram,
  Loader2,
  MapPin,
  MessageCircle,
  Phone,
  Send,
} from "lucide-react";
import { toast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Reveal, SectionEyebrow } from "./reveal";
import { SERVICES, STUDIO } from "@/lib/data";

export function Contact() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [service, setService] = useState("");
  const [message, setMessage] = useState("");
  const [sending, setSending] = useState(false);

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (sending) return;
    setSending(true);
    try {
      const res = await fetch("/api/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, phone, email, service, message }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data?.error ?? "Failed to send enquiry");
      toast({
        title: "Enquiry received",
        description:
          "Shukran! The RD Kailey Film team will reach out to you shortly.",
      });
      setName("");
      setPhone("");
      setEmail("");
      setService("");
      setMessage("");
    } catch (err) {
      toast({
        title: "Could not send enquiry",
        description:
          err instanceof Error
            ? err.message
            : "Please call or WhatsApp us instead.",
        variant: "destructive",
      });
    } finally {
      setSending(false);
    }
  }

  return (
    <section
      id="contact"
      className="relative scroll-mt-24 border-t border-gold/10 bg-coal-light py-24 md:py-32"
      aria-label="Contact and bookings"
    >
      <div className="mx-auto grid max-w-7xl gap-14 px-5 md:px-10 lg:grid-cols-2 lg:gap-20">
        {/* Left — info */}
        <div>
          <Reveal>
            <SectionEyebrow index="05" label="Contact / Bookings" />
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="mt-6 font-display text-4xl font-semibold leading-[1.06] text-cream md:text-6xl">
              Let&apos;s create <em className="italic text-gold">together</em>
            </h2>
          </Reveal>
          <Reveal delay={0.18}>
            <p className="mt-6 max-w-lg leading-relaxed text-muted-foreground md:text-lg">
              Bookings, projects and production enquiries — call or WhatsApp
              us directly, or send the form and we will get back to you with a
              tailored treatment.
            </p>
          </Reveal>

          {/* Phone cards */}
          <Reveal delay={0.24}>
            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              {STUDIO.phones.map((p) => (
                <div
                  key={p.tel}
                  className="group border border-gold/20 bg-card p-5 transition-colors duration-300 hover:border-gold/50"
                >
                  <p className="font-mono text-[9px] uppercase tracking-[0.35em] text-muted-foreground">
                    Call / WhatsApp
                  </p>
                  <a
                    href={`tel:${p.tel}`}
                    className="mt-3 flex items-center gap-2.5 font-display text-xl tracking-wide text-cream transition-colors hover:text-gold"
                  >
                    <Phone className="h-4 w-4 text-gold" aria-hidden />
                    {p.label}
                  </a>
                  <a
                    href={`https://wa.me/${p.wa}`}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-2 inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.25em] text-gold transition-colors hover:text-gold-soft"
                  >
                    <MessageCircle className="h-3.5 w-3.5" aria-hidden />
                    Chat on WhatsApp
                  </a>
                </div>
              ))}
            </div>
          </Reveal>

          {/* Instagram + locations */}
          <Reveal delay={0.3}>
            <div className="mt-4 flex flex-col gap-4 sm:flex-row">
              <a
                href={STUDIO.instagram}
                target="_blank"
                rel="noreferrer"
                className="group flex flex-1 items-center gap-4 border border-gold/20 bg-card p-5 transition-colors duration-300 hover:border-gold/50"
              >
                <span className="flex h-11 w-11 items-center justify-center border border-gold/40 bg-gold/10 transition-colors group-hover:bg-gold/20">
                  <Instagram className="h-5 w-5 text-gold" aria-hidden />
                </span>
                <span>
                  <span className="block font-mono text-[9px] uppercase tracking-[0.35em] text-muted-foreground">
                    Follow the work
                  </span>
                  <span className="mt-1 block text-cream transition-colors group-hover:text-gold">
                    {STUDIO.instagramHandle}
                  </span>
                </span>
              </a>
              <div className="flex flex-1 items-center gap-4 border border-gold/20 bg-card p-5">
                <span className="flex h-11 w-11 items-center justify-center border border-gold/40 bg-gold/10">
                  <MapPin className="h-5 w-5 text-gold" aria-hidden />
                </span>
                <span>
                  <span className="block font-mono text-[9px] uppercase tracking-[0.35em] text-muted-foreground">
                    Based in
                  </span>
                  <span className="mt-1 block text-cream">
                    Dubai · India · Worldwide
                  </span>
                </span>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Right — booking form */}
        <Reveal delay={0.15}>
          <form
            onSubmit={onSubmit}
            className="border border-gold/25 bg-card p-6 md:p-9"
            aria-label="Project enquiry form"
          >
            <p className="font-mono text-[10px] uppercase tracking-[0.35em] text-gold">
              Project Enquiry
            </p>
            <h3 className="mt-3 font-display text-2xl font-medium tracking-wide text-cream md:text-3xl">
              Tell us about your vision
            </h3>

            <div className="mt-8 grid gap-5 sm:grid-cols-2">
              <div className="sm:col-span-1">
                <label
                  htmlFor="enq-name"
                  className="mb-2 block font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground"
                >
                  Name *
                </label>
                <Input
                  id="enq-name"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Your full name"
                  className="border-gold/25 bg-coal/60 text-cream placeholder:text-muted-foreground/50 focus-visible:ring-gold/50"
                />
              </div>
              <div className="sm:col-span-1">
                <label
                  htmlFor="enq-phone"
                  className="mb-2 block font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground"
                >
                  Phone / WhatsApp *
                </label>
                <Input
                  id="enq-phone"
                  required
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="+971 …"
                  className="border-gold/25 bg-coal/60 text-cream placeholder:text-muted-foreground/50 focus-visible:ring-gold/50"
                />
              </div>
              <div className="sm:col-span-2">
                <label
                  htmlFor="enq-email"
                  className="mb-2 block font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground"
                >
                  Email <span className="text-muted-foreground/60">(optional)</span>
                </label>
                <Input
                  id="enq-email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@studio.com"
                  className="border-gold/25 bg-coal/60 text-cream placeholder:text-muted-foreground/50 focus-visible:ring-gold/50"
                />
              </div>
              <div className="sm:col-span-2">
                <label
                  htmlFor="enq-service"
                  className="mb-2 block font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground"
                >
                  Service *
                </label>
                <Select value={service} onValueChange={setService} required>
                  <SelectTrigger
                    id="enq-service"
                    className="w-full border-gold/25 bg-coal/60 text-cream data-[placeholder]:text-muted-foreground/50"
                  >
                    <SelectValue placeholder="Select a service" />
                  </SelectTrigger>
                  <SelectContent className="max-h-72 border-gold/25 bg-coal text-cream">
                    {SERVICES.map((s) => (
                      <SelectItem
                        key={s.id}
                        value={s.title}
                        className="focus:bg-gold/15 focus:text-gold"
                      >
                        {s.index} — {s.title}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="sm:col-span-2">
                <label
                  htmlFor="enq-message"
                  className="mb-2 block font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground"
                >
                  Project details *
                </label>
                <Textarea
                  id="enq-message"
                  required
                  rows={4}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Concept, location, dates, references…"
                  className="resize-none border-gold/25 bg-coal/60 text-cream placeholder:text-muted-foreground/50 focus-visible:ring-gold/50"
                />
              </div>
            </div>

            <Button
              type="submit"
              disabled={sending}
              size="lg"
              className="mt-8 w-full gap-3 bg-gold font-mono text-[11px] uppercase tracking-[0.3em] text-primary-foreground hover:bg-gold-soft disabled:opacity-60"
            >
              {sending ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin" aria-hidden />
                  Sending…
                </>
              ) : (
                <>
                  <Send className="h-4 w-4" aria-hidden />
                  Send Enquiry
                </>
              )}
            </Button>
            <p className="mt-4 text-center font-mono text-[9px] uppercase tracking-[0.3em] text-muted-foreground">
              Response within 24 hours · Dubai — India — Worldwide
            </p>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
