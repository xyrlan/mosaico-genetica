interface ServiceSchemaScriptProps {
  url: string
  name: string
  description: string
  breadcrumbs: { name: string; url: string }[]
  dateModified: string
  extraNodes?: Record<string, unknown>[]
}

export default function ServiceSchemaScript({
  url,
  name,
  description,
  breadcrumbs,
  dateModified,
  extraNodes = [],
}: ServiceSchemaScriptProps) {
  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'BreadcrumbList',
        itemListElement: breadcrumbs.map((b, i) => ({
          '@type': 'ListItem',
          position: i + 1,
          name: b.name,
          item: b.url,
        })),
      },
      {
        '@type': 'MedicalWebPage',
        '@id': `${url}#webpage`,
        url,
        name,
        description,
        inLanguage: 'pt-BR',
        isPartOf: { '@id': 'https://www.mosaico.med.br/#website' },
        about: { '@id': 'https://www.mosaico.med.br/#fabricio' },
        provider: { '@id': 'https://www.mosaico.med.br/#clinic' },
        lastReviewed: dateModified,
        dateModified,
        reviewedBy: { '@id': 'https://www.mosaico.med.br/#fabricio' },
      },
      ...extraNodes,
    ],
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
