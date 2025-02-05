import { Metadata } from "next";
import AboutHeroSection from "./components/AboutHeroSection";
import TrajectorySection from "./components/TrajectorySection";


export const metadata: Metadata = {
  title: "Dr. Fabrício Maciel",
  description: "Minha atuação é guiada pela precisão científica e pela busca contínua por inovação na genética médica, com um foco especial em doenças neuromusculares, onde me dedico a avançar no diagnóstico e manejo dessas condições raras.",
};

export default function AboutPage() {
  return (
    <>
      <AboutHeroSection />
      <TrajectorySection />
    </>
  )
}
