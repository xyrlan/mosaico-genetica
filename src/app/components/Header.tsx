'use client'
import React from 'react'
import Logo from './Logo'
import Navbar from './Navbar'
import NavbarMobile from './NavbarMobile'
import TopBanner from './TopBanner'

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
    <header className={`fixed bg-[#f5eaf0] rounded z-50 duration-300 transition-all w-full xl:container right-1/2 translate-x-1/2 flex flex-col justify-between items-center backdrop-blur-xl bg-opacity-70 px-4 top-0 ${scroll ? ' py-1 drop-shadow-xl' : ' py-3 drop-shadow-md'}`}>
      <TopBanner />
      <div className="flex items-center justify-between container w-full">
      <Logo />
      <Navbar scroll={scroll} />
      <NavbarMobile />
      </div>
    </header>
  )
}

export default Header