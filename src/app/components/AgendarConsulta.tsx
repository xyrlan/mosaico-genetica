'use client'
import { ArrowUpRightIcon } from 'lucide-react'
import React from 'react'
import Link from 'next/link'
import { sendGTMEvent } from '@next/third-parties/google'

const WHATSAPP_URL = 'https://wa.me/5561998570759'

const AgendarConsulta = () => {
  return (
    <Link
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => sendGTMEvent({ event: 'buttonClicked' })}
      className="group inline-flex h-12 px-5 py-1.5 w-full items-center justify-center gap-3 bg-[#7fc2d2] hover:bg-[#63b4c9] duration-200 text-gray-800 text-sm font-medium rounded select-none"
    >
      <span className="text-nowrap">Agendar Consulta</span>
      <ArrowUpRightIcon
        className="group-hover:translate-x-1 group-hover:-translate-y-1 duration-200 transition-all"
        size={20}
      />
    </Link>
  )
}

export default AgendarConsulta
