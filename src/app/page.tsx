import { Hero } from "@/components/home/Hero";
import { SocialProof } from "@/components/home/SocialProof";
import { PlatformInteractive } from "@/components/home/PlatformInteractive";
import { SolutionsGrid } from "@/components/home/SolutionsGrid";
import { RoiCalculator } from "@/components/home/RoiCalculator";
import { Testimonials } from "@/components/home/Testimonials";
import { SecurityFeature } from "@/components/home/SecurityFeature";
import { PricingSection } from "@/components/home/PricingSection";
import { FaqSection } from "@/components/home/FaqSection";
import { CtaBanner } from "@/components/home/CtaBanner";

export default function HomePage() {
  return (
    <>
      <Hero />
      <SocialProof />
      <PlatformInteractive />
      <SolutionsGrid />
      <RoiCalculator />
      <Testimonials />
      <SecurityFeature />
      <PricingSection />
      <FaqSection />
      <CtaBanner />
    </>
  );
}
