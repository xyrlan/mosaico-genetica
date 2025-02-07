import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import ServicesSection from "./components/ServicesSection";
import ReviewSectionGoogle from "./components/ReviewSectionGoogle";
import FAQSection from "./components/FAQSection";
import ContactSection from "./components/ContactSection";

export default async function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <ReviewSectionGoogle />
      <FAQSection />
      <ContactSection />
    </>
  );
}
