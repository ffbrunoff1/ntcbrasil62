import { motion } from 'framer-motion';
import { Shield, Target, Users, Globe } from 'lucide-react';

export default function About() {
  const features = [
    {
      icon: Shield,
      title: 'Qualidade Superior',
      description:
        'Produtos desenvolvidos com os mais altos padrões de qualidade e resistência para garantir a durabilidade de seus projetos.',
      color: 'text-blue-500',
    },
    {
      icon: Target,
      title: 'Soluções Personalizadas',
      description:
        'Desenvolvemos soluções específicas para cada tipo de projeto, atendendo às necessidades particulares de cada cliente.',
      color: 'text-green-500',
    },
    {
      icon: Users,
      title: 'Equipe Especializada',
      description:
        'Nossa equipe técnica possui vasta experiência no setor de construção civil e engenharia, garantindo o melhor suporte.',
      color: 'text-purple-500',
    },
    {
      icon: Globe,
      title: 'Sustentabilidade',
      description:
        'Comprometidos com o meio ambiente, oferecemos soluções sustentáveis que contribuem para um futuro mais verde.',
      color: 'text-orange-500',
    },
  ];

  const stats = [
    { number: '15+', label: 'Anos de Experiência' },
    { number: '1000+', label: 'Projetos Concluídos' },
    { number: '50+', label: 'Cidades Atendidas' },
    { number: '100%', label: 'Satisfação do Cliente' },
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Sobre a <span className="gradient-text">NTC Brasil</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Há mais de uma década, somos referência em soluções inovadoras para
            construção civil, oferecendo produtos de alta tecnologia que
            combinam durabilidade, sustentabilidade e excelência.
          </p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 gap-16 items-center mb-20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-bold mb-6 text-dark">
              Nossa Missão e Visão
            </h3>
            <p className="text-lg text-gray-600 mb-6">
              Na NTC Brasil, nossa missão é fornecer soluções tecnológicas de
              ponta para o setor da construção civil, sempre priorizando a
              sustentabilidade e a qualidade. Acreditamos que é possível
              construir um futuro melhor através da inovação e do compromisso
              com o meio ambiente.
            </p>
            <p className="text-lg text-gray-600 mb-8">
              Nossa visão é ser reconhecida como a principal referência em
              produtos geossintéticos no Brasil, expandindo constantemente nosso
              portfólio e conquistando novos mercados através da excelência em
              qualidade e atendimento.
            </p>
            <motion.button
              className="btn-primary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() =>
                document
                  .getElementById('contact')
                  .scrollIntoView({ behavior: 'smooth' })
              }
            >
              Fale Conosco
            </motion.button>
          </motion.div>

          <motion.div
            className="grid grid-cols-2 gap-6"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="text-center p-6 bg-gradient-to-br from-primary/10 to-accent/10 rounded-xl card-hover"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <h4 className="text-4xl font-bold gradient-text mb-2">
                  {stat.number}
                </h4>
                <p className="text-gray-700 font-medium">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="text-center p-8 bg-gradient-secondary rounded-xl shadow-lg card-hover border border-gray-100"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div
                className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-white shadow-lg mb-6 ${feature.color}`}
              >
                <feature.icon size={32} />
              </div>
              <h3 className="text-xl font-bold mb-4 text-dark">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
