'use client'
import Script from 'next/script'
import React from 'react'
import AgendarConsulta from './AgendarConsulta'
import { motion } from 'framer-motion'

function ReviewSection() {
  return (
    <>
      {/* <Script src="https://static.elfsight.com/platform/platform.js" data-use-service-core defer></Script> */}
      <Script id="shapo-embed-js" type="text/javascript" src="https://cdn.shapo.io/js/embed.js" defer></Script>
      <motion.section
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ ease: 'easeOut', duration: 1 }}
        id='review' className='flex flex-col justify-center items-center px-4 lg:py-24 py-16 pb-32 bg-[#d9edf2] relative overflow-hidden drop-shadow-lg'>
        {/* <div className="elfsight-app-51c59563-949f-45b4-8959-e261623ca076 relative" data-elfsight-app-lazy>
        </div> */}
        <div id="shapo-widget-e995d5cc81b153da30b3" className='relative'></div>
        <div className='absolute lg:bottom-28 bottom-36 right-1/2 translate-x-1/2 z-50'>
          <AgendarConsulta />
        </div>
      </motion.section>
    </>
  )
}

export default ReviewSection