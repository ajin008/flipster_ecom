"use client";

import { BeforeInstallPromptEvent } from "@/lib/interface";
import { useEffect, useState } from "react";

export const usePWAInstall = () => {
  const [installPrompt, setInstallPrompt] =
    useState<BeforeInstallPromptEvent | null>(null);

  useEffect(() => {
    const handleBeforeInstallPrompt = (event: Event) => {
      event.preventDefault();
      setInstallPrompt(event as BeforeInstallPromptEvent);
    };

    window.addEventListener("beforeinstallprompt", handleBeforeInstallPrompt);

    return () => {
      window.removeEventListener(
        "beforeinstallprompt",
        handleBeforeInstallPrompt
      );
    };
  }, []);

  const handleInstall = async () => {
    if (!installPrompt) return;
    await installPrompt.prompt();

    const { outcome } = await installPrompt.userChoice;

    if (outcome === "accepted") {
      console.log("User accepted the PWA installation");
    } else {
      console.log("User dismissed the PWA installation");
    }

    setInstallPrompt(null);
  };

  return { canInstall: !!installPrompt, handleInstall };
};
