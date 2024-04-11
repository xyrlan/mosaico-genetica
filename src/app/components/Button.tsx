import React from 'react'

const Button = ({ children }: any) => {
  return (
    <button className='h-12 px-5 py-1.5 bg-[#7fc2d2] hover:bg-[#63b4c9] duration-200 text-white font-medium rounded-full'>
      {children}
    </button>
  )
}

export default Button