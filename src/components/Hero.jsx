import { Rocket } from "lucide-react";

export default function Hero() {
  return (
    <section className="flex flex-col items-center justify-center py-40 gap-4 text-center bg-gradient-to-b from-[#00CBFA] to-transparent">
      <Rocket className="w-16 h-16 text-[#C5009B] mb-2" />
      <h1 className="text-4xl sm:text-6xl font-bold tracking-tight">
        Innovatech
      </h1>
      <p className="max-w-xl text-lg text-[#000052]">
        Soluciones tecnológicas de vanguardia para un mundo sustentable.
      </p>
    </section>
  );
}
