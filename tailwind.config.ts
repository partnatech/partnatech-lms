import type { Config } from "tailwindcss"

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#2DD4BF",
        secondary: "#A3E635",
        background: {
          primary: "#18181B",
          secondary: "#1D1D20",
          tertiary: "#242427",
        },
        typography: {
          primary: "#FFFFFF",
          secondary: "#A1A1AA",
        },
        line: {
          primary: "#302F31",
          secondary: "#242427",
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [require("@tailwindcss/forms"), require("@tailwindcss/typography")],
}
export default config
