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
    <header className={`fixed rounded-full z-50 duration-300 transition-all w-full container right-1/2 translate-x-1/2  flex justify-center drop-shadow-xl backdrop-blur-md bg-opacity-70 px-10 top-2  ${scroll ? 'bg-[#f5eaf0] py-1' : 'bg-transparent py-3 '}`}>
      <div className="flex items-center justify-between sm:container">
        <Logo scroll={scroll} />
        <Navbar scroll={scroll} />
      </div>
    </header>
  )
}

export default Header