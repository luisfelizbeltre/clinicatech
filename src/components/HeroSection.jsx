import { FaStethoscope } from 'react-icons/fa'; // Ícono para el botón
import imagen from '../assets/c.webp';
import { Link } from "react-router-dom";


const HeroSection = () => {
    return (
        <section className="relative mt-9 bg-blue-50 py-20 text-center overflow-hidden">
            {/* Fondo con imagen */}
            <div className="absolute inset-0  bg-bottom bg-cover opacity-30" style={{ backgroundImage: `url(${imagen})` }}></div>
            {/* Contenido */}
            <div className="container mx-auto px-6 relative z-10">
                <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-6">
                    ¡Tu dispositivo necesita un chequeo! 💡🔧
                </h1>
                <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                    Los dispositivos también pueden enfermar. En Doctor Voltio te ofrecemos el mejor diagnóstico y tratamiento para devolverles toda su energía.
                </p>


                <Link to="/diagnostico" className="mt-6 bg-green-500 hover:bg-green-600 text-white py-3 px-8 rounded-full shadow-lg text-lg font-semibold transition-all duration-300 transform hover:scale-105 inline-flex items-center justify-center">
                    <FaStethoscope className="mr-2" />
                    Solicitar Diagnóstico Gratis
                </Link>


              
            </div>
        </section>
    );
};

export default HeroSection;