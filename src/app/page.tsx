import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import ServicesSection from "./components/ServicesSection";
import CallSection from "./components/CallSection";
import ReviewSectionGoogle from "./components/ReviewSectionGoogle";

export default async function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <ReviewSectionGoogle />
      <CallSection />
    </>
  );
}
