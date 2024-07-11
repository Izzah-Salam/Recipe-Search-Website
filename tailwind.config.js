/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        hero: "url('./assets/img/hero.jpg')",
      },

      fontFamily: {
        heading: ["Allura"],
        text: ["Rubik"],
      },

      colors: {
        brown: " #8a4413",
        pink: "#feecdc",
      },
    },
  },
  plugins: [],
};
