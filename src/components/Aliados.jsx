import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Aliados = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const socios = [
    {
      nombre: "Logiceer",
      logo: "/partners/logiceer.png",
      descripcion: "Soluciones logísticas inteligentes",
      color: "from-blue-400 to-cyan-500"
    },
    {
      nombre: "Vortex",
      logo: "/partners/vortex.png",
      descripcion: "Innovación en tecnología industrial",
      color: "from-purple-400 to-pink-500"
    },
    {
      nombre: "MT Performance",
      logo: "/partners/mt-performance.png",
      descripcion: "Optimización y rendimiento empresarial",
      color: "from-green-400 to-emerald-500"
    },
    {
      nombre: "Medibelle",
      logo: "/partners/medibelle.png",
      descripcion: "Tecnología para el sector salud y belleza",
      color: "from-orange-400 to-red-500"
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-gray-100/25 bg-[size:20px_20px] pointer-events-none" />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="container mx-auto px-4"
      >
        <div className="text-center mb-16 relative">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 mb-4"
          >
            Socios y Aliados Estratégicos
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-600 max-w-2xl mx-auto"
          >
            Uniendo fuerzas con líderes innovadores para transformar el futuro tecnológico
          </motion.p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {socios.map((socio, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              onHoverStart={() => setHoveredIndex(index)}
              onHoverEnd={() => setHoveredIndex(null)}
              className="relative group"
            >
              <div className={`
                p-8 rounded-xl backdrop-blur-sm bg-white/90 shadow-xl 
                transition-all duration-300 
                ${hoveredIndex === index ? 'scale-105' : 'scale-100'}
                border border-gray-100
              `}>
                <div className="h-36 flex items-center justify-center mb-6 relative">
                  <div className={`
                    absolute inset-0 rounded-full opacity-20 blur-xl bg-gradient-to-r ${socio.color}
                    transition-opacity duration-300 
                    ${hoveredIndex === index ? 'opacity-100' : 'opacity-20'}
                  `} />
                  <div className={`
                    w-28 h-28 rounded-full flex items-center justify-center
                    bg-gradient-to-r ${socio.color} p-1
                    transform transition-transform duration-300
                    ${hoveredIndex === index ? 'rotate-12' : 'rotate-0'}
                  `}>
                    <div className="bg-white rounded-full w-full h-full flex items-center justify-center">                      <span className={`text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r ${socio.color}`}>
                        {socio.nombre.charAt(0)}
                      </span>
                    </div>
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-3 text-center">{socio.nombre}</h3>                <p className="text-gray-600 text-center leading-relaxed">{socio.descripcion}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Aliados;
