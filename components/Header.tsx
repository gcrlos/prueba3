
import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, MessageCircle } from 'lucide-react';
import { BUSINESS_INFO } from '../constants';
import Button from './Button';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-black py-2 shadow-2xl' : 'bg-transparent py-4'}`}>
      <div className="container mx-auto px-4 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="bg-yellow-500 text-black p-1.5 rounded font-black text-xl italic leading-none transform -skew-x-12">
            QyR
          </div>
          <span className="text-white font-bold text-lg tracking-tighter uppercase hidden sm:inline">Ferretería QyR</span>
        </div>

        <nav className="hidden md:flex items-center space-x-8 text-white font-semibold uppercase text-xs tracking-widest">
          <a href="#inicio" className="hover:text-yellow-500 transition-colors">Inicio</a>
          <a href="#categorias" className="hover:text-yellow-500 transition-colors">Productos</a>
          <a href="#beneficios" className="hover:text-yellow-500 transition-colors">Nosotros</a>
          <a href="#contacto" className="hover:text-yellow-500 transition-colors">Contacto</a>
        </nav>

        <div className="flex items-center space-x-2">
          <Button href={BUSINESS_INFO.whatsappUrl} variant="whatsapp" className="px-4 py-2 text-xs md:text-sm hidden sm:flex">
            <MessageCircle className="w-4 h-4 mr-2" />
            WhatsApp
          </Button>
          <button 
            className="md:hidden text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 bg-black z-40 flex flex-col items-center justify-center space-y-8 transition-transform duration-300 md:hidden ${mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <button className="absolute top-6 right-6 text-white" onClick={() => setMobileMenuOpen(false)}>
          <X size={32} />
        </button>
        <a href="#inicio" className="text-white text-2xl font-bold uppercase tracking-widest" onClick={() => setMobileMenuOpen(false)}>Inicio</a>
        <a href="#categorias" className="text-white text-2xl font-bold uppercase tracking-widest" onClick={() => setMobileMenuOpen(false)}>Productos</a>
        <a href="#beneficios" className="text-white text-2xl font-bold uppercase tracking-widest" onClick={() => setMobileMenuOpen(false)}>Nosotros</a>
        <a href="#contacto" className="text-white text-2xl font-bold uppercase tracking-widest" onClick={() => setMobileMenuOpen(false)}>Contacto</a>
        <div className="flex flex-col space-y-4 pt-8 w-full px-12">
          <Button href={BUSINESS_INFO.whatsappUrl} variant="whatsapp" className="w-full">
            <MessageCircle className="mr-2" /> WhatsApp
          </Button>
          <Button href={BUSINESS_INFO.callUrl} variant="secondary" className="w-full">
            <Phone className="mr-2" /> Llamar
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
