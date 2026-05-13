'use client'
import Image from 'next/image'
import { motion } from 'framer-motion'
import AgendarConsulta from '@/app/components/AgendarConsulta'
import ButtonSecondary from '@/app/components/ButtonSecondary'
import { ArrowRight, MapPin } from 'lucide-react'

interface ServiceHeroProps {
  eyebrow: string
  title: string
  highlight?: string
  description: string
  imageSrc: string
  imageAlt: string
  primaryCta?: { label: string; href: string }
  showSecondaryCta?: boolean
  secondaryCta?: { label: string; href: string }
}

export default function ServiceHero({
  eyebrow,
  title,
  highlight,
  description,
  imageSrc,
  imageAlt,
  showSecondaryCta = true,
  secondaryCta,
}: ServiceHeroProps) {
  return (
    <section
      id="service-hero"
      className="relative min-h-screen px-4 lg:px-8 pt-36 lg:pt-40 pb-16 lg:pb-24 flex items-center overflow-hidden"
    >
      <div className="hidden lg:block h-1/2 w-1/2 bg-[#f5eaf0] absolute top-1/4 right-0 -z-10 rounded-l" />
      <div className="lg:hidden h-[60%] w-full bg-[#f5eaf0]/60 absolute top-1/3 left-0 -z-10" />

      <div className="max-w-6xl mx-auto flex max-lg:flex-col items-center justify-between gap-10 lg:gap-16 w-full">
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          className="flex flex-col gap-5 max-w-xl"
        >
          <p className="text-sm tracking-wider text-gray-500 font-semibold uppercase">
            {eyebrow}
          </p>
          <h1 className="font-semibold text-3xl md:text-4xl lg:text-5xl 3xl:text-6xl drop-shadow-lg text-[#1e3a8a] leading-tight">
            {title}
            {highlight && (
              <>
                <br />
                <span className="text-[#7fc2d2]">{highlight}</span>
              </>
            )}
          </h1>
          <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-gray-500 text-sm">
            <span className="inline-flex items-center gap-2">
              <MapPin size={16} />
              Brasília - DF
            </span>
            <span className="hidden sm:inline">|</span>
            <span>Telemedicina em todo o Brasil</span>
          </div>
          <p className="text-base lg:text-lg text-gray-700 max-w-xl leading-relaxed">
            {description}
          </p>
          <div className="flex max-md:flex-col gap-4 mt-3">
            <AgendarConsulta />
            {showSecondaryCta && secondaryCta && (
              <ButtonSecondary
                onClick={() => {
                  if (typeof window !== 'undefined') {
                    const el = document.getElementById(secondaryCta.href)
                    el?.scrollIntoView({ behavior: 'smooth' })
                  }
                }}
              >
                {secondaryCta.label}
                <ArrowRight className="group-hover:rotate-90 transition-all duration-200 h-5 w-5" />
              </ButtonSecondary>
            )}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          className="relative w-full lg:w-[45%] max-w-[480px] flex-shrink-0"
        >
          <div className="absolute inset-0 bg-[#d9edf2] translate-x-5 translate-y-5 -z-10 rounded shadow-xl" />
          <Image
            src={imageSrc}
            alt={imageAlt}
            width={800}
            height={600}
            priority
            sizes="(min-width: 1024px) 480px, 100vw"
            className="w-full h-auto rounded shadow-lg object-cover select-none brightness-105"
          />
        </motion.div>
      </div>
    </section>
  )
}
