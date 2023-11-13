import axios from "axios";

export const api = axios.create({
    baseURL: "http://localhost:3000/",
    timeout: 8000,
});
    // baseURL: "https://besart-ecommerce-api.onrender.com/",
