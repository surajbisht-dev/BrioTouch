import axios from "axios";
const API = import.meta.env.VITE_API_URL;

export const createVolunteer = (data) => axios.post(`${API}/volunteer`, data);
