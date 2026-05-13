import type { Metadata } from 'next'
import ServiceHero from '../servicos/components/ServiceHero'
import WhenToSeekSection from '../servicos/components/WhenToSeekSection'
import ANSCoverageSection from '../servicos/components/ANSCoverageSection'
import TelemedicineSection from '../servicos/components/TelemedicineSection'
import ServiceFaq, { type FaqItem } from '../servicos/components/ServiceFaq'
import ServiceCTASection from '../servicos/components/ServiceCTASection'
import ServiceSchemaScript from '../servicos/components/ServiceSchemaScript'
import LastReviewedByline from '../servicos/components/LastReviewedByline'

const PAGE_URL = 'https://www.mosaico.med.br/oncogenetica'
const DATE_MODIFIED = '2026-05-13'

export const metadata: Metadata = {
  title: 'Oncogenética em Brasília — Câncer Hereditário',
  description:
    'Avaliação de risco de câncer hereditário em Brasília com Dr. Fabrício Maciel. Painéis BRCA1/BRCA2, Lynch e multigênicos. Atendimento presencial e telemedicina.',
  alternates: { canonical: '/oncogenetica' },
  openGraph: {
    title: 'Oncogenética em Brasília — Mosaico Genética',
    description:
      'Avaliação de risco para câncer hereditário, painéis BRCA1/BRCA2 e Lynch, rastreamento familiar e aconselhamento genético.',
    url: PAGE_URL,
    type: 'website',
    images: ['/dna.png'],
  },
}

const whenToSeek: string[] = [
  'Câncer de mama, ovário, pâncreas ou próstata em idade jovem na família',
  'Histórico de múltiplos casos de câncer relacionados (mama, ovário, colorretal, endométrio)',
  'Diagnóstico pessoal de câncer triplo-negativo de mama em mulher abaixo de 60 anos',
  'Câncer colorretal ou de endométrio antes dos 50 anos (suspeita de Síndrome de Lynch)',
  'Múltiplos tumores primários no mesmo paciente',
  'Familiar com mutação patogênica conhecida (BRCA1, BRCA2, Lynch e outros)',
  'Câncer de mama em homem na família',
  'Síndromes hereditárias suspeitas (Li-Fraumeni, Cowden, Peutz-Jeghers, etc.)',
]

const faqItems: FaqItem[] = [
  {
    question: 'O que é oncogenética?',
    answer:
      'Oncogenética é a área da genética médica que estuda o componente hereditário do câncer. Cerca de 5% a 10% dos casos de câncer têm origem em mutações germinativas herdadas. A consulta oncogenética avalia o risco individual e familiar, indica testes genéticos quando apropriado e orienta o rastreamento e a prevenção em familiares.',
  },
  {
    question: 'O que é o teste BRCA1 e BRCA2?',
    answer:
      'BRCA1 e BRCA2 são genes envolvidos no reparo do DNA. Mutações patogênicas nesses genes aumentam significativamente o risco de câncer de mama, ovário, pâncreas e próstata. O teste é indicado para pessoas com histórico pessoal ou familiar sugestivo de síndrome hereditária de mama e ovário, e o resultado orienta decisões de rastreamento, cirurgia redutora de risco e tratamento.',
  },
  {
    question: 'O plano de saúde cobre o teste BRCA e outros painéis oncogenéticos?',
    answer:
      'Sim, em muitos casos. A DUT 110 da ANS prevê cobertura obrigatória para o teste BRCA1/BRCA2 e para painéis oncogenéticos quando o paciente atende aos critérios clínicos definidos. Na consulta, avaliamos a viabilidade de cobertura e fornecemos a documentação clínica necessária para o convênio.',
  },
  {
    question: 'Se eu não tive câncer, posso fazer o teste genético?',
    answer:
      'Em geral, o teste é mais informativo quando feito primeiro em um familiar afetado, para identificar a mutação específica da família. Se a mutação for confirmada, o teste preditivo nos demais familiares passa a ter alto valor clínico. Em algumas situações específicas (familiar com câncer já falecido sem possibilidade de teste, por exemplo), o teste no familiar saudável é discutido caso a caso.',
  },
  {
    question: 'O que muda se o resultado for positivo para uma mutação?',
    answer:
      'Um resultado positivo modifica a estratégia de rastreamento e prevenção, individualizando a frequência de exames de imagem, indicando rastreamentos adicionais (por exemplo, colonoscopia mais precoce na Síndrome de Lynch) e abrindo a possibilidade de discussão sobre cirurgias redutoras de risco. Também aciona o aconselhamento de familiares, que podem se beneficiar de testes direcionados.',
  },
  {
    question: 'Quanto tempo leva para sair o resultado do exame oncogenético?',
    answer:
      'Painéis multigênicos costumam ficar prontos em 30 a 60 dias, dependendo do laboratório e do volume do estudo. Durante a espera, mantemos o rastreamento clínico habitual e definimos previamente o plano de seguimento conforme cada possível resultado.',
  },
  {
    question: 'O teste oncogenético pode ser feito por telemedicina?',
    answer:
      'Sim. A consulta inicial, a interpretação do exame e o aconselhamento genético podem ser realizados por telemedicina nos termos da Resolução CFM 2.314/2022. A coleta da amostra para o teste é feita em laboratório credenciado na cidade do paciente, conforme orientação enviada após a consulta.',
  },
]

