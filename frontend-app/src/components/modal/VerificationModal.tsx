import React from "react";
import { Check, Clock, Home, Eye, X } from "lucide-react";
import { useRouter } from "next/navigation";
import { VerificationModalProps } from "@/lib/interface";

export default function VerificationModal({
  isOpen,
  onClose,
}: VerificationModalProps) {
  const router = useRouter();

  if (!isOpen) return null;

  const handleGoHome = () => {
    router.push("/");
    onClose();
  };

  const handleViewListing = () => {
    router.push("/Mylisting");
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        style={{ backdropFilter: "blur(12px)" }}
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative w-full max-w-md transform animate-pulse-gaming">
        <div className="relative rounded-xl border border-gaming-border shadow-gaming-lg overflow-hidden">
          {/* Gradient border effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-gaming-purple via-gaming-purple-light to-gaming-pink opacity-20 rounded-xl blur-sm" />

          {/* Content */}
          <div
            className="relative bg-gaming-bg-card/95 backdrop-blur-sm p-6"
            style={{ backdropFilter: "blur(20px)" }}
          >
            {/* Close button */}
            {/* <button
              onClick={onClose}
              className="absolute top-4 right-4 text-gaming-text-secondary hover:text-gaming-text-primary transition-colors duration-200"
            >
              <X size={20} />
            </button> */}

            {/* Icon and status */}
            <div className="text-center mb-6">
              <div className="relative inline-flex items-center justify-center w-20 h-20 mb-4">
                {/* Animated ring */}
                <div className="absolute inset-0 rounded-full border-2 border-gaming-purple/30 animate-spin" />
                <div
                  className="absolute inset-2 rounded-full border-2 border-gaming-pink/20 animate-spin"
                  style={{
                    animationDirection: "reverse",
                    animationDuration: "3s",
                  }}
                />

                {/* Icon */}
                <div className="relative z-10 flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r from-gaming-purple to-gaming-purple-light shadow-gaming-md">
                  <Clock className="text-white" size={24} />
                </div>
              </div>

              {/* Title */}
              <h2 className="text-gaming-xl font-bold bg-gradient-to-r from-gaming-purple via-gaming-purple-light to-gaming-pink bg-clip-text text-transparent mb-2">
                Account Under Verification
              </h2>

              {/* Subtitle */}
              <p className="text-gaming-text-secondary text-sm">
                Your game account is being verified
              </p>
            </div>

            {/* Time estimate */}
            <div className="text-center mb-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-gaming-purple/10 border border-gaming-purple/20">
                <Check className="text-gaming-purple-light" size={16} />
                <span className="text-gaming-text-primary text-sm font-medium">
                  Estimated time: 30 minutes
                </span>
              </div>
            </div>

            {/* Progress bar */}
            <div className="mb-6">
              <div className="w-full h-2 bg-gaming-bg-search rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-gaming-purple to-gaming-pink rounded-full animate-shimmer"
                  style={{
                    width: "40%",
                    backgroundSize: "200% 100%",
                  }}
                />
              </div>
              <p className="text-xs text-gaming-text-muted mt-2 text-center">
                Verification in progress...
              </p>
            </div>

            {/* Action buttons */}
            <div className="flex flex-col sm:flex-row gap-3">
              {/* Go to Home */}
              <button
                onClick={handleGoHome}
                className="flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-lg border border-gaming-border hover:border-gaming-border-light text-gaming-text-secondary hover:text-gaming-text-primary transition-all duration-200 hover:shadow-gaming-sm"
              >
                <Home size={18} />
                <span className="font-medium">Go to Home</span>
              </button>

              {/* View Listing */}
              <button
                onClick={handleViewListing}
                className="flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-lg bg-gradient-to-r from-gaming-purple to-gaming-purple-light hover:from-gaming-purple-light hover:to-gaming-pink text-white font-medium transition-all duration-200 hover:shadow-gaming-button transform hover:scale-[1.02]"
              >
                <Eye size={18} />
                <span>View Listing</span>
              </button>
            </div>

            {/* Footer note */}
            <div className="mt-4 pt-4 border-t border-gaming-border/30">
              <p className="text-xs text-gaming-text-muted text-center">
                You'll receive a notification once verification is complete
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
