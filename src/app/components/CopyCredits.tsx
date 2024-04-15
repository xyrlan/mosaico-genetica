import Link from 'next/link'
import React from 'react'

const CopyCredits = () => {
  return (
    <div className='flex flex-col items-center my-6 gap-2'>
      <p className="text-xs text-gray-500 text-center">&copy; 2024. Mosaico genética médica. Todos os direitos reservados.</p>
      <p className="text-xs text-gray-500 ">Desenvolvido por <Link href={'https://xyrlan.vercel.app/ptBR'} className='underline decoration-2 hover:decoration-3 hover:decoration-red-600 hover:text-red-600 duration-300 transition-all'>xyrlan</Link></p>
    </div>
  )
}

export default CopyCredits