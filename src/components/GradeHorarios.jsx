import React from 'react';

function GradeHorarios() {
  const horarios = [
    {
      horario: '08h00',
      segunda: 'Pole',
      terca: 'Treinamento Funcional',
      quarta: '',
      quinta: 'Pole',
      sexta: '',
      sabado: 'Circo (Aéreos)'
    },
    {
      horario: '09h00',
      segunda: '',
      terca: '',
      quarta: '',
      quinta: '',
      sexta: '',
      sabado: 'Circo Infantil / Pole'
    },
    {
      horario: '10h00',
      segunda: '',
      terca: '',
      quarta: '',
      quinta: '',
      sexta: '',
      sabado: 'Circo Infantil / Pole'
    },
    {
      horario: '14h00',
      segunda: '',
      terca: '',
      quarta: '',
      quinta: '',
      sexta: '',
      sabado: 'Pole'
    },
    {
      horario: '15h00',
      segunda: '',
      terca: '',
      quarta: '',
      quinta: '',
      sexta: '',
      sabado: 'Pole'
    },
    {
      horario: '18h30',
      segunda: 'Pole',
      terca: 'Acrobacia de Solo / Pole',
      quarta: 'Jazz Funk',
      quinta: 'Tecido / Pole',
      sexta: 'Circo (Aéreos)',
      sabado: ''
    },
    {
      horario: '19h30',
      segunda: 'Pole Coreo',
      terca: 'Tecido / Pole',
      quarta: 'Pole',
      quinta: 'Lira e Trapézio / Pole Fit',
      sexta: '',
      sabado: ''
    },
    {
      horario: '20h30',
      segunda: 'Pole Coreo',
      terca: 'Flex',
      quarta: 'Pole Heels',
      quinta: 'Flex',
      sexta: '',
      sabado: ''
    }
  ];

  const diasSemana = [
    { nome: 'Segunda', key: 'segunda' },
    { nome: 'Terça', key: 'terca' },
    { nome: 'Quarta', key: 'quarta' },
    { nome: 'Quinta', key: 'quinta' },
    { nome: 'Sexta', key: 'sexta' },
    { nome: 'Sábado', key: 'sabado' }
  ];

  // Função para formatar as aulas com ícones
  const formatarAula = (aula) => {
    if (!aula) return '';
    
    let aulaFormatada = aula;
    
    // Substituir "Pole" por "Pole Fit" (exceto quando já é "Pole Fit" ou "Pole Heels")
    if (aula.includes('Pole') && !aula.includes('Pole Fit') && !aula.includes('Pole Coreo') && !aula.includes('Pole Heels')) {
      aulaFormatada = aula.replace(/Pole/g, 'Pole Fit');
    }
    
    return aulaFormatada;
  };

  return (
    <section id="grade-horarios" className="py-16 px-4 md:px-8 bg-[#121212]">
      <div className="container mx-auto max-w-6xl text-center">
        <h2 className="text-4xl font-bold mb-4 text-[#E4670D] pt-8">Grade de Horários 2025</h2>
        <p className="text-lg mb-12 text-gray-300">
          Confira nossos horários de aulas e encontre o momento perfeito para você se conectar com o universo MOOV.
        </p>

        {/* Desktop Table View */}
        <div className="hidden md:block bg-[#1E1E1E] rounded-2xl shadow-xl overflow-hidden border-2 border-[#E4670D]">
          <div className="p-4 md:p-8">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[800px]">
                <thead>
                  <tr className="bg-[#E4670D] text-[#121212]">
                    <th className="p-3 md:p-4 text-left font-semibold text-sm md:text-base sticky left-0 bg-[#E4670D] z-10 w-24 md:w-28">
                      Horário
                    </th>
                    <th className="p-3 md:p-4 text-center font-semibold text-sm md:text-base w-1/6">
                      Segunda
                    </th>
                    <th className="p-3 md:p-4 text-center font-semibold text-sm md:text-base w-1/6">
                      Terça
                    </th>
                    <th className="p-3 md:p-4 text-center font-semibold text-sm md:text-base w-1/6">
                      Quarta
                    </th>
                    <th className="p-3 md:p-4 text-center font-semibold text-sm md:text-base w-1/6">
                      Quinta
                    </th>
                    <th className="p-3 md:p-4 text-center font-semibold text-sm md:text-base w-1/6">
                      Sexta
                    </th>
                    <th className="p-3 md:p-4 text-center font-semibold text-sm md:text-base w-1/6">
                      Sábado
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#2A2A2A]">
                  {horarios.map((row, index) => (
                    <tr key={index} className="hover:bg-[#2A2A2A] transition-colors duration-150 group">
                      <td className="p-3 md:p-4 font-medium text-[#E4670D] sticky left-0 bg-[#1E1E1E] group-hover:bg-[#2A2A2A] z-10 text-sm md:text-base">
                        {row.horario}
                      </td>
                      <td className="p-3 md:p-4 text-center text-sm md:text-base text-gray-300 font-bold">
                        {formatarAula(row.segunda) || '-'}
                      </td>
                      <td className="p-3 md:p-4 text-center text-sm md:text-base text-gray-300 font-bold">
                        {formatarAula(row.terca) || '-'}
                      </td>
                      <td className="p-3 md:p-4 text-center text-sm md:text-base text-gray-300 font-bold">
                        {formatarAula(row.quarta) || '-'}
                      </td>
                      <td className="p-3 md:p-4 text-center text-sm md:text-base text-gray-300 font-bold">
                        {formatarAula(row.quinta) || '-'}
                      </td>
                      <td className="p-3 md:p-4 text-center text-sm md:text-base text-gray-300 font-bold">
                        {formatarAula(row.sexta) || '-'}
                      </td>
                      <td className="p-3 md:p-4 text-center text-sm md:text-base text-gray-300 font-bold">
                        {formatarAula(row.sabado) || '-'}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Mobile Cards View */}
        <div className="md:hidden space-y-4">
          {diasSemana.map((dia) => (
            <div key={dia.key} className="bg-[#1E1E1E] rounded-xl shadow-lg border-2 border-[#E4670D] overflow-hidden">
              <div className="bg-[#E4670D] text-[#121212] p-3 text-center">
                <h3 className="font-bold text-lg">{dia.nome}</h3>
              </div>
              <div className="p-4">
                <div className="space-y-3">
                  {horarios.map((horario, index) => {
                    const aula = horario[dia.key];
                    if (!aula) return null;
                    
                    return (
                      <div key={index} className="flex justify-between items-center bg-[#2A2A2A] rounded-lg p-3">
                        <div className="text-[#E4670D] font-semibold text-sm">
                          {horario.horario}
                        </div>
                        <div className="text-gray-300 text-sm text-right flex-1 ml-3 font-bold">
                          {formatarAula(aula)}
                        </div>
                      </div>
                    );
                  })}
                  {!horarios.some(horario => horario[dia.key]) && (
                    <div className="text-gray-500 text-sm text-center py-4">
                      Nenhuma aula neste dia
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center">
          <p className="text-gray-400 text-sm mb-4">
            Para mais informações sobre aulas e matrículas, entre em contato conosco.
          </p>
          <a
            href="https://wa.me/551936450210"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#E4670D] hover:bg-[#2A2A2A] text-white font-bold py-3 px-8 rounded-md transition duration-300 shadow-md flex items-center justify-center border border-[#E4670D] mx-auto w-fit"
          >
            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
              <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
            </svg>
            Agendar Aula
          </a>
        </div>
      </div>
    </section>
  );
}

export default GradeHorarios; 