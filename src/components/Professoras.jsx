import React from 'react';

function Professoras() {
  return (
    <section id="professoras" className="py-16 px-4 md:px-8 bg-[#121212]">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl font-bold mb-12 text-center text-[#E4670D]">Nossas Professoras</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Jessica */}
          <div className="bg-[#1E1E1E] rounded-lg overflow-hidden shadow-xl border-2 border-[#E4670D]">
            <div className="aspect-w-1 aspect-h-1">
              <img
                src="/assets/jessica.jpg"
                alt="Jessica Tancredi"
                className="object-cover w-full h-full"
              />
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-bold mb-2 text-[#E4670D]">Jessica Tancredi</h3>
              <p className="text-[#E4670D] font-semibold mb-4">Pole Dance e Aéreos</p>
              <p className="text-gray-300">
                Fundadora do MOOV, especialista em Pole Dance e Aéreos com mais de 15 anos de experiência.
              </p>
            </div>
          </div>

          {/* Maria */}
          <div className="bg-[#1E1E1E] rounded-lg overflow-hidden shadow-xl border-2 border-[#E4670D]">
            <div className="aspect-w-1 aspect-h-1">
              <img
                src="/assets/maria.jpg"
                alt="Maria Silva"
                className="object-cover w-full h-full"
              />
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-bold mb-2 text-[#E4670D]">Maria Silva</h3>
              <p className="text-[#E4670D] font-semibold mb-4">Tecido Acrobático</p>
              <p className="text-gray-300">
                Especialista em Tecido Acrobático e Circo Contemporâneo.
              </p>
            </div>
          </div>

          {/* Ana */}
          <div className="bg-[#1E1E1E] rounded-lg overflow-hidden shadow-xl border-2 border-[#E4670D]">
            <div className="aspect-w-1 aspect-h-1">
              <img
                src="/assets/ana.jpg"
                alt="Ana Santos"
                className="object-cover w-full h-full"
              />
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-bold mb-2 text-[#E4670D]">Ana Santos</h3>
              <p className="text-[#E4670D] font-semibold mb-4">Circo Infantil</p>
              <p className="text-gray-300">
                Pedagoga especializada em artes circenses para crianças.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Professoras;
