import apiClient from "@/axios/apiClient";
import { USER_API } from "./apiUrl";

export const logoutApi = async () => {
  return apiClient.post(USER_API.LOGOUT);
};
