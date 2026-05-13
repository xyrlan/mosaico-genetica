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

const organizationSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "MedicalClinic",
      "@id": "https://www.mosaico.med.br/#clinic",
      name: "Mosaico Genética",
      url: "https://www.mosaico.med.br",
      logo: "https://www.mosaico.med.br/logomosaico.png",
      image: "https://www.mosaico.med.br/logomosaico.png",
      telephone: "+556121931447",
      medicalSpecialty: "MedicalGenetics",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Brasil 21 - SHS, Quadra 6, Bloco A, Sala 606 - Asa Sul",
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
      areaServed: { "@type": "Country", name: "Brasil" },
      sameAs: [
        "https://www.instagram.com/mosaico.gen",
        "https://lattes.cnpq.br/6131512439187623",
        "https://www.google.com/maps/place/Dr.+Fabr%C3%ADcio+Maciel,+M%C3%A9dico+Geneticista+Bras%C3%ADlia/",
      ],
    },
    {
      "@type": "Physician",
      "@id": "https://www.mosaico.med.br/#fabricio",
      name: "Fabrício Maciel",
      jobTitle: "Médico Geneticista",
      medicalSpecialty: "MedicalGenetics",
      identifier: [
        { "@type": "PropertyValue", propertyID: "CRM-DF", value: "31124" },
        { "@type": "PropertyValue", propertyID: "RQE", value: "22393" },
      ],
      worksFor: { "@id": "https://www.mosaico.med.br/#clinic" },
      sameAs: ["https://lattes.cnpq.br/6131512439187623"],
      image: "https://www.mosaico.med.br/fabri2.jpeg",
      url: "https://www.mosaico.med.br/sobre",
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
