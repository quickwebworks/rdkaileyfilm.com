import { Navbar } from "@/components/rdkailey/navbar";
import { Hero } from "@/components/rdkailey/hero";
import { Marquee } from "@/components/rdkailey/marquee";
import { About } from "@/components/rdkailey/about";
import { Services } from "@/components/rdkailey/services";
import { Gallery } from "@/components/rdkailey/gallery";
import { Vision } from "@/components/rdkailey/vision";
import { Contact } from "@/components/rdkailey/contact";
import { Footer } from "@/components/rdkailey/footer";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      {/* Analog film grain overlay */}
      <div className="film-grain" aria-hidden />

      <Navbar />

      <main className="flex-1">
        <Hero />
        <Marquee />
        <About />
        <Services />
        <Gallery />
        <Vision />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}
