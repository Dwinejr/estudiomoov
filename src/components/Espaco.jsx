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
                Equipamentos de alta qualidade, incluindo 4 tecidos acrobáticos, duas liras, trapézio e colchões de segurança
              </li>
              <li className="flex items-center">
                <span className="text-[#E4670D] mr-2">•</span>
                Para o pole dance, contamos com 5 barras fixas que podem ser configuradas como giratórias
              </li>
              <li className="flex items-center">
                <span className="text-[#E4670D] mr-2">•</span>
                Muitos espelhos nas paredes, proporcionando um ambiente perfeito para a prática do pole dance
              </li>
              <li className="flex items-center">
                <span className="text-[#E4670D] mr-2">•</span>
                3 banheiros completos
              </li>
              <li className="flex items-center">
                <span className="text-[#E4670D] mr-2">•</span>
                Área de espera e recepção
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

          <div className="flex flex-col items-center space-y-8">
            <img src="/assets/espaco01.jpg" alt="Espaço 1" className="w-full max-w-2xl rounded-lg shadow-lg" />
            <img src="/assets/espaco02.jpg" alt="Espaço 2" className="w-full max-w-2xl rounded-lg shadow-lg" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Espaco; 