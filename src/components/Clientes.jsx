import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const Clientes = () => {
  const clientes = [
    {
      nombre: "Medibelle",
      descripcion: "Implementación de sistema de gestión para clínicas estéticas",
      logo: "/partners/medibelle.png",
      initial: "M",
      color: "bg-gradient-to-br from-pink-200 to-pink-300 text-pink-600",
      borderColor: "border-pink-400",
      hoverColor: "group-hover:shadow-pink-300"
    },
    {
      nombre: "MT Performance",
      descripcion: "Automatización de procesos industriales y análisis de datos",
      logo: "/partners/MT_Performance (1).png",
      initial: "M",
      color: "bg-gradient-to-br from-green-200 to-green-300 text-green-600",
      borderColor: "border-green-400",
      hoverColor: "group-hover:shadow-green-300"
    },
    {
      nombre: "METENCO",
      descripcion: "Desarrollo de software para mantenimiento predictivo",
      logo: "/partners/Metenco.png",
      initial: "M",
      color: "bg-gradient-to-br from-orange-200 to-orange-300 text-orange-600",
      borderColor: "border-orange-400",
      hoverColor: "group-hover:shadow-orange-300"
    }
  ];
  
  return (
    <section id="clientes" className="py-20 bg-gradient-to-br from-slate-50 via-gray-50 to-white relative overflow-hidden">
      {/* Elementos decorativos de fondo */}
      <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-blue-300/20 to-blue-400/20 rounded-full translate-x-1/2 -translate-y-1/2 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-60 h-60 bg-gradient-to-br from-purple-300/20 to-purple-400/20 rounded-full -translate-x-1/3 translate-y-1/3 blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Encabezado de la sección */}
        <div className="text-center mb-16">
          <motion.h2 
            className="text-3xl font-bold mb-3 bg-gradient-to-r from-indigo-600 via-blue-600 to-cyan-600 text-transparent bg-clip-text"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Casos de Éxito
          </motion.h2>
          <div className="h-1.5 w-24 bg-gradient-to-r from-indigo-500 to-cyan-500 mx-auto mb-5 rounded-full"></div>
          <motion.p 
            className="text-sm text-gray-600 max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Empresas que han confiado en nuestras soluciones tecnológicas para 
            potenciar su crecimiento y transformación digital.
          </motion.p>
        </div>
        
        {/* Grid de clientes */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-10 gap-y-14 max-w-5xl mx-auto mb-16">
          {clientes.map((cliente, index) => (
            <motion.div 
              key={index} 
              className="flex flex-col items-center group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              viewport={{ once: true }}
            >
              <div 
                className={`w-40 h-40 ${cliente.borderColor} border-2 rounded-3xl 
                flex items-center justify-center mb-6 transition-all duration-300 
                transform group-hover:scale-105 shadow-lg ${cliente.hoverColor} 
                group-hover:shadow-xl relative overflow-hidden ${
                  cliente.nombre === "MT Performance" ? "bg-black" : 
                  cliente.nombre === "METENCO" ? "bg-gradient-to-br from-orange-50 to-yellow-50" : "bg-white"
                } p-5`}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: '0 8px 24px rgba(0,0,0,0.1)',
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-br opacity-5 from-white via-transparent to-transparent"></div>
                {cliente.logo ? (
                  <div className="relative w-full h-full flex items-center justify-center">
                    <Image 
                      src={cliente.logo} 
                      alt={`Logo de ${cliente.nombre}`}
                      width={150}
                      height={150}
                      className="object-contain"
                      style={{ 
                        maxWidth: '100%', 
                        maxHeight: '100%',
                        filter: cliente.nombre === "MT Performance" ? "brightness(1.2) contrast(1.1)" : 
                               cliente.nombre === "METENCO" ? "contrast(1.1) saturate(1.05)" : "none"
                      }}
                    />
                  </div>
                ) : (
                  <>
                    <div className={`absolute inset-0 ${cliente.color}`}></div>
                    <span className="text-3xl font-bold relative z-10">
                      {cliente.initial}
                    </span>
                  </>
                )}
              </div>
              <h3 className={`text-lg font-bold mb-3 text-center 
                bg-gradient-to-r from-gray-800 to-gray-700 group-hover:from-indigo-600 
                group-hover:to-cyan-600 bg-clip-text transition-all duration-300
                group-hover:text-transparent tracking-wide`}>
                {cliente.nombre}
              </h3>
              <p className="text-sm text-gray-600 text-center max-w-[280px] leading-relaxed">
                {cliente.descripcion}
              </p>
              
              <motion.button
                className="mt-5 px-4 py-2 bg-gradient-to-r from-indigo-50 to-blue-50 text-indigo-700 
                  rounded-lg text-xs font-medium border border-indigo-100 hover:from-indigo-100 
                  hover:to-blue-100 transition-all duration-300"
                whileHover={{ y: -2, boxShadow: "0 10px 25px -5px rgba(99, 102, 241, 0.15)" }}
              >
                Ver proyecto
              </motion.button>
            </motion.div>
          ))}
        </div>
        
        {/* Banner testimonios */}
        <motion.div 
          className="max-w-3xl mx-auto bg-gradient-to-r from-indigo-500/10 via-blue-500/10 to-cyan-500/10 
            backdrop-blur-sm rounded-xl p-10 text-center border border-indigo-200 shadow-xl 
            shadow-indigo-500/5 relative overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          {/* Elementos decorativos */}
          <div className="absolute -top-14 -left-14 w-28 h-28 bg-indigo-500/20 rounded-full blur-xl"></div>
          <div className="absolute -bottom-10 -right-10 w-20 h-20 bg-cyan-500/20 rounded-full blur-xl"></div>
          
          <svg className="h-10 w-10 text-indigo-300 opacity-40 mx-auto mb-4" fill="currentColor" viewBox="0 0 32 32">
            <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
          </svg>
          
          <motion.h3 
            className="text-xl font-bold mb-4 text-gray-800"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            InnovaTech transformó nuestra operación con soluciones que realmente entienden nuestras necesidades.
          </motion.h3>
          <motion.p 
            className="text-sm text-gray-600 mb-4 italic"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            "El equipo no solo entregó tecnología de punta, sino que se asoció con nosotros para entender nuestros objetivos de negocio y diseñar soluciones a la medida."
          </motion.p>
          <div className="flex items-center justify-center">
            <div className="w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center mr-3">
              <span className="font-bold text-indigo-600">MP</span>
            </div>
            <div className="text-left">
              <p className="text-sm font-semibold">Carlos Ramírez</p>
              <p className="text-xs text-gray-500">Director de Tecnología, MT Performance</p>
            </div>
          </div>
        </motion.div>
      </div>
      
      {/* Divisor ondulado entre Clientes y Contacto */}
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

export default Clientes;
