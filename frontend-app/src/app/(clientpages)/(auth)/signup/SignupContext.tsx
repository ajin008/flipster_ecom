"use client";
import { SignupContextType, SignupProp } from "@/lib/interface";
import React, { createContext, ReactNode, useState } from "react";
import { generateOtp, signupUser } from "./api";
import { toast } from "sonner";

import { AxiosError } from "axios";
import { useRouter } from "next/navigation";

const defaultValue: SignupContextType = {
  signUpData: null,
  setSignUpData: () => {},
  handleSignup: () => {},
  loading: false,
  isOtpOpen: false,
  handleSignupWithOtp: () => {},
  setIsOtpOpen: () => {},
};

export const MySignupContext = createContext(defaultValue);

export const SignupContextProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [loading, setLoading] = useState(false);
  const [signUpData, setSignUpData] = useState<SignupProp | null>(null);
  const [isOtpOpen, setIsOtpOpen] = useState(false);

  const router = useRouter();

  const handleSignup = async (data: SignupProp) => {
    console.log("handleSignup is triggered with data:", data);
    try {
      setSignUpData(data);
      setLoading(true);
      const res = await generateOtp(data.email);

      if (res.status === 200 || res.status === 201) {
        setIsOtpOpen(true);
        toast.success("OTP sent to your Gmail");
      }
      setLoading(false);
    } catch (error) {
      const axiosError = error as AxiosError;

      if (axiosError.response?.status === 409) {
        toast.error("User already exists. Please log in.");
      } else {
        toast.error("Something went wrong!");
      }
      setLoading(false);
    }
  };

  const handleSignupWithOtp = async (otp: string) => {
    try {
      setLoading(true);

      if (
        !signUpData?.username ||
        !signUpData?.email ||
        !signUpData?.password ||
        !signUpData?.confirmPassword ||
        signUpData.agreeToTerms !== true
      ) {
        throw new Error("Missing signup information");
      }

      const data = {
        username: signUpData.username,
        email: signUpData.email,
        password: signUpData.password,
        confirmPassword: signUpData.confirmPassword,
        agreeToTerms: signUpData.agreeToTerms,
        otp,
      };
      const res = await signupUser(data);

      if (res.status === 200 || res.status === 201) {
        toast.success("Signup successful!");
        setTimeout(() => {
          router.push("/");
          setLoading(false);
        }, 1000);
      }
    } catch (error) {
      const axiosError = error as AxiosError<{ message: string }>;

      const message =
        axiosError.response?.data?.message || "Something went wrong!";
      toast.error(message);
      if (message) {
        setTimeout(() => {
          setLoading(false);
        }, 1000);
      }
    }
  };

  return (
    <MySignupContext.Provider
      value={{
        signUpData,
        setSignUpData,
        handleSignup,
        loading,
        isOtpOpen,
        handleSignupWithOtp,
        setIsOtpOpen,
      }}
    >
      {children}
    </MySignupContext.Provider>
  );
};
