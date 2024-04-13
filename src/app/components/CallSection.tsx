import React, { useRef } from 'react'
import Button from './Button'
import { useScroll, motion, useTransform } from 'framer-motion'
import Image from 'next/image'
import StepsComponent from './StepsComponent'
import H2 from './H2'
import ButtonSecondary from './ButtonSecondary'

const CallSection = () => {
  const targetRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ['start end', 'end start']
  })

  const scale = useTransform(scrollYProgress, [0, 0.5], [0, 1])
  // const y = useTransform(scrollYProgress, [0, 0.5], [600, 0])
  // const opacity = useTransform(scrollYProgress, [0, 0.5], [0, 1])
  // const leftx = useTransform(scrollYProgress, [0.1, 0.2, 0.4, 0.7], [-600, -400, -200, 0])
  // const rightx = useTransform(scrollYProgress, [0.1, 0.2, 0.4, 0.7], [600, 400, 200, 0])

  return (
    <motion.section
      ref={targetRef}
      id='call'
      className='min-h-screen flex justify-center px-4 py-24 '
    >
      <motion.div
        style={{ scale }}
        className='absolute h-full w-full bottom-0 bg-gradient-to-b from-[#d9edf2] to-transparent from-70% rounded-full -z-10' />

      <div className="max-w-6xl flex flex-col items-center ">
        <motion.div className="flex flex-col items-center ">
          <H2>Todo gene conta uma história,<br /> <span className=''>qual é a sua?</span></H2>
        </motion.div>
        <StepsComponent />
        <div className="flex flex-col justify-center items-center my-5 gap-10 w-full">
          <H2 className='font-medium text-center px-4  '>Como posso te ajudar?</H2>
          <div className='flex flex-col lg:flex-row items-center justify-center gap-5'>
            <Button>Agendar consulta</Button>
            <ButtonSecondary >Preços e informações</ButtonSecondary>
          </div>
        </div>
      </div>
    </motion.section>
  )
}

export default CallSection