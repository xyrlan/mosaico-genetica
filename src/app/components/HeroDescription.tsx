import Image from 'next/image'
import React from 'react'
import Button from './Button'
import ButtonSecondary from './ButtonSecondary'
import { handleScrollToElement } from './Navbar'


const HeroDescription = () => {
  
  return (
    <div className="container max-w-2xl z-20">
      <div className='flex justify-center'>
      <Image src="/mosaicosloganprancheta.png" alt="Mosaico Genética" width={800} height={800} priority className="md:w-2/3 h-auto select-none" />
      </div>
      <p className="text-lg md:text-xl font-medium text-gray-600 max-w-2xl text-center text-balance tracking-wide mt-10">
        Um consultório médico dedicado ao diagnóstico, acompanhamento e aconselhamento genético de famílias com doenças raras.
        <br />
        <br />
        Atendimento de genética médica presencial em Brasília (DF) e online em todo o Brasil.
      </p>
      <div className='flex md:flex-row flex-col justify-center gap-10 mt-10'>
        <Button>
          Agendar consulta
        </Button>
        <div onClick={() => handleScrollToElement('nosso-especialista')} className='select-none cursor-pointer'>
          <ButtonSecondary>
            Conheça nosso especialista
          </ButtonSecondary>
        </div>
      </div>
    </div>
  )
}

export default HeroDescription