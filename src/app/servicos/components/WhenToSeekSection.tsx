import { Check } from 'lucide-react'
import H2 from '@/app/components/H2'

interface WhenToSeekSectionProps {
  title: string
  intro: string
  items: string[]
  variant?: 'light' | 'pink' | 'blue'
}

const variantBg: Record<NonNullable<WhenToSeekSectionProps['variant']>, string> = {
  light: 'bg-white',
  pink: 'bg-[#f5eaf0]/40',
  blue: 'bg-[#d9edf2]/40',
}

export default function WhenToSeekSection({
  title,
  intro,
  items,
  variant = 'light',
}: WhenToSeekSectionProps) {
  return (
    <section
      id="quando-procurar"
      className={`px-4 py-16 lg:py-24 ${variantBg[variant]}`}
    >
      <div className="max-w-4xl mx-auto flex flex-col items-center">
        <H2>{title}</H2>
        <p className="text-center text-gray-600 max-w-2xl mt-4 mb-10 leading-relaxed">
          {intro}
        </p>
        <ul className="grid gap-4 sm:grid-cols-2 w-full">
          {items.map((item, i) => (
            <li
              key={i}
              className="flex gap-3 items-start bg-white rounded p-4 shadow-sm border border-[#f5eaf0]"
            >
              <span className="text-[#7fc2d2] mt-1 flex-shrink-0">
                <Check size={20} />
              </span>
              <span className="text-gray-700 text-sm lg:text-base">{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
