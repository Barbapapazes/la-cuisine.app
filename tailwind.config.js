module.exports = {
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#FF0F7B",
        secondary: "#F89B29",
        tertiary: "#FC4C57",
        grey: "#ADADAD",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
