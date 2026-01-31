/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#1b1f6a",
          50: "#eef0ff",
          100: "#e0e3ff",
          200: "#c7cdff",
          300: "#a5aaff",
          400: "#8278ff",
          500: "#6b5cff",
          600: "#5842f5",
          700: "#4730d8",
          800: "#3729ae",
          900: "#1b1f6a",
        },
      },
    },
  },
  plugins: [],
};
