/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "./public/index.html"],
  theme: {
    extend: {
      colors: {
        primary: "#1e1136",
        secondary: "#8717ff",
        backg: "#FFFFFF",
      },
    },
  },
  plugins: [],
};
