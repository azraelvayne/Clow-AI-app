/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#fdf4ff',
          100: '#fae8ff',
          200: '#f5d0fe',
          300: '#e9b0f0',
          400: '#d87fd0',
          500: '#c44fb0',
          900: '#4B1535'
        },
        sakura: {
          50: '#fef2f2',
          100: '#ffe1e1',
          200: '#ffc9c9',
          300: '#fea3a3',
          400: '#fc7676',
          500: '#f43f5e',
          900: '#881337'
        },
        mauve: {
          50: '#f5f3ff',
          100: '#ede9fe',
          200: '#ddd6fe',
          300: '#c4b5fd',
          400: '#9f84c7',
          500: '#8b7aa8',
          900: '#3a345b'
        }
      },
    },
  },
  plugins: [],
};