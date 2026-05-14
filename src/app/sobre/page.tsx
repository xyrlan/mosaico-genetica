import { Metadata } from "next";
import AboutHeroSection from "./components/AboutHeroSection";
import TrajectorySection from "./components/TrajectorySection";
import TrajetoriaList from "./components/TrajetoriaList";
import AreasAtuacao from "./components/AreasAtuacao";
import AbordagemClinica from "./components/AbordagemClinica";
import SobreFaq from "./components/SobreFaq";
import LastReviewed from "./components/LastReviewed";
import SobreSchemaScript from "./components/SobreSchemaScript";
import Breadcrumbs from "../components/Breadcrumbs";

const SOBRE_DATE_MODIFIED = "2026-05-13";

export const metadata: Metadata = {
  title: "Sobre Dr. Fabrício Maciel — Geneticista em Brasília",
  description:
    "Conheça Dr. Fabrício Maciel (CRM-DF 31124 / RQE 22393), médico geneticista em Brasília. Formação no HCPA e mestrado UFRGS em neurogenética.",
  alternates: { canonical: "/sobre" },
  openGraph: {
    title: "Sobre o Dr. Fabrício Maciel — Mosaico Genética",
    description:
      "Trajetória, formação acadêmica e áreas de atuação em genética médica.",
    url: "https://www.mosaico.med.br/sobre",
    type: "profile",
    images: ["/fabri2.jpeg"],
  },
};

export default function AboutPage() {
  return (
    <>
      <SobreSchemaScript />
      <Breadcrumbs items={[{ name: "Início", href: "/" }, { name: "Sobre" }]} />
      <AboutHeroSection />
      <AbordagemClinica />
      <AreasAtuacao />
      <TrajectorySection />
      <TrajetoriaList />
      <SobreFaq />
      <LastReviewed date={SOBRE_DATE_MODIFIED} />
    </>
  );
}
