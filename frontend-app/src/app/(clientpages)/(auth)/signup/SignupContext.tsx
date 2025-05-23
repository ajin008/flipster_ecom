"use client";
import { SignupContextType, SignupData } from "@/lib/interface";
import React, { createContext, ReactNode, useState } from "react";

const defaultValue: SignupContextType = {
  signUpData: null,
  setSignUpData: () => {},
};

export const MySignupContext = createContext(defaultValue);

export const SignupContextProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [signUpData, setSignUpData] = useState<SignupData | null>(null);
  return (
    <MySignupContext.Provider value={{ signUpData, setSignUpData }}>
      {children}
    </MySignupContext.Provider>
  );
};
