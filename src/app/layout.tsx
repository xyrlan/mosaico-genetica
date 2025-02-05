import type { Metadata } from "next";
import { Inter, Poppins, Montserrat } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { GoogleTagManager } from '@next/third-parties/google'
import { AgendarWidgetProvider } from "./context/AgendarWidgetContext";
import AgendarWidgetDropUp from "./components/AgendarWidget";


const inter = Montserrat({ weight: ['400', '500', '600', '700'], subsets: ['latin'] });

export const metadata: Metadata = {
  title: {
    default: "Mosaico Genética - Dr. Fabrício Maciel",
    template: "%s - Mosaico Genética"
  },
  description: "Um consultório médico dedicado ao diagnóstico, acompanhamento e aconselhamento genético de famílias com doenças raras.",
  alternates: {
    canonical: 'https://mosaico.med.br',
  },
  openGraph: {
    title: "Mosaico Genética Médica",
    description: "Um consultório médico dedicado ao diagnóstico, acompanhamento e aconselhamento genético de famílias com doenças raras.",
    url: "https://www.mosaico.med.br",
    siteName: "Mosaico Genética Médica",
    locale: "pt_BR",
    type: 'website',
    images: [
      "https://www.mosaico.med.br/_next/image?url=%2Flogomosaico.png&w=256&q=75",
    ]
  },
  icons: {
    icon: '/icon.png',
  },
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
        <AgendarWidgetProvider>
          <Header />
          {children}
          <AgendarWidgetDropUp />
          <Footer />
        </AgendarWidgetProvider>
      </body>
    </html>
  );
}
