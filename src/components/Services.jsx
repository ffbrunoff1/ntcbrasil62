import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function Services() {
  const products = [
    {
      name: 'Geomembrana Lisa PEAD',
      description:
        'A geomembrana lisa de PEAD é uma solução eficaz e versátil para projetos de engenharia ambiental oferecendo resistência química e durabilidade excepcionais. Ideal para impermeabilização minimiza riscos de contaminação em aterros sanitários e sistemas de tratamento de água.',
      image:
        'https://qotdwocbcoirjlqjkjhq.supabase.co/storage/v1/object/public/imagens.website.creation/ad5c31a2-f045-4f97-a0ab-2d4f0e6a69e7/imagem_1754254112771_0.png',
      features: [
        'Resistência química excepcional',
        'Impermeabilização eficaz',
        'Instalação econômica',
      ],
    },
    {
      name: 'Geomembrana Lisa PEBDL',
      description:
        'A Geomembrana Lisa PEBDL é uma solução inovadora para a impermeabilização em diversos setores, oferecendo resistência excepcional e durabilidade. Produzida com polietileno de baixa densidade linear, é ideal para projetos de engenharia civil, industriais e agrícolas.',
      image:
        'https://qotdwocbcoirjlqjkjhq.supabase.co/storage/v1/object/public/imagens.website.creation/ad5c31a2-f045-4f97-a0ab-2d4f0e6a69e7/imagem_1754254112771_1.png',
      features: [
        'Flexibilidade superior',
        'Vedação eficiente',
        'Adaptável a superfícies',
      ],
    },
    {
      name: 'Geotêxtil Não Tecido',
      description:
        'O geotêxtil não tecido é uma solução versátil e eficaz para engenharia civil e projetos ambientais. Fabricado com fibras sintéticas de alta resistência, ele oferece excelente drenagem e separação de materiais em obras, promovendo a estabilidade do solo.',
      image:
        'https://qotdwocbcoirjlqjkjhq.supabase.co/storage/v1/object/public/user-files/ad5c31a2-f045-4f97-a0ab-2d4f0e6a69e7/1754255013855_nl311k8are_geotextil_1.jpg',
      features: [
        'Excelente drenagem',
        'Estabilidade do solo',
        'Controle de erosão',
      ],
    },
    {
      name: 'Geotêxtil Tecido',
      description:
        'O geotêxtil tecido é uma solução versátil e resistente ideal para aplicações em engenharia civil e ambiental. Fabricado com fibras de alta qualidade garante estabilidade e reforço em projetos de infraestrutura como estradas e barreiras de contenção.',
      image:
        'https://qotdwocbcoirjlqjkjhq.supabase.co/storage/v1/object/public/imagens.website.creation/ad5c31a2-f045-4f97-a0ab-2d4f0e6a69e7/imagem_1754254112771_3.png',
      features: [
        'Alta resistência à tração',
        'Durabilidade em condições adversas',
        'Separação de solos',
      ],
    },
    {
      name: 'Duto PEAD',
      description:
        'Os Dutos PEAD são a solução ideal para a condução segura e eficiente de diversos fluidos. Fabricados em polietileno de alta densidade, oferecem excelente resistência a impactos e produtos químicos, além de serem flexíveis e duráveis.',
      image:
        'https://qotdwocbcoirjlqjkjhq.supabase.co/storage/v1/object/public/imagens.website.creation/ad5c31a2-f045-4f97-a0ab-2d4f0e6a69e7/imagem_1754254112771_4.png',
      features: [
        'Resistência a impactos',
        'Flexibilidade excepcional',
        'Baixo custo de manutenção',
      ],
    },
    {
      name: 'Tubo Dreno PEAD',
      description:
        'O Tubo Dreno PEAD é uma solução eficiente para drenagem de águas pluviais e subterrâneas. Fabricado em Polietileno de Alta Densidade, oferece alta resistência e durabilidade, garantindo um desempenho superior em obras de saneamento.',
      image:
        'https://qotdwocbcoirjlqjkjhq.supabase.co/storage/v1/object/public/imagens.website.creation/ad5c31a2-f045-4f97-a0ab-2d4f0e6a69e7/imagem_1754254112771_5.png',
      features: [
        'Estrutura corrugada',
        'Drenagem eficiente',
        'Prevenção de alagamentos',
      ],
    },
    {
      name: 'Tubo de Grande Diâmetro',
      description:
        'Os tubos de grande diâmetro são essenciais em projetos de infraestrutura variados, oferecendo robustez e eficiência para sistemas de esgoto, redes pluviais e transporte de água. Fabricados com materiais de alta qualidade, garantem durabilidade superior.',
      image:
        'https://qotdwocbcoirjlqjkjhq.supabase.co/storage/v1/object/public/imagens.website.creation/ad5c31a2-f045-4f97-a0ab-2d4f0e6a69e7/imagem_1754254112771_6.png',
      features: [
        'Suporta altas pressões',
        'Resistente a condições adversas',
        'Ideal para obras de grande porte',
      ],
    },
    {
      name: 'Geocomposto Drenante',
      description:
        'O geocomposto drenante é uma solução inovadora que otimiza o gerenciamento de águas em projetos de engenharia civil. Composto por uma combinação de geotêxteis e georrede ele oferece alta capacidade de drenagem e resistência.',
      image:
        'https://qotdwocbcoirjlqjkjhq.supabase.co/storage/v1/object/public/imagens.website.creation/ad5c31a2-f045-4f97-a0ab-2d4f0e6a69e7/imagem_1754254112771_7.png',
      features: [
        'Alta capacidade de drenagem',
        'Fácil instalação',
        'Baixo custo de manutenção',
      ],
    },
    {
      name: 'Geodreno Vertical',
      description:
        'O Geodreno Vertical é uma solução inovadora para obras de engenharia civil, principalmente em solos moles ou saturados. Esse sistema eficiente facilita o escoamento da água intersticial, acelerando o adensamento e a estabilização do solo.',
      image:
        'https://qotdwocbcoirjlqjkjhq.supabase.co/storage/v1/object/public/imagens.website.creation/ad5c31a2-f045-4f97-a0ab-2d4f0e6a69e7/imagem_1754254112771_8.png',
      features: [
        'Acelera adensamento do solo',
        'Reduz prazo de construção',
        'Maior segurança operacional',
      ],
    },
  ];

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  return (
    <section
      id="services"
      className="py-20 bg-gradient-to-br from-gray-50 to-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Nossos <span className="gradient-text">Produtos</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Conheça nossa linha completa de produtos de alta tecnologia para
            construção civil, desenvolvidos para oferecer máxima durabilidade e
            sustentabilidade.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {products.map((product, index) => (
            <motion.div
              key={product.name}
              className="group bg-white rounded-xl shadow-lg card-hover overflow-hidden border border-gray-100 flex flex-col h-full"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="relative overflow-hidden h-48">
                <motion.img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                  whileHover={{ scale: 1.1 }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold mb-4 text-dark group-hover:text-primary transition-colors duration-300">
                  {product.name}
                </h3>

                <p className="text-gray-600 mb-6 line-clamp-3 flex-grow">
                  {product.description}
                </p>

                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-dark mb-3">
                    Características:
                  </h4>
                  <ul className="space-y-2">
                    {product.features.map((feature, featureIndex) => (
                      <li
                        key={featureIndex}
                        className="flex items-center text-sm text-gray-600"
                      >
                        <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <motion.button
                  onClick={scrollToContact}
                  className="mt-auto bg-gradient-primary text-white px-6 py-3 rounded-lg font-semibold flex items-center justify-center gap-2 hover:shadow-lg transform hover:scale-105 transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Solicitar Orçamento
                  <ArrowRight size={16} />
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.button
            onClick={scrollToContact}
            className="btn-primary text-lg px-12 py-4"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Entre em contato para mais informações
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
