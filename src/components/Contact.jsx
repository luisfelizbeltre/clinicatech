import MapGoogle from './MapGoogle'; // Importa el componente



const Contacto = () => {
    return (
        <div className="bg-gray-100 py-16">
            <div className="container mt-9 mx-auto text-center">
                <h2 className="text-3xl font-bold text-gray-800 mb-8">Contacto</h2>
                <p className="text-gray-600 mb-4">¿Tienes alguna pregunta? ¡Contáctanos!</p>

                {/* Formulario de contacto */}
                <div className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-md">
                    <form>
                        <div className="mb-6">
                            <label className="block text-gray-700 mb-2">Nombre</label>
                            <input type="text" className="w-full px-4 py-2 border rounded-lg" placeholder="Tu nombre" />
                        </div>
                        <div className="mb-6">
                            <label className="block text-gray-700 mb-2">Correo Electrónico</label>
                            <input type="email" className="w-full px-4 py-2 border rounded-lg" placeholder="Tu correo" />
                        </div>
                        <div className="mb-6">
                            <label className="block text-gray-700 mb-2">Mensaje</label>
                            <textarea className="w-full px-4 py-2 border rounded-lg" rows="4" placeholder="Tu mensaje"></textarea>
                        </div>
                        <button type="submit" className="bg-green-500 text-white px-8 py-3 rounded-full font-semibold hover:bg-green-600">
                            Enviar Mensaje
                        </button>
                    </form>
                </div>

                {/* Información de contacto */}
                <div className="mt-12">
                    <h3 className="text-2xl font-semibold text-gray-800">Información de Contacto</h3>
                    <p className="text-gray-600 mt-2">📧 <strong>Email:</strong> info@doctorvoltio.com</p>
                    <p className="text-gray-600">📞 <strong>Teléfono:</strong> +34 643 718 864</p>
                    <p className="text-gray-600">📍 <strong>Ubicación:</strong> Calle Ebanisteria #19, Madrid</p>

                    {/* Redes sociales */}
                    <div className="flex justify-center mt-6 space-x-6">
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                            <img src="/facebook.svg" alt="Facebook" className="w-8 h-8" />
                        </a>
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                            <img src="/twitter.svg" alt="Twitter" className="w-8 h-8" />
                        </a>
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                            <img src="/instagram.svg" alt="Instagram" className="w-8 h-8" />
                        </a>
                    </div>
                </div>
            </div>
           
<MapGoogle />
        </div>
    );
};

export default Contacto;
