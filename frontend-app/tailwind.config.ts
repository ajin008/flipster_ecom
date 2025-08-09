import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx}", "./app/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // Gaming Color Palette (consolidated and cleaned)
        gaming: {
          // Base colors
          "bg-primary": "#0e061c",
          "bg-card": "#1a0d2f",
          "bg-search": "#1b1033",

          // Purple shades (Primary)
          purple: "#6c2bd9",
          "purple-light": "#a55fff",
          "purple-muted": "#8b5cf6",

          // Pink shades (Secondary)
          pink: "#ff61d2",
          "pink-light": "#ff85ff",
          "pink-soft": "#e879f9",

          // Text colors
          "text-primary": "#ffffff",
          "text-secondary": "#c3b1e1",
          "text-muted": "#d1c5f0",

          // Accent colors
          gold: "#ffa726",
          "gold-bright": "#ffcc00",
          "gold-muted": "#ffb74d",

          // Border and states
          border: "rgba(108, 43, 217, 0.3)",
          "border-light": "rgba(165, 95, 255, 0.5)",
          muted: "rgba(27, 16, 51, 0.8)",
        },

        // System colors (for shadcn/ui compatibility) - using hsl() format
        background: "hsl(252 60% 5%)", // #0e061c
        foreground: "hsl(0 0% 100%)", // #ffffff
        card: {
          DEFAULT: "hsl(252 54% 12%)", // #1a0d2f with opacity handled in CSS
          foreground: "hsl(0 0% 100%)",
        },
        popover: {
          DEFAULT: "hsl(252 60% 5%)",
          foreground: "hsl(0 0% 100%)",
        },
        primary: {
          DEFAULT: "hsl(263 66% 50%)", // #6c2bd9
          foreground: "hsl(0 0% 100%)",
        },
        secondary: {
          DEFAULT: "hsl(252 50% 15%)", // #1b1033
          foreground: "hsl(270 25% 78%)", // #c3b1e1
        },
        muted: {
          DEFAULT: "hsl(252 50% 15%)",
          foreground: "hsl(270 25% 78%)",
        },
        accent: {
          DEFAULT: "hsl(273 100% 68%)", // #a55fff
          foreground: "hsl(0 0% 100%)",
        },
        destructive: {
          DEFAULT: "hsl(356 84% 64%)", // #ff4757
          foreground: "hsl(0 0% 100%)",
        },
        border: "hsl(263 66% 50% / 0.3)", // gaming.border
        input: "hsl(252 50% 15%)", // same as secondary
        ring: "hsl(263 66% 50%)", // same as primary
        chart: {
          "1": "hsl(263 66% 50%)", // gaming.purple
          "2": "hsl(273 100% 68%)", // gaming.purple-light
          "3": "hsl(321 100% 69%)", // gaming.pink
          "4": "hsl(35 100% 57%)", // gaming.gold
          "5": "hsl(270 25% 78%)", // gaming.text-secondary
        },
      },

      backgroundImage: {
        // Gaming gradients (consolidated)
        "gradient-hero": "linear-gradient(135deg, #6c2bd9 0%, #ff61d2 100%)",
        "gradient-primary": "linear-gradient(135deg, #6c2bd9 0%, #ff61d2 100%)",
        "gradient-button": "linear-gradient(90deg, #a55fff 0%, #ff85ff 100%)",
        "gradient-button-hover":
          "linear-gradient(90deg, #6c2bd9 0%, #a55fff 100%)",
        "gradient-card":
          "linear-gradient(135deg, #0e061c 0%, rgba(26, 13, 47, 0.9) 100%)",
        "gradient-purple":
          "linear-gradient(135deg, #6c2bd9 0%, #a55fff 50%, #c3b1e1 100%)",
        "gradient-pink":
          "linear-gradient(135deg, #ff61d2 0%, #ff85ff 50%, #a55fff 100%)",
        "gradient-gold": "linear-gradient(135deg, #ffa726 0%, #ffcc00 100%)",
        "gradient-text":
          "linear-gradient(135deg, #6c2bd9 0%, #a55fff 50%, #ff61d2 100%)",
        "gradient-text-gold":
          "linear-gradient(135deg, #ffa726 0%, #ffcc00 100%)",
        "neon-border": "linear-gradient(135deg, #6c2bd9, #a55fff, #ff61d2)",
        "neon-border-pink":
          "linear-gradient(135deg, #ff61d2, #ff85ff, #a55fff)",
      },

      boxShadow: {
        // Gaming-specific shadows (consolidated)
        "gaming-sm": "0 0 10px rgba(108, 43, 217, 0.3)",
        "gaming-md": "0 0 20px rgba(108, 43, 217, 0.4)",
        "gaming-lg": "0 0 30px rgba(108, 43, 217, 0.5)",
        "gaming-xl": "0 0 40px rgba(108, 43, 217, 0.6)",
        "gaming-hover": "0 8px 40px rgba(108, 43, 217, 0.4)",
        "gaming-button": "0 8px 25px rgba(165, 95, 255, 0.4)",

        // Color-specific shadows
        "pink-sm": "0 0 10px rgba(255, 97, 210, 0.3)",
        "pink-md": "0 0 20px rgba(255, 97, 210, 0.4)",
        "pink-lg": "0 0 30px rgba(255, 97, 210, 0.5)",
        "pink-hover": "0 0 30px rgba(255, 97, 210, 0.5)",

        "gold-sm": "0 0 10px rgba(255, 167, 38, 0.3)",
        "gold-md": "0 0 20px rgba(255, 167, 38, 0.4)",
        "gold-lg": "0 0 25px rgba(255, 167, 38, 0.5)",
        "gold-hover": "0 0 25px rgba(255, 167, 38, 0.5)",

        // Card shadows
        "dark-card": "0 8px 32px rgba(14, 6, 28, 0.8)",
        "gaming-card": "0 4px 20px rgba(14, 6, 28, 0.6)",
        "glass-card": "0 8px 32px rgba(14, 6, 28, 0.8)",
        "focus-ring": "0 0 0 3px rgba(165, 95, 255, 0.1)",
      },

      animation: {
        "gradient-shift": "gradientShift 18s ease infinite",
        float: "float 3s ease-in-out infinite",
        "pulse-gaming": "pulseGaming 2s ease-in-out infinite",
        shimmer: "shimmer 2s infinite",
      },

      keyframes: {
        gradientShift: {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        pulseGaming: {
          "0%, 100%": { boxShadow: "0 0 20px rgba(108, 43, 217, 0.4)" },
          "50%": { boxShadow: "0 0 40px rgba(255, 97, 210, 0.6)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },

      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
        xl: "calc(var(--radius) + 4px)",
      },

      fontSize: {
        "gaming-xl": ["1.75rem", { lineHeight: "2rem", fontWeight: "700" }],
        "gaming-2xl": ["2.25rem", { lineHeight: "2.5rem", fontWeight: "800" }],
        "gaming-3xl": ["3rem", { lineHeight: "3.25rem", fontWeight: "900" }],
      },

      backdropBlur: {
        gaming: "12px",
        "gaming-strong": "20px",
      },

      transitionTimingFunction: {
        gaming: "cubic-bezier(0.4, 0, 0.2, 1)",
      },
    },
  },
  plugins: [],
};

export default config;
