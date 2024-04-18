'use client'
import ButtonSecondary from '@/app/components/ButtonSecondary'
import { handleScrollToElement } from '@/app/components/Navbar'
import { ArrowRight } from 'lucide-react'
import Image from 'next/image'
import React from 'react'
import { motion } from 'framer-motion';
import LinksComponents from '@/app/components/LinksComponents'

export default function AboutHeroSection() {
  return (
    <div className='min-h-screen px-4 lg:py-24 py-28 flex lg:flex-row flex-col items-center justify-around relative gap-20 drop-shadow-lg overflow-hidden'>
      <div className='lg:h-[10%] h-[7%] w-full bg-[#f5eaf0] absolute lg-top-32 top-28 -z-10 ' />
      <div className='h-1/2 lg:w-1/2 w-1/3 bg-[#f5eaf0] absolute lg:top-32 right-0 -z-10 ' />
      <div className='flex flex-col w-full'>
        <motion.div
          initial={{ opacity: 0, x: -200 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className='self-center max-w-xl flex flex-col'>
          <p className='max-lg:text-sm'>CONHEÇA MAIS</p>
          <h1 className='font-semibold text-2xl md:text-3xl lg:text-5xl 3xl:text-6xl drop-shadow-lg '>
            Dr. Fabrício Maciel Soares
          </h1>
          <p className='self-end max-lg:text-sm'>GENETICISTA MÉDICO</p>
        </motion.div>
        <motion.p
          initial={{ opacity: 0, y: 200 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className='max-w-xl text-balance text-center text-gray-700 max-lg:mt-14 mt-7 self-center font-medium'>Na Mosaico, meu objetivo é trazer a expertise adquirida ao longo desses anos de formação para criar um espaço acolhedor, onde as famílias encontrem não apenas um profissional, mas um parceiro dedicado em suas jornadas genéticas.</motion.p>
        <motion.div
          initial={{ opacity: 0, y: 200 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className='self-center mt-12'>
          <ButtonSecondary onClick={() => handleScrollToElement('trajetoria')} >Conhecer minha trajetória <ArrowRight className='group-hover:rotate-90 transition-all duration-200' /></ButtonSecondary>
          <LinksComponents />
        </motion.div>
      </div>
      <motion.div
        initial={{ opacity: 0, x: 300 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className="relative rounded w-full">
        <Image src="/fabi2.jpg" alt="Doutor Fabricio" width={638} height={850} className="w-full h-full max-w-[638px] max-h-[851px] rounded hover:scale-105 duration-300 transition-all select-none shadow-lg hover:shadow-2xl object-cover " priority />
        <motion.div
          initial={{ opacity: 0, x: 200, y: 100 }}
          whileInView={{ opacity: 1, x: 48, y: 24 }}
          className='absolute h-full w-full bg-[#d9edf2] translate-x-12 -translate-y-8 bottom-0 -z-10 shadow-xl' />
      </motion.div>
    </div>
  )
}
