"use client";
import React from "react";

export default function ZesTEXLogo() {
  return (
    <div className="relative font-bold text-2xl md:text-3xl lg:text-4xl cursor-pointer select-none">
      {/* Background glow effect - static */}
      <div className="absolute inset-0 bg-gradient-purple rounded-lg blur-xl opacity-20" />

      {/* Main logo container */}
      <div className="relative flex items-center justify-center">
        {/* Static sparkle elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-2 -left-2 w-1 h-1 bg-gaming-gold rounded-full" />
          <div className="absolute -bottom-2 -right-2 w-1.5 h-1.5 bg-gaming-purpleLight rounded-full" />
        </div>

        {/* Logo text */}
        <div className="flex items-center relative z-10">
          {/* FlipSter letters */}
          <div className="flex">
            {["F", "l", "i", "p", "S", "t", "e", "r"].map((letter, index) => (
              <span
                key={index}
                className={`inline-block ${
                  letter === "F" || letter === "S" || letter === "r"
                    ? "text-gaming-purpleLight font-black"
                    : "text-gaming-textPrimary"
                }`}
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
              </span>
            ))}
          </div>

          {/* Central glow orb - static */}
          <div className="ml-3 relative">
            <div
              className="w-3 h-3 bg-gradient-to-br from-purple-500 to-amber-500 rounded-full relative"
              style={{
                boxShadow: "0 0 20px #6C2BD9, 0 0 40px #FFA726",
              }}
            />
          </div>
        </div>

        {/* Static floating particles */}
        {[...Array(2)].map((_, i) => (
          <div
            key={i}
            className={`absolute w-0.5 h-0.5 rounded-full ${
              i === 0 ? "bg-gaming-gold" : "bg-gaming-purpleLight"
            }`}
            style={{
              left: `${20 + i * 30}%`,
              top: `${10 + i * 20}%`,
            }}
          />
        ))}
      </div>
    </div>
  );
}
