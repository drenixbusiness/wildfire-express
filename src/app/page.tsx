import ByTheNumbers from "../components/ByTheNumbers/ByTheNumbers";
import CtaStrip from "../components/CtaStrip/CtaStrip";
import FaqSection from "../components/FaqSection/FaqSection";
import Hero from "../components/Hero/Hero";
import Marquee from "../components/Marquee/Marquee";
import RolesOpportunities from "../components/RolesOpportunities/RolesOpportunities";
import Services from "../components/Services/Services";
import Testimonials from "../components/Testimonials/Testimonials";
import WhyWildFire from "../components/WhyWildFire/WhyWildFire";

export default function Home() {
  return (
    <>
      <Hero />
      <Marquee />
      <Services />
      <ByTheNumbers />
      <WhyWildFire />
      <RolesOpportunities />
      <Testimonials />
      <FaqSection />
      <CtaStrip />
    </>
  );
}
