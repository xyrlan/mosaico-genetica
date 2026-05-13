import { MetadataRoute } from 'next'

const LAST_MODIFIED = '2026-05-13'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://www.mosaico.med.br/',
      lastModified: LAST_MODIFIED,
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: 'https://www.mosaico.med.br/sobre',
      lastModified: LAST_MODIFIED,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: 'https://www.mosaico.med.br/servicos',
      lastModified: LAST_MODIFIED,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: 'https://www.mosaico.med.br/autismo',
      lastModified: LAST_MODIFIED,
      changeFrequency: 'monthly',
      priority: 0.85,
    },
    {
      url: 'https://www.mosaico.med.br/oncogenetica',
      lastModified: LAST_MODIFIED,
      changeFrequency: 'monthly',
      priority: 0.85,
    },
  ]
}
