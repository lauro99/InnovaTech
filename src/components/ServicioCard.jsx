import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export default function ServicioCard({ servicio }) {
  const isParent = servicio.children?.length > 0;
  const [isHovered, setIsHovered] = useState(false);
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
      rotateX: 15,
    },
    animate: { 
      opacity: 1, 
      y: 0,
      rotateX: 0,
      transition: { 
        duration: 0.6,
        ease: [0.215, 0.61, 0.355, 1] // easeOutCubic
      }
    },
    hover: {
      scale: 1.03,
      boxShadow: "0 15px 35px rgba(0, 194, 255, 0.2)",
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    }
  };

  // Variantes para la animación de los elementos hijo
  const childVariants = {
    initial: { 
      opacity: 0, 
      y: 15,
      x: 10
    },
    animate: (i) => ({ 
      opacity: 1, 
      y: 0,
      x: 0,
      transition: { 
        duration: 0.45, 
        delay: 0.1 + (i * 0.08),
        ease: "easeOut" 
      }
    }),
    hover: {
      scale: 1.05,
      backgroundColor: "rgba(0, 194, 255, 0.1)",
      boxShadow: "0 4px 12px rgba(0, 0, 82, 0.1)",
      transition: {
        duration: 0.2
      }
    }
  };
  return (
    <motion.div
      className={`relative overflow-hidden p-6 bg-gradient-to-b from-white to-slate-50 rounded-2xl ${
        isParent 
          ? 'col-span-full shadow-lg border border-[#00C2FF]/20' 
          : 'shadow-md border border-slate-100'
      }`}
      variants={cardVariants}
      initial="initial"
      whileInView="animate"
      whileHover="hover"
      viewport={{ once: true }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      style={{
        perspective: "1000px"
      }}
    >
      {/* Elementos decorativos de fondo */}
      <motion.div 
        className="absolute -bottom-10 -right-10 w-40 h-40 rounded-full bg-gradient-to-tr from-[#00C2FF]/10 to-transparent -z-10"
        animate={isHovered ? { scale: 1.3, opacity: 0.7 } : { scale: 1, opacity: 0.3 }}
        transition={{ duration: 0.5 }}
      />
      
      <motion.div
        className="absolute -top-24 -left-24 w-48 h-48 rounded-full bg-[#000052]/5 -z-10 blur-3xl"
        animate={isHovered ? { opacity: 0.8 } : { opacity: 0.3 }}
        transition={{ duration: 0.5 }}
      />
      
      <motion.div 
        className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#00C2FF] to-[#000052] origin-left"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2, duration: 0.8 }}
      />
      
      <motion.div 
        className="absolute top-0 right-0 w-24 h-24 -z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: mounted ? 1 : 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        {isParent && (
          <svg width="100%" height="100%" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M100 0L100 30C100 37.3152 100 40.9728 98.3679 43.8863C96.9047 46.4579 94.4579 48.5047 91.8863 49.9679C88.9728 51.6 85.3152 51.6 78 51.6H0" stroke="#00C2FF" strokeOpacity="0.2" strokeWidth="2"/>
          </svg>
        )}
      </motion.div>

      <div className="flex flex-col md:flex-row md:items-center gap-6 mb-6">
        <motion.div
          className={`flex items-center justify-center rounded-xl 
            ${isParent 
              ? 'bg-gradient-to-br from-[#000052] to-[#000046] p-3 md:p-4' 
              : 'bg-[#000052]/10 p-3 md:p-4'
            }`}
          whileHover={{ 
            rotate: [0, -5, 5, -3, 0],
            scale: 1.05,
            transition: { duration: 0.5 }
          }}
        >
          <img 
            src={servicio.icon} 
            alt={servicio.label} 
            className={`h-12 md:h-16 object-contain ${isParent ? 'brightness-0 invert' : ''}`} 
          />
        </motion.div>
        <motion.div 
          className="flex flex-col"
          animate={isHovered ? { x: 5 } : { x: 0 }}
          transition={{ duration: 0.3 }}
        >
          <span className={`${
            isParent 
              ? 'text-2xl md:text-3xl font-bold' 
              : 'text-xl md:text-2xl font-semibold'
            } text-[#000052]`}>
            {servicio.label}
          </span>
          {!isParent && (
            <motion.div
              className="h-0.5 mt-1 w-0 bg-[#00C2FF] rounded-full"
              animate={isHovered ? { width: "60%" } : { width: "0%" }}
              transition={{ duration: 0.3 }}
            />
          )}
          {isParent && (
            <span className="text-sm text-slate-500 mt-1 max-w-lg">
              Servicios profesionales con la más alta calidad y tecnología de punta
            </span>
          )}
        </motion.div>
      </div>      {isParent && (
        <>
          <motion.div 
            className="w-full h-px bg-slate-200 my-4"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          />
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-4">
            {servicio.children.map((child, idx) => (
              <motion.div
                key={idx}
                className="group flex items-center gap-4 p-5 bg-white border border-slate-100 rounded-xl shadow-sm backdrop-blur-sm relative overflow-hidden"
                variants={childVariants}
                custom={idx}
                initial="initial"
                whileInView="animate"
                whileHover="hover"
                viewport={{ once: true }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-[#00C2FF]/0 to-[#00C2FF]/0 group-hover:from-[#00C2FF]/5 group-hover:to-[#000052]/5 transition-colors duration-300" />
                
                <motion.div 
                  className="relative z-10 flex items-center justify-center w-10 h-10 rounded-lg bg-gradient-to-br from-[#00C2FF]/10 to-[#000052]/10"
                  whileHover={{
                    scale: 1.1,
                    transition: { duration: 0.2 }
                  }}
                >
                  <child.icon className="w-5 h-5 text-[#00C2FF]" />
                </motion.div>
                
                <div className="relative z-10 flex flex-col">
                  <span className="text-base md:text-lg font-medium text-[#000052]">{child.label}</span>
                  <motion.div
                    className="h-0.5 w-0 bg-[#00C2FF]/50 rounded-full mt-0.5"
                    initial={{ width: "0%" }}
                    whileHover={{ width: "80%" }}
                    transition={{ duration: 0.3 }}
                  />
                </div>
                
                <motion.div 
                  className="absolute bottom-0 right-0 w-8 h-8 rounded-tl-xl bg-[#000052]/5 -z-0 opacity-0 group-hover:opacity-100"
                  transition={{ duration: 0.3 }}
                />
              </motion.div>
            ))}
          </div>
        </>
      )}
    </motion.div>
  );
}
