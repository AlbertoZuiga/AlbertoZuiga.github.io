/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#e6f3f9",
          100: "#cce7f3",
          200: "#99cfe7",
          300: "#66b7db",
          400: "#339fcf",
          500: "#0073ba",
          600: "#005c95",
          700: "#004570",
          800: "#002e4a",
          900: "#001725",
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
