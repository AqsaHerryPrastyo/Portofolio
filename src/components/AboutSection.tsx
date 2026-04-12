import { Code, Palette } from 'lucide-react';
import { motion } from 'motion/react';

export function AboutSection() {
  const cards = [
    {
      title: 'Programming',
      icon: <Code className="text-white" size={24} />,
      gradient: 'bg-gradient-to-br from-[#9810fa] to-[#6d28d9]',
      description: 'JavaScript, PHP, Java, Dart, Laravel, Flutter, React JS',
    },
    {
      title: 'Machine Learning',
      icon: <Code className="text-white" size={24} />, // Used Code icon to match reference image, but could use BrainCircuit
      gradient: 'bg-gradient-to-br from-[#22c55e] to-[#16a34a]',
      description: 'Python, Jupyter, TensorFlow, Keras, Scikit-Learn, Pandas, CV2, etc.',
    },
    {
      title: 'Design',
      icon: <Palette className="text-white" size={24} />,
      gradient: 'bg-gradient-to-br from-[#f472b6] to-[#ec4899]',
      description: 'Figma, Canva, Adobe Photoshop',
    },
  ];

  return (
    <section id="about" className="relative px-6 md:px-16 py-20 md:py-32 overflow-hidden bg-background">
      {/* Subtle Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-purple-900/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            About <span className="text-purple-500">Me</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-gray-400 text-lg max-w-2xl mx-auto"
          >
            A multidisciplinary developer and designer blending technical logic with visual precision. As an IT student and AI enthusiast, I focus on integrating Machine Learning into creative workflows to build intuitive digital experiences. To me, great technology is where functionality meets aesthetic excellence
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white/[0.02] border border-white/5 rounded-3xl p-8 hover:bg-white/[0.04] hover:border-white/10 transition-all duration-300 group hover:-translate-y-1 hover:shadow-2xl hover:shadow-purple-500/10"
            >
              <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-8 ${card.gradient} shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                {card.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-3 tracking-wide">{card.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                {card.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
