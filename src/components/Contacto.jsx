"use client";
import { useState } from "react";
import { Mail, Phone, MapPin } from "lucide-react";
import { z } from "zod";
import { motion } from "framer-motion";

// Schema de validación con Zod
const contactoSchema = z.object({
  nombre: z.string().min(2, "El nombre debe tener al menos 2 caracteres"),
  empresa: z.string().optional(),
  servicio: z.string().min(1, "Debes seleccionar un servicio"),
  correo: z.string().email("Correo electrónico inválido"),
  celular: z
    .string()
    .regex(/^(\+?\d{0,3})?\s?[\d\s-]{10,}$/, "Número de teléfono inválido")
    .optional(),
  mensaje: z.string().min(10, "El mensaje debe tener al menos 10 caracteres"),
});

export default function Contacto() {
  const [formData, setFormData] = useState({
    nombre: "",
    empresa: "",
    servicio: "",
    correo: "",
    celular: "",
    mensaje: "",
  });
  const [enviando, setEnviando] = useState(false);
  const [exito, setExito] = useState("");
  const [errores, setErrores] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Limpiar error del campo cuando el usuario empieza a escribir
    if (errores[name]) {
      setErrores((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setEnviando(true);
    setExito("");
    setErrores({});

    try {
      // Validar datos con Zod
      const validatedData = contactoSchema.parse(formData);
      const { nombre, empresa, servicio, correo, celular, mensaje } = validatedData;

      // Enviar datos al backend
      const response = await fetch("/api/contact", {
        method: "POST",
        body: JSON.stringify({
          nombre,
          empresa,
          servicio,
          correo,
          celular,
          mensaje,
        }),
      });

      console.log(response);

     

      if (response.ok) {
        setExito("¡Mensaje enviado correctamente!");
        setFormData({
          nombre: "",
          empresa: "",
          servicio: "",
          correo: "",
          celular: "",
          mensaje: "",
        });
      } else {
        setErrores({
          submit: data.error || "Ocurrió un error. Intenta de nuevo.",
        });
      }
    } catch (err) {
      if (err instanceof z.ZodError) {
        const errorMap = {};
        err.errors.forEach((error) => {
          errorMap[error.path[0]] = error.message;
        });
        setErrores(errorMap);
      } else {
        setErrores({ submit: "Ocurrió un error. Intenta de nuevo." });
      }
    } finally {
      setEnviando(false);
    }
  };

  return (
    <section className="py-16 px-4 max-w-2xl mx-auto">
      <motion.h2
        className="text-3xl font-semibold mb-6 text-center"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        Contacto
      </motion.h2>
      <motion.form
        className="flex flex-col gap-4 bg-white p-8 rounded-lg shadow-sm"
        onSubmit={handleSubmit}
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.2 }}
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="flex flex-col gap-1">
            <input
              type="text"
              name="nombre"
              placeholder="Nombre *"
              className={`p-2 border rounded ${
                errores.nombre ? "border-red-500" : "border-[#000052]"
              }`}
              value={formData.nombre}
              onChange={handleChange}
              required
            />
            {errores.nombre && (
              <span className="text-red-500 text-sm">{errores.nombre}</span>
            )}
          </div>

          <div className="flex flex-col gap-1">
            <input
              type="text"
              name="empresa"
              placeholder="Empresa"
              className="p-2 border rounded border-[#000052]"
              value={formData.empresa}
              onChange={handleChange}
            />
          </div>

          <div className="flex flex-col gap-1">
            <input
              type="tel"
              name="celular"
              placeholder="Celular"
              className={`p-2 border rounded ${
                errores.celular ? "border-red-500" : "border-[#000052]"
              }`}
              value={formData.celular}
              onChange={handleChange}
            />
            {errores.celular && (
              <span className="text-red-500 text-sm">{errores.celular}</span>
            )}
          </div>

          <div className="flex flex-col gap-1">
            <input
              type="email"
              name="correo"
              placeholder="Correo *"
              className={`p-2 border rounded ${
                errores.correo ? "border-red-500" : "border-[#000052]"
              }`}
              value={formData.correo}
              onChange={handleChange}
              required
            />
            {errores.correo && (
              <span className="text-red-500 text-sm">{errores.correo}</span>
            )}
          </div>
        </div>
        <div className="flex flex-col gap-1">
          <select
            name="servicio"
            className={`p-2 border rounded ${
              errores.servicio ? "border-red-500" : "border-[#000052]"
            }`}
            value={formData.servicio}
            onChange={handleChange}
            required
          >
            <option value="">Selecciona un servicio *</option>
            <option value="ingenieria-electrica">Ingeniería Eléctrica</option>
            <option value="desarrollo-tecnologia">
              Desarrollo de Tecnología
            </option>
            <option value="biomedica">Biomédica</option>
            <option value="automatizacion">Automatización</option>
            <option value="diseno-cad">Diseño CAD/CAE</option>
            <option value="robotica">Robótica</option>
            <option value="renovable">Renovable</option>
            <option value="certificaciones">Certificaciones</option>
          </select>
          {errores.servicio && (
            <span className="text-red-500 text-sm">{errores.servicio}</span>
          )}
        </div>

        <div className="flex flex-col gap-1">
          <textarea
            name="mensaje"
            placeholder="Mensaje *"
            className={`p-2 border rounded min-h-[100px] ${
              errores.mensaje ? "border-red-500" : "border-[#000052]"
            }`}
            value={formData.mensaje}
            onChange={handleChange}
            required
          />
          {errores.mensaje && (
            <span className="text-red-500 text-sm">{errores.mensaje}</span>
          )}
        </div>

        <motion.button
          type="submit"
          className="bg-[#000052] text-white py-2 rounded font-semibold hover:bg-[#C5009B] transition disabled:opacity-60"
          disabled={enviando}
          whileTap={{ scale: 0.97 }}
        >
          {enviando ? "Enviando..." : "Enviar"}
        </motion.button>

        {exito && (
          <motion.div
            className="text-green-600 text-center font-medium"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {exito}
          </motion.div>
        )}
        {errores.submit && (
          <motion.div
            className="text-red-600 text-center font-medium"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {errores.submit}
          </motion.div>
        )}
      </motion.form>

      <div className="flex flex-col sm:flex-row gap-4 mt-8 justify-center items-center text-[#000052]">
        <div className="flex items-center gap-2">
          <Mail className="w-5 h-5" /> contacto@innovatechmex.com
        </div>
        <div className="flex items-center gap-2">
          <Phone className="w-5 h-5" /> +52 221 429 0985
        </div>
        <div className="flex items-center gap-2">
          <MapPin className="w-5 h-5" /> México
        </div>
      </div>
    </section>
  );
}
