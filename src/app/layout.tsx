import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Mosaico Genética Médica",
  description: "Um consultório médico dedicado ao diagnóstico, acompanhamento e aconselhamento genético de famílias com doenças raras.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${inter.className} relative`}>
        <Header />
        {children}
      </body>
    </html>
  );
}
