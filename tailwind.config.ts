import type { Config } from "tailwindcss";

const config: Config = {
    darkMode: ["class"],
    content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
  		screens: {
  			'3xl': '1920px',
  			'4xl': '2560px'
  		},
  		fontFamily: {
  			bebas: [
  				'var(--bebas-neue)'
  			],
  			oswald: [
  				'var(--oswald)'
  			]
  		},
  		backgroundImage: {
  			'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
  			'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))'
  		},
  		animation: {
  			glow: 'glow 5s infinite'
  		},
  		keyframes: {
  			glow: {
  				'0%': {
  					filter: 'saturate(100%)'
  				},
  				'50%': {
  					filter: 'saturate(0%)'
  				},
  				'100%': {
  					filter: 'saturate(100%)'
  				}
  			}
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
  		colors: {}
  	}
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
