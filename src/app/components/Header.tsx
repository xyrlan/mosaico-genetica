'use client'
import React from 'react'
import Logo from './Logo'
import Navbar from './Navbar'

const Header = () => {
  
const [scroll, setScroll] = React.useState(false)
  React.useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setScroll(true)
      } else {
        setScroll(false)
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <header className={`z-50 duration-300 transition-all w-full flex justify-center px-6 py-3 top-0  ${scroll ? 'bg-[#d9d9d9] fixed h-14' : 'bg-transparent fixed h-20'}`}>
      <div className="flex items-center justify-between sm:container">
        <Logo />
        <Navbar />
      </div>
    </header>
  )
}

export default Header