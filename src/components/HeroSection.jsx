import { FaStethoscope } from 'react-icons/fa'; // Ícono para el botón
import imagen from '../assets/c.webp';
import { Link } from "react-router-dom";


const HeroSection = () => {
    return (
        <section className="relative bg-blue-50 py-20 text-center overflow-hidden">
            {/* Fondo con imagen */}
            <div
  className="absolute inset-0 bg-cover bg-center opacity-20"
  style={{ backgroundImage: `url(${imagen})` }}
></div>
            {/* Contenido */}
            <div className="container mx-auto px-6 relative z-10">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-6">
    ¡Tu dispositivo necesita un chequeo! 💡🔧
</h1>
<p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
    Los dispositivos también pueden enfermar. En Clínica Tech te ofrecemos el mejor diagnóstico y tratamiento para devolverles toda su energía.
</p>


<Link
  to="/diagnostico"
  className="mt-6 bg-green-500 hover:bg-green-600 text-white py-3 px-8 rounded-full shadow-lg text-lg font-semibold transition-all duration-300 transform hover:scale-105 inline-flex items-center justify-center"
>
  <FaStethoscope className="mr-2" />
  Solicitar Diagnóstico Gratis
</Link>


                {/* Imagen decorativa */}
                <div className="mt-12  flex justify-center">
                    <img
                          style={{ backgroundImage: `url(${imagen})` }}
                        alt="Reparación de dispositivos"
                        className="w-full md:w-2/3 lg:w-1/2 rounded-lg shadow-2xl border-4 border-white"
                    />
                </div>
            </div>
        </section>
    );
};

export default HeroSection;