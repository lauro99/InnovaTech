import { Cpu } from "lucide-react";

export default function About() {
  return (
    <div className="relative bg-[#000052] text-white overflow-hidden">
      <div className="absolute top-0 right-0 w-full h-full">
        <div className="absolute top-0 right-0 w-[50%] h-full bg-white transform skew-x-12 translate-x-1/2" />
      </div>
      
      <section className="relative py-16 px-4 max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="max-w-xl">
          <h2 className="text-5xl font-bold mb-6">Acerca de nosotros</h2>
          <p className="text-xl leading-relaxed">
            En InnovaTech nos encargamos de llevar a tu empresa a ser autosustentable e implementamos tecnología de última generación, teniendo siempre en cuenta el planeta tierra.
          </p>
        </div>
        
        <div className="w-64 h-64 relative flex-shrink-0">
          <div className="w-full h-full relative">
            <div className="absolute inset-0">
              <svg viewBox="0 0 200 200" className="w-full h-full">
                <path
                  fill="#000052"
                  d="M160 100c0 33.137-26.863 60-60 60s-60-26.863-60-60 26.863-60 60-60 60 26.863 60 60z"
                />
                <path
                  fill="#00CBFA"
                  d="M140 100c0 22.091-17.909 40-40 40s-40-17.909-40-40 17.909-40 40-40 40 17.909 40 40z"
                />
                <path
                  stroke="#00CBFA"
                  strokeWidth="4"
                  fill="none"
                  d="M120 100h40M40 100h40M100 120v40M100 40v40"
                />
              </svg>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
