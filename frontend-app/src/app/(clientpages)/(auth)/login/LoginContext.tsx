"use client";
import { LoginContextType, LoginProp } from "@/lib/interface";
import React, { createContext, useState, ReactNode } from "react";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { extractAxiosErrorMessage } from "@/lib/utils/extractAxiosError";
import supabase from "@/lib/supabaseClient";

const defaultValue: LoginContextType = {
  loginFormData: null,
  setLoginFormData: () => {},
  handleLogin: () => {},
  loading: false,
};

export const MyLoginContext = createContext<LoginContextType>(defaultValue);

export const MyLoginContextProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [loginFormData, setLoginFormData] = useState<LoginProp | null>(null);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleLogin = async (data: LoginProp) => {
    setLoginFormData(data);
    setLoading(true);
    try {
      const { error } = await supabase.auth.signInWithPassword({
        email: data.email,
        password: data.password,
      });

      if (error) throw error;
      toast.success("Welcome back, 🎉 Your exclusive deals await.");

      setTimeout(() => {
        router.push("/");
      }, 1000);
    } catch (error) {
      const rawMessage = extractAxiosErrorMessage(error);

      let message = "Something went wrong. Please try again.";
      if (rawMessage.includes("Invalid login credentials")) {
        message = "Invalid email or password.";
      } else if (rawMessage.includes("Email not confirmed")) {
        message = "Please confirm your email before logging in.";
      }

      toast.error(message);
      setLoading(false);
    }
  };

  return (
    <MyLoginContext.Provider
      value={{ loginFormData, setLoginFormData, handleLogin, loading }}
    >
      {children}
    </MyLoginContext.Provider>
  );
};
