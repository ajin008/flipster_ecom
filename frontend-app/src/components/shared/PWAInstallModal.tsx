"use client";
import React, { useEffect, useState } from "react";
import { usePWAInstall } from "@/hooks/usePWAInstall";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";
import { Download } from "lucide-react";

export default function PWAInstallModal() {
  const { canInstall, handleInstall } = usePWAInstall();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Show the modal only if the PWA can be installed
    if (canInstall) {
      // Best Practice: Don't annoy the user immediately.
      // Wait a few seconds and check if they've already seen the prompt.
      const hasSeenPrompt = localStorage.getItem("pwaInstallPromptSeen");

      if (!hasSeenPrompt) {
        const timer = setTimeout(() => {
          setIsOpen(true);
          localStorage.setItem("pwaInstallPromptSeen", "true");
        }, 5000); // Show after 5 seconds

        return () => clearTimeout(timer);
      }
    }
  }, [canInstall]);

  const onInstallClick = () => {
    handleInstall();
    setIsOpen(false);
  };

  if (!isOpen) {
    return null;
  }

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="sm:max-w-[425px] bg-gaming-bg-card border-gaming-border">
        <DialogHeader>
          <DialogTitle className="text-gaming-text-primary">
            Install FlipSter App
          </DialogTitle>
          <DialogDescription className="text-gaming-text-secondary">
            Get a better experience by installing our app on your device. It's
            fast, works offline, and uses less data.
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <Button variant="gaming" onClick={onInstallClick}>
            <Download className="mr-2 h-4 w-4" />
            Install
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
