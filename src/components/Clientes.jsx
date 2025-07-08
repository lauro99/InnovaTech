import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const Clientes = () => {
  const casosExito = [
    {
      id: 1,
      cliente: "Medibelle",
      logo: "/partners/medibelle.png",
      titulo: "Transformación Digital en Clínicas Estéticas",
      categoria: "Salud y Belleza",
      descripcion: "Implementación de plataforma integrada para gestión de pacientes, inventario y agenda médica con IA para recomendaciones personalizadas.",
      resultados: [
        "Reducción de 35% en tiempos de espera",
        "Aumento del 42% en satisfacción del cliente",
        "Optimización de inventario con reducción de costos del 22%"
      ],
      tecnologias: ["React", "Node.js", "AI/ML", "IoT", "Cloud"],
      color: "from-pink-600 to-rose-500",
      lightColor: "from-pink-50 to-rose-50",
      accentColor: "group-hover:border-pink-400"
    },
    {
      id: 2,
      cliente: "MT Performance",
      logo: "/partners/MT_Performance (1).png",
      titulo: "Plataforma de Análisis Predictivo Industrial",
      categoria: "Manufactura",
      descripcion: "Desarrollo e implementación de sistema de análisis de datos y mantenimiento predictivo para optimizar procesos de fabricación.",
      resultados: [
        "Reducción del 47% en paradas no programadas",
        "Incremento de productividad del 23%",
        "ROI positivo en menos de 8 meses"
      ],
      tecnologias: ["Python", "TensorFlow", "BigData", "Industrial IoT", "AWS"],
      color: "from-emerald-600 to-green-500",
      lightColor: "from-emerald-50 to-green-50",
      accentColor: "group-hover:border-emerald-400"
    },
    {
      id: 3,
      cliente: "METENCO",
      logo: "/partners/Metenco.png",
      titulo: "Sistema Integrado de Mantenimiento Predictivo",
      categoria: "Ingeniería",
      descripcion: "Creación de software especializado para monitoreo y mantenimiento de maquinaria industrial con alertas en tiempo real.",
      resultados: [
        "Disminución del 53% en fallas de equipos críticos",
        "Aumento de vida útil de equipos en un 28%",
        "Ahorro anual de $450,000 en reparaciones"
      ],
      tecnologias: ["C#", ".NET", "SQL", "Edge Computing", "Azure"],
      color: "from-amber-600 to-orange-500",
      lightColor: "from-amber-50 to-orange-50",
      accentColor: "group-hover:border-amber-400"
    }
  ];

  return (
    <section id="casos-exito" className="py-24 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 text-white relative overflow-hidden">
      {/* Elementos decorativos de fondo */}
      <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-slate-900/0 to-slate-900/40"></div>
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-10 left-10 w-32 h-32 rounded-full bg-gradient-to-br from-blue-500/10 to-purple-500/10 blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-48 h-48 rounded-full bg-gradient-to-br from-cyan-500/10 to-blue-500/10 blur-3xl"></div>
        <div className="absolute top-1/3 right-1/4 w-24 h-24 rounded-full bg-gradient-to-br from-amber-500/10 to-red-500/10 blur-3xl"></div>
        <div className="absolute top-2/3 left-1/4 w-36 h-36 rounded-full bg-gradient-to-br from-emerald-500/10 to-cyan-500/10 blur-3xl"></div>
        
        {/* Patrón de circuito como textura de fondo */}
        <div className="w-full h-full opacity-5 bg-gradient-to-b from-blue-500/5 to-slate-800/5" 
            style={{
              backgroundImage: `radial-gradient(circle at 25px 25px, rgba(255, 255, 255, 0.2) 2%, transparent 0%), 
                               radial-gradient(circle at 75px 75px, rgba(255, 255, 255, 0.2) 2%, transparent 0%)`,
              backgroundSize: '100px 100px'
            }}></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Encabezado de la sección con estilo distinto */}
        <div className="max-w-4xl mx-auto mb-20">
          <div className="flex flex-col items-start">
            <motion.div 
              className="flex items-center mb-4"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="w-12 h-1 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full mr-4"></div>
              <p className="text-cyan-400 font-semibold uppercase tracking-wider text-sm">Casos de éxito</p>
            </motion.div>
            
            <motion.h2 
              className="text-4xl md:text-5xl font-bold mb-6 leading-tight"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Transformando <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">negocios</span> con tecnología de vanguardia
            </motion.h2>
            
            <motion.p 
              className="text-slate-300 text-lg mb-8"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
            >
              Descubre cómo nuestras soluciones tecnológicas han generado resultados medibles y significativos en empresas de diversos sectores.
            </motion.p>
            
            <div className="grid grid-cols-3 gap-4 w-full max-w-lg">
              <div className="flex flex-col items-center p-4 bg-slate-800/50 rounded-lg border border-slate-700">
                <span className="text-3xl font-bold text-blue-400 mb-1">32+</span>
                <span className="text-xs text-slate-400">Proyectos</span>
              </div>
              <div className="flex flex-col items-center p-4 bg-slate-800/50 rounded-lg border border-slate-700">
                <span className="text-3xl font-bold text-cyan-400 mb-1">96%</span>
                <span className="text-xs text-slate-400">Satisfacción</span>
              </div>
              <div className="flex flex-col items-center p-4 bg-slate-800/50 rounded-lg border border-slate-700">
                <span className="text-3xl font-bold text-teal-400 mb-1">40M+</span>
                <span className="text-xs text-slate-400">Ahorro generado</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Casos de éxito en un formato diferente */}
        <div className="space-y-16">
          {casosExito.map((caso, index) => (
            <motion.div 
              key={caso.id} 
              className="group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <div className="flex flex-col md:flex-row bg-slate-800 rounded-2xl overflow-hidden border border-slate-700 hover:border-slate-600 transition-all duration-300 shadow-xl">
                {/* Columna izquierda con logo e info */}
                <div className={`w-full md:w-1/3 bg-gradient-to-br ${caso.lightColor} p-8 flex flex-col items-center justify-center`}>
                  <div className="mb-6 bg-white rounded-xl p-4 w-40 h-40 flex items-center justify-center shadow-lg" style={{
                    background: caso.cliente === "MT Performance" ? "black" : "white",
                    boxShadow: "0 10px 30px rgba(0, 0, 0, 0.15)"
                  }}>
                    <Image 
                      src={caso.logo} 
                      alt={caso.cliente}
                      width={130}
                      height={130}
                      className="object-contain"
                      style={{ 
                        filter: caso.cliente === "MT Performance" ? "brightness(1.2)" : "none"
                      }}
                    />
                  </div>
                  <h3 className="text-slate-900 font-bold text-xl mb-2 text-center">{caso.cliente}</h3>
                  <p className="text-slate-700 text-sm mb-4 font-medium text-center">{caso.categoria}</p>
                  
                  <div className="bg-white/70 backdrop-blur-sm rounded-lg px-4 py-2 flex items-center space-x-2">
                    <svg className="w-4 h-4 text-cyan-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"></path>
                    </svg>
                    <span className="text-xs font-medium text-slate-900">Proyecto Certificado</span>
                  </div>
                </div>
                
                {/* Columna derecha con detalles */}
                <div className="w-full md:w-2/3 p-8 flex flex-col justify-between">
                  <div>
                    <div className="mb-6">
                      <h4 className="text-xl md:text-2xl font-bold mb-4 text-white">{caso.titulo}</h4>
                      <p className="text-slate-300 mb-6">{caso.descripcion}</p>
                    </div>
                    
                    <div className="mb-8">
                      <h5 className="text-sm font-semibold text-cyan-400 mb-3 flex items-center">
                        <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                        </svg>
                        RESULTADOS OBTENIDOS
                      </h5>
                      <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {caso.resultados.map((resultado, idx) => (
                          <li key={idx} className="flex items-start">
                            <svg className="w-5 h-5 text-cyan-500 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                            </svg>
                            <span className="text-sm text-slate-300">{resultado}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  
                  <div className="flex flex-col md:flex-row items-start md:items-center justify-between pt-4 border-t border-slate-700">
                    <div className="mb-4 md:mb-0">
                      <p className="text-xs text-slate-400 mb-2">TECNOLOGÍAS IMPLEMENTADAS</p>
                      <div className="flex flex-wrap gap-2">
                        {caso.tecnologias.map((tech, idx) => (
                          <span key={idx} className="text-xs py-1 px-2 bg-slate-700 text-slate-300 rounded-md">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Sección de testimonios renovada */}
        <motion.div 
          className="mt-24 bg-gradient-to-r from-slate-800 to-slate-900 rounded-3xl p-12 relative overflow-hidden border border-slate-700"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {/* Elementos decorativos */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-cyan-500/5 rounded-full blur-3xl"></div>
          
          <div className="relative z-10 flex flex-col lg:flex-row items-center lg:items-start">
            <div className="mb-10 lg:mb-0 lg:mr-16 lg:w-1/3">
              <svg className="h-14 w-14 text-cyan-400 opacity-80 mb-8" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
              
              <h3 className="text-3xl font-bold text-white mb-8">Lo que nuestros clientes dicen sobre nosotros</h3>
              
              <div className="flex items-center">
                <div className="flex -space-x-2">
                  <div className="w-10 h-10 rounded-full border-2 border-slate-800 flex items-center justify-center bg-white">
                    <Image src="/partners/MT_Performance (1).png" width={32} height={32} alt="MT Performance" className="rounded-full" />
                  </div>
                  <div className="w-10 h-10 rounded-full border-2 border-slate-800 flex items-center justify-center bg-white">
                    <Image src="/partners/medibelle.png" width={32} height={32} alt="Medibelle" className="rounded-full" />
                  </div>
                  <div className="w-10 h-10 rounded-full border-2 border-slate-800 flex items-center justify-center bg-white">
                    <Image src="/partners/Metenco.png" width={32} height={32} alt="METENCO" className="rounded-full" />
                  </div>
                </div>
                <div className="ml-4">
                  <div className="flex items-center mb-1">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                      </svg>
                    ))}
                  </div>
                  <p className="text-sm text-slate-400">de más de 24 clientes</p>
                </div>
              </div>
            </div>
            
            <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-slate-800/70 backdrop-blur-sm p-6 rounded-xl border border-slate-700 hover:border-slate-600 transition-all duration-300">
                <p className="text-slate-300 mb-6">"El equipo de InnovaTech entendió nuestras necesidades desde el primer día. La implementación fue impecable y los resultados superaron nuestras expectativas."</p>
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-black flex items-center justify-center mr-4">
                    <Image src="/partners/MT_Performance (1).png" width={30} height={30} alt="MT Performance" 
                           style={{ filter: "brightness(1.2)" }} />
                  </div>
                  <div>
                    <p className="font-medium text-white text-sm">Ing. Mario</p>
                    <p className="text-xs text-slate-400">CEO, MT Performance</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-slate-800/70 backdrop-blur-sm p-6 rounded-xl border border-slate-700 hover:border-slate-600 transition-all duration-300">
                <p className="text-slate-300 mb-6">"La solución personalizada que desarrollaron transformó completamente nuestra forma de trabajar, reduciendo costos y mejorando la experiencia de nuestros pacientes."</p>
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center mr-4">
                    <Image src="/partners/medibelle.png" width={30} height={30} alt="Medibelle" />
                  </div>
                  <div>
                    <p className="font-medium text-white text-sm">Dra. Abigail</p>
                    <p className="text-xs text-slate-400">CEO, Medibelle</p>
                  </div>
                </div>
              </div>

              <div className="md:col-span-2 bg-gradient-to-r from-slate-800/80 to-slate-800/60 backdrop-blur-sm p-6 rounded-xl border border-slate-700 hover:border-slate-600 transition-all duration-300">
                <p className="text-slate-300 mb-6">"La implementación del sistema de mantenimiento predictivo ha sido un cambio revolucionario para nuestra operación. La capacidad de prevenir fallas antes de que ocurran y la precisión de las alertas han superado todas nuestras expectativas."</p>
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center mr-4">
                    <Image src="/partners/Metenco.png" width={30} height={30} alt="METENCO" />
                  </div>
                  <div>
                    <p className="font-medium text-white text-sm">Roberto Gutiérrez</p>
                    <p className="text-xs text-slate-400">CEO, METENCO</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
        
      </div>
      
      {/* CTA */}
      <div className="mt-24 max-w-5xl mx-auto px-4">
        <motion.div 
          className="bg-gradient-to-r from-blue-600 to-cyan-500 rounded-2xl overflow-hidden shadow-2xl relative"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="absolute inset-0 bg-[url('/circuit-pattern-light.png')] mix-blend-soft-light opacity-20"></div>
          <div className="p-12 md:p-16 relative z-10 flex flex-col md:flex-row md:items-center md:justify-between">
            <div className="mb-8 md:mb-0 md:mr-8">
              <h3 className="text-3xl font-bold text-white mb-4">¿Listo para transformar tu negocio?</h3>
              <p className="text-blue-100">Descubre cómo nuestras soluciones tecnológicas pueden potenciar tu empresa.</p>
            </div>
            <motion.a 
              href="#contacto"
              className="inline-flex items-center px-8 py-4 bg-white text-blue-600 rounded-lg text-lg font-semibold shadow-lg hover:bg-blue-50 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              Contactar ahora
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
              </svg>
            </motion.a>
          </div>
        </motion.div>
      </div>
      {/* Espacio separador entre secciones */}
      <div className="mt-20"></div>
    </section>
  );
};

export default Clientes;
