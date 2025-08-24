import React from "react";
import { Check, Clock, Home, Eye } from "lucide-react";
import { useRouter } from "next/navigation";
import { VerificationModalProps } from "@/lib/interface";
import { Button } from "@/components/ui/button";

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
        className="absolute inset-0 bg-black/80 backdrop-blur-md"
        style={{ backdropFilter: "blur(16px)" }}
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative w-full max-w-md transform animate-pulse-gaming">
        <div className="relative rounded-xl border border-gaming-border-light shadow-gaming-xl overflow-hidden">
          {/* Gradient border effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-gaming-purple via-gaming-purple-light to-gaming-pink opacity-40 rounded-xl blur-sm" />

          {/* Content */}
          <div
            className="relative bg-gaming-bg-card backdrop-blur-md p-6"
            style={{ backdropFilter: "blur(24px)" }}
          >
            {/* Icon and status */}
            <div className="text-center mb-6">
              <div className="relative inline-flex items-center justify-center w-20 h-20 mb-4">
                {/* Animated ring */}
                <div className="absolute inset-0 rounded-full border-2 border-gaming-purple/50 animate-spin" />
                <div
                  className="absolute inset-2 rounded-full border-2 border-gaming-pink/40 animate-spin"
                  style={{
                    animationDirection: "reverse",
                    animationDuration: "3s",
                  }}
                />

                {/* Icon */}
                <div className="relative z-10 flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r from-gaming-purple to-gaming-purple-light shadow-gaming-lg">
                  <Clock className="text-white" size={24} />
                </div>
              </div>

              {/* Title */}
              <h2 className="text-gaming-xl font-bold bg-gradient-to-r from-gaming-purple via-gaming-purple-light to-gaming-pink bg-clip-text text-transparent mb-2">
                Account Under Verification
              </h2>

              {/* Subtitle */}
              <p className="text-gaming-text-secondary text-sm">
                Your game account is being in verification process we will list
                after verifying your login credentials
              </p>
            </div>

            {/* Time estimate */}
            <div className="text-center mb-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-gaming-purple/20 border border-gaming-purple/40">
                <Check className="text-gaming-purple-light" size={16} />
                <span className="text-gaming-text-primary text-sm font-medium">
                  Estimated time: 30 minutes
                </span>
              </div>
            </div>

            {/* Progress bar */}
            <div className="mb-6">
              <div className="w-full h-2 bg-gaming-bg-search/80 rounded-full overflow-hidden border border-gaming-border/30">
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

            {/* Action buttons - FIXED HEIGHT ISSUE */}
            <div className="flex flex-col gap-3">
              {/* Go to Home */}
              <Button
                onClick={handleGoHome}
                variant="gaming-outline"
                className="w-full h-12 flex items-center justify-center gap-2 text-base font-medium"
              >
                <Home size={18} />
                <span>Go to Home</span>
              </Button>

              {/* View Listing */}
              <Button
                onClick={handleViewListing}
                variant="gaming"
                className="w-full h-12 flex items-center justify-center gap-2 text-base font-medium"
              >
                <Eye size={18} />
                <span>View Listing</span>
              </Button>
            </div>

            {/* Footer note */}
            <div className="mt-4 pt-4 border-t border-gaming-border-light/50">
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
