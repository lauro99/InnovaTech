export default function ServicioCard({ servicio }) {
  return (
    <div className="flex items-center gap-4 p-4 bg-white rounded-lg shadow-sm">
      <servicio.icon className="w-7 h-7 text-[#000052] shrink-0" />
      <span className="text-base font-medium">{servicio.label}</span>
    </div>
  );
}
