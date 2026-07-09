import type { Config } from "tailwindcss";
import tailwindcssAnimate from "tailwindcss-animate";
import { theme } from "./src/design/theme";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: theme.spacing["4"],
      screens: {
        xl: theme.maxWidth.content,
      },
    },
    colors: {
      transparent: "transparent",
      current: "currentColor",
      white: theme.colors.white,
      ink: theme.colors.ink,
      "ink-muted": theme.colors.inkMuted,
      paper: theme.colors.paper,
      surface: theme.colors.surface,
      rule: theme.colors.rule,
      brand: theme.colors.brand,
      "brand-hover": theme.colors.brandHover,
      "brand-wash": theme.colors.brandWash,
      accent: theme.colors.accent,
      "accent-wash": theme.colors.accentWash,

      // Compatibility aliases while legacy pages remain in the repo.
      "near-black": theme.colors.ink,
      muted: theme.colors.inkMuted,
      border: theme.colors.rule,
      "surface-alt": theme.colors.paper,
      primary: theme.colors.brand,
      faded: theme.colors.inkMuted,
      "dark-transparent": "rgba(0, 0, 0, 0.7)",
      "dark-primary": theme.colors.ink,
      "black-dark": theme.colors.ink,
      "black-mid": theme.colors.inkMuted,
      "black-light": "#767676",
      "white-light": "#E9E9E9",
      gray: {
        primary: theme.colors.paper,
        bg: theme.colors.paper,
        dark: "#A1A1A1",
        border: theme.colors.rule,
      },
      blue: {
        blue: theme.colors.brand,
      },
      empactathon: {
        "bg-green": "#DFECD2",
        primary: "#14A250",
        dark: "#002F23",
      },
      accent_yellow: {
        50: "#FFFBEB",
        100: "#FEF3C7",
        200: "#FDE68A",
        400: "#FBBF24",
        600: "#D97706",
        800: "#92400E",
      },
    },
    fontFamily: {
      display: theme.fontFamily.display,
      body: theme.fontFamily.body,
    },
    fontSize: {
      ...theme.fontSize,
      // Compatibility tokens for legacy routes still on disk.
      heading: "52px",
      title: "32px",
      "sub-title": "24px",
      "mid-title": "20px",
      para: "18px",
      "sub-para": "16px",
      info: "12px",
    },
    spacing: {
      ...theme.spacing,
      section: theme.spacing["20"],
      // Compatibility tokens.
      "v-small": "5px",
      small: "10px",
      standard: "20px",
      block: "50px",
    },
    borderRadius: {
      none: "0",
      DEFAULT: theme.borderRadius.DEFAULT,
      lg: theme.borderRadius.lg,
      full: theme.borderRadius.full,
      md: theme.borderRadius.DEFAULT,
    },
    boxShadow: {
      sm: theme.boxShadow.sm,
      md: theme.boxShadow.md,
      lg: theme.boxShadow.lg,
    },
    maxWidth: {
      content: theme.maxWidth.content,
      prose: theme.maxWidth.prose,
      lead: theme.maxWidth.lead,
    },
    screens: {
      ...theme.screens,
      "brk-1400": theme.screens["2xl"],
      "v-sm": theme.screens.sm,
    },
    extend: {
      gridTemplateColumns: {
        "auto-fit-320": "repeat(auto-fit, minmax(320px, 1fr))",
        "3-320": "repeat(3, minmax(0, 320px))",
        "2-320": "repeat(2, minmax(0, 320px))",
        "auto-fit-600": "repeat(auto-fit, minmax(400px, 600px))",
      },
      gridTemplateRows: {
        "2-250": "repeat(2, 250px)",
        "2-400": "repeat(2, 400px)",
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
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [tailwindcssAnimate],
};

export default config;
