import Link from 'next/link'
import React from 'react'
import AgendarConsulta from './AgendarConsulta'
import { usePathname, useRouter } from 'next/navigation'

export function handleScrollToElement(id: string) {
  const element = document.getElementById(id)
  element?.scrollIntoView({ behavior: 'smooth' })
}

type NavItem =
  | { id: number; name: string; type: 'anchor'; href: string }
  | { id: number; name: string; type: 'route'; href: string }

const navItems: NavItem[] = [
  { id: 1, name: 'Início', type: 'anchor', href: 'hero' },
  { id: 2, name: 'Sobre', type: 'anchor', href: 'sobre' },
  { id: 3, name: 'Serviços', type: 'route', href: '/servicos' },
  { id: 5, name: 'Avaliações', type: 'anchor', href: 'review' },
  { id: 6, name: 'FAQ', type: 'anchor', href: 'faq' },
  { id: 4, name: 'Contato', type: 'anchor', href: 'contato' },
]

const Navbar = (props: { scroll: boolean }) => {
  const router = useRouter()
  const pathname = usePathname()

  const handleAnchorClick = (anchor: string) => {
    if (pathname === '/') {
      handleScrollToElement(anchor)
    } else {
      router.push(`/#${anchor}`, { scroll: true })
    }
  }

  return (
    <nav className='hidden lg:flex items-center justify-between p-2 3xl:p-4'>
      <div className="flex items-center 3xl:gap-10 gap-5">
        {navItems.map((item) =>
          item.type === 'route' ? (
            <Link key={item.id} href={item.href} className='select-none cursor-pointer'>
              <p className='text-gray-500 hover:text-[#1e3a8a] duration-300 transition-all font-semibold tracking-tight'>
                {item.name}
              </p>
            </Link>
          ) : (
            <div
              key={item.id}
              onClick={() => handleAnchorClick(item.href)}
              className='select-none cursor-pointer'
            >
              <p className='text-gray-500 hover:text-[#1e3a8a] duration-300 transition-all font-semibold tracking-tight'>
                {item.name}
              </p>
            </div>
          )
        )}
        <Link href={'/sobre'}>
          <p className='text-gray-500 hover:text-[#1e3a8a] duration-300 transition-all font-semibold tracking-tight '>Dr. Fabrício</p>
        </Link>
        <AgendarConsulta />
      </div>
    </nav>
  )
}

export default Navbar
