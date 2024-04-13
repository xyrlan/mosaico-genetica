import Image from 'next/image'
import React from 'react'
import Button from './Button'
import ButtonSecondary from './ButtonSecondary'
import { handleScrollToElement } from './Navbar'


const HeroDescription = () => {

  return (
    <div className="lg:max-w-lg z-20">
      <div className='flex justify-center'>
        <Image src="/slogan-mosaico.png" alt="Mosaico Genética" width={300} height={300} priority className="h-auto w-auto hidden lg:block  select-none" />
      </div>
   
      <p className="text-base lg:text-xl 2xl:text-2xl font-medium text-gray-700 max-w-2xl text-center text-balance tracking-wide mt-5 xl:mt-5">
        Um consultório médico dedicado ao diagnóstico, acompanhamento e aconselhamento genético de famílias.
        <br />
        <br />
        Atendimento de genética médica presencial em Brasília (DF) e online em todo o Brasil.
      </p>
      <div className='flex lg:flex-row flex-col justify-center lg:gap-10 mt-5 lg:mt-10'>
        <Button>
          Agendar consulta
        </Button>

        <ButtonSecondary onClick={() => handleScrollToElement('nosso-especialista')}>
          Conheça nosso especialista
        </ButtonSecondary>

      </div>
    </div>
  )
}

export default HeroDescription