/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    extend: {
      colors: {
        mustard: '#FFDB58',
      },
      fontFamily: {
        custom: ['Lobster', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
