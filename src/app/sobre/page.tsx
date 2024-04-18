import { Metadata } from "next";
import AboutHeroSection from "./components/AboutHeroSection";
import TrajectorySection from "./components/TrajectorySection";


export const metadata: Metadata = {
  title: "Dr. Fabrício",
  description: "Um consultório médico dedicado ao diagnóstico, acompanhamento e aconselhamento genético de famílias com doenças raras.",
};

export default function AboutPage() {
  return (
    <>
      <AboutHeroSection />
      <TrajectorySection />
    </>
  )
}
