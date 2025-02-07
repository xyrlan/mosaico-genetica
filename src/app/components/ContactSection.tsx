'use client'
import React, { useRef } from 'react'
import { useScroll, motion, useTransform } from 'framer-motion'
import Image from 'next/image'
import StepsComponent from './StepsComponent'
import H2 from './H2'
import ButtonSecondary from './ButtonSecondary'
import { ArrowUpRightIcon, MapPinned, Phone } from 'lucide-react'
import Link from 'next/link'
import AgendarConsulta from './AgendarConsulta'

const ContactSection = () => {
  const targetRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ['start end', 'end start']
  })

  const scaleY = useTransform(scrollYProgress, [0, 0.5], [0, 1])

  const text = "Como posso te ajudar?".split(" ");
  const text2 = "Entre em contato".split(" ");

  return (
    <motion.section
      id='contato'
      ref={targetRef}
      className='min-h-screen flex justify-center items-center px-4 lg:py-24 py-12 relative overflow-hidden '
    >

      <div className="max-w-6xl flex flex-col items-center relative">

        <motion.section className='flex max-md:flex-col w-full relative rounded'>

          <div className="flex flex-col justify-around max-md:items-center gap-10 w-full md:w-1/2 py-6 md:py-10 md:h-[475px] drop-shadow-sm lg:drop-shadow-xl z-20 relative rounded">
            <div className='bg-[#d9edf2] h-full top-0 w-full absolute -left-full ' />
            <div className='bg-[#d9edf2] -z-20 absolute left-0 top-0 w-full h-full rounded ' />
            <H3Card text={text} />
            <p className='max-md:text-center text-gray-500 md:mt-8 text-base xl:text-lg font-medium px-4 md:px-10 '>Em caso de dúvidas ou problemas para agendar seu atendimento entre em contato com a nossa equipe por telefone ou Whatsapp.</p>
            <div className='flex flex-col lg:flex-row items-center justify-center gap-5 lg:gap-5'>
              <AgendarConsulta />
              <Link href={'https://wa.me/5561998570759'} target='_blank' className='group' >
                <ButtonSecondary >
                  <div className='inline-flex gap-3 items-center '>
                    Preços e informações
                    <ArrowUpRightIcon className='group-hover:translate-x-1 group-hover:-translate-y-1 duration-200 transition-all' size={20} />
                  </div>
                </ButtonSecondary>
              </Link>
            </div>
          </div>

          <motion.div
            initial={{ x: -575 }}
            whileInView={{ x: 0 }}
            transition={{
              duration: 1,
              delay: 0.5,
            }}
            viewport={{ once: true }}
            className="max-md:hidden flex flex-col rounded max-md:items-center gap-10 bg-[#f5eaf0] bg-opacity-50 py-4 sm:py-10 origin-left z-10 h-full w-1/2 shadow-inner absolute left-1/2">

            <H3Card text={text2} />
            <ContactLinks />
          </motion.div>

          <motion.div
            initial={{ y: -400 }}
            whileInView={{ y: 0 }}
            transition={{
              duration: 1,
              delay: 0.5,
            }}
            viewport={{ once: true }}
            className="md:hidden flex flex-col max-md:items-center gap-10 bg-[#f5eaf0] bg-opacity-50 py-4 sm:py-10 origin-left z-10 w-full h-full relative shadow-inner rounded">

            <H3Card text={text2} />
            <ContactLinks />
          </motion.div>

        </motion.section>
      </div>
    </motion.section>
  )
}

const ContactLinks = () => (
  <ul className='text-gray-500 px-6 sm:px-12'>
    <li>
      <Link href={'https://wa.me/5561998570759'} target='_blank' className='inline-flex items-center gap-3 font-medium my-3 text-base max-md:text-sm duration-300 transition-all hover:text-gray-700 group '>
        <Image src={'/whats.png'} width={20} height={20} className='w-7 h-7' alt='whatsapp-icon' /> (61) 9 9857-0759
        <ArrowUpRightIcon className='group-hover:translate-x-1 group-hover:-translate-y-1 duration-200 transition-all' size={20} />
      </Link>
    </li>
    <li>
      <Link href={'https://www.instagram.com/mosaico.gen'} target='_blank' className='inline-flex items-center gap-3 font-medium my-3 text-base max-md:text-sm duration-300 transition-all hover:text-gray-700 group'>
        <Image src={'/insta.jpg'} width={20} height={20} className='w-7 h-7' alt='insta-icon' />
        @mosaico.gen
        <ArrowUpRightIcon className='group-hover:translate-x-1 group-hover:-translate-y-1 duration-200 transition-all' size={20} />
      </Link>
    </li>
  </ul>
);

const H3Card = ({ text }: any) => (
  <h3 className='font-medium justify-center text-xl lg:text-2xl  mt-5 max-md:text-center px-6 sm:px-10 text-[#1e3a8a]'>
    {text.map((el: string, i: number) => (
      <motion.span
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{
          ease: 'easeOut',
          duration: 1,
          delay: 0.2 + i / 5,
        }}
        key={i}
      >
        {el}{" "}
      </motion.span>
    ))}
  </h3>
)
export default ContactSection