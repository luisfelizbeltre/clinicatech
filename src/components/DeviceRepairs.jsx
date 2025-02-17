import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios'; // Instancia de Axios

const DeviceRepairs = () => {
  const { deviceId } = useParams();
  const [repairs, setRepairs] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    const fetchRepairs = async () => {
      // Reemplaza este token con el que estés utilizando en tu aplicación.
      const token = "1019f0cd4dd5cc535fe74bae8bd5c81371b742bfbb4f80bc41f94e716c1585f1840ad151241d521f6a9fdd1808fc7245bdcfaf945f91a864508fa5d438ffb04fd8343e958d79837101345a1936f16c82c0aca9beb431e1c1212efcc3a48185f3e21aa46f4d73c212464a48a913f1fcb639b4ff928386f0b8607ff791bb01c2ad";

      try {
        const response = await axios.get(`http://localhost:1337/api/repairs?device=${deviceId}`, {
          headers: {
            Authorization: `Bearer ${token}`,  // Incluye el token en los encabezados
          },
        });//paaaah

        // Verifica la estructura de la respuesta para asegurarte de que es un arreglo.
        const repairsData = Array.isArray(response.data) ? response.data : response.data.data || [];

        // Asigna los datos correctos al estado
        setRepairs(repairsData);
      } catch (err) {
        console.error("Error fetching repairs:", err);
      }
    };

    fetchRepairs();
  }, [deviceId]);

  const handleRepairChange = (price, checked) => {
    setTotalPrice((prevTotal) =>
      checked ? prevTotal + price : prevTotal - price
    );
  };

  return (
    <div>
      <h2>Reparaciones disponibles para este dispositivo</h2>
      <ul>
        {repairs.length === 0 ? (
          <li>No hay reparaciones disponibles para este dispositivo.</li>
        ) : (
          repairs.map((repair) => (
            <li key={repair.id}>
              <input
                type="checkbox"
                onChange={(e) =>
                  handleRepairChange(repair.price, e.target.checked)
                }
              />
              {repair.repair_name} - ${repair.price}
            </li>
          ))
        )}
      </ul>
      <h3>Total: ${totalPrice}</h3>
    </div>
  );
};

export default DeviceRepairs;
