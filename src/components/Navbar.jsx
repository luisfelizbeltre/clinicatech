import { useState, useCallback, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Home, Settings, Stethoscope, Mail, Users, BookOpen } from "lucide-react";
import logo from "../assets/logo.webp"; 

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Función para hacer scroll a las secciones
  const scrollToSection = useCallback((id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false); // Cerrar menú en móviles después del click
    }
  }, []);

  // Cierra el menú al hacer clic fuera de él
  const handleClickOutside = useCallback((event) => {
    if (!event.target.closest(".menu-container")) {
      setIsOpen(false);
    }
  }, []);

  // Efecto para manejar el clic fuera del menú
  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [handleClickOutside]);

  return (
    <nav className="bg-white shadow-md fixed w-full top-0 z-50  ">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link
      to="/"
      onClick={() => scrollToSection("hero")}
      className="text-xl font-bold text-blue-600 flex items-center hover:text-blue-700 transition-colors duration-300"
    >
      <div className="relative w-15 h-15 flex items-center justify-center bg-white rounded-full overflow-hidden shadow-md">
        <img
          src={logo}
          alt="Clínica Tech Logo"
          className="w-15 h-15 object-contain mix-blend-multiply"
        />
      </div>
      <span className="ml-2">Clínica Del Móvil <br /> & Más</span>
    </Link>

        {/* Botón de menú en móviles */}
        <button
          className="md:hidden text-gray-700 focus:outline-none hover:text-blue-600 transition-colors duration-300"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
          aria-expanded={isOpen}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Menú de navegación */}
        <div
          className={`menu-container md:flex space-x-6 ${
            isOpen
              ? "block absolute top-16 right-0 bg-white shadow-lg rounded-lg p-4"
              : "hidden"
          } md:block transition-all duration-300 ease-in-out`}
        >
           <Link
            to="/"
            className="link-common"
            onClick={() => setIsOpen(false)}
          >
            <Home className="mr-2" size={20} /> Inicio
          </Link>
          <Link
            to="/servicios"
            className="link-common"
            onClick={() => setIsOpen(false)}
          >
            <Settings className="mr-2" size={20} /> Servicios
          </Link>
          <Link
            to="/diagnostico"
            className="link-common"
            onClick={() => setIsOpen(false)}
          >
            <Stethoscope className="mr-2" size={20} /> Diagnóstico
          </Link>
          <Link
            to="/contact"
            className="link-common"
            onClick={() => setIsOpen(false)}
          >
            <Mail className="mr-2" size={20} /> Contacto
          </Link>
          <Link
            to="/about"
            className="link-common"
            onClick={() => setIsOpen(false)}
          >
            <Users className="mr-2" size={20} /> Sobre Nosotros
          </Link>
          <Link
            to="/blog"
            className="link-common"
            onClick={() => setIsOpen(false)}
          >
            <BookOpen className="mr-2" size={20} /> Blog
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;