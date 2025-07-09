import Layout from "../components/Layout";
import Link from "next/link";
import { useEffect } from "react";

export default function TerminosYCondiciones() {
  // Registrar la fecha de aceptación cuando el usuario ve los términos
  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("terminos_vistos", new Date().toISOString());
    }
  }, []);

  return (
    <Layout
      title="Términos y Condiciones - InnovaTech"
      description="Términos y condiciones legales de uso de InnovaTech. Conozca nuestras políticas, acuerdos de servicio y condiciones contractuales."
      keywords="términos y condiciones, acuerdos legales, innovatech, políticas de uso, contrato, responsabilidad legal, propiedad intelectual"
      image="/favicon.png"
    >
      <div className="container mx-auto px-4 py-16">
        <div className="mb-6">
          <Link href="/" className="inline-block px-6 py-2 bg-[#000052] text-white rounded-lg hover:bg-[#000070] transition-colors">
            ← Regresar
          </Link>
        </div>
        <h1 className="text-4xl font-bold mb-8 text-center">Términos y Condiciones</h1>
        <p className="text-center mb-8 text-sm text-gray-600">
          Última actualización: 8 de julio de 2025
        </p>
        <div className="prose max-w-4xl mx-auto">
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">1. Aceptación de los Términos</h2>
            <p className="mb-4">
              Al acceder y utilizar este sitio web, así como cualquier servicio proporcionado por InnovaTech, usted acepta estar sujeto a estos términos y condiciones de uso en su totalidad. La aceptación constituye un acuerdo legal vinculante entre usted e InnovaTech. Si no está de acuerdo con alguno de estos términos, le rogamos que no utilice nuestro sitio web ni contrate nuestros servicios.
            </p>
            <p className="mb-4">
              La mera navegación por nuestro sitio web implica el conocimiento y la aceptación de estos términos. Para menores de edad, se requiere la supervisión y aprobación de un tutor legal para utilizar nuestros servicios.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">2. Uso del Sitio y Servicios</h2>
            <p className="mb-4">
              El contenido de este sitio web es para su información general y uso personal. Está sujeto a cambios sin previo aviso. Nos reservamos el derecho de restringir el acceso a ciertas secciones o a la totalidad del sitio web sin previo aviso.
            </p>
            <p className="mb-4">
              El usuario se compromete a utilizar el sitio web y los servicios de InnovaTech de manera legal, sin infringir derechos de terceros ni realizar actividades que puedan dañar, inutilizar, sobrecargar o deteriorar el sitio web o los servicios.
            </p>
            <p className="mb-4">
              Queda estrictamente prohibido el uso de sistemas automatizados o software para extraer datos de este sitio web ("screen scraping") sin un acuerdo escrito previo.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">3. Propiedad Intelectual</h2>
            <p className="mb-4">
              Todo el contenido de este sitio web, incluyendo pero no limitado a textos, gráficos, logos, imágenes, clips de audio, descargas digitales, compilaciones de datos y software, está protegido por derechos de autor y otros derechos de propiedad intelectual que pertenecen a InnovaTech o a sus proveedores de contenido y está protegido por las leyes nacionales e internacionales de propiedad intelectual.
            </p>
            <p className="mb-4">
              El uso de cualquier software o herramienta de terceros utilizada durante la prestación de servicios está sujeto a los términos de licencia de sus respectivos desarrolladores. InnovaTech no reclama titularidad ni derechos sobre estas herramientas o programas. Cualquier uso indebido de estos recursos es responsabilidad exclusiva del usuario.
            </p>
            <p className="mb-4">
              Los entregables y resultados de los proyectos realizados por InnovaTech son propiedad del cliente únicamente después del pago completo de los servicios. Hasta entonces, todos los derechos de propiedad intelectual permanecen con InnovaTech.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">4. Limitación de Responsabilidad</h2>
            <p className="mb-4">
              InnovaTech proporciona este sitio web y sus servicios "tal cual", sin garantías de ningún tipo, ya sean expresas o implícitas. No garantizamos que el sitio web o los servicios sean ininterrumpidos, seguros o libres de errores.
            </p>
            <p className="mb-4">
              InnovaTech no será responsable de ningún daño directo, indirecto, incidental, consecuente, especial o punitivo que surja del uso o la imposibilidad de usar nuestros servicios, incluso si se ha informado de la posibilidad de tales daños. Esto incluye, pero no se limita a, pérdida de beneficios, interrupción de negocio, pérdida de programas o datos.
            </p>
            <p className="mb-4">
              No nos hacemos responsables por fallos, errores o problemas derivados del uso de herramientas o tecnologías de terceros, ni de las consecuencias que puedan derivarse de la implementación de nuestras soluciones tecnológicas en entornos específicos del cliente.
            </p>
            <p className="mb-4">
              La responsabilidad máxima acumulada de InnovaTech, independientemente de la forma de acción, no excederá el monto total pagado por el cliente por los servicios específicos que dieron lugar a la reclamación.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">5. Garantías y Servicio Post-Venta</h2>
            <p className="mb-4">
              InnovaTech ofrece una garantía limitada sobre sus servicios y productos por un período específico acordado en cada contrato. Esta garantía cubre defectos de fabricación y diseño, pero no cubre mal uso, daños accidentales o modificaciones realizadas por el cliente.
            </p>
            <p className="mb-4">
              Cualquier reclamación de garantía debe ser notificada por escrito dentro de los 15 días siguientes a la detección del problema. InnovaTech se reserva el derecho de determinar si un defecto está cubierto por la garantía.
            </p>
            <p className="mb-4">
              El servicio post-venta estará disponible según los términos específicos de cada contrato y puede incluir costos adicionales después del período de garantía.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">6. Pagos y Facturación</h2>
            <p className="mb-4">
              Los precios de nuestros servicios están sujetos a cambios sin previo aviso. InnovaTech se reserva el derecho de modificar o discontinuar cualquier servicio sin responsabilidad hacia el cliente o terceros.
            </p>
            <p className="mb-4">
              Los pagos deben realizarse según los términos especificados en cada contrato o propuesta. El incumplimiento en los pagos puede resultar en la suspensión de servicios, retención de entregables y cargos por intereses de acuerdo con la legislación vigente.
            </p>
            <p className="mb-4">
              Todos los impuestos aplicables serán responsabilidad del cliente a menos que se especifique lo contrario.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">7. Confidencialidad y Datos Personales</h2>
            <p className="mb-4">
              InnovaTech se compromete a mantener la confidencialidad de toda la información proporcionada por el cliente. No divulgaremos información confidencial a terceros sin autorización previa, excepto cuando sea requerido por ley o por orden judicial.
            </p>
            <p className="mb-4">
              El tratamiento de datos personales se rige por nuestra <Link href="/politica-privacidad" className="text-blue-600 hover:underline">Política de Privacidad</Link>, que forma parte integral de estos términos y condiciones.
            </p>
            <p className="mb-4">
              El cliente se compromete igualmente a mantener la confidencialidad sobre metodologías, procesos y conocimientos técnicos de InnovaTech a los que tenga acceso durante la prestación de servicios.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">8. Modificaciones</h2>
            <p className="mb-4">
              Nos reservamos el derecho de modificar estos términos y condiciones en cualquier momento sin previo aviso. Los cambios entrarán en vigor inmediatamente después de su publicación en el sitio web. Es responsabilidad del usuario revisar periódicamente estos términos.
            </p>
            <p className="mb-4">
              El uso continuado del sitio web o de los servicios después de cualquier modificación constituye aceptación de los nuevos términos y condiciones.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">9. Fuerza Mayor</h2>
            <p className="mb-4">
              InnovaTech no será responsable por el incumplimiento de sus obligaciones debido a circunstancias fuera de su control razonable, incluidas, entre otras, desastres naturales, actos terroristas, guerra, disturbios civiles, incendios, explosiones, epidemias, pandemias, huelgas, problemas laborales, interrupciones en las telecomunicaciones o internet, actos gubernamentales o fallos de servicios públicos.
            </p>
            <p className="mb-4">
              En caso de fuerza mayor, InnovaTech notificará al cliente tan pronto como sea razonablemente posible y tomará medidas comercialmente razonables para minimizar el impacto en los servicios.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">10. Terminación</h2>
            <p className="mb-4">
              InnovaTech se reserva el derecho de terminar o suspender el acceso a nuestros servicios inmediatamente, sin previo aviso ni responsabilidad, por cualquier motivo, incluyendo sin limitación si usted incumple estos Términos y Condiciones.
            </p>
            <p className="mb-4">
              Tras la terminación, su derecho a utilizar los servicios cesará inmediatamente. Las disposiciones relativas a propiedad intelectual, limitación de responsabilidad, indemnización y resolución de disputas sobrevivirán a cualquier terminación.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">11. Legislación Aplicable y Resolución de Disputas</h2>
            <p className="mb-4">
              Estos términos y condiciones se rigen por las leyes de los Estados Unidos Mexicanos, sin consideración a principios de conflicto de leyes.
            </p>
            <p className="mb-4">
              Cualquier disputa que surja de o en relación con estos términos será resuelta primero a través de negociaciones de buena fe. Si las partes no logran resolver la disputa en un plazo de 30 días, esta será sometida a la jurisdicción exclusiva de los tribunales competentes de la Ciudad de México, renunciando expresamente a cualquier otro fuero que pudiera corresponder en razón de domicilios presentes o futuros.
            </p>
            <p className="mb-4">
              El cliente renuncia expresamente a cualquier derecho de presentar o participar en demandas colectivas contra InnovaTech.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">12. Disposiciones Generales</h2>
            <p className="mb-4">
              Si alguna disposición de estos términos y condiciones se considera inválida o inaplicable, dicha disposición se eliminará y las disposiciones restantes se harán cumplir.
            </p>
            <p className="mb-4">
              El hecho de que InnovaTech no ejerza o haga valer cualquier derecho o disposición de estos términos y condiciones no constituirá una renuncia a dicho derecho o disposición.
            </p>
            <p className="mb-4">
              Estos términos y condiciones constituyen el acuerdo completo entre el usuario e InnovaTech con respecto a su objeto, y sustituyen todos los acuerdos previos o contemporáneos, ya sean escritos u orales.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">13. Contacto</h2>
            <p className="mb-4">
              Para cualquier consulta relacionada con estos términos y condiciones, por favor contáctenos a través de la sección de <Link href="/#contacto" className="text-blue-600 hover:underline">contacto</Link> de nuestro sitio web.
            </p>
          </section>
        </div>
      </div>
    </Layout>
  );
}
