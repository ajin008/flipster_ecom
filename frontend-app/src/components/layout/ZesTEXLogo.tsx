"use client";
import React from "react";
import { motion } from "framer-motion";

export default function ZesTEXLogo() {
  return (
    <motion.h1
      className="font-bold text-2xl md:text-3xl flex items-center sm:text-2xl  lg:text-4xl"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <motion.span className="text-text-primary  relative" whileHover="hover">
        <motion.span
          className="inline-block  sm:text-2xl"
          variants={{
            hover: { y: -2, transition: { duration: 0.2 } },
          }}
        >
          Zes
        </motion.span>
        <motion.span
          className="text-accent font-extrabold inline-block"
          variants={{
            hover: { y: -2, transition: { duration: 0.2, delay: 0.05 } },
          }}
        >
          TEX
        </motion.span>
        <motion.div
          className="h-0.5 bg-accent w-0"
          initial={{ width: 0 }}
          variants={{
            hover: { width: "100%", transition: { duration: 0.3 } },
          }}
          style={{ marginTop: "3px" }}
        />
      </motion.span>
    </motion.h1>
  );
}
