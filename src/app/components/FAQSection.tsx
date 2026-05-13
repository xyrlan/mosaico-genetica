"use client";
import React from 'react';
import { ArrowRight, ChevronDown } from 'lucide-react';
import { motion } from 'framer-motion';
import H2 from './H2';
import ButtonSecondary from './ButtonSecondary';
import { handleScrollToElement } from './Navbar';
import { faqData } from './faqData';

const FAQSection = () => {
  const [activeIndex, setActiveIndex] = React.useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <>
      <section id='faq' className="min-h-screen relative px-4 flex flex-col lg:py-24 py-12 items-center justify-center overflow-hidden">
        <div className="max-w-6xl flex flex-col gap-7 bg-[#f5eaf0] relative p-2 rounded lg:pt-24 pt-12 drop-shadow-lg">
          <div className="bg-[#f5eaf0] h-[10%] bottom-5 w-full absolute -left-full" />
          <div className="bg-[#f5eaf0] h-[10%] top-5 w-full absolute left-full" />

          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ ease: 'easeOut', duration: 1 }}
            className="flex flex-col items-center gap-4 lg:gap-7"
          >
            <H2>FAQ - Perguntas Frequentes</H2>
            <p className="text-sm md:text-lg 3xl:text-xl font-medium text-gray-600 max-w-4xl text-center text-balance tracking-wide">
              Tire suas dúvidas sobre genética clínica e nossos serviços
            </p>
          </motion.div>

          <div className="space-y-4 p-4">
            {faqData.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: -25 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ ease: 'easeOut', delay: index * 0.1 }}
                className="select-none"
              >
                <div className="bg-gray-200 rounded shadow-lg hover:shadow-2xl transition-all duration-300">
                  <button
                    className="w-full px-6 py-4 text-left flex justify-between items-center hover:-translate-y-1 duration-300"
                    onClick={() => toggleAccordion(index)}
                  >
                    <span className="font-semibold text-gray-900">{item.question}</span>
                    <ChevronDown
                      className={`w-5 h-5 text-gray-500 transition-transform duration-200 ${activeIndex === index ? 'transform rotate-180' : ''
                        }`}
                    />
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-300 ease-in-out ${activeIndex === index ? 'max-h-96 py-4' : 'max-h-0'
                      }`}
                  >
                    <p className="px-6 text-gray-600">{item.answer}</p>
                  </div>
                </div>
              </motion.div>
            ))}
            <div className='flex justify-center py-4'>
              <ButtonSecondary onClick={() => handleScrollToElement('contato')}>
                Tirar mais dúvidas
                <ArrowRight className='group-hover:rotate-90 transition-all duration-200 h-5 w-5' />
              </ButtonSecondary>
            </div>
          </div>
        </div>
      </section>
    </>

  );
};

export default FAQSection;