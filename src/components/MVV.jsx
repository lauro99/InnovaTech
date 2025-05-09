export default function MVV() {
  return (
    <div className="relative bg-white py-40">
      <section className="max-w-6xl mx-auto py-16 px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
          {/* Misión */}
          <div className="flex flex-col items-center text-center">
            <div className="w-24 h-24 mb-6">
              <svg viewBox="0 0 100 100" className="w-full h-full">
                <circle cx="50" cy="50" r="45" fill="#000052" />
                <circle cx="50" cy="50" r="20" fill="#00CBFA" />
                <path d="M50 10 L50 45" stroke="#00CBFA" strokeWidth="6" />
                <path d="M50 55 L50 90" stroke="#00CBFA" strokeWidth="6" />
              </svg>
            </div>
            <h3 className="text-3xl font-bold mb-4 text-[#000052]">MISIÓN</h3>
            <p className="text-xl text-[#000052]">
              Ofrecer soluciones tecnológicas de vanguardia
            </p>
          </div>

          {/* Visión */}
          <div className="flex flex-col items-center text-center">
            <div className="w-24 h-24 mb-6">
              <svg viewBox="0 0 100 100" className="w-full h-full">
                <circle cx="50" cy="50" r="40" fill="#000052" />
                <path d="M50 20 L50 80" stroke="#00CBFA" strokeWidth="6" />
                <path d="M30 40 L70 40" stroke="#00CBFA" strokeWidth="6" />
                <path d="M30 60 L70 60" stroke="#00CBFA" strokeWidth="6" />
              </svg>
            </div>
            <h3 className="text-3xl font-bold mb-4 text-[#000052]">VISIÓN</h3>
            <p className="text-xl text-[#000052]">
              Ser reconocidos como líderes mundiales
            </p>
          </div>

          {/* Valores */}
          <div className="flex flex-col items-center text-center">
            <div className="w-24 h-24 mb-6">
              <svg viewBox="0 0 100 100" className="w-full h-full">
                <path d="M50 10 L90 90 L10 90 Z" fill="#000052" />
                <path d="M50 30 L70 70 L30 70 Z" fill="#00CBFA" />
                <path d="M50 20 L50 40" stroke="#00CBFA" strokeWidth="6" />
              </svg>
            </div>
            <h3 className="text-3xl font-bold mb-4 text-[#000052]">VALORES</h3>
            <p className="text-xl text-[#000052]">
              Innovación,
              <br />
              Sostenibilidad y<br />
              Colaboración
            </p>
          </div>
        </div>
      </section>

      {/* Fondo ondulado */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none hidden">
        <svg
          className="relative block w-full h-[100px]"
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
            fill="#000052"
          ></path>
        </svg>
      </div>
    </div>
  );
}
