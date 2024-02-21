/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      height:{
        800: '800px',
        950: '950px',
      },
      width:{
        450: '450px',
      },

    },
  },
  plugins: [],
}