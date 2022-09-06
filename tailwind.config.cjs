/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,tsx,ts}"],
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
