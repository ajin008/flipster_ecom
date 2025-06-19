import axios, { AxiosError } from "axios";
import qs from "query-string";
import { API_BASE_URL } from "@/lib/constants";
import { attachToken } from "./interceptors";

const apiClient = axios.create({
  baseURL: API_BASE_URL,
  timeout: 12000,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
  paramsSerializer: (params) =>
    qs.stringify(params, { arrayFormat: "bracket" }),
});

apiClient.interceptors.request.use(attachToken, (error: AxiosError) =>
  Promise.reject(error)
);

export default apiClient;
