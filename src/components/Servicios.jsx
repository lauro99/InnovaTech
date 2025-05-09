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
  return (
    <section className="py-5 px-4 max-w-6xl mx-auto">
      <h2 className="text-3xl md:text-5xl font-semibold mb-10 md:mb-20 text-center">Servicios</h2>
      <div className="grid grid-cols-1 gap-12">
        {servicios.map((servicio, idx) => (
          <ServicioCard key={idx} servicio={servicio} />
        ))}
      </div>
    </section>
  );
}

// Exportamos la lista de servicios por si se necesita en otro lugar
export { servicios };
