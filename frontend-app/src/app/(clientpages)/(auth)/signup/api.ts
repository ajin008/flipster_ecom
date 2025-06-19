import { SignupProp } from "@/lib/interface";
import apiClient from "@/axios/apiClient";
import { AUTH_API } from "./apiUrl";

export const signupUser = async (data: SignupProp) => {
  return apiClient.post(AUTH_API.SIGNUP, data);
};
