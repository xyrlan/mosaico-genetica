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
    <div className='min-h-[88vh] px-4 pt-6 lg:pt-10 pb-16 lg:pb-24 flex lg:flex-row flex-col items-center justify-around relative gap-12 lg:gap-20 drop-shadow-lg overflow-hidden'>
      <div className='hidden lg:block h-1/2 w-1/2 bg-[#f5eaf0] absolute top-1/4 right-0 -z-10 rounded-l' />
      <div className='lg:hidden h-[40%] w-full bg-[#f5eaf0]/60 absolute top-1/3 left-0 -z-10' />
      <div className='flex flex-col w-full'>
        <motion.div
          initial={{ opacity: 0, x: -200 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className='self-center max-w-xl flex flex-col'>
          <p className='max-lg:text-sm'>CONHEÇA MAIS</p>
          <h1 className='font-semibold text-[#1e3a8a] text-2xl md:text-3xl lg:text-4xl xl:text-5xl drop-shadow-lg leading-tight'>
            Dr. Fabrício Maciel Soares
          </h1>
          <p className='self-end max-lg:text-sm'>MÉDICO GENETICISTA — CRM-DF 31124 / RQE 22393</p>
        </motion.div>
        <motion.p
          initial={{ opacity: 0, y: 200 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className='max-w-xl text-balance text-center text-gray-700 max-lg:mt-14 mt-7 self-center font-medium'>Dr. Fabrício Maciel Soares é médico geneticista (CRM-DF 31124 / RQE 22393) com residência em Genética Médica pelo Hospital de Clínicas de Porto Alegre (HCPA) e mestrado em Neurogenética pela Universidade Federal do Rio Grande do Sul (UFRGS). Atua na Mosaico Genética, consultório especializado em Brasília-DF, com foco em diagnóstico de doenças raras, doenças neuromusculares, autismo, oncogenética e aconselhamento genético reprodutivo. Atende presencialmente em Brasília e por telemedicina em todo o Brasil. Fluente em português e inglês.</motion.p>
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
        <Image src="/fabi2.jpeg" alt="Dr. Fabrício Maciel, médico geneticista em Brasília" width={638} height={850} sizes="(min-width: 1024px) 480px, 100vw" className="w-full h-auto max-w-[480px] lg:max-w-[520px] rounded hover:scale-105 duration-300 transition-all select-none shadow-lg hover:shadow-2xl object-cover brightness-110" priority />
        <motion.div
          initial={{ opacity: 0, x: 200, y: 100 }}
          whileInView={{ opacity: 1, x: 48, y: 24 }}
          className='absolute h-full w-full bg-[#d9edf2] translate-x-12 -translate-y-8 bottom-0 -z-10 shadow-xl' />
      </motion.div>
    </div>
  )
}
