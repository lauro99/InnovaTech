"use client";
import { motion } from "framer-motion";
import { useState } from "react";

// Componente para mostrar cada paso del proceso de trabajo
const PasoProcesoCard = ({ numero, titulo, descripcion, delay = 0, tiempo, icon }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  // Determinar el color de fondo basado en el número del paso
  let gradientStyle = {};
  
  if (numero % 3 === 1) {
    gradientStyle = { from: "#000052", to: "#303086", icon: icon || "🔍" }; // Evaluación
  } else if (numero % 3 === 2) {
    gradientStyle = { from: "#C5299B", to: "#D76BB3", icon: icon || "⚙️" }; // Planeación/Construcción
  } else {
    gradientStyle = { from: "#00ECFE", to: "#76F4FF", icon: icon || "✓" }; // Completado/Entrega
  }
  
  return (
    <motion.div
      className="relative overflow-hidden rounded-xl shadow-lg h-full backdrop-blur-sm bg-white/80 border border-white/20"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={{ 
        y: -8,
        scale: 1.02,
        boxShadow: "0 25px 30px -5px rgba(0, 0, 0, 0.15), 0 10px 15px -5px rgba(0, 0, 0, 0.08)"
      }}
    >
      {/* Elemento decorativo de fondo */}
      <motion.div 
        className="absolute -right-10 -top-10 w-40 h-40 rounded-full opacity-10 z-0"
        style={{ background: `radial-gradient(circle, ${gradientStyle.from} 0%, transparent 70%)` }}
        animate={{ 
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          repeatType: "reverse"
        }}
      />
      
      {/* Borde superior con gradiente */}
      <div 
        className="h-3 rounded-t-xl" 
        style={{ background: `linear-gradient(to right, ${gradientStyle.from}, ${gradientStyle.to})` }}
      />
      
      {/* Contenido principal */}
      <div className="p-7 flex flex-col h-full bg-white/60 backdrop-blur-sm relative z-10">
        <div className="flex items-center mb-5">
          <motion.div
            className="w-14 h-14 rounded-lg flex items-center justify-center text-white text-xl font-bold mr-5 shadow-md"
            style={{ background: `linear-gradient(135deg, ${gradientStyle.from}, ${gradientStyle.to})` }}
            whileHover={{ scale: 1.1, rotate: 10 }}
            transition={{ duration: 0.4 }}
          >
            <span className="mr-1">{gradientStyle.icon}</span>{numero}
          </motion.div>
          <h3 className="text-xl font-bold bg-gradient-to-r from-[#000052] to-[#C5299B] bg-clip-text text-transparent">{titulo}</h3>
        </div>
          <motion.p 
          className="text-slate-600 text-base leading-relaxed flex-grow"
          initial={{ height: "auto" }}
        >
          {descripcion}
        </motion.p>

        {/* Información de tiempo estimado */}
        {tiempo && (
          <div className="mt-4 flex items-center text-sm font-medium text-slate-500">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            Tiempo estimado: {tiempo}
          </div>
        )}
        
        {/* Indicador visual */}
        <motion.div 
          className="mt-5 h-1.5 rounded-full"
          style={{ background: `linear-gradient(to right, ${gradientStyle.from}, ${gradientStyle.to})` }}
          initial={{ width: "15%" }}
          animate={{ width: isHovered ? "50%" : "15%" }}
          transition={{ duration: 0.5 }}
        />
      </div>
    </motion.div>
  );
};

