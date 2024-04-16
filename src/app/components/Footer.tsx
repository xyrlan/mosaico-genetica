'use client'
import Image from 'next/image'
import React from 'react'
import { handleScrollToElement } from './Navbar'
import LinksComponents from './LinksComponents'
import CopyCredits from './CopyCredits'
import AgendarConsulta from './AgendarConsulta'

const Footer = () => {

  const navItems = [
    { id: 1, name: 'Início', href: 'hero' },
    { id: 2, name: 'Nosso Especialista', href: 'nosso-especialista' },
    { id: 3, name: 'Serviços', href: 'servicos' },
    { id: 4, name: 'Contato', href: 'contato' },
  ]

  return (
    <footer className="bg-[#cbe7ed] border border-gray-300 ">
      <div className="mx-auto max-w-5xl px-4 py-4 lg:py:8 2xl:py-16 sm:px-6 lg:px-8">
        <div className="flex justify-center text-teal-600">
          <Image src="/slogan-mosaico.png" alt="logo" width={200} height={200} />
        </div>

        <p className="mx-auto mt-6 max-w-md text-center leading-relaxed text-gray-500">
          Um consultório médico dedicado ao diagnóstico, acompanhamento e aconselhamento genético de famílias.
        </p>

        <ul className="mt-12 flex flex-wrap items-center justify-center gap-6 md:gap-8 lg:gap-12">
          {navItems.map((item) => (
            <li key={item.id} onClick={() => handleScrollToElement(item.href)} className='select-none cursor-pointer'>
              <p className='text-gray-500 hover:text-black duration-300 transition-all font-semibold tracking-tight  '>{item.name}</p>
            </li>
          ))}
          <li>
            <AgendarConsulta />
          </li>
        </ul>

        <LinksComponents />
        <CopyCredits />
      </div>
    </footer>
  )
}

export default Footer