import React from 'react';

function Footer() {
  return (
    <footer className="bg-[#260C1A] text-white py-8">
      <div className="container mx-auto px-4 text-center">
        <p className="mb-2 font-semibold">Av. São Paulo 864 (Sobreloja), Santa Bárbara d'Oeste, SP, 13454-060</p>
        <p className="mb-4">© 2024 Estúdio MOOV - Circo e Dança. Todos os direitos reservados.</p>
        <div className="flex justify-center space-x-4">
          <a href="https://www.instagram.com/estudio_moov/" target="_blank" rel="noopener noreferrer" className="hover:text-[#E4670D] transition-colors duration-300 flex items-center gap-1">
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5"><path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5A4.25 4.25 0 0 0 20.5 16.25v-8.5A4.25 4.25 0 0 0 16.25 3.5zm4.25 2.25a6.25 6.25 0 1 1-6.25 6.25 6.25 6.25 0 0 1 6.25-6.25zm0 1.5a4.75 4.75 0 1 0 4.75 4.75A4.75 4.75 0 0 0 12 5.25zm6.5 1.25a1.25 1.25 0 1 1-1.25 1.25A1.25 1.25 0 0 1 18.5 6.5z"/></svg>
            Instagram
          </a>
          <a href="https://www.facebook.com/facemoov/" target="_blank" rel="noopener noreferrer" className="hover:text-[#E4670D] transition-colors duration-300 flex items-center gap-1">
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5"><path d="M22.675 0h-21.35C.595 0 0 .592 0 1.326v21.348C0 23.408.595 24 1.325 24h11.495v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.797.143v3.24l-1.918.001c-1.504 0-1.797.715-1.797 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116C23.406 24 24 23.408 24 22.674V1.326C24 .592 23.406 0 22.675 0"/></svg>
            Facebook
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
