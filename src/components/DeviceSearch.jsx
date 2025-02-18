import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'; // Instancia de Axios

const DeviceSearch = () => {
  const [devices, setDevices] = useState([]);
  const [query, setQuery] = useState('');
  const [ setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchDevices = async () => {
      const token = "1019f0cd4dd5cc535fe74bae8bd5c81371b742bfbb4f80bc41f94e716c1585f1840ad151241d521f6a9fdd1808fc7245bdcfaf945f91a864508fa5d438ffb04fd8343e958d79837101345a1936f16c82c0aca9beb431e1c1212efcc3a48185f3e21aa46f4d73c212464a48a913f1fcb639b4ff928386f0b8607ff791bb01c2ad";

      if (!token) {
        setError('No estás autenticado.');
        setLoading(false);
        return;
      }

      try {
        const response = await axios.get('http://localhost:1337/api/devices', {
          headers: {
            Authorization: `Bearer ${token}`,  // Incluye el token en los encabezados
          },
        });

        // Verifica que response.data es un arreglo y asigna a devices
        const devicesData = Array.isArray(response.data) ? response.data : response.data.data || [];
        setDevices(devicesData);
        setLoading(false);
      } catch (err) {
        setError('Error al cargar los dispositivos.', err);
        setLoading(false);
        console.error('Error fetching devices:', error);
      }
    };

    fetchDevices();
  }, []);

  const handleSearchChange = (e) => {
    setQuery(e.target.value);
  };

  // Filtrar dispositivos solo si hay algo escrito en el query
  const filteredDevices = query
    ? devices.filter((device) =>
        device.name.toLowerCase().includes(query.toLowerCase())
      )
    : [];

  const handleDeviceSelect = (deviceId) => {
    navigate(`/device/${deviceId}`);
  };

  return (
    <div className="p-8 text-center bg-white rounded-lg ">
  {/* Título */}
  <h2 className="text-2xl font-semibold mb-4 text-blue-800">
    Buscar Dispositivos
  </h2>

  {/* Barra de búsqueda */}
  <input
    type="text"
    placeholder="Buscar dispositivo..."
    value={query}
    onChange={handleSearchChange}
    className="p-3 w-72 border-2 border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-blue-500 transition-colors duration-300"
  />




    <ul className="space-y-2">
      {/* Mensaje si no hay resultados */}
      {filteredDevices.length === 0 && query ? (
        <li className="text-gray-600">No se encontraron dispositivos.</li>
      ) : (
        /* Lista de dispositivos */
        filteredDevices.map((device) => (
          <li
            key={device.id}
            onClick={() => handleDeviceSelect(device.id)}
            className="cursor-pointer p-3 rounded-lg transition-colors duration-300 bg-gray-50 hover:bg-blue-50 text-gray-700 hover:text-blue-800 border border-gray-200 hover:border-blue-300"
          >
            {device.name}
          </li>
        ))
      )}
    </ul>
  
</div>
  );
};

export default DeviceSearch;
