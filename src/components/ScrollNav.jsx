import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const ScrollNav = () => {
  const [activeSection, setActiveSection] = useState('hero');
  const [visible, setVisible] = useState(false);
  
  const sections = [
    { id: 'hero', label: 'Inicio' },
    { id: 'about', label: 'Nosotros' },
    { id: 'mvv', label: 'Misión' },
    { id: 'servicios', label: 'Servicios' },
    { id: 'proceso', label: 'Proceso' },
    { id: 'aliados', label: 'Aliados' },
    { id: 'contacto', label: 'Contacto' },
  ];
  useEffect(() => {
    const handleScroll = () => {
      // Mostrar la navegación solo cuando hemos bajado un poco
      if (window.scrollY > 300) {
        setVisible(true);
      } else {
        setVisible(false);
      }

      const scrollPosition = window.scrollY + 300; // Offset para detectar antes
      
      // Encontrar qué sección está actualmente en la vista
      const currentSection = sections
        .map(section => {
          const element = document.getElementById(section.id);
          if (!element) return { id: section.id, position: -Infinity };
          
          const position = element.offsetTop;
          return { id: section.id, position };
        })
        .reduce((closest, section) => {
          return scrollPosition >= section.position && 
                section.position > closest.position ? section : closest;
        }, { id: sections[0].id, position: -Infinity });
      
      setActiveSection(currentSection.id);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const scrollToSection = (id) => {
    // Función para buscar la sección por su ID o por otros métodos
    const findSectionElement = (sectionId) => {
      // Primero intentar buscar por ID directamente
      let element = document.getElementById(sectionId);
      
      if (!element) {
        // Si no se encuentra por ID, intentar buscar por atributo de sección
        element = document.querySelector(`section[id="${sectionId}"]`);
      }
      
      if (!element) {
        // Si aún no se encuentra, buscar dentro de divs que puedan contener la sección
        const potentialContainers = document.querySelectorAll('div > section');
        for (const container of potentialContainers) {
          if (container.id === sectionId) {
            element = container;
            break;
          }
        }
      }
        // Caso especial para secciones conocidas
      if (!element) {
        // Intentar encontrar la sección MVV específicamente
        if (sectionId === 'mvv') {
          element = document.querySelector('.relative.bg-\\[\\#f5f9ff\\].py-40');
        }
        
        // Usar un mapeo por posición como último recurso
        if (!element) {
          const sectionMap = {
            'mvv': 2,       // MVV es típicamente la tercera sección
            'proceso': 4,   // Proceso de trabajo es típicamente la quinta sección
            'aliados': 5    // Aliados es típicamente la sexta sección
          };
          
          if (sectionId in sectionMap) {
            const allSections = document.querySelectorAll('section');
            if (allSections.length > sectionMap[sectionId]) {
              element = allSections[sectionMap[sectionId]];
            }
          }
        }
      }
      
      return element;
    };
    
    // Buscar el elemento usando la función auxiliar
    const element = findSectionElement(id);
    
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: 'smooth'
      });    } else {
      // Si todo falla, usar posiciones fijas basadas en el viewport como último recurso
      const viewportHeight = window.innerHeight;
      const scrollPositions = {
        'hero': 0,
        'about': viewportHeight * 0.9,
        'mvv': viewportHeight * 1.8,
        'servicios': viewportHeight * 2.7,
        'proceso': viewportHeight * 3.6,
        'aliados': viewportHeight * 4.5,
        'contacto': viewportHeight * 5.4
      };
      
      if (id in scrollPositions) {
        window.scrollTo({
          top: scrollPositions[id],
          behavior: 'smooth'
        });
      } else {
        console.log(`Elemento con ID: ${id} no encontrado`);
      }
    }
  };
  return (
    <motion.div 
      className="fixed right-6 top-1/2 transform -translate-y-1/2 z-50"
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: visible ? 1 : 0, x: visible ? 0 : 50 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex flex-col items-center space-y-4">
        {sections.map((section) => (
          <div key={section.id} className="relative group">
            <motion.div
              className={`w-3 h-3 rounded-full cursor-pointer transition-all duration-300 ${
                activeSection === section.id
                  ? 'bg-[#00C2FF] scale-125 shadow-lg shadow-[#00C2FF]/30'
                  : 'bg-gray-400 hover:bg-[#000052]'
              }`}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => scrollToSection(section.id)}
            />
            <div className="absolute right-6 top-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="bg-[#000052] text-white px-2 py-1 rounded whitespace-nowrap text-sm font-medium">
                {section.label}
              </div>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default ScrollNav;
