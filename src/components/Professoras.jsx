import React from 'react';
import { getAssetPath } from '../lib/utils';

function Professoras({ openHorariosModal }) {
  // Dados dos horários das professoras
  const horariosProfessoras = {
    'Karen Lima': {
      segunda: [
        { horario: '18:30', nome: 'Pole Fit' },
        { horario: '19:30', nome: 'Pole Coreo' }
      ],
      terca: [
        { horario: '18:30', nome: 'Pole Fit' },
        { horario: '19:30', nome: 'Pole Fit' }
      ],
      quarta: [
        { horario: '19:30', nome: 'Pole Fit' },
        { horario: '20:30', nome: 'Pole Heels' }
      ],
      quinta: [
        { horario: '18:30', nome: 'Pole Fit' },
        { horario: '19:30', nome: 'Pole Fit' }
      ],
      sexta: [],
      sabado: [
        { horario: '14:00', nome: 'Pole Fit' },
        { horario: '15:00', nome: 'Pole Fit' }
      ]
    },
    'Bárbara Medeiros': {
      segunda: [
        { horario: '20:30', nome: 'Pole Coreo' }
      ],
      terca: [],
      quarta: [],
      quinta: [],
      sexta: [],
      sabado: [
        { horario: '09:00', nome: 'Pole Fit' },
        { horario: '10:00', nome: 'Pole Fit' }
      ]
    },
    'Marília Yasuda': {
      segunda: [
        { horario: '08:00', nome: 'Pole Fit' }
      ],
      terca: [],
      quarta: [],
      quinta: [
        { horario: '08:00', nome: 'Pole Fit' }
      ],
      sexta: [],
      sabado: []
    },
    'Giulia Bassani': {
      segunda: [],
      terca: [
        { horario: '08:00', nome: 'Treinamento Funcional' },
        { horario: '18:30', nome: 'Tecido' },
        { horario: '19:30', nome: 'Lira e Trapézio' },
        { horario: '20:30', nome: 'Flex' }
      ],
      quarta: [],
      quinta: [
        { horario: '08:00', nome: 'Treinamento Funcional' },
        { horario: '18:30', nome: 'Tecido' },
        { horario: '19:30', nome: 'Lira e Trapézio' },
        { horario: '20:30', nome: 'Flex' }
      ],
      sexta: [
        { horario: '18:30', nome: 'Treinamento Funcional' },
        { horario: '19:30', nome: 'Circo (Aéreos)' }
      ],
      sabado: [
        { horario: '08:00', nome: 'Circo (Aéreos)' },
        { horario: '09:00', nome: 'Circo Infantil' },
        { horario: '10:00', nome: 'Circo Infantil' }
      ]
    },
    'Kadu Godoi': {
      segunda: [],
      terca: [],
      quarta: [
        { horario: '18:30', nome: 'Jazz Funk' }
      ],
      quinta: [],
      sexta: [],
      sabado: []
    }
  };

  const abrirModal = (professora) => {
    openHorariosModal(professora, horariosProfessoras[professora]);
  };

  return (
    <section id="professoras" className="py-16 px-4 md:px-8 bg-[#121212]">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl font-bold mb-12 text-center text-[#E4670D] pt-8">Nossos Professores</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Karen Lima */}
          <div className="bg-[#1E1E1E] rounded-lg overflow-hidden shadow-xl border-2 border-[#E4670D]">
            <div className="aspect-w-1 aspect-h-1">
              <img
                src={getAssetPath('/assets/karen04.jpg')}
                alt="Karen Lima"
                className="object-cover w-full h-full"
              />
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-bold mb-2 text-[#E4670D]">Karen Lima</h3>
              <p className="text-[#E4670D] font-semibold mb-4">Pole Dance, Pole Fit, Pole Coreo, Pole Heels</p>
              <button
                onClick={() => abrirModal('Karen Lima')}
                className="bg-[#E4670D] hover:bg-[#2A2A2A] text-white font-bold py-2 px-6 rounded-md transition duration-300 shadow-md border border-[#E4670D] w-full mb-4"
              >
                Ver Horários
              </button>
              <p className="text-gray-300">
                Pratica o Pole Dance desde 2012. Após cursos de capacitação com grandes nomes, cursou Educação Física na Unicamp (licenciatura e bacharelado, 2020), com pesquisa na modalidade. Desde então, segue se especializando para aprimorar seu ensino. Sua maior satisfação é ver a autoestima de suas alunas e alunos crescer.
              </p>
            </div>
          </div>

          {/* Giulia */}
          <div className="bg-[#1E1E1E] rounded-lg overflow-hidden shadow-xl border-2 border-[#E4670D]">
            <div className="aspect-w-1 aspect-h-1">
              <img
                src={getAssetPath('/assets/giulia.jpg')}
                alt="Giulia Bassani"
                className="object-cover w-full h-full"
              />
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-bold mb-2 text-[#E4670D]">Giulia Bassani</h3>
              <p className="text-[#E4670D] font-semibold mb-4">Tecido Acrobático, Circo e Aéreos</p>
              <button
                onClick={() => abrirModal('Giulia Bassani')}
                className="bg-[#E4670D] hover:bg-[#2A2A2A] text-white font-bold py-2 px-6 rounded-md transition duration-300 shadow-md border border-[#E4670D] w-full mb-4"
              >
                Ver Horários
              </button>
              <p className="text-gray-300">
                Apaixonada por ensinar e pelos desafios das artes circenses, Giulia Bassani atua há mais de 10 anos no universo dos aparelhos aéreos, como tecido acrobático, lira e trapézio. Formada em Educação Física pela UNESP, alia sua formação acadêmica à vivência prática para oferecer aulas seguras, dinâmicas e acolhedoras. Está sempre em busca de novos conhecimentos para aprimorar seu ensino e incentivar cada aluna a superar seus próprios limites, desenvolvendo força, técnica e confiança no ar.
              </p>
            </div>
          </div>

          {/* Marília Japa */}
          <div className="bg-[#1E1E1E] rounded-lg overflow-hidden shadow-xl border-2 border-[#E4670D]">
            <div className="aspect-w-1 aspect-h-1">
              <img
                src={getAssetPath('/assets/marilia.jpg')}
                alt="Marília Yasuda"
                className="object-cover w-full h-full"
              />
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-bold mb-2 text-[#E4670D]">Marília Yasuda</h3>
              <p className="text-[#E4670D] font-semibold mb-4">Pole Dance, Pole Fit</p>
              <button
                onClick={() => abrirModal('Marília Yasuda')}
                className="bg-[#E4670D] hover:bg-[#2A2A2A] text-white font-bold py-2 px-6 rounded-md transition duration-300 shadow-md border border-[#E4670D] w-full mb-4"
              >
                Ver Horários
              </button>
              <p className="text-gray-300">
                Marília Yasuda é advogada e apaixonada pelo universo do Pole Dance, no qual atua há mais de 10 anos como aluna. Agora, assume também o papel de professora no Moov, unindo sua experiência prática à dedicação em compartilhar conhecimento. Sempre em busca de evolução, acredita que o Pole é uma poderosa ferramenta de desenvolvimento físico, expressão e superação pessoal.
              </p>
            </div>
          </div>

          {/* Bábara Soares */}
          <div className="bg-[#1E1E1E] rounded-lg overflow-hidden shadow-xl border-2 border-[#E4670D]">
            <div className="aspect-w-1 aspect-h-1">
              <img
                src={getAssetPath('/assets/barbara.jpg')}
                alt="Bábara Medeiros"
                className="object-cover w-full h-full"
              />
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-bold mb-2 text-[#E4670D]">Bárbara Medeiros</h3>
              <p className="text-[#E4670D] font-semibold mb-4">Pole Dance, Pole Fit, Pole Coreo</p>
              <button
                onClick={() => abrirModal('Bárbara Medeiros')}
                className="bg-[#E4670D] hover:bg-[#2A2A2A] text-white font-bold py-2 px-6 rounded-md transition duration-300 shadow-md border border-[#E4670D] w-full mb-4"
              >
                Ver Horários
              </button>
              <p className="text-gray-300">
                Bárbara Medeiros é instrutora de Pole Dance há mais de 8 anos, com uma trajetória marcada pela paixão pelo movimento, pela dança e pela expressão corporal. Encantada pelo universo do Pole Coreo, traz para suas aulas uma proposta que une técnica, musicalidade e fluidez. Seu objetivo é proporcionar um espaço onde cada aluna possa explorar seu próprio estilo, se desafiar e se divertir através da dança no pole.
              </p>
            </div>
          </div>

          {/* Kadu Godoi */}
          <div className="bg-[#1E1E1E] rounded-lg overflow-hidden shadow-xl border-2 border-[#E4670D]">
            <div className="aspect-w-1 aspect-h-1">
              <img
                src={getAssetPath('/assets/kadu.jpg')}
                alt="Kadu Godoi"
                className="object-cover w-full h-full"
              />
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-bold mb-2 text-[#E4670D]">Kadu Godoi</h3>
              <p className="text-[#E4670D] font-semibold mb-4">Jazz Funk</p>
              <button
                onClick={() => abrirModal('Kadu Godoi')}
                className="bg-[#E4670D] hover:bg-[#2A2A2A] text-white font-bold py-2 px-6 rounded-md transition duration-300 shadow-md border border-[#E4670D] w-full mb-4"
              >
                Ver Horários
              </button>
              <p className="text-gray-300">
                Kadu Godoi é professor, coreógrafo e dançarino. Com uma trajetória marcada pela dedicação e criatividade, Kadu alia técnica, ousadia e sensibilidade artística para transformar cada aula de Jazz Funk em uma experiência única.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Professoras;
