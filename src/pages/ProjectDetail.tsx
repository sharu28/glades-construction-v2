import { useParams, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { projects } from '../data/projects';
import { ArrowLeft } from 'lucide-react';

export default function ProjectDetail() {
  const { id } = useParams<{ id: string }>();
  const project = projects.find(p => p.id === id);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#f4f1ec]">
        <div className="text-center">
          <h1 className="font-display text-5xl font-bold text-[#1a1a1a] uppercase mb-4">Project Not Found</h1>
          <Link to="/project-collection" className="text-[#e08b2d] font-bold uppercase tracking-wider hover:underline">
            Return to Projects
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
      {/* Hero Section */}
      <section className="relative h-[60vh] bg-[#1a1a1a]">
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-full object-cover opacity-60 mix-blend-luminosity"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a] via-[#1a1a1a]/40 to-transparent"></div>
        
        <div className="absolute bottom-0 left-0 w-full p-8 md:p-16 lg:px-24">
          <Link to="/project-collection" className="inline-flex items-center text-white font-bold uppercase text-sm tracking-wider hover:text-[#e08b2d] transition-colors mb-6">
            <ArrowLeft size={16} className="mr-2" /> Back to Projects
          </Link>
          <div className="mb-4">
            <span className="bg-[#e08b2d] text-[#1a1a1a] text-xs font-bold px-3 py-1 uppercase tracking-widest rounded-sm">
              {project.type}
            </span>
          </div>
          <h1 className="font-display text-5xl md:text-7xl font-bold text-white uppercase tracking-tight leading-none">
            {project.title}
          </h1>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          <div className="lg:col-span-2">
            <h2 className="font-display text-4xl font-bold text-[#1a1a1a] uppercase tracking-tight mb-6">Project Overview</h2>
            <p className="text-xl text-[#6b6560] leading-relaxed mb-12">
              {project.description}
            </p>
            
            <div className="bg-[#2e3440] p-8 rounded-lg text-white">
              <h3 className="font-display text-2xl font-bold uppercase tracking-wider mb-6 text-[#e08b2d]">Services Delivered</h3>
              <ul className="space-y-4">
                {project.servicesUsed.map((service, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-[#e08b2d] mr-3 font-bold">///</span>
                    <span className="font-medium">{service}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          <div className="lg:col-span-1">
            <div className="bg-white p-8 rounded-lg shadow-sm border-t-4 border-[#e08b2d] sticky top-24">
              <h3 className="font-display text-2xl font-bold text-[#1a1a1a] uppercase tracking-wider mb-6">Project Details</h3>
              
              <div className="space-y-6">
                <div>
                  <p className="text-sm font-bold text-[#6b6560] uppercase tracking-widest mb-1">Location</p>
                  <p className="text-lg font-medium text-[#1a1a1a]">{project.location}</p>
                </div>
                <div>
                  <p className="text-sm font-bold text-[#6b6560] uppercase tracking-widest mb-1">Client</p>
                  <p className="text-lg font-medium text-[#1a1a1a]">Private</p>
                </div>
                <div>
                  <p className="text-sm font-bold text-[#6b6560] uppercase tracking-widest mb-1">Status</p>
                  <p className="text-lg font-medium text-[#1a1a1a]">Completed</p>
                </div>
              </div>
              
              <div className="mt-10 pt-8 border-t border-[#6b6560]/20">
                <p className="text-sm font-bold text-[#1a1a1a] uppercase tracking-wider mb-4">Ready to start yours?</p>
                <Link to="/contact-us" className="block w-full text-center bg-[#1a1a1a] text-white px-6 py-3 rounded-full font-bold uppercase tracking-wider hover:bg-[#e08b2d] hover:text-[#1a1a1a] transition-colors">
                  Get a Quote
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
}
