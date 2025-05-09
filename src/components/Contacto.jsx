import { useState } from "react";
import { Mail, Phone, MapPin } from "lucide-react";

export default function Contacto() {
  // Estados para el formulario de contacto
  const [nombre, setNombre] = useState("");
  const [correo, setCorreo] = useState("");
  const [mensaje, setMensaje] = useState("");
  const [enviando, setEnviando] = useState(false);
  const [exito, setExito] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setEnviando(true);
    setExito("");
    setError("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ nombre, correo, mensaje }),
      });
      const data = await res.json();
      if (data.ok) {
        setExito("¡Mensaje enviado correctamente!");
        setNombre("");
        setCorreo("");
        setMensaje("");
      } else {
        setError(data.error || "Ocurrió un error. Intenta de nuevo.");
      }
    } catch (err) {
      setError("Ocurrió un error. Intenta de nuevo.");
    } finally {
      setEnviando(false);
    }
  };

  return (
    <section className="py-16 px-4 max-w-2xl mx-auto">
      <h2 className="text-3xl font-semibold mb-6 text-center">Contacto</h2>
      <form className="flex flex-col gap-4 bg-white p-8 rounded-lg shadow-sm" onSubmit={handleSubmit}>
        <div className="flex gap-4">
          <input
            type="text"
            placeholder="Nombre"
            className="flex-1 p-2 border rounded border-[#000052]"
            value={nombre}
            onChange={e => setNombre(e.target.value)}
            required
          />
          <input
            type="email"
            placeholder="Correo"
            className="flex-1 p-2 border rounded border-[#000052]"
            value={correo}
            onChange={e => setCorreo(e.target.value)}
            required
          />
        </div>
        <textarea
          placeholder="Mensaje"
          className="p-2 border rounded min-h-[100px] border-[#000052]"
          value={mensaje}
          onChange={e => setMensaje(e.target.value)}
          required
        />
        <button
          type="submit"
          className="bg-[#000052] text-white py-2 rounded font-semibold hover:bg-[#C5009B] transition disabled:opacity-60"
          disabled={enviando}
        >
          {enviando ? "Enviando..." : "Enviar"}
        </button>
        {exito && <div className="text-[#00CBFA] text-center font-medium">{exito}</div>}
        {error && <div className="text-red-600 text-center font-medium">{error}</div>}
      </form>
      <div className="flex flex-col sm:flex-row gap-4 mt-8 justify-center items-center text-[#000052]">
        <div className="flex items-center gap-2"><Mail className="w-5 h-5" /> contacto@innovatech.com</div>
        <div className="flex items-center gap-2"><Phone className="w-5 h-5" /> +52 123 456 7890</div>
        <div className="flex items-center gap-2"><MapPin className="w-5 h-5" /> México</div>
      </div>
    </section>
  );
}
