export default function AbordagemClinica() {
  return (
    <section
      id="abordagem"
      className="px-4 py-16 lg:py-24 bg-[#d9edf2]/40"
      aria-labelledby="abordagem-heading"
    >
      <div className="max-w-3xl mx-auto">
        <h2
          id="abordagem-heading"
          className="text-2xl lg:text-3xl 3xl:text-4xl font-semibold text-center text-[#1e3a8a] mb-8"
        >
          Como é o atendimento
        </h2>
        <div className="space-y-5 text-gray-700 leading-relaxed">
          <p>
            A consulta com o Dr. Fabrício começa por uma anamnese ampliada da
            história clínica do paciente e da família. O heredograma é
            construído em conjunto, revisando antecedentes em pelo menos três
            gerações, e exames prévios são reavaliados quando disponíveis. Esse
            mapeamento orienta a indicação ou não de testes genéticos
            adicionais.
          </p>
          <p>
            O acompanhamento privilegia famílias com diagnóstico recente ou
            ainda em investigação de doenças raras. Quando necessário, o
            Dr. Fabrício articula a continuidade com neuropediatras, oncologistas,
            psiquiatras, geneticistas laboratoriais e serviços públicos, com
            atenção especial à transição entre o sistema privado e o SUS.
          </p>
          <p>
            Pacientes fora de Brasília são atendidos por telemedicina nos termos
            da Resolução CFM 2.314/2022. Toda comunicação clínica é registrada
            no prontuário eletrônico e compartilhada com o paciente ao final da
            consulta, juntamente com o plano de cuidado proposto.
          </p>
        </div>
      </div>
    </section>
  );
}
