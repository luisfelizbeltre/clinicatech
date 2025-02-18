import React, { useState } from 'react';
import { FaMobileAlt, FaTabletAlt, FaLaptop, FaHeadphones, FaGamepad, FaCar, FaClock } from 'react-icons/fa';

const Servicios = () => {
    const [mostrarUltimo, setMostrarUltimo] = useState(false);

    const servicios = [
        { icon: <FaMobileAlt className="text-blue-600 text-4xl" />, title: "Reparar Móviles", description: "Arreglamos pantallas rotas, baterías agotadas y más." },
        { icon: <FaTabletAlt className="text-green-600 text-4xl" />, title: "Reparar Tablets", description: "Reparación de pantallas y reemplazo de componentes." },
        { icon: <FaLaptop className="text-orange-600 text-4xl" />, title: "Reparar Ordenadores", description: "Diagnóstico y reparación de hardware y software." },
        { icon: <FaHeadphones className="text-purple-600 text-4xl" />, title: "Reparar iPod", description: "Reemplazo de piezas y restauración de dispositivos." },
        { icon: <FaGamepad className="text-red-600 text-4xl" />, title: "Reparar Consolas y Mandos", description: "Reparación de consolas de videojuegos y mandos." },
        { icon: <FaCar className="text-yellow-600 text-4xl" />, title: "Reparar Patinetes Eléctricos", description: "Reparación de patinetes y componentes eléctricos." },
        { icon: <FaCar className="text-indigo-600 text-4xl" />, title: "Reparar Patinetes Eléctricos Xiaomi", description: "Especialización en reparaciones de patinetes Xiaomi." },
        { icon: <FaClock className="text-teal-600 text-4xl" />, title: "Reparar Hoverboards", description: "Reparación de hoverboards y componentes." },
        { icon: <FaClock className="text-pink-600 text-4xl" />, title: "Reparar Smartwatchs", description: "Reparación de smartwatches y dispositivos wearables." },
    ];

    // Añadir un botón para mostrar/ocultar el último servicio
    const toggleUltimoServicio = () => {
        setMostrarUltimo(!mostrarUltimo);
    };

    return (
        <section className=" bg-blue-50 py-16">
            <div className="container mt-9 mx-auto px-6">
                <h2 className="text-4xl font-extrabold text-gray-800 mb-8 text-center">Nuestros Servicios</h2>

                {/* Mensaje adicional */}
                <p className="text-lg text-gray-700 text-center mb-12 max-w-3x2 mx-auto">
                    Nuestro equipo de expertos garantiza un servicio rápido, eficiente y con resultados de calidad. 
                    ¡Confía en nosotros para devolverle la vida a tus dispositivos!
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                    {servicios.slice(0, servicios.length - 1).map((servicio, index) => (
                        <div
                            key={index}
                            className="flex flex-col items-center p-6 bg-white rounded-2xl shadow-lg transform transition-all duration-500 hover:scale-105 hover:shadow-xl"
                        >
                            <div className="mb-6">{servicio.icon}</div>
                            <h3 className="text-2xl font-semibold text-gray-800">{servicio.title}</h3>
                            <p className="text-gray-600 mt-2 text-center">{servicio.description}</p>
                            <button className="mt-4 px-6 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors duration-300">
                                Más Información
                            </button>
                        </div>
                    ))}

                    {/* Mostrar el último servicio si el estado 'mostrarUltimo' es true */}
                    {mostrarUltimo && (
                        <div
                            className="flex flex-col items-center p-6 bg-white rounded-2xl shadow-lg transform transition-all duration-500 hover:scale-105 hover:shadow-xl"
                        >
                            <div className="mb-6">{servicios[servicios.length - 1].icon}</div>
                            <h3 className="text-2xl font-semibold text-gray-800">{servicios[servicios.length - 1].title}</h3>
                            <p className="text-gray-600 mt-2 text-center">{servicios[servicios.length - 1].description}</p>
                            <button className="mt-4 px-6 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors duration-300">
                                Más Información
                            </button>
                        </div>
                    )}

                    {/* Botón para mostrar u ocultar el último servicio */}
                    <div className="col-span-full flex justify-center">
                        <button 
                            onClick={toggleUltimoServicio} 
                            className="mt-6 px-6 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors duration-300"
                        >
                            {mostrarUltimo ? 'Ver Menos' : 'Ver Más'}
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Servicios;
