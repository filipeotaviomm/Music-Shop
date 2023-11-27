import axios from "axios";

export const api = axios.create({
    baseURL: "https://e-commerce-eifb.onrender.com/",
    timeout: 8000,
});