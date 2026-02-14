/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#062316', // Deep dark green background
        card: 'rgba(255, 255, 255, 0.05)', // Glass effect base
        accent: '#C5CEB8', // Light greenish text
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'], // You may need to import this font in index.css
      }
    },
  },
  plugins: [],
}