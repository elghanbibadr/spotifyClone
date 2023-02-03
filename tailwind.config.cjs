/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
      "./src/**/*.{js,jsx}",
  ],
  darkMode: "class",
  theme:{
    extend: {
      colors:{
        primary:"#000",
        secondary:"#fff",
        accent:'#a445ed',
        blackVeryLight:'#1f1f1f',
        lighterAccent:'#470878',
        bodyLightBg:'#f4f4f4',
        headingLight:'#060606',
        textLight:'#3b3a3a'
      },
      borderWidth: {
        myBorder: '1px',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Lora', 'serif'],
        mono: ['Inconsolata', 'monospace']
      },
    },
  },
  plugins: [],
}
