import React from 'react';

function Aulas({ openModal }) {
  const aulas = [
    'POLE DANCE',
    'TECIDO ACROBÁTICO',
    'AÉREOS',
    'CIRCO INFANTIL',
    'ALONGAMENTO E FLEXIBILIDADE'
  ];

  return (
    <section id="aulas" className="py-16 px-4 md:px-8 bg-[#FCECC9]">
      <div className="container mx-auto max-w-6xl text-center">
        <h2 className="text-4xl font-bold mb-4 text-[#E4670D]">Nossas Aulas</h2>
        <p className="text-lg mb-12 text-[#260C1A]">
          O MOOV oferece aula experimental de todas as atividades. Escolha quais gostaria de experimentar e venha conhecer mais do nosso universo fitness, acrobático e artístico.
        </p>

        {/* Pole Dance Section */}
        <div className="mb-16 bg-white rounded-2xl shadow-xl overflow-hidden border-2 border-[#E4670D]">
          <div className="p-8 md:p-12">
            <h3 className="text-3xl font-bold mb-6 text-[#E4670D]">POLE DANCE</h3>
            <p className="text-lg mb-8 text-[#260C1A]">
              Pole Dance é nossa especialidade! E pra você ter uma experiência completa dessa atividade, nós oferecemos 4 estilos dentro do universo pole dance:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-[#FCECC9] p-6 rounded-xl transform hover:scale-105 transition-transform duration-300">
                <h4 className="text-2xl font-semibold mb-4 text-[#445E93]">Pole Dance Fitness (Pole Fit)</h4>
                <p className="text-[#260C1A]">
                  Com foco em fortalecimento e tônus muscular, nessa aula vc aprende a tecnica dos movimentos como giros, figuras de força e flex, inversões, além de exercícios de fortalecimento e flexibilidade.
                </p>
              </div>

              <div className="bg-[#FCECC9] p-6 rounded-xl transform hover:scale-105 transition-transform duration-300">
                <h4 className="text-2xl font-semibold mb-4 text-[#445E93]">Pole Dance Spin (Pole Spin)</h4>
                <p className="text-[#260C1A]">
                  Você sabia que os poles podem ser fixos e giratórios? Essa aula é sobre desbravar a barra giratória e ter a chance de se sentir confiante nela.
                </p>
              </div>

              <div className="bg-[#FCECC9] p-6 rounded-xl transform hover:scale-105 transition-transform duration-300">
                <h4 className="text-2xl font-semibold mb-4 text-[#445E93]">Pole Coreo</h4>
                <p className="text-[#260C1A]">
                  Uma aula de coreografia voltada para a dança, com menos acrobacias e mais trabalhos coreográficos.
                </p>
              </div>

              <div className="bg-[#FCECC9] p-6 rounded-xl transform hover:scale-105 transition-transform duration-300">
                <h4 className="text-2xl font-semibold mb-4 text-[#445E93]">Pole Heels</h4>
                <p className="text-[#260C1A]">
                  Uma aula de coreografia mais apimentadas e sensuais. usando a pleaser, o salto alto típico de pole dancer - ou qualquer outro salto que queira usar.
                </p>
              </div>
            </div>

            {/* Botões */}
            <div className="flex flex-col md:flex-row gap-4 justify-center mt-10">
              <button
                onClick={openModal}
                className="bg-[#E4670D] hover:bg-[#445E93] text-white font-bold py-3 px-8 rounded-md transition duration-300 shadow-md"
              >
                O Que Vestir?
              </button>
              <a
                href="https://wa.me/551936450210"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#E4670D] hover:bg-[#445E93] text-white font-bold py-3 px-8 rounded-md transition duration-300 shadow-md flex items-center justify-center"
              >
                Marcar aula
              </a>
            </div>
          </div>
        </div>

        {/* Tecido Acrobático Section */}
        <div className="mb-16 bg-white rounded-2xl shadow-xl overflow-hidden border-2 border-[#E4670D]">
          <div className="p-8 md:p-12">
            <h3 className="text-3xl font-bold mb-6 text-[#E4670D]">TECIDO ACROBÁTICO</h3>
            <p className="text-lg mb-8 text-[#260C1A]">
              O tecido acrobático é um aparelho clássico do circo tradicional e contemporâneo.<br /><br />
              As aulas de tecido acrobático trabalham subidas, figuras, drops, movimentos dinâmicos, estáticos, de força e de flexibilidade em baixa, média e alta altura, além de exercícios de fortalecimento e flexibilidade.
            </p>
            <div className="flex flex-col md:flex-row gap-4 justify-center mt-6">
              <button
                onClick={openModal}
                className="bg-[#E4670D] hover:bg-[#445E93] text-white font-bold py-3 px-8 rounded-md transition duration-300 shadow-md"
              >
                O Que Vestir?
              </button>
              <a
                href="https://wa.me/551936450210"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#E4670D] hover:bg-[#445E93] text-white font-bold py-3 px-8 rounded-md transition duration-300 shadow-md flex items-center justify-center"
              >
                Marcar aula
              </a>
            </div>
          </div>
        </div>

        {/* Aéreos Section */}
        <div className="mb-16 bg-white rounded-2xl shadow-xl overflow-hidden border-2 border-[#E4670D]">
          <div className="p-8 md:p-12">
            <h3 className="text-3xl font-bold mb-6 text-[#E4670D]">AÉREOS</h3>
            <p className="text-lg mb-8 text-[#260C1A]">
              Todas as possibilidades de voar em uma aula só, quem escolhe é você!<br /><br />
              Na aula de Aéreos, a aluna poderá conhecer e treinar em todos aparelhos aéreos disponíveis no MOOV: tecido acrobático, tecido marinho, gota, lira, trapézio fixo e cubo aéreo.  A programação pode ser definida pela professora  junto da aluna, seja alternando entre os aparelhos ou focando em apenas um. Venha descobrir como é gostoso - e possível- voar!
            </p>
            <div className="flex flex-col md:flex-row gap-4 justify-center mt-6">
              <button
                onClick={openModal}
                className="bg-[#E4670D] hover:bg-[#445E93] text-white font-bold py-3 px-8 rounded-md transition duration-300 shadow-md"
              >
                O Que Vestir?
              </button>
              <a
                href="https://wa.me/551936450210"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#E4670D] hover:bg-[#445E93] text-white font-bold py-3 px-8 rounded-md transition duration-300 shadow-md flex items-center justify-center"
              >
                Marcar aula
              </a>
            </div>
          </div>
        </div>

        {/* Circo Infantil Section */}
        <div className="mb-16 bg-white rounded-2xl shadow-xl overflow-hidden border-2 border-[#E4670D]">
          <div className="p-8 md:p-12">
            <h3 className="text-3xl font-bold mb-6 text-[#E4670D]">CIRCO INFANTIL</h3>
            <p className="text-lg mb-8 text-[#260C1A]">
              Nessas aulas, as crianças aprendem acrobacias de solo, malabarismo, e as técnicas de tecido acrobático e todos os aparelhos aéreos de forma lúdica e divertida!<br /><br />
              Através das aulas as crianças desenvolvem cordenação motora, consciência corporal, força, flexibilidade além de ganhos subjetivos como maior auto estima e confiança. Atendemos crianças a partir dos 7 anos completos.<br /><br />
              Traga sua criança para uma aula experimental.
            </p>
            <div className="flex flex-col md:flex-row gap-4 justify-center mt-6">
              <button
                onClick={openModal}
                className="bg-[#E4670D] hover:bg-[#445E93] text-white font-bold py-3 px-8 rounded-md transition duration-300 shadow-md"
              >
                O Que Vestir?
              </button>
              <a
                href="https://wa.me/551936450210"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#E4670D] hover:bg-[#445E93] text-white font-bold py-3 px-8 rounded-md transition duration-300 shadow-md flex items-center justify-center"
              >
                Marcar aula
              </a>
            </div>
          </div>
        </div>

        {/* Alongamento e Flexibilidade Section */}
        <div className="mb-16 bg-white rounded-2xl shadow-xl overflow-hidden border-2 border-[#E4670D]">
          <div className="p-8 md:p-12">
            <h3 className="text-3xl font-bold mb-6 text-[#E4670D]">ALONGAMENTO E FLEXIBILIDADE</h3>
            <p className="text-lg mb-8 text-[#260C1A]">
              Complemento essencial para TODAS as atividades oferecidas aqui no MOOV!<br /><br />
              As aulas de alongamento e flexibilidade (flex fit) deixam o corpo todo mais apto e preparado para receber e executar as técnicas e movimentos de cada atividade que oferecemos por aqui. Também ajuda mto na correria do dia a dia, proporcionando um relaxamento profundo depois da aula. Para alunas matriculadas em outras atividades, ela tem um MEGA desconto!
            </p>
            <div className="flex flex-col md:flex-row gap-4 justify-center mt-6">
              <button
                onClick={openModal}
                className="bg-[#E4670D] hover:bg-[#445E93] text-white font-bold py-3 px-8 rounded-md transition duration-300 shadow-md"
              >
                O Que Vestir?
              </button>
              <a
                href="https://wa.me/551936450210"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#E4670D] hover:bg-[#445E93] text-white font-bold py-3 px-8 rounded-md transition duration-300 shadow-md flex items-center justify-center"
              >
                Marcar aula
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Aulas;
