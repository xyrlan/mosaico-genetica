import React from 'react'
import ButtonSecondary from './ButtonSecondary'
import { handleScrollToElement } from './Navbar'
import AgendarConsulta from './AgendarConsulta'
import { motion } from 'framer-motion'
import { ArrowRight, MapPin } from 'lucide-react'
import Link from 'next/link'

const HeroDescription = () => {

  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ ease: 'easeOut', duration: 1 }}
      className="max-w-lg z-20 max-h-screen">
      <div className='flex justify-center max-lg:mt-10 mt-10 relative'>
        <motion.div
          initial={{ scaleY: 1 }}
          whileInView={{ scaleY: 0 }}
          transition={{ ease: 'easeOut', duration: 1, delay: 0.5 }}
          className='w-full h-full absolute bottom-0 bg-gray-50 origin-top' />
        <h1 className='font-semibold text-3xl md:text-3xl lg:text-4xl 3xl:text-5xl drop-shadow-lg text-[#7fc2d2] mb-1'>
          Dr. Fabrício Maciel <span className='sr-only'>Mosaico Genetica</span> <span className='sr-only'>Atendimento em todo o Brasil e presencialmente em Brasilia - DF </span>
        </h1>
      </div>
      <p className='text-center max-lg:text-base text-xl font-semibold text-[#7fc2d2] brightness-90'>Médico Geneticista em Brasília</p>
      <div className='flex gap-2 items-center justify-center text-gray-500'>
        <p className='text-xs'>CRM 31124</p>
        |
        <p className='text-xs'>RQE 22393</p>
      </div>
      <br />
      <div className=' flex items-center justify-center' >
        <Link className='text-sm text-gray-500 hover:text-[#7fc2d2] duration-300 transition-all flex items-center gap-2 w-fit' href={'https://www.google.com/maps/place/Dr.+Fabr%C3%ADcio+Maciel,+M%C3%A9dico+Geneticista+Bras%C3%ADlia/@-15.7918019,-47.8917543,17.04z/data=!4m6!3m5!1s0x935a39b3c89c5d11:0xb1cebe83250b16ac!8m2!3d-15.7933292!4d-47.8930172!16s%2Fg%2F11vwwmcrxs?hl=pt-BR&entry=ttu&g_ep=EgoyMDI1MDIwNS4xIKXMDSoASAFQAw%3D%3D'} target='_blank'>
          <MapPin size={20} />
          Brasília - DF
        </Link>
      </div>
      <h1 className='sr-only'>Mosaico Genética Médica</h1>
      <p className="text-base lg:text-lg 3xl:text-xl font-medium text-gray-700 max-w-2xl text-center text-balance tracking-wide md:my-8  max-lg:px-4">
        Aconselhamento, Diagnóstico e Acompanhamento Genético Adulto e Infantil.
        <br />
        <br />
        <span className='font-medium text-gray-700'>Atendemos Presencial e Online em todo o Brasil</span>
      </p>
      <div className='flex lg:flex-row flex-col justify-center gap-4 md:gap-7 lg:gap-10 mt-5 lg:mt-10 max-lg:px-4'>
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