// Componente para la línea conectora entre pasos con animación
const LineaConectora = ({ etapa }) => {
  return (
    <div className="hidden lg:flex items-center justify-center my-6 px-2 relative">
      {/* Línea base */}
      <motion.div 
        className="h-1 bg-gradient-to-r from-[#C5299B] via-[#00ECFE] to-[#000052] w-full opacity-60"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      />
      
      {/* Partículas animadas */}
      <motion.div 
        className="absolute top-1/2 transform -translate-y-1/2 w-3 h-3 rounded-full bg-white shadow-[0_0_10px_rgba(0,236,254,0.7)]"
        animate={{ 
          x: ["0%", "100%"],
          backgroundColor: ["#C5299B", "#00ECFE", "#000052", "#C5299B"],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "linear",
          times: [0, 1],
          backgroundColor: {
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }
        }}
      />
      
      {/* Nodo de etapa */}
      <motion.div 
        className="absolute top-1/2 transform -translate-y-1/2 left-1/2 -translate-x-1/2 w-5 h-5 rounded-full bg-[#C5299B] border-2 border-white shadow-lg z-10"
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        whileHover={{ scale: 1.5 }}
        transition={{ duration: 0.3, delay: 0.4 }}
      >
        <span className="absolute -top-8 left-1/2 transform -translate-x-1/2 text-xs font-bold text-[#000052] whitespace-nowrap">
          {etapa}
        </span>
      </motion.div>
    </div>
  );
};

