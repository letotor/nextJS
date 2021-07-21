const colors = require("tailwindcss/colors");


module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  // mode: "jit",
  theme: {
    extend: {
      colors: {
        sky: colors.emerald,
        cyan: colors.cyan,
      },
    },
  },
  variants: {},
  plugins: [],
};
