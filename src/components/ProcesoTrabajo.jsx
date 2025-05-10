"use client";
import { motion } from "framer-motion";
import { useState } from "react";

// Componente para mostrar cada paso del proceso de trabajo
const PasoProcesoCard = ({ numero, titulo, descripcion, delay = 0 }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  // Determinar el color de fondo basado en el número del paso
  let gradientStyle = {};
  
  if (numero % 3 === 1) {
    gradientStyle = { from: "#000052", to: "#303086" };
  } else if (numero % 3 === 2) {
    gradientStyle = { from: "#C5299B", to: "#D76BB3" };
  } else {
    gradientStyle = { from: "#00ECFE", to: "#76F4FF" };
  }
  
  return (
    <motion.div
      className="relative overflow-hidden rounded-xl shadow-lg h-full"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={{ 
        y: -5,
        boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
      }}
    >
      {/* Franja superior con gradiente */}
      <div 
        className="h-2" 
        style={{ background: `linear-gradient(to right, ${gradientStyle.from}, ${gradientStyle.to})` }}
      />
      
      {/* Contenido principal */}
      <div className="bg-white p-6 flex flex-col h-full">
        <div className="flex items-center mb-4">
          <motion.div
            className="w-12 h-12 rounded-full flex items-center justify-center text-white text-lg font-bold mr-4"
            style={{ background: `linear-gradient(135deg, ${gradientStyle.from}, ${gradientStyle.to})` }}
            whileHover={{ rotate: 360 }}
            transition={{ duration: 0.7 }}
          >
            {numero}
          </motion.div>
          <h3 className="text-lg font-bold text-[#000052]">{titulo}</h3>
        </div>
        
        <motion.p 
          className="text-slate-600 text-sm leading-relaxed flex-grow"
          initial={{ height: "auto" }}
        >
          {descripcion}
        </motion.p>
        
        {/* Indicador visual */}
        <motion.div 
          className="mt-4 h-1 w-10 rounded-full"
          style={{ background: `linear-gradient(to right, ${gradientStyle.from}, ${gradientStyle.to})` }}
          initial={{ width: "10%" }}
          whileHover={{ width: "30%" }}
          animate={{ width: isHovered ? "30%" : "10%" }}
          transition={{ duration: 0.3 }}
        />
      </div>
    </motion.div>
  );
};

// Componente para la línea conectora entre pasos con animación
const LineaConectora = () => {
  return (
    <div className="hidden lg:flex items-center justify-center my-6 px-2">
      <motion.div 
        className="h-0.5 bg-gradient-to-r from-[#C5299B] via-[#00ECFE] to-[#000052] w-full opacity-70"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      />
      <motion.div 
        className="w-2 h-2 rounded-full bg-[#00ECFE] mx-1"
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.3, delay: 0.4 }}
      />
    </div>
  );
};

export default function ProcesoTrabajo() {
  // Datos de los pasos del proceso
  const pasos = [
    {
      numero: "1",
      titulo: "Evaluación integral del proyecto",
      descripcion: "Se analiza el proyecto en su totalidad, considerando sus objetivos, costos, recursos y cumplimiento de expectativas.",
      delay: 0.1
    },
    {
      numero: "2", 
      titulo: "Planeación y Simulación",
      descripcion: "Se organiza el proceso de producción, estableciendo tiempos, materiales y metodologías. Además, se realizan simulaciones para prever posibles problemas y optimizar el resultado.",
      delay: 0.2
    },
    {
      numero: "3",
      titulo: "Presupuesto",
      descripcion: "Se elabora un presupuesto detallado con los costos estimados para la realización del proyecto.",
      delay: 0.3
    },
    {
      numero: "4",
      titulo: "Construcción",
      descripcion: "Es la fase de construcción o ensamblaje de los componentes del proyecto. Se siguen especificaciones técnicas y estándares de calidad para asegurar el correcto funcionamiento.",
      delay: 0.4
    },
    {
      numero: "5",
      titulo: "Control de calidad del proyecto",
      descripcion: "Se realizan verificaciones técnicas y de calidad dentro de la empresa para asegurar que el producto cumple con los estándares y especificaciones requeridas.",
      delay: 0.5
    },
    {
      numero: "6",
      titulo: "Inspección detallada del proyecto",
      descripcion: "Se presenta el producto final al cliente para su revisión. Se reciben sugerencias y ajustes para garantizar que cumple con las expectativas.",
      delay: 0.6
    },
    {
      numero: "7",
      titulo: "Entrega",
      descripcion: "Se finaliza el proceso con el envío o instalación del producto, asegurando que el cliente lo recibe en óptimas condiciones y con toda la documentación necesaria.",
      delay: 0.7
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
        </div>

        {/* Proceso de trabajo en diseño de flujo */}
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {pasos.map((paso, index) => (
              <PasoProcesoCard
                key={index}
                numero={paso.numero}
                titulo={paso.titulo}
                descripcion={paso.descripcion}
                delay={index * 0.1}
              />
            ))}
          </div>
          
          {/* Diagrama visual del flujo del proceso (solo visible en pantallas grandes) */}
          <div className="hidden xl:block my-16 relative">
            <div className="h-1 bg-gradient-to-r from-[#000052] via-[#C5299B] to-[#00ECFE] w-full absolute top-1/2 transform -translate-y-1/2 opacity-60"></div>
            <div className="flex justify-between relative">
              {[1, 2, 3, 4, 5, 6, 7].map((num) => (
                <motion.div
                  key={num}
                  className="w-8 h-8 rounded-full bg-white shadow-lg border-2 z-10 flex items-center justify-center font-semibold"
                  style={{ borderColor: num % 3 === 1 ? '#000052' : num % 3 === 2 ? '#C5299B' : '#00ECFE' }}
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: num * 0.1, duration: 0.5 }}
                  whileHover={{ scale: 1.2 }}
                >
                  {num}
                </motion.div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Llamado a la acción con nuevo diseño */}
        <motion.div
          className="mt-20 bg-gradient-to-r from-[#000052] to-[#C5299B] p-12 rounded-2xl shadow-xl max-w-5xl mx-auto text-white"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-6 md:mb-0">
              <h3 className="text-2xl font-bold mb-4">
                ¿Listo para comenzar tu proyecto con nosotros?
              </h3>
              <p className="text-white/80 max-w-xl">
                Nuestro proceso está diseñado para garantizar la excelencia en cada proyecto. 
                Contáctanos hoy mismo y comienza a transformar tus ideas en realidad.
              </p>
            </div>
            <motion.a
              href="#contacto"
              className="px-8 py-4 bg-white text-[#000052] font-bold rounded-lg shadow-lg hover:shadow-xl transition-all inline-block whitespace-nowrap"
              whileHover={{ scale: 1.05, backgroundColor: "#00ECFE", color: "#000052" }}
              whileTap={{ scale: 0.95 }}
            >
              Contáctanos hoy
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}