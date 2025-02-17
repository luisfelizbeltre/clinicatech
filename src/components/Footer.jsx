
const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-6">
      <div className="container mx-auto text-center">
        <p className="text-sm">&copy; {new Date().getFullYear()} Clínica Tech. Todos los derechos reservados.</p>
        <p className="text-sm">Contacto: <a href="mailto:info@clinicatech.com" className="text-blue-400 hover:underline">info@clinicatech.com</a> | Tel: +123 456 789</p>
      </div>
    </footer>
  );
};

export default Footer;
