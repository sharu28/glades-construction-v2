import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-[#1a1a1a] text-white pt-16 pb-8 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="font-display text-3xl tracking-wider uppercase font-bold block mb-4">
              Glades Construction
            </Link>
            <p className="text-gray-400 max-w-md mb-6">
              Full-service construction and civil engineering across the UK. From foundation to finish.
            </p>
            <div className="space-y-2 text-gray-400">
              <p>38 Cedar Drive, Pinner, HA5 4DE</p>
              <p>info@gladesconstructionltd.com</p>
              <p>+44 7504 321416 | +44 7817 743413</p>
            </div>
          </div>
          
          <div>
            <h3 className="font-display text-xl tracking-wider uppercase mb-4 text-[#e08b2d]">Navigation</h3>
            <ul className="space-y-3">
              <li><Link to="/" className="text-gray-400 hover:text-white transition-colors">Home</Link></li>
              <li><Link to="/project-collection" className="text-gray-400 hover:text-white transition-colors">Our Work</Link></li>
              <li><Link to="/about" className="text-gray-400 hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/services" className="text-gray-400 hover:text-white transition-colors">Services</Link></li>
              <li><Link to="/contact-us" className="text-gray-400 hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-display text-xl tracking-wider uppercase mb-4 text-[#e08b2d]">Services</h3>
            <ul className="space-y-3">
              <li className="text-gray-400">Design & Build</li>
              <li className="text-gray-400">Extensions & Basements</li>
              <li className="text-gray-400">Complete Refurbishments</li>
              <li className="text-gray-400">Commercial Civil Engineering</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          <p>© 2025 Glades Construction Ltd. All rights reserved.</p>
          <div className="mt-4 md:mt-0 space-x-4">
            <span className="uppercase tracking-wider">Built Right. Every Time.</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
