import React, { useState } from 'react';

function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="bg-[#260C1A] bg-opacity-90 text-white p-4 fixed w-full top-0 z-50 flex justify-between items-center">
      {/* Logo */}
      <div className="flex items-center">
        <img src="/assets/logo.png" alt="Estúdio Moov Logo" className="h-12 mr-2" />
      </div>
      
      {/* Desktop Navigation */}
      <nav className="hidden md:flex space-x-6">
        <a href="#home" className="hover:text-[#E4670D] uppercase font-semibold transition-colors duration-300">Home</a>
        <a href="#sobre" className="hover:text-[#E4670D] uppercase font-semibold transition-colors duration-300">Sobre</a>
        <a href="#professoras" className="hover:text-[#E4670D] uppercase font-semibold transition-colors duration-300">Professoras</a>
        <a href="#aulas" className="hover:text-[#E4670D] uppercase font-semibold transition-colors duration-300">Aulas</a>
        <a href="#valores" className="hover:text-[#E4670D] uppercase font-semibold transition-colors duration-300">Valores</a>
        <a href="#galeria" className="hover:text-[#E4670D] uppercase font-semibold transition-colors duration-300">Galeria</a>
        <a href="#contato" className="hover:text-[#E4670D] uppercase font-semibold transition-colors duration-300">Contato</a>
      </nav>

      {/* Mobile Menu Button */}
      <div className="md:hidden">
        <button onClick={toggleMobileMenu} className="text-white focus:outline-none" aria-label="Toggle menu">
          {/* Hamburger Icon */}
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}></path>
          </svg>
        </button>
      </div>

      {/* Mobile Menu (Dropdown) */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-[#260C1A] bg-opacity-95 p-4">
          <nav className="flex flex-col space-y-4">
            <a href="#home" onClick={toggleMobileMenu} className="hover:text-[#E4670D] uppercase font-semibold text-center">Home</a>
            <a href="#sobre" onClick={toggleMobileMenu} className="hover:text-[#E4670D] uppercase font-semibold text-center">Sobre</a>
            <a href="#professoras" onClick={toggleMobileMenu} className="hover:text-[#E4670D] uppercase font-semibold text-center">Professoras</a>
            <a href="#aulas" onClick={toggleMobileMenu} className="hover:text-[#E4670D] uppercase font-semibold text-center">Aulas</a>
            <a href="#valores" onClick={toggleMobileMenu} className="hover:text-[#E4670D] uppercase font-semibold text-center">Valores</a>
            <a href="#galeria" onClick={toggleMobileMenu} className="hover:text-[#E4670D] uppercase font-semibold text-center">Galeria</a>
            <a href="#contato" onClick={toggleMobileMenu} className="hover:text-[#E4670D] uppercase font-semibold text-center">Contato</a>
          </nav>
        </div>
      )}
    </header>
  );
}

export default Header;
