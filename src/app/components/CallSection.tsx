import React, { useRef } from 'react'
import Button from './Button'
import { useScroll, motion, useTransform } from 'framer-motion'
import Image from 'next/image'
import StepsComponent from './StepsComponent'

const CallSection = () => {
  const targetRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ['start end', 'end start']
  })

  const scale = useTransform(scrollYProgress, [0, 0.5], [0, 1])
  const y = useTransform(scrollYProgress, [0, 0.5], [900, 0])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [0, 1])
  const leftx = useTransform(scrollYProgress, [0.1, 0.2, 0.4, 0.7], [-600, -400, -200, 0])
  const rightx = useTransform(scrollYProgress, [0.1, 0.2, 0.4, 0.7], [600, 400, 200, 0])



  return (
    <motion.section
      ref={targetRef}
      id='call'
      className='min-h-screen py-40 flex justify-center '
    >
      <motion.div
        style={{ scale }}
        className='absolute h-full w-full bottom-0 bg-gradient-to-b from-[#d9edf2] to-transparent from-70% rounded-full -z-10' />
      <div className="container flex flex-col items-center ">
        <motion.div
          style={{ y, opacity }}
          className="flex flex-col items-center ">
          <h2 className="text-5xl font-bold text-center">Todo gene conta uma história, qual é a sua?</h2>
          {/* <p className="text-center text-xl mt-2">Estamos aqui para te ajudar</p>
          <p className='text-center text-gray-500 mt-2'>Tire suas dúvidas - Garanta orientações personalizadas</p>
          <Button >Agendar consulta</Button> */}
        <StepsComponent />
        </motion.div>
      </div>
    </motion.section>
  )
}

export default CallSection