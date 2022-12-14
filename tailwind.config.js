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
      breakpointGridLg: '1016px',
      breakpointGridMd: { min: '750px', max: '1026px' },
      xs: { max: '475px' },
      ...defaultTheme.screens
    },
    colors: {
      btnColorGreen: '#0DE67B',
      bgDefault: '#0F123F',
      textPrimary: '#FFFFFF',
      textSecondary: '#8794BA',
      bgInput: '#F6F6F6',
      ...colors
    },
    fontFamily: {
      inter: ['Inter', 'sans-serif'],
      roboto: ['Roboto', 'sans-serif'],
      ...defaultTheme.fontFamily
    },
    extend: {
      keyframes: {
        menuDelayIn: {
          from: { right: '-360px' },
          to: { right: '0px' }
        },
        menuDelayOut: {
          from: { right: '0' },
          to: { right: '-360px' }
        }
      },
      animation: {
        menuDelayIn: 'menuDelayIn .5s ease',
        menuDelayOut: 'menuDelayOut .5s ease-out'
      }
    },
    plugins: []
  }
}
