import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import ServicesSection from "./components/ServicesSection";
import ReviewSectionGoogle from "./components/ReviewSectionGoogle";
import FAQSection from "./components/FAQSection";
import ContactSection from "./components/ContactSection";
import FAQSchemaScript from "./components/FAQSchemaScript";
import AggregateRatingSchema from "./components/AggregateRatingSchema";
import { getPlaceDetails } from "./utils/getPlacesDetails";

export default async function Home() {
  const { reviews, rating, total } = await getPlaceDetails();

  return (
    <>
      <FAQSchemaScript />
      {rating !== null && total !== null && total > 0 && (
        <AggregateRatingSchema rating={rating} total={total} />
      )}
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <ReviewSectionGoogle reviews={reviews} rating={rating} total={total} />
      <FAQSection />
      <ContactSection />
    </>
  );
}
