import { Hospital, Wifi } from 'lucide-react'
import React, { } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import H2 from './H2'
import Button from './Button'
import ButtonSecondary from './ButtonSecondary'
const AboutSection = () => {

  return (
    <motion.section
      id="nosso-especialista"
      className="min-h-screen flex items-center relative py-24  ">
      <div className="max-w-6xl mx-auto z-10">

        <div className="flex lg:flex-row flex-col justify-between items-center gap- lg:gap-20  ">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="max-lg:block hidden relative w-full h-full rounded-full overflow-hidden">
            <Image src="/fabricio2.png" alt="Especialista" width={700} height={700} className="w-full h-full hover:scale-105 duration-300 transition-all select-none shadow-lg hover:shadow-2xl " />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ ease: 'easeOut', duration: 1 }}
            className="flex items-center flex-col w-full p-5 lg:p-10 ">
            <H2>
              Fabrício Maciel, MD, MSc
            </H2>
            <p className="text-center text-gray-500 mt-8 text-base xl:text-lg font-medium">
              {/* Meu caminho na medicina começou na Universidade Federal do Maranhão, onde mergulhei no estudo da complexidade humana e na busca pela compreensão das intrincadas peças que formam a vida.
              <br />
              <br />
              Fiz Genética Médica no Hospital de Clínica de Porto Alegre, onde pude explorar todas as áreas da genética clínica, moldando minha visão sobre como oferecer suporte integral às famílias enfrentando desafios genéticos.
              <br />
              <br />
              Fortaleci minha paixão pelos mistérios genéticos ao concluir meu mestrado em Neurogenética pela Universidade Federal do Rio Grande do Sul.
              <br />
              <br /> */}
              Na Mosaico, meu objetivo é trazer a expertise adquirida ao longo desses anos de formação para criar um espaço acolhedor, onde as famílias encontrem não apenas um profissional, mas um parceiro dedicado em suas jornadas genéticas.
            </p>
            <ButtonSecondary>Mais sobre mim</ButtonSecondary>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="lg:block hidden relative shadow-lg hover:shadow-2xl overflow-hidden rounded-full ">
            <Image src="/fabricio2.png" alt="Especialista" width={700} height={700} className="w-full h-full hover:scale-105 duration-300 transition-all select-none shadow-lg hover:shadow-2xl " />
          </motion.div>
        </div>

        <div className=" flex lg:flex-row flex-col justify-between items-center gap-5 lg:gap-20 max-lg:mt-5 mt-20">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="relative shadow-lg hover:shadow-2xl rounded-full overflow-hidden">
            <Image src="/atendimento.png" alt="foto-atendimento" width={700} height={700} className="w-full h-full hover:scale-105 duration-300 transition-all select-none shadow-lg hover:shadow-2xl" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ ease: 'easeOut', duration: 1 }}
            className="flex items-center flex-col w-full p-5 lg:p-10 ">
            <H2>
              Atendimento onde você estiver
            </H2>
            <h3 className=" text-lg xl:text-2xl font-semibold text-center mt-8 inline-flex items-center gap-4">
              <div className='inline-flex items-center gap-2'>
                <Wifi />
                Online
              </div>
              e
              <div className='inline-flex items-center gap-2'>
                <Hospital />
                Presencial
              </div>
            </h3>
            <p className="text-center text-gray-500 mt-8 text-base xl:text-lg font-medium">
              Estendemos nosso compromisso de cuidado a todo o Brasil, proporcionando suporte especializado e acolhimento a famílias em cada canto do país, porque acreditamos que nenhuma jornada genética deve ser percorrida sozinho.
            </p>
            <Button>Agendar consulta</Button>
          </motion.div>
        </div>



      </div>

    </motion.section>
  )
}

export default AboutSection