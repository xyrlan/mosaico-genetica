import React, { use, useRef } from 'react'
import HeroDescription from './HeroDescription'
import SplineViewer from './SplineViewer'
import { useScroll, useTransform, motion } from 'framer-motion'
import Image from 'next/image'

const HeroSection = () => {
  const [loading, setLoading] = React.useState(true)
  const targetRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ['end end', 'end start']
  })

  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0])
  const position = useTransform(scrollYProgress, (pos) => {
    return pos === 1 ? "relative" : "fixed"
  })
  const x = useTransform(scrollYProgress, [0.1, 0.5, 0.7, 1], ["0%", "25%", "50%", "100%"])
  const x_ = useTransform(scrollYProgress, [0.1, 0.5, 0.7, 1], ["0%", "-25%", "-50%", "-100%"])

  const handleLoad = () => {
    setLoading(false);
  };

  return (
    <motion.section
      style={{ opacity }}
      ref={targetRef}
      id="hero"
      className="relative flex items-center min-h-screen overflow-hidden container">
      {loading && <div className="fixed inset-0 bg-[#e5f3f6] bg-opacity-90 backdrop-blur-lg flex items-center justify-center z-50">
        <Image src="/mosaicoico.png" alt="loading" width={200} height={200} className='animate-pulse' />
      </div>}
      <motion.div
        style={{ position }}
        className='flex w-full h-full justify-center lg:justify-around items-center px-4'
      >
        <motion.div
          style={{ x: x_ }}
          className='z-10 h-full w-full hidden lg:block'
        >
          <SplineViewer onLoaded={handleLoad} />
        </motion.div>
        <motion.div
          style={{ x: x }}
          className='w-full flex justify-center '
        >
          <HeroDescription />
        </motion.div>
      </motion.div>
    </motion.section>
  )
}

export default HeroSection