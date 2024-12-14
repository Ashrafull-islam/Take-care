import daisyui from "daisyui";
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class", // Enable class-based dark mode
  theme: {
    extend: {
      fontFamily: {
        inter: ["var(--font-lexend)", "sans-serif"],
        lora: ["var(--font-castoro)", "serif"],
      },
    },
  },
  plugins: [daisyui],
  daisyui: {
    themes: ['light'], // Include both light and dark themes
  },
};

export default config;
