import Image from 'next/image'
import React from 'react'
import ButtonSecondary from './ButtonSecondary'
import { handleScrollToElement } from './Navbar'
import AgendarConsulta from './AgendarConsulta'
import { motion } from 'framer-motion'


const HeroDescription = () => {

  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ ease: 'easeOut', duration: 1 }}
      className="max-w-lg z-20 ">
      <div className='flex justify-center max-lg:hidden relative'>
        <motion.div
          initial={{ scaleY: 1 }}
          whileInView={{ scaleY: 0 }}
          transition={{ ease: 'easeOut', duration: 1, delay: 0.5 }}
          className='w-full h-full absolute bottom-0 bg-gray-50 origin-top' />
        <Image src="/mosaicoazul.png" alt="Mosaico Genética" width={400} height={400} priority className="h-auto w-auto max-3xl:max-h-[300px] select-none" />
      </div>
      <h1 className='sr-only'>Mosaico Genética Médica</h1>
      <p className="text-base lg:text-xl 3xl:text-2xl font-medium text-gray-700 max-w-2xl text-center text-balance tracking-wide mt-5 max-lg:px-4">
        Um consultório médico dedicado ao diagnóstico, acompanhamento e aconselhamento genético de famílias.
        <br />
        <br />
        Atendimento de genética médica presencial em Brasília (DF) e online em todo o Brasil.
      </p>
      <div className='flex lg:flex-row flex-col justify-center gap-7 lg:gap-10 mt-5 lg:mt-10 max-lg:px-4'>
        <AgendarConsulta />
        <ButtonSecondary onClick={() => handleScrollToElement('nosso-especialista')}>
          Conheça nosso especialista
        </ButtonSecondary>

      </div>
    </motion.div>
  )
}

export default HeroDescription