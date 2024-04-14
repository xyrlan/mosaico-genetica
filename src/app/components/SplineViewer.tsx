import React from 'react'
import Spline from '@splinetool/react-spline';
import useMediaQuery from '../utils/useMediaQuery';

type SplineViewerProps = {
  onLoaded: () => void
}

const SplineViewer = ({ onLoaded }: SplineViewerProps) => {
  const [isHidden, setIsHidden] = React.useState(true)

  const isLargeScreen = useMediaQuery('(min-width: 1024px)');

  if (!isLargeScreen) return null

  return (
    <Spline className={isHidden ? 'hidden' : 'block'} onLoad={() => {
      onLoaded()
      setIsHidden(false)
    }}
      scene="https://prod.spline.design/ZNUUDkDh9yJcH65u/scene.splinecode" />
  )
}

export default SplineViewer