const medicalProcedureNode = {
  '@type': 'MedicalProcedure',
  '@id': `${PAGE_URL}#procedure`,
  name: 'Avaliação de risco genético de câncer hereditário',
  procedureType: 'https://schema.org/DiagnosticProcedure',
  description:
    'Avaliação clínica e genética para identificação de risco aumentado de câncer hereditário, com indicação dirigida de painéis genéticos (BRCA1/BRCA2, Lynch, multigênicos) e aconselhamento genético familiar.',
  bodyLocation: 'Mama, ovário, pâncreas, próstata, intestino, endométrio',
  preparation:
    'Reunir histórico médico pessoal e familiar detalhado (heredograma de pelo menos três gerações) e laudos de exames prévios.',
  followup:
    'Plano de rastreamento individualizado, indicação de exames adicionais e orientação para teste preditivo em familiares quando aplicável.',
  performer: { '@id': 'https://www.mosaico.med.br/#fabricio' },
  relevantSpecialty: {
    '@type': 'MedicalSpecialty',
    name: 'Oncogenética',
    sameAs: 'https://schema.org/MedicalGenetics',
  },
}

const breadcrumbs = [
  { name: 'Início', url: 'https://www.mosaico.med.br/' },
  { name: 'Serviços', url: 'https://www.mosaico.med.br/servicos' },
  { name: 'Oncogenética', url: PAGE_URL },
]

