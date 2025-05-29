import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Sobre from './components/Sobre';
import Aulas from './components/Aulas';
import Galeria from './components/Galeria';
import Professoras from './components/Professoras';
import Espaco from './components/Espaco';
import Contato from './components/Contato';
import WhatsappButton from './components/WhatsappButton';
import Valores from './components/Valores';
import Empresas from './components/Empresas';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalImage, setModalImage] = useState('/assets/pole-vestir.png');
  
  const openModal = (imagePath) => {
    setModalImage(imagePath);
    setIsModalOpen(true);
  };
  
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="min-h-screen bg-[#121212]">
      <Header />
      <main className="pt-32">
        {/* Home Section - Hero Banner */}
        <section 
          id="home" 
          className="min-h-screen relative flex items-center justify-center text-center text-white overflow-hidden -mt-32"
        >
          {/* Video Background */}
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
          >
            <source src="/assets/background.mp4" type="video/mp4" />
          </video>
          
          {/* Overlay for better text readability */}
          <div className="absolute inset-0 bg-black opacity-70"></div>
          
          {/* Content */}
          <div className="relative z-10 flex flex-col items-center justify-center min-h-screen mt-4">
            {/* Animated Logo */}
            <img 
              src="/assets/rosa.svg" 
              alt="MOOV Logo" 
              className="w-72 h-72 mb-8 animate-spin-slow"
            />
            
            <img 
              src="/assets/moovText.svg" 
              alt="MOOV" 
              className="h-20 mb-4 drop-shadow-lg"
            />
            <h2 className="text-4xl md:text-6xl font-semibold mb-12 text-white drop-shadow-lg">Circo e Dança</h2>
            
            {/* CTA Buttons */}
            <div className="flex flex-col md:flex-row gap-6">
              <a
                href="#empresas"
                className="bg-[#E4670D] hover:bg-[#2A2A2A] text-white font-bold py-4 px-8 rounded-md transition duration-300 shadow-md text-center border border-[#E4670D] text-xl"
              >
                Contrate o MOOV
              </a>
              <a
                href="#aulas"
                className="bg-transparent hover:bg-[#E4670D] text-white font-bold py-4 px-8 rounded-md transition duration-300 shadow-md text-center border border-[#E4670D] text-xl"
              >
                Agende uma Aula
              </a>
            </div>
          </div>
        </section>

        {/* Apply fadeIn animation to sections */}
        <div className="animate-fadeIn delay-100"><Sobre /></div>
        <div className="animate-fadeIn delay-200"><Professoras /></div>
        <div className="animate-fadeIn delay-250"><Espaco /></div>
        <div className="animate-fadeIn delay-275"><Empresas /></div>
        <div className="animate-fadeIn delay-300"><Aulas openModal={openModal} /></div>
        <div className="animate-fadeIn delay-350"><Valores /></div>
        <div className="animate-fadeIn delay-400"><Galeria /></div>
        <div className="animate-fadeIn delay-500"><Contato /></div>
      </main>
      <WhatsappButton />
      <Footer />

      {/* Modal de imagem global */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-[9999] p-4">
          <div className="relative bg-[#1E1E1E] rounded-lg shadow-2xl max-w-lg w-full max-h-screen overflow-y-auto flex flex-col items-center border border-[#E4670D]">
            <button
              onClick={closeModal}
              className="absolute top-2 right-2 text-[#E4670D] hover:text-white text-2xl font-bold focus:outline-none transition-colors duration-300"
              aria-label="Fechar"
            >
              ×
            </button>
            <img
              src={modalImage}
              alt="O que vestir"
              className="w-full h-auto rounded-md"
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
