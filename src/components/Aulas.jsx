import React from 'react';

function Aulas({ openModal }) {
  const handleModalOpen = (imagePath) => {
    openModal(imagePath);
  };

  const aulas = [
    'POLE DANCE',
    'TECIDO ACROBÁTICO',
    'AÉREOS',
    'CIRCO INFANTIL',
    'ALONGAMENTO E FLEXIBILIDADE'
  ];

  return (
    <section id="aulas" className="py-16 px-4 md:px-8 bg-[#121212]">
      <div className="container mx-auto max-w-6xl text-center">
        <h2 className="text-4xl font-bold mb-4 text-[#E4670D] pt-8">Nossas Aulas</h2>
        <p className="text-lg mb-12 text-gray-300">
          O MOOV oferece aula experimental de todas as atividades. Escolha quais gostaria de experimentar e venha conhecer mais do nosso universo fitness, acrobático e artístico.
        </p>

        {/* Pole Dance Section */}
        <div className="mb-16 bg-[#1E1E1E] rounded-2xl shadow-xl overflow-hidden border-2 border-[#E4670D]">
          <div className="p-8 md:p-12">
            <h3 className="text-3xl font-bold mb-6 text-[#E4670D]">POLE DANCE</h3>
            <p className="text-lg mb-8 text-gray-300">
            Pole Dance é uma das nossas especialidades! E pra você ter uma experiência completa, oferecemos 3 estilos dentro do universo pole dance:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-[#2A2A2A] p-6 rounded-xl transform hover:scale-105 transition-transform duration-300 border border-[#E4670D]">
                <h4 className="text-2xl font-semibold mb-4 text-[#E4670D]">Pole Dance Fitness<br/> (Pole Fit)</h4>
                <p className="text-gray-300">
                Com foco em fortalecimento e tônus muscular, nessa aula você aprende a técnica dos movimentos como giros, figuras de força e flex, inversões, além de exercícios de fortalecimento e flexibilidade.
                </p>
              </div>

              <div className="bg-[#2A2A2A] p-6 rounded-xl transform hover:scale-105 transition-transform duration-300 border border-[#E4670D]">
                <h4 className="text-2xl font-semibold mb-4 text-[#E4670D]">Pole Coreo</h4>
                <p className="text-gray-300">
                Foco na dança e na expressão corporal, voltada para o aprendizado e desenvolvimento de coreografias fluidas e envolventes. Durante as aulas, também são trabalhados aspectos fundamentais como o fortalecimento muscular, a flexibilidade e a coordenação motora, essenciais para a execução técnica dos movimentos. É uma experiência que alia arte, condicionamento físico e autoestima, promovendo consciência corporal, leveza e confiança.
                  </p>
              </div>

              <div className="bg-[#2A2A2A] p-6 rounded-xl transform hover:scale-105 transition-transform duration-300 border border-[#E4670D]">
                <h4 className="text-2xl font-semibold mb-4 text-[#E4670D]">Pole Heels</h4>
                <p className="text-gray-300">
                Aula focada em coreografias marcantes, fluidez de movimentos e expressão com o uso do salto alto. Além do aspecto artístico, as aulas também promovem o fortalecimento muscular, o ganho de flexibilidade e o desenvolvimento da consciência corporal. É uma experiência intensa e empoderadora, que une técnica, elegância e atitude, trabalhando presença de palco, musicalidade e confiança em cada movimento.
                </p>
              </div>
            </div>

            {/* Botões */}
            <div className="flex flex-col md:flex-row gap-4 justify-center mt-10">
              <button
                onClick={() => handleModalOpen('/assets/pole-vestir.png')}
                className="bg-[#E4670D] hover:bg-[#2A2A2A] text-white font-bold py-3 px-8 rounded-md transition duration-300 shadow-md border border-[#E4670D]"
              >
                O Que Vestir?
              </button>
              <a
                href="https://wa.me/551936450210"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#E4670D] hover:bg-[#2A2A2A] text-white font-bold py-3 px-8 rounded-md transition duration-300 shadow-md flex items-center justify-center border border-[#E4670D]"
              >
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
                </svg>
                Marcar aula
              </a>
            </div>
          </div>
        </div>

        {/* Tecido Acrobático Section */}
        <div className="mb-16 bg-[#1E1E1E] rounded-2xl shadow-xl overflow-hidden border-2 border-[#E4670D]">
          <div className="p-8 md:p-12">
            <h3 className="text-3xl font-bold mb-6 text-[#E4670D]">TECIDO ACROBÁTICO</h3>
            <p className="text-lg mb-8 text-gray-300">
            O tecido acrobático é um dos aparelhos mais emblemáticos do circo, presente tanto nas apresentações clássicas quanto nas produções contemporâneas. Suspenso no ar, o praticante explora movimentos que desafiam a gravidade e encantam pela leveza e força.<br/>
As aulas de tecido acrobático oferecem uma vivência completa que une arte, técnica e preparo físico. Durante a prática, os alunos aprendem subidas, travas, figuras, transições, quedas (drops), além de movimentos dinâmicos e estáticos que exigem força, controle e fluidez. Também são trabalhados aspectos como flexibilidade, consciência corporal e resistência muscular, fundamentais para a segurança e evolução na prática.<br/>
Mais do que uma atividade física, o tecido acrobático é uma forma de expressão, que desenvolve confiança, foco e superação de limites. Ideal para quem busca um desafio criativo e envolvente, combinando beleza e potência nas alturas.

              </p>
            <div className="flex flex-col md:flex-row gap-4 justify-center mt-6">
              <button
                onClick={() => handleModalOpen('/assets/circo-vestir.png')}
                className="bg-[#E4670D] hover:bg-[#2A2A2A] text-white font-bold py-3 px-8 rounded-md transition duration-300 shadow-md border border-[#E4670D]"
              >
                O Que Vestir?
              </button>
              <a
                href="https://wa.me/551936450210"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#E4670D] hover:bg-[#2A2A2A] text-white font-bold py-3 px-8 rounded-md transition duration-300 shadow-md flex items-center justify-center border border-[#E4670D]"
              >
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
                </svg>
                Marcar aula
              </a>
            </div>
          </div>
        </div>

        {/* Aéreos Section */}
        <div className="mb-16 bg-[#1E1E1E] rounded-2xl shadow-xl overflow-hidden border-2 border-[#E4670D]">
          <div className="p-8 md:p-12">
            <h3 className="text-3xl font-bold mb-6 text-[#E4670D]">AÉREOS</h3>
            <p className="text-lg mb-8 text-gray-300">Todas as possibilidades de voar em uma aula só, quem escolhe é você!<br/>
Na aula de Aéreos, você poderá conhecer e treinar em todos aparelhos aéreos disponíveis no MOOV: tecido acrobático, tecido marinho, gota, lira, trapézio fixo e cubo aéreo.<br/>  A programação pode ser definida pela professora, seja alternando entre os aparelhos ou focando em apenas um. Venha descobrir como é gostoso e possível voar!
              </p>
            <div className="flex flex-col md:flex-row gap-4 justify-center mt-6">
              <button
                onClick={() => handleModalOpen('/assets/circo-vestir.png')}
                className="bg-[#E4670D] hover:bg-[#2A2A2A] text-white font-bold py-3 px-8 rounded-md transition duration-300 shadow-md border border-[#E4670D]"
              >
                O Que Vestir?
              </button>
              <a
                href="https://wa.me/551936450210"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#E4670D] hover:bg-[#2A2A2A] text-white font-bold py-3 px-8 rounded-md transition duration-300 shadow-md flex items-center justify-center border border-[#E4670D]"
              >
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
                </svg>
                Marcar aula
              </a>
            </div>
          </div>
        </div>

        {/* Circo Infantil Section */}
        <div className="mb-16 bg-[#1E1E1E] rounded-2xl shadow-xl overflow-hidden border-2 border-[#E4670D]">
          <div className="p-8 md:p-12">
            <h3 className="text-3xl font-bold mb-6 text-[#E4670D]">CIRCO INFANTIL</h3>
            <p className="text-lg mb-8 text-gray-300">
            Nessas aulas, as crianças aprendem acrobacias de solo, as técnicas de tecido acrobático e todos os aparelhos aéreos de forma lúdica e divertida!<br/>
Através das aulas as crianças desenvolvem coordenação motora, consciência corporal, força, flexibilidade além de ganhos subjetivos como maior auto estima e confiança. Atendemos crianças a partir dos 5 anos completos.
            </p>
            <div className="flex flex-col md:flex-row gap-4 justify-center mt-6">
              <button
                onClick={() => handleModalOpen('/assets/circo-vestir.png')}
                className="bg-[#E4670D] hover:bg-[#2A2A2A] text-white font-bold py-3 px-8 rounded-md transition duration-300 shadow-md border border-[#E4670D]"
              >
                O Que Vestir?
              </button>
              <a
                href="https://wa.me/551936450210"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#E4670D] hover:bg-[#2A2A2A] text-white font-bold py-3 px-8 rounded-md transition duration-300 shadow-md flex items-center justify-center border border-[#E4670D]"
              >
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
                </svg>
                Marcar aula
              </a>
            </div>
          </div>
        </div>

        {/* Alongamento e Flexibilidade Section */}
        <div className="mb-16 bg-[#1E1E1E] rounded-2xl shadow-xl overflow-hidden border-2 border-[#E4670D]">
          <div className="p-8 md:p-12">
            <h3 className="text-3xl font-bold mb-6 text-[#E4670D]">ALONGAMENTO E FLEXIBILIDADE</h3>
            <p className="text-lg mb-8 text-gray-300">Complemento essencial para TODAS as atividades oferecidas aqui no MOOV!<br/>
As aulas de alongamento e flexibilidade (flex fit) deixam o corpo todo mais apto e preparado para receber e executar as técnicas e movimentos de cada atividade que oferecemos por aqui. Também ajuda muito no dia a dia, proporcionando um relaxamento profundo depois da aula.
</p>
            <div className="flex flex-col md:flex-row gap-4 justify-center mt-6">
              <button
                onClick={() => handleModalOpen('/assets/alongamento-vestir.png')}
                className="bg-[#E4670D] hover:bg-[#2A2A2A] text-white font-bold py-3 px-8 rounded-md transition duration-300 shadow-md border border-[#E4670D]"
              >
                O Que Vestir?
              </button>
              <a
                href="https://wa.me/551936450210"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#E4670D] hover:bg-[#2A2A2A] text-white font-bold py-3 px-8 rounded-md transition duration-300 shadow-md flex items-center justify-center border border-[#E4670D]"
              >
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
                </svg>
                Marcar aula
              </a>
            </div>
          </div>
        </div>

        {/* Jazz Funk Section */}
        <div className="mb-16 bg-[#1E1E1E] rounded-2xl shadow-xl overflow-hidden border-2 border-[#E4670D]">
          <div className="p-8 md:p-12">
            <h3 className="text-3xl font-bold mb-6 text-[#E4670D]">JAZZ FUNK</h3>
            <p className="text-lg mb-8 text-gray-300">
              Jazz Funk é um estilo de dança que mistura elementos do jazz dance tradicional com movimentos do funk, do hip hop e de outras danças urbanas. Ele é marcado por muita energia, atitude e sensualidade, com foco tanto na técnica quanto na expressão corporal.
            </p>
            <div className="flex flex-col md:flex-row gap-4 justify-center mt-6">
              <button
                onClick={() => handleModalOpen('/assets/alongamento-vestir.png')}
                className="bg-[#E4670D] hover:bg-[#2A2A2A] text-white font-bold py-3 px-8 rounded-md transition duration-300 shadow-md border border-[#E4670D]"
              >
                O Que Vestir?
              </button>
              <a
                href="https://wa.me/551936450210"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#E4670D] hover:bg-[#2A2A2A] text-white font-bold py-3 px-8 rounded-md transition duration-300 shadow-md flex items-center justify-center border border-[#E4670D]"
              >
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
                </svg>
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
