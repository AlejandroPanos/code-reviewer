/* Import and config axios */
import type { ReviewType } from "@/types/types";
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

/* Reviews */
export const getReviews = async () => {
  const response = await axios.get("/api/reviews");
  return response.data;
};

export const getReview = async (id: string) => {
  const response = await axios.get(`/api/reviews/${id}`);
  return response.data;
};

export const generateReview = async (code: string) => {
  const response = await axios.post("/api/ai", { code });
  return response.data;
};

export const saveReview = async (review: ReviewType) => {
  const response = await axios.post("/api/reviews", review);
  return response.data;
};
