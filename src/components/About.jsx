import { Cpu, Award, Users, Globe, Zap, TrendingUp, Leaf, Rocket, CheckCircle, Target } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";

export default function About() {
  const [activeTab, setActiveTab] = useState("historia");
  const statsData = [
    { value: "2025", label: "Año de fundación", icon: <Rocket className="h-7 w-7 text-[#00C2FF]" /> },
    { value: "15+", label: "Proyectos en desarrollo", icon: <Target className="h-7 w-7 text-[#00C2FF]" /> },
    { value: "5+", label: "Especialistas", icon: <Users className="h-7 w-7 text-[#00C2FF]" /> },
    { value: "5+", label: "Tecnologías innovadoras", icon: <CheckCircle className="h-7 w-7 text-[#00C2FF]" /> },
  ];

  const featuresData = [
    { 
      icon: <Cpu className="h-8 w-8 text-[#00C2FF]" />,
      title: "Tecnología avanzada",
      description: "Implementamos las últimas tendencias tecnológicas para impulsar la innovación en tu empresa."
    },    { 
      icon: <Zap className="h-8 w-8 text-[#00C2FF]" />,
      title: "Soluciones a medida",
      description: "Desarrollamoss estrategias personalizadas según las necesidades específicas de cada cliente."
    },
    { 
      icon: <Leaf className="h-8 w-8 text-[#00C2FF]" />,
      title: "Compromiso ecológico",
      description: "Todas nuestras soluciones están diseñadas con un fuerte enfoque en la sustentabilidad ambiental."
    }
  ];

  const tabContent = {
    historia: (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        <p className="mb-4">Fundada en 2025, InnovaTech nace como respuesta a la creciente necesidad de soluciones tecnológicas que concilien la innovación con la sustentabilidad. Somos una startup joven pero con grandes ambiciones y un equipo de profesionales con experiencia en el sector tecnológico.</p>
      </motion.div>
    ),
    equipo: (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        <p className="mb-4">Nuestro equipo está formado por jóvenes talentos y profesionales experimentados que han decidido unirse a este proyecto innovador. Contamos con ingenieros, desarrolladores, diseñadores y especialistas en sostenibilidad y sustentabilidad que comparten la visión de crear tecnología con propósito.</p>
        <p>Lo que nos distingue es nuestra capacidad para pensar fuera de lo convencional, combinando conocimientos teóricos de vanguardia con un enfoque práctico orientado a resultados tangibles para nuestros clientes.</p>
      </motion.div>
    ),
    filosofia: (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        <p className="mb-4">En InnovaTech creemos que la tecnología debe servir como herramienta para un futuro más sostenible. Nuestra filosofía se basa en tres pilares fundamentales: innovación disruptiva, excelencia técnica y responsabilidad ambiental.</p>
        <p>Como empresa emergente, nos hemos comprometido desde el primer día a desarrollar soluciones que no solo resuelvan problemas actuales, sino que también contribuyan a construir un mundo más sostenible para las generaciones futuras.</p>
      </motion.div>
    )
  };
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };
  
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };

  return (
    <div id="about" className="relative bg-[#000052] text-white overflow-hidden">
      <div className="absolute top-0 right-0 w-full h-full hidden md:block">
        <div className="absolute top-0 right-0 w-[50%] h-full bg-white transform skew-x-12 translate-x-1/2" />
      </div>
      
      <section className="relative py-20 px-4 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-start justify-between gap-12">
          <div className="max-w-xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="inline-block bg-[#00C2FF] text-white px-4 py-1 rounded-full text-sm font-medium mb-4"
            >
              innovatech México
            </motion.div>
            
            <motion.h2
              className="text-5xl font-bold mb-6"
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              Acerca de nosotros
            </motion.h2>
            
            <motion.p
              className="text-xl leading-relaxed mb-8"
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.7 }}
            >
              En InnovaTech nos encargamos de llevar tu empresa a ser autosustentable e implementamos tecnología de última generación, teniendo siempre en cuenta el planeta tierra.
            </motion.p>
              {/* Tabs para más información */}
            <div className="mt-8">
              <div className="flex border-b border-[#00C2FF]/30">
                {["historia", "equipo", "filosofia"].map((tab) => (
                  <button
                    key={tab}
                    className={`${
                      activeTab === tab ? "border-b-2 border-[#00C2FF] text-white" : "text-white/80 hover:text-white"
                    } pb-2 px-4 font-medium capitalize transition-colors`}
                    onClick={() => setActiveTab(tab)}
                  >
                    {tab}
                  </button>
                ))}
              </div>
              
              <div className="py-6">
                {tabContent[activeTab]}
              </div>
            </div>
          </div>
          
          <div className="flex-shrink-0 w-full md:w-auto">
            <motion.div
              className="relative w-72 h-72 mx-auto md:mx-0"
              initial={{ opacity: 0, scale: 0.7 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.7, type: "spring" }}
            >
              <div className="absolute inset-0 bg-[#00C2FF] rounded-full opacity-20 blur-xl" />
              <div className="w-full h-full relative">
                <div className="absolute inset-0 bg-white rounded-full shadow-lg shadow-blue-500/20">
                  <img src="/net.png" alt="InnovaTech" className="w-full h-full object-contain p-4" />
                </div>
              </div>
            </motion.div>
          </div>
        </div>          {/* Stats counter section */}
        <motion.div 
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 relative z-10"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {statsData.map((stat, index) => (
            <motion.div 
              key={index} 
              className="text-center bg-[#000052] border border-[#00C2FF]/30 rounded-lg p-6 shadow-lg flex flex-col items-center justify-center"
              variants={itemVariants}
              whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
            >
              <div className="bg-[#00C2FF]/20 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                {stat.icon}
              </div>
              <h3 className="text-3xl font-bold mb-2 text-white">{stat.value}</h3>
              <p className="text-white text-sm font-medium">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>          {/* Features section */}
        <motion.div 
          className="mt-20 relative z-10 grid grid-cols-1 md:grid-cols-3 gap-10"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {featuresData.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-[#000052] border border-[#00C2FF]/30 rounded-xl p-8 shadow-lg flex flex-col items-center text-center"
              variants={itemVariants}
              whileHover={{ scale: 1.03, y: -5, transition: { duration: 0.2 } }}
            >
              <div className="bg-[#00C2FF]/30 rounded-full w-16 h-16 flex items-center justify-center mb-5">
                {feature.icon}
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-white">{feature.title}</h3>
              <p className="text-white">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>
    </div>
  );
}
