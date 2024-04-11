'use client'
import React from "react";

// Sections
import AboutSection from "./components/AboutSection";
import ServicesSection from "./components/ServicesSection";
import HeroSection from "./components/HeroSection";

import { motion, useScroll, useSpring } from "framer-motion"


export default function Home() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  })
  return (
    <>
      <motion.div className="progress-bar z-50 " style={{ scaleX }} />
      <main className="selection:bg-[#82a170]">
        <HeroSection />
        <AboutSection />
        <ServicesSection />
      </main>
    </>
  );
}
