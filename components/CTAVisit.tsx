
import React from 'react';
import { MapPin, Navigation } from 'lucide-react';
import { BUSINESS_INFO } from '../constants';
import Button from './Button';

const CTAVisit: React.FC = () => {
  return (
    <section className="py-24 bg-red-600 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="1"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="container mx-auto px-4 relative z-10 text-center">
        <div className="max-w-3xl mx-auto bg-white p-10 md:p-16 rounded-3xl shadow-2xl">
          <MapPin className="w-16 h-16 text-red-600 mx-auto mb-6" />
          <h2 className="text-4xl md:text-5xl font-black text-black uppercase mb-6 leading-tight">
            ¿Listo para empezar tu proyecto?
          </h2>
          <p className="text-xl text-gray-600 mb-10">
            Pasa por nuestro local en **Mazuko** y encuentra todo lo que necesitas con la mejor asesoría técnica de la zona.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button variant="primary" className="py-4 px-10 text-lg">
              <Navigation className="mr-2" />
              📍 Visítanos en Mazuko
            </Button>
            <Button href={BUSINESS_INFO.callUrl} variant="outline" className="py-4 px-10 text-lg !border-black !text-black hover:!bg-black hover:!text-white">
              Consultar Stock
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTAVisit;
