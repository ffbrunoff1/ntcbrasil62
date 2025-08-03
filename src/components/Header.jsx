import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = sectionId => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
    setIsMenuOpen(false);
  };

  return (
    <motion.header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <motion.div
            className="flex items-center"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <img
              src="https://qotdwocbcoirjlqjkjhq.supabase.co/storage/v1/object/imagens.website.creation/ad5c31a2-f045-4f97-a0ab-2d4f0e6a69e7/logo_1754253882949_0.png"
              alt="NTC Brasil"
              className="h-14 w-auto transition-all duration-300"
            />
          </motion.div>

          <nav className="hidden md:block">
            <ul className="flex space-x-8">
              {[
                { name: 'Início', id: 'hero' },
                { name: 'Sobre', id: 'about' },
                { name: 'Produtos', id: 'services' },
                { name: 'Contato', id: 'contact' },
              ].map(item => (
                <li key={item.id}>
                  <button
                    onClick={() => scrollToSection(item.id)}
                    className={`font-medium transition-colors duration-300 hover:text-primary ${
                      isScrolled ? 'text-dark' : 'text-white'
                    }`}
                  >
                    {item.name}
                  </button>
                </li>
              ))}
            </ul>
          </nav>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`md:hidden p-2 rounded-lg transition-colors duration-300 ${
              isScrolled
                ? 'text-dark hover:bg-gray-100'
                : 'text-white hover:bg-white/10'
            }`}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <motion.div
          className="md:hidden bg-white shadow-lg"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="px-4 py-6 space-y-4">
            {[
              { name: 'Início', id: 'hero' },
              { name: 'Sobre', id: 'about' },
              { name: 'Produtos', id: 'services' },
              { name: 'Contato', id: 'contact' },
            ].map(item => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="block w-full text-left text-dark hover:text-primary font-medium py-2 transition-colors duration-300"
              >
                {item.name}
              </button>
            ))}
          </div>
        </motion.div>
      )}
    </motion.header>
  );
}
