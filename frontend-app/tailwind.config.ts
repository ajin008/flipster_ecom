import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx}", "./app/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: {
          primary: "var(--color-bg-primary)",
        },
        text: {
          primary: "var(--color-text-primary)",
        },
        accent: {
          DEFAULT: "var(--color-accent)",
          muted: "var(--color-accent-muted)",
        },
        muted: "var(--color-muted)",
        border: "var(--color-border)",
        // Updated color palette based on your specifications
        cyber: {
          black: "#000000", // Pure black - primary
          darkBlue: "#0E0F20", // Dark blue - secondary
          palatinateBlue: "#2A3EF4", // Palatinate blue - accent
          lightBlue: "#4A5EF6", // Lighter variation
          brightBlue: "#5A6EF8", // Brightest variation
          mediumBlue: "#1A2B52", // Medium blue for variety
        },
      },
      backgroundImage: {
        // Updated gradients with more black on one side
        "gradient-primary":
          "linear-gradient(135deg, #000000 0%, #000000 50%, #0E0F20 80%, #2A3EF4 100%)",
        "gradient-muted":
          "linear-gradient(135deg, #000000 0%, #000000 40%, rgba(14, 15, 32, 0.8) 100%)",
        "gradient-card":
          "linear-gradient(135deg, #000000 0%, #000000 60%, rgba(14, 15, 32, 0.7) 100%)",
        "gradient-cyber":
          "linear-gradient(135deg, #000000 0%, #000000 30%, #2A3EF4 70%, #4A5EF6 100%)",
        "gradient-cyber-alt":
          "linear-gradient(135deg, #000000 0%, #000000 45%, #2A3EF4 100%)",
        "gradient-subtle":
          "linear-gradient(135deg, #000000 0%, #000000 70%, rgba(14, 15, 32, 0.6) 100%)",
        "gradient-gaming":
          "linear-gradient(135deg, #000000 0%, #000000 35%, #0E0F20 60%, #2A3EF4 85%, #4A5EF6 100%)",
        "gradient-reverse":
          "linear-gradient(135deg, #2A3EF4 0%, #0E0F20 30%, #000000 60%, #000000 100%)",
      },
      borderRadius: {
        DEFAULT: "var(--radius)",
      },
      height: {
        46: "11.5rem",
      },
      // Updated glow effects with new blue palette
      boxShadow: {
        "cyber-sm": "0 0 10px rgba(42, 62, 244, 0.5)",
        "cyber-md": "0 0 20px rgba(42, 62, 244, 0.5)",
        "cyber-lg": "0 0 30px rgba(42, 62, 244, 0.5)",
        "cyber-bright": "0 0 20px rgba(90, 110, 248, 0.5)",
        "cyber-dark": "0 0 20px rgba(14, 15, 32, 0.8)",
        "cyber-glow":
          "0 0 40px rgba(42, 62, 244, 0.3), 0 0 80px rgba(90, 110, 248, 0.1)",
        "palatinate-glow": "0 0 25px rgba(42, 62, 244, 0.6)",
      },
      // Additional utility classes for the new palette
      animation: {
        "gradient-shift": "gradientShift 12s ease infinite",
        float: "float 3s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
