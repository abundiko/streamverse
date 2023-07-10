/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        background: {
          light: "#fff",
          dark: "#111"
        },
        primary: {
          light: "#ca3433",
          dark: "#ff1a1a"
        },
        text: {
          light: "#eee",
          dark: "#111"
        }
      }
    },
    transitionDuration: 0.4
  },
  plugins: []
};
