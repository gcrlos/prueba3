
import React from 'react';
import { BENEFITS } from '../constants';

const BenefitsSection: React.FC = () => {
  return (
    <section id="beneficios" className="py-24 bg-black text-white relative overflow-hidden">
      {/* Background graphic elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-red-600/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-yellow-500/10 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between mb-16 gap-8">
          <div className="lg:w-1/2">
            <h2 className="text-4xl md:text-5xl font-black uppercase leading-tight mb-4">
              ¿Por qué elegir <span className="text-yellow-500">Ferretería QyR</span>?
            </h2>
            <p className="text-gray-400 text-lg">
              Nos esforzamos por ser tu socio estratégico en cada proyecto, brindando ventajas competitivas en cada compra.
            </p>
          </div>
          <div className="lg:w-auto">
            <div className="flex items-center space-x-4 bg-white/5 p-4 rounded-lg border border-white/10">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map(i => (
                  <img key={i} className="w-12 h-12 rounded-full border-4 border-black" src={`https://picsum.photos/seed/${i}/100/100`} alt="Testimonial user" />
                ))}
              </div>
              <div className="text-sm font-bold uppercase tracking-widest text-yellow-500">
                +500 Clientes Felices en Mazuko
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {BENEFITS.map((benefit) => (
            <div key={benefit.id} className="p-8 bg-white/5 rounded-2xl border border-white/10 hover:border-yellow-500/50 transition-colors">
              <div className="mb-6">{benefit.icon}</div>
              <h3 className="text-xl font-bold uppercase italic mb-4 text-white">{benefit.title}</h3>
              <p className="text-gray-400">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
