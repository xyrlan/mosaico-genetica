'use client'
import Image from 'next/image'
import React from 'react'
import { motion } from 'framer-motion'
import H2 from './H2'
import AgendarConsulta from './AgendarConsulta'


const ServicesSection = () => {

  const services = [
    {
      name: 'Erros Inatos do Metabolismo',
      description: 'Nossa equipe especializada em Erros Inatos do Metabolismo está aqui para desvendar os complexos desafios metabólicos especíicos da pessoa.',
      icon: '/metabolism.png'
    },
    {
      name: 'Neurogenética',
      description: 'Na Mosaico, compreendemos as nuances da Neurogenética, focando em condições neurológicas hereditárias e oferecendo soluções clínicas avançadas para enfrentar desafios neurogenéticos.',
      icon: '/braindna.png'
    },
    {
      name: 'Genética Reprodutiva',
      description: 'Em Genética Reprodutiva, concentramo-nos em auxiliar casais que buscam orientação sobre riscos genéticos durante a gestação.',
      icon: '/fertilization.png'
    },
    {
      name: 'Oncogenética',
      description: 'Para aqueles que enfrentam desafios oncológicos hereditários, nossa equipe proporciona aconselhamento e estratégias personalizadas de monitoramento.',
      icon: '/dna.png'
    },
    {
      name: 'Interpretação de Exames Genéticos',
      description: 'Na era da genômica, oferecemos interpretação avançada de exames genéticos.',
      icon: '/search.png'
    },
    {
      name: 'Pareceres',
      description: 'Nossa equipe atua em estreita colaboração com hospitais, proporcionando pareceres genéticos abrangentes para crianças enfrentando desafios médicos complexos.',
      icon: '/clipboard.png'
    }
  ];

  return (
    <section id='servicos' className='min-h-screen relative py-24 px-4 flex flex-col items-center justify-center'>

      <div className='max-w-6xl flex flex-col gap-7'>
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ ease: 'easeOut', duration: 1 }}
          className='flex flex-col items-center lg:gap-7'>
          <H2>Cuidado além do diagnóstico</H2>
          <p className='text-sm md:text-lg 3xl:text-xl font-medium text-gray-600 max-w-4xl text-center text-balance tracking-wide'>
            Na Mosaico, reconhecemos que cada jornada na genética é única. Por isso, proporcionamos aconselhamento especializado em várias áreas da genética clínica, buscando oferecer um suporte holístico e personalizado que atenda às necessidades específicas de cada paciente.</p>
        </motion.div>
        <ul className="mt-14 text-base leading-7 text-gray-600 lg:max-w-none grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <motion.li
              key={service.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ ease: 'easeOut', duration: 1 }}
              className='h-full'
            >
              <div className="h-full relative flex flex-col justify-around items-center bg-gray-200 rounded p-8 hover:-translate-y-2 duration-300 transition-all shadow-lg hover:shadow-2xl ">
                <Image src={service.icon} alt={service.name} width={600} height={600} className='h-[50px] md:h-[80px] w-auto object-center saturate-[40%] select-none' />
                <h3 className="font-semibold justify-center text-xl lg:text-2xl 3xl:text-3xl mt-5 text-center">
                  {service.name}
                </h3>
                <p className="mt-3 text-center text-sm xl:text-base">{service.description}</p>
                <div className=' flex justify-center mt-4'>
                  <AgendarConsulta />
                </div>
              </div>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default ServicesSection