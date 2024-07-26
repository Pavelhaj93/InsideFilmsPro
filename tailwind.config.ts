import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      animation: {
        glow: "glow 5s infinite",
      },
      keyframes: {
        glow: {
          "0%": { filter: "saturate(100%)" },
          "50%": { filter: "saturate(0%)" },
          "100%": { filter: "saturate(100%)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
