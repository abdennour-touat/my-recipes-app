/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        title: ["dancing script"],
        cardHeader: ["Quicksand"],
      },
    },

    variants: {
      extend: {},
    },
    plugins: [],
  },
  plugins: [],
};
