'use client'
import React, { useRef } from 'react'
import HeroDescription from './HeroDescription'
import SplineViewer from './SplineViewer'
import { useScroll, useTransform, motion } from 'framer-motion'
import Image from 'next/image'

const HeroSection = () => {
  const targetRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ['end end', 'end start']
  })

  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0])
  const position = useTransform(scrollYProgress, (pos) => {
    return pos >= 1 ? "relative" : "fixed"
  })
  const x = useTransform(scrollYProgress, [0.1, 0.5, 0.7, 1], ["0%", "25%", "50%", "100%"])
  const x_ = useTransform(scrollYProgress, [0.1, 0.5, 0.7, 1], ["0%", "-25%", "-50%", "-100%"])


  return (
    <motion.section
      style={{ opacity }}
      ref={targetRef}
      id="hero"
      className="relative flex items-center min-h-screen overflow-hidden container ">
      <motion.div
        style={{ position }}
        className='flex max-lg:flex-col w-full h-full justify-center lg:justify-around items-center lg:gap-20'
      >

        <motion.div
          style={{ x: x_ }}
          className='z-10 flex items-center justify-center w-full lg:w-1/2 relative max-sm:mt-20 max-lg:mt-20'
        >
          <div className='bg-[#f5eaf0] absolute  w-full h-2/3 bottom-0 -z-10 shadow-2xl'>
          </div>
          <Image src={'/image3.png'} width={5616} height={3744} alt='Mulher com criança' className=' max-lg:max-h-[350px] max-lg:object-contain' />
        </motion.div>

        <motion.div
          style={{ x: x }}
          className='lg:w-1/2 w-full h-full flex items-center justify-center'
        >
          <HeroDescription />
        </motion.div>
      </motion.div>
    </motion.section>
  )
}

export default HeroSection