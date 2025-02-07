import React from 'react'

const H2 = ({ children }: any) => {
  return (
    <h2 className='text-xl sm:text-2xl lg:text-3xl 3xl:text-4xl font-semibold text-center max-w-2xl drop-shadow text-[#1e3a8a]'>
      {children}
    </h2>
  )
}

export default H2