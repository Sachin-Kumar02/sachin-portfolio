import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
  ];

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-slate-900/90 backdrop-blur-sm shadow-lg py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
        <a href="#" className="text-emerald-400 font-mono text-xl font-bold tracking-tighter">
          SK.
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          <ul className="flex gap-8">
            {navLinks.map((link, i) => (
              <motion.li 
                key={link.name}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
              >
                <a 
                  href={link.href} 
                  className="text-slate-300 hover:text-emerald-400 text-sm font-mono transition-colors"
                >
                  <span className="text-emerald-400 mr-1">0{i + 1}.</span>
                  {link.name}
                </a>
              </motion.li>
            ))}
          </ul>
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: navLinks.length * 0.1 }}
          >
            <Link
              to="/resume"
              className="px-4 py-2 text-emerald-400 border border-emerald-400 rounded hover:bg-emerald-400/10 transition-colors font-mono text-sm"
            >
              Resume
            </Link>
          </motion.div>
        </nav>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden text-emerald-400 z-50"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Mobile Nav */}
        {isMobileMenuOpen && (
          <div className="fixed inset-0 bg-slate-900 z-40 flex flex-col items-center justify-center">
            <ul className="flex flex-col items-center gap-8">
              {navLinks.map((link, i) => (
                <li key={link.name} onClick={() => setIsMobileMenuOpen(false)}>
                  <a 
                    href={link.href} 
                    className="text-slate-300 hover:text-emerald-400 text-lg font-mono flex flex-col items-center"
                  >
                    <span className="text-emerald-400 mb-1">0{i + 1}.</span>
                    {link.name}
                  </a>
                </li>
              ))}
              <li onClick={() => setIsMobileMenuOpen(false)}>
                <Link
                  to="/resume"
                  className="px-8 py-3 mt-4 inline-block text-emerald-400 border border-emerald-400 rounded hover:bg-emerald-400/10 transition-colors font-mono"
                >
                  Resume
                </Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </header>
  );
}
