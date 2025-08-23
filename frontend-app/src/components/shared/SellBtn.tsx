"use client";
import React, { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Plus } from "lucide-react";
import { useRouter } from "next/navigation";
import { useUserStore } from "@/store/userStore";
import { useGoogleSignupModal } from "@/context/GoogleSignupModalContext";

interface Ripple {
  id: number;
  x: number;
  y: number;
  size: number;
}

export const SellBtn = () => {
  const user = useUserStore();

  const router = useRouter();
  const shouldReduceMotion = useReducedMotion();
  const [isClicked, setIsClicked] = useState<boolean>(false);
  const [ripples, setRipples] = useState<Ripple[]>([]);

  const { openModal } = useGoogleSignupModal();

  const handleBtn = async (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!shouldReduceMotion) {
      setIsClicked(true);

      // Create ripple effect
      const rect = e.currentTarget.getBoundingClientRect();
      const size = Math.max(rect.width, rect.height);
      const x = e.clientX - rect.left - size / 2;
      const y = e.clientY - rect.top - size / 2;

      const newRipple = {
        id: Date.now(),
        x,
        y,
        size,
      };

      setRipples((prev) => [...prev, newRipple]);

      // Clean up ripple and reset click state
      setTimeout(() => {
        setRipples((prev) => prev.filter((r) => r.id !== newRipple.id));
        setIsClicked(false);
      }, 600);
    }
    if (!user.user) {
      openModal();
      return;
    }
    router.push("/selling");
  };
  // Button animation variants
  const buttonVariants = {
    initial: {
      opacity: 0,
      y: 10,
      boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
    },
    animate: {
      opacity: 1,
      y: 0,
      boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)",
    },
    hover: shouldReduceMotion
      ? {}
      : {
          scale: 1.02,
          y: -2,
          boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.15)",
          transition: { duration: 0.2, ease: "easeOut" },
        },
    tap: shouldReduceMotion
      ? {}
      : {
          scale: 0.98,
          y: 0,
          boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
          transition: { duration: 0.1 },
        },
  };

  // Icon animation variants
  const iconVariants = {
    initial: {
      scale: 1,
      rotate: 0,
      filter: "brightness(1)",
    },
    hover: shouldReduceMotion
      ? {}
      : {
          scale: 1.1,
          rotate: [0, 15, -15, 0],
          filter: "brightness(1.1)",
          transition: {
            scale: { duration: 0.2 },
            rotate: { duration: 0.6, repeat: Infinity },
            filter: { duration: 0.2 },
          },
        },
    tap: shouldReduceMotion
      ? { scale: 0.9 }
      : {
          scale: 0.9,
          rotate: 180,
          transition: { duration: 0.2 },
        },
    clicked: shouldReduceMotion
      ? {}
      : {
          scale: [1, 1.3, 1],
          rotate: 360,
          filter: "brightness(1.3)",
          transition: { duration: 0.4, ease: "easeOut" },
        },
  };

  // Ripple animation variants
  const rippleVariants = {
    initial: {
      scale: 0,
      opacity: 0.6,
    },
    animate: {
      scale: 4,
      opacity: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  // Text animation variants
  const textVariants = {
    initial: { y: 0 },
    hover: shouldReduceMotion
      ? {}
      : {
          y: [-1, 1, -1],
          transition: { repeat: Infinity, duration: 1.5, ease: "easeInOut" },
        },
    tap: { y: 1 },
    clicked: shouldReduceMotion
      ? {}
      : {
          y: [0, -3, 0],
          transition: { duration: 0.4, ease: "easeOut" },
        },
  };

  // Shine effect variants
  const shineVariants = {
    initial: {
      x: "-100%",
      opacity: 0,
    },
    animate: {
      x: "100%",
      opacity: [0, 1, 0],
      transition: {
        duration: 1.5,
        ease: "easeInOut",
        repeat: Infinity,
        repeatDelay: 3,
      },
    },
  };

  return (
    <motion.button
      onClick={handleBtn}
      className="relative flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-[#ff9800] via-[#ffb74d] to-[#ffc107] hover:from-[#f57c00] hover:via-[#ff9800] hover:to-[#ffb300] rounded-xl font-bold text-lg text-gray-900 shadow-lg focus:outline-none focus:ring-4 focus:ring-[#ff9800]/30 overflow-hidden backdrop-blur-sm border border-white/20 select-none"
      variants={buttonVariants}
      initial="initial"
      animate="animate"
      whileHover="hover"
      whileTap="tap"
      transition={{ duration: 0.3 }}
      aria-label="Navigate to selling page"
    >
      {/* Shine effect */}
      {!shouldReduceMotion && (
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
          variants={shineVariants}
          initial="initial"
          animate="animate"
          style={{
            transform: "skewX(-20deg)",
            width: "20%",
          }}
        />
      )}

      {/* Ripple effects */}
      {!shouldReduceMotion &&
        ripples.map((ripple) => (
          <motion.span
            key={ripple.id}
            className="absolute rounded-full bg-white/30 pointer-events-none"
            style={{
              left: ripple.x,
              top: ripple.y,
              width: ripple.size,
              height: ripple.size,
            }}
            variants={rippleVariants}
            initial="initial"
            animate="animate"
          />
        ))}

      {/* Plus icon */}
      <motion.span
        className="relative z-10"
        variants={iconVariants}
        initial="initial"
        whileHover="hover"
        whileTap="tap"
        animate={isClicked ? "clicked" : "initial"}
      >
        <Plus
          className="h-6 w-6 text-gray-900 drop-shadow-sm"
          strokeWidth={2.5}
        />

        {/* Icon glow effect */}
        {isClicked && !shouldReduceMotion && (
          <motion.div
            className="absolute inset-0 bg-white/40 rounded-full blur-sm"
            initial={{ scale: 1, opacity: 0.8 }}
            animate={{ scale: 2, opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          />
        )}
      </motion.span>

      {/* Text */}
      <motion.span
        className="relative z-10 drop-shadow-sm tracking-wide"
        variants={textVariants}
        initial="initial"
        whileHover="hover"
        whileTap="tap"
        animate={isClicked ? "clicked" : "initial"}
      >
        Sell
      </motion.span>

      {/* Background pulse effect */}
      {isClicked && !shouldReduceMotion && (
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-[#ff8f00] via-[#ffa726] to-[#ffb300] rounded-xl"
          initial={{ opacity: 0 }}
          animate={{
            opacity: [0, 0.3, 0],
            scale: [0.95, 1.05, 1],
          }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        />
      )}

      {/* Particle burst effect */}
      {isClicked && !shouldReduceMotion && (
        <>
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-white/60 rounded-full"
              style={{
                left: "50%",
                top: "50%",
                marginLeft: -4,
                marginTop: -4,
              }}
              initial={{
                scale: 0,
                x: 0,
                y: 0,
                opacity: 1,
              }}
              animate={{
                scale: [0, 1, 0],
                x: Math.cos((i * Math.PI * 2) / 8) * 30,
                y: Math.sin((i * Math.PI * 2) / 8) * 30,
                opacity: [1, 0.6, 0],
              }}
              transition={{
                duration: 0.5,
                ease: "easeOut",
                delay: 0.1,
              }}
            />
          ))}
        </>
      )}
    </motion.button>
  );
};
