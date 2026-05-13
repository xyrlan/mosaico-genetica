import H2 from '@/app/components/H2'

export interface FaqItem {
  question: string
  answer: string
}

interface ServiceFaqProps {
  title?: string
  intro?: string
  items: FaqItem[]
  variant?: 'light' | 'pink' | 'blue'
}

const variantBg: Record<NonNullable<ServiceFaqProps['variant']>, string> = {
  light: 'bg-white',
  pink: 'bg-[#f5eaf0]/40',
  blue: 'bg-[#d9edf2]/40',
}

export default function ServiceFaq({
  title = 'Perguntas frequentes',
  intro,
  items,
  variant = 'pink',
}: ServiceFaqProps) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((it) => ({
      '@type': 'Question',
      name: it.question,
      acceptedAnswer: { '@type': 'Answer', text: it.answer },
    })),
  }

  return (
    <section
      id="service-faq"
      className={`px-4 py-16 lg:py-24 ${variantBg[variant]}`}
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <div className="max-w-3xl mx-auto">
        <div className="flex flex-col items-center text-center mb-10">
          <H2>{title}</H2>
          {intro && (
            <p className="text-gray-600 max-w-2xl mt-4 leading-relaxed">
              {intro}
            </p>
          )}
        </div>
        <dl className="space-y-4">
          {items.map((it) => (
            <details
              key={it.question}
              className="group bg-white rounded shadow-sm hover:shadow-lg transition-all duration-300 border border-[#f5eaf0]"
            >
              <summary className="cursor-pointer list-none px-6 py-4 flex justify-between items-center gap-4">
                <dt className="font-semibold text-[#1e3a8a]">
                  {it.question}
                </dt>
                <span
                  className="text-[#7fc2d2] transition-transform duration-200 group-open:rotate-180"
                  aria-hidden
                >
                  ▼
                </span>
              </summary>
              <dd className="px-6 pb-5 text-gray-700 leading-relaxed">
                {it.answer}
              </dd>
            </details>
          ))}
        </dl>
      </div>
    </section>
  )
}
