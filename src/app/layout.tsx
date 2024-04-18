import type { Metadata } from "next";
import { Inter, Poppins, Montserrat } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";


const inter = Montserrat({ weight: ['400', '500', '600', '700'], subsets: ['latin'] });

export const metadata: Metadata = {
  title: {
    default: "Home",
    template: "%s - Mosaico Genética"
  },
  description: "Um consultório médico dedicado ao diagnóstico, acompanhamento e aconselhamento genético de famílias com doenças raras.",
  alternates: {
    canonical: 'https://mosaico.med.br',
  },
  openGraph: {
    title: "Mosaico Genética Médica",
    description: "Um consultório médico dedicado ao diagnóstico, acompanhamento e aconselhamento genético de famílias com doenças raras.",
    url: "https://mosaico.med.br",
    siteName: "Mosaico Genética Médica",
    locale: "pt_BR",
    type: 'website',
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${inter.className} relative selection:bg-[#82a170]`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
