'use client'
import React, { useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Button from './Button'
import { ArrowUpRightIcon, Mail, MapPinned, Phone, User } from 'lucide-react'
import Link from 'next/link'
import { useForm } from 'react-hook-form'
import { InputMask } from '@react-input/mask'
import AgendarConsulta from './AgendarConsulta'
import ButtonSecondary from './ButtonSecondary'
import emailjs from '@emailjs/browser'
import H2 from './H2'

interface FormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

const ContactSection = () => {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [showSuccess, setShowSuccess] = useState(false)

  const { register, handleSubmit, formState: { errors }, reset } = useForm<FormData>()

  const serviceId = 'service_7yfmx3n'
  const templateId = 'template_ym27h1d'
  const publicKey = 'OR9NOXgMcSID8jV2N'

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true)
    const sanitizedPhone = formatPhoneForWhatsApp(data.phone);
    try {
      // Envia email com o EmailJS
      const response = await emailjs.send(
        serviceId,
        templateId,
        {
          user_name: data.name,
          user_email: data.email,
          user_phone: sanitizedPhone,
          to_name: 'Fabrício',
          message: data.message
        },
        publicKey
      )

      console.log('EmailJS Response:', response.text)
      setShowSuccess(true)
      reset()

      // Exibe a mensagem de sucesso por alguns segundos
      setTimeout(() => setShowSuccess(false), 3000)
    } catch (error) {
      console.error('EmailJS Error:', error)
      // Aqui você pode exibir uma mensagem de erro para o usuário se quiser
    } finally {
      setIsSubmitting(false)
    }
  }
  const text = "Compartilhe seu caso com a gente!".split(" ");
  const text2 = "Como podemos te ajudar?".split(" ");
  const text3 = "Outros canais de contato".split(" ");

  return (
    <motion.section
      id='contato'
      className='min-h-screen px-4 lg:py-24 py-12'
    >
      <div
        // initial={{ opacity: 0, y: 50 }}
        // whileInView={{ opacity: 1, y: 0 }}
        // transition={{ ease: 'easeOut', duration: 1 }}
        className='flex justify-center mb-10 sr-only'>
        <H2>Compartilhe seu caso com a gente!</H2>
      </div>
      <div className="flex justify-center items-center relative overflow-hidden">
        <div className="max-w-6xl flex flex-col items-center relative w-full">
          <motion.section className='flex max-md:flex-col w-full relative rounded'>
            {/* Formulário */}
            <div className="flex flex-col justify-start gap-6 w-full md:w-1/2 py-6 md:py-10 drop-shadow-sm lg:drop-shadow-xl z-20 relative rounded">
              <div className='bg-[#d9edf2] h-full top-0 w-full absolute -left-full' />
              <div className='bg-[#d9edf2] -z-20 absolute left-0 top-0 w-full h-full rounded' />

              <H3Card text={text} />
              <p className='text-sm text-gray-500 font-medium px-4 md:px-10 '>Preencha o formulário e nossa equipe analisará seu caso com atenção. Podemos ajudar a esclarecer dúvidas, orientar sobre exames genéticos e oferecer um parecer especializado para você ou sua família.</p>

              <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-4 px-6 md:px-10 text-sm'>
                <div className='relative'>
                  <div className='absolute left-3 top-3 text-gray-400'>
                    <User size={18} />
                  </div>
                  <input
                    {...register("name", { required: "Nome é obrigatório" })}
                    placeholder="Nome"
                    className={`w-full pl-10 pr-4 py-2 rounded border ${errors.name ? 'border-red-500' : 'border-[#f5eaf0]'} focus:outline-none focus:border-[#7fc2d2] bg-[#f5eaf0]/50`}
                  />
                  {errors.name && <span className='text-red-500 text-xs mt-1'>{errors.name.message}</span>}
                </div>

                <div className='relative'>
                  <div className='absolute left-3 top-3 text-gray-400'>
                    <Phone size={18} />
                  </div>
                  <InputMask
                    {...register("phone", { required: "Telefone é obrigatório" })}
                    mask="(__) _____-____"
                    replacement={{ _: /\d/ }}
                    placeholder="Telefone"
                    className={`w-full pl-10 pr-4 py-2 rounded border ${errors.phone ? 'border-red-500' : 'border-[#f5eaf0]'} focus:outline-none focus:border-[#7fc2d2] bg-[#f5eaf0]/50`}
                  />
                  {errors.phone && <span className='text-red-500 text-xs mt-1'>{errors.phone.message}</span>}
                </div>

                <div className='relative'>
                  <div className='absolute left-3 top-3 text-gray-400'>
                    <Mail size={18} />
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
                    className={`w-full pl-10 pr-4 py-2 rounded border ${errors.email ? 'border-red-500' : 'border-[#f5eaf0]'} focus:outline-none focus:border-[#7fc2d2] bg-[#f5eaf0]/50`}
                  />
                  {errors.email && <span className='text-red-500 text-xs mt-1'>{errors.email.message}</span>}
                </div>

                <div className='relative'>
                  <textarea
                    {...register("message", { required: "Mensagem é obrigatória" })}
                    placeholder="Sua dúvida ou mensagem"
                    rows={4}
                    className={`w-full px-4 py-2 rounded border min-h-28 ${errors.message ? 'border-red-500' : 'border-[#f5eaf0]'} focus:outline-none focus:border-[#7fc2d2] bg-[#f5eaf0]/50`}
                  />
                  {errors.message && <span className='text-red-500 text-xs mt-1'>{errors.message.message}</span>}
                </div>

                <Button onClick={handleSubmit(onSubmit)}>
                  {isSubmitting ? (
                    <div className='flex items-center justify-center gap-2'>
                      <div className='w-5 h-5 border-2 border-[#7fc2d2]/10 border-t-transparent rounded-full animate-spin' />
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
              <div>
                <H3Card text={text2} />
                <p className='text-sm text-gray-500 font-medium px-4 md:px-10 my-5'>Em caso de dúvidas mais urgentes ou problemas para agendar seu atendimento entre em contato com a nossa equipe por Whatsapp.</p>
                <div className='flex flex-col lg:flex-row items-center justify-between gap-5 lg:gap-5 px-4 md:px-10'>
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

              <div>
                <H3Card text={text3} />
                <ContactLinks />
              </div>
            </motion.div>

            <motion.div
              initial={{ y: -400 }}
              whileInView={{ y: 0 }}
              transition={{
                duration: 1,
                delay: 0.5,
              }}
              viewport={{ once: true }}
              className="md:hidden flex flex-col gap-10 bg-[#f5eaf0] bg-opacity-50 py-4 sm:py-10 origin-left z-10 w-full h-full relative shadow-inner rounded"
            >
              <div className='mt-5'>
                <H3Card text={text2} />
                <p className='text-sm text-gray-500 font-medium px-4 md:px-10 my-5'>Em caso de dúvidas mais urgentes ou problemas para agendar seu atendimento entre em contato com a nossa equipe por Whatsapp.</p>
                <div className='flex lg:flex-row items-center justify-between gap-5 lg:gap-5 px-4 md:px-10'>
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

              <div>
                <H3Card text={text3} />
                <ContactLinks />
              </div>
            </motion.div>

          </motion.section>
        </div>
      </div>
    </motion.section>
  )
}

const ContactLinks = () => (
  <ul className='text-gray-500 px-6 sm:px-12 mt-2'>
    <li>
      <Link href={'https://wa.me/5561998570759'} target='_blank' className='inline-flex items-center gap-3 font-medium my-3 text-base max-md:text-sm duration-300 transition-all hover:text-gray-700 group'>
        <Image src={'/whats.png'} width={20} height={20} className='w-6 h-6' alt='whatsapp-icon' /> (61) 9 9857-0759
        <ArrowUpRightIcon className='group-hover:translate-x-1 group-hover:-translate-y-1 duration-200 transition-all' size={18} />
      </Link>
    </li>
    <li>
      <div className='inline-flex items-center gap-3 font-medium my-3 text-base max-md:text-sm  '><Phone size={30} /> (61) 2193-1447
      </div>
    </li>
    <li>
      <Link href={'https://www.instagram.com/mosaico.gen'} target='_blank' className='inline-flex items-center gap-3 font-medium my-3 text-base max-md:text-sm duration-300 transition-all hover:text-gray-700 group'>
        <Image src={'/insta.jpg'} width={20} height={20} className='w-6 h-6' alt='insta-icon' />
        @mosaico.gen
        <ArrowUpRightIcon className='group-hover:translate-x-1 group-hover:-translate-y-1 duration-200 transition-all' size={18} />
      </Link>
    </li>
    <li>
      <div className='flex flex-col gap-3 font-medium my-3 text-base max-md:text-sm  '>
        <Link href={'https://www.google.com/maps/place/Dr.+Fabr%C3%ADcio+Maciel,+M%C3%A9dico+Geneticista+Bras%C3%ADlia/@-15.7918019,-47.8917543,17.04z/data=!4m6!3m5!1s0x935a39b3c89c5d11:0xb1cebe83250b16ac!8m2!3d-15.7933292!4d-47.8930172!16s%2Fg%2F11vwwmcrxs?hl=pt-BR&entry=ttu&g_ep=EgoyMDI1MDIwNS4xIKXMDSoASAFQAw%3D%3D'} target='_blank' className='inline-flex gap-3 items-center  duration-300 transition-all hover:text-gray-700 group  '>
          <MapPinned className='' size={30} />
          Localização
          <ArrowUpRightIcon className='group-hover:translate-x-1 group-hover:-translate-y-1 duration-200 transition-all' size={20} />
        </Link>
        <p className='max-w-sm text-sm'> Brasil 21 - SHS, QD 06, Bl A, sala 606 - Asa Sul - Brasília - DF CEP 70316-102</p>
      </div>
    </li>
  </ul>
);

const H3Card = ({ text }: any) => (
  <h3 className='font-medium justify-center text-xl lg:text-2xl  px-6 sm:px-10 text-[#1e3a8a]'>
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
