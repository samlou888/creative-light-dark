
import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "fade-in": {
          "0%": { opacity: "0", transform: "translateY(10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "pulse-glow": {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.7" },
        },
        "slide-up-fade": {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        // Automation-specific animations
        "automation-fade-in": {
          "0%": { opacity: "0", transform: "translateY(10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "automation-slide-in": {
          "0%": { opacity: "0", transform: "translateX(-20px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        "automation-scale-in": {
          "0%": { opacity: "0", transform: "scale(0.95)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
        // Creative-specific animations
        "creative-fade-in": {
          "0%": { opacity: "0", transform: "translateY(15px) scale(0.98)" },
          "100%": { opacity: "1", transform: "translateY(0) scale(1)" },
        },
        "creative-glow-pulse": {
          "0%": { boxShadow: "0 0 5px rgba(149,76,233,0.5), 0 0 10px rgba(149,76,233,0.3)" },
          "50%": { boxShadow: "0 0 15px rgba(149,76,233,0.8), 0 0 20px rgba(149,76,233,0.5)" },
          "100%": { boxShadow: "0 0 5px rgba(149,76,233,0.5), 0 0 10px rgba(149,76,233,0.3)" },
        },
        "creative-float": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        // Academy-specific animations
        "academy-fade-in": {
          "0%": { opacity: "0", transform: "translateY(8px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "academy-slide-in": {
          "0%": { opacity: "0", transform: "translateX(-15px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        "academy-bounce": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-5px)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-in": "fade-in 0.5s ease-out forwards",
        "pulse-glow": "pulse-glow 3s infinite",
        "slide-up-fade": "slide-up-fade 0.8s cubic-bezier(0.25, 1, 0.5, 1) 0.2s forwards",
        // Automation animations
        "automation-fade-in": "automation-fade-in 0.4s ease-out forwards",
        "automation-slide-in": "automation-slide-in 0.4s ease-out forwards",
        "automation-scale-in": "automation-scale-in 0.4s ease-out forwards",
        // Creative animations
        "creative-fade-in": "creative-fade-in 0.5s ease-out forwards",
        "creative-glow-pulse": "creative-glow-pulse 3s infinite",
        "creative-float": "creative-float 5s ease-in-out infinite",
        // Academy animations
        "academy-fade-in": "academy-fade-in 0.45s ease-out forwards",
        "academy-slide-in": "academy-slide-in 0.45s ease-out forwards",
        "academy-bounce": "academy-bounce 2.5s ease-in-out infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
