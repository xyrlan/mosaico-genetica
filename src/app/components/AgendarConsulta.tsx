import { ArrowUpRightIcon } from 'lucide-react'
import React from 'react'
import Button from './Button'
import { sendGTMEvent } from '@next/third-parties/google'
import { useAgendarWidgetContext } from '../context/AgendarWidgetContext'

const AgendarConsulta = () => {
  const { setIsOpen } = useAgendarWidgetContext();
  return (
    <div className='group'>
      <Button onClick={() => {
        setIsOpen(true)
        sendGTMEvent({ event: 'buttonClicked' })
      }}>
        <div className='inline-flex gap-3 items-center text-gray-800 text-nowrap'>
          Agendar Consulta
          <ArrowUpRightIcon className='group-hover:translate-x-1 group-hover:-translate-y-1 duration-200 transition-all' size={20} />
        </div>
      </Button>
    </div>
  )
}

export default AgendarConsulta