export default function OncogeneticaPage() {
  return (
    <>
      <ServiceSchemaScript
        url={PAGE_URL}
        name="Oncogenética em Brasília — Avaliação de Câncer Hereditário"
        description="Avaliação de risco de câncer hereditário com painéis BRCA1/BRCA2, Lynch e multigênicos, com Dr. Fabrício Maciel — presencial em Brasília e telemedicina."
        breadcrumbs={breadcrumbs}
        dateModified={DATE_MODIFIED}
        extraNodes={[medicalProcedureNode]}
      />

      <ServiceHero
        eyebrow="Oncogenética"
        title="Avaliação de câncer hereditário"
        highlight="em Brasília e em todo o Brasil"
        description="Avaliação clínica e genética do risco de câncer hereditário (mama, ovário, intestino, próstata, pâncreas) com painéis dirigidos e aconselhamento familiar. Atendimento presencial em Brasília e telemedicina com Dr. Fabrício Maciel (CRM-DF 31124 / RQE 22393)."
        imageSrc="/dna.png"
        imageAlt="Estrutura de DNA representando avaliação oncogenética"
        secondaryCta={{ label: 'Quando procurar', href: 'quando-procurar' }}
      />

      <section className="px-4 py-16 lg:py-24 bg-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl lg:text-3xl 3xl:text-4xl font-semibold text-center text-[#1e3a8a] mb-6 drop-shadow">
            O que é oncogenética
          </h2>
          <div className="space-y-5 text-gray-700 leading-relaxed">
            <p>
              Oncogenética é a área da genética médica dedicada ao componente
              hereditário do câncer. Estima-se que entre 5% e 10% dos casos de
              câncer estejam associados a mutações germinativas — alterações
              genéticas herdadas que aumentam significativamente o risco
              individual e familiar. Identificar essas mutações tem impacto
              direto no rastreamento, na prevenção e no tratamento.
            </p>
            <p>
              A consulta oncogenética é indicada para pacientes com história
              pessoal de câncer (especialmente em idade jovem ou múltiplos
              tumores) e para familiares de pessoas com diagnóstico ou mutação
              conhecida. O processo inclui anamnese detalhada, construção do
              heredograma, discussão da indicação do exame e, após o
              resultado, plano de acompanhamento personalizado para o
              paciente e para os familiares de risco.
            </p>
            <p>
              As síndromes hereditárias mais frequentes incluem a Síndrome
              Hereditária de Câncer de Mama e Ovário (associada a BRCA1 e
              BRCA2), a Síndrome de Lynch (câncer colorretal hereditário não
              polipose), Li-Fraumeni, Cowden e Peutz-Jeghers, entre outras.
              Cada uma exige estratégias específicas de rastreamento e
              acompanhamento clínico.
            </p>
          </div>
        </div>
      </section>

      <WhenToSeekSection
        title="Quando procurar o oncogeneticista"
        intro="A indicação para consulta oncogenética baseia-se em critérios clínicos amplamente reconhecidos. Os principais cenários são:"
        items={whenToSeek}
        variant="pink"
      />

      <section className="px-4 py-16 lg:py-24 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl lg:text-3xl 3xl:text-4xl font-semibold text-center text-[#1e3a8a] mb-6 drop-shadow">
            Painéis genéticos oncológicos
          </h2>
          <p className="text-center text-gray-600 max-w-2xl mx-auto mb-10 leading-relaxed">
            A escolha do painel depende do contexto clínico e do histórico
            familiar. Os exames mais frequentes na prática oncogenética são:
          </p>
          <div className="grid gap-5 md:grid-cols-2">
            <article className="bg-[#f5eaf0]/40 rounded p-5 border border-[#f5eaf0]">
              <h3 className="font-semibold text-[#1e3a8a] mb-2">
                Painel BRCA1 / BRCA2
              </h3>
              <p className="text-sm text-gray-700 leading-relaxed">
                Avaliação dos genes BRCA1 e BRCA2, principais responsáveis pela
                Síndrome Hereditária de Câncer de Mama e Ovário. Recomendado
                para pacientes e familiares com critérios clínicos
                específicos.
              </p>
            </article>
            <article className="bg-[#f5eaf0]/40 rounded p-5 border border-[#f5eaf0]">
              <h3 className="font-semibold text-[#1e3a8a] mb-2">
                Painel Lynch (MMR)
              </h3>
              <p className="text-sm text-gray-700 leading-relaxed">
                Investigação dos genes de reparo de DNA (MLH1, MSH2, MSH6,
                PMS2, EPCAM). Indicado para suspeita de Síndrome de Lynch,
                associada a câncer colorretal, endometrial e outros tumores.
              </p>
            </article>
            <article className="bg-[#f5eaf0]/40 rounded p-5 border border-[#f5eaf0]">
              <h3 className="font-semibold text-[#1e3a8a] mb-2">
                Painel multigênico oncológico
              </h3>
              <p className="text-sm text-gray-700 leading-relaxed">
                Estudo simultâneo de dezenas de genes associados a diferentes
                síndromes hereditárias. Útil quando há fenótipos sobrepostos
                ou histórico familiar misto.
              </p>
            </article>
            <article className="bg-[#f5eaf0]/40 rounded p-5 border border-[#f5eaf0]">
              <h3 className="font-semibold text-[#1e3a8a] mb-2">
                Teste preditivo familiar
              </h3>
              <p className="text-sm text-gray-700 leading-relaxed">
                Após identificação da mutação no caso índice, o teste
                direcionado em familiares permite identificar quem herdou a
                alteração e estabelecer plano de rastreamento personalizado.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="px-4 py-16 lg:py-24 bg-[#d9edf2]/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl lg:text-3xl 3xl:text-4xl font-semibold text-center text-[#1e3a8a] mb-10 drop-shadow">
            Rastreamento familiar após resultado positivo
          </h2>
          <div className="space-y-5 text-gray-700 leading-relaxed">
            <p>
              Quando uma mutação patogênica é identificada, abre-se a
              possibilidade de oferecer aos familiares biologicamente
              relacionados o teste preditivo direcionado para a mesma
              alteração. Esse processo, chamado de cascata de testes
              familiares, é uma das ações de maior impacto em saúde pública na
              oncogenética: identifica precocemente pessoas com risco
              aumentado e permite que estratégias de prevenção e rastreamento
              sejam iniciadas antes do surgimento do câncer.
            </p>
            <p>
              O aconselhamento genético é parte essencial desse processo. A
              decisão de testar — ou não — é individual, voluntária e
              fundamentada em informação detalhada sobre as implicações
              clínicas, emocionais e familiares do resultado. Acompanhamos os
              pacientes e familiares em cada etapa, do esclarecimento inicial
              ao plano de seguimento de longo prazo.
            </p>
          </div>
        </div>
      </section>

      <ANSCoverageSection />
      <TelemedicineSection />

      <ServiceFaq
        title="Perguntas frequentes sobre oncogenética"
        intro="Reunimos abaixo as principais dúvidas trazidas por pacientes e familiares à consulta oncogenética. Casos específicos exigem avaliação individualizada."
        items={faqItems}
        variant="blue"
      />

      <ServiceCTASection
        title="Quer avaliar o risco hereditário de câncer no seu caso?"
        description="Agende uma consulta oncogenética com Dr. Fabrício Maciel — presencial em Brasília ou online em todo o Brasil. Em dúvidas urgentes, fale por WhatsApp."
      />

      <LastReviewedByline date={DATE_MODIFIED} />
    </>
  )
}
