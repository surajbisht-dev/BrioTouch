import axios from "axios";
const API = import.meta.env.VITE_API_URL;

export const createDonation = (data) => axios.post(`${API}/donation`, data);
