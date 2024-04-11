import Image from 'next/image'
import React from 'react'
import Button from './Button'
import ButtonSecondary from './ButtonSecondary'
import { handleScrollToElement } from './Navbar'


const HeroDescription = () => {

  return (
    <div className="lg:max-w-lg z-20">
      <Image src="/mosaicosloganprancheta.png" alt="Mosaico Genética" width={500} height={500} priority className="h-auto hidden lg:block w-full select-none" />
      <Image src="/slogan-mosaico.png" alt="Mosaico Genética" width={500} height={500} priority className="h-auto hidden max-lg:block w-full select-none" />
      <p className="text-base lg:text-xl font-medium text-gray-600 max-w-2xl text-center text-balance tracking-wide mt-5 lg:mt-10">
        Um consultório médico dedicado ao diagnóstico, acompanhamento e aconselhamento genético de famílias com doenças raras.
        <br />
        <br />
        Atendimento de genética médica presencial em Brasília (DF) e online em todo o Brasil.
      </p>
      <div className='flex lg:flex-row flex-col justify-center gap-5 lg:gap-10 mt-5 lg:mt-10'>
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