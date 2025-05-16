import { Rocket } from "lucide-react";
import { motion } from "framer-motion";

export default function Hero() {
  return (    <section className="flex flex-col items-center justify-center py-28 md:py-36 gap-6 text-center bg-gradient-to-b from-[#00CBFA] to-transparent">
     
      <motion.div
        className="w-full h-[250px] md:h-[350px] lg:h-[400px] relative px-8 md:px-20 lg:px-16"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.7 }}
      >
        <img
          src="/logo_blanco.png"
          alt="InnovaTech"
          className="w-full h-full object-contain"
        />
      </motion.div>      <motion.p
        className="max-w-xl text-xl md:text-2xl font-medium text-[#000052] px-4"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.7 }}
      >
        Soluciones tecnológicas de vanguardia para un mundo sustentable.
      </motion.p>
    </section>
  );
}
