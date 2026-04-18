import type { Metadata } from "next";
import HeroSection from "@/components/home/HeroSection";

export const metadata: Metadata = {
  description: "Premium web design and development studio in Jakarta. We help companies scale through high-conversion, motion-rich digital experiences built with Next.js and GSAP.",
};
import StatementSection from "@/components/home/StatementSection";
import WorksSection from "@/components/home/WorksSection";
import CTASection from "@/components/home/CTASection";

export default function Home() {
  return (
    <main className="w-full">
      <HeroSection />
      <StatementSection />
      <WorksSection />
      <CTASection />
    </main>
  );
}
