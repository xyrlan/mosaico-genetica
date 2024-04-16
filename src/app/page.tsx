'use client'
import React from "react";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import ServicesSection from "./components/ServicesSection";
import CallSection from "./components/CallSection";

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