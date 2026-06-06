import { Navigate, Link, useParams } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { projectCategoryPages } from '../data/projectCategories';

export default function ProjectCategory() {
  const { category } = useParams<{ category: string }>();
  const page = category ? projectCategoryPages[category as keyof typeof projectCategoryPages] : null;

  if (!page) {
    return <Navigate to="/project-collection" replace />;
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="w-full bg-[#faf8f4] min-h-screen"
    >
      <section className="bg-[#1a1a1a] text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="font-display text-5xl md:text-8xl font-bold uppercase tracking-tight mb-6"
          >
            {page.title}
          </motion.h1>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-gray-400 max-w-2xl"
          >
            {page.description}
          </motion.p>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {page.projects.map((project, i) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.06 }}
                className="group bg-white rounded-lg overflow-hidden shadow-md border-t-4 border-transparent hover:border-[#859664] transition-colors"
              >
                <div className="h-80 overflow-hidden bg-[#2e3440]">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="p-6">
                  <div className="mb-3">
                    <span className="text-[#859664] text-xs font-bold uppercase tracking-widest">
                      {project.type}
                    </span>
                  </div>
                  <h2 className="font-display text-2xl font-bold text-[#1a1a1a] uppercase tracking-wider mb-2">
                    {project.title}
                  </h2>
                  <p className="text-[#6b6560] text-sm mb-6">{project.location}</p>
                  <Link
                    to={`/project-collection/${project.id}`}
                    className="inline-flex items-center text-[#1a1a1a] font-bold uppercase text-sm tracking-wider hover:text-[#859664] transition-colors"
                  >
                    View Project <ArrowRight size={16} className="ml-2" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </motion.div>
  );
}
