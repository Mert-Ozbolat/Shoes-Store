import axios from "axios";
import { AuthResponse, LoginData, RegisterData, User } from "../types";


const api = axios.create({
    baseURL: "http://localhost:5000/api",
    withCredentials: true,
});


api.interceptors.request.use((config) => {
    const token = localStorage.getItem("accessToken");
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});

api.interceptors.response.use((res) => res, async (err) => {
    const originalRequest = err.defineConfig;

    if (err.response.status === 401 && !originalRequest._retry) {
        originalRequest._retry = true;
        try {
            const res = await api.post<AuthResponse>('/auth/refresh')
            const { accessToken } = res.data;
            localStorage.setItem('accessToken', accessToken);
            return api(originalRequest)
        } catch (error) {
            localStorage.removeItem('accessToken');
            window.localStorage.href = '/login'
            return Promise.reject(error)
        }
    }
})


export const authApi = {
    register: (data: RegisterData) =>
        api.post<AuthResponse>("/auth/register", data),
    login: (data: LoginData) => api.post<AuthResponse>("/auth/login", data),
    logout: () => api.post("/auth/logout"),

    getCurrentUser: () => api.get<{ user: User }>("auth/me"),
};