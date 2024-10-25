/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#fffee7",
          100: "#fffec1",
          200: "#fff886",
          300: "#ffec41",
          400: "#ffdb0d",
          500: "#ffcc00",
          600: "#d19500",
          700: "#a66a02",
          800: "#89530a",
          900: "#74430f",
          950: "#442304",
        },
        secondary: {
          50: "#effefb",
          100: "#c8fff3",
          200: "#90ffe6",
          300: "#51f7d9",
          400: "#1de4c6",
          500: "#05c7ad",
          600: "#00a18e",
          700: "#058073",
          800: "#0a655d",
          900: "#0e534d",
          950: "#00403d",
        },
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
};
