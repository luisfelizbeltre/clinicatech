import { useState } from "react";

const AboutUs = () => {
  const [showMore, setShowMore] = useState(false);

  return (
    <div className="bg-gray-100 py-16">
      <div className="container mt-9 mx-auto px-6">
        {/* Título */}
        <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
          Sobre Nosotros
        </h2>

        {/* Descripción principal */}
        <p className="text-gray-600 max-w-2xl mx-auto text-center mb-12">
          En <strong>Clínica Tech</strong>, somos especialistas en diagnosticar y reparar dispositivos electrónicos. Con más de{" "}
          <strong>10 años de experiencia</strong>, nos enorgullece ofrecer un servicio rápido, eficaz y con garantía de satisfacción.
        </p>

        {/* Sección ampliada */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Historia */}
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Nuestra Historia</h3>
            <p className="text-gray-600">
              Fundada en 2013, Clínica Tech comenzó como un pequeño taller de reparaciones. Hoy, somos líderes en el sector, atendiendo a miles de clientes al año.
            </p>
          </div>

          {/* Valores */}
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Nuestros Valores</h3>
            <ul className="text-gray-600 list-disc list-inside">
              <li>Calidad en cada reparación.</li>
              <li>Atención personalizada.</li>
              <li>Transparencia y honestidad.</li>
              <li>Innovación constante.</li>
            </ul>
          </div>

          {/* Equipo */}
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Nuestro Equipo</h3>
            <p className="text-gray-600">
              Contamos con un equipo de expertos en electrónica, informática y atención al cliente, listos para resolver cualquier problema técnico.
            </p>
          </div>
        </div>

        {/* Botón para mostrar más información */}
        <div className="text-center mt-12">
          <button
            onClick={() => setShowMore(!showMore)}
            className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-300"
          >
            {showMore ? "Ver menos" : "Ver más"}
          </button>
        </div>

        {/* Información adicional */}
        {showMore && (
          <div className="mt-8 grid md:grid-cols-2 gap-8">
            {/* Logros */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Nuestros Logros</h3>
              <p className="text-gray-600">
                Hemos sido reconocidos como la mejor clínica de reparaciones en 2022 y 2023 por la Asociación de Tecnología.
              </p>
            </div>

            {/* Testimonios */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Lo que dicen nuestros clientes</h3>
              <p className="text-gray-600 italic">
                Excelente servicio, repararon mi laptop en menos de 24 horas. ¡Totalmente recomendado! - Juan Pérez
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AboutUs;