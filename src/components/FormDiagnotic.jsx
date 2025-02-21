import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import MapGoogle from './MapGoogle'; // Importa el componente
import { useState } from "react";
import emailjs from "@emailjs/browser";
// En tu JSX doende quieres mostrar el mapa

const DiagnosticoForm = () => {


  const [formData, setFormData] = useState({
    nombre: "",
    dispositivo: "Móvil",
    problema: "",
    contacto: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.nombre || !formData.problema) {
      alert("Por favor, completa todos los campos.");
      return;
    }

    const serviceID = "service_efag9dt";  
    const templateID = "template_uv000h9"; 
    const publicKey = "SyiIRDQJMHu9_Ih8z"; 

    emailjs
      .send(serviceID, templateID, formData, publicKey)
      .then(() => {
        alert("Mensaje enviado con éxito");
        setFormData({ nombre: "", dispositivo: "Móvil", problema: "" });
      })
      .catch((error) => {
        console.error("Error al enviar:", error);
        alert("Error al enviar el mensaje. Inténtalo de nuevo.");
      });
  };
  return (
  
    <div className="bg-blue-50 py-12 px-4  ">
       <p className='bg-white w-full h-6 mb-7' ></p> 
      <div className="max-w-7xl mx-auto justify-center flex  flex-col md:flex-row gap-12">
        {/* Formulario */}
        <div className="max-w-lg bg-white p-8 rounded-xl shadow-lg animate-fade-in w-full">
          <h2 className="text-3xl font-bold text-gray-800 text-center mb-6">
            Solicita tu Diagnóstico
          </h2>
          <form onSubmit={handleSubmit}>
          <div className="mb-4">
        <label className="block text-gray-700 font-medium mb-2" htmlFor="nombre">
          Nombre
        </label>
        <input
          type="text"
          id="nombre"
          placeholder="Tu nombre"
          value={formData.nombre}
          onChange={handleChange}
          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 font-medium mb-2" htmlFor="contacto">
          Dato de contacto
        </label>
        <input
          type="text"
          id="contacto"
          placeholder="Tu correo o teléfono"
          value={formData.contacto}
          onChange={handleChange}
          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
        />
      </div>

            <div className="mb-4">
        <label className="block text-gray-700 font-medium mb-2" htmlFor="dispositivo">
          Dispositivo
        </label>
        <select
          id="dispositivo"
          value={formData.dispositivo}
          onChange={handleChange}
          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
        >
          <option>Móvil</option>
          <option>Tablet</option>
          <option>PC</option>
          <option>Consola</option>
          <option>Patinete Eléctrico</option>
          <option>Hoverboard</option>
        </select>
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 font-medium mb-2" htmlFor="problema">
          Problema
        </label>
        <select
          id="problema"
          value={formData.problema}
          onChange={handleChange}
          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
        >
          <option value="">Selecciona un problema</option>
          <option>Pantalla rota</option>
          <option>Batería dañada</option>
          <option>Problema con el software</option>
          <option>Fallo en la carga</option>
          <option>Sobrecalentamiento</option>
          <option>Problema en botones</option>
          <option>Otro (describa en comentarios)</option>
        </select>
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 font-medium mb-2" htmlFor="descripcion">
          Descripción adicional
        </label>
        <textarea
          id="descripcion"
          rows="4"
          placeholder="Describe el problema con más detalle"
          value={formData.descripcion}
          onChange={handleChange}
          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
        ></textarea>
      </div>

      <button
        type="submit"
        className="w-full bg-green-500 text-white font-semibold py-3 rounded-lg hover:bg-green-600 transition duration-300"
      >
        Enviar
      </button>
          </form>
        </div>

        {/* Información de Contacto a la derecha */}
        <div className="w-full md:w-1/3 bg-white p-8 rounded-xl shadow-lg">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">¿Necesitas ayuda?</h3>
            <p className="text-gray-600 mb-2">📧 <strong>Email:</strong> info@doctorvoltio.com</p>
            <p className="text-gray-600 mb-2">📞 <strong>Teléfono:</strong> +34 643 718 864</p>
            <p className="text-gray-600 mb-4">📍 <strong>Ubicación:</strong> Calle de la Ebanisteria #19, Madrid</p>

            {/* Redes sociales */}
            <div className="flex justify-start gap-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <FaFacebook className="w-8 h-8 text-blue-600 hover:text-blue-800 transition" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <FaTwitter className="w-8 h-8 text-blue-400 hover:text-blue-600 transition" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <FaInstagram className="w-8 h-8 text-pink-600 hover:text-pink-800 transition" />
              </a>
            </div>

            {/* Mapa ded Google */}
            <div className='w-2/2'>
            <MapGoogle />

            </div>

          </div>

        
      </div>
    </div>
  );
};

export default DiagnosticoForm;
