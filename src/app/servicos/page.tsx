import type { Metadata } from 'next'
import ServiceHero from './components/ServiceHero'
import WhenToSeekSection from './components/WhenToSeekSection'
import AreasGrid, { type ServiceArea } from './components/AreasGrid'
import ANSCoverageSection from './components/ANSCoverageSection'
import TelemedicineSection from './components/TelemedicineSection'
import ServiceFaq, { type FaqItem } from './components/ServiceFaq'
import ServiceCTASection from './components/ServiceCTASection'
import ServiceSchemaScript from './components/ServiceSchemaScript'
import LastReviewedByline from './components/LastReviewedByline'
import Breadcrumbs from '../components/Breadcrumbs'

const SERVICOS_DATE_MODIFIED = '2026-05-13'
const SERVICOS_URL = 'https://www.mosaico.med.br/servicos'

export const metadata: Metadata = {
  title: 'Serviços de Genética Médica em Brasília',
  description:
    'Consulta de genética médica em Brasília e telemedicina nacional: autismo, neurogenética, oncogenética, doenças raras e exames com Dr. Fabrício Maciel.',
  alternates: { canonical: '/servicos' },
  openGraph: {
    title: 'Serviços | Mosaico Genética — Dr. Fabrício Maciel',
    description:
      'Diagnóstico, acompanhamento e aconselhamento genético para famílias com doenças raras. Presencial em Brasília e telemedicina em todo o Brasil.',
    url: SERVICOS_URL,
    type: 'website',
    images: ['/logomosaico.png'],
  },
}

const areas: ServiceArea[] = [
  {
    title: 'Autismo (TEA)',
    description:
      'Investigação genética do Transtorno do Espectro Autista para crianças e adultos, com indicação clínica de microarray, painéis e exoma quando apropriado.',
    href: '/autismo',
  },
  {
    title: 'Oncogenética',
    description:
      'Avaliação de risco para câncer hereditário, incluindo painéis BRCA1/BRCA2, Lynch e multigênicos, com orientação familiar.',
    href: '/oncogenetica',
  },
  {
    title: 'Neurogenética',
    description:
      'Diagnóstico e acompanhamento de doenças neuromusculares, ataxias, distrofias musculares, epilepsias e doenças neurodegenerativas.',
  },
  {
    title: 'Genética reprodutiva',
    description:
      'Aconselhamento pré-concepcional, investigação de aborto recorrente e orientação para casais com histórico familiar de doenças hereditárias.',
  },
  {
    title: 'Genética preditiva',
    description:
      'Avaliação de risco em pacientes assintomáticos com histórico familiar relevante, com discussão das implicações antes do exame.',
  },
  {
    title: 'Deficiência intelectual',
    description:
      'Investigação etiológica em crianças e adultos com atraso no desenvolvimento ou deficiência intelectual de causa inexplicada.',
  },
  {
    title: 'Erros inatos do metabolismo',
    description:
      'Diagnóstico, acompanhamento clínico e suporte multidisciplinar para pacientes com doenças metabólicas hereditárias.',
  },
  {
    title: 'Interpretação de exames genéticos',
    description:
      'Análise técnica de laudos de exomas, painéis, cariótipos e microarray solicitados por outros médicos ou diretamente pelo paciente.',
  },
  {
    title: 'Pareceres genéticos',
    description:
      'Segunda opinião especializada para casos complexos, com indicação de exames adicionais e orientação clínica fundamentada.',
  },
]

const whenToSeek: string[] = [
  'Há suspeita de doença genética em você ou em alguém da família',
  'Diagnóstico de autismo, deficiência intelectual ou atraso no desenvolvimento sem causa esclarecida',
  'Histórico familiar de câncer de mama, ovário, intestino, próstata ou outros tumores em idade jovem',
  'Doenças neurológicas hereditárias na família (ataxias, miopatias, distrofias)',
  'Planejamento reprodutivo com histórico familiar de doença genética',
  'Aborto de repetição ou bebê com malformação',
  'Resultado de exame genético em mãos e dúvidas sobre interpretação',
  'Encaminhamento de outro médico para avaliação especializada',
]

const faqItems: FaqItem[] = [
  {
    question: 'Como agendar uma consulta com o geneticista?',
    answer:
      'A consulta pode ser agendada diretamente pelo widget no site, pelo WhatsApp (61) 99857-0759 ou pelo telefone (61) 2193-1447. Você escolhe entre atendimento presencial em Brasília ou telemedicina para qualquer estado do Brasil. No agendamento, indique o motivo da consulta para que o tempo previsto seja adequado ao seu caso.',
  },
  {
    question: 'Quanto tempo dura a consulta de genética?',
    answer:
      'A primeira consulta geralmente dura entre 50 e 60 minutos. É um tempo necessário para construir o heredograma de pelo menos três gerações, revisar exames prévios, discutir o motivo da investigação e definir um plano de cuidado. Retornos costumam ser mais curtos, variando entre 30 e 40 minutos.',
  },
  {
    question: 'Preciso levar exames anteriores na consulta?',
    answer:
      'Sim. Sempre que possível, leve laudos de exames genéticos prévios (cariótipo, microarray, painéis, exoma), exames de imagem relevantes, relatórios de outros especialistas e o histórico médico familiar mais completo que conseguir reunir. Esse material ajuda a evitar a repetição de exames e a direcionar a investigação.',
  },
  {
    question: 'A consulta de genética é coberta pelo plano de saúde?',
    answer:
      'A consulta médica de genética está em rol da ANS e tem cobertura obrigatória pelos planos de saúde, conforme as regras de credenciamento. O atendimento na Mosaico Genética é particular, com emissão de recibo médico para solicitação de reembolso. Já os exames genéticos podem ser cobertos quando atendidos os critérios da DUT 110 da ANS.',
  },
  {
    question: 'Posso fazer telemedicina morando fora de Brasília?',
    answer:
      'Sim. A telemedicina segue a Resolução CFM 2.314/2022 e está disponível para pacientes em qualquer estado do Brasil. A consulta é realizada por videoconferência, com o paciente recebendo ao final o plano de cuidado, a solicitação de exames quando indicada e a orientação para coleta na cidade onde mora.',
  },
  {
    question: 'O Dr. Fabrício atende crianças?',
    answer:
      'Sim. O Dr. Fabrício atende pacientes de todas as idades — desde lactentes encaminhados por suspeita de doença genética até pacientes adultos e idosos com indicação de oncogenética. Sempre que possível, a consulta inclui pais ou cuidadores para a coleta da história familiar.',
  },
  {
    question: 'Em quanto tempo recebo o resultado de um exame genético?',
    answer:
      'Depende do exame e do laboratório. Painéis menores costumam ficar prontos em 30 a 60 dias. Exomas e estudos mais amplos podem levar de 60 a 90 dias. Durante esse período, recomendamos manter o acompanhamento clínico habitual com o seu médico de confiança.',
  },
]

