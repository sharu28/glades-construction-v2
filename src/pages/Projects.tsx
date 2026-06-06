import { useState } from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import {
  architectureStructuralDesignProjects,
  commercialCivilEngineeringProjects,
  interiorDesignProjects,
  landscapingProjects,
  newBuildProjects,
  remodelProjects,
} from '../data/projectCategories';

const projectTabs = [
  { label: 'New Build', projects: newBuildProjects },
  { label: 'Remodel', projects: remodelProjects },
  { label: 'Landscaping', projects: landscapingProjects },
  { label: 'Interior Design', projects: interiorDesignProjects },
  { label: 'Architecture & Structural Design', projects: architectureStructuralDesignProjects },
  { label: 'Commercial', projects: commercialCivilEngineeringProjects },
];

export default function Projects() {
  const [activeTab, setActiveTab] = useState(projectTabs[0].label);
  const activeProjects = projectTabs.find((tab) => tab.label === activeTab)?.projects ?? [];

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="w-full bg-[#faf8f4] min-h-screen"
    >
      {/* Header */}
      <section className="bg-[#1a1a1a] text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h1 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="font-display text-6xl md:text-8xl font-bold uppercase tracking-tight mb-6"
          >
            Our Work
          </motion.h1>
          <motion.p 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-gray-400 max-w-2xl"
          >
            150+ completed projects across residential, commercial, and civil engineering.
          </motion.p>
        </div>
      </section>

      {/* Filter Strip */}
      <section className="border-b border-[#6b6560]/20 bg-white sticky top-20 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap md:justify-start overflow-x-auto hide-scrollbar py-4 gap-2">
            {projectTabs.map((tab) => (
              <button
                key={tab.label}
                onClick={() => setActiveTab(tab.label)}
                className={`whitespace-nowrap px-6 py-2 rounded-full text-sm font-bold uppercase tracking-wider transition-colors ${
                  activeTab === tab.label
                    ? 'bg-[#1a1a1a] text-white' 
                    : 'bg-[#faf8f4] text-[#6b6560] hover:bg-[#859664] hover:text-[#1a1a1a]'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Project Grid */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {activeProjects.map((project, i) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="group relative bg-[#2e3440] rounded-lg overflow-hidden shadow-md"
              >
                <div className="h-80 relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-[#1a1a1a]/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-6">
                    <div className="self-start">
                      <span className="bg-[#859664] text-white text-xs font-bold px-3 py-1 uppercase tracking-widest rounded-sm">
                        {project.type}
                      </span>
                    </div>
                    
                    <div>
                      <h3 className="font-display text-3xl font-bold text-white uppercase tracking-wider mb-2">{project.title.split('—')[0].trim()}</h3>
                      <p className="text-[#6b6560] font-medium mb-6">{project.location}</p>
                      
                      <Link to={`/project-collection/${project.id}`} className="inline-flex items-center text-white font-bold uppercase text-sm tracking-wider hover:text-[#b5c38e] transition-colors">
                        View Project <ArrowRight size={16} className="ml-2" />
                      </Link>
                    </div>
                  </div>
                </div>
                
                {/* Visible info when not hovering (mobile friendly) */}
                <div className="p-6 bg-white md:hidden">
                  <div className="mb-3">
                    <span className="text-[#859664] text-xs font-bold uppercase tracking-widest">
                      {project.type}
                    </span>
                  </div>
                  <h3 className="font-display text-2xl font-bold text-[#1a1a1a] uppercase tracking-wider mb-1">{project.title.split('—')[0].trim()}</h3>
                  <p className="text-[#6b6560] text-sm mb-4">{project.location}</p>
                  <Link to={`/project-collection/${project.id}`} className="inline-flex items-center text-[#1a1a1a] font-bold uppercase text-sm tracking-wider">
                    View Project <ArrowRight size={16} className="ml-2" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
          
          {activeProjects.length === 0 && (
            <div className="text-center py-24">
              <p className="text-xl text-[#6b6560]">No projects found for this category.</p>
              <button 
                onClick={() => setActiveTab(projectTabs[0].label)}
                className="mt-6 text-[#859664] font-bold uppercase tracking-wider hover:underline"
              >
                View New Build Projects
              </button>
            </div>
          )}
        </div>
      </section>
    </motion.div>
  );
}
