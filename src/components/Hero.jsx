import { motion } from 'framer-motion';
import { ArrowRight, Shield, Leaf, Award } from 'lucide-react';

export default function Hero() {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  const scrollToServices = () => {
    const element = document.getElementById('services');
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  return (
    <section
      id="hero"
      className="min-h-screen bg-gradient-to-br from-slate-900 via-primary to-accent relative overflow-hidden pt-20"
    >
      <div className="absolute inset-0 bg-black/20 z-10"></div>

      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center min-h-screen">
        <div className="grid md:grid-cols-2 gap-12 items-center w-full">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-white"
          >
            <motion.h1
              className="text-5xl lg:text-7xl font-bold mb-6 leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Construindo um{' '}
              <span className="text-transparent bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text">
                futuro sustentável
              </span>
            </motion.h1>

            <motion.p
              className="text-xl lg:text-2xl mb-8 text-gray-200"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              Soluções de alta tecnologia para construção civil com foco em
              durabilidade e sustentabilidade.
            </motion.p>

            <motion.div
              className="grid grid-cols-3 gap-4 mb-10"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <div className="text-center">
                <Shield className="mx-auto mb-2 text-yellow-400" size={32} />
                <p className="text-sm font-medium">Resistência</p>
              </div>
              <div className="text-center">
                <Leaf className="mx-auto mb-2 text-green-400" size={32} />
                <p className="text-sm font-medium">Sustentabilidade</p>
              </div>
              <div className="text-center">
                <Award className="mx-auto mb-2 text-blue-400" size={32} />
                <p className="text-sm font-medium">Qualidade</p>
              </div>
            </motion.div>

            <motion.div
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
            >
              <motion.button
                onClick={scrollToServices}
                className="bg-gradient-to-r from-yellow-500 to-orange-600 text-dark px-8 py-4 rounded-lg font-semibold flex items-center justify-center gap-2 hover:shadow-lg transform hover:scale-105 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Conheça nossos produtos
                <ArrowRight size={20} />
              </motion.button>

              <motion.button
                onClick={scrollToContact}
                className="bg-white/10 backdrop-blur-sm text-white border-2 border-white/30 px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-dark transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Entre em contato
              </motion.button>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <div className="grid grid-cols-2 gap-6">
                <motion.div
                  className="bg-gradient-to-br from-primary/20 to-accent/20 p-6 rounded-xl"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <h3 className="text-white font-bold text-xl mb-2">
                    Geomembranas
                  </h3>
                  <p className="text-gray-200 text-sm">
                    Impermeabilização de alta resistência
                  </p>
                </motion.div>

                <motion.div
                  className="bg-gradient-to-br from-green-500/20 to-blue-500/20 p-6 rounded-xl"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <h3 className="text-white font-bold text-xl mb-2">
                    Geotêxteis
                  </h3>
                  <p className="text-gray-200 text-sm">
                    Separação e reforço de solos
                  </p>
                </motion.div>

                <motion.div
                  className="bg-gradient-to-br from-yellow-500/20 to-orange-500/20 p-6 rounded-xl"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <h3 className="text-white font-bold text-xl mb-2">
                    Tubos PEAD
                  </h3>
                  <p className="text-gray-200 text-sm">
                    Transporte seguro de fluidos
                  </p>
                </motion.div>

                <motion.div
                  className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 p-6 rounded-xl"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <h3 className="text-white font-bold text-xl mb-2">
                    Geocompostos
                  </h3>
                  <p className="text-gray-200 text-sm">Drenagem eficiente</p>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
