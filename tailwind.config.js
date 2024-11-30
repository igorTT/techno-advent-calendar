/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#646cff',
          hover: '#535bf2',
        },
        dark: {
          DEFAULT: '#242424',
          lighter: '#2f2f2f',
          paper: '#1a1a1a',
        },
      },
    },
  },
  plugins: [],
};
