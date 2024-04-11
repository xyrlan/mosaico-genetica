import Image from 'next/image'
import React from 'react'

const ServicesSection = () => {
  const services = [
    {
      name: 'Erros Inatos do Metabolismo',
      description: 'Nossa equipe especializada em Erros Inatos do Metabolismo está aqui para desvendar os complexos desafios metabólicos.',
      icon: '/path/to/erros-inatos-do-metabolismo-icon.png'
    },
    {
      name: 'Neurogenética',
      description: 'Na Mosaico, compreendemos as nuances da Neurogenética, focando em condições neurológicas hereditárias e oferecendo soluções clínicas avançadas para enfrentar desafios neurogenéticos.',
      icon: '/path/to/neurogenetica-icon.png'
    },
    {
      name: 'Genética Reprodutiva',
      description: 'Em Genética Reprodutiva, concentramo-nos em auxiliar casais que buscam orientação sobre riscos genéticos durante a gestação.',
      icon: '/path/to/genetica-reprodutiva-icon.png'
    },
    {
      name: 'Oncogenética',
      description: 'Para aqueles enfrentando desafios oncológicos hereditários, nossa equipe proporciona aconselhamento e estratégias personalizadas de monitoramento.',
      icon: '/path/to/oncogenetica-icon.png'
    },
    {
      name: 'Interpretação de Exames Genéticos',
      description: 'Na era da genômica, oferecemos interpretação avançada de exames genéticos.',
      icon: '/path/to/interpretacao-exames-geneticos-icon.png'
    },
    {
      name: 'Pareceres',
      description: 'Nossa equipe atua em estreita colaboração com hospitais, proporcionando pareceres genéticos abrangentes para crianças enfrentando desafios médicos complexos.',
      icon: '/path/to/pareceres-icon.png'
    }
  ];

  return (
    <section id='servicos' className='min-h-screen relative py-24  flex flex-col items-center'>
      <div className='max-w-6xl'>
        <div className='flex flex-col items-center gap-7'>
          <h2 className='text-4xl font-semibold text-center max-w-2xl'>Serviços que estão além do diagnóstico</h2>
          <p className='text-lg md:text-xl font-medium text-gray-600 max-w-4xl text-center text-balance tracking-wide'>Entendemos que cada jornada na genética é única, e na Mosaico abraçamos oferecemos aconselhamento nas diversas áreas da genética clínica para oferecer suporte holístico às necessidades específicas de cada paciente.</p>
        </div>
        <dl className="mt-14 text-base leading-7 text-gray-600 lg:max-w-none grid md:grid-cols-2 gap-8">
          {services.map((service) => (
            <div key={service.name} className="relative pl-9 flex flex-col items-center bg-gray-200 rounded-2xl p-8 hover:-translate-y-2 duration-300 transition-all hover:text-white shadow-lg hover:shadow-2xl">
              <Image src={service.icon} alt={service.name} width={600} height={600} className='h-[150px] md:h-[300px] w-auto object-center' />
              <dt className="font-semibold  justify-center text-3xl mt-5">
                {service.name}
              </dt>
              <dd className="mt-3">{service.description}</dd>
            </div>
          ))}
        </dl>

      </div>
    </section>
  )
}

export default ServicesSection