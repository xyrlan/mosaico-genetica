import React from 'react'

const ButtonSecondary = ({children}: any) => {
  return (
    <button className='h-12 px-5 py-1.5 w-full text-gray-500 rounded-full border hover:bg- border-black hover:text-black duration-300 transition-all font-semibold '>
      {children}
    </button>
  )
}

export default ButtonSecondary