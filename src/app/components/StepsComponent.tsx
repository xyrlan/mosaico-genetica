import React from 'react';
import { motion } from 'framer-motion';
import { CalendarCheck, Ear, Microscope, ShieldPlus } from 'lucide-react';

const StepsComponent = () => {
  const stepVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: (index: number) => ({
      scale: 1,
      opacity: 1,
      transition: {
        delay: index * 1, // Each step's animation is delayed more than the previous
        type: 'spring',
        stiffness: 260,
        damping: 20,

      }
    })
  };

  // This defines the animation for the connecting lines
  const lineVariants = {
    hidden: { scaleX: 0, width: 100 },
    visible: (index: number) => ({
      scaleX: 1,
      width: 100,
      transition: {
        delay: (index * 1) - 0.15, // Start the line animation a bit before the next step's icon
        duration: 0.5,
        ease: 'easeInOut',

      }
    })
  };

  return (
    <div className="flex justify-between items-center p-5">
      {/* Step 1 */}
      <motion.div
        className="flex flex-col items-center"
        custom={0} // custom prop to control the delay
        variants={stepVariants}
        initial="hidden"
        whileInView="visible"
      >
        <div className="w-24 h-24 rounded-full flex justify-center items-center bg-gray-200">
          <CalendarCheck size={40} />
        </div>
        <div className="mt-2 text-sm">Agendamento</div>
      </motion.div>

      {/* Connecting Line */}
      <motion.div
        custom={1} // custom prop to control the delay
        variants={lineVariants}
        initial="hidden"
        whileInView="visible"
        className="flex-auto border-2 border-gray-800 mx-4 origin-left  " />

      <motion.div
        className="flex flex-col items-center"
        custom={1} // custom prop to control the delay
        variants={stepVariants}
        initial="hidden"
        whileInView="visible"
      >
        <div className="w-24 h-24 rounded-full flex justify-center items-center bg-gray-200">
          <Ear size={40} />
        </div>
        <div className="mt-2 text-sm">Ouvir</div>
      </motion.div>

      {/* Connecting Line */}
      <motion.div
        custom={2} // custom prop to control the delay
        variants={lineVariants}
        initial="hidden"
        whileInView="visible"
        className="flex-auto border-2 border-gray-800 mx-4 origin-left  " />

      <motion.div
        className="flex flex-col items-center"
        custom={2} // custom prop to control the delay
        variants={stepVariants}
        initial="hidden"
        whileInView="visible"
      >
        <div className="w-24 h-24 rounded-full flex justify-center items-center bg-gray-200">
          <Microscope size={40} />
        </div>
        <div className="mt-2 text-sm">Diagnóstico</div>
      </motion.div>

      {/* Connecting Line */}
      <motion.div
        custom={3} // custom prop to control the delay
        variants={lineVariants}
        initial="hidden"
        whileInView="visible"
        className="flex-auto border-2 border-gray-800 mx-4 origin-left  " />

      {/* Step 2 */}
      <motion.div
        custom={3} // custom prop to control the delay
        variants={stepVariants}
        initial="hidden"
        whileInView="visible"
        className="flex flex-col items-center">
        <div className="w-24 h-24 rounded-full flex justify-center items-center bg-gray-200">
          <ShieldPlus size={40} />
        </div>
        <div className="mt-2 text-sm">Tratamento</div>
      </motion.div>

     
    </div>
  );
};

export default StepsComponent;