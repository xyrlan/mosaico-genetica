"use client";
import React from 'react';
import { ChevronDown } from 'lucide-react';
import { motion } from 'framer-motion';
import H2 from './H2';
import Head from 'next/head';

const FAQSection = () => {
  const [activeIndex, setActiveIndex] = React.useState(null);

  const faqData = [
    {
      question: "O que faz um médico geneticista?",
      answer: "Um médico geneticista investiga condições que podem ter origem genética, ajudando no diagnóstico, acompanhamento e aconselhamento de pacientes e suas famílias. Ele analisa o histórico familiar, solicita e interpreta exames genéticos e orienta sobre riscos hereditários, prognóstico e opções de tratamento."
    },
    {
      question: "Quando devo procurar um geneticista?",
      answer: "Você pode procurar um geneticista se: Há suspeita de uma doença genética na família. Você tem um filho com atraso no desenvolvimento, autismo ou deficiência intelectual. Existe histórico familiar de doenças hereditárias, como câncer hereditário ou doenças neuromusculares. Você está planejando uma gravidez e deseja entender riscos genéticos. Você já fez um exame genético e precisa de ajuda para interpretar os resultados."
    },
    {
      question: "Como funciona uma consulta com o geneticista?",
      answer: "A consulta geralmente inclui uma conversa detalhada sobre sua saúde e a de seus familiares, um exame clínico (se necessário) e a análise de exames prévios. Se for o caso, o geneticista pode solicitar testes genéticos para aprofundar a investigação. Depois, ele explica os resultados e discute as melhores opções de acompanhamento ou tratamento."
    },
    {
      question: "O que é aconselhamento genético e para que serve?",
      answer: "O aconselhamento genético é um processo que ajuda pacientes e famílias a entenderem melhor doenças hereditárias, os riscos genéticos envolvidos e as opções disponíveis para prevenção, diagnóstico e tratamento. Ele é essencial para quem deseja tomar decisões informadas sobre sua saúde ou planejamento familiar."
    },
    {
      question: "O que são exames genéticos e quando são necessários?",
      answer: "Os exames genéticos analisam o DNA para identificar mutações associadas a doenças hereditárias. Eles podem ser indicados para confirmar um diagnóstico, prever riscos futuros, guiar tratamentos ou ajudar no planejamento reprodutivo. Nem todo paciente precisa de um exame genético, e a decisão de realizá-lo deve ser feita com a orientação de um geneticista."
    },
    {
      question: "A genética pode prever se vou ter uma doença no futuro?",
      answer: "Depende da condição. Alguns exames genéticos conseguem identificar riscos aumentados para certas doenças, como alguns tipos de câncer hereditário ou doenças neurodegenerativas. No entanto, fatores ambientais e estilo de vida também influenciam o desenvolvimento de muitas condições. O aconselhamento genético pode ajudar a interpretar essas informações e a planejar cuidados de saúde adequados."
    },
    {
      question: "O atendimento é apenas presencial ou também há telemedicina?",
      answer: "Na Mosaico, oferecemos atendimento tanto presencial quanto por telemedicina para que pacientes de todo o Brasil possam ter acesso aos serviços genéticos, sem precisar sair de casa."
    },
    {
      question: "Os serviços da Mosaico são cobertos por planos de saúde?",
      answer: "A cobertura dos serviços depende do plano de saúde e do tipo de exame ou consulta. Podemos orientar sobre reembolsos ou encaminhamentos necessários para que você tenha acesso ao atendimento da melhor forma possível."
    }
  ];

  const toggleAccordion = (index: any) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqData.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <>
     <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
        />
      </Head>
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
                    className={`w-5 h-5 text-gray-500 transition-transform duration-200 ${
                      activeIndex === index ? 'transform rotate-180' : ''
                    }`}
                  />
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    activeIndex === index ? 'max-h-96 py-4' : 'max-h-0'
                  }`}
                >
                  <p className="px-6 text-gray-600">{item.answer}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
    </>
   
  );
};

export default FAQSection;