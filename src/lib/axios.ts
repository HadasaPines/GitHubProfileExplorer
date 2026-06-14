import axios from "axios";
import { env } from "@/config/env";

const apiClient = axios.create({
  baseURL: env.githubApiUrl,
  headers: {
    Accept: "application/vnd.github+json",
    "X-GitHub-Api-Version": "2022-11-28",
  },
});

apiClient.interceptors.request.use((config) => {
  if (env.githubToken) {
    config.headers.Authorization = `Bearer ${env.githubToken}`;
  }
  return config;
});

apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    const status = error.response?.status;
    const message = error.response?.data?.message ?? error.message;
    return Promise.reject({ status, message });
  }
);

export default apiClient;
