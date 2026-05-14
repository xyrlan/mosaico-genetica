import type { Metadata } from 'next'
import ServiceHero from '../servicos/components/ServiceHero'
import WhenToSeekSection from '../servicos/components/WhenToSeekSection'
import ANSCoverageSection from '../servicos/components/ANSCoverageSection'
import TelemedicineSection from '../servicos/components/TelemedicineSection'
import ServiceFaq, { type FaqItem } from '../servicos/components/ServiceFaq'
import ServiceCTASection from '../servicos/components/ServiceCTASection'
import ServiceSchemaScript from '../servicos/components/ServiceSchemaScript'
import LastReviewedByline from '../servicos/components/LastReviewedByline'
import Breadcrumbs from '../components/Breadcrumbs'

const PAGE_URL = 'https://www.mosaico.med.br/autismo'
const DATE_MODIFIED = '2026-05-13'

export const metadata: Metadata = {
  title: 'Geneticista para Autismo (TEA) em Brasília',
  description:
    'Investigação genética do autismo (TEA) para crianças e adultos com Dr. Fabrício Maciel. Atendimento presencial em Brasília e telemedicina nacional.',
  alternates: { canonical: '/autismo' },
  openGraph: {
    title: 'Geneticista para Autismo (TEA) em Brasília | Mosaico Genética',
    description:
      'Investigação genética do TEA para crianças e adultos. Atendimento presencial em Brasília e telemedicina nacional.',
    url: PAGE_URL,
    type: 'website',
    images: ['/autism.png'],
  },
}

const whenToSeek: string[] = [
  'Diagnóstico recente de Transtorno do Espectro Autista em criança ou adulto',
  'Suspeita de causa genética para o autismo (sinais sindrômicos, malformações associadas)',
  'Histórico familiar de autismo, deficiência intelectual ou doença genética',
  'Atraso significativo no desenvolvimento da fala ou da motricidade associado ao TEA',
  'Recomendação de microarray, exoma ou painel genético por outro especialista',
  'Necessidade de aconselhamento reprodutivo para casais com filho com TEA',
  'Dúvidas sobre interpretação de exame genético já realizado',
  'Casos com fenótipos neurológicos sobrepostos (epilepsia, regressão, dismorfias)',
]

const faqItems: FaqItem[] = [
  {
    question: 'Todo paciente com autismo deve fazer exame genético?',
    answer:
      'Não. A indicação de testes genéticos no TEA é individual e depende de sinais clínicos sugestivos de causa genética. Diretrizes nacionais e internacionais — incluindo recomendações da Academia Americana de Pediatria — sugerem investigação quando há comorbidades, sinais dismórficos, deficiência intelectual associada, regressão do desenvolvimento ou histórico familiar relevante. A decisão é tomada em conjunto, na consulta, considerando o benefício clínico para o paciente e a família.',
  },
  {
    question: 'Quais exames genéticos podem ser indicados na investigação do TEA?',
    answer:
      'Os exames mais comuns são o microarray cromossômico (CMA) — primeira linha em muitos protocolos — e o teste para Síndrome do X-Frágil (FMR1). Em casos selecionados, o painel genético dirigido ou o exoma podem ser indicados. A escolha depende do contexto clínico, do custo-benefício e da disponibilidade pelo plano de saúde ou via reembolso.',
  },
  {
    question: 'Qual a idade mínima para investigação genética do autismo?',
    answer:
      'Não há idade mínima rígida. A investigação pode ser feita logo após o diagnóstico clínico de TEA, em qualquer idade. Em crianças muito pequenas, costumamos priorizar o diagnóstico clínico funcional e a intervenção precoce, e a investigação genética é planejada conforme a evolução e os achados clínicos.',
  },
  {
    question: 'Autismo é sempre hereditário?',
    answer:
      'Não. A genética contribui de forma importante para o TEA, mas em uma parte significativa dos casos a causa identificável é uma alteração nova (de novo), não herdada dos pais. Em outros casos, há herança poligênica (múltiplos genes de pequeno efeito) ou síndromes monogênicas específicas. O exame genético ajuda a identificar a contribuição em cada caso.',
  },
  {
    question: 'Diagnóstico de autismo no adulto: vale a pena investigar geneticamente?',
    answer:
      'Em muitos casos, sim. O diagnóstico tardio é frequente, especialmente em mulheres, e o estudo genético pode trazer informações úteis sobre comorbidades, planejamento reprodutivo e rastreamento de outros familiares. A consulta avalia caso a caso o benefício clínico real da investigação.',
  },
  {
    question: 'O plano de saúde cobre exames genéticos para autismo?',
    answer:
      'Em muitos casos, sim. A DUT 110 da ANS lista doenças genéticas com cobertura obrigatória, e o microarray cromossômico (CMA) tem cobertura prevista para investigação de TEA quando os critérios clínicos são atendidos. Na consulta, avaliamos a viabilidade de cobertura e emitimos a documentação clínica necessária para a operadora.',
  },
  {
    question: 'Posso fazer a consulta por telemedicina mesmo morando fora de Brasília?',
    answer:
      'Sim. A consulta de genética para investigação de TEA é totalmente possível por telemedicina nos termos da Resolução CFM 2.314/2022. O paciente recebe o plano de cuidado por escrito e a solicitação de exames com orientação para coleta na cidade onde mora.',
  },
]

