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

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalImage, setModalImage] = useState('/assets/pole-vestir.png');
  
  const openModal = (imagePath) => {
    setModalImage(imagePath);
    setIsModalOpen(true);
  };
  
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="App bg-[#121212] text-gray-100 min-h-screen overflow-x-hidden">
      <Header />
      <main className="pt-16">
        {/* Home Section - Hero Banner */}
        <section 
          id="home" 
          className="h-screen bg-cover bg-center flex items-center justify-center text-center text-white relative"
          style={{ backgroundImage: 'url(/assets/banner_principal.jpeg)' }}
        >
          {/* Overlay for better text readability */}
          <div className="absolute inset-0 bg-black opacity-80"></div>
          <div className="relative z-10">
            <h1 className="text-6xl md:text-8xl font-bold mb-4 text-[#E4670D] drop-shadow-lg">MOOV</h1>
            <h2 className="text-4xl md:text-6xl font-semibold mb-8 text-white drop-shadow-lg">Circo e Dança</h2>
          </div>
        </section>

        {/* Apply fadeIn animation to sections */}
        <div className="animate-fadeIn delay-100"><Sobre /></div>
        <div className="animate-fadeIn delay-200"><Professoras /></div>
        <div className="animate-fadeIn delay-250"><Espaco /></div>
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
