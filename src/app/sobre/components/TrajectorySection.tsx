import Image from 'next/image'
import React from 'react'
import TimelineCarousel from './TimelineCarousel'
import H2 from '@/app/components/H2'





function TrajectorySection() {
  return (
    <section id='trajetoria' className='min-h-screen  py-24 relative gap-10 lg:gap-20 flex flex-col items-center bg-[#d9edf2]'>
      <H2>Conheça um pouco da minha trajetória</H2>
      <TimelineCarousel />
    </section>
  )
}

export default TrajectorySection