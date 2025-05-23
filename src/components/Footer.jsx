import React from 'react';

function Footer() {
  return (
    <footer className="bg-[#1E1E1E] text-gray-300 py-8 border-t border-[#E4670D]">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Contato */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-[#E4670D]">Contato</h3>
            <p className="mb-2">Av. São Paulo, 864 (Sobreloja)</p>
            <p className="mb-2">Santa Bárbara d'Oeste - SP</p>
            <p className="mb-2">(19) 3645-0210</p>
          </div>

          {/* Horário */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-[#E4670D]">Horário de Funcionamento</h3>
            <p className="mb-2">Segunda a Sexta: 9h às 21h</p>
            <p className="mb-2">Sábado: 9h às 17h</p>
            <p>Domingo: Fechado</p>
          </div>

          {/* Redes Sociais */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-[#E4670D]">Redes Sociais</h3>
            <div className="flex space-x-4">
              <a 
                href="https://instagram.com/estudiomoov" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-[#E4670D] hover:text-white transition-colors duration-300"
              >
                Instagram
              </a>
              <a 
                href="https://facebook.com/estudiomoov" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-[#E4670D] hover:text-white transition-colors duration-300"
              >
                Facebook
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-700 text-center">
          <p>&copy; {new Date().getFullYear()} Estúdio Moov. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
