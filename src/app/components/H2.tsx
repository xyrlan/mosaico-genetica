import React from 'react'

const H2 = ({ children }: any) => {
  return (
    <h2 className='text-2xl lg:text-3xl 2xl:text-4xl font-semibold text-center max-w-2xl'>
      {children}
    </h2>
  )
}

export default H2