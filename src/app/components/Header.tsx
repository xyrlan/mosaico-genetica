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
    <header className={`z-50 duration-300 transition-all w-full flex justify-center backdrop-blur-md bg-opacity-60  px-6  top-0  ${scroll ? 'bg-[#d9d9d9] fixed py-1' : 'bg-transparent fixed py-3 '}`}>
      <div className="flex items-center justify-between sm:container">
        <Logo scroll={scroll} />
        <Navbar scroll={scroll} />
      </div>
    </header>
  )
}

export default Header