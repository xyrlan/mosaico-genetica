'use client'
import { motion } from 'framer-motion'
import Link from 'next/link'
import AgendarConsulta from '@/app/components/AgendarConsulta'
import ButtonSecondary from '@/app/components/ButtonSecondary'
import { ArrowUpRight } from 'lucide-react'

interface ServiceCTASectionProps {
  title?: string
  description?: string
}

export default function ServiceCTASection({
  title = 'Vamos cuidar do seu caso?',
  description = 'Agende uma consulta com o Dr. Fabrício Maciel — presencial em Brasília ou online em todo o Brasil. Em casos urgentes, fale por WhatsApp.',
}: ServiceCTASectionProps) {
  return (
    <section
      id="cta"
      className="px-4 py-20 lg:py-28 bg-white relative overflow-hidden"
    >
      <div className="max-w-4xl mx-auto text-center relative">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="font-semibold text-2xl lg:text-4xl text-[#1e3a8a] mb-6"
        >
          {title}
        </motion.h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-10 leading-relaxed">
          {description}
        </p>
        <div className="flex max-md:flex-col gap-4 justify-center items-center">
          <AgendarConsulta />
          <Link href="https://wa.me/5561998570759" target="_blank" className="group">
            <ButtonSecondary>
              <div className="inline-flex gap-3 items-center">
                Falar no WhatsApp
                <ArrowUpRight
                  size={20}
                  className="group-hover:translate-x-1 group-hover:-translate-y-1 duration-200 transition-all"
                />
              </div>
            </ButtonSecondary>
          </Link>
        </div>
      </div>
    </section>
  )
}
