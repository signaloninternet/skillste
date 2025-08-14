import Hero from "@/components/hero";
import { Footer } from "@/components/layout/footer";
import Navbar from "@/components/navbar";
import { ComingSoonSection } from "@/components/sections/coming-soon-section";
import { DashboardPreviewSection } from "@/components/sections/dashboard-preview-section";
import { DataSecuritySection } from "@/components/sections/data-security-section";
import { DiscordCtaSection } from "@/components/sections/discord-cta-section";
import FAQSections from "@/components/sections/faq";
import { FAQSection } from "@/components/sections/faq-section";
import { FeaturesSection } from "@/components/sections/features-section";
import { HeroSection } from "@/components/sections/hero-section";
import { PerformanceImprovementSection } from "@/components/sections/performance-improvement-section";
import Pricing from "@/components/sections/pricing";
import { PricingSection } from "@/components/sections/pricing-section";
import PrivacyFeatures from "@/components/sections/section";
import { TestimonialsSection } from "@/components/sections/testimonials-section";
import { TraderFeaturesSection } from "@/components/sections/trader-types-section";
import { WorldMapSection } from "@/components/sections/world-map-section";
import SoftwareGlimpse from "@/components/SoftwareGlimpse";
import WhyChooseUs from "@/components/whychooseus";

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white font-sans">
      <Navbar />
      <Hero />
      <WhyChooseUs />
      <PerformanceImprovementSection />
      <SoftwareGlimpse />
      <Pricing />
      <TestimonialsSection />
      <WorldMapSection />
      <FAQSections />

      <DiscordCtaSection />
      <PrivacyFeatures />
      <Footer />
    </div>
  );
}
