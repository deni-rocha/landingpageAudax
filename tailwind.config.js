/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')
const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    screens: {
      xs: { max: '475px' },
      ...defaultTheme.screens
    },
    colors: {
      btnColorGreen: '#0DE67B',
      bgDefault: '#0F123F',
      ...colors
    },
    fontFamily: {
      inter: ['Inter', 'sans-serif'],
      ...defaultTheme.fontFamily
    },
    extend: {
      keyframes: {
        menuDelayIn: {
          from: { right: '-360px' },
          to: { right: '0px' }
        }
      },
      animation: {
        menuDelayIn: 'menuDelayIn .5s ease'
      }
    },
    plugins: []
  }
}
