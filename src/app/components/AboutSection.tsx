import { Hospital, Wifi } from 'lucide-react'
import React, { } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
const AboutSection = () => {

  return (
    <motion.section
      id="nosso-especialista"
      className="min-h-screen flex items-center relative py-24  ">
      <div className="container mx-auto z-10">

        <div className="flex lg:flex-row flex-col justify-between items-center gap-5 lg:gap-10  ">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ ease: 'easeOut', duration: 1 }}
            className="max-lg:block hidden relative w-full h-full shadow-lg hover:shadow-2xl overflow-hidden duration-300 transition-all rounded ">
            <Image src="/fabricio2.png" alt="Especialista" width={700} height={700} className="w-full h-full hover:scale-105 duration-300 transition-all select-none " />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ ease: 'easeOut', duration: 1 }}
            className="flex items-center flex-col w-full p-5 lg:p-10">
            <h2 className="text-4xl font-semibold text-center">
              Fabrício Maciel, MD, MSc
            </h2>
            <p className="text-center text-gray-500 mt-8 text-lg font-medium">
              Meu caminho na medicina começou na Universidade Federal do Maranhão, onde mergulhei no estudo da complexidade humana e na busca pela compreensão das intrincadas peças que formam a vida.
              <br />
              <br />
              Fiz Genética Médica no Hospital de Clínica de Porto Alegre, onde pude explorar todas as áreas da genética clínica, moldando minha visão sobre como oferecer suporte integral às famílias enfrentando desafios genéticos.
              <br />
              <br />
              Fortaleci minha paixão pelos mistérios genéticos ao concluir meu mestrado em Neurogenética pela Universidade Federal do Rio Grande do Sul.
              <br />
              <br />
              Na Mosaico, meu objetivo é trazer a expertise adquirida ao longo desses anos de formação para criar um espaço acolhedor, onde as famílias encontrem não apenas um profissional, mas um parceiro dedicado em suas jornadas genéticas.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.8 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ ease: 'easeOut', duration: 1 }}
            className="lg:block hidden relative w-full h-full shadow-lg hover:shadow-2xl overflow-hidden duration-300 transition-all rounded ">
            <Image src="/fabricio2.png" alt="Especialista" width={700} height={700} className="w-full h-full hover:scale-105 duration-300 transition-all select-none " />
          </motion.div>
        </div>

        <div className=" flex lg:flex-row flex-col justify-between items-center gap-5 lg:gap-10 max-lg:mt-5">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ ease: 'easeOut', duration: 1 }}
            className="relative w-full h-full shadow-lg hover:shadow-2xl overflow-hidden duration-300 transition-all rounded">
            <Image src="/atendimento.png" alt="foto-atendimento" width={700} height={700} className="w-full h-full hover:scale-105 duration-300 transition-all select-none" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ ease: 'easeOut', duration: 1 }}
            className="flex items-center flex-col w-full p-5 lg:p-10 ">
            <h2 className="text-4xl font-semibold text-center">
              Atendimento onde você estiver
            </h2>
            <h3 className="text-2xl font-semibold text-center mt-8 inline-flex items-center gap-2">
              <Wifi />
              Online
            </h3>
            <p className="text-center text-gray-500 mt-8 text-lg font-medium">
              O atendimento online é realizado por videochamada.
            </p>
            <h3 className="text-2xl font-semibold text-center mt-8 inline-flex items-center gap-2">
              <Hospital />
              Presencial
            </h3>
            <p className="text-center text-gray-500 mt-8 text-lg font-medium">
              A consulta presencial é realizada no Hospital ... - Brasília.
            </p>
          </motion.div>
        </div>



      </div>

    </motion.section>
  )
}

export default AboutSection