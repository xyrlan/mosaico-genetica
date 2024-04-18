import React from 'react'

const ButtonSecondary = ({ children, onClick }: any) => {
  return (
    <button
      onClick={onClick}
      className='h-12 group px-5 py-1.5 text-sm text-gray-500 rounded hover:bg-[#ebd5e1]/60 border border-black hover:text-black duration-300 transition-all font-semibold select-none inline-flex items-center justify-center gap-2' >
      {children}
    </button>
  )
}

export default ButtonSecondary