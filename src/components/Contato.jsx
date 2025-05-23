import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

function Contato() {
  const form = useRef();
  const [modal, setModal] = useState({ open: false, success: false, message: '' });
  // Substitua pelos seus dados do EmailJS:
  const SERVICE_ID = 'service_l6bfpvh';
  const TEMPLATE_ID = 'template_mag38x5';
  const PUBLIC_KEY = 'H6rZYJmbLRjQYoXTr';

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY)
      .then(() => {
        setModal({ open: true, success: true, message: 'Mensagem enviada com sucesso! Em breve entraremos em contato.' });
        form.current.reset();
      }, (error) => {
        setModal({ open: true, success: false, message: 'Ocorreu um erro ao enviar. Tente novamente mais tarde.' });
      });
  };

  return (
    <section id="contato" className="py-16 px-4 md:px-8 bg-[#FCECC9]">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl font-bold mb-12 text-center text-[#E4670D]">Entre em Contato</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          {/* Contact Info & Map */}
          <div className="space-y-6 text-[#260C1A]">
            <div>
              <h3 className="text-2xl font-semibold mb-3 text-[#445E93]">MOOV CIRCO E DANÇA</h3>
              <p>Telefone: (19) 3645-0210</p>
              <p>Email: atendimento@estudiomoov.com.br</p>
            </div>
            {/* Google Maps embed */}
            <div className="h-64 bg-white rounded-lg overflow-hidden border-2 border-[#E4670D] shadow">
              <iframe
                title="Mapa Estúdio Moov"
                src="https://www.google.com/maps?q=Av.+S%C3%A3o+Paulo+864,+Santa+B%C3%A1rbara+d%27Oeste,+SP,+13454-060&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>

          {/* Contact Form */}
          <form ref={form} onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="from_name" className="block text-sm font-medium text-[#260C1A] mb-1">Nome *</label>
              <input type="text" id="from_name" name="from_name" required className="w-full p-3 bg-white border-2 border-[#E4670D] rounded-md focus:ring-[#E4670D] focus:border-[#E4670D]" />
            </div>
            <div>
              <label htmlFor="from_email" className="block text-sm font-medium text-[#260C1A] mb-1">Email *</label>
              <input type="email" id="from_email" name="from_email" required className="w-full p-3 bg-white border-2 border-[#E4670D] rounded-md focus:ring-[#E4670D] focus:border-[#E4670D]" />
            </div>
            <div>
              <label htmlFor="from_phone" className="block text-sm font-medium text-[#260C1A] mb-1">Telefone</label>
              <input type="tel" id="from_phone" name="from_phone" className="w-full p-3 bg-white border-2 border-[#E4670D] rounded-md focus:ring-[#E4670D] focus:border-[#E4670D]" />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-[#260C1A] mb-1">Mensagem</label>
              <textarea id="message" name="message" rows="4" className="w-full p-3 bg-white border-2 border-[#E4670D] rounded-md focus:ring-[#E4670D] focus:border-[#E4670D]"></textarea>
            </div>
            <div>
              <button type="submit" className="w-full bg-[#E4670D] hover:bg-[#445E93] text-white font-bold py-3 px-6 rounded-md transition duration-300">
                Enviar Mensagem
              </button>
            </div>
          </form>
        </div>
      </div>
      {/* Modal de feedback (global) */}
      {modal.open && (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-[9999] p-4">
          <div className="bg-white rounded-lg shadow-2xl max-w-md w-full p-8 text-center relative">
            <button
              onClick={() => setModal({ ...modal, open: false })}
              className="absolute top-2 right-2 text-[#E4670D] hover:text-[#445E93] text-2xl font-bold focus:outline-none"
              aria-label="Fechar"
            >
              ×
            </button>
            <h4 className={`text-2xl font-bold mb-4 ${modal.success ? 'text-[#E4670D]' : 'text-red-600'}`}>{modal.success ? 'Sucesso!' : 'Erro'}</h4>
            <p className="text-[#260C1A] text-lg">{modal.message}</p>
          </div>
        </div>
      )}
    </section>
  );
}

export default Contato;
