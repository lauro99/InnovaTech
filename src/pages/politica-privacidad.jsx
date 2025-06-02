import Layout from "../components/Layout";
import Link from "next/link";

export default function PoliticaPrivacidad() {
  return (
    <Layout
      title="Política de Privacidad - InnovaTech"
      description="Política de privacidad de InnovaTech. Conozca cómo protegemos y manejamos su información personal."
      keywords="política de privacidad, protección de datos, privacidad, innovatech"
      image="/favicon.png"
    >
      <div className="container mx-auto px-4 py-16">
        <div className="mb-6">
          <Link href="/" className="inline-block px-6 py-2 bg-[#000052] text-white rounded-lg hover:bg-[#000070] transition-colors">
            ← Regresar
          </Link>
        </div>
        <h1 className="text-4xl font-bold mb-8 text-center">Política de Privacidad</h1>
        <div className="prose max-w-4xl mx-auto">
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">1. Información que Recopilamos</h2>
            <p className="mb-4">
              Recopilamos información que usted nos proporciona directamente cuando:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>Se comunica con nosotros a través del formulario de contacto</li>
              <li>Se suscribe a nuestro boletín informativo</li>
              <li>Solicita información sobre nuestros servicios</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">2. Uso de la Información</h2>
            <p className="mb-4">
              Utilizamos la información recopilada para:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>Responder a sus consultas y solicitudes</li>
              <li>Mejorar nuestros servicios</li>
              <li>Enviar comunicaciones relevantes sobre nuestros servicios</li>
              <li>Cumplir con obligaciones legales</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">3. Protección de Datos</h2>
            <p className="mb-4">
              Implementamos medidas de seguridad técnicas y organizativas apropiadas para proteger sus datos personales contra el acceso, modificación, divulgación o destrucción no autorizada.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">4. Sus Derechos</h2>
            <p className="mb-4">
              Usted tiene derecho a:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>Acceder a sus datos personales</li>
              <li>Rectificar sus datos personales</li>
              <li>Solicitar la eliminación de sus datos personales</li>
              <li>Oponerse al procesamiento de sus datos personales</li>
              <li>Solicitar la portabilidad de sus datos</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">5. Contacto</h2>
            <p className="mb-4">
              Si tiene alguna pregunta sobre nuestra política de privacidad, puede contactarnos a través de nuestro formulario de contacto o por los medios proporcionados en nuestra sección de contacto.
            </p>
          </section>
        </div>
      </div>
    </Layout>
  );
}
