import Layout from "../components/Layout";
import Link from "next/link";

export default function TerminosYCondiciones() {
  return (
    <Layout
      title="Términos y Condiciones - InnovaTech"
      description="Términos y condiciones de uso de InnovaTech. Conozca nuestras políticas y acuerdos de servicio."
      keywords="términos y condiciones, acuerdos legales, innovatech, políticas de uso"
      image="/favicon.png"
    >
      <div className="container mx-auto px-4 py-16">
        <div className="mb-6">
          <Link href="/" className="inline-block px-6 py-2 bg-[#000052] text-white rounded-lg hover:bg-[#000070] transition-colors">
            ← Regresar
          </Link>
        </div>
        <h1 className="text-4xl font-bold mb-8 text-center">Términos y Condiciones</h1>
        <div className="prose max-w-4xl mx-auto">
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">1. Aceptación de los Términos</h2>
            <p className="mb-4">
              Al acceder y utilizar este sitio web, usted acepta estar sujeto a estos términos y condiciones de uso. Si no está de acuerdo con alguno de estos términos, le rogamos que no utilice nuestro sitio web.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">2. Uso del Sitio</h2>
            <p className="mb-4">
              El contenido de este sitio web es para su información general y uso personal. Está sujeto a cambios sin previo aviso.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">3. Propiedad Intelectual</h2>
            <p className="mb-4">
              Todo el contenido de este sitio web, incluyendo textos, gráficos, logos, imágenes y software, está protegido por derechos de autor y otros derechos de propiedad intelectual.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">4. Limitación de Responsabilidad</h2>
            <p className="mb-4">
              InnovaTech no será responsable de ningún daño directo, indirecto, incidental, consecuente o punitivo que surja del uso o la imposibilidad de usar nuestros servicios.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">5. Modificaciones</h2>
            <p className="mb-4">
              Nos reservamos el derecho de modificar estos términos y condiciones en cualquier momento. Los cambios entrarán en vigor inmediatamente después de su publicación en el sitio web.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">6. Legislación Aplicable</h2>
            <p className="mb-4">
              Estos términos y condiciones se rigen por las leyes de México. Cualquier disputa relacionada con estos términos será sometida a la jurisdicción exclusiva de los tribunales de México.
            </p>
          </section>
        </div>
      </div>
    </Layout>
  );
}
