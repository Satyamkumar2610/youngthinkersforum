import { Hero } from "@/components/home/Hero";
import { About } from "@/components/home/About";
import { EventGrid } from "@/components/home/EventGrid";
import { JoinSection } from "@/components/home/JoinSection";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <EventGrid />
      <JoinSection />
    </>
  );
}
