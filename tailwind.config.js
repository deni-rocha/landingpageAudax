/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')
const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    colors: {
      bgDefault: '#0F123F',
      ...colors
    },
    fontFamily: {
      inter: ['Inter', 'sans-serif'],
      ...defaultTheme.fontFamily
    },
    extend: {},
    plugins: []
  }
}
