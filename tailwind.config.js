module.exports = {
  purge: [
    "./pages/**/*.tsx",
    "./pages/**/*.jsx",
    "./components/**/*.tsx",
    "./components/**/*.jsx",
    "./public/index.html"
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontSize: {
      xxs: "0.65rem",
      xs: "0.75rem",
      sm: "0.875rem",
      base: "1rem",
      lg: "1.125rem",
      xl: "1.25rem",
      "2xl": "1.5rem",
      "3xl": "1.875rem",
      "4xl": "2.25rem",
      "5xl": "3rem",
      "6xl": "4rem"
    },
    extend: {}
  },
  variants: {
    extend: {}
  },
  plugins: []
}
