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

const servicios = [
  {
    icon: "/electric.png",
    label: "Ingeniería Eléctrica",
    children: [
      { icon: Network, label: "Redes domésticas" },
      { icon: Network, label: "Redes industriales" },
    ],
  },
  {
    icon: "/desarrollo.png",
    label: "Desarrollo de tecnología",
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
    children: [
      { icon: Wrench, label: "Diseño de prótesis" },
      { icon: Wrench, label: "Mantenimiento de máquinas" },
    ],
  },
  {
    icon: "/auto.png",
    label: "Automatización",
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
  },
  {
    icon: "/cad.png",
    label: "Diseño CAD/CAE",
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
    children: [
      { icon: GraduationCap, label: "Cursos en línea Solidworks" },
      { icon: BookOpen, label: "Cursos presenciales Solidworks" },
      { icon: CheckCircle2, label: "Certificaciones Solidworks" },
    ],
  },
];

export default function Servicios() {
  const [activeCategory, setActiveCategory] = useState(null);
  
  // Categorías para el filtrado
  const categorias = [
    { id: "all", nombre: "Todos" },
    { id: "electric", nombre: "Eléctrica" },
    { id: "desarrollo", nombre: "Desarrollo" },
    { id: "renovable", nombre: "Renovable" },
    { id: "robotica", nombre: "Robótica" }
  ];
  
  // Filtrar servicios según categoría seleccionada
  const serviciosFiltrados = activeCategory === "all" || !activeCategory
    ? servicios
    : servicios.filter(serv => {
        const iconPath = serv.icon.toLowerCase();
        return iconPath.includes(activeCategory);
      });
  
  return (
    <section className="py-12 px-4 max-w-7xl mx-auto relative">
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
          className="flex flex-wrap justify-center gap-3 mt-10 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {categorias.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-5 py-2.5 rounded-full transition-all duration-300 text-sm md:text-base font-medium
                ${activeCategory === cat.id 
                  ? 'bg-[#000052] text-white shadow-lg shadow-[#000052]/20 scale-105' 
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
            >
              {cat.nombre}
            </button>
          ))}
        </motion.div>
      </div>
      
      {/* Grid de servicios con animación */}
      <motion.div 
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ staggerChildren: 0.1 }}
        viewport={{ once: true }}
      >
        {serviciosFiltrados.map((servicio, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            viewport={{ once: true }}
          >
            <ServicioCard servicio={servicio} />
          </motion.div>
        ))}
      </motion.div>
      
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

// Exportamos la lista de servicios por si se necesita en otro lugar
export { servicios };
