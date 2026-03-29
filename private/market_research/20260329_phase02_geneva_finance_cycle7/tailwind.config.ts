import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Swiss Color Palette
        swiss: {
          red: "#DA291C",
          blue: "#003399",
          green: "#005C29",
          ochre: "#D4AF37",
        },
        brand: {
          black: "#1A1A1A",
          white: "#FFFFFF",
          gray: {
            50: "#F9F9F9",
            100: "#F2F2F2",
            200: "#E5E5E5",
            300: "#D4D4D4",
            400: "#A3A3A3",
            500: "#737373",
            600: "#525252",
            700: "#404040",
            800: "#262626",
            900: "#171717",
          }
        }
      },
      fontFamily: {
        sans: ["Inter", "Roboto", "ui-sans-serif", "system-ui"],
        serif: ["ui-serif", "Georgia", "Cambria", "Times New Roman", "Times", "serif"],
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
      },
      borderRadius: {
        'none': '0', // Swiss precision: no rounded corners by default for premium look
      }
    },
  },
  plugins: [],
};
export default config;
