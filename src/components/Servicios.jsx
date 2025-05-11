import { useState } from "react";
import ServicioCard from "./ServicioCard";
import { motion } from "framer-motion";
import {
  Network,
  CircuitBoard,
  Code2,
  Cpu,
  Wrench,
  FlaskConical,
  Eye,
  Scissors,
  Bot,
  Vibrate,
  LayoutDashboard,
  RefreshCw,
  FileText,
  Package,
  Ruler,
  Droplets,
  Wind,
  Sun,
  GraduationCap,
  HomeIcon,
  ShieldCheck,
  Magnet,
  BookOpen,
  CheckCircle2,
  Zap,
  Laptop,
  Activity,
  Settings,
  PenTool,
  BotMessageSquare,
  Leaf,
  Award,
} from "lucide-react";

// Organizando servicios en filas para imitar el diseño de la imagen
const primeraFila = [
  {
    icon: "/electric.png",
    label: "Ingeniería Eléctrica",
    categoria: "electric",
    children: [
      { icon: Network, label: "Redes domésticas" },
      { icon: Network, label: "Redes industriales" },
    ],
  },
  {
    icon: "/desarrollo.png",
    label: "Desarrollo de tecnología",
    categoria: "desarrollo",
    children: [
      { icon: CircuitBoard, label: "Diseño de circuitos" },
      { icon: Code2, label: "Desarrollo de aplicaciones" },
      { icon: LayoutDashboard, label: "Desarrollo de páginas web" },
      { icon: Cpu, label: "Desarrollo y diseño de PCV" },
      { icon: FlaskConical, label: "Análisis de circuitos" },
    ],
  },
  {
    icon: "/bio.png",
    label: "Biomédica",
    categoria: "desarrollo",
    children: [
      { icon: Wrench, label: "Diseño de prótesis" },
      { icon: Wrench, label: "Mantenimiento de máquinas" },
    ],
  },
  {
    icon: "/auto.png",
    label: "Automatización",
    categoria: "robotica",
    children: [
      { icon: LayoutDashboard, label: "Estaciones de trabajo" },
      { icon: Bot, label: "Fines de brazo (ROATS)" },
      { icon: FlaskConical, label: "Investigación" },
      { icon: Eye, label: "Sistemas de visión" },
      { icon: Scissors, label: "Sistemas de corte de colada" },
      { icon: Bot, label: "Programación de robots" },
      { icon: Vibrate, label: "Bowl feeder (mesas vibratorias)" },
      { icon: LayoutDashboard, label: "Tableros eléctricos" },
      { icon: FlaskConical, label: "Simulaciones" },
    ],
  }
];

const segundaFila = [
  {
    icon: "/cad.png",
    label: "Diseño CAD/CAE",
    categoria: "desarrollo",
    children: [
      { icon: RefreshCw, label: "Rediseño de piezas" },
      { icon: FileText, label: "Actualización de planos" },
      { icon: Package, label: "Diseño de moldes" },
      { icon: Package, label: "Diseño de productos" },
      { icon: Ruler, label: "Análisis de punto finito" },
      { icon: Droplets, label: "CFD (Dinámica de fluidos por computadora)" },
    ],
  },
  {
    icon: "/robotica.png",
    label: "Robótica",
    categoria: "robotica",
    children: [
      { icon: HomeIcon, label: "Domótica (casas)" },
      { icon: ShieldCheck, label: "Seguridad" },
      { icon: Package, label: "Máquinas expendedoras" },
      { icon: Bot, label: "Programación de robots" },
      { icon: Package, label: "Suministros" },
      { icon: FileText, label: "Propuestas" },
    ],
  },
  {
    icon: "/renovable.png",
    label: "Renovable",
    categoria: "renovable",
    children: [
      { icon: Droplets, label: "Osmosis Inversa" },
      { icon: Magnet, label: "Electroimanes" },
      { icon: Droplets, label: "Filtros purificadores" },
      { icon: Sun, label: "Sistemas fotovoltaicos" },
      { icon: Wind, label: "Sistemas eólicos" },
    ],
  },
  {
    icon: "/certificacion.png",
    label: "Certificaciones",
    categoria: "formacion",
    children: [
      { icon: GraduationCap, label: "Cursos en línea Solidworks" },
      { icon: BookOpen, label: "Cursos presenciales Solidworks" },
      { icon: CheckCircle2, label: "Certificaciones Solidworks" },
    ],
  }
];

// Lista plana de todos los servicios para filtrado
const servicios = [...primeraFila, ...segundaFila];

