# rdkaileyfilm.com

Official website for **RD Kailey Film** — a professional film production & visual content company based in Dubai, working across the UAE, India and worldwide.

> *"We Capture Your Vision with Professional Quality."*

Led by a professional Director & DOP, RD Kailey Film turns concepts into cinematic visuals — music videos, commercials, corporate films, event & yacht coverage, fashion portfolios, wedding films, real estate, product shoots, social reels, and full post-production.

## Highlights

- Cinematic dark theme with champagne-gold palette, film grain & viewfinder HUD
- Auto-cycling showreel slideshow + moving filmstrip in the hero (click to play the reel on YouTube)
- 12 production services, each paired with its own YouTube intro video
- Selected-frames gallery with lightbox, studio & process sections
- Enquiry form (SQLite via Prisma) with phone / WhatsApp / Instagram contact options

## Tech Stack

- **Next.js 16** (App Router) + **TypeScript**
- **Tailwind CSS 4** + shadcn/ui (New York) + Lucide icons
- **Framer Motion** animations
- **Prisma ORM** with SQLite

## Getting Started

```bash
bun install          # or npm install
cp .env.example .env # adjust DATABASE_URL if needed
bun run db:push      # create the SQLite database
bun run dev          # start the dev server
```

Imagery sourced from Pexels & Unsplash; service reels embedded from YouTube.
