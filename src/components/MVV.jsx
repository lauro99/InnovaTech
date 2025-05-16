import { motion } from "framer-motion";
import { useState } from "react";

export default function MVV() {
  const [hoveredCard, setHoveredCard] = useState(null);
  // Variantes para animaciones
  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 40
    },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.7,
        ease: "easeOut"
      }
    }),
    hover: {
      boxShadow: "0 15px 30px -12px rgba(0, 194, 255, 0.15)",
      transition: {
        duration: 0.3
      }
    }
  };

  // Variantes para líneas de conexión
  const lineVariants = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: {
      pathLength: 1,
      opacity: 1,
      transition: { 
        delay: 0.8,
        duration: 1.5, 
        ease: "easeInOut" 
      }
    }
  };

  // Datos de las tarjetas
  const cards = [
    {
      id: "mision",
      title: "MISIÓN",
      image: "/mision.png",
      content: "Ofrecer soluciones tecnológicas de vanguardia",
      bgColor: "from-[#000052]/90 to-[#000052]",
      borderColor: "#00C2FF"
    },
    {
      id: "vision",
      title: "VISIÓN",
      image: "/vision.png",
      content: "Ser reconocidos como líderes mundiales",
      bgColor: "from-[#000040]/90 to-[#000052]",
      borderColor: "#00C2FF"
    },
    {
      id: "valores",
      title: "VALORES",
      image: "/valores.png",
      content: "Innovación, Sostenibilidad y Colaboración",
      bgColor: "from-[#000052]/90 to-[#000052]",
      borderColor: "#00C2FF"
    }
  ];

  return (
    <div className="relative bg-[#f5f9ff] py-40 overflow-hidden">
      {/* Elementos decorativos tecnológicos */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="h-24 w-24 rounded-full bg-[#00C2FF]/10 absolute top-10 left-[10%]"></div>
          <div className="h-64 w-64 rounded-full bg-[#00C2FF]/5 absolute bottom-20 left-[25%] blur-3xl"></div>
          <div className="h-48 w-48 rounded-full bg-[#000052]/5 absolute top-40 right-[10%] blur-2xl"></div>
          
          {/* Grid background */}
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGZpbGw9IiMwMDAwNTIiIGZpbGwtb3BhY2l0eT0iMC4wMSIgZD0iTTAgMGg2MHY2MEgweiI+PC9wYXRoPjxwYXRoIGQ9Ik0zNiAxOGExIDEgMCAxIDEgMC0yIDEgMSAwIDAgMSAwIDJtMCA0MmExIDEgMCAxIDEgMC0yIDEgMSAwIDAgMSAwIDJNMTggMzZhMSAxIDAgMSAxIDAtMiAxIDEgMCAwIDEgMCAybTQyIDBhMSAxIDAgMSAxIDAtMiAxIDEgMCAwIDEgMCAyIiBmaWxsPSIjMDBDMkZGIiBmaWxsLW9wYWNpdHk9IjAuMDgiPjwvcGF0aD48L2c+PC9zdmc+')]"></div>
        </div>
      </div>

      <section className="max-w-6xl mx-auto py-16 px-4 relative z-10">
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-center text-[#000052] mb-16 relative"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="relative">
            Nuestra Esencia
            <motion.span
              className="absolute -bottom-3 left-0 w-full h-1 bg-gradient-to-r from-[#00C2FF] to-transparent"
              initial={{ scaleX: 0, originX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.8 }}
            ></motion.span>
          </span>
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 relative">
          {/* SVG conexiones entre cards - solo visible en desktop */}
          <div className="absolute top-1/2 left-0 w-full h-4 z-0 hidden md:block">
            <svg width="100%" height="8" viewBox="0 0 1000 8" fill="none" xmlns="http://www.w3.org/2000/svg">
              <motion.path 
                d="M0 4H1000" 
                stroke="url(#paint0_linear)" 
                strokeWidth="1.5"
                strokeDasharray="8 8"
                variants={lineVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              />
              <defs>
                <linearGradient id="paint0_linear" x1="0" y1="4" x2="1000" y2="4" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#00C2FF" stopOpacity="0.1" />
                  <stop offset="0.5" stopColor="#00C2FF" stopOpacity="0.6" />
                  <stop offset="1" stopColor="#00C2FF" stopOpacity="0.1" />
                </linearGradient>
              </defs>
            </svg>
          </div>

          {cards.map((card, i) => (
            <motion.div
              key={card.id}
              className="relative z-10"
              custom={i}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              whileHover="hover"
              viewport={{ once: true }}
              onHoverStart={() => setHoveredCard(card.id)}
              onHoverEnd={() => setHoveredCard(null)}
            >              <div className="flex flex-col items-center text-center bg-white rounded-2xl p-8 shadow-lg border-t-4 border-[#00C2FF] hover:shadow-xl transition-shadow duration-300 relative overflow-hidden group h-full">
                {/* Background gradient - suave y no completamente oscuro */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#000052]/5 to-[#000052]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-0"></div>
                
                {/* Circuit pattern overlay */}
                <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgdmlld0JveD0iMCAwIDEwMCAxMDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImEiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgcGF0dGVyblRyYW5zZm9ybT0ic2NhbGUoMSkgcm90YXRlKDApIj48cGF0aCBmaWxsPSIjMDBDMkZGIiBmaWxsLW9wYWNpdHk9IjAuMDUiIGQ9Ik0wIDBoMjB2MjBIMHoiLz48cGF0aCBkPSJNMCAxMGgyME0xMCAwdjIwIiBzdHJva2U9IiMwMEMyRkYiIHN0cm9rZS1vcGFjaXR5PSIwLjA3IiBzdHJva2Utd2lkdGg9IjAuNSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3QgZmlsbD0idXJsKCNhKSIgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIvPjwvc3ZnPg==')] opacity-20 group-hover:opacity-30 transition-opacity duration-300 -z-0"></div>
                  {/* Icon container */}
                <motion.div 
                  className="relative w-24 h-24 mb-6 bg-gradient-to-br from-[#00C2FF]/10 to-[#00C2FF]/5 rounded-full flex items-center justify-center p-2 transition-colors duration-300"
                  whileHover={{ 
                    scale: 1.05,
                    transition: { duration: 0.3 }
                  }}
                >
                  <motion.div
                    className="absolute inset-0 rounded-full border border-[#00C2FF]/20 scale-110"
                    animate={{ 
                      opacity: [0.3, 0.5, 0.3]
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  ></motion.div>
                  
                  <img 
                    src={card.image} 
                    alt={card.title} 
                    className="w-full h-full object-contain relative z-10" 
                  />
                </motion.div>
                  <h3 className="text-3xl font-bold mb-4 text-[#000052] relative">
                  {card.title}
                  <motion.div 
                    className="absolute -bottom-2 left-1/2 w-12 h-0.5 bg-[#00C2FF] -translate-x-1/2"
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + i * 0.1, duration: 0.4 }}
                  />
                </h3>
                
                <p className="text-xl text-[#000052]/90">
                  {card.content}
                </p>
                
                {/* Circuit dots in corners */}
                <div className="absolute top-2 right-2 w-3 h-3 rounded-full border border-[#00C2FF]/30 bg-white group-hover:bg-[#00C2FF]/30 transition-colors duration-300"></div>
                <div className="absolute bottom-2 left-2 w-3 h-3 rounded-full border border-[#00C2FF]/30 bg-white group-hover:bg-[#00C2FF]/30 transition-colors duration-300"></div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>      {/* Circuito tecnológico en la parte inferior */}
      <div className="absolute bottom-0 left-0 w-full">
      
        


      </div>
    </div>
  );
}
