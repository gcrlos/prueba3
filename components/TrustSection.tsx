
import React from 'react';
import { ShieldCheck, Clock, MapPin } from 'lucide-react';

const TrustSection: React.FC = () => {
  return (
    <section className="py-20 bg-gray-100 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2 relative">
            <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl relative z-10 border-8 border-white">
              <img 
                src="https://picsum.photos/id/119/800/800" 
                alt="Ferretería local" 
                className="w-full h-full object-cover"
              />
            </div>
            {/* Decoration */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-yellow-500 rounded-lg -z-0 transform rotate-12"></div>
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-red-600 rounded-lg -z-0 transform -rotate-12"></div>
          </div>
          
          <div className="md:w-1/2">
            <h2 className="text-4xl md:text-5xl font-black uppercase mb-6 leading-tight">
              Tus vecinos de <span className="text-red-600">Mazuko</span> al servicio de tu obra
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              En **Ferretería QyR**, entendemos que en la construcción cada minuto cuenta. Por eso, nos comprometemos a brindarte soluciones rápidas, herramientas de primera y un trato cercano que solo una ferretería local puede ofrecer.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-white p-3 rounded-lg shadow-md text-red-600">
                  <ShieldCheck size={28} />
                </div>
                <div>
                  <h3 className="font-bold text-xl uppercase italic">Garantía de Calidad</h3>
                  <p className="text-gray-500">Solo trabajamos con marcas líderes que aseguran resultados duraderos.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-white p-3 rounded-lg shadow-md text-red-600">
                  <Clock size={28} />
                </div>
                <div>
                  <h3 className="font-bold text-xl uppercase italic">Atención al Instante</h3>
                  <p className="text-gray-500">Sin demoras innecesarias. Stock listo para ser retirado hoy mismo.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-white p-3 rounded-lg shadow-md text-red-600">
                  <MapPin size={28} />
                </div>
                <div>
                  <h3 className="font-bold text-xl uppercase italic">Fácil de Llegar</h3>
                  <p className="text-gray-500">Estamos en el corazón de Mazuko para que no pierdas tiempo en traslados.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustSection;
