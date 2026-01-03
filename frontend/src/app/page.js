import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

import { HeroSection } from "@/components/layout/HeroSection";
import { WorkspaceShowcase } from "@/components/layout/WorkspaceShowcase";
import { HowItWorks } from "@/components/layout/HowItWorks";
import { LiveAvailability } from "@/components/layout/LiveAvailability";
import { PricingPreview } from "@/components/layout/PricingPreview";
import { WhyChooseUs } from "@/components/layout/WhyChooseUs";
import { CTABanner } from "@/components/layout/CTABanner";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="space-y-24">
        <HeroSection />
        {/* <WorkspaceShowcase /> */}
        <HowItWorks />
        <LiveAvailability />
        <PricingPreview />
        <WhyChooseUs />
        <CTABanner />
      </main>

      <Footer />
    </div>
  );
}
