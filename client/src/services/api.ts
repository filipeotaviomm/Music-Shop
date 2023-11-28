import axios from "axios";

export const api = axios.create({
    baseURL: "https://loja-do-durval.onrender.com",

    timeout: 8000,
});