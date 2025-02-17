import '@fortawesome/fontawesome-free/css/all.min.css';

const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/643718864" // Sustituye con tu número de WhatsApp
      className="fixed bottom-4 right-4 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition duration-300"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contactar por WhatsApp"
    >
      <i className="fab fa-whatsapp text-3xl"></i>
    </a>
  );
};

export default WhatsAppButton;
