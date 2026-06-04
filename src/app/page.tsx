import type { Metadata } from "next";
import HeroSection from "@/components/sections/HeroSection";
import LogoMarquee from "@/components/sections/LogoMarquee";
import DivisionsSection from "@/components/sections/DivisionsSection";
import StatsSection from "@/components/sections/StatsSection";
import ServicesPreview from "@/components/sections/ServicesPreview";
import DriveSection from "@/components/sections/DriveSection";
import CaseStudiesPreview from "@/components/sections/CaseStudiesPreview";
import TalentPreview from "@/components/sections/TalentPreview";
import TestimonialsMarquee from "@/components/sections/TestimonialsMarquee";
import ClientJourney from "@/components/sections/ClientJourney";
import CtaSection from "@/components/sections/CtaSection";

export const metadata: Metadata = {
  title: "Grow N Co - Global Performance Marketing Agency",
  description:
    "Grow N Co is a global performance marketing agency with two divisions: Brand Scaling and Talent Management. Operating across Africa, Europe, and the Americas.",
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <LogoMarquee />
      <DivisionsSection />
      <StatsSection />
      <ServicesPreview />
      <DriveSection />
      <CaseStudiesPreview />
      <TalentPreview />
      <TestimonialsMarquee />
      <ClientJourney />
      <CtaSection />
    </>
  );
}
