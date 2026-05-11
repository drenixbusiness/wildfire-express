import ByTheNumbers from "../components/ByTheNumbers/ByTheNumbers";
import CtaStrip from "../components/CtaStrip/CtaStrip";
import FaqSection from "../components/FaqSection/FaqSection";
import Hero from "../components/Hero/Hero";
import Marquee from "../components/Marquee/Marquee";
import Testimonials from "../components/Testimonials/Testimonials";

export default function Home() {
  return (
    <>
      <Hero />
      <Marquee />
      <ByTheNumbers />
      <Testimonials />
      <FaqSection />
      <CtaStrip />
    </>
  );
}
