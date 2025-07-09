import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const Aliados = () => {
  const socios = [
    {
      nombre: "METENCO",
      descripcion: "Mantenimiento industrial y reparación de dispositivos y maquinaria especializada",
      logo: "/partners/Metenco.png",
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
    <section id="aliados" className="py-20 relative overflow-hidden bg-[#000052]">
      {/* Elementos decorativos de fondo mejorados con los nuevos colores */}
      <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMzAgMzBtLTI4IDBhMjggMjggMCAxIDAgNTYgMCAyOCAyOCAwIDEgMC01NiAweiIgc3Ryb2tlPSIjMDBFQ0ZFMjAiIHN0cm9rZS13aWR0aD0iMC41Ii8+PC9zdmc+')] opacity-20"></div>
      
      {/* Formas abstractas modernas con blur usando los nuevos colores */}
      <div className="absolute top-0 left-0 w-full h-64 bg-gradient-to-b from-[#00ECFE]/10 to-transparent"></div>
      <div className="absolute top-20 left-40 w-80 h-80 rounded-full bg-gradient-to-br from-[#00ECFE]/15 to-[#C599B]/10 blur-3xl"></div>
      <div className="absolute bottom-20 right-40 w-96 h-96 rounded-full bg-gradient-to-bl from-[#C599B]/10 to-[#00ECFE]/15 blur-3xl"></div>
      <div className="absolute top-1/3 right-1/4 w-60 h-60 rounded-full bg-gradient-to-r from-[#00ECFE]/15 to-[#C599B]/10 blur-2xl"></div>
      <div className="absolute bottom-1/3 left-1/4 w-72 h-72 rounded-full bg-gradient-to-tr from-[#C599B]/10 to-[#00ECFE]/5 blur-3xl"></div>
      
      {/* Malla sutil con los nuevos colores */}
      <div className="absolute inset-0 bg-custom-grid opacity-15"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Encabezado de la sección */}
        <div className="text-center mb-12">
          <motion.h2 
            className="text-3xl font-bold mb-3 bg-gradient-to-r from-[#00ECFE] via-white to-[#C599B] text-transparent bg-clip-text"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Nuestros Aliados Estratégicos
          </motion.h2>
          <div className="h-1.5 w-24 bg-gradient-to-r from-[#00ECFE] to-[#C599B] mx-auto mb-5 rounded-full"></div>
          <motion.p 
            className="text-sm text-gray-200 max-w-2xl mx-auto leading-relaxed"
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
                className={`w-36 h-36 border-2 rounded-2xl 
                flex items-center justify-center mb-5 transition-all duration-300 
                transform group-hover:scale-110 shadow-lg 
                group-hover:shadow-xl relative overflow-hidden ${
                  socio.nombre === "MT Performance" ? "bg-[#000052] border-[#00ECFE]/70 group-hover:shadow-[#00ECFE]/40" : 
                  socio.nombre === "Logiceer" ? "bg-gradient-to-br from-slate-50 to-slate-100 border-[#00ECFE]/70 group-hover:shadow-[#00ECFE]/40" :
                  socio.nombre === "Vortex" ? "bg-[#000052] border-[#00ECFE]/70 group-hover:shadow-[#00ECFE]/40" :
                  socio.nombre === "METENCO" ? "bg-gradient-to-br from-orange-50 to-amber-50 border-[#C599B]/70 group-hover:shadow-[#C599B]/40" : 
                  "bg-white border-[#C599B]/70 group-hover:shadow-[#C599B]/40"
                } p-2 sm:p-4`}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: '0 4px 20px rgba(0,0,0,0.15)',
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
                      className={`object-contain ${socio.nombre === "METENCO" ? "max-w-[80%] max-h-[80%] sm:max-w-full sm:max-h-full" : "max-w-full max-h-full"}`}
                      style={{ 
                        filter: socio.nombre === "MT Performance" ? "brightness(1.2) contrast(1.1)" : 
                               socio.nombre === "Logiceer" ? "contrast(1.05) saturate(1.1)" :
                               socio.nombre === "Vortex" ? "brightness(1.2) contrast(1.1)" :
                               socio.nombre === "METENCO" ? "contrast(1.1) saturate(1.05)" : "none"
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
              <h3 className={`text-base font-bold text-center 
                text-white group-hover:bg-gradient-to-r group-hover:from-[#00ECFE] 
                group-hover:to-[#C599B] group-hover:text-transparent group-hover:bg-clip-text 
                transition-all duration-300 tracking-wide`}>
                {socio.nombre}
              </h3>
            </motion.div>
          ))}
        </div>        {/* Banner CTA con más color */}
        <motion.div 
          className="max-w-3xl mx-auto bg-[#000052] 
            backdrop-blur-sm rounded-xl p-10 text-center border border-[#00ECFE]/30 shadow-xl 
            shadow-[#00ECFE]/15 relative overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          {/* Elementos decorativos con los nuevos colores */}
          <div className="absolute -top-14 -left-14 w-36 h-36 bg-[#00ECFE]/20 rounded-full blur-xl"></div>
          <div className="absolute -bottom-10 -right-10 w-28 h-28 bg-[#C599B]/20 rounded-full blur-xl"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-32 bg-[#00ECFE]/10 rounded-full blur-3xl"></div>
          
          <motion.h3 
            className="text-2xl font-bold mb-4 bg-gradient-to-r from-[#00ECFE] to-white text-transparent bg-clip-text"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            ¿Listo para impulsar su negocio con tecnología de vanguardia?
          </motion.h3>
          <motion.p 
            className="text-sm text-gray-200 mb-7 max-w-xl mx-auto leading-relaxed"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            Nuestros especialistas pueden diseñar soluciones personalizadas para
            satisfacer las necesidades específicas de su empresa.
          </motion.p>
          <motion.a 
            href="#servicios" 
            className="inline-block px-7 py-3 bg-[#00ECFE] 
              text-sm font-medium text-[#000052] font-bold rounded-lg hover:bg-[#00ECFE]/90
              transition-all duration-300 transform hover:scale-105 hover:shadow-lg shadow-md shadow-[#00ECFE]/30"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            whileHover={{ y: -3 }}
          >
            Ver servicios
          </motion.a>
        </motion.div>
      </div>
      
      {/* Divisor ondulado mejorado con los nuevos colores */}
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
            <use xlinkHref="#gentle-wave" x="48" y="0" fill="rgba(0, 236, 254, 0.15)" />
            <use xlinkHref="#gentle-wave" x="48" y="3" fill="rgba(197, 153, 176, 0.12)" />
            <use xlinkHref="#gentle-wave" x="48" y="5" fill="rgba(0, 236, 254, 0.08)" />
            <use xlinkHref="#gentle-wave" x="48" y="7" fill="white" />
          </g>
        </svg>
      </div>
    </section>
  );
};

export default Aliados;
