import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'

interface AreaCardProps {
  title: string
  description: string
  href?: string
}

export default function AreaCard({ title, description, href }: AreaCardProps) {
  const card = (
    <div className="bg-white rounded p-6 shadow-sm hover:shadow-lg transition-all duration-300 border border-[#f5eaf0] h-full flex flex-col">
      <div className="flex items-start justify-between gap-3 mb-3">
        <h3 className="font-semibold text-[#1e3a8a] text-lg lg:text-xl">
          {title}
        </h3>
        {href && (
          <ArrowUpRight
            size={20}
            className="text-[#7fc2d2] mt-1 flex-shrink-0 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-200"
          />
        )}
      </div>
      <p className="text-gray-600 text-sm leading-relaxed flex-1">
        {description}
      </p>
      {href && (
        <p className="text-[#7fc2d2] text-sm font-semibold mt-4 group-hover:text-[#1e3a8a] transition-colors">
          Saiba mais →
        </p>
      )}
    </div>
  )

  if (!href) return card
  return (
    <Link href={href} className="group block">
      {card}
    </Link>
  )
}
