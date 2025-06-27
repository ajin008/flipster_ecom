import { SignupProp } from "@/lib/interface";
import apiClient from "@/axios/apiClient";
import { AUTH_API } from "./apiUrl";

export const generateOtp = async (email: string) => {
  return apiClient.post(AUTH_API.GETOTP, { email });
};

export const signupUser = async (data: SignupProp) => {
  return apiClient.post(AUTH_API.SIGNUP, data);
};
