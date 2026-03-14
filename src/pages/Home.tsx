import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { projects } from '../data/projects';
import { services } from '../data/services';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

export default function Home() {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="w-full"
    >
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center justify-center bg-[#1a1a1a] overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/images/home/hero-bg.png"
            alt="Construction Site"
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a] via-transparent to-transparent"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mt-20">
          <motion.h1 
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="font-display text-6xl md:text-8xl lg:text-9xl font-bold text-white uppercase tracking-tight leading-none mb-6"
          >
            We Build Structures<br />That Last Generations.
          </motion.h1>
          
          <motion.p 
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-10 font-medium"
          >
            Full-service construction and civil engineering across the UK. Design. Build. Deliver.
          </motion.p>
          
          <motion.div 
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link to="/project-collection" className="w-full sm:w-auto bg-[#e08b2d] hover:bg-white text-[#1a1a1a] px-8 py-4 rounded-full font-bold uppercase tracking-wider transition-colors text-center">
              View Our Projects
            </Link>
            <Link to="/services" className="w-full sm:w-auto bg-transparent border-2 border-white text-white hover:bg-white hover:text-[#1a1a1a] px-8 py-4 rounded-full font-bold uppercase tracking-wider transition-colors text-center">
              Our Services
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Stats Strip */}
      <section className="bg-[#1a1a1a] border-t border-white/10 py-16 relative z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-white/10">
            <div className="px-4">
              <div className="font-display text-5xl md:text-7xl font-bold text-[#e08b2d] mb-2">70+</div>
              <div className="text-sm uppercase tracking-widest text-white font-bold">Years Experience</div>
            </div>
            <div className="px-4">
              <div className="font-display text-5xl md:text-7xl font-bold text-[#e08b2d] mb-2">9</div>
              <div className="text-sm uppercase tracking-widest text-white font-bold">Projects Delivered</div>
            </div>
            <div className="px-4">
              <div className="font-display text-5xl md:text-7xl font-bold text-[#e08b2d] mb-2">7</div>
              <div className="text-sm uppercase tracking-widest text-white font-bold">Services Offered</div>
            </div>
            <div className="px-4">
              <div className="font-display text-5xl md:text-7xl font-bold text-[#e08b2d] mb-2">40+</div>
              <div className="text-sm uppercase tracking-widest text-white font-bold">Yrs Founder Track Record</div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Categories */}
      <section className="py-24 bg-[#f4f1ec]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-display text-5xl md:text-6xl font-bold text-[#1a1a1a] uppercase tracking-tight mb-4">Built Right. Every Time.</h2>
            <p className="text-lg text-[#6b6560] max-w-2xl mx-auto">Precision Construction for Homeowners / Developers / Businesses / Communities</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: 'Residential Housing', img: '/images/home/service-card-residential.jpg' },
              { title: 'Landscaping', img: '/images/home/service-card-landscaping.jpg' },
              { title: 'Commercial Civil Engineering', img: '/images/home/service-card-commercial.jpg' }
            ].map((cat, i) => (
              <Link to="/services" key={i} className="group block relative overflow-hidden bg-[#2e3440] rounded-lg shadow-lg border-t-4 border-transparent hover:border-[#e08b2d] transition-all duration-300">
                <div className="h-64 overflow-hidden">
                  <img src={cat.img} alt={cat.title} className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-6 bg-[#2e3440]">
                  <h3 className="font-display text-2xl font-bold text-white uppercase tracking-wider mb-2">{cat.title}</h3>
                  <div className="flex items-center text-[#e08b2d] font-bold uppercase text-sm tracking-wider">
                    Explore More <ArrowRight size={16} className="ml-2" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* How We Work Process Strip */}
      <section className="py-24 bg-[#1a1a1a] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <h2 className="font-display text-5xl font-bold uppercase tracking-tight">How We Work</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
            <div className="hidden md:block absolute top-8 left-0 w-full h-px bg-white/20 z-0"></div>
            
            {[
              { num: '01', title: 'BRIEF', desc: 'We listen to your project requirements and establish clear objectives.' },
              { num: '02', title: 'DESIGN', desc: 'Structural drawings, 3D imaging, and full planning permissions management.' },
              { num: '03', title: 'BUILD', desc: 'Full-site construction management with rigorous quality control.' },
              { num: '04', title: 'DELIVER', desc: 'On time, on budget, and snagging-free handover of your completed project.' }
            ].map((step, i) => (
              <div key={i} className="relative z-10 bg-[#1a1a1a] md:pr-8">
                <div className="font-display text-6xl font-bold text-[#e08b2d] mb-4">{step.num}</div>
                <h3 className="font-display text-2xl font-bold uppercase tracking-wider mb-3">{step.title}</h3>
                <p className="text-gray-400 leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Gallery Strip */}
      <section className="py-24 bg-[#f4f1ec] overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 flex justify-between items-end">
          <div>
            <h2 className="font-display text-5xl font-bold text-[#1a1a1a] uppercase tracking-tight mb-2">Recent Projects</h2>
            <p className="text-[#6b6560]">Delivering construction that performs.</p>
          </div>
          <Link to="/project-collection" className="hidden md:flex items-center text-[#1a1a1a] font-bold uppercase tracking-wider hover:text-[#e08b2d] transition-colors">
            View All <ArrowRight size={20} className="ml-2" />
          </Link>
        </div>
        
        <div className="flex overflow-x-auto pb-8 snap-x snap-mandatory hide-scrollbar px-4 sm:px-6 lg:px-8 gap-6">
          {projects.slice(0, 5).map((project) => (
            <Link to={`/project-collection`} key={project.id} className="group relative flex-none w-80 md:w-96 snap-start">
              <div className="relative h-[400px] overflow-hidden rounded-lg">
                <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a] via-[#1a1a1a]/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>
                
                <div className="absolute top-4 left-4">
                  <span className="bg-[#e08b2d] text-[#1a1a1a] text-xs font-bold px-3 py-1 uppercase tracking-widest rounded-sm">
                    {project.type}
                  </span>
                </div>
                
                <div className="absolute bottom-0 left-0 w-full p-6 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="font-display text-2xl font-bold text-white uppercase tracking-wider mb-1">{project.title.split('—')[0].trim()}</h3>
                  <p className="text-gray-300 text-sm">{project.location}</p>
                  <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center text-[#e08b2d] font-bold uppercase text-sm tracking-wider">
                    View Project <ArrowRight size={16} className="ml-2" />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
        
        <div className="mt-8 text-center md:hidden">
          <Link to="/project-collection" className="inline-flex items-center text-[#1a1a1a] font-bold uppercase tracking-wider hover:text-[#e08b2d] transition-colors">
            View All Projects <ArrowRight size={20} className="ml-2" />
          </Link>
        </div>
      </section>
    </motion.div>
  );
}
