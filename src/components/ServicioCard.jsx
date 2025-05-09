import { motion } from "framer-motion";

export default function ServicioCard({ servicio }) {
  const isParent = servicio.children?.length > 0;

  return (
    <motion.div
      className={`p-4 bg-white rounded-lg shadow-sm ${isParent ? 'col-span-full' : ''}`}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.03, boxShadow: "0 8px 32px rgba(0,0,0,0.10)" }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex items-center gap-4 mb-2">
        <img src={servicio.icon} alt={servicio.label} className="h-10 md:h-16 text-[#000052] shrink-0" />
        <span className={`${isParent ? 'text-xl md:text-3xl font-semibold' : 'text-base md:text-lg font-medium'}`}>
          {servicio.label}
        </span>
      </div>
      {isParent && (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-4 pl-11">
          {servicio.children.map((child, idx) => (
            <motion.div
              key={idx}
              className="flex items-center gap-4 p-3 bg-gray-50 rounded-md"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, backgroundColor: "#e0f7fa" }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
            >
              <child.icon className="w-5 h-5 text-[#000052] shrink-0" />
              <span className="text-sm md:text-lg">{child.label}</span>
            </motion.div>
          ))}
        </div>
      )}
    </motion.div>
  );
}
