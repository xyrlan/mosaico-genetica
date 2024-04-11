import React from 'react'
import Script from 'next/script';
import Spline from '@splinetool/react-spline';

const SplineViewer = () => {
  return (
    <div className=''>
      <Script type="module" src="https://unpkg.com/@splinetool/viewer@1.0.93/build/spline-viewer.js" strategy="beforeInteractive" ></Script>
      <div className="h-full w-full md:w-1/2 flex-none z-10 max-md:opacity-20 right-0 top-0 absolute">
        <Spline scene="https://prod.spline.design/ZNUUDkDh9yJcH65u/scene.splinecode"
      />
        {/* <div className="absolute bottom-4 right-2 bg-gray-200 h-10 w-40 z-20  " /> */}
      </div>
    </div>
  )
}

export default SplineViewer