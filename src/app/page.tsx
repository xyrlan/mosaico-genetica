'use client'
import React from "react";
import HeroSection from "./components/HeroSection";
import Image from "next/image";
import SplineViewer from "./components/SplineViewer";


export default function Home() {
  return (
    <>
      <main role="main" className="flex items-center min-h-screen p-4 md:p-24 relative overflow-hidden ">
        <HeroSection />
        <SplineViewer />
      </main>
      <section id="nosso-especialista" className=" min-h-screen flex items-center z-50">
        <div className="container mx-auto flex md:flex-row flex-col justify-between gap-10">
          <div className="w-full h-full rounded-t-full rounded-l-full drop-shadow-lg overflow-hidden ">
            <Image src="/Fabricio.jpg" alt="Especialista" width={700} height={700} className="w-auto h-auto object-contain  hover:scale-105 duration-300 transition-all" />
          </div>
          <div className="flex items-center flex-col w-full p-10">
            <h2 className="text-3xl font-semibold text-center">
              Fabrício Maciel, MD, MSc
            </h2>
            <p className="text-center text-gray-500 mt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod, ligula auctor aliquet.</p>
          </div>
        </div>

      </section>
    </>
  );
}
