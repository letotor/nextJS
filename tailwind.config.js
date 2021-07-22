const colors = require("tailwindcss/colors");


module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  // mode: "jit",
  theme: {
    // minHeight: {
    //    '0': '0',
    //    '1/4': '25%',
    //    '1/2': '50%',
    //    '3/4': '75%',
    //    'full': '100%',
    //   },
    // padding: {
    //   DEFAULT: "1rem",
    //   sm: "2rem",
    //   lg: "4rem",
    //   xl: "5rem",
    //   '2xl': "6rem",
    // },
    extend: {
      colors: {
        transparent: "transparent",
        current: "currentColor",
        black: colors.black,
        white: colors.white,
        gray: colors.trueGray,
        indigo: colors.indigo,
        red: colors.rose,
        yellow: colors.amber,
      },
    },
  },
  variants: {},
  plugins: [],
};
