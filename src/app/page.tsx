'use client'
import React, { Suspense } from "react";

// Lazy load sections
const HeroSection = React.lazy(() => import("./components/HeroSection"));
const AboutSection = React.lazy(() => import("./components/AboutSection"));
const ServicesSection = React.lazy(() => import("./components/ServicesSection"));
const CallSection = React.lazy(() => import("./components/CallSection"));

import Image from "next/image";

export default function Home() {

  return (
    <>

      <Suspense fallback={
        <div className="fixed inset-0 bg-[#e5f3f6] bg-opacity-90 backdrop-blur-lg flex items-center justify-center z-50">
          <Image src="/mosaicoico.png" alt="loading" width={100} height={100} className='animate-pulse' />
        </div>
      }>
        <main>
          <HeroSection />
        </main>
        <AboutSection />
        <ServicesSection />
        <CallSection />
      </Suspense>
    </>
  );
}