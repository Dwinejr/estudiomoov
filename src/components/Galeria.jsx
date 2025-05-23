import React from 'react';

function Galeria() {
  // Placeholder images - Ideally, collect more relevant images
  const images = [
    '/assets/banner_principal.jpeg',
    '/assets/sobre_nos_imagem.jpeg',
    '/assets/aulas_background.jpeg', // This might be less suitable for a gallery item
    '/assets/pole_dance_imagem.jpeg',
    // Add more image paths here as they become available or are collected
  ];

  return (
    <section id="galeria" className="py-16 px-4 md:px-8 bg-[#FCECC9]">
      <div className="container mx-auto max-w-6xl text-center">
        <h2 className="text-4xl font-bold mb-12 text-[#E4670D]">Galeria de Fotos</h2>
        {images.length > 0 ? (
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {images.map((imgSrc, index) => (
              <div key={index} className="overflow-hidden rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300 border-2 border-[#E4670D]">
                <img 
                  src={imgSrc} 
                  alt={`Galeria Estúdio Moov ${index + 1}`} 
                  className="w-full h-48 sm:h-64 object-cover cursor-pointer" 
                />
              </div>
            ))}
          </div>
        ) : (
          <p className="text-[#260C1A]">Nenhuma imagem na galeria ainda. Volte em breve!</p>
        )}
      </div>
    </section>
  );
}

export default Galeria;
