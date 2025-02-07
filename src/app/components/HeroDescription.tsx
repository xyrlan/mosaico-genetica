import Image from 'next/image'
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
      <div className='flex justify-center max-lg:mt-16 relative'>
        <motion.div
          initial={{ scaleY: 1 }}
          whileInView={{ scaleY: 0 }}
          transition={{ ease: 'easeOut', duration: 1, delay: 0.5 }}
          className='w-full h-full absolute bottom-0 bg-gray-50 origin-top' />
        <h1 className='font-semibold text-3xl md:text-3xl lg:text-5xl drop-shadow-lg text-[#7fc2d2] mb-1'>
          Dr. Fabrício Maciel
        </h1>
        {/* <Image src="/mosaicoazul.png" alt="Mosaico Genética" width={300} height={86} priority className="h-auto w-auto max-3xl:max-h-[300px] select-none" /> */}
      </div>
      <p className='text-center max-lg:text-base text-xl font-semibold text-[#7fc2d2] brightness-90'>Médico Geneticista em Brasília</p>
      <div className='flex gap-2 items-center justify-center text-gray-500'>
        <p className='text-xs'>CRM 31124</p>
        |
        <p className='text-xs'>RQE 22393</p>
      </div>
      <br />
      <Link href={'https://www.google.com/maps/dir//Biosphere+-+Bloco+G+-+Lote+09,+Shln+-+Asa+Norte,+Bras%C3%ADlia+-+DF,+70770-560/@-15.7347274,-47.8950968,16z/data=!4m9!4m8!1m0!1m5!1m1!1s0x935a398fcc35baab:0x63994bb0af3e39df!2m2!1d-47.8942142!2d-15.7361804!3e0?entry=ttu'} target='_blank'>
        <span className='text-sm text-gray-500 hover:text-[#7fc2d2]  flex items-center gap-2 justify-center duration-300 transition-all '><MapPin size={20} />Brasília - DF</span>
      </Link>
      <h1 className='sr-only'>Mosaico Genética Médica</h1>
      <p className="text-base lg:text-lg 3xl:text-xl font-medium text-gray-700 max-w-2xl text-center text-balance tracking-wide md:my-12 xl:my-16 my-10 max-lg:px-4">
        Aconselhamento, Diagnóstico e Acompanhamento Genético Adulto e Infantil.
        <br />
        <br />
        <span className='font-medium text-gray-700'>Atendemos Presencial e Online em todo o Brasil</span>
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