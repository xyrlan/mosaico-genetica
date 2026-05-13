import H2 from '@/app/components/H2'
import { ShieldCheck, FileText, AlertCircle } from 'lucide-react'

export default function ANSCoverageSection() {
  return (
    <section
      id="plano-de-saude"
      className="px-4 py-16 lg:py-24 bg-white"
      aria-labelledby="ans-heading"
    >
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col items-center text-center mb-10">
          <H2>Cobertura pelo plano de saúde</H2>
          <p className="text-gray-600 max-w-2xl mt-4 leading-relaxed">
            A DUT 110 da ANS (Diretriz de Utilização) lista doenças genéticas
            com cobertura obrigatória por planos de saúde no Brasil. Os exames
            indicados podem ser solicitados pelo convênio quando o paciente se
            enquadra nos critérios clínicos.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          <div className="bg-[#f5eaf0]/50 rounded p-5 border border-[#f5eaf0]">
            <ShieldCheck className="text-[#7fc2d2] mb-3" size={28} />
            <h3 className="font-semibold text-[#1e3a8a] mb-2">
              Cobertura ANS DUT 110
            </h3>
            <p className="text-sm text-gray-700 leading-relaxed">
              Painéis BRCA1/BRCA2, painel oncogenético, microarray cromossômico,
              exoma e outros exames podem ser cobertos quando os critérios DUT
              são atendidos.
            </p>
          </div>
          <div className="bg-[#f5eaf0]/50 rounded p-5 border border-[#f5eaf0]">
            <FileText className="text-[#7fc2d2] mb-3" size={28} />
            <h3 className="font-semibold text-[#1e3a8a] mb-2">
              Reembolso particular
            </h3>
            <p className="text-sm text-gray-700 leading-relaxed">
              Atendimento particular com recibo médico padronizado para
              solicitação de reembolso conforme as regras do seu plano de
              saúde.
            </p>
          </div>
          <div className="bg-[#f5eaf0]/50 rounded p-5 border border-[#f5eaf0]">
            <AlertCircle className="text-[#7fc2d2] mb-3" size={28} />
            <h3 className="font-semibold text-[#1e3a8a] mb-2">
              Orientação personalizada
            </h3>
            <p className="text-sm text-gray-700 leading-relaxed">
              Na consulta, a viabilidade de cobertura é avaliada caso a caso e
              fornecemos a documentação clínica necessária.
            </p>
          </div>
        </div>

        <p className="text-xs text-gray-500 mt-8 text-center max-w-2xl mx-auto">
          A cobertura depende do plano contratado, dos critérios clínicos da
          DUT e da análise da operadora. Esta página não substitui a
          orientação do convênio.
        </p>
      </div>
    </section>
  )
}
