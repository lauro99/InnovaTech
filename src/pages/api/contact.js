export default function handler(req, res) {
  if (req.method === "POST") {
    const { nombre, correo, mensaje } = req.body;
    // Aquí podrías agregar lógica para enviar email, guardar en DB, etc.
    if (!nombre || !correo || !mensaje) {
      return res.status(400).json({ ok: false, error: "Faltan campos" });
    }
    return res.status(200).json({ ok: true, message: "Mensaje recibido" });
  }
  res.setHeader("Allow", ["POST"]);
  res.status(405).end(`Method ${req.method} Not Allowed`);
} 