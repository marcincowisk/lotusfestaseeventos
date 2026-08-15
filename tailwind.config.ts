import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./data/**/*.{ts,tsx}",
  ],
  theme: {
    // Nota: não usamos a classe utilitária `container` do Tailwind — o
    // wrapper de largura máxima é `.container-lotus` (ver app/globals.css),
    // consumido via components/ui/Container.tsx.
    extend: {
      colors: {
        bg: "rgb(var(--color-bg) / <alpha-value>)",
        surface: "rgb(var(--color-surface) / <alpha-value>)",
        "surface-raised": "rgb(var(--color-surface-raised) / <alpha-value>)",
        primary: "rgb(var(--color-primary) / <alpha-value>)",
        "primary-foreground": "rgb(var(--color-primary-foreground) / <alpha-value>)",
        text: "rgb(var(--color-text) / <alpha-value>)",
        muted: "rgb(var(--color-muted) / <alpha-value>)",
        border: "rgb(var(--color-border) / <alpha-value>)",
        accent: "rgb(var(--color-accent) / <alpha-value>)",
        success: "rgb(var(--color-success) / <alpha-value>)",
        error: "rgb(var(--color-error) / <alpha-value>)",
      },
      fontFamily: {
        display: ["var(--font-display)", "serif"],
        sans: ["var(--font-sans)", "sans-serif"],
      },
      fontSize: {
        display: ["clamp(2.75rem, 2rem + 3.5vw, 6rem)", { lineHeight: "1.02", letterSpacing: "-0.02em" }],
        h1: ["clamp(2.25rem, 1.7rem + 2.5vw, 4rem)", { lineHeight: "1.05", letterSpacing: "-0.015em" }],
        h2: ["clamp(1.75rem, 1.45rem + 1.3vw, 2.75rem)", { lineHeight: "1.1", letterSpacing: "-0.01em" }],
        h3: ["clamp(1.375rem, 1.2rem + 0.7vw, 1.875rem)", { lineHeight: "1.2" }],
        "body-lg": ["clamp(1.0625rem, 1rem + 0.3vw, 1.25rem)", { lineHeight: "1.6" }],
        body: ["1rem", { lineHeight: "1.65" }],
        small: ["0.875rem", { lineHeight: "1.5" }],
        label: ["0.75rem", { lineHeight: "1.4", letterSpacing: "0.08em" }],
      },
      spacing: {
        18: "4.5rem",
        22: "5.5rem",
        30: "7.5rem",
      },
      maxWidth: {
        prose: "68ch",
      },
      borderRadius: {
        DEFAULT: "2px",
        sm: "1px",
        md: "4px",
        lg: "6px",
        xl: "8px",
      },
      boxShadow: {
        subtle: "0 1px 2px rgb(0 0 0 / 0.08)",
        soft: "0 8px 30px rgb(0 0 0 / 0.12)",
        ring: "0 0 0 2px rgb(var(--color-primary) / 0.55)",
      },
      transitionTimingFunction: {
        premium: "cubic-bezier(0.16, 1, 0.3, 1)",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.9s cubic-bezier(0.16, 1, 0.3, 1) forwards",
        "fade-in": "fade-in 1.1s ease forwards",
        marquee: "marquee 32s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;
