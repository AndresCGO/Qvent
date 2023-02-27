/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./build/*.html","./build/js/*.js",],
  theme: {
    extend: {
      colors:{
        'cream':'#e5d9b6',
        'green-grass':'#5f8d4e',
        'brown':'#3c2a21',
        'green-pine':'#285430',
        'light-gray': '#D9D9D9',
        'black-80': '#00000080',
      }
    },
  },
  plugins: [],
}
