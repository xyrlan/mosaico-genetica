import React from 'react'
import Spline from '@splinetool/react-spline';

const SplineViewer = () => {
  const [isHidden, setIsHidden] = React.useState(true)

  return (
      <Spline className={isHidden ? 'hidden' : 'block'} onLoad={() => setIsHidden(false)} scene="https://prod.spline.design/ZNUUDkDh9yJcH65u/scene.splinecode" />
  )
}

export default SplineViewer