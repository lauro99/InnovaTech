export default function ServicioCard({ servicio }) {
  const isParent = servicio.children?.length > 0;

  return (
    <div className={`p-4 bg-white rounded-lg shadow-sm ${isParent ? 'col-span-full' : ''}`}>
      <div className="flex items-center gap-4 mb-2">
        <servicio.icon className="w-7 h-7 text-[#000052] shrink-0" />
        <span className={`${isParent ? 'text-lg font-semibold' : 'text-base font-medium'}`}>
          {servicio.label}
        </span>
      </div>
      {isParent && (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-4 pl-11">
          {servicio.children.map((child, idx) => (
            <div key={idx} className="flex items-center gap-4 p-3 bg-gray-50 rounded-md">
              <child.icon className="w-5 h-5 text-[#000052] shrink-0" />
              <span className="text-sm">{child.label}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
