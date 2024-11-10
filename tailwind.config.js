/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'azul-acero': '#4682B4',
        azul: '#1468B1',
      },
      fontFamily: {
        custom: ['Railway', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
