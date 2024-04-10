'use client'
import Head from "next/head";
import Image from "next/image";
import Script from "next/script";
import { motion } from "framer-motion"

export default function Home() {
  return (
    <>
      <Script type="module" crossOrigin="anonymous" src="https://unpkg.com/@splinetool/viewer@1.0.93/build/spline-viewer.js"></Script>
      <main className="flex min-h-screen p-4 md:p-24 relative ">

        <div className="z-30">
          {/* <h1 className="text-5xl sm:text-6xl lg:text-8xl font-extrabold text-gray-900 ">mosaico Genética</h1> */}
          <Image src="/slogan-mosaico.png" alt="Mosaico Genética" width={800} height={800} priority className="w-auto h-auto" />
          <p className="text-lg md:text-xl text-gray-700 max-w-2xl text-center text-balance">
            Um consultório médico dedicado ao diagnóstico, acompanhamento e aconselhamento genético de famílias com doenças raras.
            <br/>
            Atendimento de genética médica presencial em Brasília (DF) e online em todo o Brasil.
          </p>
        </div>

        <motion.div initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="h-full w-full md:w-1/2 flex-none z-10 opacity-100 max-md:opacity-20 right-0 top-0 absolute">
          <spline-viewer url="https://prod.spline.design/7qKeFzcwV5yLrtkF/scene.splinecode"></spline-viewer>
          <div className="absolute bottom-4 right-2 bg-gray-50 h-10 w-40 z-20  " />
        </motion.div>

      </main>
    </>
  );
}
