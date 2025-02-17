import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "./axios";

const DeviceRepairs = () => {
  const { deviceId } = useParams();
  const [repairs, setRepairs] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    const fetchRepairs = async () => {
      const response = await api.get(`/repairs?device=${deviceId}`);
      setRepairs(response.data);
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
      <h2>Reparaciones disponibles</h2>
      <ul>
        {repairs.map((repair) => (
          <li key={repair.id}>
            <input
              type="checkbox"
              onChange={(e) => handleRepairChange(repair.price, e.target.checked)}
            />
            {repair.repair_name} - ${repair.price}
          </li>
        ))}
      </ul>
      <h3>Total: ${totalPrice}</h3>
    </div>
  );
};

export default DeviceRepairs;
