import { MetadataRoute } from "next/dist/lib/metadata/types/metadata-interface";

 
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: 'https://www.mosaico.med.br/sitemap.xml',
  }
}