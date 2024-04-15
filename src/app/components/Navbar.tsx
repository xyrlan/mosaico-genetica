import { ArrowUpRightIcon } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

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
    <nav className='hidden md:flex items-center justify-between p-2 2xl:p-4'>
      <div className="flex items-center gap-10 ">
        {navItems.map((item) => (
          <div key={item.id} onClick={() => handleScrollToElement(item.href)} className='select-none cursor-pointer'>
            <p className='text-gray-500 hover:text-black duration-300 transition-all font-semibold tracking-tight  '>{item.name}</p>
          </div>
        ))}
        <Link href={'https://wa.me/5561998570759'} target='_blank' className='group'>
          <button className={`h-12 px-5 py-1.5 duration-200 text-white font-medium rounded-full select-none text-sm ${props.scroll ? 'bg-[#7fc2d2] hover:bg-[#63b4c9]' : 'bg-gray-500'}`}>
            <div className='inline-flex gap-3 items-center'>
              Agendar Consulta
              <ArrowUpRightIcon className='group-hover:translate-x-1 group-hover:-translate-y-1 duration-200 transition-all' size={20} />
            </div>
          </button>
        </Link>
      </div>
    </nav>
  )
}

export default Navbar