const breadcrumbs = [
  { name: 'Início', url: 'https://www.mosaico.med.br/' },
  { name: 'Serviços', url: SERVICOS_URL },
]

export default function ServicosPage() {
  return (
    <>
      <ServiceSchemaScript
        url={SERVICOS_URL}
        name="Serviços de Genética Médica em Brasília"
        description="Consulta de genética médica em Brasília e telemedicina em todo o Brasil com Dr. Fabrício Maciel."
        breadcrumbs={breadcrumbs}
        dateModified={SERVICOS_DATE_MODIFIED}
      />
      <Breadcrumbs
        items={[{ name: 'Início', href: '/' }, { name: 'Serviços' }]}
      />
      <ServiceHero
        eyebrow="Serviços"
        title="Genética médica clínica"
        highlight="em Brasília e em todo o Brasil"
        description="Diagnóstico, acompanhamento e aconselhamento genético para famílias com doenças raras. Atendimento presencial em Brasília-DF e telemedicina nacional com Dr. Fabrício Maciel Soares — médico geneticista, CRM-DF 31124 / RQE 22393."
        imageSrc="/image3.png"
        imageAlt="Mãe e filha em consulta de aconselhamento genético com geneticista em Brasília"
        secondaryCta={{ label: 'Ver áreas de atuação', href: 'areas' }}
      />

      <WhenToSeekSection
        title="Quando procurar um geneticista"
        intro="A consulta com um geneticista é indicada quando há suspeita de origem genética para uma condição clínica, planejamento reprodutivo com histórico familiar relevante, ou necessidade de interpretação de exames já realizados."
        items={whenToSeek}
        variant="pink"
      />

      <AreasGrid
        title="Áreas de atuação"
        intro="Atendemos nove áreas da genética médica clínica, com foco em diagnóstico e acompanhamento de doenças raras. Cada área inclui a consulta inicial, a indicação dirigida de exames e o aconselhamento genético do paciente e dos familiares."
        areas={areas}
      />

      <section className="px-4 py-16 lg:py-24 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl lg:text-3xl 3xl:text-4xl font-semibold text-center text-[#1e3a8a] mb-6 drop-shadow">
            Como é a consulta de genética
          </h2>
          <div className="space-y-5 text-gray-700 leading-relaxed">
            <p>
              A consulta de genética médica começa por uma anamnese detalhada e
              pela construção do heredograma — um mapa da história clínica
              familiar em pelo menos três gerações. Esse desenho permite
              identificar padrões de herança e direciona a hipótese clínica
              antes mesmo da solicitação de exames.
            </p>
            <p>
              Em seguida são revisados exames já realizados (laudos de
              microarray, cariótipo, painéis genéticos, exoma, ressonâncias e
              relatórios de outros especialistas). Quando indicado, o Dr.
              Fabrício solicita testes genéticos adicionais, sempre com
              discussão prévia das implicações clínicas, familiares e
              emocionais do resultado.
            </p>
            <p>
              O encerramento da consulta inclui o plano de cuidado por escrito,
              orientações sobre rastreamento familiar quando aplicável e
              encaminhamentos articulados com outros especialistas — como
              neuropediatras, oncologistas, médicos do trabalho, psiquiatras e
              ginecologistas. Em casos atendidos pelo SUS, há orientação
              específica para a continuidade no serviço público.
            </p>
            <p>
              Toda a comunicação clínica é registrada em prontuário eletrônico
              e compartilhada ao final do atendimento. Pacientes em
              telemedicina recebem o material por e-mail logo após a consulta.
            </p>
          </div>
        </div>
      </section>

      <ANSCoverageSection />
      <TelemedicineSection />

      <ServiceFaq
        title="Perguntas frequentes sobre nossos serviços"
        intro="Reunimos abaixo as dúvidas mais comuns de quem nunca consultou com um geneticista. Para casos específicos, agende uma consulta."
        items={faqItems}
        variant="blue"
      />

      <ServiceCTASection
        title="Pronto para entender a genética do seu caso?"
        description="Agende sua consulta com o Dr. Fabrício Maciel — presencial em Brasília ou online em todo o Brasil. Em dúvidas mais urgentes, fale por WhatsApp."
      />

      <LastReviewedByline date={SERVICOS_DATE_MODIFIED} />
    </>
  )
}
