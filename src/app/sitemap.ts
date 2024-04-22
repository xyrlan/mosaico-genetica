import { MetadataRoute } from 'next'
 
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://www.mosaico.med.br/',
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 1,
    },
    {
      url: 'https://www.mosaico.med.br/sobre',
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.8,
    },
  ]
}