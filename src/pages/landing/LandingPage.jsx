import FindInspo from "@/components/FindInspo";
import Hero from "@/components/Hero";
import FinalCta from "@/components/FinalCta";
import AboutSanaaCreate from "@/components/AboutSanaaCreate";
import SanaaAccordion from "@/components/Accordion";
import FindYourNiche from "@/components/FindYourNiche";
import LandingLayout from "@/components/layouts/LandingLayout";

function LandingPage() {
  return (
    <LandingLayout>
      <Hero />
      <AboutSanaaCreate />
      <FindInspo />
      <SanaaAccordion />
      <FindYourNiche />
      <FinalCta />
    </LandingLayout>
  );
}

export default LandingPage;
