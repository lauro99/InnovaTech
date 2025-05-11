import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import { ChevronRight, X } from "lucide-react";

export default function ServicioCard({ servicio }) {
  const isParent = servicio.children?.length > 0;
  const [isHovered, setIsHovered] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [mounted, setMounted] = useState(false);
  const cardRef = useRef(null);
  
  // Reset expanded state when service changes (important for filtering)
  useEffect(() => {
    setIsExpanded(false);
  }, [servicio]);

  useEffect(() => {
    setMounted(true);
    return () => setMounted(false);
  }, []);

  // Cerrar el menú cuando se hace clic fuera de la tarjeta
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (cardRef.current && !cardRef.current.contains(event.target)) {
        setIsExpanded(false);
      }
    };

    if (isExpanded) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isExpanded]);

  // Variantes para animación de la tarjeta
  const cardVariants = {
    initial: { 
      opacity: 0, 
      y: 30,
    },
    animate: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.5,
        ease: [0.25, 0.1, 0.25, 1] 
      }
    },
    hover: {
      y: -5,
      scale: 1.05,
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    }
  };

  const childItemVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: (i) => ({ 
      opacity: 1, 
      x: 0,
      transition: { 
        duration: 0.3, 
        delay: i * 0.05
      }
    })
  };

  // Asignar colores basados en categoría (para usar en el modal)
  let themeColor;
  switch(servicio.categoria) {
    case "electric":
      themeColor = "#00C2FF"; // Azul
      break;
    case "desarrollo":
      themeColor = "#96c93d"; // Verde
      break;
    case "robotica":
      themeColor = "#000052"; // Azul oscuro
      break;
    case "renovable":
      themeColor = "#C5299B"; // Púrpura
      break;
    case "formacion":
      themeColor = "#FFA500"; // Naranja
      break;
    default:
      themeColor = "#00C2FF";
  }

  // Renderizar un modal para los servicios hijos
  const renderModal = () => {
    if (!isParent || !isExpanded) return null;
    
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
        <div 
          className="bg-white rounded-xl shadow-2xl p-5 w-full max-w-md mx-4 relative"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <div 
                className="w-12 h-12 rounded-full flex items-center justify-center overflow-hidden shadow-md"
              >
                <img 
                  src={servicio.icon}
                  alt={servicio.label}
                  className="h-8 w-8 object-contain"
                />
              </div>
              <h3 className="font-bold text-xl text-gray-800">{servicio.label}</h3>
            </div>
            <button 
              className="p-1 rounded-full hover:bg-gray-100 transition-colors"
              onClick={() => setIsExpanded(false)}
            >
              <X className="w-5 h-5 text-gray-700" />
            </button>
          </div>
          
          <div className="h-px w-full bg-gray-200 mb-4"></div>
          
          <div className="max-h-[60vh] overflow-y-auto">
            {servicio.children.map((child, idx) => (
              <motion.div
                key={idx}
                className="flex items-center gap-3 p-3 hover:bg-slate-50 rounded-lg transition-colors"
                custom={idx}
                variants={childItemVariants}
                initial="hidden"
                animate="visible"
              >
                <div className="flex items-center justify-center w-8 h-8 rounded-full" style={{ backgroundColor: `${themeColor}20` }}>
                  <child.icon className="w-4 h-4" style={{ color: themeColor }} />
                </div>
                <span className="text-base font-medium text-slate-700">{child.label}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    );
  };

  return (
    <>      <motion.div
        ref={cardRef}
        className="relative flex flex-col items-center justify-center gap-2"
        variants={cardVariants}
        initial="initial"
        animate="animate"
        whileHover="hover"
        key={servicio.label} // Add key for proper animation reset
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
      >        {/* Imagen circular */}
        <div className="w-24 h-24 md:w-28 md:h-28 rounded-full bg-white shadow-lg flex items-center justify-center overflow-hidden p-2">
          <img 
            src={servicio.icon} 
            alt={servicio.label}
            className="w-16 h-16 md:w-20 md:h-20 object-contain"
            loading="eager" // Eager loading for immediate visibility
            onError={(e) => {
              // Fallback if image fails to load
              e.target.src = "/default-service-icon.png";
              e.target.onerror = null;
            }}
          />
        </div>
        
        {/* Etiqueta del servicio */}
        <h3 
          className="text-center font-medium text-sm md:text-base"
          title={servicio.label}
        >
          {servicio.label}
        </h3>

        {/* Indicador visual de que hay elementos adicionales */}
        {isParent && (
          <div 
            className="absolute top-0 right-0 m-1 w-5 h-5 rounded-full bg-white flex items-center justify-center cursor-pointer shadow-md hover:bg-gray-100 transition-colors"
            onClick={(e) => {
              e.stopPropagation();
              setIsExpanded(true);
            }}
          >
            <ChevronRight className="w-3 h-3" style={{ color: themeColor }} />
          </div>
        )}

        {/* Botón invisible que cubre toda la tarjeta para expandir detalles */}
        {isParent && (
          <button
            className="absolute inset-0 w-full h-full z-10 cursor-pointer opacity-0"
            onClick={() => setIsExpanded(true)}
            aria-label={isExpanded ? "Colapsar servicios" : "Expandir servicios"}
          />
        )}
      </motion.div>

      {/* Modal que se muestra cuando se expande (fuera del flujo normal para evitar solapamiento) */}
      <AnimatePresence>
        {isExpanded && renderModal()}
      </AnimatePresence>
    </>
  );
}
