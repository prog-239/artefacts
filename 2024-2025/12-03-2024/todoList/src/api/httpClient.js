import axios from "axios";

export const httpClient = axios.create({
    baseURL: import.meta.env.VITE_BASE_API || "http://localhost:4000",
    headers: {
        "Content-Type": "application/json",
    }
});
