import Link from 'next/link'
import React from 'react'
import AgendarConsulta from './AgendarConsulta'
import { usePathname, useRouter } from 'next/navigation'

export function handleScrollToElement(id: string) {
  const element = document.getElementById(id)
  element?.scrollIntoView({ behavior: 'smooth' })
}

const Navbar = (props: { scroll: boolean }) => {
  const navItems = [
    { id: 1, name: 'Início', href: 'hero' },
    { id: 2, name: 'Sobre', href: 'sobre' },
    { id: 3, name: 'Serviços', href: 'servicos' },
    { id: 5, name: 'Avaliações', href: 'review' },
    { id: 6, name: 'FAQ', href: 'faq' },
    { id: 4, name: 'Contato', href: 'contato' },
  ]

  const router = useRouter()
  const pathname = usePathname()

  return (
    <nav className='hidden lg:flex items-center justify-between p-2 3xl:p-4'>
      <div className="flex items-center 3xl:gap-10 gap-5">
        {navItems.map((item) => (
          <div key={item.id} onClick={() => {
            if (pathname === '/') {
              handleScrollToElement(item.href)
            } else {
              router.push(`/#${item.href}`, { scroll: true })
            }

          }}
            className='select-none cursor-pointer'>
            <p className='text-gray-500 hover:text-black duration-300 transition-all font-semibold tracking-tight  '>{item.name}</p>
          </div>
        ))}
        <Link href={'/sobre'}>
          <p className='text-gray-500 hover:text-black duration-300 transition-all font-semibold tracking-tight '>Dr. Fabrício</p>
        </Link>
        <AgendarConsulta />
      </div>
    </nav>
  )
}

export default Navbar