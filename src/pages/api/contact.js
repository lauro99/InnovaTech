import { Resend } from "resend";
import { EmailTemplate } from "../../components/EmailTemplate";

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function POST(req, res) {
  const reqData = req.body;
  const dataParse = JSON.parse(reqData);
  const { data, error } = await resend.emails.send({
    from: "Contacto InnovaTech <laureano@innovatechmex.com>",
    to: ["laureano@innovatechmex.com"],
    subject: "Nuevo mensaje de contacto",
    react: EmailTemplate({
      nombre: dataParse.nombre,
      empresa: dataParse.empresa,
      servicio: dataParse.servicio,
      correo: dataParse.correo,
      mensaje: dataParse.mensaje,
      celular: dataParse.celular,
    }),
  });

  if (error) {
    return res.status(400).json(error);
  }

  res.status(200).json(data);
}
