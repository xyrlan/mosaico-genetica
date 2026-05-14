interface AggregateRatingSchemaProps {
  rating: number
  total: number
}

export default function AggregateRatingSchema({
  rating,
  total,
}: AggregateRatingSchemaProps) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'MedicalClinic',
    '@id': 'https://www.mosaico.med.br/#clinic',
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: rating.toFixed(1),
      reviewCount: total,
      bestRating: '5',
      worstRating: '1',
    },
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
