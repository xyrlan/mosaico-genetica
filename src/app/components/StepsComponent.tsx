import React from 'react';
import { motion } from 'framer-motion';
import { CalendarCheck, Ear, Microscope, ShieldPlus, HandHelping } from 'lucide-react';

const stepData = [
  { icon: CalendarCheck, label: "Agendamento", color: 'text-green-700' },
  { icon: HandHelping, label: "Consulta" },
  { icon: Microscope, label: "Diagnóstico" },
  { icon: ShieldPlus, label: "Aconselhamento genético" }
];

const StepIcon = ({ IconComponent, index }: any) => {
  const stepVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        delay: index * 0.5,
        type: 'spring',
        stiffness: 260,
        damping: 20
      }
    }
  };

  return (
    <motion.div
      className={`flex flex-col items-center relative text-gray-600 ${stepData[index]?.color}`}
      custom={index}
      variants={stepVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <div className="h-16 w-16 rounded-full flex justify-center items-center ">
        <IconComponent className={'drop-shadow-md'} size={35}  />
      </div>
      <div className=" text-sm font-semibold text-center max-w-[120px]">{stepData[index].label}</div>
    </motion.div>
  );
};

const ConnectingLine = ({ index }: any) => {
  const lineVariants = {
    hidden: { scaleX: 0, scaleY: 0 },
    visible: {
      scaleX: 1,
      scaleY: 1,
      transition: {
        delay: (index * 0.5) - 0.20,
        duration: 0.5,
        ease: 'easeInOut'
      }
    }
  };

  return (
    <motion.div
      custom={index}
      variants={lineVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className={`flex-auto border-2 border-gray-400 h-0.5 mx-4 w-full lg:w-20 origin-left ${index === 2 ? "max-lg:hidden" : ""}  `}
    />
  );
};

const StepsComponent = () => {
  return (
    <div className=" flex-wrap max-lg: grid grid-flow-col-dense max-lg:grid-cols-3 space-y-2 justify-between items-center p-5 ">
      {stepData.map((step, index) => (
        <React.Fragment key={`step-${index}`}>
          <StepIcon IconComponent={step.icon} index={index} />
          {index < stepData.length - 1 && <ConnectingLine index={index + 1} />}
        </React.Fragment>
      ))}
    </div>
  );
};

export default StepsComponent;