import { LoginProp } from "@/lib/interface";
import apiClient from "@/axios/apiClient";
import { AUTH_API } from "./apiUrl";

export const loginUser = async (data: LoginProp) => {
  return apiClient.post(AUTH_API.LOGIN, data);
};
