import axios from "axios";
const API = import.meta.env.VITE_API_URL;

export const createContact = (data) => axios.post(`${API}/contact`, data);
