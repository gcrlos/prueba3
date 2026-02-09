
import React from 'react';
import { Phone, MessageCircle, MapPin, CreditCard, DollarSign } from 'lucide-react';
import { BUSINESS_INFO } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer id="contacto" className="bg-black text-white py-20 border-t border-white/10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 lg:col-span-1">
            <div className="flex items-center space-x-2 mb-8">
              <div className="bg-yellow-500 text-black p-1.5 rounded font-black text-2xl italic leading-none transform -skew-x-12">
                QyR
              </div>
              <span className="text-white font-bold text-xl tracking-tighter uppercase">Ferretería QyR</span>
            </div>
            <p className="text-gray-400 mb-6 max-w-xs">
              Tu aliado confiable en construcción y herramientas en Mazuko. Calidad, rapidez y atención personalizada.
            </p>
            <div className="flex space-x-4">
               {/* Payment Icons Simulation */}
               <div className="bg-white/10 p-2 rounded flex items-center justify-center grayscale hover:grayscale-0 transition-all cursor-help" title="Yape">
                 <div className="w-8 h-8 bg-purple-600 rounded flex items-center justify-center font-bold text-[10px]">YAPE</div>
               </div>
               <div className="bg-white/10 p-2 rounded flex items-center justify-center grayscale hover:grayscale-0 transition-all cursor-help" title="Plin">
                 <div className="w-8 h-8 bg-cyan-500 rounded flex items-center justify-center font-bold text-[10px]">PLIN</div>
               </div>
               <div className="bg-white/10 p-2 rounded flex items-center justify-center grayscale hover:grayscale-0 transition-all cursor-help" title="Efectivo">
                 <DollarSign className="text-green-500 w-6 h-6" />
               </div>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold uppercase mb-8 border-l-4 border-yellow-500 pl-4 italic">Navegación</h4>
            <ul className="space-y-4 text-gray-400">
              <li><a href="#inicio" className="hover:text-yellow-500 transition-colors">Inicio</a></li>
              <li><a href="#categorias" className="hover:text-yellow-500 transition-colors">Productos</a></li>
              <li><a href="#beneficios" className="hover:text-yellow-500 transition-colors">Nosotros</a></li>
              <li><a href="#contacto" className="hover:text-yellow-500 transition-colors">Contacto</a></li>
            </ul>
          </div>

          <div className="col-span-1 lg:col-span-2">
            <h4 className="text-lg font-bold uppercase mb-8 border-l-4 border-yellow-500 pl-4 italic">Contacto Directo</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div className="space-y-6">
                <a href={BUSINESS_INFO.callUrl} className="flex items-center space-x-4 group">
                  <div className="bg-white/5 p-3 rounded-full group-hover:bg-yellow-500 group-hover:text-black transition-colors">
                    <Phone size={24} />
                  </div>
                  <div>
                    <span className="block text-xs uppercase text-gray-500 font-bold tracking-widest">Llámanos</span>
                    <span className="text-xl font-bold">{BUSINESS_INFO.phone}</span>
                  </div>
                </a>
                
                <a href={BUSINESS_INFO.whatsappUrl} className="flex items-center space-x-4 group">
                  <div className="bg-white/5 p-3 rounded-full group-hover:bg-[#25D366] group-hover:text-white transition-colors">
                    <MessageCircle size={24} />
                  </div>
                  <div>
                    <span className="block text-xs uppercase text-gray-500 font-bold tracking-widest">WhatsApp</span>
                    <span className="text-xl font-bold">Escríbenos Aquí</span>
                  </div>
                </a>
              </div>

              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="bg-white/5 p-3 rounded-full">
                    <MapPin size={24} className="text-red-600" />
                  </div>
                  <div>
                    <span className="block text-xs uppercase text-gray-500 font-bold tracking-widest">Ubicación</span>
                    <span className="text-lg font-bold">Mazuko, Madre de Dios</span>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="bg-white/5 p-3 rounded-full">
                    <CreditCard size={24} className="text-yellow-500" />
                  </div>
                  <div>
                    <span className="block text-xs uppercase text-gray-500 font-bold tracking-widest">Pagos</span>
                    <span className="text-lg font-bold">Yape, Plin y Efectivo</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 text-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} Ferretería QyR - Todos los derechos reservados.</p>
          <p className="mt-2 text-[10px] uppercase tracking-widest opacity-30">Diseño para Conversión Local en Mazuko</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
