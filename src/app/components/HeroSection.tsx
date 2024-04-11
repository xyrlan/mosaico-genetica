import React from 'react'
import HeroDescription from './HeroDescription'
import SplineViewer from './SplineViewer'

const HeroSection = () => {
  return (
    <section id="hero" className="flex items-center min-h-screen p-4 py-20 md:p-24 relative overflow-hidden ">
      <HeroDescription />
      <SplineViewer />
    </section>
  )
}

export default HeroSection