import AboutHero from "@/components/about/about-hero";
import VisionMissionSection from "@/components/about/vision-mission";
import { Footer } from "@/components/layout/footer";
import Navbar from "@/components/navbar";
import { DiscordCtaSection } from "@/components/sections/discord-cta-section";
import PrivacyFeatures from "@/components/sections/section";

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white font-sans">
      <Navbar />
      <AboutHero />
      <VisionMissionSection />
      <DiscordCtaSection />
      <PrivacyFeatures />
      <Footer />
    </div>
  );
}
