import Image from 'next/image'
import React from 'react'

export default function Loading() {
  return (
    <div className="fixed inset-0 bg-[#e5f3f6] bg-opacity-90 backdrop-blur-lg flex items-center justify-center z-50">
      <Image src="/logomosaico.png" alt="loading" width={100} height={100} className='animate-pulse' />
    </div>
  )
}