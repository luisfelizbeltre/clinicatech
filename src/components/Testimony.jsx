
const Testimonios = () => {
  const testimonios = [
    { name: "Juan Pérez", comment: "¡Excelente servicio! Mi móvil volvió a la vida." },
    { name: "Ana Gómez", comment: "Rápidos y profesionales. Los recomiendo." },
    { name: "Carlos López", comment: "Recuperaron todos mis datos perdidos. ¡Gracias!" },
  ];

  return (
    <div className="bg-gradient-to-r from-blue-50 to-white py-16">
      <div className="container mx-auto text-center px-6">
        <h2 className="text-4xl font-bold text-gray-800 mb-8">Testimonios</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonios.map((testimonio, index) => (
            <div
              key={index}
              className="p-6 bg-white rounded-xl shadow-lg hover:scale-105 transition-transform duration-300 animate-fade-in"
            >
              <p className="text-lg text-gray-600 italic">{testimonio.comment}</p>
              <p className="text-lg text-gray-900 font-semibold mt-4">- {testimonio.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonios;
