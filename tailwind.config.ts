/** @type {import('tailwindcss').Config} */
module.exports = {
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
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        faded: "#555555",
        "dark-transparent": "rgba(0, 0, 0, 0.7)",
        "dark-primary": "#01010A",
        gray: {
          primary: "#F2F2F2",
          bg: "#F2F2F2",
          dark: "#A1A1A1",
          border: "#D9D9D9",
        },
        primary: "#278EED",
        "black-dark": "#01010A",
        "black-mid": "#555555",
        "black-light": "#767676",
        blue: {
          blue: "#3771C8",
        },
        "white-light": "#E9E9E9",

        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",

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
        empactathon: {
          "bg-green": "#DFECD2",
          primary: "#14A250",
          dark: "#002F23",
        },
      },

      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      spacing: {
        "v-small": "5px",
        small: "10px",
        standard: "20px",
        block: "50px",
        section: "60px",
      },
      fontSize: {
        heading: "52px",
        title: "32px",
        "sub-title": "24px",
        "mid-title": "20px",
        para: "18px",
        "sub-para": "16px",
        info: "12px",
      },
      gridTemplateColumns: {
        "auto-fit-320": "repeat(auto-fit, 320px)",
        "3-320": "repeat(3, 320px)",
        "2-320": "repeat(2, 320px)",
        "auto-fit-600": "repeat(auto-fit, minmax(400px,600px))",
      },
      gridTemplateRows: {
        "2-250": "repeat(2, 250px)",
        "2-400": "repeat(2, 400px)",
      },
      screens: {
        "brk-1400": "1400px",
        "v-sm": "480px",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
