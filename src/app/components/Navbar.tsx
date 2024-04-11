import Link from 'next/link'
import React from 'react'
import Button from './Button'
import { motion } from "framer-motion"

const Navbar = () => {
  const navItems = [
    { id: 1, name: 'Início', href: '#hero' },
    { id: 2, name: 'Nosso Especialista', href: '#nosso-especialista' },
    { id: 3, name: 'Serviços', href: '#servicos' },
    { id: 4, name: 'Contato', href: '#contato' },
  ]

  return (
    <nav className='hidden md:flex items-center justify-between p-4'>
      <div className="flex items-center gap-10 ">
        {navItems.map((item) => (
          <Link key={item.id} href={item.href} >
            <p className='text-gray-500 hover:text-black duration-300 transition-all font-semibold tracking-tight  '>{item.name}</p>
          </Link>
        ))}
        <button className='h-12 px-5 py-1.5 bg-[#7fc2d2] hover:bg-[#63b4c9] duration-200 text-white font-medium rounded-full'>
          Agendar consulta
        </button>
      </div>
    </nav>
  )
}

export default Navbar