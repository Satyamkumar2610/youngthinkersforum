import type { Metadata } from "next";
import "./globals.css";

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
        className="antialiased font-sans bg-background text-foreground flex flex-col min-h-screen selection:bg-primary/15 selection:text-primary"
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
