'use client'
import React from "react";

// Sections
import AboutSection from "./components/AboutSection";
import ServicesSection from "./components/ServicesSection";
import HeroSection from "./components/HeroSection";

import { motion, useScroll } from "framer-motion"


export default function Home() {
  const { scrollYProgress } = useScroll();
  return (
    <>
      <motion.div className="progress-bar z-50 " style={{ scaleX: scrollYProgress }} />
      <main className="selection:bg-[#82a170]">
        <HeroSection />
        <AboutSection />
        <ServicesSection />
      </main>
    </>
  );
}
