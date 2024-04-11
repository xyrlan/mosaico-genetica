import React from 'react'
import Spline from '@splinetool/react-spline';

const SplineViewer = () => {
  const [isHidden, setIsHidden] = React.useState(true)

  return (
    <div className='hidden lg:block z-10 h-full w-full md:w-1/2 '>
      <Spline className={isHidden ? 'hidden' : 'block'} onLoad={() => setIsHidden(false)} scene="https://prod.spline.design/ZNUUDkDh9yJcH65u/scene.splinecode" />
    </div>
  )
}

export default SplineViewer