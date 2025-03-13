"use client";
import React, { useState, useRef, useEffect } from 'react';
import Script from 'next/script';
import { CalendarClock, XIcon } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';
import { useAgendarWidgetContext } from '../context/AgendarWidgetContext';

export default function AgendarWidgetDropUp() {

  const { isOpen, setIsOpen, containerRef } = useAgendarWidgetContext();

  return (
    <div className=" fixed bottom-14 md:bottom-24 right-5 rounded-md z-50 " ref={containerRef}>
      {/* Script do BoaConsulta */}
      <Script
        src="https://boaconsulta-widgets.s3.sa-east-1.amazonaws.com/bc-widget-schedules.min.js"
        strategy="beforeInteractive"
      />

      {/* Botão para abrir/fechar */}
      <button
        type="button"
        className="p-5 bg-[#7fc2d2] hover:bg-[#63b4c9] text-white font-semibold rounded-full shadow-lg
                    focus:outline-none transition-all group overflow-hidden"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ?
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ ease: 'easeOut', duration: 0.5 }}
            key={"agendar-close-widget"}>
            <XIcon size={28} className='text-[#f5eaf0]' />
          </motion.div>
          :
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ ease: 'easeOut', duration: 0.5 }}
            key={'agendar-open-widget'}
            className='flex group-hover:gap-2 items-center'
            >
            <CalendarClock className='text-[#f5eaf0]' size={28} />
            <span className='group-hover:w-40 w-0 text-nowrap transition-all'><span className='group-hover:visible invisible duration-0'>Marque a consulta</span></span>
          </motion.div>
        }
      </button>

      <AnimatePresence initial={false}>
        {/* Drop-up */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            transition={{ ease: 'easeOut', duration: 0.2, delay: 0.2 }}
            key={'agendar-widget'}
            className="absolute bottom-full -right-5 w-80  
                    rounded-md z-50"
          >
            <bc-widget-schedules
              profile-slug="676458260af7e10062000b73"
              layout="medium"
            ></bc-widget-schedules>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
