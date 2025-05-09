import { Cpu } from "lucide-react";
import { motion } from "framer-motion";

export default function About() {
  return (
    <div className="relative bg-[#000052] text-white overflow-hidden">
      <div className="absolute top-0 right-0 w-full h-full hidden md:block">
        <div className="absolute top-0 right-0 w-[50%] h-full bg-white transform skew-x-12 translate-x-1/2" />
      </div>
      
      <section className="relative py-16 px-4 max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="max-w-xl">
          <motion.h2
            className="text-5xl font-bold mb-6"
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            Acerca de nosotros
          </motion.h2>
          <motion.p
            className="text-xl leading-relaxed"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.7 }}
          >
            En InnovaTech nos encargamos de llevar a tu empresa a ser autosustentable e implementamos tecnología de última generación, teniendo siempre en cuenta el planeta tierra.
          </motion.p>
        </div>
        
        <motion.div
          className="w-64 h-64 relative flex-shrink-0"
          initial={{ opacity: 0, scale: 0.7 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.7, type: "spring" }}
        >
          <div className="w-full h-full relative">
            <div className="absolute inset-0 bg-white rounded-full">
              <img src="/net.png" alt="InnovaTech" className="w-full h-full object-contain" />
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
