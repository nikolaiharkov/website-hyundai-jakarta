import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        hyundai: {
          primary: '#012C68',   // Deep Blue
          secondary: '#2A4B78', // Medium Blue
          accent: '#576F96',    // Soft Blue
          light: '#F6F8FA',     // Background White-ish
          dark: '#0B1220',      // Text Black-ish
          wa: '#25D366',        // WhatsApp Green
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      }
    },
  },
  plugins: [],
};
export default config;
