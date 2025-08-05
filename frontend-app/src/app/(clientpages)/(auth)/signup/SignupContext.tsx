"use client";
import { SignupContextType, SignupProp } from "@/lib/interface";
import React, { createContext, ReactNode, useState } from "react";

import { toast } from "sonner";
import supabase from "@/lib/supabaseClient";

import { extractAxiosErrorMessage } from "@/lib/utils/extractAxiosError";

const defaultValue: SignupContextType = {
  signUpData: null,
  setSignUpData: () => {},
  handleSignup: () => {},
  loading: false,
};

export const MySignupContext = createContext(defaultValue);

export const SignupContextProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [loading, setLoading] = useState(false);
  const [signUpData, setSignUpData] = useState<SignupProp | null>(null);

  const handleSignup = async (data: SignupProp) => {
    console.log("handleSignup is triggering");
    try {
      setSignUpData(data);
      setLoading(true);

      console.log("📤 Calling supabase.auth.signUp...");
      const { data: signupData, error: signupError } =
        await supabase.auth.signUp({
          email: data.email,
          password: data.password,
          options: {
            emailRedirectTo: `${location.origin}/auth/callback`,
            data: { username: data.username },
          },
        });
      console.log("📥 signUp response received");

      if (signupError) {
        console.error("❌ Signup error:", signupError);
        toast.error(signupError.message);
        setLoading(false);
        return;
      }
      console.log("✅ signupData", signupData);
      toast.success("Confirmation email sent. Please check your inbox.");
      setLoading(false);
    } catch (error) {
      const message = extractAxiosErrorMessage(error);
      toast.error(message);
      setLoading(false);
    }
  };

  return (
    <MySignupContext.Provider
      value={{
        signUpData,
        setSignUpData,
        handleSignup,
        loading,
      }}
    >
      {children}
    </MySignupContext.Provider>
  );
};
