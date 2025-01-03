import Image from 'next/image'
import React from 'react'
import ButtonSecondary from './ButtonSecondary'
import { handleScrollToElement } from './Navbar'
import AgendarConsulta from './AgendarConsulta'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'


const HeroDescription = () => {

  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ ease: 'easeOut', duration: 1 }}
      className="max-w-lg z-20 max-h-screen">
      <div className='flex justify-center max-lg:mt-16 relative'>
        <motion.div
          initial={{ scaleY: 1 }}
          whileInView={{ scaleY: 0 }}
          transition={{ ease: 'easeOut', duration: 1, delay: 0.5 }}
          className='w-full h-full absolute bottom-0 bg-gray-50 origin-top' />
          <h1 className='font-semibold text-3xl md:text-3xl lg:text-5xl 3xl:text-6xl drop-shadow-lg text-[#7fc2d2] '>
            Dr. Fabrício Maciel 
          </h1>
        {/* <Image src="/mosaicoazul.png" alt="Mosaico Genética" width={300} height={86} priority className="h-auto w-auto max-3xl:max-h-[300px] select-none" /> */}
      </div>
      <p className='text-center max-lg:text-base text-xl font-semibold text-gray-700'>Médico Geneticista em Brasília</p>

      <h1 className='sr-only'>Mosaico Genética Médica</h1>
      <p className="text-base lg:text-xl 3xl:text-2xl font- text-gray-700 max-w-2xl text-center text-balance tracking-wide mt-5 max-lg:px-4">
        Aconselhamento, Diagnóstico e Acompanhamento Genético Adulto e Infantil.
        <br />

        <span className='font-semibold'>Atendimento Presencial e Online em todo o Brasil</span>
      </p>
      <div className='flex lg:flex-row flex-col justify-center gap-7 lg:gap-10 mt-5 lg:mt-10 max-lg:px-4'>
        <AgendarConsulta />

        <ButtonSecondary onClick={() => handleScrollToElement('sobre')}>
          Conheça nosso especialista
          <ArrowRight className='group-hover:rotate-90 transition-all duration-200 h-5 w-5' />
        </ButtonSecondary>

      </div>
    </motion.div>
  )
}

export default HeroDescription