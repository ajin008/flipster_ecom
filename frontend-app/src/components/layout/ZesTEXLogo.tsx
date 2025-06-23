"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";

//

export default function ZesTEXLogo() {
  const [isHovered, setIsHovered] = useState(false);

  const containerVariants = {
    initial: { opacity: 0, y: -20 },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        staggerChildren: 0.1,
      },
    },
    hover: {
      scale: 1.05,
      transition: { duration: 0.3 },
    },
  };

  const letterVariants = {
    initial: { opacity: 0, y: 20, rotateX: -90 },
    animate: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        duration: 0.6,
        ease: "backOut",
      },
    },
    hover: {
      y: [-2, -8, -2],
      textShadow: [
        "0 0 0px #6C2BD9",
        "0 0 20px #6C2BD9, 0 0 40px #FFA726",
        "0 0 0px #6C2BD9",
      ],
      transition: {
        duration: 0.6,
        ease: "easeInOut",
      },
    },
  };

  const glowVariants = {
    initial: { scale: 0, opacity: 0 },
    animate: {
      scale: 1,
      opacity: 1,
      transition: { delay: 0.5, duration: 0.5 },
    },
    hover: {
      scale: [1, 1.4, 1.2],
      rotate: [0, 180, 360],
      boxShadow: [
        "0 0 20px #6C2BD9",
        "0 0 40px #A55FFF, 0 0 60px #6C2BD9",
        "0 0 30px #FFA726",
      ],
      transition: {
        duration: 0.8,
        ease: "easeInOut",
      },
    },
  };

  const orbitVariants = {
    animate: {
      rotate: 360,
      transition: {
        duration: 8,
        repeat: Infinity,
        ease: "linear",
      },
    },
    hover: {
      rotate: 360,
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "linear",
      },
    },
  };

  const sparkleVariants = {
    animate: {
      scale: [0.8, 1.2, 0.8],
      opacity: [0.6, 1, 0.6],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
    hover: {
      scale: [1, 1.5, 1],
      opacity: [0.8, 1, 0.8],
      transition: {
        duration: 0.5,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  return (
    <motion.div
      className="relative font-bold text-2xl md:text-3xl lg:text-4xl cursor-pointer select-none"
      variants={containerVariants}
      initial="initial"
      animate="animate"
      whileHover="hover"
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      {/* Background glow effect */}
      <motion.div
        className="absolute inset-0 bg-gradient-purple rounded-lg blur-xl opacity-20"
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.1, 0.3, 0.1],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Main logo container */}
      <motion.div
        className="relative flex items-center justify-center"
        variants={containerVariants}
      >
        {/* Orbiting elements */}
        <motion.div
          className="absolute inset-0 pointer-events-none"
          variants={orbitVariants}
          animate={isHovered ? "hover" : "animate"}
        >
          <motion.div
            className="absolute -top-2 -left-2 w-1 h-1 bg-gaming-gold rounded-full"
            variants={sparkleVariants}
            animate={isHovered ? "hover" : "animate"}
          />
          <motion.div
            className="absolute -bottom-2 -right-2 w-1.5 h-1.5 bg-gaming-purpleLight rounded-full"
            variants={sparkleVariants}
            animate={isHovered ? "hover" : "animate"}
            style={{ animationDelay: "0.5s" }}
          />
        </motion.div>

        {/* Logo text */}
        <div className="flex items-center relative z-10">
          {/* FlipSter letters with individual animations */}
          <div className="flex">
            {["F", "l", "i", "p", "S", "t", "e", "r"].map((letter, index) => (
              <motion.span
                key={index}
                className={`inline-block ${
                  letter === "F" || letter === "S" || letter === "r"
                    ? "text-gaming-purpleLight font-black"
                    : "text-gaming-textPrimary"
                }`}
                variants={letterVariants}
                custom={index}
                style={{
                  background:
                    letter === "F"
                      ? "linear-gradient(45deg, #6C2BD9, #A55FFF)"
                      : letter === "r"
                        ? "linear-gradient(45deg, #FFA726, #FFCC00)"
                        : "none",
                  WebkitBackgroundClip: ["F", "r"].includes(letter)
                    ? "text"
                    : "none",
                  WebkitTextFillColor: ["F", "r"].includes(letter)
                    ? "transparent"
                    : "inherit",
                  backgroundClip: ["F", "r"].includes(letter) ? "text" : "none",
                }}
              >
                {letter}
              </motion.span>
            ))}
          </div>

          {/* Central glow orb - simplified version */}
          <motion.div className="ml-3 relative" variants={glowVariants}>
            {/* Main orb */}
            <motion.div
              className="w-3 h-3 bg-gradient-to-br from-purple-500 to-amber-500 rounded-full relative"
              style={{
                boxShadow: "0 0 20px #6C2BD9, 0 0 40px #FFA726",
              }}
            />
          </motion.div>
        </div>

        {/* Floating particles - reduced to 2 particles */}
        {[...Array(2)].map((_, i) => (
          <motion.div
            key={i}
            className={`absolute w-0.5 h-0.5 rounded-full ${
              i === 0 ? "bg-gaming-gold" : "bg-gaming-purpleLight"
            }`}
            style={{
              left: `${20 + i * 30}%`,
              top: `${10 + i * 20}%`,
            }}
            animate={{
              y: [-10, -20, -10],
              x: [-5, 5, -5],
              opacity: [0.3, 0.8, 0.3],
              scale: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 3 + i * 0.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.5,
            }}
          />
        ))}
      </motion.div>
    </motion.div>
  );
}
