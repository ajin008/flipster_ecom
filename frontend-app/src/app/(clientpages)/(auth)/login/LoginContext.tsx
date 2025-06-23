"use client";
import { LoginContextType, LoginProp } from "@/lib/interface";
import React, { createContext, useState, ReactNode } from "react";
import { loginUser } from "./api";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

const defaultValue: LoginContextType = {
  loginFormData: null,
  setLoginFormData: () => {},
  handleLogin: () => {},
};

export const MyLoginContext = createContext<LoginContextType>(defaultValue);

export const MyLoginContextProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [loginFormData, setLoginFormData] = useState<LoginProp | null>(null);
  const router = useRouter();

  const handleLogin = async (data: LoginProp) => {
    setLoginFormData(data);
    const res = await loginUser(data);
    if (res.status === 201 || res.status === 200)
      toast.success("Welcome back, 🎉 Your exclusive deals await.");

    setTimeout(() => {
      router.push("/");
    }, 1000);
  };

  return (
    <MyLoginContext.Provider
      value={{ loginFormData, setLoginFormData, handleLogin }}
    >
      {children}
    </MyLoginContext.Provider>
  );
};
