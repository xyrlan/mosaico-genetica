import { Hospital, Wifi } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

const AboutSection = () => {
  return (
    <section id="nosso-especialista" className="min-h-screen flex items-center relative py-24 bg-[#f5eaf0]">
      <Image src={'/background.png'} width={1000} height={1000} alt="background" className="absolute bottom-0 left-0 z-0  opacity-40 select-none" />
      <div className="container mx-auto z-10">
        <div className=" flex md:flex-row flex-col justify-between items-center gap-10">
          <div className="relative w-full h-full shadow-lg hover:shadow-2xl overflow-hidden duration-300 transition-all rounded">
            <Image src="/atendimento.png" alt="foto-atendimento" width={700} height={700} className="w-full h-full hover:scale-105 duration-300 transition-all select-none" />
          </div>
          <div className="flex items-center flex-col w-full p-10 ">
            <h2 className="text-4xl font-semibold text-center">
              Atendimento onde você estiver
            </h2>
            <h3 className="text-2xl font-semibold text-center mt-8 inline-flex items-center gap-2">
              <Wifi />
              Online
            </h3>
            <p className="text-center text-gray-500 mt-8 text-lg font-medium">
              O atendimento online é realizado por videochamada.
            </p>
            <h3 className="text-2xl font-semibold text-center mt-8 inline-flex items-center gap-2">
              <Hospital />
              Presencial
            </h3>
            <p className="text-center text-gray-500 mt-8 text-lg font-medium">
              A consulta presencial é realizada no Hospital ... - Brasília.
            </p>
          </div>
        </div>

        <div className="flex md:flex-row flex-col justify-between items-center gap-10">

          <div className="flex items-center flex-col w-full p-10">
            <h2 className="text-4xl font-semibold text-center">
              Fabrício Maciel, MD, MSc
            </h2>
            <p className="text-center text-gray-500 mt-8 text-lg font-medium">
              Meu caminho na medicina começou na Universidade Federal do Maranhão, onde mergulhei no estudo da complexidade humana e na busca pela compreensão das intrincadas peças que formam a vida.

              <br />
              <br />

              Fiz Genética Médica no Hospital de Clínica de Porto Alegre, onde pude explorar todas as áreas da genética clínica, moldando minha visão sobre como oferecer suporte integral às famílias enfrentando desafios genéticos.

              <br />
              <br />

              Fortaleci minha paixão pelos mistérios genéticos ao concluir meu mestrado em Neurogenética pela Universidade Federal do Rio Grande do Sul.

              <br />
              <br />

              Na Mosaico, meu objetivo é trazer a expertise adquirida ao longo desses anos de formação para criar um espaço acolhedor, onde as famílias encontrem não apenas um profissional, mas um parceiro dedicado em suas jornadas genéticas.
            </p>
          </div>

          <div className="relative w-full h-full shadow-lg hover:shadow-2xl scale-[80%] overflow-hidden duration-300 transition-all rounded ">
            <Image src="/fabricio2.png" alt="Especialista" width={700} height={700} className="w-full h-full hover:scale-105 duration-300 transition-all select-none " />
          </div>

        </div>

      </div>

    </section>
  )
}

export default AboutSection