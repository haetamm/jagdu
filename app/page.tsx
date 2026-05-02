import { StatTicker } from "@/components/molecules/StatTicker";
import { LandingCTA } from "@/components/organisms/LandingCTA";
import { LandingFeatures } from "@/components/organisms/LandingFeatures";
import { LandingFooter } from "@/components/organisms/LandingFooter";
import { LandingHero } from "@/components/organisms/LandingHero";
import { LandingHowItWorks } from "@/components/organisms/LandingHowItWorks";
import { LandingNavbar } from "@/components/organisms/LandingNavbar";

export default function LandingPage() {
  return (
    <>
      <LandingNavbar />
      <main>
        <LandingHero />
        <StatTicker />
        <LandingFeatures />
        <LandingHowItWorks />
        <LandingCTA />
      </main>
      <LandingFooter />
    </>
  );
}
