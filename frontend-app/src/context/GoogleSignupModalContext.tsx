"use client";

import { createContext, useContext, useState, ReactNode } from "react";
import GoogleSignupModal from "../components/shared/GoogleOnlyAuthenticationModal";
import { signInwithOauth } from "../../services/auth/signInWithOAuth";

type GoogleSignupModalContextType = {
  openModal: () => void;
  closeModal: () => void;
};

const GoogleSignupModalContext =
  createContext<GoogleSignupModalContextType | null>(null);

export function GoogleSignupModalProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (
    <GoogleSignupModalContext.Provider value={{ openModal, closeModal }}>
      {children}

      {/* Always mounted modal */}
      <GoogleSignupModal
        isOpen={isOpen}
        onClose={closeModal}
        onGoogleSignup={() => signInwithOauth()}
      />
    </GoogleSignupModalContext.Provider>
  );
}

export function useGoogleSignupModal() {
  const ctx = useContext(GoogleSignupModalContext);
  if (!ctx)
    throw new Error(
      "useGoogleSignupModal must be used inside GoogleSignupModalProvider"
    );
  return ctx;
}
