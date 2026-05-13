const sobreFaq = [
  {
    question: "Atende crianças e adultos?",
    answer:
      "Sim. O Dr. Fabrício atende pacientes pediátricos e adultos, incluindo idosos com indicação de oncogenética e familiares assintomáticos em avaliação de risco.",
  },
  {
    question: "Atende em qual estado por telemedicina?",
    answer:
      "Em todo o Brasil, conforme a Resolução CFM 2.314/2022. A consulta é realizada por videoconferência segura e o prontuário é enviado ao final.",
  },
  {
    question: "É possível pedir reembolso ao plano de saúde?",
    answer:
      "Em muitos casos sim. Após a consulta, é fornecido recibo médico padronizado para solicitação de reembolso conforme as regras do plano. Exames cobertos pela DUT 110 da ANS podem ser solicitados pelo convênio.",
  },
];

export default function SobreFaq() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: sobreFaq.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  };

  return (
    <section
      id="sobre-faq"
      className="px-4 py-16 lg:py-24 bg-[#f5eaf0]/40"
      aria-labelledby="sobre-faq-heading"
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <div className="max-w-3xl mx-auto">
        <h2
          id="sobre-faq-heading"
          className="text-2xl lg:text-3xl 3xl:text-4xl font-semibold text-center text-[#1e3a8a] mb-10"
        >
          Perguntas sobre o atendimento
        </h2>
        <dl className="space-y-6">
          {sobreFaq.map((item) => (
            <div key={item.question} className="bg-white rounded p-5 shadow-sm">
              <dt className="font-semibold text-[#1e3a8a]">{item.question}</dt>
              <dd className="text-gray-700 mt-2 leading-relaxed">
                {item.answer}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
