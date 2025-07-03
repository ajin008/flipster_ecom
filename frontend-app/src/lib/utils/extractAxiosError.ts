import { AxiosError } from "axios";

export function extractAxiosErrorMessage(
  error: unknown,
  fallback = "something went wrong"
) {
  if (error && typeof error === "object" && "isAxiosError" in error) {
    const axiosError = error as AxiosError<{ message?: string }>;
    return axiosError.response?.data?.message || axiosError.message || fallback;
  }
  if (error instanceof Error) return error.message;
  return fallback;
}
