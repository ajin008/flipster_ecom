"use client";
import React, { useState } from "react";
import { motion, Variants } from "framer-motion";
import {
  FaGoogle,
  FaLock,
  FaUser,
  FaGamepad,
  FaRegEye,
  FaRegEyeSlash,
  FaEnvelope,
  FaPhone,
} from "react-icons/fa";
import { MdOutlineShoppingCart } from "react-icons/md";

export default function SignupPage() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

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
        repeatType: "reverse" as "reverse" | "loop" | "mirror",
      },
    },
  };

  return (
    <div className="flex flex-col lg:flex-row min-h-screen bg-bg-primary text-text-primary">
      {/* Left side - Signup Form */}
      <div className="flex flex-col justify-center items-center p-6 w-full lg:w-1/2">
        <motion.div
          className="w-full max-w-md mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Logo and Title */}
          <motion.div
            className="flex flex-col items-center mb-8"
            variants={logoVariants}
          >
            <div className="relative mb-4">
              <motion.div
                variants={floatingIconVariants}
                animate="animate"
                className="text-accent text-5xl"
              >
                <FaGamepad />
              </motion.div>
              <motion.div
                className="absolute -right-4 -bottom-4 text-2xl text-accent-muted"
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                <MdOutlineShoppingCart />
              </motion.div>
            </div>
            <motion.h1
              className="text-2xl font-bold mb-1 text-text-primary"
              variants={itemVariants}
            >
              Create Your Account
            </motion.h1>
            <motion.p
              className="text-sm text-muted-foreground mb-4"
              variants={itemVariants}
            >
              Join the ultimate game marketplace
            </motion.p>
          </motion.div>

          {/* Signup Form */}
          <motion.div variants={itemVariants} className="mb-4">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-muted-foreground">
                <FaUser />
              </div>
              <input
                type="text"
                className="w-full p-3 pl-10 bg-muted border border-border rounded focus:ring-2 focus:ring-accent/50 focus:border-accent transition-all duration-300"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="mb-4">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-muted-foreground">
                <FaEnvelope />
              </div>
              <input
                type="email"
                className="w-full p-3 pl-10 bg-muted border border-border rounded focus:ring-2 focus:ring-accent/50 focus:border-accent transition-all duration-300"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="mb-4">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-muted-foreground">
                <FaPhone />
              </div>
              <input
                type="tel"
                className="w-full p-3 pl-10 bg-muted border border-border rounded focus:ring-2 focus:ring-accent/50 focus:border-accent transition-all duration-300"
                placeholder="Phone Number"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="mb-4">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-muted-foreground">
                <FaLock />
              </div>
              <input
                type={showPassword ? "text" : "password"}
                className="w-full p-3 pl-10 bg-muted border border-border rounded focus:ring-2 focus:ring-accent/50 focus:border-accent transition-all duration-300"
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

          <motion.div variants={itemVariants} className="mb-6">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-muted-foreground">
                <FaLock />
              </div>
              <input
                type={showConfirmPassword ? "text" : "password"}
                className="w-full p-3 pl-10 bg-muted border border-border rounded focus:ring-2 focus:ring-accent/50 focus:border-accent transition-all duration-300"
                placeholder="Confirm Password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
              <button
                className="absolute inset-y-0 right-0 flex items-center pr-3 text-muted-foreground hover:text-accent transition-colors"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              >
                {showConfirmPassword ? <FaRegEyeSlash /> : <FaRegEye />}
              </button>
            </div>
          </motion.div>

          <motion.div variants={itemVariants}>
            <motion.button
              className="w-full bg-accent hover:bg-accent-muted text-primary-foreground p-3 rounded font-medium transition-all duration-300"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              Create Account
            </motion.button>
          </motion.div>

          <motion.div
            className="flex items-center my-4"
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
              className="w-full flex items-center justify-center bg-secondary text-secondary-foreground p-3 rounded font-medium border border-border transition-all duration-300"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              <FaGoogle className="mr-2" />
              Google
            </motion.button>
          </motion.div>

          <motion.div className="mt-6 text-center" variants={itemVariants}>
            <p className="text-sm text-muted-foreground">
              Already have an account?{" "}
              <a href="#" className="text-accent hover:underline">
                Log in
              </a>
            </p>
          </motion.div>
        </motion.div>
      </div>

      {/* Right side - Decorative content (visible only on large screens) */}
      <div className="hidden lg:flex flex-col justify-center items-center w-1/2 bg-secondary p-12 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-bl from-accent/10 to-transparent"></div>

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
            Join Our Gaming Community
          </motion.h2>

          <motion.p
            className="text-lg mb-8 text-muted-foreground max-w-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          >
            Create an account to start buying, selling, and trading game
            accounts. Connect with gamers worldwide.
          </motion.p>

          {/* Benefits cards */}
          <div className="grid grid-cols-2 gap-6 max-w-md mx-auto">
            <motion.div
              className="bg-muted p-4 rounded-lg border border-border"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2 }}
            >
              <div className="text-accent text-3xl mb-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                </svg>
              </div>
              <h3 className="font-medium mb-1">Secure Transactions</h3>
              <p className="text-xs text-muted-foreground">
                All trades are protected and guaranteed
              </p>
            </motion.div>

            <motion.div
              className="bg-muted p-4 rounded-lg border border-border"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.4 }}
            >
              <div className="text-accent text-3xl mb-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
                  <line x1="3" y1="6" x2="21" y2="6"></line>
                  <path d="M16 10a4 4 0 0 1-8 0"></path>
                </svg>
              </div>
              <h3 className="font-medium mb-1">Massive Inventory</h3>
              <p className="text-xs text-muted-foreground">
                Thousands of game accounts available
              </p>
            </motion.div>

            <motion.div
              className="bg-muted p-4 rounded-lg border border-border"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.6 }}
            >
              <div className="text-accent text-3xl mb-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                </svg>
              </div>
              <h3 className="font-medium mb-1">24/7 Support</h3>
              <p className="text-xs text-muted-foreground">
                Our team is always here to help
              </p>
            </motion.div>

            <motion.div
              className="bg-muted p-4 rounded-lg border border-border"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.8 }}
            >
              <div className="text-accent text-3xl mb-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="12" r="10"></circle>
                  <path d="M8 14s1.5 2 4 2 4-2 4-2"></path>
                  <line x1="9" y1="9" x2="9.01" y2="9"></line>
                  <line x1="15" y1="9" x2="15.01" y2="9"></line>
                </svg>
              </div>
              <h3 className="font-medium mb-1">Community</h3>
              <p className="text-xs text-muted-foreground">
                Join thousands of fellow gamers
              </p>
            </motion.div>
          </div>
        </motion.div>

        {/* Decorative gradient circles */}
        <div className="absolute -bottom-32 -right-32 w-64 h-64 bg-accent/20 rounded-full blur-3xl"></div>
        <div className="absolute -top-32 -left-32 w-96 h-96 bg-accent/10 rounded-full blur-3xl"></div>
      </div>
    </div>
  );
}
