'use client'

import { useRef } from 'react'
import HeroDescription from './HeroDescription'
import { useScroll, useTransform, motion } from 'framer-motion'
import Image from 'next/image'


const HeroSection = () => {
  const targetRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ['end end', 'end start']
  })

  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0])
  const position = useTransform(scrollYProgress, (pos: any) => {
    return pos >= 1 ? "relative" : "fixed"
  })
  const x = useTransform(scrollYProgress, [0.1, 0.5, 0.7, 1], ["0%", "25%", "50%", "100%"])
  const x_ = useTransform(scrollYProgress, [0.1, 0.5, 0.7, 1], ["0%", "-25%", "-50%", "-100%"])
  
  return (
    <motion.main
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
          className='z-10 flex items-center justify-center w-full lg:w-1/2 relative max-sm:mt-20 max-lg:mt-20 '
        >
          <motion.div
            initial={{ opacity: 0.5, x: "-100%" }}
            whileInView={{ opacity: 1, x: "0%" }}
            transition={{ ease: 'easeOut', duration: 1, delay: 0.7 }}
            className='bg-[#f5eaf0] absolute w-full h-2/3 bottom-0 -z-10 lg:shadow-2xl'>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: -300 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ ease: 'easeOut', duration: 1, delay: 0.3 }}

          >
            <Image src={'/image3.png'} width={846} height={564} alt='Mulher com criança' className='w-auto h-auto max-lg:max-h-[350px] max-lg:object-contain' priority />
          </motion.div>

        </motion.div>

        <motion.div
          style={{ x: x }}
          className='lg:w-1/2 w-full h-full flex lg:items-center justify-center'
        >
          <HeroDescription />
        </motion.div>
      </motion.div>
    </motion.main>
  )
}

export default HeroSection