import { ArrowUpRightIcon } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import AgendarConsulta from './AgendarConsulta'

export function handleScrollToElement(id: string) {
  const element = document.getElementById(id)
  element?.scrollIntoView({ behavior: 'smooth' })
}

const Navbar = (props: { scroll: boolean }) => {
  const navItems = [
    { id: 1, name: 'Início', href: 'hero' },
    { id: 2, name: 'Nosso Especialista', href: 'nosso-especialista' },
    { id: 3, name: 'Serviços', href: 'servicos' },
    { id: 4, name: 'Contato', href: 'contato' },
  ]

  return (
    <nav className='hidden md:flex items-center justify-between p-2 3xl:p-4'>
      <div className="flex items-center gap-10 ">
        {navItems.map((item) => (
          <div key={item.id} onClick={() => handleScrollToElement(item.href)} className='select-none cursor-pointer'>
            <p className='text-gray-500 hover:text-black duration-300 transition-all font-semibold tracking-tight  '>{item.name}</p>
          </div>
        ))}
<AgendarConsulta />
      </div>
    </nav>
  )
}

export default Navbar