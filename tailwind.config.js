const { nextui } = require("@nextui-org/react");

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
      linearGradientDirections: { // Thêm định nghĩa cho hướng linear gradient
        t: 'to top',
        tr: 'to top right',
        r: 'to right',
        br: 'to bottom right',
        b: 'to bottom',
        bl: 'to bottom left',
        l: 'to left',
        tl: 'to top left',
      },
      colors: {
        'custom-purple': '#EDAFDB', // Mã màu tùy chỉnh
      },
    },
  },
  darkMode: "class",
  plugins: [nextui(), require('@tailwindcss/aspect-ratio')],
}
