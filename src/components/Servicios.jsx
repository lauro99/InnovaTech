import ServicioCard from "./ServicioCard";
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
} from "lucide-react";

const servicios = [
  { icon: Network, label: "Redes domésticas" },
  { icon: Network, label: "Redes industriales" },
  { icon: CircuitBoard, label: "Diseño de circuitos" },
  { icon: Code2, label: "Desarrollo de aplicaciones" },
  { icon: LayoutDashboard, label: "Desarrollo de páginas web" },
  { icon: Cpu, label: "Desarrollo y diseño de PCV" },
  { icon: FlaskConical, label: "Análisis de circuitos" },
  { icon: FileText, label: "Propuestas" },
  { icon: Wrench, label: "Diseño de prótesis" },
  { icon: Wrench, label: "Mantenimiento de máquinas" },
  { icon: LayoutDashboard, label: "Estaciones de trabajo" },
  { icon: Bot, label: "Fines de brazo (ROATS)" },
  { icon: FlaskConical, label: "Investigación" },
  { icon: Eye, label: "Sistemas de visión" },
  { icon: Scissors, label: "Sistemas de corte de colada" },
  { icon: Bot, label: "Programación de robots" },
  { icon: Vibrate, label: "Bowl feeder (mesas vibratorias)" },
  { icon: LayoutDashboard, label: "Tableros eléctricos" },
  { icon: FlaskConical, label: "Simulaciones" },
  { icon: RefreshCw, label: "Rediseño de piezas" },
  { icon: FileText, label: "Actualización de planos" },
  { icon: Package, label: "Diseño de moldes" },
  { icon: Package, label: "Diseño de productos" },
  { icon: Ruler, label: "Análisis de punto finito" },
  { icon: Droplets, label: "CFD (Dinámica de fluidos por computadora)" },
  { icon: FileText, label: "Propuestas" },
  { icon: HomeIcon, label: "Domótica (casas)" },
  { icon: ShieldCheck, label: "Seguridad" },
  { icon: Package, label: "Máquinas expendedoras" },
  { icon: Bot, label: "Programación de robots" },
  { icon: Package, label: "Suministros" },
  { icon: FileText, label: "Propuestas" },
  { icon: Droplets, label: "Osmosis Inversa" },
  { icon: Magnet, label: "Electroimanes" },
  { icon: Droplets, label: "Filtros purificadores" },
  { icon: Sun, label: "Sistemas fotovoltaicos" },
  { icon: Wind, label: "Sistemas eólicos" },
  { icon: FileText, label: "Propuestas" },
  { icon: GraduationCap, label: "Cursos en línea Solidworks" },
  { icon: BookOpen, label: "Cursos presenciales Solidworks" },
  { icon: CheckCircle2, label: "Certificaciones Solidworks" },
  { icon: FileText, label: "Propuesta" },
];

export default function Servicios() {
  return (
    <section className="py-16 px-4 max-w-6xl mx-auto">
      <h2 className="text-3xl font-semibold mb-8 text-center">Servicios</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {servicios.map((servicio, idx) => (
          <ServicioCard key={idx} servicio={servicio} />
        ))}
      </div>
    </section>
  );
}

// Exportamos la lista de servicios por si se necesita en otro lugar
export { servicios };
