import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:1337", // URL de tu backend de Strapi
});

export default api;
