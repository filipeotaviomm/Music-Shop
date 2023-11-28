import axios from "axios";

export const api = axios.create({
    // baseURL: "https://e-commerce-eifb.onrender.com/",
    baseURL: "http://localhost:3000/",

    timeout: 8000,
});