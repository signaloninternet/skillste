import { Footer } from "@/components/layout/footer";
import { ComingSoonSection } from "@/components/sections/coming-soon-section";
import { DashboardPreviewSection } from "@/components/sections/dashboard-preview-section";
import { DataSecuritySection } from "@/components/sections/data-security-section";
import { DiscordCtaSection } from "@/components/sections/discord-cta-section";
import { FAQSection } from "@/components/sections/faq-section";
import { FeaturesSection } from "@/components/sections/features-section";
import { HeroSection } from "@/components/sections/hero-section";
import { PerformanceImprovementSection } from "@/components/sections/performance-improvement-section";
import { PricingSection } from "@/components/sections/pricing-section";
import PrivacyFeatures from "@/components/sections/section";
import { TestimonialsSection } from "@/components/sections/testimonials-section";
import { TraderFeaturesSection } from "@/components/sections/trader-types-section";
import { WorldMapSection } from "@/components/sections/world-map-section";

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white font-sans">
      <HeroSection />
      <TraderFeaturesSection />
      <PerformanceImprovementSection />
      <DashboardPreviewSection />
      <PricingSection />
      <TestimonialsSection />
      <WorldMapSection />
      <FAQSection />
      <DiscordCtaSection />
      <PrivacyFeatures />
      <Footer />
    </div>
  );
}
