/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
      "./src/**/*.{js,jsx}",
  ],
  theme:{
    extend: {
      colors:{
        primary:"#000",
        secondary:"#fff",
        accent:'#a445ed',
        blackVeryLight:'#1f1f1f',
        lighterAccent:'#470878'
      },
      borderWidth: {
        myBorder: '1px',
      },

    },
  },
  plugins: [],
}
