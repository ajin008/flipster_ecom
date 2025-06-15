import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx}", "./app/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        gold: "#FFD700",
        bg: {
          primary: "var(--color-bg-primary)",
        },
        "verify-bg": "var(--color-gold)",
        text: {
          primary: "var(--color-text-primary)",
          secondary: "var(--color-text-secondary)",
        },
        accent: {
          DEFAULT: "var(--color-accent)",
          muted: "var(--color-accent-muted)",
        },
        muted: "var(--color-muted)",
        border: "var(--color-border)",
        // Eye-Catching Gaming Purple/Pink Palette
        gaming: {
          // Base dark colors
          background: "#0E061C", // Primary background - very dark purple
          cardBg: "#1A0D2F", // Card backgrounds
          searchBg: "#1B1033", // Search box and filters

          // Purple shades (Primary)
          purple: "#6C2BD9", // Primary purple - main accent
          purpleLight: "#A55FFF", // Pinkish violet - CTA buttons
          purpleMuted: "#8B5CF6", // Medium purple

          // Pink shades (Secondary accent)
          pink: "#FF61D2", // Highlight pink - hero banner
          pinkLight: "#FF85FF", // Light pink for gradients
          pinkSoft: "#E879F9", // Soft pink

          // Text colors
          textPrimary: "#FFFFFF", // Pure white - primary text
          textSecondary: "#C3B1E1", // Soft lavender - secondary text
          textMuted: "#D1C5F0", // Alternative muted text

          // Gold/Yellow accents
          gold: "#FFA726", // Gold for coins/currency
          goldBright: "#FFCC00", // Bright gold for highlights
          goldMuted: "#FFB74D", // Muted gold

          // Status colors
          success: "#4CAF50",
          warning: "#FF9800",
          error: "#ff4757",
          info: "#2196F3",
          gaming: {
            gold: "#FFA726", // This works as bg-gaming-gold
          },
        },
      },
      backgroundImage: {
        // Eye-catching gaming gradients
        "gradient-hero": "linear-gradient(135deg, #6C2BD9 0%, #FF61D2 100%)",
        "gradient-button": "linear-gradient(90deg, #A55FFF 0%, #FF85FF 100%)",
        "gradient-button-hover":
          "linear-gradient(90deg, #6C2BD9 0%, #A55FFF 100%)",
        "gradient-card":
          "linear-gradient(135deg, #0E061C 0%, #0E061C 40%, rgba(26, 13, 47, 0.9) 100%)",
        "gradient-purple":
          "linear-gradient(135deg, #6C2BD9 0%, #A55FFF 50%, #C3B1E1 100%)",
        "gradient-pink":
          "linear-gradient(135deg, #FF61D2 0%, #FF85FF 50%, #A55FFF 100%)",
        "gradient-gold": "linear-gradient(135deg, #FFA726 0%, #FFCC00 100%)",
        "gradient-gaming-radial":
          "radial-gradient(ellipse at center, rgba(108, 43, 217, 0.15) 0%, transparent 70%)",
        "gradient-search": "rgba(27, 16, 51, 0.8)",
        // Background variations
        "gradient-primary":
          "linear-gradient(135deg, #0E061C 0%, #0E061C 50%, #1A0D2F 80%, #6C2BD9 100%)",
        "gradient-secondary":
          "linear-gradient(135deg, #1A0D2F 0%, #1B1033 50%, #6C2BD9 100%)",
        "gradient-tertiary":
          "linear-gradient(135deg, #6C2BD9 0%, #1A0D2F 30%, #0E061C 60%, #0E061C 100%)",
      },
      borderRadius: {
        DEFAULT: "var(--radius)",
      },
      height: {
        46: "11.5rem",
      },
      // Gaming-focused glow effects
      boxShadow: {
        "gaming-sm": "0 0 10px rgba(108, 43, 217, 0.3)",
        "gaming-md": "0 0 20px rgba(108, 43, 217, 0.4)",
        "gaming-lg": "0 0 30px rgba(108, 43, 217, 0.5)",
        "gaming-xl": "0 0 40px rgba(108, 43, 217, 0.6)",
        "gaming-glow":
          "0 0 40px rgba(108, 43, 217, 0.4), 0 0 80px rgba(108, 43, 217, 0.2)",

        "pink-sm": "0 0 10px rgba(255, 97, 210, 0.3)",
        "pink-md": "0 0 20px rgba(255, 97, 210, 0.4)",
        "pink-lg": "0 0 30px rgba(255, 97, 210, 0.5)",
        "pink-glow":
          "0 0 40px rgba(255, 97, 210, 0.4), 0 0 80px rgba(255, 97, 210, 0.2)",

        "gold-sm": "0 0 10px rgba(255, 167, 38, 0.3)",
        "gold-md": "0 0 20px rgba(255, 167, 38, 0.4)",
        "gold-lg": "0 0 25px rgba(255, 167, 38, 0.5)",

        "dark-card": "0 8px 32px rgba(14, 6, 28, 0.8)",
        "gaming-card": "0 4px 20px rgba(14, 6, 28, 0.6)",
        "gaming-hover": "0 8px 40px rgba(108, 43, 217, 0.4)",
        "gaming-hover-pink": "0 8px 40px rgba(255, 97, 210, 0.4)",
      },
      // Eye-catching animations
      animation: {
        "gradient-shift": "gradientShift 18s ease infinite",
        float: "float 3s ease-in-out infinite",
        "pulse-gaming": "pulseGlow 2s ease-in-out infinite",
        shimmer: "shimmer 2s infinite",
        "bounce-slow": "bounce 3s infinite",
        "spin-slow": "spin 3s linear infinite",
      },
      // Custom keyframes for gaming effects
      keyframes: {
        gradientShift: {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        pulseGlow: {
          "0%, 100%": { boxShadow: "0 0 20px rgba(108, 43, 217, 0.4)" },
          "50%": { boxShadow: "0 0 40px rgba(255, 97, 210, 0.6)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
      // Enhanced glass morphism
      backdropBlur: {
        xs: "2px",
        sm: "4px",
        md: "8px",
        lg: "12px",
        xl: "16px",
        "2xl": "20px",
        "3xl": "24px",
      },
      // Gaming-specific utilities
      fontSize: {
        "gaming-xl": ["1.75rem", { lineHeight: "2rem", fontWeight: "700" }],
        "gaming-2xl": ["2.25rem", { lineHeight: "2.5rem", fontWeight: "800" }],
        "gaming-3xl": ["3rem", { lineHeight: "3.25rem", fontWeight: "900" }],
      },
      spacing: {
        "18": "4.5rem",
        "88": "22rem",
        "128": "32rem",
      },
    },
  },
  plugins: [],
};

export default config;
