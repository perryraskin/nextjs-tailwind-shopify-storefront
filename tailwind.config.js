module.exports = {
  purge: [
    "./pages/**/*.tsx",
    "./pages/**/*.jsx",
    "./components/**/*.tsx",
    "./components/**/*.jsx",
    "./public/index.html",
    "./styles/tailwind.css",
  ],
  theme: {
    spinner: (theme) => ({
      default: {
        color: "#ffffff", // color you want to make the spinner
        size: "1em", // size of the spinner (used for both width and height)
        border: "2px", // border-width of the spinner (shouldn't be bigger than half the spinner's size)
        speed: "500ms", // the speed at which the spinner should rotate
      },
      // md: {
      //   color: theme('colors.red.500', 'red'),
      //   size: '2em',
      //   border: '2px',
      //   speed: '500ms',
      // },
    }),
    extend: {},
  },
  variants: {
    backgroundColor: ["responsive", "hover", "focus", "active"],
    textColor: ["responsive", "hover", "focus", "active"],
    spinner: ["responsive"],
  },
  plugins: [
    //require("tailwindcss-dark-mode")(),
    require("tailwindcss-spinner")(),
    //require('tailwindcss-plugin-heroicons')({variants: ['responsive', 'hover']})
  ],
};
