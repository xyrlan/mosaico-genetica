'use client'
import React from "react";

// Sections
import AboutSection from "./components/AboutSection";
import ServicesSection from "./components/ServicesSection";
import HeroSection from "./components/HeroSection";

import { motion, useScroll, useSpring } from "framer-motion"
import CallSection from "./components/CallSection";
import useMediaQuery from "./utils/useMediaQuery";


export default function Home() {
  const { scrollYProgress } = useScroll();
  const isLargeScreen = useMediaQuery('(min-width: 1024px)');

  return (
    <>
      {
        isLargeScreen && (
          <motion.div className="progress-bar z-50" style={{ scaleX: scrollYProgress }} />
        )
      }
      <main className="selection:bg-[#82a170]">
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <CallSection />
      </main>
    </>
  );
}
