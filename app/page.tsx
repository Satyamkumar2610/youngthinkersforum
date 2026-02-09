import { Hero } from "@/components/home/Hero";
import { ThreePillarsGrid } from "@/components/home/ThreePillarsGrid";
import { About } from "@/components/home/About";
import { EventGrid } from "@/components/home/EventGrid";
import { JoinSection } from "@/components/home/JoinSection";

export default function Home() {
  return (
    <>
      <Hero />
      <ThreePillarsGrid />
      <About />
      <EventGrid />
      <JoinSection />
    </>
  );
}
