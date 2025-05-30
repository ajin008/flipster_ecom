import { LeftBannerProps } from "@/lib/interface";
import React from "react";
import { motion } from "framer-motion";

export default function LeftBanner({ type }: LeftBannerProps) {
  // Animation variants with proper typing
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
      },
    },
  };

  return (
    <motion.div
      className="flex flex-col gap-4 p-6 rounded-2xl backdrop-blur-md bg-black/30 border border-white/20"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.div
        className="text-4xl font-bold text-white flex items-center"
        variants={itemVariants}
      >
        <span className="text-white">zes</span>
        <motion.span
          className="text-accent"
          animate={{
            scale: [1, 1.05, 1],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        >
          TEX
        </motion.span>
      </motion.div>

      <motion.p className="text-white text-lg max-w-md" variants={itemVariants}>
        {type === "login" ? (
          <>
            Welcome back! Log in to continue exploring
            <motion.span
              className="inline-block mx-1 font-medium text-accent"
              animate={{
                opacity: [0.7, 1, 0.7],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            >
              amazing opportunities
            </motion.span>
            with zesTEX.
          </>
        ) : (
          <>
            Join zesTEX today and unlock
            <motion.span
              className="inline-block mx-1 font-medium text-accent"
              animate={{
                opacity: [0.7, 1, 0.7],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            >
              secure gaming accounts
            </motion.span>
            at unbeatable prices!
          </>
        )}
      </motion.p>

      {/* Gaming-themed decoration */}
      <motion.div className="mt-4" variants={itemVariants}>
        <div className="flex items-center gap-2">
          <motion.div
            className="h-1 w-12 bg-accent rounded-full"
            animate={{
              width: ["12px", "48px", "36px"],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
          <motion.div
            className="h-1 w-8 bg-white rounded-full opacity-70"
            animate={{
              width: ["8px", "24px", "16px"],
            }}
            transition={{
              duration: 1.2,
              repeat: Infinity,
              repeatType: "reverse",
              delay: 0.3,
            }}
          />
          <motion.div
            className="h-1 w-4 bg-accent rounded-full opacity-40"
            animate={{
              width: ["4px", "20px", "12px"],
            }}
            transition={{
              duration: 1.8,
              repeat: Infinity,
              repeatType: "reverse",
              delay: 0.6,
            }}
          />
        </div>
      </motion.div>

      {/* Subtle tagline */}
      <motion.p className="text-sm text-white/80 mt-2" variants={itemVariants}>
        {type === "login"
          ? "Secure · Fast · Trusted"
          : "No Cheats · Fair Prices · Secure Transactions"}
      </motion.p>
    </motion.div>
  );
}
