'use client'
import Image from 'next/image'
import React from 'react'
import { handleScrollToElement } from './Navbar'
import LinksComponents from './LinksComponents'
import CopyCredits from './CopyCredits'
import AgendarConsulta from './AgendarConsulta'
import { motion } from 'framer-motion'
import { usePathname } from 'next/navigation'
import Link from 'next/link'

const Footer = () => {

  const navItems = [
    { id: 1, name: 'Início', href: 'hero' },
    { id: 3, name: 'Serviços', href: 'servicos' },
    { id: 2, name: 'Avaliações', href: 'review' },
    { id: 5, name: 'FAQ', href: 'faq' },
    { id: 4, name: 'Contato', href: 'contato' },
  ]

  const pathname = usePathname()


  return (
    <footer className=" bg-[#cdd9c6] border border-gray-300 relative bg-opacity-30 ">
      {/* <div className={`absolute left-0 opacity-30 bg-repeat bg-[url('https://www.mosaico.med.br/logomosaico.png')] bg-center bg-contain`}></div> */}
      <div className="w-full absolute h-40 left-0 opacity-10 -z-10 bg-repeat bg-[url('https://www.mosaico.med.br/logomosaico.png')] bg-contain"></div>
      <div className="w-full absolute h-40 left-0 opacity-10 bottom-0 -z-10 bg-repeat bg-[url('https://www.mosaico.med.br/logomosaico.png')] bg-contain"></div>

      <div className="mx-auto max-w-5xl px-4 py-4 lg:py:8 3xl:py-16 sm:px-6 lg:px-8">
        <div className="flex justify-center text-teal-600">
          <Image src="/slogan-mosaico.png" alt="logo" width={200} height={77} />
        </div>

        <p className="mx-auto mt-6 max-w-md text-center leading-relaxed text-gray-600 font-medium">
          Um consultório médico dedicado ao diagnóstico, acompanhamento e aconselhamento genético de famílias.
        </p>

        <ul className="mt-12 flex flex-wrap items-center justify-center gap-6 md:gap-8 lg:gap-12">
          {pathname === '/'
            ? navItems.map((item) => (
              <li key={item.id} onClick={() => handleScrollToElement(item.href)} className='select-none cursor-pointer'>
                <p className='text-gray-500 hover:text-[#1e3a8a] duration-300 transition-all font-semibold tracking-tight'>
                  {item.name}
                </p>
              </li>
            ))
            : navItems.map((item) => (
              <li key={item.id} className='select-none cursor-pointer'>
                <Link href={`/#${item.href}`}>
                  <p className='text-gray-500 hover:text-[#1e3a8a] duration-300 transition-all font-semibold tracking-tight'>
                    {item.name}
                  </p>
                </Link>
              </li>
            ))
          }
          <li>
            <Link href={'/sobre'}>
              <p className='text-gray-500 hover:text-[#1e3a8a] duration-300 transition-all font-semibold tracking-tight'>Dr. Fabrício</p>
            </Link>
          </li>
          <li>
            <AgendarConsulta />
          </li>
        </ul>

        <LinksComponents />


        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          whileInView={{ opacity: 1, scale: 1 }}
          className='mt-8'
        >
          <iframe
            allowFullScreen={true}
            className="w-full rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 max-md:max-h-[200px] border-4 border-secondary/5"
            height="300"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1920.1528566795077!2d-47.8982378!3d-15.7349586!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x935a39b3c89c5d11%3A0xb1cebe83250b16ac!2sDr.%20Fabr%C3%ADcio%20Maciel%2C%20M%C3%A9dico%20Geneticista%20Bras%C3%ADlia!5e0!3m2!1spt-BR!2sbr!4v1738937435443!5m2!1spt-BR!2sbr"
            style={{ border: 0 }}
            title="Mosaico Genetica localizacao Google Maps"
            width="600"
          />
        </motion.div>

        <CopyCredits />
      </div>
    </footer>
  )
}

export default Footer