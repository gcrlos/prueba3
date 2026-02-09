
import React from 'react';
import { CATEGORIES } from '../constants';

const CategoriesSection: React.FC = () => {
  return (
    <section id="categorias" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-black uppercase mb-4 inline-block border-b-8 border-yellow-500">
            Nuestros Productos
          </h2>
          <p className="text-xl text-gray-500 max-w-2xl mx-auto mt-6">
            Contamos con un catálogo completo para satisfacer todas tus necesidades de construcción y hogar.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {CATEGORIES.map((cat) => (
            <div key={cat.id} className="group bg-gray-50 p-8 rounded-xl border border-gray-100 hover:bg-black transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
              <div className="text-yellow-500 mb-6 group-hover:text-yellow-400 group-hover:scale-110 transition-transform duration-300">
                {cat.icon}
              </div>
              <h3 className="text-2xl font-black uppercase italic mb-3 text-gray-900 group-hover:text-white transition-colors duration-300">
                {cat.title}
              </h3>
              <p className="text-gray-600 group-hover:text-gray-400 transition-colors duration-300">
                {cat.description}
              </p>
            </div>
          ))}
          
          <div className="flex items-center justify-center p-8 rounded-xl bg-yellow-500/10 border-4 border-dashed border-yellow-500">
            <div className="text-center">
              <span className="block font-black text-xl uppercase text-yellow-600">¿No encuentras lo que buscas?</span>
              <p className="text-yellow-700 text-sm mt-2 font-semibold">¡Lo conseguimos para ti!</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CategoriesSection;
