import Image from 'next/image'
import React from 'react'
import { motion } from "framer-motion"
import SplineViewer from './SplineViewer'
import Button from './Button'
import ButtonSecondary from './ButtonSecondary'
import Link from 'next/link'


const HeroSection = () => {
  return (
    <section id='hero' className="z-30 container w-full flex flex-col items-center">
      <Image src="/mosaicosloganprancheta.png" alt="Mosaico Genética" width={800} height={800} priority className="w-auto h-auto" />
      <p className="text-lg md:text-xl font-medium text-gray-600 max-w-2xl text-center text-balance tracking-wide mt-10">
        Um consultório médico dedicado ao diagnóstico, acompanhamento e aconselhamento genético de famílias com doenças raras.
        <br />
        <br />
        Atendimento de genética médica presencial em Brasília (DF) e online em todo o Brasil.
      </p>
      <div className='w-full flex md:flex-row flex-col justify-center gap-10 mt-10'>
        <Button>
          Agendar consulta
        </Button>
        <Link href='#nosso-especialista'>
          <ButtonSecondary>
            Conheça nosso especialista
          </ButtonSecondary>
        </Link>
      </div>
    </section>
  )
}

export default HeroSection