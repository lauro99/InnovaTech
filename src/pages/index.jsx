import Image from "next/image";
import Layout from "../components/Layout";
import Hero from "../components/Hero";
import About from "../components/About";
import MVV from "../components/MVV";
import Servicios from "../components/Servicios";
import Contacto from "../components/Contacto";

export default function Home() {
  return (
    <Layout>
      <Hero />
      <About />
      <MVV />
      <Servicios />
      <Contacto />
    </Layout>
  );
}
