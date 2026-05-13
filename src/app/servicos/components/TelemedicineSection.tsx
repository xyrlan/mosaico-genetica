import H2 from '@/app/components/H2'
import { Wifi, Hospital, MapPin } from 'lucide-react'

export default function TelemedicineSection() {
  return (
    <section
      id="atendimento"
      className="px-4 py-16 lg:py-24 bg-[#f5eaf0]/40"
      aria-labelledby="atendimento-heading"
    >
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col items-center text-center mb-10">
          <H2>Atendimento presencial e por telemedicina</H2>
          <p className="text-gray-600 max-w-2xl mt-4 leading-relaxed">
            Pacientes em Brasília são atendidos presencialmente no Edifício
            Brasil 21 (Asa Sul). Pacientes de todo o país têm acesso aos
            mesmos serviços por telemedicina, conforme a Resolução CFM
            2.314/2022.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <article className="bg-white rounded p-6 shadow-sm">
            <Hospital className="text-[#7fc2d2] mb-3" size={32} />
            <h3 className="font-semibold text-[#1e3a8a] text-xl mb-2">
              Atendimento presencial em Brasília
            </h3>
            <p className="text-gray-700 leading-relaxed mb-3">
              Consultas no consultório Mosaico Genética, Edifício Brasil 21,
              SHS Quadra 6, Bloco A, Sala 606, Asa Sul, Brasília-DF, CEP
              70316-102. Exames físicos, coleta dirigida e atendimento
              familiar quando indicado.
            </p>
            <p className="text-sm text-gray-500">
              Estacionamento disponível no edifício. Acesso à pessoa com
              deficiência.
            </p>
          </article>
          <article className="bg-white rounded p-6 shadow-sm">
            <Wifi className="text-[#7fc2d2] mb-3" size={32} />
            <h3 className="font-semibold text-[#1e3a8a] text-xl mb-2">
              Telemedicina em todo o Brasil
            </h3>
            <p className="text-gray-700 leading-relaxed mb-3">
              Consultas por videoconferência segura, com revisão prévia dos
              exames enviados pelo paciente. Ao fim da consulta o paciente
              recebe o plano de cuidado por escrito, com solicitação de
              exames quando indicado.
            </p>
            <p className="text-sm text-gray-500 flex items-center gap-2">
              <MapPin size={14} /> Disponível em todos os estados.
            </p>
          </article>
        </div>
      </div>
    </section>
  )
}
