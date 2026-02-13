/* Import and config axios */
import axios from "axios";

axios.defaults.baseURL = import.meta.env.VITE_BACKEND_URL;
axios.defaults.withCredentials = true;

/* Interfaces & types */
interface UserRegister {
  name: string;
  email: string;
  password: string;
}

interface UserLogin {
  email: string;
  password: string;
}

/* Create helpers */
export const checkAuth = async () => {
  const response = await axios.get("/api/auth/profile");
  return response.data;
};

export const register = async (user: UserRegister) => {
  const response = await axios.post("/api/auth/register", user);
  return response.data;
};

export const login = async (user: UserLogin) => {
  const response = await axios.post("/api/auth/login", user);
  return response.data;
};

export const logout = async () => {
  const response = await axios.post("/api/auth/logout");
  return response.data;
};
