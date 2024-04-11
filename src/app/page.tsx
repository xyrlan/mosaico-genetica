'use client'
import React from "react";
// Sections
import HeroSection from "./components/HeroSection";
import SplineViewer from "./components/SplineViewer";
import AboutSection from "./components/AboutSection";
import ServicesSection from "./components/ServicesSection";


export default function Home() {
  return (
    <>
      <main role="main" className="flex items-center min-h-screen p-4 py-20 md:p-24 relative overflow-hidden ">
        <HeroSection />
        <SplineViewer />
      </main>
      <AboutSection />
      <ServicesSection />
    </>
  );
}
