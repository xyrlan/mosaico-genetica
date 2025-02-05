import { Metadata } from "next";
import AboutHeroSection from "./components/AboutHeroSection";
import TrajectorySection from "./components/TrajectorySection";


export const metadata: Metadata = {
  title: "Dr. Fabrício Maciel",
  description: "Dr. Fabrício Maciel é um consultor médico especializado em genética e genética médica. Ele é especialista em diagnóstico, acompanhamento e aconselhamento genético de famílias com doenças raras.",
};

export default function AboutPage() {
  return (
    <>
      <AboutHeroSection />
      <TrajectorySection />
    </>
  )
}
