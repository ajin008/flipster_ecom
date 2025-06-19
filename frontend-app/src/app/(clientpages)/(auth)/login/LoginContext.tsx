"use client";
import { LoginContextType, LoginProp } from "@/lib/interface";
import React, { createContext, useState, ReactNode } from "react";
import { loginUser } from "./api";

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

  const handleLogin = async (data: LoginProp) => {
    setLoginFormData(data);
    await loginUser(data);
  };

  return (
    <MyLoginContext.Provider
      value={{ loginFormData, setLoginFormData, handleLogin }}
    >
      {children}
    </MyLoginContext.Provider>
  );
};
