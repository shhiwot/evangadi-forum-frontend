
import axios from "axios";

// Get the API URL from environment variables
const apiUrl = import.meta.env.VITE_API_URL;

const token = localStorage.getItem("token");

const axiosConfig = axios.create({
  baseURL: apiUrl,
});

const axiosBase = axios.create({
  baseURL: apiUrl,
  headers: {
    Authorization: `Bearer ${token}`,
  },
});

export { axiosBase, axiosConfig };
