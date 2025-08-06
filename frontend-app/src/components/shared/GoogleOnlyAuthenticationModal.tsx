"use client";

import React, { useEffect } from "react";
import { X } from "lucide-react";
import ZesTEXLogo from "../layout/ZesTEXLogo";

interface GoogleSignupModalProps {
  isOpen: boolean;
  onClose: () => void;
  onGoogleSignup: () => void;
  isLoading?: boolean;
}

const GoogleSignupModal: React.FC<GoogleSignupModalProps> = ({
  isOpen,
  onClose,
  onGoogleSignup,
  isLoading = false,
}) => {
  // Handle escape key press
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape" && isOpen && !isLoading) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose, isLoading]);

  // Handle overlay click
  const handleOverlayClick = (event: React.MouseEvent<HTMLDivElement>) => {
    if (event.target === event.currentTarget && !isLoading) {
      onClose();
    }
  };

  // Handle close button click with explicit event handling
  const handleCloseClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    event.stopPropagation();
    if (!isLoading) {
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      {/* Gaming backdrop */}
      <div
        className="fixed inset-0 bg-black/70 backdrop-blur-lg transition-all duration-300"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(108, 43, 217, 0.25) 0%, rgba(0, 0, 0, 0.85) 70%)",
        }}
        onClick={handleOverlayClick}
      />

      {/* Modal container */}
      <div className="flex min-h-full items-center justify-center p-4">
        <div
          className={`
          relative w-full max-w-md
          transform transition-all duration-300 ease-out
          ${isOpen ? "scale-100 opacity-100 translate-y-0" : "scale-95 opacity-0 translate-y-4"}
        `}
        >
          {/* Modal content */}
          <div className="relative bg-gaming-cardBg border border-gaming-purple/40 rounded-2xl shadow-gaming-glow overflow-hidden backdrop-blur-xl">
            {/* Gaming glow effect */}
            <div className="absolute inset-0 pointer-events-none opacity-30 bg-gradient-gaming-radial" />

            {/* Close button - Fixed with higher z-index and standard colors */}
            <button
              onClick={handleCloseClick}
              disabled={isLoading}
              className="absolute top-4 right-4 z-50 p-2 rounded-full bg-gaming-background/80 hover:bg-gaming-background border border-gaming-purple/30 hover:border-gaming-purple text-gaming-textSecondary hover:text-gaming-textPrimary transition-all duration-200 shadow-gaming-sm hover:shadow-gaming-md disabled:opacity-50 disabled:cursor-not-allowed"
              aria-label="Close modal"
            >
              <X size={20} />
            </button>

            {/* Modal header */}
            <div className="px-8 pt-8 pb-6 text-center relative z-10">
              <div className="mb-4">
                <div className="flex items-center justify-center mb-2">
                  <ZesTEXLogo />
                </div>
                <div className="w-16 h-0.5 bg-gradient-button mx-auto rounded-full"></div>
              </div>

              <h2 className="text-xl font-bold text-gaming-textPrimary mb-2">
                Ready to Start Trading?
              </h2>
              <p className="text-gaming-textSecondary text-sm leading-relaxed">
                Join thousands of traders on Flipster's marketplace. Buy, sell,
                and discover amazing deals with just one click.
              </p>
            </div>

            {/* Google signup button */}
            <div className="px-8 pb-8 relative z-10">
              <button
                onClick={onGoogleSignup}
                disabled={isLoading}
                className="w-full flex items-center justify-center gap-4 bg-white hover:bg-gray-50 text-gray-800 font-semibold py-4 px-6 rounded-xl border border-gray-200 transition-all duration-200 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed group"
              >
                {isLoading ? (
                  <div className="flex items-center gap-3">
                    <div className="w-5 h-5 border-2 border-gray-300 border-t-gaming-purple rounded-full animate-spin" />
                    <span>Connecting...</span>
                  </div>
                ) : (
                  <>
                    {/* Google icon */}
                    <svg className="w-5 h-5" viewBox="0 0 24 24">
                      <path
                        fill="#4285F4"
                        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                      />
                      <path
                        fill="#34A853"
                        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                      />
                      <path
                        fill="#FBBC05"
                        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                      />
                      <path
                        fill="#EA4335"
                        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                      />
                    </svg>
                    <span>Continue with Google</span>
                  </>
                )}
              </button>

              {/* Terms and privacy */}
              <p className="text-xs text-gaming-textMuted text-center mt-4 leading-relaxed">
                By signing up, you agree to our{" "}
                <a
                  href="/terms"
                  className="text-gaming-pink hover:text-gaming-pinkLight transition-colors"
                >
                  Terms of Service
                </a>{" "}
                and{" "}
                <a
                  href="/privacy"
                  className="text-gaming-pink hover:text-gaming-pinkLight transition-colors"
                >
                  Privacy Policy
                </a>
              </p>
            </div>

            {/* Gaming accent border */}
            <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-button" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default GoogleSignupModal;
