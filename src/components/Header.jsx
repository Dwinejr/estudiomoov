import React, { useState } from 'react';

function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="bg-[#E4670D] bg-opacity-95 text-white p-4 fixed w-full top-0 z-50 flex justify-between items-center border-b border-white">
      {/* Logo */}
      <div className="flex items-center">
        <img src="/assets/logoBranco.svg" alt="Estúdio Moov Logo" className="h-12 mr-2" />
      </div>
      
      {/* Desktop Navigation */}
      <nav className="hidden md:flex space-x-6">
        <a href="#home" className="hover:text-[#2A2A2A] uppercase font-semibold transition-colors duration-300">Home</a>
        <a href="#sobre" className="hover:text-[#2A2A2A] uppercase font-semibold transition-colors duration-300">Sobre</a>
        <a href="#professoras" className="hover:text-[#2A2A2A] uppercase font-semibold transition-colors duration-300">Professoras</a>
        <a href="#espaco" className="hover:text-[#2A2A2A] uppercase font-semibold transition-colors duration-300">O Espaço</a>
        <a href="#empresas" className="hover:text-[#2A2A2A] uppercase font-semibold transition-colors duration-300">Empresas</a>
        <a href="#aulas" className="hover:text-[#2A2A2A] uppercase font-semibold transition-colors duration-300">Aulas</a>
        <a href="#valores" className="hover:text-[#2A2A2A] uppercase font-semibold transition-colors duration-300">Valores</a>
        <a href="#galeria" className="hover:text-[#2A2A2A] uppercase font-semibold transition-colors duration-300">Galeria</a>
        <a href="#contato" className="hover:text-[#2A2A2A] uppercase font-semibold transition-colors duration-300">Contato</a>
      </nav>

      {/* Mobile Menu Button */}
      <div className="md:hidden">
        <button onClick={toggleMobileMenu} className="text-white hover:text-[#2A2A2A] focus:outline-none transition-colors duration-300" aria-label="Toggle menu">
          {/* Hamburger Icon */}
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}></path>
          </svg>
        </button>
      </div>

      {/* Mobile Menu (Dropdown) */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-[#E4670D] bg-opacity-95 p-4 border-b border-white">
          <nav className="flex flex-col space-y-4">
            <a href="#home" onClick={toggleMobileMenu} className="hover:text-[#2A2A2A] uppercase font-semibold text-center transition-colors duration-300">Home</a>
            <a href="#sobre" onClick={toggleMobileMenu} className="hover:text-[#2A2A2A] uppercase font-semibold text-center transition-colors duration-300">Sobre</a>
            <a href="#professoras" onClick={toggleMobileMenu} className="hover:text-[#2A2A2A] uppercase font-semibold text-center transition-colors duration-300">Professoras</a>
            <a href="#espaco" onClick={toggleMobileMenu} className="hover:text-[#2A2A2A] uppercase font-semibold text-center transition-colors duration-300">O Espaço</a>
            <a href="#empresas" onClick={toggleMobileMenu} className="hover:text-[#2A2A2A] uppercase font-semibold text-center transition-colors duration-300">Empresas</a>
            <a href="#aulas" onClick={toggleMobileMenu} className="hover:text-[#2A2A2A] uppercase font-semibold text-center transition-colors duration-300">Aulas</a>
            <a href="#valores" onClick={toggleMobileMenu} className="hover:text-[#2A2A2A] uppercase font-semibold text-center transition-colors duration-300">Valores</a>
            <a href="#galeria" onClick={toggleMobileMenu} className="hover:text-[#2A2A2A] uppercase font-semibold text-center transition-colors duration-300">Galeria</a>
            <a href="#contato" onClick={toggleMobileMenu} className="hover:text-[#2A2A2A] uppercase font-semibold text-center transition-colors duration-300">Contato</a>
          </nav>
        </div>
      )}
    </header>
  );
}

export default Header;
