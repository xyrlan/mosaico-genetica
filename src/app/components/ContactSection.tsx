'use client'
import React, { useRef, useState } from 'react'
import { useScroll, motion, useTransform } from 'framer-motion'
import Image from 'next/image'
import H2 from './H2'
import Button from './Button'
import { ArrowUpRightIcon, Mail, Phone, User } from 'lucide-react'
import Link from 'next/link'
import { useForm } from 'react-hook-form'
import { InputMask } from '@react-input/mask'

interface FormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

const ContactSection = () => {
  const targetRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ['start end', 'end start']
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [showSuccess, setShowSuccess] = useState(false)

  const { register, handleSubmit, formState: { errors }, reset } = useForm<FormData>()

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true)
    // Simulando envio
    console.log('Form data:', data)
    await new Promise(resolve => setTimeout(resolve, 1500))
    setIsSubmitting(false)
    setShowSuccess(true)
    reset()
    setTimeout(() => setShowSuccess(false), 3000)
  }

  const scaleY = useTransform(scrollYProgress, [0, 0.5], [0, 1])

  const text = "Como posso te ajudar?".split(" ");

  return (
    <motion.section
      id='contato'
      ref={targetRef}
      className='min-h-screen flex justify-center items-center px-4 lg:py-24 py-12 relative overflow-hidden'
    >
      <div className="max-w-6xl flex flex-col items-center relative w-full">
        <motion.section className='flex max-md:flex-col w-full relative rounded'>

          {/* Formulário */}
          <div className="flex flex-col justify-start gap-6 w-full md:w-1/2 py-6 md:py-10 drop-shadow-sm lg:drop-shadow-xl z-20 relative rounded">
            <div className='bg-[#d9edf2] h-full top-0 w-full absolute -left-full' />
            <div className='bg-[#d9edf2] -z-20 absolute left-0 top-0 w-full h-full rounded' />

            <H3Card text={text} />

            <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-4 px-6 md:px-10'>
              <div className='relative'>
                <div className='absolute left-3 top-3 text-gray-400'>
                  <User size={20} />
                </div>
                <input
                  {...register("name", { required: "Nome é obrigatório" })}
                  placeholder="Nome completo"
                  className={`w-full pl-10 pr-4 py-2 rounded border ${errors.name ? 'border-red-500' : 'border-gray-200'} focus:outline-none focus:border-[#7fc2d2] bg-white`}
                />
                {errors.name && <span className='text-red-500 text-sm mt-1'>{errors.name.message}</span>}
              </div>

              <div className='relative'>
                <div className='absolute left-3 top-3 text-gray-400'>
                  <Phone size={20} />
                </div>
                <InputMask
                  {...register("phone", { required: "Telefone é obrigatório" })}
                  mask="(99) 9 9999-9999"
                  placeholder="Telefone"
                  className={`w-full pl-10 pr-4 py-2 rounded border ${errors.phone ? 'border-red-500' : 'border-gray-200'} focus:outline-none focus:border-[#7fc2d2] bg-white`}
                />
                {errors.phone && <span className='text-red-500 text-sm mt-1'>{errors.phone.message}</span>}
              </div>

              <div className='relative'>
                <div className='absolute left-3 top-3 text-gray-400'>
                  <Mail size={20} />
                </div>
                <input
                  {...register("email", {
                    required: "Email é obrigatório",
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: "Email inválido"
                    }
                  })}
                  placeholder="Email"
                  className={`w-full pl-10 pr-4 py-2 rounded border ${errors.email ? 'border-red-500' : 'border-gray-200'} focus:outline-none focus:border-[#7fc2d2] bg-white`}
                />
                {errors.email && <span className='text-red-500 text-sm mt-1'>{errors.email.message}</span>}
              </div>

              <div className='relative'>
                <textarea
                  {...register("message", { required: "Mensagem é obrigatória" })}
                  placeholder="Sua dúvida ou mensagem"
                  rows={4}
                  className={`w-full px-4 py-2 rounded border ${errors.message ? 'border-red-500' : 'border-gray-200'} focus:outline-none focus:border-[#7fc2d2] bg-white`}
                />
                {errors.message && <span className='text-red-500 text-sm mt-1'>{errors.message.message}</span>}
              </div>

              <Button onClick={handleSubmit(onSubmit)}>
                {isSubmitting ? (
                  <div className='flex items-center justify-center gap-2'>
                    <div className='w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin' />
                    Enviando...
                  </div>
                ) : 'Enviar mensagem'}
              </Button>

              {showSuccess && (
                <div className='bg-green-100 text-green-700 p-3 rounded text-center'>
                  Mensagem enviada com sucesso!
                </div>
              )}
            </form>
          </div>

          {/* Links de Contato */}
          <motion.div
            initial={{ x: -575 }}
            whileInView={{ x: 0 }}
            transition={{
              duration: 1,
              delay: 0.5,
            }}
            viewport={{ once: true }}
            className="max-md:hidden flex flex-col rounded max-md:items-center gap-10 bg-[#f5eaf0] bg-opacity-50 py-4 sm:py-10 origin-left z-10 h-full w-1/2 shadow-inner absolute left-1/2"
          >
            <h3 className='font-medium text-xl lg:text-2xl mt-5 px-6 sm:px-10 text-[#1e3a8a]'>
              Outros canais de contato
            </h3>
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
            className="md:hidden flex flex-col max-md:items-center gap-10 bg-[#f5eaf0] bg-opacity-50 py-4 sm:py-10 origin-left z-10 w-full h-full relative shadow-inner rounded"
          >
            <h3 className='font-medium text-xl lg:text-2xl mt-5 px-6 sm:px-10 text-[#1e3a8a]'>
              Outros canais de contato
            </h3>
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
      <Link href={'https://wa.me/5561998570759'} target='_blank' className='inline-flex items-center gap-3 font-medium my-3 text-base max-md:text-sm duration-300 transition-all hover:text-gray-700 group'>
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
  <h3 className='font-medium justify-center text-xl lg:text-2xl mt-5 max-md:text-center px-6 sm:px-10 text-[#1e3a8a]'>
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
