import axios from "axios";

export const api = axios.create({
    baseURL: "https://durval-music-shop.onrender.com",

    timeout: 8000,
});