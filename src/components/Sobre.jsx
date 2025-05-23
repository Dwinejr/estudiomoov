import React from 'react';

function Sobre() {
  return (
    // Use <article> for self-contained content about the studio
    <article id="sobre" className="py-16 px-4 md:px-8 bg-[#FCECC9]">
      <div className="container mx-auto max-w-4xl text-center">
        <h2 className="text-4xl font-bold mb-8 text-[#E4670D]">Sobre Nós</h2>
        <figure className="mb-8">
          <img 
            src="/assets/sobre_nos_imagem.jpeg" 
            alt="Apresentação de circo no Estúdio Moov" // Improved alt text
            className="max-w-full md:max-w-lg h-auto mx-auto rounded-lg shadow-lg border-4 border-[#E4670D]"
          />
        </figure>
        <h3 className="text-2xl font-semibold mb-4 text-[#445E93]">ESTÚDIO MOOV DESDE 2010 em Santa Bárbara d'Oeste</h3> {/* Added location keyword */}
        <div className="text-lg leading-relaxed space-y-4 text-[#260C1A]">
          <p>
            Há 15 anos, o MOOV proporciona um ambiente agradável de troca e estudo em Santa Bárbara d'Oeste, com professores capacitados para atender da melhor forma os amantes das artes, da dança, do circo e da vida! Temos aulas de Pole Dance, Circo, Danças e Alongamento. Esperamos sua visita!
          </p>
          <p>
            O Estúdio MOOV - Circo e Dança foi idealizado por Jessica Tancredi para trazer para as cidades de Americana, Santa Bárbara D'Oeste e região (incluindo Limeira e Nova Odessa), um espaço diferenciado onde o movimento fosse a alma do negócio! A dança trouxe o pole dance, que trouxe o circo, que trouxe um monte de atividades e possibilidades que trabalham o corpo de forma diferenciada, eficiente e prazerosa, modificando e melhorando o compromisso corpo x atividade física das nossas alunas e alunos, que chamamos de trupe!
          </p>
        </div>
        {/* Quote section using blockquote for semantic meaning */}
        <blockquote className="mt-12 p-6 bg-orange-500 text-white rounded-lg shadow-md max-w-2xl mx-auto">
          <p className="text-xl italic">"A vida é como andar de bicicleta, para manter o equilíbrio é preciso se manter em movimento"</p>
        </blockquote>
      </div>
    </article>
  );
}

export default Sobre;
