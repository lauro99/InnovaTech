import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#000052] text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p>&copy; {new Date().getFullYear()} InnovaTech.</p>
          </div>
          <div className="flex gap-6">
            <Link href="/terminos-y-condiciones" className="hover:text-gray-300 transition-colors">
              Términos y Condiciones
            </Link>
            <Link href="/politica-privacidad" className="hover:text-gray-300 transition-colors">
              Política de Privacidad
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
