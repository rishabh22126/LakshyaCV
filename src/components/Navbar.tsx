import { useState, useEffect } from 'react';
import { Menu, X, FileText, Smartphone } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '../lib/utils';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Templates', href: '#templates' },
    { name: 'How It Works', href: '#how-it-works' },
    { name: 'Testimonials', href: '#testimonials' },
  ];

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled ? 'glass py-3' : 'bg-transparent py-5'
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-4 group">

{/* Logo */}

  <div className="bg-white/5 p-2 rounded-2xl border border-white/10 shadow-2xl group-hover:scale-110 transition-transform duration-500">
    <img
      src="/logo.png"
      alt="LakshyaCV Logo"
      className="w-12 h-12 object-contain"
    />
  </div>

{/* Brand Name */} <span className="text-2xl font-black text-white tracking-widest uppercase">
Lakshya<span className="gradient-text">CV</span> </span>

</Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-10">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-slate-400 hover:text-white text-xs font-black uppercase tracking-widest transition-all hover:scale-110"
              >
                {link.name}
              </a>
            ))}
            <Link
              to="/templates"
              className="bg-[#FF7A60] hover:bg-[#ff8b75] text-white px-8 py-3 rounded-2xl font-black uppercase tracking-widest text-[10px] transition-all shadow-2xl shadow-[#FF7A60]/30 hover:-translate-y-1 active:translate-y-0"
            >
              Build Now
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white focus:outline-none"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass border-t border-white/10 overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block px-3 py-4 text-lg font-bold text-slate-100 hover:bg-white/5 hover:text-[#FF7A60] rounded-xl transition-all"
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-4">
                <Link
                  to="/templates"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block w-full text-center bg-[#FF7A60] text-white py-4 rounded-xl font-bold shadow-lg shadow-[#FF7A60]/20"
                >
                  Build Resume Now
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
