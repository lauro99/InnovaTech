import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import {
  Rocket,
  Leaf,
  Users,
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
  Mail,
  Phone,
  MapPin
} from "lucide-react";
import { useState } from "react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

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

export default function Home() {
  // Estados para el formulario de contacto
  const [nombre, setNombre] = useState("");
  const [correo, setCorreo] = useState("");
  const [mensaje, setMensaje] = useState("");
  const [enviando, setEnviando] = useState(false);
  const [exito, setExito] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setEnviando(true);
    setExito("");
    setError("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ nombre, correo, mensaje }),
      });
      const data = await res.json();
      if (data.ok) {
        setExito("¡Mensaje enviado correctamente!");
        setNombre("");
        setCorreo("");
        setMensaje("");
      } else {
        setError(data.error || "Ocurrió un error. Intenta de nuevo.");
      }
    } catch (err) {
      setError("Ocurrió un error. Intenta de nuevo.");
    } finally {
      setEnviando(false);
    }
  };

  return (
    <div
      className={`${geistSans.className} ${geistMono.className} bg-background text-foreground min-h-screen flex flex-col`}
    >
      {/* HERO */}
      <section className="flex flex-col items-center justify-center py-20 gap-4 text-center bg-gradient-to-b from-[#f8fafc] to-transparent dark:from-[#171717] dark:to-transparent">
        <Rocket className="w-16 h-16 text-blue-600 mb-2" />
        <h1 className="text-4xl sm:text-6xl font-bold tracking-tight">Innovatech</h1>
        <p className="max-w-xl text-lg text-gray-600 dark:text-gray-300">
          Soluciones tecnológicas de vanguardia para un mundo sustentable.
        </p>
      </section>

      {/* ACERCA DE NOSOTROS */}
      <section className="py-16 px-4 max-w-3xl mx-auto text-center">
        <h2 className="text-3xl font-semibold mb-4">Acerca de nosotros</h2>
        <p className="text-lg text-gray-700 dark:text-gray-300">
          En InnovaTech nos encargamos de llevar a tu empresa a ser autosustentable e implementamos tecnología de última generación, teniendo siempre en cuenta el planeta tierra.
        </p>
      </section>

      {/* MISION, VISION, VALORES */}
      <section className="py-16 px-4 bg-gray-50 dark:bg-[#232323] flex flex-col md:flex-row gap-8 justify-center items-stretch">
        <div className="flex-1 flex flex-col items-center text-center p-6 rounded-lg shadow-sm bg-white dark:bg-[#181818]">
          <Leaf className="w-10 h-10 text-green-600 mb-2" />
          <h3 className="font-bold text-xl mb-2">Misión</h3>
          <p>Ofrecer soluciones tecnológicas de vanguardia</p>
        </div>
        <div className="flex-1 flex flex-col items-center text-center p-6 rounded-lg shadow-sm bg-white dark:bg-[#181818]">
          <Rocket className="w-10 h-10 text-blue-600 mb-2" />
          <h3 className="font-bold text-xl mb-2">Visión</h3>
          <p>Ser reconocidos como líderes mundiales</p>
        </div>
        <div className="flex-1 flex flex-col items-center text-center p-6 rounded-lg shadow-sm bg-white dark:bg-[#181818]">
          <Users className="w-10 h-10 text-yellow-500 mb-2" />
          <h3 className="font-bold text-xl mb-2">Valores</h3>
          <p>Innovación, Sostenibilidad y Colaboración</p>
        </div>
      </section>

      {/* SERVICIOS */}
      <section className="py-16 px-4 max-w-6xl mx-auto">
        <h2 className="text-3xl font-semibold mb-8 text-center">Servicios</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {servicios.map((servicio, idx) => (
            <div key={idx} className="flex items-center gap-4 p-4 bg-white dark:bg-[#181818] rounded-lg shadow-sm">
              <servicio.icon className="w-7 h-7 text-blue-500 shrink-0" />
              <span className="text-base font-medium">{servicio.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* CONTACTO */}
      <section className="py-16 px-4 max-w-2xl mx-auto">
        <h2 className="text-3xl font-semibold mb-6 text-center">Contacto</h2>
        <form className="flex flex-col gap-4 bg-white dark:bg-[#181818] p-8 rounded-lg shadow-sm" onSubmit={handleSubmit}>
          <div className="flex gap-4">
            <input
              type="text"
              placeholder="Nombre"
              className="flex-1 p-2 border rounded"
              value={nombre}
              onChange={e => setNombre(e.target.value)}
              required
            />
            <input
              type="email"
              placeholder="Correo"
              className="flex-1 p-2 border rounded"
              value={correo}
              onChange={e => setCorreo(e.target.value)}
              required
            />
          </div>
          <textarea
            placeholder="Mensaje"
            className="p-2 border rounded min-h-[100px]"
            value={mensaje}
            onChange={e => setMensaje(e.target.value)}
            required
          />
          <button
            type="submit"
            className="bg-blue-600 text-white py-2 rounded font-semibold hover:bg-blue-700 transition disabled:opacity-60"
            disabled={enviando}
          >
            {enviando ? "Enviando..." : "Enviar"}
          </button>
          {exito && <div className="text-green-600 text-center font-medium">{exito}</div>}
          {error && <div className="text-red-600 text-center font-medium">{error}</div>}
        </form>
        <div className="flex flex-col sm:flex-row gap-4 mt-8 justify-center items-center text-gray-700 dark:text-gray-300">
          <div className="flex items-center gap-2"><Mail className="w-5 h-5" /> contacto@innovatech.com</div>
          <div className="flex items-center gap-2"><Phone className="w-5 h-5" /> +52 123 456 7890</div>
          <div className="flex items-center gap-2"><MapPin className="w-5 h-5" /> México</div>
        </div>
      </section>
    </div>
  );
}
