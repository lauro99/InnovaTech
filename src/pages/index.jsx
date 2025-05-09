import Image from "next/image";
import Layout from "../components/Layout";
import Hero from "../components/Hero";
import About from "../components/About";
import MVV from "../components/MVV";
import Servicios from "../components/Servicios";
import Contacto from "../components/Contacto";

export default function Home() {
  return (
    <Layout
      title="InnovaTech - Soluciones Tecnológicas Innovadoras"
      description="InnovaTech es líder en soluciones tecnológicas avanzadas, ofreciendo servicios en robótica, desarrollo de software, energías renovables y más. Transformamos ideas en realidades innovadoras."
      keywords="innovatech, tecnología, soluciones, desarrollo, robótica, energías renovables, automatización industrial, certificaciones tecnológicas"
      image="/logo_blanco.png"
    >
      <Hero />
      <About />
      <MVV />
      <Servicios />
      <Contacto />
    </Layout>
  );
}
