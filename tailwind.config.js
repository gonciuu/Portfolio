/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx}',
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    '!./node_modules',
  ],
  theme: {
    extend: {
      colors: {
        mainBlue: {
          50: '#fcf3e0',
          50: '#f3f8fb',
          100: '#e0eaf3',
          200: '#d0e0ed',
          300: '#afcce1',
          400: '#89b0d1',
          500: '#6d97c4',
          600: '#5a80b6',
          700: '#4f6fa6',
          800: '#455c88',
          900: '#3b4d6d',
        },
        mainPurple: {
          50: '#ecefff',
          100: '#dde1ff',
          200: '#c2c9ff',
          300: '#9ca4ff',
          400: '#7675ff',
          500: '#6e61ff',
          600: '#5536f5',
          700: '#492ad8',
          800: '#3b25ae',
          900: '#332689',
        },
        mainOrange: {
          50: '#fff5ed',
          100: '#ffe8d4',
          200: '#ffcda8',
          300: '#ffaa70',
          400: '#ff7b37',
          500: '#ff611e',
          600: '#f03c06',
          700: '#c72a07',
          800: '#9e220e',
          900: '#7f1f0f',
        },
      },
    },
  },
  plugins: [],
}
