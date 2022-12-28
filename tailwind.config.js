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
      maxWidth: {
        '4xl': '60rem',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
      colors: {
        'sweety-pink': {
          50: '#fff3fd',
          100: '#ffe6fd',
          200: '#ffccfa',
          300: '#ffa3f4',
          400: '#ff6deb',
          500: '#ff30ea',
          600: '#e316ca',
          700: '#bd0ea4',
          800: '#9a0e85',
          900: '#7e116b',
        },
        'sweety-purple': {
          50: '#faf4ff',
          100: '#f5e7ff',
          200: '#ebceff',
          300: '#d99aff',
          400: '#cc74fe',
          500: '#b540f5',
          600: '#9b20d9',
          700: '#8217b4',
          800: '#6d1593',
          900: '#5d1778',
        },
        'sweety-gray': {
          50: '#f7f7f7',
          100: '#e3e3e3',
          200: '#c8c8c8',
          300: '#a4a4a4',
          400: '#818181',
          500: '#666666',
          600: '#515151',
          700: '#434343',
          800: '#252525',
          900: '#151515',
        },
        'sweety-blue': {
          50: '#edf8ff',
          100: '#d7efff',
          200: '#b9e4ff',
          300: '#88d4ff',
          400: '#50bbff',
          500: '#289bff',
          600: '#1b82ff',
          700: '#0a64eb',
          800: '#0f50be',
          900: '#134795',
        },
        'sweety-orange': {
          50: '#fff3ed',
          100: '#ffCC70',
          200: '#ffc5a8',
          300: '#ff9c71',
          400: '#ff6230',
          500: '#fe4111',
          600: '#ef2707',
          700: '#c61708',
          800: '#9d150f',
          900: '#7e1510',
        },
      },
    },
    keyframes: {
      wave: {
        '0%': {
          transform: 'rotate(0deg)',
        },
        ' 10%': {
          transform: 'rotate(14deg)',
        } /* The following five values can be played with to make the waving more or less extreme */,
        '20%': {
          transform: 'rotate(-8deg)',
        },
        '30%': {
          transform: ' rotate(14deg)',
        },
        '40%': {
          transform: 'rotate(-4deg)',
        },
        '50%': {
          transform: 'rotate(10deg)',
        },
        '60%': {
          transform: 'rotate(0deg)',
        } /* Reset for the last half to pause */,
        '100% ': {
          transform: 'rotate(0deg)',
        },
      },
    },
    animation: {
      wave: 'wave 2.5s ease-in-out infinite',
    },
  },
  plugins: [],
}
