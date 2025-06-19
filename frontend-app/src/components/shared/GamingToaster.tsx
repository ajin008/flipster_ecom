"use client";

// components/shared/GamingToaster.tsx
import { Toaster } from "sonner";
import { useEffect } from "react";

export default function GamingToaster() {
  useEffect(() => {
    // Add custom CSS styles to override Sonner's default close button
    const style = document.createElement("style");
    style.textContent = `
      /* Override close button for all toast types */
      [data-sonner-toaster] [data-close-button] {
        background-color: rgba(108, 43, 217, 0.2) !important;
        border: 1px solid rgba(108, 43, 217, 0.3) !important;
        color: #FFFFFF !important;
        transition: all 0.2s ease !important;
      }
      
      [data-sonner-toaster] [data-close-button]:hover {
        background-color: rgba(255, 97, 210, 0.3) !important;
        border: 1px solid rgba(255, 97, 210, 0.5) !important;
        box-shadow: 0 0 10px rgba(255, 97, 210, 0.3) !important;
      }
      
      /* Override success toast close button specifically */
      [data-sonner-toaster] [data-type="success"] [data-close-button] {
        background-color: rgba(108, 43, 217, 0.2) !important;
        border: 1px solid rgba(255, 167, 38, 0.3) !important;
      }
      
      [data-sonner-toaster] [data-type="success"] [data-close-button]:hover {
        background-color: rgba(255, 167, 38, 0.2) !important;
        border: 1px solid rgba(255, 167, 38, 0.5) !important;
        box-shadow: 0 0 10px rgba(255, 167, 38, 0.3) !important;
      }
    `;

    document.head.appendChild(style);

    // Cleanup function to remove the style when component unmounts
    return () => {
      if (document.head.contains(style)) {
        document.head.removeChild(style);
      }
    };
  }, []);

  return (
    <Toaster
      richColors
      closeButton
      position="top-right"
      theme="dark"
      toastOptions={{
        className:
          "bg-gradient-card border border-gaming-purple/40 text-gaming-textPrimary shadow-gaming-glow backdrop-blur-lg",
        style: {
          background:
            "linear-gradient(135deg, #0E061C 0%, #0E061C 40%, rgba(26, 13, 47, 0.9) 100%)",
          color: "#FFFFFF",
          border: "1px solid rgba(108, 43, 217, 0.4)",
          backdropFilter: "blur(12px)",
          boxShadow:
            "0 0 40px rgba(108, 43, 217, 0.4), 0 0 80px rgba(108, 43, 217, 0.2)",
        },
        classNames: {
          toast: "border-gaming-purple/40 shadow-gaming-glow backdrop-blur-lg",
          title:
            "text-gaming-textPrimary font-bold bg-gradient-to-r from-gaming-purpleLight to-gaming-pink bg-clip-text text-transparent",
          description: "text-gaming-textSecondary",
          actionButton:
            "bg-gradient-button hover:bg-gradient-button-hover text-white shadow-gaming-md hover:shadow-gaming-lg transition-all duration-200",
          cancelButton:
            "bg-gaming-background/80 hover:bg-gaming-searchBg text-gaming-textSecondary border border-gaming-purple/20 hover:border-gaming-purple/40 transition-all duration-200",
          closeButton:
            "!bg-gaming-purple/20 hover:!bg-gaming-pink/30 !text-gaming-textPrimary !border !border-gaming-purple/30 hover:!border-gaming-pink/50 transition-all duration-200 hover:shadow-pink-sm",

          // Gaming-themed success (account sold, purchase completed)
          success:
            "bg-gradient-to-br from-gaming-cardBg via-green-900/10 to-gaming-gold/10 border-gaming-gold/40 shadow-gold-md",

          // Gaming-themed error (transaction failed, account unavailable)
          error:
            "bg-gradient-to-br from-gaming-cardBg via-red-900/10 to-gaming-pink/10 border-gaming-pink/40 shadow-pink-md",

          // Gaming-themed warning (verification needed, payment pending)
          warning:
            "bg-gradient-to-br from-gaming-cardBg via-orange-900/10 to-gaming-goldBright/10 border-gaming-goldBright/40 shadow-gold-sm",

          // Gaming-themed info (new features, updates)
          info: "bg-gradient-to-br from-gaming-cardBg via-gaming-purple/10 to-gaming-purpleLight/10 border-gaming-purpleLight/40 shadow-gaming-md",
        },
      }}
      // Gaming-specific icons for your C2C platform
      icons={{
        success: "✨", // Sparkles for successful transactions
        error: "🚫", // Prohibited sign for errors
        warning: "⚡", // Lightning for urgent warnings
        info: "🎲", // Dice for gaming info
      }}
    />
  );
}
