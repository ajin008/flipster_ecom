import React, { useEffect } from "react";

interface ConfirmationDialogProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  title: string;
  message: string;
  confirmText?: string;
  cancelText?: string;
  variant?: "default" | "destructive" | "warning";
  showIcon?: boolean;
}

const ConfirmationDialog: React.FC<ConfirmationDialogProps> = ({
  isOpen,
  onClose,
  onConfirm,
  title,
  message,
  confirmText = "Confirm",
  cancelText = "Cancel",
  variant = "default",
  showIcon = true,
}) => {
  // Handle escape key press
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
      // Prevent body scroll when dialog is open
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose]);

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const handleConfirm = () => {
    onConfirm();
    onClose();
  };

  // Icon based on variant
  const getIcon = () => {
    if (!showIcon) return null;

    switch (variant) {
      case "destructive":
        return (
          <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-destructive/20 flex items-center justify-center">
            <svg
              className="w-6 h-6 text-destructive"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z"
              />
            </svg>
          </div>
        );
      case "warning":
        return (
          <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-gaming-gold/20 flex items-center justify-center">
            <svg
              className="w-6 h-6 text-gaming-gold"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z"
              />
            </svg>
          </div>
        );
      default:
        return (
          <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-gaming-purple/20 flex items-center justify-center">
            <svg
              className="w-6 h-6 text-gaming-purple"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
        );
    }
  };

  // Button styles based on variant
  const getConfirmButtonStyles = () => {
    switch (variant) {
      case "destructive":
        return "bg-destructive hover:bg-destructive/90 shadow-pink-md hover:shadow-pink-hover text-white";
      case "warning":
        return "bg-gaming-gold hover:bg-gaming-gold-muted shadow-gold-md hover:shadow-gold-hover text-gaming-bg-primary";
      default:
        return "bg-gradient-button hover:bg-gradient-button-hover shadow-gaming-button hover:shadow-gaming-hover text-white";
    }
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      onClick={handleBackdropClick}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-gaming" />

      {/* Dialog */}
      <div className="relative w-full max-w-md transform transition-all duration-300 ease-gaming">
        <div
          className="bg-gaming-bg-card/95 backdrop-blur-sm border border-gaming-border rounded-xl shadow-gaming-xl p-6"
          style={{ backgroundColor: "#1a0d2f" }}
        >
          {/* Icon */}
          {getIcon()}

          {/* Title */}
          <h2 className="text-xl font-bold text-gaming-text-primary text-center mb-3">
            {title}
          </h2>

          {/* Message */}
          <p className="text-gaming-text-secondary text-center mb-6 leading-relaxed">
            {message}
          </p>

          {/* Buttons */}
          <div className="flex gap-3 justify-center">
            <button
              onClick={onClose}
              className="px-6 py-2.5 rounded-lg border border-gaming-border bg-gaming-muted hover:bg-gaming-bg-search text-gaming-text-secondary hover:text-gaming-text-primary transition-all duration-200 font-medium min-w-[100px]"
            >
              {cancelText}
            </button>

            <button
              onClick={handleConfirm}
              className={`px-6 py-2.5 rounded-lg font-medium transition-all duration-200 min-w-[100px] ${getConfirmButtonStyles()}`}
            >
              {confirmText}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConfirmationDialog;
