import React from 'react';

function Sobre() {
  return (
    <section id="sobre" className="py-16 px-4 md:px-8 bg-[#121212]">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12 pt-8">
          <h2 className="text-4xl font-bold mb-4 text-[#E4670D]">Sobre o MOOV</h2>
          <p className="text-lg text-gray-300">
            Um espaço dedicado à arte, movimento e bem-estar
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-gray-300">
              O MOOV é um estúdio especializado em circo e dança, oferecendo uma experiência única para todos os níveis de prática. Nossa missão é proporcionar um ambiente acolhedor e seguro onde você pode explorar sua criatividade e desenvolver suas habilidades.
            </p>
            <p className="text-gray-300">
              Com professores altamente qualificados e uma estrutura moderna, oferecemos aulas de Pole Dance, Tecido Acrobático, Aéreos, Circo Infantil e muito mais. Venha fazer parte da nossa comunidade e descubra o poder do movimento!
            </p>
            <div className="flex flex-col md:flex-row gap-4">
              <a
                href="#aulas"
                className="bg-[#E4670D] hover:bg-[#2A2A2A] text-white font-bold py-3 px-8 rounded-md transition duration-300 shadow-md text-center border border-[#E4670D]"
              >
                Conheça Nossas Aulas
              </a>
              <a
                href="#contato"
                className="bg-[#2A2A2A] hover:bg-[#E4670D] text-white font-bold py-3 px-8 rounded-md transition duration-300 shadow-md text-center border border-[#E4670D]"
              >
                Entre em Contato
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-w-4 aspect-h-3 rounded-lg overflow-hidden shadow-xl border-2 border-[#E4670D]">
              <img
                src="/assets/sobre.png"
                alt="Estúdio MOOV"
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Sobre;
