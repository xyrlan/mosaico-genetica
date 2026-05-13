import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { GoogleTagManager } from '@next/third-parties/google'
import { AgendarWidgetProvider } from "./context/AgendarWidgetContext";
import AgendarWidgetDropUp from "./components/AgendarWidget";
import WhatsAppWidget from "./components/WhatsAppWidget";
import MobileContactButtons from "./components/MobileContactButtons";

const inter = Montserrat({ weight: ['400', '500', '600', '700'], subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL("https://www.mosaico.med.br"),
  title: {
    default: "Médico Geneticista em Brasília | Mosaico Genética — Dr. Fabrício Maciel",
    template: "%s | Mosaico Genética"
  },
  description: "Um consultório médico dedicado ao diagnóstico, acompanhamento e aconselhamento genético de famílias com doenças raras.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Mosaico Genética Médica - Dr. Fabrício Maciel",
    description: "Um consultório médico dedicado ao diagnóstico, acompanhamento e aconselhamento genético de famílias com doenças raras.",
    url: "https://www.mosaico.med.br",
    siteName: "Mosaico Genética",
    locale: "pt_BR",
    type: 'website',
    images: ["/logomosaico.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mosaico Genética Médica - Dr. Fabrício Maciel",
    description: "Um consultório médico dedicado ao diagnóstico, acompanhamento e aconselhamento genético de famílias com doenças raras.",
    images: ["/logomosaico.png"],
  },
  icons: {
    icon: '/icon.png',
  },
};

const SITE_DATE_MODIFIED = "2026-05-13";

const organizationSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": "https://www.mosaico.med.br/#website",
      url: "https://www.mosaico.med.br",
      name: "Mosaico Genética",
      description:
        "Consultório de genética médica em Brasília — Dr. Fabrício Maciel.",
      inLanguage: "pt-BR",
      publisher: { "@id": "https://www.mosaico.med.br/#clinic" },
    },
    {
      "@type": "MedicalClinic",
      "@id": "https://www.mosaico.med.br/#clinic",
      name: "Mosaico Genética",
      url: "https://www.mosaico.med.br",
      logo: "https://www.mosaico.med.br/logomosaico.png",
      image: "https://www.mosaico.med.br/logomosaico.png",
      telephone: ["+556121931447", "+5561998570759"],
      medicalSpecialty: "MedicalGenetics",
      address: {
        "@type": "PostalAddress",
        streetAddress:
          "Brasil 21 - SHS, Quadra 6, Bloco A, Sala 606 - Asa Sul",
        addressLocality: "Brasília",
        addressRegion: "DF",
        postalCode: "70316-102",
        addressCountry: "BR",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: -15.7933292,
        longitude: -47.8930172,
      },
      hasMap: "https://maps.google.com/?cid=12816516001249809068",
      areaServed: [
        {
          "@type": "City",
          name: "Brasília",
          addressRegion: "DF",
          addressCountry: "BR",
        },
        { "@type": "Country", name: "Brasil" },
      ],
      sameAs: [
        "https://www.instagram.com/mosaico.gen",
        "https://lattes.cnpq.br/6131512439187623",
        "https://maps.google.com/?cid=12816516001249809068",
        "https://www.doctoralia.com.br/fabricio-maciel-soares/geneticista/brasilia",
      ],
      dateModified: SITE_DATE_MODIFIED,
    },
    {
      "@type": "Physician",
      "@id": "https://www.mosaico.med.br/#fabricio",
      name: "Fabrício Maciel Soares",
      givenName: "Fabrício",
      familyName: "Maciel Soares",
      honorificPrefix: "Dr.",
      jobTitle: "Médico Geneticista",
      description:
        "Médico geneticista em Brasília (CRM-DF 31124 / RQE 22393), com residência em Genética Médica pelo HCPA e mestrado em Neurogenética pela UFRGS. Atendimento em doenças raras, autismo, oncogenética, neurogenética e aconselhamento genético, presencial em Brasília e por telemedicina em todo o Brasil.",
      medicalSpecialty: "MedicalGenetics",
      knowsLanguage: ["pt-BR", "en"],
      knowsAbout: [
        "Genética Médica",
        "Doenças Raras",
        "Neurogenética",
        "Oncogenética",
        "Genética Reprodutiva",
        "Aconselhamento Genético",
        "Autismo",
        "Erros Inatos do Metabolismo",
      ],
      identifier: [
        { "@type": "PropertyValue", propertyID: "CRM-DF", value: "31124" },
        { "@type": "PropertyValue", propertyID: "RQE", value: "22393" },
      ],
      alumniOf: [
        {
          "@type": "CollegeOrUniversity",
          name: "Universidade Federal do Maranhão",
        },
        {
          "@type": "Hospital",
          name: "Hospital de Clínicas de Porto Alegre",
        },
        {
          "@type": "CollegeOrUniversity",
          name: "Universidade Federal do Rio Grande do Sul",
        },
      ],
      worksFor: [
        { "@id": "https://www.mosaico.med.br/#clinic" },
        { "@type": "Hospital", name: "Hospital de Apoio de Brasília" },
      ],
      sameAs: [
        "https://lattes.cnpq.br/6131512439187623",
        "https://www.doctoralia.com.br/fabricio-maciel-soares/geneticista/brasilia",
        "https://www.instagram.com/mosaico.gen",
      ],
      image: "https://www.mosaico.med.br/fabri2.jpeg",
      url: "https://www.mosaico.med.br/sobre",
      dateModified: SITE_DATE_MODIFIED,
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <GoogleTagManager gtmId="GTM-M3JPJPTH" />
      <body className={`${inter.className} relative selection:bg-[#82a170]`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <AgendarWidgetProvider>
          <Header />
          {children}
          <WhatsAppWidget />
          <AgendarWidgetDropUp />
          <MobileContactButtons />
          <Footer />
        </AgendarWidgetProvider>
      </body>
    </html>
  );
}
