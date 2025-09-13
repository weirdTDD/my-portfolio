import { Outfit } from "next/font/google";

/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        lightHover: "#fcf4ff",
        darkHover: "#2a004a",
        darkTheme: "#001b2e", 
      },
      boxShadow: {
        "custom-black": "6px 6px 0 rgba(0,0,0,0.7)",
        white: "4px 4px 0 #fff",
      },
      gridTemplateColumns: {
        auto: "repeat(auto-fit, minmax(200px, 1fr))",
      },
      fontFamily: {
        Outfit: ["Outfit", "sans-serif"],
        Ovo: ["Ovo", "serif"],
      },

      // animations
      keyframes: {
  "pop-blob": {
    "0%, 100%": { transform: "scale(1) translate(0, 0)" },
    "25%": { transform: "scale(1.2) translate(20px, -30px)" },
    "50%": { transform: "scale(0.9) translate(-15px, 25px)" },
    "75%": { transform: "scale(1.1) translate(30px, 15px)" },
        },
      },
      animation: {
        "pop-blob": "pop-blob 12s ease-in-out infinite",
      },

      // filters
      blur: {
        20: "20px",
        25: "25px",
      },
    },
  },
  darkMode: "class",
  plugins: [],
};

export default config;
