import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { services } from '../data/services';
import { ArrowRight } from 'lucide-react';

export default function Services() {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="w-full bg-[#f4f1ec] min-h-screen"
    >
      {/* Header */}
      <section className="bg-[#1a1a1a] text-white py-24 relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h1 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="font-display text-6xl md:text-8xl font-bold uppercase tracking-tight mb-6"
          >
            What We Build
          </motion.h1>
          <motion.p 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-gray-400 max-w-2xl"
          >
            Full-service construction and civil engineering — from first drawing to final handover.
          </motion.p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, i) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="bg-[#2e3440] rounded-lg p-8 shadow-lg border-l-4 border-[#859664] flex flex-col h-full hover:bg-[#1a1a1a] transition-colors duration-300"
              >
                <div className="font-display text-5xl font-bold text-[#b5c38e]/60 mb-6">{service.number}</div>
                <h3 className="font-display text-3xl font-bold text-white uppercase tracking-wider mb-4 leading-tight">{service.title}</h3>
                <p className="text-gray-400 leading-relaxed mb-8 flex-grow">{service.description}</p>
                
                <Link to={`/services/${service.id}`} className="inline-flex items-center text-[#b5c38e] font-bold uppercase text-sm tracking-wider hover:text-white transition-colors mt-auto">
                  Explore Service <ArrowRight size={16} className="ml-2" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[#1a1a1a] py-24 text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-5xl font-bold text-white uppercase tracking-tight mb-6">Ready to start your project?</h2>
          <p className="text-xl text-gray-400 mb-10">70+ years of engineering experience behind every project we quote.</p>
          <Link to="/contact-us" className="inline-block bg-[#859664] text-[#1a1a1a] px-10 py-4 rounded-full font-bold uppercase tracking-wider hover:bg-white transition-colors">
            Get a Quote
          </Link>
        </div>
      </section>
    </motion.div>
  );
}
