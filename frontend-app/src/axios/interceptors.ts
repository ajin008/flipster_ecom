import { AxiosError, InternalAxiosRequestConfig } from "axios";
import { API_CONFIG } from "@/lib/constants";

export const attachToken = (
  config: InternalAxiosRequestConfig
): InternalAxiosRequestConfig => {
  const token = localStorage.getItem(API_CONFIG.storageTokenKeyName);
  if (token) {
    config.headers.set("Authorization", `Bearer ${token}`);
  }

  return config;
};

export const responseErrorInterceptor = (error: AxiosError): Promise<never> => {
  console.log(error);
  return Promise.reject(error);
};
