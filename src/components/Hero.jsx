import { Rocket } from "lucide-react";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="flex flex-col items-center justify-center py-40 gap-4 text-center bg-gradient-to-b from-[#00CBFA] to-transparent">
      <motion.div
        initial={{ y: -60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 80, damping: 12 }}
        whileHover={{ scale: 1.1, rotate: 10 }}
      >
        <Rocket className="w-16 h-16 text-[#C5009B] mb-2" />
      </motion.div>
      <motion.h1
        className="text-4xl sm:text-6xl font-bold tracking-tight"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.7 }}
      >
        Innovatech
      </motion.h1>
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
