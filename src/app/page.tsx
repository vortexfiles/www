import { ResizableNavbar } from "@/components/ui/resizable-navbar";
import { Component as Hero } from "@/components/ui/experience-hero";
import { Stats } from "@/components/sections/stats";
import { Features } from "@/components/sections/features";
import { Proximity } from "@/components/sections/proximity";
import { Marketplace } from "@/components/sections/marketplace";
import { Testimonials } from "@/components/sections/testimonials";
import { Footer } from "@/components/sections/footer";

export default function Page() {
  return (
    <main className="min-h-screen bg-background">
      <ResizableNavbar />
      <Hero />
      <Stats />
      <Features />
      <Proximity />
      <Marketplace />
      <Testimonials />
      <Footer />
    </main>
  );
}
