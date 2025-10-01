import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Layout from "../components/Layout";
import Hero from "../components/Hero";
import About from "../components/About";
import MVV from "../components/MVV";
import Servicios from "../components/Servicios";
import ProcesoTrabajo from "../components/ProcesoTrabajo";
import Contacto from "../components/Contacto";
import Aliados from "../components/Aliados";

export default function Home() {
  const [showSplash, setShowSplash] = useState(true);
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsExiting(true);
      setTimeout(() => setShowSplash(false), 800); // 800ms igual a la duración de la transición exit
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <AnimatePresence>
        {showSplash && (
          <motion.div
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, filter: "blur(16px)" }}
            transition={{ duration: 0.8 }}
            className={`fixed inset-0 z-50 flex items-center justify-center bg-[#000052] ${
              isExiting ? "pointer-events-none" : "pointer-events-auto"
            }`}
          >
            <motion.div
              initial={{ scale: 0.7, rotate: 0, opacity: 0 }}
              animate={{
                scale: [1.1, 0.95, 1.05, 1],
                rotate: [0, 10, -10, 0],
                opacity: 1,
              }}
              exit={{ scale: 1.2, opacity: 0 }}
              transition={{
                duration: 1.2,
                ease: "easeInOut",
                repeat: Infinity,
                repeatType: "reverse",
              }}
              className="flex items-center justify-center"
            >
              <Image
                src="/logo_blanco.png"
                alt="Logo InnovaTech"
                width={320}
                height={320}
                className="drop-shadow-2xl"
                priority
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      <Layout
        title="InnovaTech - Soluciones Tecnológicas Innovadoras"
        description="InnovaTech es líder en soluciones tecnológicas avanzadas, ofreciendo servicios en robótica, desarrollo de software, energías renovables y más. Transformamos ideas en realidades innovadoras."
        keywords="automatización, innovatech, tecnología, soluciones, desarrollo, robótica, energías renovables, automatización industrial, certificaciones tecnológicas, proceso de trabajo"
        image="/favicon.png"
      >
        <Hero />
        <About />
        <MVV />
        <Servicios />
        <ProcesoTrabajo />
        <Aliados />
        <Contacto />
      </Layout>
    </>
  );
}
