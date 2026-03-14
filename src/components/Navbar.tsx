import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const links = [
    { name: 'Home', path: '/' },
    { name: 'Projects', path: '/project-collection' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Contact', path: '/contact-us' },
  ];

  return (
    <nav className="fixed w-full z-50 bg-[#1a1a1a] text-white border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0">
            <Link to="/" className="font-display text-2xl tracking-wider uppercase font-bold">
              Glades Construction
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            {links.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`text-sm font-medium uppercase tracking-wider transition-colors ${
                  location.pathname === link.path ? 'text-[#e08b2d]' : 'text-gray-300 hover:text-white'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/contact-us"
              className="bg-[#e08b2d] text-[#1a1a1a] px-6 py-2.5 rounded-full text-sm font-bold uppercase tracking-wider hover:bg-white transition-colors"
            >
              Get a Quote →
            </Link>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-white focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-[#1a1a1a] border-b border-white/10">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {links.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`block px-3 py-2 text-base font-medium uppercase tracking-wider ${
                  location.pathname === link.path ? 'text-[#e08b2d]' : 'text-gray-300 hover:text-white'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/contact-us"
              onClick={() => setIsOpen(false)}
              className="block px-3 py-2 mt-4 text-center bg-[#e08b2d] text-[#1a1a1a] rounded-full text-base font-bold uppercase tracking-wider"
            >
              Get a Quote →
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
