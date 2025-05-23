import React from 'react';

function Espaco() {
  return (
    <section id="espaco" className="py-16 px-4 md:px-8 bg-[#FCECC9]">
      <div className="container mx-auto max-w-4xl text-center">
        <h2 className="text-4xl font-bold mb-8 text-[#E4670D]">O Seu Espaço para Dançar, Voar e Evoluir!</h2>
        
        <div className="text-lg leading-relaxed space-y-6 text-[#260C1A]">
          <p>
            Com 90m² de estrutura pensada para o seu bem-estar, o Estúdio Moov é o lugar perfeito para quem busca movimento, arte e superação. Contamos com um ambiente vibrante e acolhedor, equipado com:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
            <div className="bg-white p-6 rounded-lg shadow-lg border-2 border-[#E4670D]">
              <p className="flex items-center gap-2 mb-2">
                <span className="text-2xl">✨</span>
                <span>Área ampla para aulas de dança e flexibilidade</span>
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg border-2 border-[#E4670D]">
              <p className="flex items-center gap-2 mb-2">
                <span className="text-2xl">🎭</span>
                <span>Iluminação cênica para uma experiência imersiva</span>
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg border-2 border-[#E4670D]">
              <p className="flex items-center gap-2 mb-2">
                <span className="text-2xl">🎪</span>
                <span>4 tecidos acrobáticos e 2 liras para você explorar o mundo aéreo</span>
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg border-2 border-[#E4670D]">
              <p className="flex items-center gap-2 mb-2">
                <span className="text-2xl">💃</span>
                <span>5 barras de Pole Dance para desafiar seus limites</span>
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg border-2 border-[#E4670D]">
              <p className="flex items-center gap-2 mb-2">
                <span className="text-2xl">🍃</span>
                <span>Palco móvel de Pole Dance para eventos externos (sessão de fotos e apresentações ao ar livre)</span>
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg border-2 border-[#E4670D]">
              <p className="flex items-center gap-2 mb-2">
                <span className="text-2xl">🎨</span>
                <span>Decoração animada para inspirar cada movimento</span>
              </p>
            </div>
          </div>

          <p className="mt-8">
            Seja para desenvolver novas habilidades, superar desafios ou simplesmente se divertir, o Estúdio Moov está pronto para te receber! Venha viver essa experiência única❤️
          </p>
        </div>
      </div>
    </section>
  );
}

export default Espaco; 