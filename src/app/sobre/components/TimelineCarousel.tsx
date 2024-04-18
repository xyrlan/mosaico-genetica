'use client'
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { tabs, History } from './histories'; // Assumindo que este arquivo exporta as guias corretamente
import H2 from '@/app/components/H2';
import Image from 'next/image';
import { ArrowLeft, ArrowRight } from 'lucide-react';

const IconComponent = ({ Icon }: any) => {
  return (
    <Icon className='w-6 h-6' />
  )
};

export default function TimelineCarousel() {
  const [selectedTab, setSelectedTab] = useState(tabs[0]);
  const handleNext = () => {
    const currentIndex = tabs.indexOf(selectedTab);
    const nextIndex = (currentIndex + 1) % tabs.length; // Circula de volta para o primeiro após o último
    setSelectedTab(tabs[nextIndex]);
  };

  const handlePrev = () => {
    const currentIndex = tabs.indexOf(selectedTab);
    const prevIndex = (currentIndex - 1 + tabs.length) % tabs.length; // Circula para o último se estiver no primeiro
    setSelectedTab(tabs[prevIndex]);
  };

  const swipeConfidenceThreshold = 10000;
  const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity;
  };

  return (
    <div className=' max-w-6xl w-full h-full z-10'>
      <nav className=" rounded-t border-b border-[#f5eaf0] bg-[#f5eaf0]/80">
        <ul className="flex w-full ">
          {tabs.map((item: History) => (
            <li
              key={item.date}
              className={`flex-1 flex select-none justify-center items-center gap-4 p-2.5 relative cursor-pointer font-semibold text-lg border ${item === selectedTab ? 'text-[#5db7ce] ' : 'text-gray-600'}`}
              onClick={() => setSelectedTab(item)}
            >
              <IconComponent Icon={item.icon} />
              <p className='max-md:hidden'>{item.date}</p>
              {item === selectedTab ? (
                <motion.div className="absolute bottom-[-1px] left-0 right-0 h-[2px] bg-[#5db7ce]" layoutId="underline" />
              ) : null}
            </li>
          ))}

        </ul>
      </nav>
      <div className=" w-full h-[500px] 3xl:h-[750px] rounded-lg overflow-hidden relative py-5 px-4">
        <button onClick={handlePrev} className="hidden md:flex items-center gap-3 absolute left-0 top-1/2 -translate-y-1/2 px-4 py-4 text-gray-600 hover:text-[#5db7ce] bg-[#f5eaf0] rounded text-sm duration-200 z-20"><ArrowLeft/> </button>
        <button onClick={handleNext} className="hidden md:flex item-center gap-3 absolute right-0 top-1/2 -translate-y-1/2 px-4 py-4 text-gray-600 hover:text-[#5db7ce] bg-[#f5eaf0] rounded text-sm duration-200 z-20"> <ArrowRight/> </button>
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedTab ? selectedTab.date : "empty"}
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -10, opacity: 0 }}
            transition={{ duration: 0.2 }}
            drag='x'
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={1}
            onDragEnd={(e, { offset, velocity }) => {
              const swipe = swipePower(offset.x, velocity.x);
              if (swipe < -swipeConfidenceThreshold) {
                handleNext();
              } else if (swipe > swipeConfidenceThreshold) {
                handlePrev();
              }
            }}
            className='flex h-full w-full justify-around items-center'
          >
            <div className='absolute h-full w-full bottom-0 bg-gradient-radial from-transparent to-[#d9edf2] to-90% -z-10' />
            <Image src={selectedTab.image} alt={selectedTab.title} width={500} height={500} className='absolute h-full w-full bottom-0 opacity-20 object-cover object-center -z-20' />
            <div className='flex flex-col '>
              <p className='self-center font-medium'>{selectedTab.date}</p>
              <H2>{selectedTab.title}</H2>
              <p className='w-full max-w-xl text-center font-medium self-center mt-7 lg:mt-12 px-4 text-gray-700'>{selectedTab.text}</p>
            </div>
          </motion.div>
        </AnimatePresence>

      </div>
    </div>
  );
}

