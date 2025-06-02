import React from 'react';

const Aliados = () => {
  const socios = [
    {
      nombre: "Logiceer",
      logo: "/partners/logiceer.png",
      descripcion: "Soluciones logísticas inteligentes"
    },
    {
      nombre: "Vortex",
      logo: "/partners/vortex.png",
      descripcion: "Innovación en tecnología industrial"
    },
    {
      nombre: "MT Performance",
      logo: "/partners/mt-performance.png",
      descripcion: "Optimización y rendimiento empresarial"
    },
    {
      nombre: "Medibelle",
      logo: "/partners/medibelle.png",
      descripcion: "Tecnología para el sector salud y belleza"
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Socios y Aliados</h2>
          <p className="text-xl text-gray-600">
            Colaboramos con las mejores empresas para ofrecer soluciones integrales
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {socios.map((socio, index) => (
            <div 
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg transition-transform hover:scale-105"
            >
              <div className="h-32 flex items-center justify-center mb-4">
                <div className="w-24 h-24 bg-gray-200 rounded-full flex items-center justify-center">
                  {/* Placeholder para logos */}
                  <span className="text-2xl font-bold text-gray-500">{socio.nombre.charAt(0)}</span>
                </div>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{socio.nombre}</h3>
              <p className="text-gray-600">{socio.descripcion}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Aliados;
