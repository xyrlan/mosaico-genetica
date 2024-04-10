'use client'
import Image from "next/image";
import { motion } from "framer-motion"

export default function Home() {
  return (
    <>
      <main className="flex items-center min-h-screen p-4 md:p-24 relative overflow-hidden ">
        <script type="module" intersection-observer="true" src="https://unpkg.com/@splinetool/viewer@1.0.93/build/spline-viewer.js" async></script>
        <div className="z-30">
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <Image src="/slogan-mosaico.png" alt="Mosaico Genética" width={800} height={800} priority className="w-auto h-auto" />
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1 }}
            className="text-lg md:text-xl font-medium text-gray-600 max-w-2xl text-center text-balance">
            Um consultório médico dedicado ao diagnóstico, acompanhamento e aconselhamento genético de famílias com doenças raras.
            <br />
            Atendimento de genética médica presencial em Brasília (DF) e online em todo o Brasil.
          </motion.p>
        </div>

        <motion.div
          initial={{ x: 800 }}
          whileInView={{ x: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          viewport={{ once: true }}
          className="h-full w-full md:w-1/2 flex-none z-10 max-md:opacity-20 right-0 top-0 absolute">
          <spline-viewer url="https://prod.spline.design/7qKeFzcwV5yLrtkF/scene.splinecode"></spline-viewer>
          <div className="absolute bottom-4 right-2 bg-gray-50 h-10 w-40 z-20  " />
        </motion.div>

      </main>
    </>
  );
}
