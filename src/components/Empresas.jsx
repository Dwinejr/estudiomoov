import React, { useState, useEffect, useContext } from 'react';
import { VideoBackgroundLoadedContext } from '../App';
import { getAssetPath } from '../lib/utils';

function Empresas() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [mediaItems, setMediaItems] = useState([]);
  const [videoLoaded, setVideoLoaded] = useState(true);
  const videoBgLoaded = useContext(VideoBackgroundLoadedContext);
  const [preloadStates, setPreloadStates] = useState(['none', 'none', 'none']);

  useEffect(() => {
    const videos = [
      getAssetPath('/assets/empresas/video1.mp4'),
      getAssetPath('/assets/empresas/video2.mp4'),
      getAssetPath('/assets/empresas/video3.mp4')
    ];
    
    setMediaItems(videos);
  }, []);

  // Controla a ordem de preload
  useEffect(() => {
    if (videoBgLoaded) {
      setPreloadStates(['auto', 'none', 'none']);
    }
  }, [videoBgLoaded]);

  const handleVideoLoaded = (idx) => {
    setVideoLoaded(true);
    setPreloadStates((prev) => {
      const next = [...prev];
      if (idx + 1 < next.length) next[idx + 1] = 'auto';
      return next;
    });
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === mediaItems.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? mediaItems.length - 1 : prevIndex - 1
    );
  };

  const isVideo = (url) => url.endsWith('.mp4');

  return (
    <section id="empresas" className="py-16 px-4 md:px-8 bg-[#121212]">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12 pt-8">
          <h2 className="text-4xl font-bold mb-4 text-[#E4670D]">Empresas e Escolas</h2>
          <p className="text-lg text-gray-300">
            Experiências únicas de circo e dança para sua empresa ou instituição de ensino
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-gray-300">
              O MOOV oferece uma variedade de atividades especiais para empresas e escolas, proporcionando momentos únicos de integração, desenvolvimento pessoal e diversão através das artes circenses e da dança.
            </p>
            
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-[#E4670D]">Para Empresas</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start">
                  <span className="text-[#E4670D] mr-2">•</span>
                  Apresentações artísticas para eventos corporativos
                </li>
                <li className="flex items-start">
                  <span className="text-[#E4670D] mr-2">•</span>
                  Workshops de circo e dança
                </li>
                <li className="flex items-start">
                  <span className="text-[#E4670D] mr-2">•</span>
                  Vivências corporativas com foco em trabalho em equipe
                </li>
                <li className="flex items-start">
                  <span className="text-[#E4670D] mr-2">•</span>
                  Palestras sobre arte, movimento e bem-estar
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-[#E4670D]">Para Escolas</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start">
                  <span className="text-[#E4670D] mr-2">•</span>
                  Apresentações artísticas para eventos escolares
                </li>
                <li className="flex items-start">
                  <span className="text-[#E4670D] mr-2">•</span>
                  Oficinas de circo e dança para alunos
                </li>
                <li className="flex items-start">
                  <span className="text-[#E4670D] mr-2">•</span>
                  Vivências artísticas para desenvolvimento motor e criativo
                </li>
                <li className="flex items-start">
                  <span className="text-[#E4670D] mr-2">•</span>
                  Projetos pedagógicos integrando arte e movimento
                </li>
              </ul>
            </div>

            <div className="flex flex-col md:flex-row gap-4">
              <a
                href="#contato"
                className="bg-[#E4670D] hover:bg-[#2A2A2A] text-white font-bold py-3 px-8 rounded-md transition duration-300 shadow-md text-center border border-[#E4670D]"
              >
                Solicite um Orçamento
              </a>
            </div>
          </div>

          {/* Slideshow */}
          <div className="relative h-[600px] rounded-lg overflow-hidden shadow-xl border border-[#E4670D] border-opacity-30">
            {mediaItems.length > 0 && (
              <>
                {isVideo(mediaItems[currentIndex]) ? (
                  <div className="w-full h-full relative">
                    {!videoLoaded && (
                      <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-60 z-20">
                        <span className="text-white text-xl animate-pulse">Carregando vídeo...</span>
                      </div>
                    )}
                    <video
                      key={mediaItems[currentIndex]}
                      autoPlay
                      loop
                      muted
                      playsInline
                      preload={preloadStates[currentIndex]}
                      onCanPlayThrough={() => handleVideoLoaded(currentIndex)}
                      onLoadStart={() => setVideoLoaded(false)}
                      className="w-full h-full object-cover"
                      style={{ opacity: videoLoaded ? 1 : 0, transition: 'opacity 0.5s' }}
                    >
                      <source src={mediaItems[currentIndex]} type="video/mp4" />
                    </video>
                  </div>
                ) : (
                  <img
                    src={mediaItems[currentIndex]}
                    alt="Atividade MOOV"
                    className="w-full h-full object-cover"
                    onLoad={() => setVideoLoaded(true)}
                  />
                )}
                
                {/* Navigation Buttons */}
                <button
                  onClick={prevSlide}
                  className="absolute left-4 top-1/2 -translate-y-1/2 bg-[#E4670D] bg-opacity-40 text-white p-2 rounded-full hover:bg-opacity-60 transition-all duration-300 backdrop-blur-sm"
                  aria-label="Anterior"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                <button
                  onClick={nextSlide}
                  className="absolute right-4 top-1/2 -translate-y-1/2 bg-[#E4670D] bg-opacity-40 text-white p-2 rounded-full hover:bg-opacity-60 transition-all duration-300 backdrop-blur-sm"
                  aria-label="Próximo"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                  </svg>
                </button>

                {/* Dots Indicator */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
                  {mediaItems.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentIndex(index)}
                      className={`w-2 h-2 rounded-full transition-all duration-300 ${
                        index === currentIndex 
                          ? 'bg-[#E4670D] bg-opacity-80 w-4' 
                          : 'bg-white bg-opacity-30 hover:bg-opacity-50'
                      }`}
                      aria-label={`Ir para slide ${index + 1}`}
                    />
                  ))}
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Empresas; 