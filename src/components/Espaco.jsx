import React from 'react';

function Espaco() {
  return (
    <section id="espaco" className="py-16 px-4 md:px-8 bg-[#121212]">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12 pt-8">
          <h2 className="text-4xl font-bold mb-4 text-[#E4670D]">Nosso Espaço</h2>
          <p className="text-lg text-gray-300">
            Um ambiente moderno e acolhedor para suas práticas
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-gray-300">
              O MOOV conta com uma estrutura completa e moderna, projetada especialmente para as práticas de circo e dança. Nossas instalações incluem:
            </p>
            <ul className="space-y-4 text-gray-300">
              <li className="flex items-center">
                <span className="text-[#E4670D] mr-2">•</span>
                Salas amplas e climatizadas
              </li>
              <li className="flex items-center">
                <span className="text-[#E4670D] mr-2">•</span>
                Equipamentos de alta qualidade
              </li>
              <li className="flex items-center">
                <span className="text-[#E4670D] mr-2">•</span>
                Vestuários completos
              </li>
              <li className="flex items-center">
                <span className="text-[#E4670D] mr-2">•</span>
                Área de convivência
              </li>
            </ul>
            <div className="flex flex-col md:flex-row gap-4">
              <a
                href="#contato"
                className="bg-[#E4670D] hover:bg-[#2A2A2A] text-white font-bold py-3 px-8 rounded-md transition duration-300 shadow-md text-center border border-[#E4670D]"
              >
                Agende uma Visita
              </a>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="aspect-w-1 aspect-h-1 rounded-lg overflow-hidden shadow-xl border-2 border-[#E4670D]">
              <img
                src="/assets/espaco1.png"
                alt="Sala de aula"
                className="object-cover w-full h-full"
              />
            </div>
            <div className="aspect-w-1 aspect-h-1 rounded-lg overflow-hidden shadow-xl border-2 border-[#E4670D]">
              <img
                src="/assets/espaco2.png"
                alt="Equipamentos"
                className="object-cover w-full h-full"
              />
            </div>
            <div className="aspect-w-1 aspect-h-1 rounded-lg overflow-hidden shadow-xl border-2 border-[#E4670D]">
              <img
                src="/assets/espaco3.png"
                alt="Vestuário"
                className="object-cover w-full h-full"
              />
            </div>
            <div className="aspect-w-1 aspect-h-1 rounded-lg overflow-hidden shadow-xl border-2 border-[#E4670D]">
              <img
                src="/assets/espaco4.png"
                alt="Área de convivência"
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Espaco; 