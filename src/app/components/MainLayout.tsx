import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Hero3D } from './Hero3D';
import { About } from './About';
import { Attractions } from './Attractions';
import { Gallery } from './Gallery';
import { CultureHistory } from './CultureHistory';
import { Development } from './Development';
import { Info } from './Info';
import { MapLocation } from './MapLocation';
import { Contact } from './Contact';
import { Developer } from './Developer';

export function MainLayout() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', id: 'home' },
    { name: 'About', id: 'about' },
    { name: 'Attractions', id: 'attractions' },
    { name: 'Gallery', id: 'gallery' },
    { name: 'Culture', id: 'culture' },
    { name: 'Development', id: 'development' },
    { name: 'Info', id: 'info' },
    { name: 'Map', id: 'map' },
    { name: 'Contact', id: 'contact' },
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  return (
    <div className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-emerald-900">
      {/* Navigation */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-white/10 backdrop-blur-lg shadow-lg border-b border-white/20'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="text-2xl font-bold text-white cursor-pointer"
              onClick={() => scrollToSection('home')}
            >
              Bandipora Explorer
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="text-white/90 hover:text-white transition-colors relative group"
                >
                  {item.name}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-emerald-400 group-hover:w-full transition-all duration-300"></span>
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden text-white p-2"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-white/10 backdrop-blur-lg border-t border-white/20"
            >
              <div className="px-4 py-4 space-y-3">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className="block w-full text-left text-white/90 hover:text-white py-2 px-4 rounded-lg hover:bg-white/10 transition-all"
                  >
                    {item.name}
                  </button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      {/* Main Content */}
      <div id="home">
        <Hero3D />
      </div>
      <div id="about">
        <About />
      </div>
      <div id="attractions">
        <Attractions />
      </div>
      <div id="gallery">
        <Gallery />
      </div>
      <div id="culture">
        <CultureHistory />
      </div>
      <div id="development">
        <Development />
      </div>
      <div id="info">
        <Info />
      </div>
      <div id="map">
        <MapLocation />
      </div>
      <div id="contact">
        <Contact />
      </div>
      <Developer />
    </div>
  );
}