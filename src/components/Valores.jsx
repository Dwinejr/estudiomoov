import React from 'react';

function Valores() {
  return (
    <section id="valores" className="py-16 px-4 md:px-8 bg-[#121212]">
      <div className="container mx-auto max-w-4xl text-center">
        <h2 className="text-4xl font-bold text-[#E4670D] mb-8 pt-8">Valores</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-3xl mx-auto">
          {/* Modalidades */}
          <div className="bg-[#1E1E1E] p-6 rounded-lg shadow-md border-2 border-[#E4670D] flex flex-col justify-center">
            <h3 className="text-xl font-semibold text-[#E4670D] mb-4">Modalidades Oferecidas</h3>
            <ul className="space-y-2 text-gray-300 text-left">
              <li className="flex items-center"><span className="mr-2">💪</span>Pole Dance</li>
              <li className="flex items-center"><span className="mr-2">🎶</span>Jazz Funk</li>
              <li className="flex items-center"><span className="mr-2">🏃‍♀️</span>Treino Funcional</li>
              <li className="flex items-center"><span className="mr-2">🎪</span>Circo</li>
              <li className="flex items-center"><span className="mr-2">👧</span>Circo Infantil</li>
            </ul>
          </div>
          {/* Pacotes Regulares */}
          <div className="bg-[#1E1E1E] p-6 rounded-lg shadow-md border-2 border-[#E4670D] flex flex-col justify-center">
            <h3 className="text-xl font-semibold text-[#E4670D] mb-4">Pacotes Regulares</h3>
            <table className="w-full text-left text-gray-300">
              <thead>
                <tr>
                  <th className="pb-2">Aulas/Mês</th>
                  <th className="pb-2 text-right">Valor</th>
                </tr>
              </thead>
              <tbody>
                <tr><td className="py-1">4 aulas/mês</td><td className="py-1 text-right">R$180</td></tr>
                <tr><td className="py-1">6 aulas/mês</td><td className="py-1 text-right">R$205</td></tr>
                <tr><td className="py-1">8 aulas/mês</td><td className="py-1 text-right">R$260</td></tr>
                <tr><td className="py-1">12 aulas/mês</td><td className="py-1 text-right">R$340</td></tr>
              </tbody>
            </table>
          </div>
        </div>
        {/* Extras */}
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6 text-center">
          <div className="bg-[#1E1E1E] border-2 border-[#E4670D] p-4 rounded-lg shadow flex flex-col justify-center">
            <p className="font-semibold text-[#E4670D]">Aula Experimental</p>
            <p className="text-lg text-gray-300">R$20</p>
          </div>
          <div className="bg-[#1E1E1E] border-2 border-[#E4670D] p-4 rounded-lg shadow flex flex-col justify-center">
            <p className="font-semibold text-[#E4670D]">Matrícula</p>
            <p className="text-lg text-gray-300">R$50</p>
          </div>
          <div className="bg-[#1E1E1E] border-2 border-[#E4670D] p-4 rounded-lg shadow flex flex-col justify-center">
            <p className="font-semibold text-[#E4670D]">Aula VIP</p>
            <p className="text-lg text-gray-300">R$90</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Valores;