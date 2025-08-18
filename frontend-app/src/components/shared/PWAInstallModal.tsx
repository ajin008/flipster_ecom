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
  DialogOverlay,
} from "@/components/ui/dialog";
import { Download, X, Smartphone, Zap, Wifi } from "lucide-react";

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

  const onDismiss = () => {
    setIsOpen(false);
    // Set a timestamp for when they dismissed it
    localStorage.setItem("pwaInstallDismissed", Date.now().toString());
  };

  if (!isOpen) {
    return null;
  }

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      {/* Custom overlay with enhanced background blur */}
      <DialogOverlay className="fixed inset-0 z-50 bg-gaming-bg-primary/95 backdrop-blur-gaming data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" />

      <DialogContent className="fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-6 border-2 border-gaming-border-light bg-gaming-bg-card p-8 shadow-gaming-xl duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-2xl backdrop-blur-gaming">
        {/* Close button */}
        <button
          onClick={onDismiss}
          className="absolute right-4 top-4 rounded-full p-2 text-gaming-text-secondary hover:text-gaming-text-primary hover:bg-gaming-purple/10 transition-all duration-200"
        >
          <X className="h-4 w-4" />
          <span className="sr-only">Close</span>
        </button>

        <DialogHeader className="text-center space-y-4">
          {/* App icon/logo placeholder with gradient */}
          <div className="mx-auto w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center shadow-gaming-md">
            <Smartphone className="h-8 w-8 text-white" />
          </div>

          <DialogTitle className="text-2xl font-bold text-gaming-text-primary">
            Install{" "}
            <span className="bg-gradient-text bg-clip-text text-transparent">
              FlipSter
            </span>{" "}
            App
          </DialogTitle>

          <DialogDescription className="text-gaming-text-secondary text-base leading-relaxed">
            Transform your experience with our lightning-fast app that works
            seamlessly offline and delivers premium performance.
          </DialogDescription>
        </DialogHeader>

        {/* Features list */}
        <div className="grid gap-4 my-6">
          <div className="flex items-center gap-3 text-gaming-text-muted">
            <div className="flex-shrink-0 w-8 h-8 bg-gaming-purple/20 rounded-full flex items-center justify-center">
              <Zap className="h-4 w-4 text-gaming-purple-light" />
            </div>
            <span>Lightning-fast performance</span>
          </div>

          <div className="flex items-center gap-3 text-gaming-text-muted">
            <div className="flex-shrink-0 w-8 h-8 bg-gaming-pink/20 rounded-full flex items-center justify-center">
              <Wifi className="h-4 w-4 text-gaming-pink" />
            </div>
            <span>Works offline & uses less data</span>
          </div>

          <div className="flex items-center gap-3 text-gaming-text-muted">
            <div className="flex-shrink-0 w-8 h-8 bg-gaming-gold/20 rounded-full flex items-center justify-center">
              <Smartphone className="h-4 w-4 text-gaming-gold" />
            </div>
            <span>Native app-like experience</span>
          </div>
        </div>

        <DialogFooter className="flex flex-col sm:flex-row gap-3">
          <Button
            variant="outline"
            onClick={onDismiss}
            className="w-full sm:w-auto border-gaming-border bg-transparent hover:bg-gaming-purple/10 text-gaming-text-secondary hover:text-gaming-text-primary transition-all duration-200"
          >
            Maybe Later
          </Button>

          <Button
            onClick={onInstallClick}
            className="w-full sm:w-auto bg-gradient-button hover:bg-gradient-button-hover text-white font-semibold shadow-gaming-button hover:shadow-gaming-hover transition-all duration-300 hover:scale-105"
          >
            <Download className="mr-2 h-4 w-4" />
            Install Now
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
