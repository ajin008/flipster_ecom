"use client";
import { LoginContextType, LoginProp } from "@/lib/interface";
import React, { createContext, useState, ReactNode } from "react";

const defaultValue: LoginContextType = {
  loginFormData: null,
  setLoginFormData: () => {},
};

export const MyLoginContext = createContext<LoginContextType>(defaultValue);

export const MyLoginContextProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [loginFormData, setLoginFormData] = useState<LoginProp | null>(null);

  return (
    <MyLoginContext.Provider value={{ loginFormData, setLoginFormData }}>
      {children}
    </MyLoginContext.Provider>
  );
};
