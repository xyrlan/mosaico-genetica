const SOBRE_DATE_MODIFIED = "2026-05-13";

const sobreSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Início",
          item: "https://www.mosaico.med.br/",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Sobre",
          item: "https://www.mosaico.med.br/sobre",
        },
      ],
    },
    {
      "@type": "MedicalWebPage",
      "@id": "https://www.mosaico.med.br/sobre#webpage",
      url: "https://www.mosaico.med.br/sobre",
      name: "Sobre Dr. Fabrício Maciel — Geneticista em Brasília",
      inLanguage: "pt-BR",
      isPartOf: { "@id": "https://www.mosaico.med.br/#website" },
      about: { "@id": "https://www.mosaico.med.br/#fabricio" },
      lastReviewed: SOBRE_DATE_MODIFIED,
      dateModified: SOBRE_DATE_MODIFIED,
      reviewedBy: { "@id": "https://www.mosaico.med.br/#fabricio" },
    },
  ],
};

export default function SobreSchemaScript() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(sobreSchema) }}
    />
  );
}
