import H2 from '@/app/components/H2'
import AreaCard from './AreaCard'

export interface ServiceArea {
  title: string
  description: string
  href?: string
}

interface AreasGridProps {
  title?: string
  intro?: string
  areas: ServiceArea[]
}

export default function AreasGrid({
  title = 'Áreas de atuação',
  intro = 'Atendemos as nove áreas mais relevantes da genética médica clínica.',
  areas,
}: AreasGridProps) {
  return (
    <section id="areas" className="px-4 py-16 lg:py-24 bg-[#d9edf2]/30">
      <div className="max-w-6xl mx-auto flex flex-col items-center">
        <H2>{title}</H2>
        <p className="text-center text-gray-600 max-w-2xl mt-4 mb-10 leading-relaxed">
          {intro}
        </p>
        <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 w-full">
          {areas.map((area) => (
            <li key={area.title}>
              <AreaCard
                title={area.title}
                description={area.description}
                href={area.href}
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
