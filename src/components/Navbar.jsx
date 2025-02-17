import  { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react"; // Iconos de hamburguesa

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Función para hacer scroll a las secciones
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false); // Cerrar menú en móviles después del click
    }
  };

  return (
    <nav className="bg-white shadow-md fixed w-full top-0 z-50">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <a
          href="/"
          onClick={() => scrollToSection("hero")}
          className="text-xl font-bold text-blue-600"
        >
          Clínica Tech
        </a>

        {/* Botón de menú en móviles */}
        <button
          className="md:hidden text-gray-700"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Menú de navegación */}
        <div className={`md:flex space-x-6 ${isOpen ? "block" : "hidden"} md:block`}>
          <Link to="/" className="block py-2 md:py-0 text-gray-700 hover:text-blue-600">
            Inicio
          </Link>
          <Link to="/servicios" className="block py-2 md:py-0 text-gray-700 hover:text-blue-600">
            Servicios
          </Link>
          <Link to="/diagnostico" className="block py-2 md:py-0 text-gray-700 hover:text-blue-600">
            Diagnóstico
          </Link>
          <Link to="/contact" className="block py-2 md:py-0 text-gray-700 hover:text-blue-600">
            Contacto
          </Link>
          <Link to="/about" className="block py-2 md:py-0 text-gray-700 hover:text-blue-600">
            Sobre Nosotros
          </Link>
          <Link to="/blog" className="block py-2 md:py-0 text-gray-700 hover:text-blue-600">
          Blog
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
