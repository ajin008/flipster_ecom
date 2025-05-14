"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FaGoogle,
  FaLock,
  FaUser,
  FaGamepad,
  FaRegEye,
  FaRegEyeSlash,
} from "react-icons/fa";
import { MdOutlineShoppingCart } from "react-icons/md";
import { useRouter } from "next/navigation";
import { Variants } from "framer-motion";

export default function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        duration: 0.5,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  };

  const logoVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 15,
        duration: 0.8,
      },
    },
  };

  const floatingIconVariants: Variants = {
    initial: { y: 0 },
    animate: {
      y: [0, -10, 0],
      transition: {
        duration: 3,
        repeat: Infinity,
        repeatType: "reverse",
      },
    },
  };

  const router = useRouter();

  const handleBtn = () => {
    router.push("/signup");
  };

  return (
    <div className="flex flex-col lg:flex-row min-h-screen bg-bg-primary text-text-primary">
      {/* Left side - Login Form */}
      <div className="flex flex-col justify-center items-center p-6 w-full lg:w-1/2">
        <motion.div
          className="w-full max-w-md mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Logo and Title */}
          <motion.div
            className="flex flex-col items-center mb-12"
            variants={logoVariants}
          >
            <div className="relative mb-4">
              <motion.div
                variants={floatingIconVariants}
                animate="animate"
                className="text-accent text-6xl"
              >
                <FaGamepad />
              </motion.div>
              <motion.div
                className="absolute -right-4 -bottom-4 text-3xl text-accent-muted"
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                <MdOutlineShoppingCart />
              </motion.div>
            </div>
            <motion.h1
              className="text-3xl font-bold mb-2 text-text-primary"
              variants={itemVariants}
            >
              zesTEX
            </motion.h1>
            <motion.p
              className="text-sm text-muted-foreground mb-6"
              variants={itemVariants}
            >
              Login to access your game inventory
            </motion.p>
          </motion.div>

          {/* Login Form */}
          <motion.div variants={itemVariants} className="mb-4">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-muted-foreground">
                <FaUser />
              </div>
              <input
                type="text"
                className="w-full p-4 pl-10 bg-muted border border-border rounded focus:ring-2 focus:ring-accent/50 focus:border-accent transition-all duration-300"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="mb-6">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-muted-foreground">
                <FaLock />
              </div>
              <input
                type={showPassword ? "text" : "password"}
                className="w-full p-4 pl-10 bg-muted border border-border rounded focus:ring-2 focus:ring-accent/50 focus:border-accent transition-all duration-300"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <button
                className="absolute inset-y-0 right-0 flex items-center pr-3 text-muted-foreground hover:text-accent transition-colors"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <FaRegEyeSlash /> : <FaRegEye />}
              </button>
            </div>
          </motion.div>

          <motion.div variants={itemVariants}>
            <motion.button
              className="w-full bg-accent hover:bg-accent-muted text-primary-foreground p-4 rounded font-medium transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Login
            </motion.button>
          </motion.div>

          <motion.div
            className="flex items-center my-6"
            variants={itemVariants}
          >
            <div className="flex-1 h-px bg-border"></div>
            <p className="mx-4 text-xs text-muted-foreground">
              OR CONTINUE WITH
            </p>
            <div className="flex-1 h-px bg-border"></div>
          </motion.div>

          <motion.div variants={itemVariants}>
            <motion.button
              className="w-full flex items-center justify-center bg-secondary text-secondary-foreground p-4 rounded font-medium border border-border transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaGoogle className="mr-2" />
              Google
            </motion.button>
          </motion.div>

          <motion.div className="mt-6 text-center" variants={itemVariants}>
            <p className="text-sm text-muted-foreground">
              First time using ZesTEX? Create an account?{" "}
              <a
                href="#"
                className="text-accent hover:underline"
                onClick={handleBtn}
              >
                Sign up
              </a>
            </p>
          </motion.div>
        </motion.div>
      </div>

      {/* Right side - Decorative content (visible only on large screens) */}
      <div className="hidden lg:flex flex-col justify-center items-center w-1/2 bg-secondary p-12 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-transparent"></div>

        <motion.div
          className="relative z-10 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          <motion.h2
            className="text-4xl font-bold mb-6 text-text-primary"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            Level Up Your Game Collection
          </motion.h2>

          <motion.p
            className="text-lg mb-8 text-muted-foreground max-w-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          >
            Buy, sell, and trade game accounts securely. Join thousands of
            gamers in the ultimate marketplace.
          </motion.p>

          {/* Decorative Gaming Elements */}
          <div className="relative h-64 w-full">
            {/* Animated floating elements */}
            <motion.div
              className="absolute top-0 left-10"
              variants={floatingIconVariants}
              animate="animate"
              custom={1}
            >
              <div className="text-accent text-6xl opacity-80">
                <FaGamepad />
              </div>
            </motion.div>

            <motion.div
              className="absolute top-20 right-10"
              animate={{
                y: [0, -15, 0],
                rotate: [0, 5, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            >
              <div className="text-accent-muted text-4xl">
                <MdOutlineShoppingCart />
              </div>
            </motion.div>

            <motion.div
              className="absolute bottom-10 left-20"
              animate={{
                y: [0, 10, 0],
                rotate: [0, -5, 0],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            >
              <div className="bg-accent/20 backdrop-blur-lg p-6 rounded-lg border border-accent/30">
                <p className="text-xl font-medium text-text-primary">
                  Secure Transactions
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Decorative gradient circles */}
        <div className="absolute -bottom-32 -right-32 w-64 h-64 bg-accent/20 rounded-full blur-3xl"></div>
        <div className="absolute -top-32 -left-32 w-64 h-64 bg-accent/10 rounded-full blur-3xl"></div>
      </div>
    </div>
  );
}
