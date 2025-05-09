import { z } from 'zod';

const contactoSchema = z.object({
  nombre: z.string().min(2, "El nombre debe tener al menos 2 caracteres"),
  empresa: z.string().optional(),
  servicio: z.string().min(1, "Debes seleccionar un servicio"),
  correo: z.string().email("Correo electrónico inválido"),
  celular: z.string()
    .regex(/^(\+?\d{0,3})?\s?[\d\s-]{10,}$/, "Número de teléfono inválido")
    .optional(),
  mensaje: z.string().min(10, "El mensaje debe tener al menos 10 caracteres"),
});

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    // Validar los datos con Zod
    const validatedData = contactoSchema.parse(req.body);

    // Aquí iría la lógica para enviar el correo o guardar en base de datos
    // Por ahora solo simulamos un delay
    await new Promise(resolve => setTimeout(resolve, 1000));

    return res.status(200).json({ ok: true });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return res.status(400).json({ 
        error: 'Datos inválidos', 
        details: error.errors 
      });
    }
    
    return res.status(500).json({ 
      error: 'Error interno del servidor' 
    });
  }
}