
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import TrustSection from './components/TrustSection';
import CategoriesSection from './components/CategoriesSection';
import BenefitsSection from './components/BenefitsSection';
import CTAVisit from './components/CTAVisit';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Hero />
        <TrustSection />
        <CategoriesSection />
        <BenefitsSection />
        <CTAVisit />
      </main>
      <Footer />
      
      {/* Floating WhatsApp for Mobile */}
      <a 
        href="https://wa.me/51987654123" 
        className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform sm:hidden"
        target="_blank"
        rel="noopener noreferrer"
      >
        <svg viewBox="0 0 24 24" className="w-8 h-8 fill-current">
          <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.767 5.767 0 1.267.405 2.454 1.119 3.444l-.72 2.632 2.693-.706c.947.621 2.071.997 3.275.997 3.181 0 5.767-2.586 5.767-5.767s-2.586-5.767-5.767-5.767zm3.391 8.232c-.146.415-.845.763-1.166.808-.321.045-.729.076-1.166-.015-.436-.091-1.026-.264-1.764-.585-3.134-1.353-5.115-4.524-5.27-4.735-.155-.21-.861-1.146-.861-2.186 0-1.04.544-1.551.738-1.764.194-.213.424-.266.566-.266.142 0 .285.002.408.008.132.006.311-.048.487.37.181.431.621 1.514.675 1.623.054.109.091.236.018.38-.073.144-.109.235-.218.362-.109.127-.229.284-.327.38-.109.109-.224.227-.097.447.127.221.564.931 1.213 1.51.836.744 1.542.975 1.764 1.085.221.11.351.091.481-.058.13-.15.56-.653.71-.878.15-.224.3-.188.506-.112.206.076 1.309.618 1.533.73.224.112.373.167.428.261.055.094.055.544-.091.959z"/>
        </svg>
      </a>
    </div>
  );
};

export default App;
