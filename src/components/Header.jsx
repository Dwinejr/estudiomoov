import React, { useState } from 'react';
import { getAssetPath } from '../lib/utils';

function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="bg-[#E4670D] bg-opacity-95 text-white p-4 fixed w-full top-0 z-50 flex justify-between items-center border-b border-white">
      {/* Logo */}
      <div className="flex items-center">
        <a href="#home" className="hover:opacity-80 transition-opacity duration-300">
          <img src={getAssetPath('/assets/logoBranco.svg')} alt="Estúdio Moov Logo" className="h-12 mr-2" />
        </a>
      </div>
      
      {/* Desktop Navigation */}
      <nav className="hidden md:flex space-x-6">
        <a href="#sobre" className="hover:text-[#2A2A2A] uppercase font-semibold transition-colors duration-300">Sobre</a>
        <a href="#professoras" className="hover:text-[#2A2A2A] uppercase font-semibold transition-colors duration-300">Professoras</a>
        <a href="#espaco" className="hover:text-[#2A2A2A] uppercase font-semibold transition-colors duration-300">O Espaço</a>
        <a href="#empresas" className="hover:text-[#2A2A2A] uppercase font-semibold transition-colors duration-300">Empresas</a>
        <a href="#aulas" className="hover:text-[#2A2A2A] uppercase font-semibold transition-colors duration-300">Aulas</a>
        <a href="#grade-horarios" className="hover:text-[#2A2A2A] uppercase font-semibold transition-colors duration-300">Horários</a>
        <a href="#valores" className="hover:text-[#2A2A2A] uppercase font-semibold transition-colors duration-300">Valores</a>
        <a href="#contato" className="hover:text-[#2A2A2A] uppercase font-semibold transition-colors duration-300">Contato</a>
        <a
          href="https://www.instagram.com/estudio_moov/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-[#E4670D] transition-colors duration-300"
          aria-label="Instagram"
        >
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
          </svg>
        </a>
        <a
          href="https://www.facebook.com/facemoov"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-[#E4670D] transition-colors duration-300"
          aria-label="Facebook"
        >
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
          </svg>
        </a>
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
            <a href="#sobre" onClick={toggleMobileMenu} className="hover:text-[#2A2A2A] uppercase font-semibold text-center transition-colors duration-300">Sobre</a>
            <a href="#professoras" onClick={toggleMobileMenu} className="hover:text-[#2A2A2A] uppercase font-semibold text-center transition-colors duration-300">Professoras</a>
            <a href="#espaco" onClick={toggleMobileMenu} className="hover:text-[#2A2A2A] uppercase font-semibold text-center transition-colors duration-300">O Espaço</a>
            <a href="#empresas" onClick={toggleMobileMenu} className="hover:text-[#2A2A2A] uppercase font-semibold text-center transition-colors duration-300">Empresas</a>
            <a href="#aulas" onClick={toggleMobileMenu} className="hover:text-[#2A2A2A] uppercase font-semibold text-center transition-colors duration-300">Aulas</a>
            <a href="#grade-horarios" onClick={toggleMobileMenu} className="hover:text-[#2A2A2A] uppercase font-semibold text-center transition-colors duration-300">Horários</a>
            <a href="#valores" onClick={toggleMobileMenu} className="hover:text-[#2A2A2A] uppercase font-semibold text-center transition-colors duration-300">Valores</a>
            <a href="#contato" onClick={toggleMobileMenu} className="hover:text-[#2A2A2A] uppercase font-semibold text-center transition-colors duration-300">Contato</a>
            
            {/* Social Media Icons */}
            <div className="flex justify-center space-x-4 pt-4">
              <a
                href="https://www.instagram.com/estudio_moov/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-[#E4670D] transition-colors duration-300"
                aria-label="Instagram"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a
                href="https://www.facebook.com/facemoov"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-[#E4670D] transition-colors duration-300"
                aria-label="Facebook"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}

export default Header;
