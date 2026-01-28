/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#13155b",
          50: "#eef0ff",
          100: "#dfe3ff",
          200: "#c0c7ff",
          300: "#96a1ff",
          400: "#6a77ff",
          500: "#3f4dff",
          600: "#2b35db",
          700: "#1f27b1",
          800: "#171d85",
          900: "#13155b",
        },
      },
    },
  },
  plugins: [],
};
