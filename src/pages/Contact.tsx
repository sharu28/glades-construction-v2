import { motion } from 'motion/react';

export default function Contact() {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="w-full bg-[#f4f1ec] min-h-screen"
    >
      <div className="flex flex-col lg:flex-row min-h-[calc(100vh-80px)]">
        {/* Left Panel - Form */}
        <div className="w-full lg:w-3/5 p-8 md:p-16 lg:p-24 bg-[#f4f1ec]">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.1 }}
          >
            <h1 className="font-display text-6xl md:text-7xl font-bold text-[#1a1a1a] uppercase tracking-tight mb-4">
              Let's Build<br />Something Solid.
            </h1>
            <p className="text-xl text-[#6b6560] mb-2">
              Tell us about your project. We'll get back to you within 24 hours.
            </p>
            <p className="text-sm font-bold text-[#e08b2d] uppercase tracking-widest mb-12">
              70+ years of engineering experience behind every project we quote.
            </p>

            <form className="space-y-6 max-w-2xl" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-bold text-[#1a1a1a] uppercase tracking-wider mb-2">First Name</label>
                  <input type="text" id="firstName" className="w-full bg-white border border-[#6b6560]/30 rounded-md px-4 py-3 focus:outline-none focus:border-[#e08b2d] focus:ring-1 focus:ring-[#e08b2d] transition-colors" />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-bold text-[#1a1a1a] uppercase tracking-wider mb-2">Last Name</label>
                  <input type="text" id="lastName" className="w-full bg-white border border-[#6b6560]/30 rounded-md px-4 py-3 focus:outline-none focus:border-[#e08b2d] focus:ring-1 focus:ring-[#e08b2d] transition-colors" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="email" className="block text-sm font-bold text-[#1a1a1a] uppercase tracking-wider mb-2">Email</label>
                  <input type="email" id="email" className="w-full bg-white border border-[#6b6560]/30 rounded-md px-4 py-3 focus:outline-none focus:border-[#e08b2d] focus:ring-1 focus:ring-[#e08b2d] transition-colors" />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-bold text-[#1a1a1a] uppercase tracking-wider mb-2">Phone</label>
                  <input type="tel" id="phone" className="w-full bg-white border border-[#6b6560]/30 rounded-md px-4 py-3 focus:outline-none focus:border-[#e08b2d] focus:ring-1 focus:ring-[#e08b2d] transition-colors" />
                </div>
              </div>

              <div>
                <label htmlFor="projectType" className="block text-sm font-bold text-[#1a1a1a] uppercase tracking-wider mb-2">Project Type</label>
                <select id="projectType" className="w-full bg-white border border-[#6b6560]/30 rounded-md px-4 py-3 focus:outline-none focus:border-[#e08b2d] focus:ring-1 focus:ring-[#e08b2d] transition-colors appearance-none">
                  <option value="">Select a project type...</option>
                  <option value="residential">Residential</option>
                  <option value="commercial">Commercial</option>
                  <option value="refurbishment">Refurbishment</option>
                  <option value="extension">Extension</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-bold text-[#1a1a1a] uppercase tracking-wider mb-2">Message</label>
                <textarea id="message" rows={5} className="w-full bg-white border border-[#6b6560]/30 rounded-md px-4 py-3 focus:outline-none focus:border-[#e08b2d] focus:ring-1 focus:ring-[#e08b2d] transition-colors resize-none"></textarea>
              </div>

              <button type="submit" className="w-full md:w-auto bg-[#e08b2d] text-[#1a1a1a] px-10 py-4 rounded-full font-bold uppercase tracking-wider hover:bg-[#1a1a1a] hover:text-white transition-colors">
                Send Message
              </button>
            </form>
          </motion.div>
        </div>

        {/* Right Panel - Info */}
        <div className="w-full lg:w-2/5 bg-[#1a1a1a] text-white p-8 md:p-16 lg:p-24 flex flex-col justify-center">
          <motion.div
            initial={{ x: 20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <h2 className="font-display text-4xl font-bold uppercase tracking-wider mb-12 text-[#e08b2d]">Contact Information</h2>
            
            <div className="space-y-10">
              <div>
                <h3 className="text-sm font-bold uppercase tracking-widest text-gray-500 mb-2">Headquarters</h3>
                <p className="text-xl font-medium">38 Cedar Drive<br />Pinner, HA5 4DE<br />United Kingdom</p>
              </div>
              
              <div>
                <h3 className="text-sm font-bold uppercase tracking-widest text-gray-500 mb-2">Email</h3>
                <a href="mailto:info@gladesconstructionltd.com" className="text-xl font-medium hover:text-[#e08b2d] transition-colors">
                  info@gladesconstructionltd.com
                </a>
              </div>
              
              <div>
                <h3 className="text-sm font-bold uppercase tracking-widest text-gray-500 mb-2">Phone</h3>
                <div className="space-y-2">
                  <a href="tel:+447504321416" className="block text-xl font-medium hover:text-[#e08b2d] transition-colors">+44 7504 321416</a>
                  <a href="tel:+447817743413" className="block text-xl font-medium hover:text-[#e08b2d] transition-colors">+44 7817 743413</a>
                  <a href="tel:+442030869366" className="block text-xl font-medium hover:text-[#e08b2d] transition-colors">+44 2030 869366</a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}
