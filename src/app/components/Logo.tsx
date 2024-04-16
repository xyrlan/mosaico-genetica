import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Logo = () => {

  return (
    <Link href='#hero' className='cursor-pointer'>
      <Image src="/mosaicologo.png" alt="Logo" width={200} height={200} className='lg:block hidden w-auto h-auto max-3xl:h-16 select-none drop-shadow-xl' priority />
      <Image src="/mosaicologo.png" alt="LogoImage" width={256} height={72} className='lg:hidden block w-auto h-auto select-none drop-shadow-xl' priority />
    </Link> 
  )
}

export default Logo