
import React from "react";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import ServicesSection from "./components/ServicesSection";
import CallSection from "./components/CallSection";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    absolute: "Home - Mosaico Genética",
  },
  description: "Um consultório médico dedicado ao diagnóstico, acompanhamento e aconselhamento genético de famílias com doenças raras.",
};

export default function Home() {

  return (
    <>
      <main>
        <HeroSection />
      </main>
      <AboutSection />
      <ServicesSection />
      <CallSection />

    </>
  );
}