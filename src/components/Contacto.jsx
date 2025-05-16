"use client";
import { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Instagram,
  Twitter,
  Linkedin,
  Github,
} from "lucide-react";
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
      const { nombre, empresa, servicio, correo, celular, mensaje } =
        validatedData;

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

  // Variantes para animación de elementos del formulario
  const formItemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        ease: "easeOut",
      },
    }),
  };

  // Nuevos variantes para animaciones adicionales
  const socialIconVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: (i) => ({
      scale: 1,
      opacity: 1,
      transition: {
        delay: i * 0.1,
        duration: 0.4,
        type: "spring",
        stiffness: 260,
        damping: 20,
      },
    }),
    hover: {
      scale: 1.15,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10,
      },
    },
  };

  return (
    <section className="py-16 bg-gradient-to-b from-white to-slate-50 relative overflow-hidden">
      {/* Elementos decorativos de fondo mejorados */}
      <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full bg-[#00C2FF]/5 blur-[100px] -z-10"></div>
      <div className="absolute bottom-1/3 right-1/4 w-80 h-80 rounded-full bg-[#000052]/5 blur-[80px] -z-10"></div>
      <div className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full bg-gradient-to-r from-[#00ADBF]/10 to-[#C5009B]/5 blur-[120px] -z-10"></div>

      <div className="container mx-auto px-4 max-w-6xl">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.h2
            className="text-4xl md:text-5xl font-bold mb-3 text-center text-[#000052] font-haettenschweiler"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            CONTACTO
          </motion.h2>

          <motion.div
            className="w-28 h-1.5 bg-gradient-to-r from-[#00C2FF] via-[#00ADBF] to-transparent mx-auto mb-6"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          />

          <motion.p
            className="text-center text-slate-600 max-w-md mx-auto text-lg"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Estamos listos para ayudarte con tus proyectos tecnológicos
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          {/* Columna de información de contacto y redes sociales */}
          <motion.div
            className="lg:col-span-1 order-2 lg:order-1"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-white shadow-xl rounded-2xl overflow-hidden border border-slate-100">
              {/* Cabecera */}
              <div className="h-24 bg-gradient-to-r from-[#000052] to-[#00ADBF] flex items-center justify-center p-6">
                <h3 className="text-2xl font-bold text-white">
                  Información de Contacto
                </h3>
              </div>

              {/* Información de contacto */}
              <div className="p-6 space-y-8">
                <motion.div
                  className="flex items-start gap-4"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-[#000052] to-[#00ADBF] rounded-full flex items-center justify-center text-white shadow-md flex-shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-medium text-slate-700">Email</h4>
                    <a
                      href="mailto:contacto@innovatechmex.com"
                      className="text-[#00ADBF] hover:underline"
                    >
                      contacto@innovatechmex.com
                    </a>
                  </div>
                </motion.div>

                <motion.div
                  className="flex items-start gap-4"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-[#000052] to-[#00ADBF] rounded-full flex items-center justify-center text-white shadow-md flex-shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-medium text-slate-700">Teléfono</h4>
                    <a
                      href="tel:+5222142909850"
                      className="text-[#00ADBF] hover:underline"
                    >
                      +52 221 429 0985
                    </a>
                  </div>
                </motion.div>

                <motion.div
                  className="flex items-start gap-4"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 }}
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-[#000052] to-[#00ADBF] rounded-full flex items-center justify-center text-white shadow-md flex-shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-medium text-slate-700">Ubicación</h4>
                    <p className="text-[#000052]">
                      Ciudad de México, México
                      <br />
                      CP 03100
                    </p>
                  </div>
                </motion.div>

                {/* Redes Sociales */}
                <div className="pt-6 border-t border-slate-100">
                  <h4 className="text-lg font-semibold text-[#000052] mb-4">
                    Síguenos
                  </h4>
                  <div className="flex items-center justify-center gap-4">
                    <motion.a
                      href="https://facebook.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-gradient-to-br from-[#000052] to-[#00ADBF] rounded-full flex items-center justify-center text-white shadow-md hover:shadow-lg transition-all"
                      custom={0}
                      variants={socialIconVariants}
                      initial="hidden"
                      whileInView="visible"
                      whileHover="hover"
                      viewport={{ once: true }}
                    >
                      <Facebook className="w-5 h-5" />
                    </motion.a>
                    <motion.a
                      href="https://instagram.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-gradient-to-br from-[#000052] to-[#00ADBF] rounded-full flex items-center justify-center text-white shadow-md hover:shadow-lg transition-all"
                      custom={1}
                      variants={socialIconVariants}
                      initial="hidden"
                      whileInView="visible"
                      whileHover="hover"
                      viewport={{ once: true }}
                    >
                      <Instagram className="w-5 h-5" />
                    </motion.a>
                    <motion.a
                      href="https://twitter.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-gradient-to-br from-[#000052] to-[#00ADBF] rounded-full flex items-center justify-center text-white shadow-md hover:shadow-lg transition-all"
                      custom={2}
                      variants={socialIconVariants}
                      initial="hidden"
                      whileInView="visible"
                      whileHover="hover"
                      viewport={{ once: true }}
                    >
                      <Twitter className="w-5 h-5" />
                    </motion.a>
                    <motion.a
                      href="https://linkedin.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-gradient-to-br from-[#000052] to-[#00ADBF] rounded-full flex items-center justify-center text-white shadow-md hover:shadow-lg transition-all"
                      custom={3}
                      variants={socialIconVariants}
                      initial="hidden"
                      whileInView="visible"
                      whileHover="hover"
                      viewport={{ once: true }}
                    >
                      <Linkedin className="w-5 h-5" />
                    </motion.a>{" "}
                    <motion.a
                      href="https://github.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-gradient-to-br from-[#000052] to-[#00ADBF] rounded-full flex items-center justify-center text-white shadow-md hover:shadow-lg transition-all"
                      custom={4}
                      variants={socialIconVariants}
                      initial="hidden"
                      whileInView="visible"
                      whileHover="hover"
                      viewport={{ once: true }}
                    >
                      <Github className="w-5 h-5" />
                    </motion.a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Formulario de contacto */}
          <motion.div
            className="lg:col-span-2 order-1 lg:order-2"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <motion.form
              className="bg-white p-8 rounded-2xl shadow-xl border border-slate-100 relative overflow-hidden"
              onSubmit={handleSubmit}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              {/* Degradado decorativo en la esquina */}
              <div className="absolute -top-16 -right-16 w-32 h-32 bg-gradient-to-br from-[#00C2FF]/20 to-[#00C2FF]/5 rounded-full blur-md"></div>

              <h3 className="text-2xl font-bold text-[#000052] mb-6">
                Envíanos un mensaje
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <motion.div
                  className="flex flex-col gap-1"
                  custom={0}
                  variants={formItemVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  <label
                    htmlFor="nombre"
                    className="text-sm text-[#000052] font-medium ml-1 mb-1 flex items-center"
                  >
                    Nombre <span className="text-red-500 ml-0.5">*</span>
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      name="nombre"
                      id="nombre"
                      placeholder="Ingresa tu nombre"
                      className={`w-full p-3 pl-10 rounded-lg border bg-white/80 outline-none transition-all duration-200 ${
                        errores.nombre
                          ? "border-red-500 focus:border-red-500"
                          : "border-slate-200 focus:border-[#00C2FF]"
                      }`}
                      value={formData.nombre}
                      onChange={handleChange}
                      required
                    />
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 absolute left-3 top-3.5 text-[#000052]"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  {errores.nombre && (
                    <span className="text-red-500 text-sm ml-2">
                      {errores.nombre}
                    </span>
                  )}
                </motion.div>

                <motion.div
                  className="flex flex-col gap-1"
                  custom={1}
                  variants={formItemVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  <label
                    htmlFor="empresa"
                    className="text-sm text-[#000052] font-medium ml-1 mb-1"
                  >
                    Empresa
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      name="empresa"
                      id="empresa"
                      placeholder="Nombre de tu empresa"
                      className="w-full p-3 pl-10 rounded-lg border border-slate-200 bg-white/80 outline-none focus:border-[#00C2FF] transition-all duration-200"
                      value={formData.empresa}
                      onChange={handleChange}
                    />
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 absolute left-3 top-3.5 text-[#000052]"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4zm3 1h2v2H7V5zm2 4H7v2h2V9zm2-4h2v2h-2V5zm2 4h-2v2h2V9z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                </motion.div>

                <motion.div
                  className="flex flex-col gap-1"
                  custom={2}
                  variants={formItemVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  <label
                    htmlFor="correo"
                    className="text-sm text-[#000052] font-medium ml-1 mb-1 flex items-center"
                  >
                    Correo <span className="text-red-500 ml-0.5">*</span>
                  </label>
                  <div className="relative">
                    <input
                      type="email"
                      name="correo"
                      id="correo"
                      placeholder="ejemplo@correo.com"
                      className={`w-full p-3 pl-10 rounded-lg border bg-white/80 outline-none transition-all duration-200 ${
                        errores.correo
                          ? "border-red-500 focus:border-red-500"
                          : "border-slate-200 focus:border-[#00C2FF]"
                      }`}
                      value={formData.correo}
                      onChange={handleChange}
                      required
                    />
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 absolute left-3 top-3.5 text-[#000052]"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                    </svg>
                  </div>
                  {errores.correo && (
                    <span className="text-red-500 text-sm ml-2">
                      {errores.correo}
                    </span>
                  )}
                </motion.div>

                <motion.div
                  className="flex flex-col gap-1"
                  custom={3}
                  variants={formItemVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  <label
                    htmlFor="celular"
                    className="text-sm text-[#000052] font-medium ml-1 mb-1"
                  >
                    Celular
                  </label>
                  <div className="relative">
                    <input
                      type="tel"
                      name="celular"
                      id="celular"
                      placeholder="Tu número de teléfono"
                      className={`w-full p-3 pl-10 rounded-lg border bg-white/80 outline-none transition-all duration-200 ${
                        errores.celular
                          ? "border-red-500 focus:border-red-500"
                          : "border-slate-200 focus:border-[#00C2FF]"
                      }`}
                      value={formData.celular}
                      onChange={handleChange}
                    />
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 absolute left-3 top-3.5 text-[#000052]"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                    </svg>
                  </div>
                  {errores.celular && (
                    <span className="text-red-500 text-sm ml-2">
                      {errores.celular}
                    </span>
                  )}
                </motion.div>
              </div>

              <motion.div
                className="flex flex-col gap-1 mt-6"
                custom={4}
                variants={formItemVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <label
                  htmlFor="servicio"
                  className="text-sm text-[#000052] font-medium ml-1 mb-1 flex items-center"
                >
                  Servicio <span className="text-red-500 ml-0.5">*</span>
                </label>
                <div className="relative">
                  <select
                    name="servicio"
                    id="servicio"
                    className={`w-full p-3 pl-10 rounded-lg border bg-white/80 appearance-none outline-none transition-all duration-200 ${
                      errores.servicio
                        ? "border-red-500 focus:border-red-500"
                        : "border-slate-200 focus:border-[#00C2FF]"
                    } ${!formData.servicio ? "text-slate-500" : "text-[#000052]"}`}
                    value={formData.servicio}
                    onChange={handleChange}
                    required
                  >
                    <option value="" disabled>
                      Selecciona un servicio
                    </option>
                    <option value="ingenieria-electrica">
                      Ingeniería Eléctrica
                    </option>
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
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 absolute left-3 top-3.5 text-[#000052]"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                    <svg
                      className="w-4 h-4 text-[#000052]"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 9l-7 7-7-7"
                      ></path>
                    </svg>
                  </div>
                </div>
                {errores.servicio && (
                  <span className="text-red-500 text-sm ml-2">
                    {errores.servicio}
                  </span>
                )}
              </motion.div>

              <motion.div
                className="flex flex-col gap-1 mt-6"
                custom={5}
                variants={formItemVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <label
                  htmlFor="mensaje"
                  className="text-sm text-[#000052] font-medium ml-1 mb-1 flex items-center"
                >
                  Mensaje <span className="text-red-500 ml-0.5">*</span>
                </label>
                <div className="relative">
                  <textarea
                    name="mensaje"
                    id="mensaje"
                    placeholder="Escribe tu mensaje aquí..."
                    className={`w-full p-3 pl-10 rounded-lg border bg-white/80 outline-none resize-none min-h-[150px] transition-all duration-200 ${
                      errores.mensaje
                        ? "border-red-500 focus:border-red-500"
                        : "border-slate-200 focus:border-[#00C2FF]"
                    }`}
                    value={formData.mensaje}
                    onChange={handleChange}
                    required
                  />
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 absolute left-3 top-3.5 text-[#000052]"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                {errores.mensaje && (
                  <span className="text-red-500 text-sm ml-2">
                    {errores.mensaje}
                  </span>
                )}
              </motion.div>

              <motion.div
                className="mt-8"
                custom={6}
                variants={formItemVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <motion.button
                  type="submit"
                  className="w-full bg-gradient-to-r from-[#000052] to-[#00ADBF] text-white py-4 px-6 rounded-lg font-semibold hover:from-[#000052] hover:to-[#00C2FF] transition-all duration-300 disabled:opacity-60 shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
                  disabled={enviando}
                  whileTap={{ scale: 0.97 }}
                >
                  <div className="flex items-center justify-center gap-2">
                    {enviando ? (
                      <>
                        <svg
                          className="animate-spin h-5 w-5 text-white"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          ></circle>
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          ></path>
                        </svg>
                        <span>Enviando...</span>
                      </>
                    ) : (
                      <>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-6 w-6"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
                        </svg>
                        <span className="text-lg">Enviar mensaje</span>
                      </>
                    )}
                  </div>
                </motion.button>
              </motion.div>

              {exito && (
                <motion.div
                  className="bg-green-50 border border-green-100 text-green-700 text-center font-medium p-4 rounded-lg mt-6 flex items-center justify-center gap-2 shadow-inner"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-green-500"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  {exito}
                </motion.div>
              )}

              {errores.submit && (
                <motion.div
                  className="bg-red-50 border border-red-100 text-red-700 text-center font-medium p-4 rounded-lg mt-6 flex items-center justify-center gap-2 shadow-inner"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-red-500"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                      clipRule="evenodd"
                    />
                  </svg>
                  {errores.submit}
                </motion.div>
              )}
            </motion.form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