export default function ProcesoTrabajo() {
  // Estado para el paso activo
  const [pasoActivo, setPasoActivo] = useState(null);
    // Datos de los pasos del proceso organizados por fases
  const pasos = [
    {
      numero: "1",
      titulo: "Evaluación integral del proyecto",
      descripcion: "Se analiza el proyecto en su totalidad, considerando sus objetivos, alcances, recursos necesarios y expectativas del cliente para definir una ruta de trabajo óptima.",
      delay: 0.1,
      fase: "Inicial",
      icon: "📋",
      tiempo: "1-2 dias"
    },
    {
      numero: "2", 
      titulo: "Planeación y Simulación",
      descripcion: "Organizamos el proceso de producción con tiempos, materiales y metodologías específicas. Realizamos simulaciones digitales para anticipar problemas y optimizar resultados antes de comenzar.",
      delay: 0.2,
      fase: "Inicial",
      icon: "🔄",
      tiempo: "2-3 dias"
    },
    {
      numero: "3",
      titulo: "Presupuesto Detallado",
      descripcion: "Elaboramos un presupuesto transparente con los costos estimados de cada fase del proyecto, materiales de alta calidad y tiempos de ejecución garantizados.",
      delay: 0.3,
      fase: "Planificación",
      icon: "💰",
      tiempo: "1-2 dias"
    },
    {
      numero: "4",
      titulo: "Construcción e Implementación",
      descripcion: "Ejecutamos la fase de construcción o ensamblaje de componentes siguiendo especificaciones técnicas y estándares internacionales de calidad para asegurar un funcionamiento óptimo.",
      delay: 0.4,
      fase: "Ejecución",
      icon: "🔨",
      tiempo: "4-8 dias"
    },
    {
      numero: "5",
      titulo: "Control de calidad interno",
      descripcion: "Realizamos verificaciones técnicas rigurosas y pruebas de calidad dentro de nuestra empresa para asegurar que el producto cumple o supera los estándares y especificaciones requeridas.",
      delay: 0.5,
      fase: "Control",
      icon: "⚙️",
      tiempo: "1-2 dias"
    },
    {
      numero: "6",
      titulo: "Inspección con el cliente",
      descripcion: "Presentamos el producto final al cliente para su revisión. Recibimos sugerencias y realizamos ajustes finales para garantizar que cumple o supera todas las expectativas iniciales.",
      delay: 0.6,
      fase: "Validación",
      icon: "👁️",
      tiempo: "1-2 dias"
    },
    {
      numero: "7",
      titulo: "Retroalimentación e Iteración",
      descripcion: "Implementamos un ciclo de retroalimentación donde integramos los comentarios del cliente y realizamos ajustes iterativos para perfeccionar el producto. Este proceso asegura que la solución final esté completamente alineada con la visión del cliente.",
      delay: 0.65,
      fase: "Iteración",
      icon: "🔄",
      tiempo: "1-2 dias"
    },
    {
      numero: "8",
      titulo: "Entrega e Implementación final",
      descripcion: "Completamos el proceso con el envío o instalación profesional del producto, asegurando que el cliente lo recibe en óptimas condiciones, con capacitación de uso y toda la documentación técnica necesaria.",
      delay: 0.7,
      fase: "Final",
      icon: "🚀",
      tiempo: "1-2 dias"
    },
  ];
  return (
    <section id="proceso" className="py-24 relative overflow-hidden">
      {/* Fondo con efecto de degradado */}
      <div className="absolute inset-0 bg-gradient-to-b from-white to-gray-50"></div>
      
      {/* Elementos decorativos de fondo */}
      <motion.div 
        className="absolute left-0 top-20 w-72 h-72 rounded-full bg-[#00ECFE]/5 blur-3xl -z-10"
        animate={{ 
          x: [0, 20, 0],
          y: [0, 30, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          repeatType: "reverse"
        }}
      />
      <motion.div 
        className="absolute right-0 bottom-20 w-96 h-96 rounded-full bg-[#C5299B]/5 blur-3xl -z-10"
        animate={{ 
          x: [0, -30, 0],
          y: [0, -20, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          repeatType: "reverse"
        }}
      />
      <motion.div 
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-[#000052]/3 blur-[100px] -z-10 opacity-20"
        animate={{ 
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          repeatType: "reverse"
        }}
      />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Título de la sección con nuevo diseño */}
        <div className="max-w-5xl mx-auto mb-20">
          <motion.div 
            className="inline-block px-6 py-2 bg-gradient-to-r from-[#000052] to-[#C5299B] rounded-lg shadow-lg text-white mb-4"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-sm uppercase tracking-wider font-medium">Método InnovaTech</span>
          </motion.div>
          
          <motion.h2
            className="text-4xl md:text-5xl font-extrabold mb-6 bg-gradient-to-r from-[#000052] via-[#C5299B] to-[#00ECFE] text-transparent bg-clip-text"
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Nuestro Proceso de Trabajo
          </motion.h2>
          
          <motion.p 
            className="text-lg text-slate-600 max-w-3xl"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            En InnovaTech contamos con una metodología de trabajo probada que garantiza el éxito de nuestros proyectos. 
            Cada fase está cuidadosamente diseñada para asegurar que entregamos soluciones de alta calidad 
            que superan las expectativas de nuestros clientes.
          </motion.p>
        </div>        {/* Timeline del proceso (visible en pantallas grandes) */}
        <div className="hidden md:block max-w-6xl mx-auto mb-16">
          <motion.div 
            className="relative pt-10 pb-20"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            {/* Línea de tiempo central */}
            <div className="absolute top-0 bottom-0 left-1/2 w-1 bg-gradient-to-b from-[#000052] via-[#C5299B] to-[#00ECFE] transform -translate-x-1/2"></div>
            
            {/* Fases del proceso */}
            {pasos.map((paso, index) => (
              <motion.div 
                key={index}
                className={`flex items-center mb-16 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: index * 0.1 }}
                onMouseEnter={() => setPasoActivo(index)}
                onMouseLeave={() => setPasoActivo(null)}
              >
                {/* Tarjeta con info */}
                <div className={`w-5/12 ${index % 2 === 0 ? 'text-right pr-8' : 'text-left pl-8'}`}>
                  <motion.div 
                    className="bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-lg border border-white/30"
                    whileHover={{ scale: 1.03, y: -5 }}
                    animate={{ 
                      boxShadow: pasoActivo === index ? 
                        "0 20px 25px -5px rgba(0, 0, 0, 0.15), 0 10px 10px -5px rgba(0, 0, 0, 0.1)" : 
                        "0 4px 6px -1px rgba(0, 0, 0, 0.1)"
                    }}
                  >
                    <div className={`flex items-center mb-3 ${index % 2 === 0 ? 'justify-end' : 'justify-start'}`}>
                      <span className="px-3 py-1 text-xs font-semibold rounded-full bg-gradient-to-r from-[#000052] to-[#C5299B] text-white">
                        Fase: {paso.fase}
                      </span>
                    </div>
                    
                    <h3 className="text-xl font-bold text-[#000052] mb-3">{paso.titulo}</h3>
                    <p className="text-slate-600">{paso.descripcion}</p>
                  </motion.div>
                </div>
                
                {/* Nodo central */}
                <motion.div 
                  className="absolute left-1/2 transform -translate-x-1/2 w-12 h-12 rounded-full bg-white border-4 z-10 flex items-center justify-center"
                  style={{ 
                    borderColor: paso.numero % 3 === 1 ? '#000052' : paso.numero % 3 === 2 ? '#C5299B' : '#00ECFE',
                    background: `linear-gradient(135deg, white, ${paso.numero % 3 === 1 ? '#303086' : paso.numero % 3 === 2 ? '#D76BB3' : '#76F4FF'}30)`
                  }}
                  whileHover={{ scale: 1.2, rotate: 360 }}
                  animate={{ 
                    scale: pasoActivo === index ? 1.2 : 1,
                    boxShadow: pasoActivo === index ? 
                      "0 0 15px 5px rgba(197, 41, 155, 0.3)" : 
                      "none"
                  }}
                  transition={{ duration: 0.4 }}
                >
                  <span className="text-xl">{paso.icon}</span>
                </motion.div>
                
                {/* Número de fase */}
                <div className={`w-5/12 ${index % 2 === 0 ? 'text-left pl-8' : 'text-right pr-8'}`}>
                  <motion.div 
                    className="inline-flex items-center justify-center w-14 h-14 rounded-full text-2xl font-bold text-white"
                    style={{ 
                      background: `linear-gradient(135deg, ${paso.numero % 3 === 1 ? '#000052' : paso.numero % 3 === 2 ? '#C5299B' : '#00ECFE'}, 
                                ${paso.numero % 3 === 1 ? '#303086' : paso.numero % 3 === 2 ? '#D76BB3' : '#76F4FF'})` 
                    }}
                    whileHover={{ scale: 1.1, rotate: 10 }}
                  >
                    {paso.numero}
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>        {/* Proceso de trabajo en diseño de tarjetas (visible en todos los tamaños) */}
        <div className="md:hidden max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8">
            {pasos.map((paso, index) => (
              <PasoProcesoCard
                key={index}
                numero={paso.numero}
                titulo={paso.titulo}
                descripcion={paso.descripcion}
                delay={index * 0.1}
                tiempo={paso.tiempo}
                icon={paso.icon}
              />
            ))}
          </div>
        </div>
            {/* Diagrama visual interactivo del flujo del proceso - estilo minimalista moderno */}
        <div className="hidden xl:block my-20 relative max-w-5xl mx-auto bg-white/30 backdrop-blur-sm p-14 rounded-xl border border-white/20 shadow-lg">
          <h3 className="text-2xl font-bold text-center mb-12 bg-gradient-to-r from-[#000052] via-[#C5299B] to-[#00ECFE] text-transparent bg-clip-text">
            Flujo del Proyecto InnovaTech
          </h3>
          
          {/* Línea de tiempo principal con gradiente */}
          <div className="h-1.5 bg-gradient-to-r from-[#000052] via-[#C5299B] to-[#00ECFE] w-full absolute top-36 left-0 opacity-70"></div>
          
          {/* Contenedor principal de pasos */}
          <div className="flex justify-between relative mx-5">
            {pasos.map((paso, index) => (
              <div key={index} className="flex flex-col items-center relative">
                {/* Nodos del proceso */}
                <motion.div
                  className="w-16 h-16 rounded-full bg-white shadow-lg border-3 z-10 flex items-center justify-center font-bold cursor-pointer"
                  style={{ 
                    borderColor: paso.numero % 3 === 1 ? '#000052' : paso.numero % 3 === 2 ? '#C5299B' : '#00ECFE',
                    boxShadow: '0 0 20px rgba(0,0,0,0.1)'
                  }}
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  whileHover={{ 
                    scale: 1.2,
                    boxShadow: '0 0 25px rgba(0,236,254,0.4)'
                  }}
                >
                  <div className="flex flex-col items-center justify-center">
                    <span className="text-xl">{paso.icon}</span>
                    <span className="text-sm">{paso.numero}</span>
                  </div>
                </motion.div>
                
                {/* Información del paso */}
                <div className="flex flex-col items-center mt-7">
                  {/* Título del paso */}
                  <motion.p
                    className="text-sm font-bold text-[#000052] text-center max-w-[110px] mb-1"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.15, duration: 0.5 }}
                  >
                    {paso.titulo}
                  </motion.p>
                  
                  {/* Fase del proceso */}
                  <motion.span
                    className="text-xs text-[#C5299B] font-medium"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.15 + 0.1, duration: 0.5 }}
                  >
                    {paso.fase}
                  </motion.span>
                  
                  {/* Tiempo estimado */}
                  {paso.tiempo && (
                    <motion.div
                      className="mt-2 text-xs text-slate-500 flex items-center"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.15 + 0.2, duration: 0.5 }}
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      {paso.tiempo}
                    </motion.div>
                  )}
                </div>
              </div>
            ))}
          </div>
            {/* Se eliminaron las partículas animadas */}
        </div>
          {/* Llamado a la acción mejorado */}
        <motion.div
          className="mt-20 relative overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="max-w-5xl mx-auto bg-gradient-to-r from-[#000052] to-[#C5299B] p-16 rounded-3xl shadow-2xl text-white relative z-10">
            {/* Elementos decorativos */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-[#00ECFE]/10 rounded-full blur-3xl -z-1"></div>
            <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-[#C5299B]/10 rounded-full blur-3xl -z-1"></div>
            
            {/* Patrón de puntos */}
            <div className="absolute inset-0 opacity-20">
              <div className="grid grid-cols-12 gap-4 h-full">
                {[...Array(48)].map((_, i) => (
                  <div key={i} className="flex items-center justify-center">
                    <motion.div 
                      className="w-1.5 h-1.5 rounded-full bg-white"
                      animate={{
                        opacity: [0.3, 0.8, 0.3],
                        scale: [1, 1.2, 1],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        delay: i * 0.05 % 2,
                      }}
                    />
                  </div>
                ))}
              </div>
            </div>
            
            <div className="flex flex-col md:flex-row items-center justify-between gap-10 relative z-10">
              <div className="mb-6 md:mb-0">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <span className="inline-block px-4 py-1.5 bg-white/10 backdrop-blur-sm rounded-full text-sm font-medium mb-4">
                    Metodología probada ✓
                  </span>
                </motion.div>
                
                <motion.h3 
                  className="text-3xl font-extrabold mb-5 leading-tight"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                >
                  ¿Listo para transformar tus ideas<br className="hidden md:block"/> en soluciones innovadoras?
                </motion.h3>
                
                <motion.p 
                  className="text-white/90 max-w-xl text-lg"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                >
                  Nuestro proceso está diseñado meticulosamente para garantizar 
                  la excelencia en cada etapa. Contáctanos hoy y da el primer
                  paso hacia el éxito de tu proyecto.
                </motion.p>
              </div>
              
              <motion.div
                className="flex flex-col sm:flex-row md:flex-col gap-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.8 }}
              >
                <motion.a
                  href="#contacto"
                  className="px-8 py-5 bg-white text-[#000052] font-bold rounded-xl shadow-lg hover:shadow-2xl transition-all inline-flex items-center justify-center gap-2 text-center"
                  whileHover={{ 
                    scale: 1.05, 
                    backgroundColor: "#00ECFE",
                    boxShadow: "0 0 25px rgba(0,236,254,0.5)"
                  }}
                  whileTap={{ scale: 0.98 }}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                  Contáctanos ahora
                </motion.a>
                
                <motion.a
                  href="#servicios"
                  className="px-8 py-5 border-2 border-white/30 backdrop-blur-sm text-white font-bold rounded-xl hover:bg-white/10 transition-all inline-flex items-center justify-center gap-2 text-center"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                  Ver servicios
                </motion.a>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}