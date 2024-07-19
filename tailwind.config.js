/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "custom-yellow": "hsl(47, 88%, 63%)",
        "custom-white": "hsl(0, 0%, 100%)",
        "custom-grey": "hsl(0, 0%, 50%)",
        "custom-black": " hsl(0, 0%, 7%)",
      },
      fontFamily: {
        sans: ["Figtree", ...defaultTheme.fontFamily.sans],
      },
      boxShadow: {
        "3xl": "10px 10px 0px 0px rgba(0,0,0,1)",
      },
    },
  },
  plugins: [],
};
