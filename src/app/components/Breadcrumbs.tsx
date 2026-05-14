import Link from 'next/link'
import { ChevronRight } from 'lucide-react'

export interface Crumb {
  name: string
  href?: string
}

export default function Breadcrumbs({ items }: { items: Crumb[] }) {
  return (
    <nav
      aria-label="Trilha de navegação"
      className="px-4 pt-36 lg:pt-40 pb-0 max-w-6xl mx-auto w-full"
    >
      <ol className="flex flex-wrap items-center gap-1 text-sm text-gray-500">
        {items.map((item, i) => {
          const isLast = i === items.length - 1
          return (
            <li key={item.name} className="flex items-center gap-1">
              {item.href && !isLast ? (
                <Link
                  href={item.href}
                  className="hover:text-[#1e3a8a] transition-colors duration-200"
                >
                  {item.name}
                </Link>
              ) : (
                <span
                  className={isLast ? 'text-[#1e3a8a] font-medium' : ''}
                  aria-current={isLast ? 'page' : undefined}
                >
                  {item.name}
                </span>
              )}
              {!isLast && (
                <ChevronRight size={14} className="text-gray-400" aria-hidden />
              )}
            </li>
          )
        })}
      </ol>
    </nav>
  )
}
