import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Logo = (props: {scroll: boolean}) => {

  return (
    <Link href='#hero' className='cursor-pointer'>
      <Image src="/mosaicologo.png" alt="Logo" width={250} height={250} className='lg:block hidden w-auto h-auto select-none drop-shadow-xl' priority />
      <Image src="/mosaicoico.png" alt="Logo" width={50} height={50} className='lg:hidden block w-auto h-auto select-none drop-shadow-xl' priority />
    </Link> 
  )
}

export default Logo