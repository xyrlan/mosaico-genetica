import { ArrowUpRightIcon } from 'lucide-react'
import React from 'react'
import Button from './Button'
import Link from 'next/link'

const AgendarConsulta = () => {
  return (
    <Link href={'https://wa.me/5561998570759'} target='_blank' className='group'>
      <Button>
        <div className='inline-flex gap-3 items-center text-gray-800 text-nowrap'>
          Agendar Consulta
          <ArrowUpRightIcon className='group-hover:translate-x-1 group-hover:-translate-y-1 duration-200 transition-all' size={20} />
        </div>
      </Button>
    </Link>
  )
}

export default AgendarConsulta