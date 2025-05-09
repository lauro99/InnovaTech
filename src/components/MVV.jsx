import { Leaf, Rocket, Users } from "lucide-react";

export default function MVV() {
  return (
    <section className="py-16 px-4 bg-[#00CBFA] flex flex-col md:flex-row gap-8 justify-center items-stretch">
      <div className="flex-1 flex flex-col items-center text-center p-6 rounded-lg shadow-sm bg-white">
        <Leaf className="w-10 h-10 text-[#C5009B] mb-2" />
        <h3 className="font-bold text-xl mb-2">Misión</h3>
        <p>Ofrecer soluciones tecnológicas de vanguardia</p>
      </div>
      <div className="flex-1 flex flex-col items-center text-center p-6 rounded-lg shadow-sm bg-white">
        <Rocket className="w-10 h-10 text-[#C5009B] mb-2" />
        <h3 className="font-bold text-xl mb-2">Visión</h3>
        <p>Ser reconocidos como líderes mundiales</p>
      </div>
      <div className="flex-1 flex flex-col items-center text-center p-6 rounded-lg shadow-sm bg-white">
        <Users className="w-10 h-10 text-[#C5009B] mb-2" />
        <h3 className="font-bold text-xl mb-2">Valores</h3>
        <p>Innovación, Sostenibilidad y Colaboración</p>
      </div>
    </section>
  );
}
