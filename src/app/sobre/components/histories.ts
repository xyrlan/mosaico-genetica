
import { BriefcaseMedical, BookMarked, School, GraduationCap } from 'lucide-react';


export interface History {
  date: string
  image: string
  title: string
  icon: any
  text: string
}



export const tabs = [
  {
    date : "2013 - 2018",
    image: "/bg-university.jpg",
    title: "Medicina - Universidade Federal do Maranhão",
    icon: GraduationCap,
    text: "Realizei minha graduação em Medicina, na Universidade Federal do Maranhão (UFMA), onde desde o início me envolvi com a complexidade da Genética Médica, tendo fundado a Liga Acadêmica de Genética Médica da UFMA e concluído a faculdade investigando a Doença de Niemann-Pick."
  },
  {
    date : "2020 - 2023",
    image: "/residence.jpg",
    icon: School,
    title: "Residência Médica em Genética Médica. Hospital de Clínicas de Porto Alegre",
    text: "Decidi me especializar em Genética Médica no Hospital de Clínicas de Porto Alegre, conhecido por ter uma formação completa em todas as áreas da genética (neurogenética, reprodução humana, síndromes, erros inatos do metabolismo, testes genéticos, genética ocular entre outras). A residência em Genética moldou minha visão sobre como oferecer suporte integral às famílias enfrentando desafios genéticos."
  },
  {
    date : "2021 - 2023",
    image: "/mestrad.jpeg",
    icon: BookMarked,
    title: "Mestrado em Medicina: Ciências Médicas. Ênfase em Neurogenética. Universidade Federal do Rio Grande do Sul (UFRGS)",
    text: "Decidi aprofundar meus conhecimentos em genética através do mestrado em Neurogenética, concluído pela Universidade Federal do Rio Grande do Sul. Foi uma etapa desafiadora, mas que me permitiu aprender mais sobre o neurodesenvolvimento e as doenças neuromusculares."
  },
  {
    date : "2024 - atual",
    image: "/ffabi-removebg2.png",
    icon: BriefcaseMedical,
    title: "Unidade de Genética - Hospital de Apoio de Brasília",
    text: "Todos os dias realizo meu sonho de oferecer qualidade no atendimento aos pacientes do Sistema Único de Saúde no Hospital de Apoio de Brasília."
  }
]