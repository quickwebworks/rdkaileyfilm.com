import type { Metadata } from "next";
import { Geist_Mono, Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  style: ["normal", "italic"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "RD Kailey Film — Professional Film Production & Visual Content Company",
  description:
    "RD Kailey Film is a professional film production and visual content company based in Dubai, working across the UAE, India and worldwide. Music videos, commercials, corporate films, weddings, real estate, product shoots and more — directed by a professional Director & DOP.",
  keywords: [
    "RD Kailey Film",
    "film production Dubai",
    "video production company UAE",
    "music video production",
    "commercial advertisement shoot",
    "wedding films Dubai",
    "real estate videography",
    "model portfolio Dubai",
    "DOP Dubai",
    "cinematography",
  ],
  authors: [{ name: "RD Kailey Film" }],
  icons: {
    icon: "/logo.svg",
  },
  openGraph: {
    title: "RD Kailey Film — We Capture Your Vision",
    description:
      "Professional Film Production & Visual Content Company. Dubai | India | Worldwide. Book: +971 545 586 920",
    siteName: "RD Kailey Film",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="dark">
      <body
        className={`${inter.variable} ${playfair.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
