import { useParams, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { services } from '../data/services';
import { ArrowLeft, ArrowRight } from 'lucide-react';

export default function ServiceDetail() {
  const { id } = useParams<{ id: string }>();
  const service = services.find(s => s.id === id);

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#f4f1ec]">
        <div className="text-center">
          <h1 className="font-display text-5xl font-bold text-[#1a1a1a] uppercase mb-4">Service Not Found</h1>
          <Link to="/services" className="text-[#e08b2d] font-bold uppercase tracking-wider hover:underline">
            Return to Services
          </Link>
        </div>
      </div>
    );
  }

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="w-full bg-[#f4f1ec] min-h-screen"
    >
      {/* Header */}
      <section className="bg-[#1a1a1a] text-white py-24 relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-10">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/services" className="inline-flex items-center text-gray-400 font-bold uppercase text-sm tracking-wider hover:text-[#e08b2d] transition-colors mb-8">
            <ArrowLeft size={16} className="mr-2" /> All Services
          </Link>
          <div className="flex items-start gap-6">
            <div className="font-display text-6xl md:text-8xl font-bold text-[#e08b2d] opacity-50 leading-none mt-2 hidden md:block">
              {service.number}
            </div>
            <div>
              <motion.h1 
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                className="font-display text-5xl md:text-7xl font-bold uppercase tracking-tight mb-6 leading-tight"
              >
                {service.title}
              </motion.h1>
              <motion.p 
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.1 }}
                className="text-xl text-gray-300 max-w-3xl leading-relaxed"
              >
                {service.description}
              </motion.p>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          <div className="lg:col-span-2">
            <h2 className="font-display text-4xl font-bold text-[#1a1a1a] uppercase tracking-tight mb-8">Service Overview</h2>
            
            <div className="prose prose-lg max-w-none text-[#6b6560]">
              <p className="mb-6">
                At Glades Construction Ltd., our approach to <strong>{service.title.toLowerCase()}</strong> is rooted in decades of engineering expertise. We don't just execute plans; we engineer solutions that ensure structural integrity, longevity, and exceptional quality.
              </p>
              <p className="mb-6">
                Every project begins with a rigorous assessment of requirements, followed by meticulous planning and execution. Our team of chartered engineers and construction professionals work seamlessly to deliver results that stand the test of time.
              </p>
              
              <h3 className="font-display text-2xl font-bold text-[#1a1a1a] uppercase tracking-wider mt-12 mb-6">The Glades Standard</h3>
              <ul className="space-y-4 list-none pl-0">
                <li className="flex items-start">
                  <span className="text-[#e08b2d] mr-3 font-bold mt-1">///</span>
                  <span><strong>Engineered Precision:</strong> Every detail is calculated and verified before construction begins.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#e08b2d] mr-3 font-bold mt-1">///</span>
                  <span><strong>Full Accountability:</strong> We manage the entire process, providing a single point of contact.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#e08b2d] mr-3 font-bold mt-1">///</span>
                  <span><strong>Lasting Quality:</strong> We use premium materials and proven techniques to ensure durability.</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="lg:col-span-1">
            <div className="bg-[#2e3440] p-8 rounded-lg shadow-lg text-white sticky top-24">
              <h3 className="font-display text-2xl font-bold uppercase tracking-wider mb-6 text-[#e08b2d]">Discuss Your Project</h3>
              <p className="text-gray-300 mb-8">
                Ready to leverage our 70+ years of combined engineering experience for your next project?
              </p>
              <Link to="/contact-us" className="block w-full text-center bg-[#e08b2d] text-[#1a1a1a] px-6 py-4 rounded-full font-bold uppercase tracking-wider hover:bg-white transition-colors">
                Get a Quote
              </Link>
              
              <div className="mt-8 pt-8 border-t border-white/10">
                <h4 className="text-sm font-bold uppercase tracking-widest text-gray-500 mb-4">Other Services</h4>
                <ul className="space-y-3">
                  {services.filter(s => s.id !== service.id).slice(0, 4).map(s => (
                    <li key={s.id}>
                      <Link to={`/services/${s.id}`} className="text-gray-300 hover:text-white transition-colors flex items-center justify-between group">
                        <span className="truncate pr-4">{s.title}</span>
                        <ArrowRight size={14} className="text-[#e08b2d] opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
}