export default function Servicios() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [isChangingCategory, setIsChangingCategory] = useState(false);
  const [animationKey, setAnimationKey] = useState(0);
  // Función para manejar el cambio de categoría con animación
  const handleCategoryChange = (categoryId) => {
    setIsChangingCategory(true);
    setTimeout(() => {
      setActiveCategory(categoryId);
      setIsChangingCategory(false);
      // Incrementar la animation key para forzar la re-renderización y resetear las animaciones
      setAnimationKey(prevKey => prevKey + 1);
    }, 300);
  };

  // Categorías para el filtrado
  const categorias = [
    { id: "all", nombre: "Todos los servicios", icono: null },
    { id: "electric", nombre: "Eléctrica", icono: Zap },
    { id: "desarrollo", nombre: "Desarrollo", icono: Code2 },
    { id: "renovable", nombre: "Renovable", icono: Leaf },
    { id: "robotica", nombre: "Robótica", icono: Bot },
    { id: "formacion", nombre: "Formación", icono: GraduationCap }
  ];
  
  // Conteo de servicios por categoría
  const contarServicios = (categoria) => {
    if (categoria === "all") return servicios.length;
    return servicios.filter(serv => serv.categoria === categoria).length;
  };

  // Filtrar servicios según categoría seleccionada
  const serviciosFiltrados = activeCategory === "all" || !activeCategory
    ? servicios
    : servicios.filter(serv => serv.categoria === activeCategory);
  
  return (
    <section id="servicios" className="py-20 px-4 max-w-7xl mx-auto relative">
      {/* Elementos decorativos */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-96 bg-gradient-to-b from-blue-50 to-transparent rounded-full blur-3xl opacity-50 -z-10" />
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-gradient-to-tr from-[#00C2FF]/10 to-transparent rounded-full blur-xl -z-10" />
      <div className="absolute top-1/3 left-0 w-48 h-48 bg-gradient-to-tl from-[#000052]/10 to-transparent rounded-full blur-xl -z-10" />
      
      <div className="text-center mb-16">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-[#000052] to-[#00C2FF] inline-block text-transparent bg-clip-text">
            Nuestros Servicios
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-[#00C2FF] to-[#000052] mx-auto rounded-full mb-6" />
          <p className="text-slate-600 max-w-2xl mx-auto text-lg">
            Ofrecemos soluciones tecnológicas integrales con profesionales altamente calificados
            para cubrir todas tus necesidades.
          </p>
        </motion.div>
          {/* Filtro de categorías */}        
        <motion.div 
          className="max-w-4xl mx-auto px-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 mt-10 mb-12">
            {categorias.map((cat) => (
              <motion.button
                key={cat.id}
                onClick={() => handleCategoryChange(cat.id)}
                className={`px-3 py-3 rounded-xl flex items-center justify-center flex-col gap-2 transition-all duration-300 text-sm font-medium h-full
                  ${activeCategory === cat.id 
                    ? 'bg-[#000052] text-white shadow-lg shadow-[#000052]/20 scale-105' 
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                  }`}
                whileHover={{ scale: activeCategory === cat.id ? 1.05 : 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                <div className="flex items-center justify-center">
                  {cat.icono && <cat.icono className={`w-5 h-5 ${activeCategory === cat.id ? 'text-[#00C2FF]' : 'text-slate-500'}`} />}
                </div>
                <div className="flex flex-col items-center">
                  <span className="text-center">{cat.nombre}</span>
                  <span className={`mt-1 px-2 py-0.5 rounded-full text-xs ${
                    activeCategory === cat.id 
                      ? 'bg-[#00C2FF]/20 text-white' 
                      : 'bg-slate-200 text-slate-700'
                  }`}>
                    {contarServicios(cat.id)}
                  </span>
                </div>
              </motion.button>
            ))}
          </div>
        </motion.div>      
      </div>        
        
      {/* Grid de servicios con animación en filas */}      
      {serviciosFiltrados.length > 0 ? (      <motion.div 
          className="w-full max-w-6xl mx-auto"
          key={`container-${activeCategory}-${animationKey}`}
          initial={{ opacity: 0 }}
          animate={{ 
            opacity: isChangingCategory ? 0 : 1,
            y: isChangingCategory ? 20 : 0
          }}
          transition={{ duration: 0.4 }}
        >
          {/* Renderizar servicios en filas solo cuando se muestra "all" */}
          {activeCategory === "all" ? (
            <div className="space-y-12 md:space-y-20">              {/* Primera fila */}
              <div className="flex flex-wrap justify-center gap-6 md:gap-12">
                {primeraFila.map((servicio, idx) => (
                  <motion.div
                    key={`row1-${idx}-${animationKey}`}
                    className="w-32 md:w-40"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                  >
                    <ServicioCard servicio={servicio} />
                  </motion.div>
                ))}
              </div>              {/* Segunda fila */}
              <div className="flex flex-wrap justify-center gap-6 md:gap-12">
                {segundaFila.map((servicio, idx) => (
                  <motion.div
                    key={`row2-${idx}-${animationKey}`}
                    className="w-32 md:w-40"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 + (idx * 0.1) }}
                  >
                    <ServicioCard servicio={servicio} />
                  </motion.div>
                ))}
              </div>
            </div>          ) : (
            <div className="flex flex-wrap justify-center gap-6 md:gap-12">
              {serviciosFiltrados.map((servicio, idx) => (
                <motion.div
                  key={`filtered-${idx}-${animationKey}`}
                  className="w-32 md:w-40"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                >
                  <ServicioCard servicio={servicio} />
                </motion.div>
              ))}
            </div>
          )}

          {/* Lista de algunos subservicios específicos */}
          {activeCategory === "all" && (
            <motion.div 
              className="mt-16 flex flex-wrap justify-center gap-3"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="bg-white shadow-md rounded-lg p-3 flex items-center gap-2">
                <div className="w-8 h-8 bg-blue-100 rounded-md flex items-center justify-center text-blue-600">
                  <LayoutDashboard className="w-4 h-4" />
                </div>
                <span className="text-sm font-medium text-slate-800">Estaciones de trabajo</span>
              </div>
              
              <div className="bg-white shadow-md rounded-lg p-3 flex items-center gap-2">
                <div className="w-8 h-8 bg-red-100 rounded-md flex items-center justify-center text-red-600">
                  <Scissors className="w-4 h-4" />
                </div>
                <span className="text-sm font-medium text-slate-800">Sistemas de corte de colada</span>
              </div>
              
              <div className="bg-white shadow-md rounded-lg p-3 flex items-center gap-2">
                <div className="w-8 h-8 bg-green-100 rounded-md flex items-center justify-center text-green-600">
                  <Bot className="w-4 h-4" />
                </div>
                <span className="text-sm font-medium text-slate-800">Programación de robots</span>
              </div>
              
              <div className="bg-white shadow-md rounded-lg p-3 flex items-center gap-2">
                <div className="w-8 h-8 bg-amber-100 rounded-md flex items-center justify-center text-amber-600">
                  <Vibrate className="w-4 h-4" />
                </div>
                <span className="text-sm font-medium text-slate-800">Bowl feeder</span>
              </div>
            </motion.div>
          )}
        </motion.div>
      ) : (
        <motion.div 
          className="text-center p-12 bg-slate-50 rounded-2xl shadow-inner"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="text-6xl mb-4 opacity-30 mx-auto">🔍</div>
          <h3 className="text-2xl font-semibold text-slate-700 mb-2">No se encontraron servicios</h3>
          <p className="text-slate-500 max-w-lg mx-auto">
            No hay servicios disponibles para la categoría seleccionada. Prueba con otra categoría o consulta todos nuestros servicios.
          </p>
          <button 
            onClick={() => handleCategoryChange("all")} 
            className="mt-6 px-6 py-2 bg-[#00C2FF] text-white rounded-full hover:bg-[#0099cc] transition-colors duration-300"
          >
            Ver todos los servicios
          </button>
        </motion.div>
      )}
      
      {/* Sección de contacto rápido */}
      <motion.div 
        className="mt-20 bg-gradient-to-r from-[#000052] to-[#00426b] p-8 md:p-12 rounded-2xl text-white text-center shadow-xl"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        <h3 className="text-2xl md:text-3xl font-bold mb-4">¿Interesado en nuestros servicios?</h3>
        <p className="mb-8 text-blue-100 max-w-2xl mx-auto">
          Nuestro equipo está listo para ayudar con tu próximo proyecto. Contacta con nosotros para una consulta personalizada.
        </p>
        <a 
          href="#contacto" 
          className="inline-block px-8 py-4 bg-white text-[#000052] rounded-full font-medium hover:bg-blue-50 transition-colors duration-300 shadow-lg"
        >
          Contactar ahora
        </a>
      </motion.div>
    </section>
  );
}

export { servicios };
