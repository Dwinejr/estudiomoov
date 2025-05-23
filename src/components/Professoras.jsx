import React from 'react';

function Professoras() {
  // Placeholder data, will be updated when all texts are received
  const professorasData = [
    {
      nome: 'Karen Lima',
      texto: 'Apaixonada por ensinar e desafios físicos, conheceu o Pole Dance há 12 anos. Após cursos de capacitação com grandes nomes, cursou Educação Física na Unicamp (licenciatura e bacharelado, 2020), com pesquisa na modalidade. Desde então, segue se especializando para aprimorar seu ensino. Sua maior satisfação é ver a autoestima de suas alunas crescer.',
    },
    {
      nome: 'Giulia Bassani',
      texto: 'Texto a ser desenvolvido ainda...'
    },
    {
      nome: 'Barbara Alves',
      texto: 'Texto a ser desenvolvido ainda...'
    },
    {
      nome: 'Marília Japa',
      texto: 'Texto a ser desenvolvido ainda...'
    }
  ];

  return (
    <section id="professoras" className="py-16 px-4 md:px-8 bg-[#FCECC9]">
      <div className="container mx-auto max-w-6xl text-center">
        <h2 className="text-4xl font-bold mb-12 text-[#E4670D]">Nossas Professoras</h2>
        <div className="space-y-8">
          {professorasData.map(prof => (
            <div key={prof.nome} className="bg-white p-6 rounded-lg shadow-lg text-left transform hover:scale-105 transition-transform duration-300 flex items-center gap-6">
              <div className="w-32 h-32 flex-shrink-0">
                <img 
                  src="/assets/placeholder-professora.svg" 
                  alt={`Foto de ${prof.nome}`}
                  className="w-full h-full object-cover rounded-full border-4 border-[#E4670D]"
                />
              </div>
              <div className="flex-grow">
                <h3 className="text-2xl font-semibold mb-3 text-[#445E93]">{prof.nome}</h3>
                <p className="text-[#260C1A] leading-relaxed">{prof.texto}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Professoras;
