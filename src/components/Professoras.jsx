import React from 'react';

function Professoras() {
  return (
    <section id="professoras" className="py-16 px-4 md:px-8 bg-[#121212]">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl font-bold mb-12 text-center text-[#E4670D] pt-8">Nossas Professoras</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Karen Lima */}
          <div className="bg-[#1E1E1E] rounded-lg overflow-hidden shadow-xl border-2 border-[#E4670D]">
            <div className="aspect-w-1 aspect-h-1">
              <img
                src="/assets/karen.jpg"
                alt="Karen Lima"
                className="object-cover w-full h-full"
              />
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-bold mb-2 text-[#E4670D]">Karen Lima</h3>
              <p className="text-[#E4670D] font-semibold mb-4">Pole Dance, Pole Fit, Pole Coreo, Pole Heels</p>
              <p className="text-gray-300">
                Apaixonada por ensinar e desafios físicos, conheceu o Pole Dance há 12 anos. Após cursos de capacitação com grandes nomes, cursou Educação Física na Unicamp (licenciatura e bacharelado, 2020), com pesquisa na modalidade. Desde então, segue se especializando para aprimorar seu ensino. Sua maior satisfação é ver a autoestima de suas alunas crescer.
              </p>
            </div>
          </div>

          {/* Giulia */}
          <div className="bg-[#1E1E1E] rounded-lg overflow-hidden shadow-xl border-2 border-[#E4670D]">
            <div className="aspect-w-1 aspect-h-1">
              <img
                src="/assets/giulia.jpg"
                alt="Giulia Bassani"
                className="object-cover w-full h-full"
              />
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-bold mb-2 text-[#E4670D]">Giulia Bassani</h3>
              <p className="text-[#E4670D] font-semibold mb-4">Tecido Acrobático, Circo e Aéreos</p>
              <p className="text-gray-300">
                [Texto descritivo da Giulia]
              </p>
            </div>
          </div>

          {/* Marília Japa */}
          <div className="bg-[#1E1E1E] rounded-lg overflow-hidden shadow-xl border-2 border-[#E4670D]">
            <div className="aspect-w-1 aspect-h-1">
              <img
                src="/assets/marilia.jpg"
                alt="Marília Japa"
                className="object-cover w-full h-full"
              />
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-bold mb-2 text-[#E4670D]">Marília Japa</h3>
              <p className="text-[#E4670D] font-semibold mb-4">Pole Dance, Pole Fit</p>
              <p className="text-gray-300">
                [Texto descritivo da Marília]
              </p>
            </div>
          </div>

          {/* Bábara Soares */}
          <div className="bg-[#1E1E1E] rounded-lg overflow-hidden shadow-xl border-2 border-[#E4670D]">
            <div className="aspect-w-1 aspect-h-1">
              <img
                src="/assets/babara.jpg"
                alt="Bábara Soares"
                className="object-cover w-full h-full"
              />
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-bold mb-2 text-[#E4670D]">Bábara Soares</h3>
              <p className="text-[#E4670D] font-semibold mb-4">Pole Dance, Pole Fit, Pole Coreo</p>
              <p className="text-gray-300">
                [Texto descritivo da Bábara]
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Professoras;
