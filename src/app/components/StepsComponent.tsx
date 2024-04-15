import React from 'react';
import { motion } from 'framer-motion';
import { CalendarCheck, Ear, Microscope, ShieldPlus, HandHelping } from 'lucide-react';

const stepData = [
  { icon: CalendarCheck, label: "Agendamento", color: 'text-green-700' },
  { icon: HandHelping, label: "Consultar" },
  { icon: Microscope, label: "Diagnóstico" },
  { icon: ShieldPlus, label: "Tratamento" }
];

const StepIcon = ({ IconComponent, index }: any) => {
  const stepVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        delay: index * 0.7,
        type: 'spring',
        stiffness: 260,
        damping: 20
      }
    }
  };

  return (
    <motion.div
      className={`flex lg:flex-col items-center relative text-gray-600 ${stepData[index]?.color}`}
      custom={index}
      variants={stepVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <div className="h-16 w-16 lg:w-24 lg:h-24 rounded-full flex lg:justify-center items-center ">
        <IconComponent className={'drop-shadow-md'} size={40}  />
      </div>
      <div className="mt-2 text-sm max-lg:absolute max-lg:left-16 font-semibold">{stepData[index].label}</div>
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
        delay: (index * 0.7) - 0.20,
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
      className="flex-auto border-2 border-gray-600 mx-4 max-lg:h-10 lg:w-20 origin-left max-lg:origin-top"
    />
  );
};

const StepsComponent = () => {
  return (
    <div className="flex max-lg:flex-col justify-between items-start lg:items-center p-5 my-3 lg:my-10">
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