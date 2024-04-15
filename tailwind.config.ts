import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primary: {
          DEFAULT: '#10B981',
          dark: '#2DD4BF',
        },
        secondary: {
          DEFAULT: '#2563EB',
          dark: '#A3E635',
        },
        // background colors
        'primary-base': {
          DEFAULT: '#FFFFFF',
          dark: '#18181B',
        },
        'secondary-base': {
          DEFAULT: '#F8FAFC',
          dark: '#1D1D20',
        },
        'tertiary-base': {
          DEFAULT: '#F1F5F9',
          dark: '#242427',
        },
        // text colors
        'primary-content': {
          DEFAULT: '#18181B',
          dark: '#FFFFFF',
        },
        'secondary-content': '#A1A1AA',
        // border colors
        'primary-border': '#302F31',
        'secondary-border': '#242427',
      }
    },
  },
  plugins: [require("@tailwindcss/forms"), require("@tailwindcss/typography")],
};
export default config;
