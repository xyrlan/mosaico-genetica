import Link from "next/link";
import { ArrowRight } from "lucide-react";

const areas = [
  {
    title: "Autismo (infantil e adulto)",
    description:
      "Investigação genética do Transtorno do Espectro Autista (TEA), incluindo análise cromossômica e sequenciamento quando indicado.",
  },
  {
    title: "Neurogenética",
    description:
      "Diagnóstico e acompanhamento de doenças neuromusculares, neurodegenerativas, ataxias, epilepsias genéticas e distrofias musculares.",
  },
  {
    title: "Oncogenética",
    description:
      "Avaliação de risco hereditário para câncer (mama, ovário, colorretal, próstata), incluindo painéis BRCA e Lynch.",
  },
  {
    title: "Genética reprodutiva",
    description:
      "Aconselhamento pré-concepcional, investigação de aborto recorrente e orientação para casais com histórico familiar de doenças hereditárias.",
  },
  {
    title: "Genética preditiva",
    description:
      "Avaliação de risco para doenças genéticas em pacientes assintomáticos com histórico familiar relevante.",
  },
  {
    title: "Deficiência intelectual",
    description:
      "Investigação etiológica em crianças e adultos com atraso no desenvolvimento ou deficiência intelectual de causa inexplicada.",
  },
  {
    title: "Erros inatos do metabolismo",
    description:
      "Diagnóstico, acompanhamento e suporte multidisciplinar para pacientes com doenças metabólicas hereditárias.",
  },
  {
    title: "Interpretação de exames genéticos",
    description:
      "Análise técnica de laudos de exomas, painéis e cariótipos solicitados por outros médicos ou diretamente pelos pacientes.",
  },
  {
    title: "Pareceres genéticos",
    description:
      "Segunda opinião especializada para casos complexos, indicação de exames adicionais e orientação clínica fundamentada.",
  },
];

export default function AreasAtuacao() {
  return (
    <section
      id="areas"
      className="px-4 py-16 lg:py-24 bg-white"
      aria-labelledby="areas-heading"
    >
      <div className="max-w-5xl mx-auto">
        <h2
          id="areas-heading"
          className="text-2xl lg:text-3xl 3xl:text-4xl font-semibold text-center text-[#1e3a8a] mb-4"
        >
          Áreas de atuação
        </h2>
        <p className="text-center text-gray-600 max-w-2xl mx-auto mb-10">
          O Dr. Fabrício atende as nove áreas mais relevantes da genética médica
          clínica, com foco em famílias com doenças raras.
        </p>
        <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {areas.map((area) => (
            <li
              key={area.title}
              className="rounded p-5 bg-[#f5eaf0]/40 border border-[#f5eaf0]"
            >
              <h3 className="font-semibold text-[#1e3a8a] mb-2">
                {area.title}
              </h3>
              <p className="text-sm text-gray-700">{area.description}</p>
            </li>
          ))}
        </ul>
        <div className="flex justify-center mt-10">
          <Link
            href="/servicos"
            className="inline-flex items-center gap-2 text-[#1e3a8a] font-semibold hover:gap-3 transition-all duration-200"
          >
            Ver todos os serviços
            <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
}