const medicalConditionNode = {
  '@type': 'MedicalCondition',
  '@id': `${PAGE_URL}#condition`,
  name: 'Transtorno do Espectro Autista (TEA)',
  alternateName: ['Autismo', 'TEA'],
  code: { '@type': 'MedicalCode', codeValue: 'F84.0', codingSystem: 'ICD-10' },
  associatedAnatomy: { '@type': 'AnatomicalStructure', name: 'Sistema Nervoso Central' },
  possibleTreatment: [
    {
      '@type': 'MedicalProcedure',
      name: 'Investigação genética do TEA',
      procedureType: 'https://schema.org/DiagnosticProcedure',
    },
    {
      '@type': 'MedicalProcedure',
      name: 'Aconselhamento genético familiar',
      procedureType: 'https://schema.org/TherapeuticProcedure',
    },
  ],
  relevantSpecialty: {
    '@type': 'MedicalSpecialty',
    name: 'Genética Médica',
    sameAs: 'https://schema.org/MedicalGenetics',
  },
}

const breadcrumbs = [
  { name: 'Início', url: 'https://www.mosaico.med.br/' },
  { name: 'Serviços', url: 'https://www.mosaico.med.br/servicos' },
  { name: 'Autismo (TEA)', url: PAGE_URL },
]

