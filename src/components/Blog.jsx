import { Link } from "react-router-dom";
import  revicion from '../assets/revision_smartphone.webp';
import antivirus from '../assets/antivirus-ordenador.png';
import extenderbateria from '../assets/extender-vida-util-bateria.jpg';
const Blog = () => {
  const posts = [
    {
      title: "5 síntomas de que tu móvil necesita una revisión",
      link: "#",
      description:
        "Descubre las señales que indican que tu móvil necesita una revisión profesional.",
      image: revicion, // URL de imagen de ejemplo
      date: "15 de octubre, 2023",
    },
    {
      title: "Cómo proteger tu PC de virus",
      link: "#",
      description:
        "Aprende las mejores prácticas para mantener tu PC seguro y libre de malware.",
      image: antivirus, // URL de imagen de ejemplo
      date: "10 de octubre, 2023",
    },
    {
      title: "Consejos para alargar la vida de tu batería",
      link: "#",
      description:
        "Sigue estos consejos para maximizar la duración de la batería de tus dispositivos.",
      image: extenderbateria, // URL de imagen de ejemplo
      date: "5 de octubre, 2023",
    },
  ];

  return (
    <div className="bg-gray-100 py-16">
      <div className="container mt-9 mx-auto px-6">
        {/* Título */}
        <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
          Consejos y Blog
        </h2>

        {/* Lista de posts */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden"
            >
              {/* Imagen del post */}
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-48 object-cover"
              />

              {/* Contenido del post */}
              <div className="p-6">
                {/* Fecha */}
                <p className="text-sm text-gray-500 mb-2">{post.date}</p>

                {/* Título */}
                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                  {post.title}
                </h3>

                {/* Descripción */}
                <p className="text-gray-600 mb-4">{post.description}</p>

                {/* Enlace "Leer más" */}
                <Link
                  to={post.link}
                  className="text-blue-600 hover:text-blue-700 hover:underline transition-colors duration-300"
                >
                  Leer más
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Botón para ver más posts (opcional) */}
        <div className="text-center mt-12">
          <Link
            to="/blog" // Ruta a la página completa del blog
            className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-300"
          >
            Ver todos los posts
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Blog;