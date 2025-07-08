import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const Aliados = () => {
  const socios = [
    {
      nombre: "METENCO",
      descripcion: "Mantenimiento industrial y reparación de dispositivos y maquinaria especializada",
      logo: "/partners/metenco.png",
      initial: "M",
      color: "bg-gradient-to-br from-orange-200 to-orange-300 text-orange-600",
      borderColor: "border-orange-400",
      hoverColor: "group-hover:shadow-orange-300"
    },
    {
      nombre: "Logiceer",
      descripcion: "Soluciones logísticas con inteligencia artificial",
      logo: "/partners/logiceer.png",
      initial: "L",
      color: "bg-gradient-to-br from-blue-200 to-blue-300 text-blue-600",
      borderColor: "border-blue-400",
      hoverColor: "group-hover:shadow-blue-300"
    },
    {
      nombre: "Vortex",
      descripcion: "Tecnología industrial e IoT",
      logo: "/partners/Vortex.png",
      initial: "V",
      color: "bg-gradient-to-br from-cyan-200 to-cyan-300 text-cyan-600",
      borderColor: "border-cyan-400",
      hoverColor: "group-hover:shadow-cyan-300"
    },
    {
      nombre: "MT Performance",
      descripcion: "Optimización empresarial y eficiencia operativa",
      logo: "/partners/MT_Performance (1).png",
      initial: "M",
      color: "bg-gradient-to-br from-green-200 to-green-300 text-green-600",
      borderColor: "border-green-400",
      hoverColor: "group-hover:shadow-green-300"
    },
    {
      nombre: "Medibelle",
      descripcion: "Tecnología para el sector salud y belleza",
      logo: "/partners/medibelle.png",
      initial: "M",
      color: "bg-gradient-to-br from-pink-200 to-pink-300 text-pink-600",
      borderColor: "border-pink-400",
      hoverColor: "group-hover:shadow-pink-300"
    }
  ];
  return (
    <section id="aliados" className="py-20 bg-gradient-to-br from-blue-50 via-purple-50 to-indigo-50 relative overflow-hidden">
      {/* Elementos decorativos de fondo */}
      <div className="absolute top-0 left-0 w-40 h-40 bg-gradient-to-br from-blue-300/20 to-blue-400/20 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-60 h-60 bg-gradient-to-br from-purple-300/20 to-purple-400/20 rounded-full translate-x-1/3 translate-y-1/3 blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Encabezado de la sección */}
        <div className="text-center mb-12">
          <motion.h2 
            className="text-3xl font-bold mb-3 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-transparent bg-clip-text"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Nuestros Aliados Estratégicos
          </motion.h2>
          <div className="h-1.5 w-24 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-5 rounded-full"></div>
          <motion.p 
            className="text-sm text-gray-600 max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Colaboramos con empresas líderes en innovación tecnológica 
            para ofrecer soluciones de alta calidad que transforman 
            industrias y crean valor.
          </motion.p>
        </div>        {/* Grid de socios */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-x-8 gap-y-12 max-w-5xl mx-auto mb-16">
          {socios.map((socio, index) => (
            <motion.div 
              key={index} 
              className="flex flex-col items-center group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div 
                className={`w-36 h-36 ${socio.borderColor} border-2 rounded-2xl 
                flex items-center justify-center mb-5 transition-all duration-300 
                transform group-hover:scale-110 shadow-lg ${socio.hoverColor} 
                group-hover:shadow-xl relative overflow-hidden ${
                  socio.nombre === "MT Performance" ? "bg-black" : 
                  socio.nombre === "Logiceer" ? "bg-gradient-to-br from-slate-50 to-slate-100" :
                  socio.nombre === "Vortex" ? "bg-[#062a35]" : "bg-white"
                } p-4`}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-br opacity-5 from-white via-transparent to-transparent"></div>
                {socio.logo ? (
                  <div className="relative w-full h-full flex items-center justify-center">
                    <Image 
                      src={socio.logo} 
                      alt={`Logo de ${socio.nombre}`}
                      width={130}
                      height={130}
                      className="object-contain"
                      style={{ 
                        maxWidth: '100%', 
                        maxHeight: '100%',
                        filter: socio.nombre === "MT Performance" ? "brightness(1.2) contrast(1.1)" : 
                               socio.nombre === "Logiceer" ? "contrast(1.05) saturate(1.1)" :
                               socio.nombre === "Vortex" ? "brightness(1.2) contrast(1.1)" : "none"
                      }}
                    />
                  </div>
                ) : (
                  <>
                    <div className={`absolute inset-0 ${socio.color}`}></div>
                    <span className="text-3xl font-bold relative z-10">
                      {socio.initial}
                    </span>
                  </>
                )}
              </div>
              <h3 className={`text-base font-bold mb-2 text-center 
                bg-gradient-to-r from-gray-800 to-gray-700 group-hover:from-blue-600 
                group-hover:to-purple-600 bg-clip-text transition-all duration-300
                group-hover:text-transparent tracking-wide`}>
                {socio.nombre}
              </h3>
              <p className="text-xs text-gray-600 text-center max-w-[180px] leading-relaxed">
                {socio.descripcion}
              </p>
            </motion.div>
          ))}
        </div>        {/* Banner CTA con más color */}
        <motion.div 
          className="max-w-3xl mx-auto bg-gradient-to-r from-blue-500/10 via-indigo-500/10 to-purple-500/10 
            backdrop-blur-sm rounded-xl p-10 text-center border border-blue-200 shadow-xl 
            shadow-blue-500/5 relative overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          {/* Elementos decorativos */}
          <div className="absolute -top-14 -left-14 w-28 h-28 bg-blue-500/20 rounded-full blur-xl"></div>
          <div className="absolute -bottom-10 -right-10 w-20 h-20 bg-purple-500/20 rounded-full blur-xl"></div>
          
          <motion.h3 
            className="text-2xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-transparent bg-clip-text"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            ¿Interesado en una alianza estratégica?
          </motion.h3>
          <motion.p 
            className="text-sm text-gray-600 mb-7 max-w-xl mx-auto leading-relaxed"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            Estamos abiertos a nuevas colaboraciones que impulsen la innovación y el crecimiento mutuo.
          </motion.p>
          <motion.a 
            href="#contacto" 
            className="inline-block px-7 py-3 bg-gradient-to-r from-blue-500 to-indigo-600 
              text-sm font-medium text-white rounded-lg hover:from-blue-600 hover:to-indigo-700 
              transition-all duration-300 transform hover:scale-105 hover:shadow-lg shadow-md shadow-blue-500/20 
              hover:shadow-blue-600/30"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            whileHover={{ y: -3 }}
          >
            Hablemos de oportunidades
          </motion.a>
        </motion.div>
      </div>
      
      {/* Divisor ondulado entre Aliados y Contacto */}
      <div className="wave-divider relative w-full h-24 mt-16 overflow-hidden">
        <svg 
          className="absolute bottom-0 w-full h-full" 
          viewBox="0 24 150 28" 
          preserveAspectRatio="none"
        >
          <defs>
            <motion.path 
              id="gentle-wave" 
              d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
              initial={{ d: "M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" }}
              animate={{ 
                d: [
                  "M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z",
                  "M-160 34c30 0 58-8 88-8s 58 8 88 8 58-8 88-8 58 8 88 8 v44h-352z",
                  "M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
                ] 
              }}
              transition={{ 
                duration: 10,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          </defs>
          <g className="waves">
            <use xlinkHref="#gentle-wave" x="48" y="0" fill="rgba(79, 70, 229, 0.08)" />
            <use xlinkHref="#gentle-wave" x="48" y="3" fill="rgba(99, 102, 241, 0.1)" />
            <use xlinkHref="#gentle-wave" x="48" y="5" fill="rgba(129, 140, 248, 0.12)" />
            <use xlinkHref="#gentle-wave" x="48" y="7" fill="rgba(255, 255, 255, 1)" />
          </g>
        </svg>
      </div>
    </section>
  );
};

export default Aliados;
