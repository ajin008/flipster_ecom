"use client";
import { SignupContextType, SignupProp } from "@/lib/interface";
import React, { createContext, ReactNode, useState } from "react";
import { signupUser } from "./api";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { AxiosError } from "axios";

const defaultValue: SignupContextType = {
  signUpData: null,
  setSignUpData: () => {},
  handleSignup: () => {},
};

export const MySignupContext = createContext(defaultValue);

export const SignupContextProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const router = useRouter();
  const [signUpData, setSignUpData] = useState<SignupProp | null>(null);
  const handleSignup = async (data: SignupProp) => {
    try {
      setSignUpData(data);

      const res = await signupUser(data);

      if (res.status === 200 || res.status === 201) {
        toast.success("Signup successful!");

        setTimeout(() => {
          router.push("/");
        }, 300);
      }
    } catch (error) {
      const axiosError = error as AxiosError;

      if (axiosError.response?.status === 409) {
        toast.error("User already exists. Please log in.");
      } else {
        toast.error("Something went wrong!");
      }
    }
  };
  return (
    <MySignupContext.Provider
      value={{ signUpData, setSignUpData, handleSignup }}
    >
      {children}
    </MySignupContext.Provider>
  );
};
