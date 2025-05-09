import { Rocket } from "lucide-react";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="flex flex-col items-center justify-center py-40 gap-4 text-center bg-gradient-to-b from-[#00CBFA] to-transparent">
     
      <motion.div
        className="w-full h-[200px] relative px-10 md:px-40"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.7 }}
      >
        <img
          src="/logo_blanco.png"
          alt="InnovaTech"
          className="w-full h-full object-contain"
        />
      </motion.div>
      <motion.p
        className="max-w-xl text-lg text-[#000052]"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.7 }}
      >
        Soluciones tecnológicas de vanguardia para un mundo sustentable.
      </motion.p>
    </section>
  );
}
