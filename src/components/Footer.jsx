import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Facebook, ArrowUp } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const scrollToSection = sectionId => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  const footerLinks = [
    { name: 'Início', id: 'hero' },
    { name: 'Sobre', id: 'about' },
    { name: 'Produtos', id: 'services' },
    { name: 'Contato', id: 'contact' },
  ];

  const products = [
    'Geomembrana Lisa PEAD',
    'Geomembrana Lisa PEBDL',
    'Geotêxtil Não Tecido',
    'Geotêxtil Tecido',
    'Duto PEAD',
    'Tubo Dreno PEAD',
  ];

  const contactInfo = [
    {
      icon: Phone,
      text: '(11) 5242-4280',
      href: 'tel:+551152424280',
    },
    {
      icon: Mail,
      text: 'contato@ntcbrasil.com.br',
      href: 'mailto:contato@ntcbrasil.com.br',
    },
    {
      icon: MapPin,
      text: 'Piracicaba, SP',
      href: '#',
    },
  ];

  return (
    <footer className="bg-gradient-to-br from-dark to-slate-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="py-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <motion.div
              className="lg:col-span-1"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <motion.img
                src="https://qotdwocbcoirjlqjkjhq.supabase.co/storage/v1/object/imagens.website.creation/ad5c31a2-f045-4f97-a0ab-2d4f0e6a69e7/logo_1754253882949_0.png"
                alt="NTC Brasil"
                className="h-16 w-auto mb-6 brightness-0 invert"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              />
              <p className="text-gray-300 mb-6 leading-relaxed">
                Soluções de alta tecnologia para construção civil com foco em
                durabilidade e sustentabilidade. Construindo um futuro melhor
                através da inovação.
              </p>
              <div className="flex gap-4">
                <motion.a
                  href="https://www.facebook.com/ntcbrasil"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white/10 p-3 rounded-lg hover:bg-primary transition-all duration-300"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Facebook size={20} />
                </motion.a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-bold mb-6">Navegação</h3>
              <ul className="space-y-3">
                {footerLinks.map(link => (
                  <li key={link.id}>
                    <button
                      onClick={() => scrollToSection(link.id)}
                      className="text-gray-300 hover:text-primary transition-colors duration-300 text-left"
                    >
                      {link.name}
                    </button>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-bold mb-6">Produtos</h3>
              <ul className="space-y-3">
                {products.map(product => (
                  <li key={product} className="text-gray-300 text-sm">
                    {product}
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-bold mb-6">Contato</h3>
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <motion.a
                    key={index}
                    href={info.href}
                    className="flex items-center gap-3 text-gray-300 hover:text-primary transition-colors duration-300 group"
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <info.icon
                      size={18}
                      className="text-primary group-hover:text-white transition-colors duration-300"
                    />
                    <span className="text-sm">{info.text}</span>
                  </motion.a>
                ))}
              </div>

              <motion.div
                className="mt-8 p-4 bg-gradient-to-r from-primary/20 to-accent/20 rounded-lg border border-primary/30"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <h4 className="font-semibold mb-2">Horário de Atendimento</h4>
                <p className="text-sm text-gray-300">
                  Segunda a Sexta: 8h às 18h
                </p>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          className="border-t border-gray-700 py-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © 2024 NTC Brasil. Todos os direitos reservados.
            </p>

            <div className="flex items-center gap-6">
              <p className="text-gray-400 text-sm">
                Desenvolvido com tecnologia sustentável
              </p>

              <motion.button
                onClick={scrollToTop}
                className="bg-primary p-3 rounded-full hover:bg-accent transition-all duration-300 group"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <ArrowUp size={18} className="group-hover:animate-bounce" />
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
