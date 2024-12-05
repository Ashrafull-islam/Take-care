import type { Config } from "tailwindcss";
import { lora } from "./app/layout";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ['var(--font-lexend)', "sans-serif"],
        lora: ['var(--font-castoro)', "serif"],
        },
    },
  },
  plugins: [require('daisyui')],
} satisfies Config;
