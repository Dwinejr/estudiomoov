import React, { useState, createContext } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Sobre from './components/Sobre';
import Aulas from './components/Aulas';
import GradeHorarios from './components/GradeHorarios';
import Professoras from './components/Professoras';
import Espaco from './components/Espaco';
import Contato from './components/Contato';
import WhatsappButton from './components/WhatsappButton';
import Valores from './components/Valores';
import Empresas from './components/Empresas';
import { getAssetPath } from './lib/utils';

export const VideoBackgroundLoadedContext = createContext(false);

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalImage, setModalImage] = useState(getAssetPath('/assets/pole-vestir.png'));
  const [isHorariosModalOpen, setIsHorariosModalOpen] = useState(false);
  const [professoraSelecionada, setProfessoraSelecionada] = useState('');
  const [horariosSelecionados, setHorariosSelecionados] = useState({});
  const [videoLoaded, setVideoLoaded] = useState(false);
  
  const openModal = (imagePath) => {
    setModalImage(getAssetPath(imagePath));
    setIsModalOpen(true);
  };
  
  const closeModal = () => setIsModalOpen(false);

  const openHorariosModal = (professora, horarios) => {
    setProfessoraSelecionada(professora);
    setHorariosSelecionados(horarios);
    setIsHorariosModalOpen(true);
  };

  const closeHorariosModal = () => {
    setIsHorariosModalOpen(false);
    setProfessoraSelecionada('');
    setHorariosSelecionados({});
  };

  return (
    <VideoBackgroundLoadedContext.Provider value={videoLoaded}>
      <div className="min-h-screen bg-[#121212]">
        <Header />
        <main className="pt-32">
          {/* Home Section - Hero Banner */}
          <section 
            id="home" 
            className="min-h-screen relative flex items-center justify-center text-center text-white overflow-hidden -mt-32"
          >
            {/* Video Background */}
            <div className="absolute inset-0 w-full h-full">
              {!videoLoaded && (
                <div className="flex items-center justify-center w-full h-full bg-black bg-opacity-60 z-20">
                  <span className="text-white text-xl animate-pulse">Carregando vídeo...</span>
                </div>
              )}
              <video
                autoPlay
                loop
                muted
                playsInline
                preload="auto"
                onCanPlayThrough={() => setVideoLoaded(true)}
                className="absolute inset-0 w-full h-full object-cover"
                style={{ opacity: videoLoaded ? 1 : 0, transition: 'opacity 0.5s' }}
              >
                <source src={getAssetPath('/assets/background.mp4')} type="video/mp4" />
              </video>
            </div>
            
            {/* Overlay for better text readability */}
            <div className="absolute inset-0 bg-black opacity-70"></div>
            
            {/* Content */}
            <div className="relative z-10 flex flex-col items-center justify-center min-h-screen mt-4">
              {/* Animated Logo */}
              <img 
                src={getAssetPath('/assets/rosa.svg')} 
                alt="MOOV Logo" 
                className="w-72 h-72 mb-8 animate-spin-slow"
              />
              
              <img 
                src={getAssetPath('/assets/moovText.svg')} 
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
          <div className="animate-fadeIn delay-200"><Professoras openHorariosModal={openHorariosModal} /></div>
          <div className="animate-fadeIn delay-250"><Espaco /></div>
          <div className="animate-fadeIn delay-275"><Empresas /></div>
          <div className="animate-fadeIn delay-300"><Aulas openModal={openModal} /></div>
          <div className="animate-fadeIn delay-325"><GradeHorarios /></div>
          <div className="animate-fadeIn delay-350"><Valores /></div>
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

        {/* Modal de horários das professoras */}
        {isHorariosModalOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-[9999] p-4">
            <div className="relative bg-[#1E1E1E] rounded-lg shadow-2xl max-w-2xl w-full max-h-screen overflow-y-auto border border-[#E4670D]">
              <button
                onClick={closeHorariosModal}
                className="absolute top-2 right-2 text-[#E4670D] hover:text-white text-2xl font-bold focus:outline-none transition-colors duration-300"
                aria-label="Fechar"
              >
                ×
              </button>
              
              <div className="p-6">
                <h2 className="text-3xl font-bold mb-6 text-[#E4670D] text-center">
                  Horários - {professoraSelecionada}
                </h2>
                
                <div className="space-y-4">
                  {['segunda', 'terca', 'quarta', 'quinta', 'sexta', 'sabado'].map((dia) => {
                    const aulasDoDia = horariosSelecionados[dia];
                    if (!aulasDoDia || aulasDoDia.length === 0) return null;
                    
                    const nomesDias = {
                      segunda: 'Segunda',
                      terca: 'Terça',
                      quarta: 'Quarta',
                      quinta: 'Quinta',
                      sexta: 'Sexta',
                      sabado: 'Sábado'
                    };
                    
                    return (
                      <div key={dia} className="bg-[#2A2A2A] rounded-lg p-4">
                        <h3 className="text-xl font-bold text-[#E4670D] mb-3">
                          {nomesDias[dia]}
                        </h3>
                        <div className="space-y-2">
                          {aulasDoDia.map((aula, index) => (
                            <div key={index} className="flex justify-between items-center bg-[#1E1E1E] rounded-lg p-3">
                              <span className="text-[#E4670D] font-semibold">
                                {aula.horario}
                              </span>
                              <span className="text-gray-300 font-bold">
                                {aula.nome}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    );
                  })}
                </div>
                
                <div className="mt-6 text-center">
                  <p className="text-gray-400 text-sm mb-4">
                    Para agendar uma aula específica ou verificar a disponibilidade de vagas, entre em contato conosco.
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
            </div>
          </div>
        )}
      </div>
    </VideoBackgroundLoadedContext.Provider>
  );
}

export default App;
