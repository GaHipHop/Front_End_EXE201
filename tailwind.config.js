const { nextui } = require("@nextui-org/react");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        'poiret-one': ['"Poiret One"', 'cursive'],
        'plus-jakarta': ['"Plus Jakarta Sans"', 'sans-serif'],
        'open-sans': ['"Open Sans"', 'sans-serif'],
        'poetsen-one' : ['"Poetsen One"', 'sans-serif']
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()]
}
