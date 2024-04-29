/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./formkit.config.js"
  ],
  theme: {
    extend: {
      fontFamily: {
        "principal": ['"Josefin Sans"', 'sans-serif']
      },
      colors: {
        "tolko-red": "rgb(204, 0, 50)"
      },
      backgroundImage: {
        "close-menu": "url('../img/icon-close.svg')",
        "open-menu": "url('../img/icon-hamburger.svg')"
      }
    },
  },
  plugins: [],
}