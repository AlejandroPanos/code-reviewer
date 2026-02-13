/* Import and config axios */
import axios from "axios";

axios.defaults.baseURL = import.meta.env.VITE_BACKEND_URL;
axios.defaults.withCredentials = true;

/* Create helpers */
export const checkAuth = async () => {
  const response = await axios.get("/api/auth/profile");
  return response.data;
};
