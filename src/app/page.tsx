'use client'
import React, { Suspense } from "react";

// Lazy load sections
const HeroSection = React.lazy(() => import("./components/HeroSection"));
const AboutSection = React.lazy(() => import("./components/AboutSection"));
const ServicesSection = React.lazy(() => import("./components/ServicesSection"));
const CallSection = React.lazy(() => import("./components/CallSection"));

import { motion, useScroll } from "framer-motion"
import useMediaQuery from "./utils/useMediaQuery";
import Image from "next/image";

export default function Home() {
  const { scrollYProgress } = useScroll();
  const isLargeScreen = useMediaQuery('(min-width: 1024px)');

  return (
    <>
      {
        isLargeScreen && (
          <motion.div className="progress-bar max-lg:sr-only z-50" style={{ scaleX: scrollYProgress }} />
        )
      }
      <Suspense fallback={
        <div className="fixed inset-0 bg-[#e5f3f6] bg-opacity-90 backdrop-blur-lg flex items-center justify-center z-50">
          <Image src="/mosaicoico.png" alt="loading" width={100} height={100} className='animate-pulse' />
        </div>
      }>
        <main className="selection:bg-[#82a170]">
          <HeroSection />
          <AboutSection />
          <ServicesSection />
          <CallSection />
        </main>
      </Suspense>
    </>
  );
}