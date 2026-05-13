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
  ]
}
