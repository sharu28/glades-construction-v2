import { motion } from 'motion/react';
import { CheckCircle2 } from 'lucide-react';

export default function About() {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="w-full bg-[#f4f1ec]"
    >
      {/* Hero Section */}
      <section className="relative flex flex-col md:flex-row min-h-[70vh]">
        <div className="w-full md:w-1/2 bg-[#1a1a1a] text-white p-8 md:p-16 lg:p-24 flex flex-col justify-center">
          <motion.h1 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="font-display text-6xl md:text-7xl lg:text-8xl font-bold uppercase tracking-tight leading-none mb-6"
          >
            Engineered By<br />Experience.
          </motion.h1>
          <motion.p 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-xl text-gray-300 max-w-lg"
          >
            Two chartered engineers. 70+ years of combined expertise. One construction firm built on results.
          </motion.p>
        </div>
        <div className="w-full md:w-1/2 h-[50vh] md:h-auto relative">
          <img
            src="/images/project-cards/the-manor-house.jpg"
            alt="Construction Engineering"
            className="absolute inset-0 w-full h-full object-cover opacity-80"
          />
          <div className="absolute inset-0 bg-[#2e3440]/20 mix-blend-multiply"></div>
        </div>
      </section>

      {/* How We Work (Values) */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <h2 className="font-display text-5xl font-bold text-[#1a1a1a] uppercase tracking-tight">How We Work</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {[
            { num: '01', title: 'Built Around You', desc: 'Your brief is our foundation. We engineer solutions around your exact requirements and deliver on them.' },
            { num: '02', title: 'Engineered Expertise', desc: '70+ years of structural and civil engineering knowledge, applied to every project we take on.' },
            { num: '03', title: 'Results That Stand', desc: 'We measure success in structures that perform — on time, on budget, built to last.' }
          ].map((value, i) => (
            <div key={i} className="bg-white p-8 rounded-lg shadow-sm border-t-4 border-[#e08b2d]">
              <div className="font-display text-6xl font-bold text-[#e08b2d]/20 mb-4">{value.num}</div>
              <h3 className="font-display text-2xl font-bold text-[#1a1a1a] uppercase tracking-wider mb-4">{value.title}</h3>
              <p className="text-[#6b6560] leading-relaxed">{value.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Track Record (Awards) */}
      <section className="py-24 bg-[#2e3440] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <h2 className="font-display text-5xl font-bold uppercase tracking-tight mb-2">Track Record</h2>
              <p className="text-gray-400">Founded 2013 · Operating across the UK</p>
            </div>
          </div>
          
          <div className="relative border-l-2 border-white/10 pl-8 ml-4 space-y-12">
            <div className="relative">
              <div className="absolute -left-[41px] top-1 w-5 h-5 rounded-full bg-[#e08b2d] border-4 border-[#2e3440]"></div>
              <div className="font-display text-3xl font-bold text-[#e08b2d] mb-2">2015</div>
              <h3 className="text-xl font-bold mb-2">Marshall Register Award</h3>
              <p className="text-gray-400">Best driveway transformation over 70m²</p>
            </div>
            <div className="relative">
              <div className="absolute -left-[41px] top-1 w-5 h-5 rounded-full bg-[#e08b2d] border-4 border-[#2e3440]"></div>
              <div className="font-display text-3xl font-bold text-[#e08b2d] mb-2">2014</div>
              <h3 className="text-xl font-bold mb-2">Marshall Register Award</h3>
              <p className="text-gray-400">Best project by a new register member</p>
            </div>
            <div className="relative">
              <div className="absolute -left-[41px] top-1 w-5 h-5 rounded-full bg-white/20 border-4 border-[#2e3440]"></div>
              <div className="font-display text-3xl font-bold text-gray-500 mb-2">2013</div>
              <h3 className="text-xl font-bold text-gray-400 mb-2">Company Founded</h3>
              <p className="text-gray-500">Glades Construction Ltd. established in Pinner, Middlesex.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Founders */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h2 className="font-display text-5xl font-bold text-[#1a1a1a] uppercase tracking-tight">Leadership</h2>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Suresh */}
          <div className="flex flex-col">
            <div className="h-80 bg-[#1a1a1a] rounded-lg mb-6 overflow-hidden relative">
              <img
                src="/images/about/hero.jpg"
                alt="Suresh De Silva"
                className="w-full h-full object-cover opacity-80"
              />
            </div>
            <h3 className="font-display text-4xl font-bold text-[#1a1a1a] uppercase tracking-wider mb-2">Suresh De Silva</h3>
            <div className="inline-block bg-[#1a1a1a] text-[#e08b2d] text-xs font-bold px-3 py-1 uppercase tracking-widest rounded-sm mb-6 self-start">
              Chartered Engineer · Managing Director · 40+ Yrs
            </div>
            <p className="text-[#6b6560] leading-relaxed mb-4">
              A pioneer in civil and industrial engineering with over four decades of experience managing large-scale infrastructure projects.
            </p>
            <p className="text-[#6b6560] leading-relaxed">
              Suresh brings deep technical excellence from his background in hydropower developments and motorway infrastructure, ensuring every Glades project is built on an unshakeable engineering foundation.
            </p>
          </div>

          {/* Chatura */}
          <div className="flex flex-col">
            <div className="h-80 bg-[#1a1a1a] rounded-lg mb-6 overflow-hidden relative">
              <img
                src="/images/about/founder-suresh.jpg"
                alt="Chatura Samarasinghe"
                className="w-full h-full object-cover opacity-80"
              />
            </div>
            <h3 className="font-display text-4xl font-bold text-[#1a1a1a] uppercase tracking-wider mb-2">Chatura Samarasinghe</h3>
            <div className="inline-block bg-[#1a1a1a] text-[#e08b2d] text-xs font-bold px-3 py-1 uppercase tracking-widest rounded-sm mb-6 self-start">
              Civil Engineer · Commercial Director · 30+ Yrs
            </div>
            <p className="text-[#6b6560] leading-relaxed mb-4">
              A civil engineer with 30+ years in the construction industry, renowned for his meticulous attention to detail and perfectionist approach.
            </p>
            <p className="text-[#6b6560] leading-relaxed">
              Chatura utilizes advanced 3D modeling not as a design flourish, but as a precision engineering tool to eliminate on-site variables and guarantee structural accuracy before ground is even broken.
            </p>
          </div>
        </div>
      </section>
    </motion.div>
  );
}
