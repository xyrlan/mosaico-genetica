import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Logo = () => {
  return (
    <Link href='#hero' className='cursor-pointer'>
      <Image src="/mosaicologo.png" alt="Logo" width={250} height={250} className='w-auto h-auto' priority />
    </Link>
  )
}

export default Logo