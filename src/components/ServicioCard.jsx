import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { ChevronRight } from "lucide-react";

export default function ServicioCard({ servicio }) {
  const isParent = servicio.children?.length > 0;
  const [isHovered, setIsHovered] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    return () => setMounted(false);
  }, []);

  // Variantes para animación de la tarjeta principal
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
      boxShadow: "0 15px 30px rgba(0, 194, 255, 0.15)",
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    }
  };

  // Variantes para la animación de los elementos hijo
  const childVariants = {
    hidden: { 
      opacity: 0, 
      height: 0,
      margin: 0,
      padding: 0
    },
    visible: { 
      opacity: 1,
      height: "auto",
      margin: "0.5rem 0",
      padding: "0.75rem",
      transition: {
        duration: 0.4,
        staggerChildren: 0.1
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

  return (
    <motion.div
      className={`relative overflow-hidden bg-white rounded-2xl h-full
        ${isParent 
          ? 'border border-slate-200/80 shadow-lg' 
          : 'border border-slate-100 shadow-md'
        } transition-all duration-300`}
      variants={cardVariants}
      initial="initial"
      animate="animate"
      whileHover="hover"
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      {/* Elementos decorativos de fondo */}
      <motion.div 
        className="absolute top-0 right-0 w-full h-1 bg-gradient-to-r from-[#00C2FF] to-[#000052]"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ delay: 0.2, duration: 0.8 }}
      />
      
      <div className="p-6 h-full flex flex-col">
        <div className="flex items-start gap-4 mb-4">
          <div className={`flex items-center justify-center rounded-xl p-3 w-16 h-16
            ${isParent 
              ? 'bg-gradient-to-br from-[#000052] to-[#001f52]' 
              : 'bg-gradient-to-br from-[#00C2FF]/20 to-[#000052]/10 '
            }`}
          >
            <img 
              src={servicio.icon} 
              alt={servicio.label} 
              className={`h-10 w-10 object-contain ${isParent ? 'brightness-0 invert' : ''}`} 
            />
          </div>
          <div className="flex-1">
            <h3 className={`text-xl font-bold text-[#000052] transition-all
              ${isHovered ? 'translate-x-1' : ''}
              ${isParent ? 'text-xl md:text-2xl' : 'text-lg md:text-xl'}`}
            >
              {servicio.label}
            </h3>
            <motion.div
              className="h-0.5 mt-1.5 bg-[#00C2FF] rounded-full"
              initial={{ width: "0%" }}
              animate={isHovered ? { width: "40%" } : { width: "0%" }}
              transition={{ duration: 0.3 }}
            />
          </div>
          
          {isParent && (
            <motion.button
              className="w-8 h-8 flex items-center justify-center rounded-full bg-slate-100 hover:bg-slate-200 transition-colors"
              onClick={() => setIsExpanded(!isExpanded)}
              whileTap={{ scale: 0.9 }}
              aria-label={isExpanded ? "Colapsar servicios" : "Expandir servicios"}
            >
              <motion.div
                animate={{ rotate: isExpanded ? 90 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <ChevronRight className="w-5 h-5 text-[#000052]" />
              </motion.div>
            </motion.button>
          )}
        </div>
        
        {/* Descripción o mensaje para servicios principales */}
        {isParent && !isExpanded && (
          <p className="text-sm text-slate-500 flex-grow">
            Ofrecemos soluciones profesionales con la más alta calidad y tecnología de punta
          </p>
        )}
        
        {/* Lista de servicios (expandible) */}
        {isParent && (
          <motion.div
            className="w-full overflow-hidden"
            variants={{
              collapsed: { height: 0, opacity: 0 },
              expanded: { height: "auto", opacity: 1 }
            }}
            initial="collapsed"
            animate={isExpanded ? "expanded" : "collapsed"}
            transition={{ duration: 0.4, ease: "easeInOut" }}
          >
            <div className="w-full h-px bg-slate-100 my-4" />
            
            <div className="grid grid-cols-1 gap-2 mt-2">
              {servicio.children.map((child, idx) => (
                <motion.div
                  key={idx}
                  className="flex items-center gap-3 p-3 bg-slate-50 hover:bg-slate-100 rounded-lg transition-colors"
                  custom={idx}
                  variants={childItemVariants}
                  initial="hidden"
                  animate={isExpanded ? "visible" : "hidden"}
                >
                  <div className="flex items-center justify-center w-8 h-8 rounded-md bg-[#000052]/10">
                    <child.icon className="w-4 h-4 text-[#00C2FF]" />
                  </div>
                  <span className="text-sm font-medium text-slate-700">{child.label}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
        
        {/* Botón de ver más para tarjetas sin hijos */}
        {!isParent && (
          <div className="mt-auto pt-4">
            <button
              className="text-sm font-medium text-[#00C2FF] hover:text-[#000052] transition-colors flex items-center gap-1"
              onClick={() => {}}
            >
              Más información
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        )}
      </div>
    </motion.div>
  );
}
