import { Metadata } from "next";
import AboutHeroSection from "./components/AboutHeroSection";
import TrajectorySection from "./components/TrajectorySection";


export const metadata: Metadata = {
  title: "Sobre Dr. Fabrício Maciel — Geneticista em Brasília",
  description: "Conheça o Dr. Fabrício Maciel, médico geneticista (CRM 31124 / RQE 22393) em Brasília. Formação, trajetória e áreas de atuação em genética médica.",
  alternates: { canonical: "/sobre" },
  openGraph: {
    title: "Sobre o Dr. Fabrício Maciel — Mosaico Genética",
    description: "Trajetória, formação acadêmica e áreas de atuação em genética médica.",
    url: "https://www.mosaico.med.br/sobre",
    type: "profile",
    images: ["/fabri2.jpeg"],
  },
};

export default function AboutPage() {
  return (
    <>
      <AboutHeroSection />
      <TrajectorySection />
    </>
  )
}
