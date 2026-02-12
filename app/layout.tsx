import type { Metadata } from "next";
import { Outfit, Inter } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Young Thinkers Forum",
  description: "A premier platform for rigorous debate, critical analysis, and nurturing young Indian thought leaders.",
};

import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ArtisticBackground } from "@/components/ui/ArtisticBackground";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        suppressHydrationWarning
        className={`${outfit.variable} ${inter.variable} antialiased font-sans bg-white text-zinc-900 flex flex-col min-h-screen selection:bg-[#D32F2F]/20 selection:text-[#D32F2F]`}
      >
        <ArtisticBackground />
        <Header />
        <main className="flex-grow relative z-10">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
