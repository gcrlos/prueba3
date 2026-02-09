
import React from 'react';
import { Phone, MessageCircle } from 'lucide-react';
import { BUSINESS_INFO } from '../constants';
import Button from './Button';

const Hero: React.FC = () => {
  return (
    <section id="inicio" className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden bg-black">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://picsum.photos/id/1070/1920/1080?grayscale" 
          alt="Hardware shop background" 
          className="w-full h-full object-cover opacity-50"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent"></div>
      </div>

      <div className="container mx-auto px-4 z-10 relative">
        <div className="max-w-3xl">
          <div className="inline-block bg-yellow-500 text-black font-bold px-3 py-1 mb-6 rounded uppercase text-xs tracking-widest transform -skew-x-12">
            La ferretería #1 de Mazuko
          </div>
          <h1 className="text-5xl md:text-7xl font-black text-white leading-tight uppercase mb-4 drop-shadow-lg">
            CONSTRUYE TUS SUEÑOS CON <span className="text-yellow-500 italic">CALIDAD Y CONFIANZA</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-xl font-medium leading-relaxed">
            Todo para tu construcción, hogar y bricolaje en un solo lugar. Stock inmediato en Mazuko y atención personalizada que soluciona tus problemas rápido.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Button href={BUSINESS_INFO.callUrl} variant="secondary" className="group">
              <Phone className="w-5 h-5 mr-2 group-hover:animate-bounce" />
              Llámanos Ahora
            </Button>
            <Button href={BUSINESS_INFO.whatsappUrl} variant="whatsapp" className="group">
              <MessageCircle className="w-5 h-5 mr-2" />
              Escríbenos por WhatsApp
            </Button>
          </div>

          <div className="mt-12 flex flex-wrap gap-8 items-center border-t border-white/10 pt-8">
            <div className="flex flex-col">
              <span className="text-yellow-500 font-bold text-2xl">Yape / Plin</span>
              <span className="text-gray-400 text-xs uppercase tracking-widest">Pagos Digitales</span>
            </div>
            <div className="flex flex-col">
              <span className="text-white font-bold text-2xl">+1000</span>
              <span className="text-gray-400 text-xs uppercase tracking-widest">Productos</span>
            </div>
            <div className="flex flex-col">
              <span className="text-white font-bold text-2xl">Mazuko</span>
              <span className="text-gray-400 text-xs uppercase tracking-widest">Atención Local</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