export default function AutismoPage() {
  return (
    <>
      <ServiceSchemaScript
        url={PAGE_URL}
        name="Geneticista para Autismo (TEA) em Brasília"
        description="Investigação genética do Transtorno do Espectro Autista para crianças e adultos com Dr. Fabrício Maciel — presencial em Brasília e telemedicina nacional."
        breadcrumbs={breadcrumbs}
        dateModified={DATE_MODIFIED}
        extraNodes={[medicalConditionNode]}
      />

      <Breadcrumbs
        items={[
          { name: 'Início', href: '/' },
          { name: 'Serviços', href: '/servicos' },
          { name: 'Autismo (TEA)' },
        ]}
      />

      <ServiceHero
        eyebrow="Autismo (TEA)"
        title="Geneticista para Autismo"
        highlight="em Brasília e em todo o Brasil"
        description="Investigação genética do Transtorno do Espectro Autista (TEA) para crianças e adultos, com indicação dirigida de exames quando há benefício clínico. Atendimento presencial em Brasília e telemedicina nacional com Dr. Fabrício Maciel (CRM-DF 31124 / RQE 22393)."
        imageSrc="/autism.png"
        imageAlt="Avaliação genética de criança com Transtorno do Espectro Autista"
        secondaryCta={{ label: 'Quando procurar', href: 'quando-procurar' }}
      />

      <section className="px-4 py-16 lg:py-24 bg-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl lg:text-3xl 3xl:text-4xl font-semibold text-center text-[#1e3a8a] mb-6 drop-shadow">
            O que é o Transtorno do Espectro Autista
          </h2>
          <div className="space-y-5 text-gray-700 leading-relaxed">
            <p>
              O Transtorno do Espectro Autista (TEA) é uma condição do
              neurodesenvolvimento caracterizada por diferenças persistentes na
              comunicação social e por padrões restritos ou repetitivos de
              comportamento, interesses e atividades. O diagnóstico é
              essencialmente clínico, feito por equipe especializada com base
              em entrevistas, observação direta e instrumentos padronizados.
            </p>
            <p>
              A genética é um dos pilares da compreensão moderna do TEA.
              Estudos mostram que fatores genéticos contribuem de forma
              importante para o risco da condição — sejam variantes herdadas,
              variantes <em>de novo</em> (novas, surgidas no próprio paciente)
              ou síndromes monogênicas específicas, como a Síndrome do
              X-Frágil. Identificar a contribuição genética em cada caso pode
              orientar o manejo clínico, a investigação de comorbidades e o
              aconselhamento familiar.
            </p>
            <p>
              A investigação genética não substitui o diagnóstico clínico do
              TEA nem o tratamento multidisciplinar. Ela é uma ferramenta
              complementar, indicada para casos selecionados, com objetivo de
              esclarecer a etiologia, identificar riscos associados e oferecer
              informação adequada à família.
            </p>
          </div>
        </div>
      </section>

      <WhenToSeekSection
        title="Quando procurar a investigação genética no TEA"
        intro="A indicação de avaliação genética é individual. Em geral, é considerada nas seguintes situações."
        items={whenToSeek}
        variant="pink"
      />

      <section className="px-4 py-16 lg:py-24 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl lg:text-3xl 3xl:text-4xl font-semibold text-center text-[#1e3a8a] mb-6 drop-shadow">
            Quais exames genéticos podem ser indicados
          </h2>
          <p className="text-center text-gray-600 max-w-2xl mx-auto mb-10 leading-relaxed">
            A escolha do exame depende do contexto clínico, do histórico
            familiar e dos achados do exame físico. Os exames mais utilizados
            na investigação genética do TEA são:
          </p>
          <div className="grid gap-5 md:grid-cols-2">
            <article className="bg-[#f5eaf0]/40 rounded p-5 border border-[#f5eaf0]">
              <h3 className="font-semibold text-[#1e3a8a] mb-2">
                Microarray cromossômico (CMA)
              </h3>
              <p className="text-sm text-gray-700 leading-relaxed">
                Considerado exame de primeira linha em muitos protocolos
                internacionais. Detecta perdas e ganhos cromossômicos
                (microdeleções e microduplicações) que podem ser causa de TEA,
                deficiência intelectual ou síndromes associadas.
              </p>
            </article>
            <article className="bg-[#f5eaf0]/40 rounded p-5 border border-[#f5eaf0]">
              <h3 className="font-semibold text-[#1e3a8a] mb-2">
                Teste para Síndrome do X-Frágil (FMR1)
              </h3>
              <p className="text-sm text-gray-700 leading-relaxed">
                Investiga a expansão da repetição CGG no gene FMR1, a causa
                monogênica mais comum de deficiência intelectual herdada e uma
                causa reconhecida de TEA, especialmente em meninos.
              </p>
            </article>
            <article className="bg-[#f5eaf0]/40 rounded p-5 border border-[#f5eaf0]">
              <h3 className="font-semibold text-[#1e3a8a] mb-2">
                Painel genético dirigido
              </h3>
              <p className="text-sm text-gray-700 leading-relaxed">
                Painéis com dezenas a centenas de genes associados a TEA e
                neurodesenvolvimento. Indicados quando há suspeita sindrômica
                ou quando exames anteriores foram inconclusivos.
              </p>
            </article>
            <article className="bg-[#f5eaf0]/40 rounded p-5 border border-[#f5eaf0]">
              <h3 className="font-semibold text-[#1e3a8a] mb-2">
                Sequenciamento completo do exoma
              </h3>
              <p className="text-sm text-gray-700 leading-relaxed">
                Analisa simultaneamente milhares de genes. Indicado em casos
                complexos, com múltiplas comorbidades ou quando os exames de
                primeira linha não esclareceram a etiologia.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="px-4 py-16 lg:py-24 bg-[#d9edf2]/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl lg:text-3xl 3xl:text-4xl font-semibold text-center text-[#1e3a8a] mb-10 drop-shadow">
            Autismo infantil e autismo adulto
          </h2>
          <div className="grid gap-6 md:grid-cols-2">
            <article className="bg-white rounded p-6 shadow-sm">
              <h3 className="font-semibold text-[#1e3a8a] text-lg mb-3">
                Investigação no TEA infantil
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Em crianças, a investigação genética é frequentemente
                solicitada após o diagnóstico clínico inicial, especialmente
                quando há comorbidades, sinais dismórficos, deficiência
                intelectual associada ou histórico familiar. O envolvimento
                dos pais e cuidadores no processo é essencial — a história
                familiar fornece pistas importantes para a hipótese
                diagnóstica e para o aconselhamento.
              </p>
            </article>
            <article className="bg-white rounded p-6 shadow-sm">
              <h3 className="font-semibold text-[#1e3a8a] text-lg mb-3">
                Investigação no TEA adulto
              </h3>
              <p className="text-gray-700 leading-relaxed">
                O diagnóstico tardio de TEA tem se tornado mais comum,
                principalmente em mulheres e em pessoas com apresentação
                clínica menos evidente. A avaliação genética no adulto pode
                trazer informação útil para o planejamento reprodutivo, para o
                rastreamento de outros familiares e para a investigação de
                comorbidades. A discussão prévia das expectativas é central.
              </p>
            </article>
          </div>
        </div>
      </section>

      <ANSCoverageSection />
      <TelemedicineSection />

      <ServiceFaq
        title="Perguntas frequentes sobre autismo e genética"
        intro="Reunimos abaixo as principais dúvidas que famílias e pacientes adultos trazem à consulta. Casos específicos exigem avaliação individualizada."
        items={faqItems}
        variant="blue"
      />

      <ServiceCTASection
        title="Quer entender a base genética do TEA no seu caso?"
        description="Agende uma consulta com o Dr. Fabrício Maciel — presencial em Brasília ou online em todo o Brasil. Em casos urgentes, fale por WhatsApp."
      />

      <LastReviewedByline date={DATE_MODIFIED} />
    </>
  )
}
