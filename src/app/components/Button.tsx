import React from 'react'

const Button = ({ children, onClick }: any) => {
  return (
    <button onClick={onClick} className='text-sm h-12 px-5 py-1.5 w-full bg-[#7fc2d2] hover:bg-[#63b4c9] duration-200 text-white font-medium rounded select-none'>
      {children}
    </button>
  )
}

export default Button