/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        serif: ["Cormorant Garamond", "serif"],
        lato:[ "Lato", "sans-serif"],
      },
      fontWeight: {
        normal: 400,
      },
      fontStyle: {
        normal: "normal",
      },
    },
  },
  plugins: [],
};
