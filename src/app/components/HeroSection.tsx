import React, { use, useRef } from 'react'
import HeroDescription from './HeroDescription'
import SplineViewer from './SplineViewer'
import { useScroll, useTransform, motion } from 'framer-motion'

const HeroSection = () => {

  const targetRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ['end end', 'end start']
  })

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])
  const position = useTransform(scrollYProgress, (pos) => {
    return pos > 1 ? "relative" : "fixed"
  })

  return (
    <motion.section
      style={{ opacity }}
      ref={targetRef}
      id="hero"
      className="relative flex items-center min-h-screen overflow-hidden container">
      <motion.div
        style={{ position }}
        className='flex w-full h-full justify-center lg:justify-around items-center py-20 lg:p-24 px-4'
      >
        <HeroDescription />
        <SplineViewer />
      </motion.div>
    </motion.section>
  )
}

export default HeroSection