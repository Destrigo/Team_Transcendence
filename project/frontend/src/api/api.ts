import axios from 'axios';

export const api = axios.create({
  baseURL: `${import.meta.env.VITE_API_URL ?? 'https://localhost'}/api`,
  withCredentials: true,
});

let refreshPromise: Promise<unknown> | null = null;

api.interceptors.response.use(
  response => response,
  async error => {
    const originalRequest = error.config;

    const isAuthEndpoint = ['/auth/refresh', '/auth/login', '/auth/register', '/auth/logout']
      .some(url => originalRequest.url?.includes(url));

    if (
      error.response?.status !== 401 ||
      isAuthEndpoint ||
      originalRequest._retry
    ) {
      return Promise.reject(error);
    }

    originalRequest._retry = true;

    try {
      if (!refreshPromise) {
        refreshPromise = api.post('/auth/refresh').finally(() => {
          refreshPromise = null;
        });
      }
      await refreshPromise;
      return api(originalRequest);
    } catch (refreshError) {
      return Promise.reject(refreshError);
    }
  },
);