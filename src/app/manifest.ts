import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Mosaico Genética Médica',
    short_name: 'Mosaico',
    description: 'Um consultório médico dedicado ao diagnóstico, acompanhamento e aconselhamento genético de famílias com doenças raras.',
    start_url: '/',
    display: 'standalone',
    prefer_related_applications: true,
    icons: [
      {
        src: '/logomosaico.png',
        sizes: 'any',
      },
      {
        src: '/mosaicosloganprancheta.png',
        sizes: 'any',
        purpose: 'maskable',
      },
    ],
  }
}