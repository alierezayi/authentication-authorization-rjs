import axios from "axios";
import { getCookie, setCookie } from "../utils/cookie";
import { getNewTokens } from "../services/token";

const api = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

api.interceptors.request.use(
  (req) => {
    const accessToken = getCookie("accessToken");

    if (accessToken) {
      req.headers["Authorization"] = `Bearer ${accessToken}`;
    }

    return req;
  },

  (error) => Promise.reject(error)
);

api.interceptors.response.use(
  (res) => res,

  async (error) => {
    const originalRequest = error.config;

    if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      const res = await getNewTokens();

      if (!res?.response) return;

      setCookie(res.response.data);

      return api(originalRequest);
    }
  }
);

export default api;
