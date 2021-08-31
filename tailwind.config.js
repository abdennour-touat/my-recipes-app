module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        title: ["dancing script"],
        cardHeader: ['Quicksand']
      },
    },

    variants: {
      extend: {},
    },
    plugins: [],
  },
};
