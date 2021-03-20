const colors = require('tailwindcss/colors')

module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      primary: colors.blue,
      white: colors.white,
      black: colors.black,
      gray: colors.gray
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
