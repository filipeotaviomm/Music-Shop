import axios from "axios";

export const api = axios.create({
    baseURL: "https://besart-ecommerce-api.onrender.com/",
    timeout: 8000,
});
