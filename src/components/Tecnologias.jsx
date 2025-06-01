import React, { useState, useEffect } from "react";

export default function Tecnologias() {
  const tecnologias = [
    {
      nombre: "SolidWorks",
      descripcion: "Software líder en diseño CAD 3D para modelado de piezas, ensamblajes y producción de planos.",
      icono: "/cad.png",
      classes: {
        bg: "bg-slate-50",
        text: "text-slate-800",
        button: "bg-slate-800 hover:bg-slate-900",
        ring: "ring-slate-200",
        indicator: "bg-slate-800",
        circle1: "bg-slate-100",
        circle2: "bg-slate-200",
        circle3: "bg-slate-300",
      }
    },
    {
      nombre: "HOMER Pro",
      descripcion: "Software de modelado para sistemas de energía híbrida y renovable, ideal para diseño y optimización de microrredes.",
      icono: "/renovable.png",
      classes: {
        bg: "bg-slate-50",
        text: "text-slate-800",
        button: "bg-slate-800 hover:bg-slate-900",
        ring: "ring-slate-200",
        indicator: "bg-slate-800",
        circle1: "bg-slate-100",
        circle2: "bg-slate-200",
        circle3: "bg-slate-300",
      }
    },
    {
      nombre: "TIA PORTAL",
      descripcion: "Plataforma de software para automatización industrial que integra programación PLC, HMI y sistemas de control avanzados.",
      icono: "/robotica.png",
      classes: {
        bg: "bg-slate-50",
        text: "text-slate-800",
        button: "bg-slate-800 hover:bg-slate-900",
        ring: "ring-slate-200",
        indicator: "bg-slate-800",
        circle1: "bg-slate-100",
        circle2: "bg-slate-200",
        circle3: "bg-slate-300",
      }
    },
    {
      nombre: "LabVIEW",
      descripcion: "Software de ingeniería para aplicaciones de prueba, medición y control con interfaz gráfica de programación.",
      icono: "/electric.png",
      classes: {
        bg: "bg-slate-50",
        text: "text-slate-800",
        button: "bg-slate-800 hover:bg-slate-900",
        ring: "ring-slate-200",
        indicator: "bg-slate-800",
        circle1: "bg-slate-100",
        circle2: "bg-slate-200",
        circle3: "bg-slate-300",
      }
    },
  ];
  
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  
  // Función para navegar al siguiente item
  const nextSlide = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setCurrentIndex((prevIndex) => (prevIndex + 1) % tecnologias.length);
    }
  };
  
  // Función para navegar al item anterior
  const prevSlide = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setCurrentIndex((prevIndex) => 
        prevIndex === 0 ? tecnologias.length - 1 : prevIndex - 1
      );
    }
  };
  
  // Reset de la animación
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsAnimating(false);
    }, 500);
    
    return () => clearTimeout(timer);
  }, [currentIndex]);
  
  // Auto rotación del carrusel
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);
  return (
    <section id="tecnologias" className="py-20 bg-gradient-to-b from-slate-100 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-800 mb-4 relative inline-block">
            Tecnologías
            <span className="absolute bottom-0 left-0 w-full h-0.5 bg-slate-800 transform -translate-y-2"></span>
          </h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto mt-6 leading-relaxed">
            Utilizamos herramientas tecnológicas de última generación para ofrecer soluciones innovadoras y eficientes.
          </p>
        </div>
        
        {/* Carrusel Container */}
        <div className="relative max-w-4xl mx-auto">
          <div className="absolute inset-0 -z-10 bg-slate-100 rounded-lg transform rotate-0 scale-105"></div>
          
          {/* Carrusel Viewport */}
          <div className="relative overflow-hidden rounded-lg shadow-xl">
            {/* Carrusel Track */}
            <div 
              className="flex transition-transform duration-700 ease-out"
              style={{ 
                transform: `translateX(-${currentIndex * (100 / tecnologias.length)}%)`,
                width: '400%',
              }}
            >
              {tecnologias.map((tech, index) => (
                <div 
                  key={index} 
                  className="w-1/4 flex-shrink-0"
                >
                  <div className="p-8">
                    <div className={`bg-white backdrop-blur-sm bg-opacity-90 p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden relative h-full border border-slate-200`}>
                      <div className="flex flex-col md:flex-row items-start justify-between gap-8">
                        <div className="md:w-1/2">
                          <div className="w-20 h-20 mb-6 relative">
                            <img 
                              src={tech.icono} 
                              alt={tech.nombre} 
                              className="w-full h-full object-contain rounded-lg p-2 bg-white shadow-sm"
                            />
                          </div>
                          <h3 className="text-2xl font-bold text-slate-800 mb-4">
                            {tech.nombre}
                          </h3>
                          <p className="text-base text-slate-600 leading-relaxed">
                            {tech.descripcion}
                          </p>
                        </div>
                        
                        <div className="md:w-1/2 flex items-center justify-center">
                          <div className="relative w-48 h-48 flex items-center justify-center">
                            <div className={`absolute inset-0 rounded-full ${tech.classes.circle1} animate-pulse`}></div>
                            <img 
                              src={tech.icono} 
                              alt={tech.nombre} 
                              className="w-32 h-32 object-contain z-10 transform hover:scale-105 transition-all duration-500 relative"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Botones de navegación */}
          <button 
            onClick={prevSlide}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 bg-white rounded-full p-3 shadow-lg z-10 hover:bg-slate-50 transition-colors duration-200 border border-slate-200"
            aria-label="Anterior"
          >
            <svg className="w-6 h-6 text-slate-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          <button 
            onClick={nextSlide}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 bg-white rounded-full p-3 shadow-lg z-10 hover:bg-slate-50 transition-colors duration-200 border border-slate-200"
            aria-label="Siguiente"
          >
            <svg className="w-6 h-6 text-slate-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Indicadores */}
          <div className="flex justify-center mt-8 gap-6">
            {tecnologias.map((tech, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className="group focus:outline-none"
                aria-label={`Ir a tecnología ${tech.nombre}`}
              >
                <div className="flex flex-col items-center">
                  <div className={`w-12 h-1 rounded-full mb-2 transition-all duration-300 ${
                    index === currentIndex ? 'bg-slate-800' : 'bg-slate-300 group-hover:bg-slate-400'
                  }`}></div>
                  <span className={`text-sm font-medium transition-colors duration-300 ${
                    index === currentIndex ? 'text-slate-800' : 'text-slate-500 group-hover:text-slate-700'
                  }`}>
                    {tech.nombre}
                  </span>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
